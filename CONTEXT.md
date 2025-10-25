# Healthcare Spending Visualization - Project Context & Goals

**Last Updated:** October 18, 2025  
**Project Owner:** Vidhate  
**Current Phase:** Data Collection & Structuring (Phase 1-2)

---

## 🎯 PROJECT GOAL

Build an **interactive website** that visualizes all U.S. healthcare spending data in a hierarchical, drill-down format. Users should be able to:

1. Start at the highest level (Total National Health Expenditures: $4.9T)
2. Click to expand into major categories (Hospital Care, Physician Services, etc.)
3. Continue drilling down into subcategories recursively
4. See payer breakdown at every level (Private Insurance, Medicare, Medicaid, Out-of-Pocket, Other)
5. View all data sources with direct links to verify information

### Core Principles
- **Systematic & Methodical**: Build from top-down, complete each level before moving deeper
- **Data Quality First**: Every number backed by trustworthy sources
- **Clean Structure**: All data in validated JSON, updateable as new data emerges
- **Visualization Later**: Focus on data accuracy first, UI/visualization at the end

---

## 📊 PROJECT VISION

### User Experience Goal
A user visits the website and sees:
```
Total U.S. Healthcare Spending: $4.9 Trillion (2023)
├─ [Click] Hospital Care: $1.52T (31%)
│   ├─ [Click] Inpatient Services: $XXX B
│   ├─ [Click] Outpatient/ER: $XXX B
│   └─ ...
├─ [Click] Physician & Clinical Services: $978B (20%)
│   ├─ [Click] Primary Care: $245B (25%)
│   ├─ [Click] Specialist Care: $450B (46%)
│   └─ ...
└─ [Click] Prescription Drugs: $449.7B (9.2%)
    └─ ...
```

At **every level**, show:
- Total spending amount
- Percentage of parent category
- Breakdown by payer source (who pays)
- Link to data sources

### Why This Matters
- Makes healthcare spending **transparent and understandable**
- Helps policymakers make **evidence-based decisions**
- Enables citizens to understand where their **healthcare dollars go**
- Creates a **go-to resource** for healthcare spending data

---

## 🗂️ DATA HIERARCHY STRUCTURE

### Level 0: Root (COMPLETED ✅)
**Total National Health Expenditures: $4,900B**

Payer Breakdown:
- Private Insurance: $1,464.6B (29.9%)
- Medicare: $1,029.8B (21.0%)
- Medicaid: $871.7B (17.8%)
- Out-of-Pocket: $505.7B (10.3%)
- Other: $1,028.2B (21.0%)

### Level 1: Major Categories (TO DO 🚧)
10 categories that must sum to $4.9T:

1. **Hospital Care** - $1,519.7B (31.0%)
2. **Physician & Clinical Services** - $978.0B (20.0%)
3. **Prescription Drugs** - $449.7B (9.2%)
4. **Nursing Care Facilities** - $211.3B (4.3%)
5. **Dental Services** - $173.8B (3.5%)
6. **Home Health Care** - $147.8B (3.0%)
7. **Other Professional Services** - $159.9B (3.3%)
8. **Durable Medical Equipment** - $72.8B (1.5%)
9. **Other Non-Durable Medical Products** - $124.1B (2.5%)
10. **Other Health Services** - $270.2B (5.5%)

**Each Level 1 category needs:**
- Total spending amount (from CMS)
- 5-way payer breakdown (Private, Medicare, Medicaid, OOP, Other)
- Percentage of total NHE
- CMS official definition
- At least 1 Tier-1 source (government agency)

### Level 2: Subcategories (TO DO 🚧)
Varies by Level 1 category. Priority areas:

**Physician & Clinical Services** → 4 subcategories:
- Primary Care: $245B (25.1%)
- Specialist Care: $450B (46.0%)
- Surgical Services: $180B (18.4%)
- Laboratories & Diagnostics: $103B (10.5%)

**Hospital Care** → 3-4 subcategories:
- Inpatient Services
- Outpatient/ER Services
- Hospital-based Physician Services
- Hospital Pharmacy

**Prescription Drugs** → 3 subcategories:
- Retail prescription drugs
- Mail order pharmacy
- Specialty pharmacy

### Level 3+: Deep Details (FUTURE 📅)
Only add where data readily available and policy-relevant.

---

## 📁 PROJECT FILE STRUCTURE

```
/Users/vidhate/Documents/work/healthcare-spends-claude/
│
├── data/
│   └── healthcare-spending-2023.json    ← MAIN DATA FILE (currently only has root)
│
├── scripts/
│   └── validate-data.js                 ← Validation script (COMPLETED)
│
├── src/
│   └── types.ts                         ← TypeScript schema definitions (COMPLETED)
│
├── docs/
│   └── (No docs folder yet, but research documents provided in chat context)
│
├── CONTEXT.md                           ← THIS FILE (project overview & goals)
├── STATUS.md                            ← Current progress & next steps
├── README.md                            ← Quick start guide
└── package.json                         ← NPM scripts (validate command ready)
```

---

## 📚 KEY DOCUMENTS & THEIR PURPOSE

### In This Project Directory

1. **`data/healthcare-spending-2023.json`**
   - **Purpose:** Single source of truth for all spending data
   - **Current State:** Only root node populated, children array empty
   - **Schema:** Follows TypeScript definitions in `src/types.ts`
   - **Validation:** Run `npm run validate` to check

2. **`src/types.ts`**
   - **Purpose:** Complete TypeScript interface definitions
   - **Contains:** 
     - `SpendingCategory` - structure for each node
     - `PayerBreakdown` - how to split spending by payer
     - `DataSource` - citation structure
     - `HealthcareSpendingData` - root structure
   - **Use:** Reference this when adding new categories

3. **`scripts/validate-data.js`**
   - **Purpose:** Automated validation of data accuracy
   - **Checks:**
     - All payer amounts sum to category total (±1% tolerance)
     - All percentages sum to 100% (±0.5% tolerance)
     - All required fields present
     - All sources have proper citations
     - Children sum to parent totals
   - **Run:** `npm run validate`

4. **`STATUS.md`**
   - **Purpose:** Current progress snapshot
   - **Contains:** What's done, what's next, time estimates
   - **Update:** After completing major milestones

5. **`CONTEXT.md`** (this file)
   - **Purpose:** Full project context for continuity
   - **Use:** If chat context is lost, read this first

### Research Documents (Provided in Chat)

These documents were uploaded and contain valuable data:

1. **"Healthcare Spending Visualization - Execution Plan.md"**
   - **Contains:** 7-phase detailed roadmap
   - **Key Sections:**
     - Phase 1: Data Architecture & Standards
     - Phase 2: Systematic Data Collection
     - Phase 3: Data Structuring & Storage
     - Phase 4: Data Quality Assurance
     - Phase 5: Visualization Development
     - Phase 6: User Experience
     - Phase 7: Launch & Maintenance
   - **Use:** Reference for understanding overall approach

2. **"Physician & Clinical Services: Complete Breakdown (2023).md"**
   - **Contains:** Full breakdown of $978B category
   - **Data Available:**
     - Total: $978B
     - Primary Care: $245B (7.4% OOP, 92.6% insurance)
     - Specialist Care: $450B (8.9% OOP, 91.1% insurance)
     - Surgical Services: $180B (8.3% OOP, 91.7% insurance)
     - Labs & Diagnostics: $103B (17.3% OOP, 82.7% insurance)
   - **Payer Breakdown:**
     - Private Insurance: $366.8B (37.5%)
     - Medicare: $269.0B (27.5%)
     - Medicaid: $171.1B (17.5%)
     - Out-of-Pocket: $72.8B (7.4%)
     - Other: $98.4B (10.1%)
   - **Use:** Ready to add as Level 1 + Level 2 categories

3. **"U.S. Out-of-Pocket Healthcare Spending Breakdown 2023.md"**
   - **Contains:** Complete OOP breakdown across all categories
   - **Total OOP:** $505.7B
   - **Top Categories:**
     - OTC & Medical Supplies: $119.1B (23.6%)
     - Dental Services: $74.8B (14.8%)
     - Physician Services: $72.8B (14.4%)
     - Prescription Drugs: $52.5B (10.4%)
     - Nursing Care: $48.5B (9.6%)
     - Hospital Care: $45.6B (9.0%)
   - **Use:** Cross-reference OOP amounts when adding categories

---

## 🎨 DATA SCHEMA OVERVIEW

Every category in the JSON follows this structure:

```typescript
{
  id: "unique-identifier",           // e.g., "hospital-care"
  name: "Display Name",               // e.g., "Hospital Care"
  level: 1,                           // 0=root, 1=major, 2=sub, etc.
  
  totalSpending: {
    amount: 1519.7,                   // in billions
    year: 2023,
    sources: [/* DataSource objects */]
  },
  
  payerBreakdown: {
    privateInsurance: { amount: X, percentage: Y, sources: [...] },
    medicare: { amount: X, percentage: Y, sources: [...] },
    medicaid: { amount: X, percentage: Y, sources: [...] },
    outOfPocket: { amount: X, percentage: Y, sources: [...] },
    other: { amount: X, percentage: Y, description: "...", sources: [...] }
  },
  
  percentageOfParent: 31.0,           // What % of parent category
  percentageOfGDP: 5.4,               // Optional, for major categories
  
  description: "What this category includes...",
  cmsCategory: "Official CMS name",
  naicsCodes: ["6211"],               // Industry codes if applicable
  
  parentId: "total-nhe",              // ID of parent category
  children: [/* Array of SpendingCategory objects */],
  hasMoreDetail: true,                // Can we drill down?
  
  notes: ["Important caveats..."],
  lastUpdated: "2025-10-18",
  dataQuality: "high"                 // high | medium | estimated
}
```

### Data Source Structure
```typescript
{
  organization: "CMS Office of the Actuary",
  title: "National Health Expenditures 2023",
  url: "https://www.cms.gov/...",
  publicationDate: "2024-12-18",
  accessDate: "2025-10-18",
  specificCitation: "Table 3, Page 5",
  dataYear: 2023
}
```

---

## 🔍 DATA QUALITY STANDARDS

### Source Tier System

**Tier 1: Government Agencies** (Required for Level 0-1)
- Centers for Medicare & Medicaid Services (CMS)
- Centers for Disease Control (CDC)
- Government Accountability Office (GAO)
- Bureau of Economic Analysis (BEA)
- Census Bureau

**Tier 2: Research Organizations** (Good for Level 2+)
- Kaiser Family Foundation (KFF)
- Milbank Memorial Fund
- RAND Corporation
- Commonwealth Fund

**Tier 3: Academic** (Acceptable for Level 3+)
- Peer-reviewed journal articles
- University research centers

**Tier 4: Industry** (Use with caution)
- Must cross-verify with other sources
- Industry reports (IQVIA, etc.)

### Quality Ratings

- **High:** Direct from CMS/government, <1 year old
- **Medium:** Research organizations, 1-2 years old, or calculated from multiple Tier 1 sources
- **Estimated:** Calculated from older sources, >2 years old, or derived from percentages

---

## ✅ VALIDATION RULES

The validation script checks:

1. **Mathematical Accuracy**
   - Payer amounts sum to category total (±1% tolerance)
   - Percentages sum to 100% (±0.5% tolerance)
   - Children sum to parent total (±1% tolerance)
   - Percentage of parent matches calculated value (±0.5% tolerance)

2. **Structural Completeness**
   - All required fields present (id, name, level, totalSpending, payerBreakdown)
   - Every payer has amount, percentage, and sources
   - Level numbers match hierarchy position
   - Data quality is valid value (high/medium/estimated)

3. **Source Quality**
   - At least 1 source for every data point
   - Sources have all required fields (org, title, URL, dates)
   - URLs are valid format
   - Dates in YYYY-MM-DD format
   - Warning for sources >2 years old

4. **Hierarchy Consistency**
   - Parent-child relationships valid
   - percentageOfParent present for all non-root nodes
   - hasMoreDetail matches presence of children

---

## 🚀 WORKFLOW: ADDING NEW CATEGORIES

### Step-by-Step Process

**1. Research the Category**
- Find CMS official data for total spending
- Get payer breakdown (if available directly)
- OR calculate from percentages if needed
- Document all sources

**2. Structure the Data**
- Follow the TypeScript schema in `src/types.ts`
- Ensure all 5 payers accounted for
- Calculate percentages accurately
- Add at least 1 Tier-1 source

**3. Add to JSON**
- Open `data/healthcare-spending-2023.json`
- Add to `root.children` array for Level 1
- OR add to appropriate parent's `children` array for Level 2+
- Calculate `percentageOfParent`

**4. Validate**
```bash
npm run validate
```
- Fix any errors reported
- Warnings are OK but investigate them
- Ensure 0 errors before moving on

**5. Commit Progress**
- Update `STATUS.md` with new completion percentage
- Note any data gaps found
- Document next steps

### Example: Adding Hospital Care

```json
{
  "id": "hospital-care",
  "name": "Hospital Care",
  "level": 1,
  "totalSpending": {
    "amount": 1519.7,
    "year": 2023,
    "sources": [{
      "organization": "CMS Office of the Actuary",
      "title": "NHE Fact Sheet",
      "url": "https://www.cms.gov/...",
      "publicationDate": "2024-12-18",
      "accessDate": "2025-10-18",
      "dataYear": 2023
    }]
  },
  "payerBreakdown": {
    "privateInsurance": {
      "amount": 455.9,
      "percentage": 30.0,
      "sources": [/* ... */]
    },
    // ... other 4 payers
  },
  "percentageOfParent": 31.0,
  "percentageOfGDP": 5.4,
  "description": "Spending for inpatient and outpatient hospital services...",
  "cmsCategory": "Hospital Care",
  "parentId": "total-nhe",
  "children": [],
  "hasMoreDetail": true,
  "lastUpdated": "2025-10-18",
  "dataQuality": "high"
}
```

---

## 🎯 CURRENT STATUS & NEXT STEPS

### What's Complete (15%)
✅ TypeScript schema defined  
✅ Validation script working  
✅ Root node (Level 0) fully populated and validated  
✅ Project structure established  
✅ Documentation framework in place

### Immediate Next Step: Add Level 1 Categories

**Priority Order:**
1. Physician & Clinical Services ($978B) - **Have full data ready**
2. Hospital Care ($1,519.7B) - Need payer breakdown
3. Prescription Drugs ($449.7B) - Need payer breakdown
4. Remaining 7 categories - Need data

**What We Need for Each:**
- Total amount (✅ have for all 10)
- Payer breakdown - 5 amounts + percentages (❌ need for 7 categories)
- CMS sources (❌ need to find)
- Descriptions (❌ need to write)

### Where to Find Missing Data

**Primary Source:**
- CMS NHE Tables: https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/nhe-fact-sheet
- Look for "Table: National Health Expenditures by Type of Service and Source of Funds"

**Secondary Sources:**
- KFF Health System Tracker
- CMS Office of the Actuary Annual Reports

### Estimated Time to Completion

- Level 1 categories (10 items): **3-4 hours**
- Level 2 key categories (15-20 items): **5-6 hours**
- Level 3 selected deep dives: **4-5 hours**
- Build visualization: **15-20 hours**
- Testing & polish: **5-10 hours**

**Total to working website: 32-45 hours**

---

## 🛠️ AVAILABLE COMMANDS

```bash
# Validate all data against schema and math rules
npm run validate

# (Future) Add a new category using template
npm run add-category

# (Future) Export summary report
npm run export-summary
```

---

## 💭 IMPORTANT NOTES & CONTEXT

### Design Decisions Made

1. **Top-Down Approach**: Start at highest level, drill down systematically
   - *Why:* Ensures every detail fits into bigger picture
   - *Benefit:* Can validate totals at each step

2. **Payer-Centric View**: Always show who pays (5 categories)
   - *Why:* This is key question users want answered
   - *Insight:* Most categories are 90%+ insurance, but varies

3. **Source Everything**: Every number has citations
   - *Why:* Transparency and credibility
   - *Benefit:* Can update when new data emerges

4. **JSON First, Visualization Later**: Get data right before building UI
   - *Why:* Bad data in beautiful UI is still useless
   - *Benefit:* Can iterate on data structure easily

### Key Insights from Data So Far

1. **Primary Care is Underfunded**: Only 5% of healthcare spending vs 7.8% OECD average
2. **Out-of-Pocket is 10.3%**: Lower than many expect due to insurance
3. **Hospital Care is 31%**: Largest single category by far
4. **OOP Varies Widely**: 7.4% for primary care vs 17.3% for lab tests

### Challenges to Anticipate

1. **Data Availability**: Not all subcategories have public payer breakdowns
   - *Solution:* Use estimates, mark as "medium" or "estimated" quality
   - *Flag:* Note in methodology what's estimated vs direct

2. **Overlapping Categories**: Some services span multiple categories
   - *Example:* Hospital-based physician services (in hospital or physician?)
   - *Solution:* Follow CMS official categorization strictly

3. **Year-to-Year Changes**: Data updated annually
   - *Solution:* Version control, clear year labeling
   - *Future:* Build update process for new years

---

## 🎓 FOR FUTURE CONTEXT CONTINUATION

If you're a new Claude instance reading this:

**Your immediate goal is:** Add the 10 Level 1 categories to the children array of the root node in `data/healthcare-spending-2023.json`

**You have all the tools you need:**
1. Schema in `src/types.ts` shows exact structure
2. Validation script in `scripts/validate-data.js` will check your work
3. Research documents (in chat history) have data for 3 categories ready to use
4. This file (CONTEXT.md) explains the full vision

**Start by:**
1. Reading the current JSON file to see root structure
2. Adding Physician & Clinical Services (we have complete data for this)
3. Running validation to ensure it works
4. Then add remaining 9 categories

**Success looks like:**
- Root has 10 children
- All children sum to $4.9T (±1%)
- Validation passes with 0 errors
- Each category has complete payer breakdown
- All sources documented

**Don't forget to:**
- Update STATUS.md when complete
- Calculate percentageOfParent for each child
- Ensure dataQuality rating is appropriate
- Add descriptive notes where helpful

---

## 📞 PROJECT OWNER PREFERENCES

From user preferences:
- **Ask clarifying questions** before diving deep
- **Brief bullet format** for answers (user will ask for details if needed)
- **Curiosity-driven learning** style preferred

**Communication style:**
- Be concise but complete
- Break down complex concepts
- Explain "why" not just "what"
- Offer options when multiple paths exist

---

**Last Updated:** October 18, 2025  
**Next Review:** After Level 1 categories complete  
**Project Repository:** `/Users/vidhate/Documents/work/healthcare-spends-claude/`
