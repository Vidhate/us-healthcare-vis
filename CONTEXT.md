# Healthcare Spending Visualization - Project Context & Goals

**Last Updated:** October 24, 2025  
**Project Owner:** Vidhate  
**Current Phase:** Data Collection & Structuring (Phase 1-2)  
**Visualization Strategy:** Sankey-First (Option C)

---

## 🎯 PROJECT GOAL

Build an **interactive Sankey diagram website** that visualizes U.S. healthcare spending as money flows. Users should be able to:

1. See how money flows from Total → Categories → Subcategories (left to right)
2. Click any flow to isolate and highlight that specific path
3. Trace spending through multiple levels (expandable infinitely to the right)
4. See payer breakdowns at every level (who pays for what)
5. View all data sources with direct links to verify information

### Core Principles
- **Systematic & Methodical**: Build from top-down, complete each level before moving deeper
- **Data Quality First**: Every number backed by trustworthy sources
- **Clean Structure**: All data in validated JSON, updateable as new data emerges
- **Sankey-First Visualization**: Focus on flow representation, add other views later if needed

---

## 📊 VISUALIZATION STRATEGY (OPTION C)

### Primary Visualization: Interactive Sankey Diagram

**Why Sankey?**
- Healthcare spending IS a flow (money moves from sources → uses)
- Width of flows = proportional to spending (instant visual comparison)
- Can trace specific paths (e.g., "How much Medicare money goes to hospital inpatient care?")
- Intuitive for understanding "follow the money"
- Expandable infinitely to the right for deeper detail

**Perspective: Category-First** (User Decision)
```
[Total NHE]  →  [10 Major Categories]  →  [Subcategories]  →  [Further Detail]
   $4.9T           Hospital ($1.52T)         Inpatient
                   Physician ($978B)         Primary Care
                   Rx Drugs ($449.7B)        Specialist Care
                   etc.                      Surgery
                                            etc.
```

**Core Interaction: Click to Isolate Flows** (User Decision)
- Click any node → highlights only flows connected to it
- Click a flow → shows detailed breakdown + sources
- Hover → tooltip with amounts, percentages, sources
- Reset button → return to full view

**Desktop-First** (User Decision)
- Not optimizing for mobile initially
- Focus on rich desktop experience
- Mobile can come later if needed

### Secondary Visualization: Hierarchical Tree (Future)
- Add later if users request it
- Good for showing complete structure
- Complementary to Sankey for different questions

---

## 🎨 SANKEY VISUALIZATION EXAMPLES

### Example 1: Category Flow (Primary View)
```
Total NHE ($4.9T)
├─────→ Hospital Care ($1,519.7B) ────→ Inpatient ($800B)
│                                  ├──→ Outpatient ($500B)
│                                  └──→ Emergency ($219.7B)
│
├─────→ Physician Services ($978B) ───→ Primary Care ($245B)
│                                  ├──→ Specialists ($450B)
│                                  ├──→ Surgery ($180B)
│                                  └──→ Labs ($103B)
│
└─────→ Prescription Drugs ($449.7B) ─→ Retail ($300B)
                                     ├─→ Mail Order ($100B)
                                     └─→ Specialty ($49.7B)
```

### Example 2: Payer View (Alternative/Future View)
```
Private Insurance ($1,464.6B)
├─────→ Hospital Care ($455.9B)
├─────→ Physician Services ($366.8B)
└─────→ Prescription Drugs ($xxx B)

Medicare ($1,029.8B)
├─────→ Hospital Care ($380B)
├─────→ Physician Services ($269B)
└─────→ etc.
```

### Interactive Features
1. **Click Node** → Isolate all flows to/from that node
2. **Click Flow** → Show details popup (amount, %, sources, payer breakdown)
3. **Hover** → Tooltip with quick stats
4. **Filter** → Show/hide specific payers or categories
5. **Expand** → Add more levels to the right dynamically

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
│   └── (future) transform-to-sankey.js  ← Convert JSON to Sankey format
│
├── src/
│   └── types.ts                         ← TypeScript schema definitions (COMPLETED)
│   └── (future) components/             ← React components for Sankey
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
   - **Note:** This hierarchical structure easily transforms to Sankey format

2. **`src/types.ts`**
   - **Purpose:** Complete TypeScript interface definitions
   - **Contains:** 
     - `SpendingCategory` - structure for each node
     - `PayerBreakdown` - how to split spending by payer (creates flows)
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
     - Phase 5: Visualization Development (NOW: Sankey-focused)
     - Phase 6: User Experience (NOW: Desktop, click-to-isolate)
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
  
  // THIS CREATES FLOWS IN SANKEY!
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
  children: [/* Array of SpendingCategory objects */],  // Creates flows!
  hasMoreDetail: true,                // Can we drill down?
  
  notes: ["Important caveats..."],
  lastUpdated: "2025-10-24",
  dataQuality: "high"                 // high | medium | estimated
}
```

### How JSON Transforms to Sankey

Our hierarchical JSON naturally maps to Sankey flows:

```javascript
// Hierarchical JSON (what we have):
{
  id: "total-nhe",
  totalSpending: { amount: 4900 },
  children: [
    { id: "hospital-care", totalSpending: { amount: 1519.7 } },
    { id: "physician-services", totalSpending: { amount: 978 } }
  ]
}

// Transforms to Sankey format:
{
  nodes: [
    { id: "total-nhe", name: "Total NHE" },
    { id: "hospital-care", name: "Hospital Care" },
    { id: "physician-services", name: "Physician Services" }
  ],
  links: [
    { source: "total-nhe", target: "hospital-care", value: 1519.7 },
    { source: "total-nhe", target: "physician-services", value: 978 }
  ]
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

---

## 🎯 CURRENT STATUS & NEXT STEPS

### What's Complete (15%)
✅ TypeScript schema defined  
✅ Validation script working  
✅ Root node (Level 0) fully populated and validated  
✅ Project structure established  
✅ Documentation framework in place  
✅ **Visualization strategy decided: Sankey-First**

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
- Build Sankey transformation script: **2-3 hours**
- Build interactive Sankey visualization: **15-20 hours**
- Testing & polish: **5-10 hours**

**Total to working website: 35-50 hours**

---

## 🛠️ AVAILABLE COMMANDS

```bash
# Validate all data against schema and math rules
npm run validate

# (Future) Transform JSON to Sankey format
npm run transform-sankey

# (Future) Add a new category using template
npm run add-category

# (Future) Export summary report
npm run export-summary
```

---

## 🎨 SANKEY VISUALIZATION TECH STACK (FUTURE)

### Recommended Libraries
1. **D3-Sankey** (Most flexible)
   - Full control over appearance
   - Best for custom interactions
   - Steeper learning curve

2. **Plotly** (Easier, less customization)
   - Built-in Sankey support
   - Good hover tooltips
   - Less control over styling

3. **Google Charts** (Simplest)
   - Easy to implement
   - Limited customization
   - Good for prototyping

**Recommended: D3-Sankey with React wrapper**
- Best balance of control and modern framework
- Can implement click-to-isolate easily
- Extensible for future features

### Key Features to Implement
1. **Click node** → Isolate connected flows, fade others
2. **Click flow** → Show modal with details + sources
3. **Hover** → Tooltip with amount, percentage
4. **Reset button** → Clear all filters
5. **Expand button** → Add next level of detail to the right
6. **Export** → Save as PNG or PDF

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

5. **Sankey-First Visualization** (NEW)
   - *Why:* Better shows flow of money than hierarchical tree
   - *Benefit:* More intuitive for "follow the money" questions
   - *Trade-off:* More complex to build, but worth it

6. **Category-First Perspective** (NEW)
   - *Why:* Most users start with "what is spending on?"
   - *Benefit:* Natural top-down exploration
   - *Alternative:* Can add payer-first view later

7. **Click-to-Isolate Interaction** (NEW)
   - *Why:* Reduces visual clutter, focuses attention
   - *Benefit:* Can trace specific paths through complex data
   - *Implementation:* Fade non-selected flows to 10% opacity

8. **Desktop-First** (NEW)
   - *Why:* Complex data visualization needs screen real estate
   - *Benefit:* Can focus on rich features without mobile constraints
   - *Future:* Can simplify for mobile later if needed

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

4. **Sankey Complexity**: Many flows can get visually overwhelming
   - *Solution:* Click-to-isolate feature reduces clutter
   - *Future:* Add filters to show/hide specific payers or small categories

---

## 🎓 FOR FUTURE CONTEXT CONTINUATION

If you're a new Claude instance reading this:

**Your immediate goal is:** Add the 10 Level 1 categories to the children array of the root node in `data/healthcare-spending-2023.json`

**Visualization goal:** Build interactive Sankey diagram (Category-First, Click-to-Isolate, Desktop)

**You have all the tools you need:**
1. Schema in `src/types.ts` shows exact structure
2. Validation script in `scripts/validate-data.js` will check your work
3. Research documents (in chat history) have data for 3 categories ready to use
4. This file (CONTEXT.md) explains the full vision including Sankey strategy

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
- Data structure ready for Sankey transformation

**Don't forget to:**
- Update STATUS.md when complete
- Calculate percentageOfParent for each child
- Ensure dataQuality rating is appropriate
- Add descriptive notes where helpful
- Remember: this data will power a Sankey diagram!

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

**Decisions Made Together:**
- ✅ Sankey-first visualization (Option C)
- ✅ Category-first perspective
- ✅ Click-to-isolate interaction
- ✅ Desktop-first (not mobile initially)

---

**Last Updated:** October 24, 2025  
**Next Review:** After Level 1 categories complete  
**Project Repository:** `/Users/vidhate/Documents/work/healthcare-spends-claude/`
