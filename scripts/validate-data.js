#!/usr/bin/env node

/**
 * Healthcare Spending Data Validation Script
 * Validates data against schema and mathematical constraints
 */

const fs = require('fs');
const path = require('path');

// Configuration
const DATA_PATH = path.join(__dirname, '../data/healthcare-spending-2023.json');
const TOLERANCE_PERCENTAGE = 1.0; // Allow 1% deviation for sums
const PERCENTAGE_TOLERANCE = 0.5; // Allow 0.5% deviation for percentage totals

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

class ValidationReport {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.validationsPassed = 0;
    this.validationsFailed = 0;
  }

  error(message, context = {}) {
    this.errors.push({ message, context });
    this.validationsFailed++;
  }

  warning(message, context = {}) {
    this.warnings.push({ message, context });
  }

  pass(message) {
    this.validationsPassed++;
  }

  print() {
    console.log('\n' + '='.repeat(80));
    console.log('HEALTHCARE SPENDING DATA VALIDATION REPORT');
    console.log('='.repeat(80) + '\n');

    if (this.errors.length > 0) {
      console.log(`${colors.red}ERRORS (${this.errors.length}):${colors.reset}`);
      this.errors.forEach((err, idx) => {
        console.log(`\n${idx + 1}. ${err.message}`);
        if (Object.keys(err.context).length > 0) {
          console.log(`   Context: ${JSON.stringify(err.context, null, 2)}`);
        }
      });
      console.log();
    }

    if (this.warnings.length > 0) {
      console.log(`${colors.yellow}WARNINGS (${this.warnings.length}):${colors.reset}`);
      this.warnings.forEach((warn, idx) => {
        console.log(`\n${idx + 1}. ${warn.message}`);
        if (Object.keys(warn.context).length > 0) {
          console.log(`   Context: ${JSON.stringify(warn.context, null, 2)}`);
        }
      });
      console.log();
    }

    console.log(`${colors.blue}SUMMARY:${colors.reset}`);
    console.log(`   Validations passed: ${colors.green}${this.validationsPassed}${colors.reset}`);
    console.log(`   Validations failed: ${colors.red}${this.validationsFailed}${colors.reset}`);
    console.log(`   Warnings: ${colors.yellow}${this.warnings.length}${colors.reset}`);

    console.log('\n' + '='.repeat(80));

    if (this.errors.length === 0) {
      console.log(`${colors.green}All validations passed!${colors.reset}`);
      return true;
    } else {
      console.log(`${colors.red}Validation failed with ${this.errors.length} error(s)${colors.reset}`);
      return false;
    }
  }
}

function validatePayerBreakdown(category, report) {
  const { payerBreakdown } = category;
  
  if (!payerBreakdown) {
    report.error(`Missing payer breakdown`, { categoryId: category.id });
    return;
  }

  const payers = ['privateInsurance', 'medicare', 'medicaid', 'outOfPocket', 'other'];
  const categoryTotal = category.totalSpending.amount;

  for (const payer of payers) {
    if (!payerBreakdown[payer]) {
      report.error(`Missing payer: ${payer}`, { categoryId: category.id });
      continue;
    }

    const payerData = payerBreakdown[payer];

    if (typeof payerData.amount !== 'number') {
      report.error(`Invalid amount for ${payer}`, { categoryId: category.id });
    }
    if (typeof payerData.percentage !== 'number') {
      report.error(`Invalid percentage for ${payer}`, { categoryId: category.id });
    }
    if (!Array.isArray(payerData.sources) || payerData.sources.length === 0) {
      report.error(`Missing sources for ${payer}`, { categoryId: category.id });
    }
  }

  const totalPayerAmount = payers.reduce((sum, payer) => {
    return sum + (payerBreakdown[payer]?.amount || 0);
  }, 0);

  const amountDiff = Math.abs(totalPayerAmount - categoryTotal);
  const allowedDeviation = categoryTotal * (TOLERANCE_PERCENTAGE / 100);

  if (amountDiff > allowedDeviation) {
    report.error(`Payer amounts don't sum to total`, {
      categoryId: category.id,
      total: categoryTotal,
      sum: totalPayerAmount,
      diff: amountDiff
    });
  } else {
    report.pass(`Payer amounts valid for ${category.name}`);
  }

  const totalPercentage = payers.reduce((sum, payer) => {
    return sum + (payerBreakdown[payer]?.percentage || 0);
  }, 0);

  if (Math.abs(totalPercentage - 100) > PERCENTAGE_TOLERANCE) {
    report.error(`Percentages don't sum to 100%`, {
      categoryId: category.id,
      total: totalPercentage
    });
  } else {
    report.pass(`Payer percentages valid for ${category.name}`);
  }
}

function validateSources(sources, context, report) {
  if (!Array.isArray(sources) || sources.length === 0) {
    report.error(`Missing sources`, context);
    return;
  }

  const required = ['organization', 'title', 'url', 'publicationDate', 'accessDate', 'dataYear'];

  sources.forEach((source, idx) => {
    required.forEach(field => {
      if (!source[field]) {
        report.error(`Source missing ${field}`, { ...context, sourceIdx: idx });
      }
    });

    if (source.dataYear && source.dataYear < 2022) {
      report.warning(`Old source data`, { ...context, year: source.dataYear });
    }
  });

  report.pass(`Sources validated`);
}

function validateCategory(category, report, level = 0) {
  if (!category.id) report.error(`Missing ID`, { name: category.name });
  if (!category.name) report.error(`Missing name`, { id: category.id });
  if (category.level !== level) {
    report.error(`Level mismatch`, { id: category.id, expected: level, actual: category.level });
  }

  if (!category.totalSpending) {
    report.error(`Missing totalSpending`, { id: category.id });
  } else {
    if (typeof category.totalSpending.amount !== 'number') {
      report.error(`Invalid amount`, { id: category.id });
    }
    validateSources(category.totalSpending.sources, { categoryId: category.id, field: 'totalSpending' }, report);
  }

  validatePayerBreakdown(category, report);

  if (category.children && category.children.length > 0) {
    const childrenTotal = category.children.reduce((sum, child) => {
      return sum + (child.totalSpending?.amount || 0);
    }, 0);

    const parentTotal = category.totalSpending.amount;
    const diff = Math.abs(childrenTotal - parentTotal);
    const allowedDeviation = parentTotal * (TOLERANCE_PERCENTAGE / 100);

    if (diff > allowedDeviation) {
      report.error(`Children don't sum to parent`, {
        id: category.id,
        parent: parentTotal,
        children: childrenTotal,
        diff: diff
      });
    } else {
      report.pass(`Children sum correctly for ${category.name}`);
    }

    category.children.forEach(child => {
      if (typeof child.percentageOfParent !== 'number') {
        report.error(`Missing percentageOfParent`, { id: child.id });
      }
      validateCategory(child, report, level + 1);
    });
  }

  const validQualities = ['high', 'medium', 'estimated'];
  if (!validQualities.includes(category.dataQuality)) {
    report.error(`Invalid dataQuality`, { id: category.id, value: category.dataQuality });
  }
}

function validateMetadata(metadata, report) {
  const required = ['title', 'version', 'lastUpdated', 'dataYear'];
  required.forEach(field => {
    if (!metadata[field]) report.error(`Metadata missing ${field}`);
  });

  if (metadata.totalGDP) {
    validateSources(metadata.totalGDP.sources, { field: 'totalGDP' }, report);
  }
  if (metadata.totalPopulation) {
    validateSources(metadata.totalPopulation.sources, { field: 'totalPopulation' }, report);
  }

  report.pass('Metadata validated');
}

function main() {
  const report = new ValidationReport();

  console.log(`${colors.blue}Reading: ${DATA_PATH}${colors.reset}\n`);

  let data;
  try {
    const fileContent = fs.readFileSync(DATA_PATH, 'utf8');
    data = JSON.parse(fileContent);
  } catch (error) {
    console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
    process.exit(1);
  }

  validateMetadata(data.metadata, report);
  validateCategory(data.root, report);

  if (data.glossary) {
    Object.entries(data.glossary).forEach(([term, def]) => {
      if (!def.definition) report.error(`Glossary term missing definition`, { term });
      if (!def.sources) report.error(`Glossary term missing sources`, { term });
    });
    report.pass('Glossary validated');
  }

  if (data.methodology) {
    ['dataCollection', 'categorization', 'limitations'].forEach(field => {
      if (!data.methodology[field]) report.error(`Methodology missing ${field}`);
    });
    report.pass('Methodology validated');
  }

  const success = report.print();
  process.exit(success ? 0 : 1);
}

main();
