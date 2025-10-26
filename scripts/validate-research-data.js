#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/healthcare_spends_research.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log('📊 DATA VALIDATION REPORT');
console.log('='.repeat(60) + '\n');

const children = data.root.children;
console.log(`Found ${children.length} Level 1 categories\n`);

const results = [];
children.forEach(cat => {
  const payers = ['privateInsurance', 'medicare', 'medicaid', 'outOfPocket', 'other'];
  const pb = cat.payerBreakdown;
  
  if (!pb) {
    results.push({
      name: cat.name,
      total: cat.totalSpending.amount,
      hasPayerData: false
    });
    return;
  }
  
  let amountSum = 0;
  let percentSum = 0;
  let missingPayers = [];
  
  payers.forEach(payer => {
    if (pb[payer] && typeof pb[payer].amount === 'number') {
      amountSum += pb[payer].amount;
      percentSum += pb[payer].percentage || 0;
    } else if (!pb[payer]) {
      missingPayers.push(payer);
    }
  });
  
  const amountDiff = Math.abs(amountSum - cat.totalSpending.amount);
  const percentDiff = Math.abs(percentSum - 100);
  
  results.push({
    name: cat.name,
    total: cat.totalSpending.amount,
    amountSum: amountSum.toFixed(1),
    amountDiff: amountDiff.toFixed(1),
    percentSum: percentSum.toFixed(1),
    percentDiff: percentDiff.toFixed(1),
    amountOK: amountDiff < (cat.totalSpending.amount * 0.01),
    percentOK: percentDiff < 0.5,
    missingPayers,
    hasPayerData: missingPayers.length === 0
  });
});

results.forEach(r => {
  console.log(`${r.name} ($${r.total}B)`);
  console.log('  ' + '-'.repeat(50));
  
  if (!r.hasPayerData) {
    console.log(`  ❌ Missing: ${r.missingPayers.join(', ')}`);
  } else {
    console.log(`  Amounts: $${r.amountSum}B (diff: $${r.amountDiff}B) ${r.amountOK ? '✅' : '❌'}`);
    console.log(`  Percents: ${r.percentSum}% (diff: ${r.percentDiff}%) ${r.percentOK ? '✅' : '❌'}`);
  }
  console.log();
});

console.log('='.repeat(60));
console.log('SUMMARY:');
const withData = results.filter(r => r.hasPayerData).length;
const correct = results.filter(r => r.hasPayerData && r.amountOK && r.percentOK).length;
console.log(`With payer data: ${withData}/${results.length}`);
console.log(`Math correct: ${correct}/${withData}`);
console.log(`Completion: ${(withData / results.length * 100).toFixed(0)}%`);
