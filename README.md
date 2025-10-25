# Healthcare Spending Visualization

Interactive visualization of U.S. healthcare spending with hierarchical data structure and validated sources.

## Project Status

**Current Progress:** ~40% Complete

### ✅ Completed
- Data schema (TypeScript definitions)
- Root node (Level 0) with validated totals
- Validation script with mathematical constraints
- Project structure and documentation

### 🚧 In Progress
- Level 1 categories (10 major spending categories)
- Level 2 subcategories for key areas

### 📋 Upcoming
- Interactive visualization website
- Data gap analysis and filling
- State-by-state breakdowns

## Quick Start

### Validate Data
```bash
npm run validate
```

### Project Structure
```
├── data/
│   └── healthcare-spending-2023.json    # Main data file
├── scripts/
│   └── validate-data.js                 # Validation script
├── src/
│   └── types.ts                         # TypeScript schema
└── docs/
    └── execution-plan.md                # Detailed roadmap
```

## Data Quality Standards

**Tier 1 Sources:** Government agencies (CMS, CDC, GAO)  
**Tier 2 Sources:** Research orgs (KFF, Milbank, RAND)  
**Tier 3 Sources:** Academic papers (peer-reviewed)  
**Tier 4 Sources:** Industry reports (cross-verified)

**Quality Ratings:**
- **High:** Direct from CMS/government, <1 year old
- **Medium:** Research organizations, 1-2 years old
- **Estimated:** Calculated from multiple sources, >2 years old

## Validation Rules

- All amounts must sum to parent (±1% tolerance)
- All percentages must sum to 100% (±0.5% tolerance)
- Every data point requires ≥1 source
- Sources must include: org, URL, date, citation

## Data Hierarchy

```
Level 0: Total NHE ($4.9T)
├─ Level 1: 10 Major Categories
│  ├─ Hospital Care
│  ├─ Physician & Clinical Services
│  ├─ Prescription Drugs
│  └─ ...
└─ Level 2+: Subcategories (varies by L1)
```

## Contributing

See `docs/execution-plan.md` for detailed development roadmap.

## License

Data: CC-BY-4.0  
Code: MIT

## Sources

Primary data from CMS National Health Expenditure Accounts (2023)
