# Healthcare Spending Data Requirements - Complete Collection Checklist

**Purpose:** Comprehensive list of all data needed to complete the healthcare spending JSON  
**Last Updated:** October 24, 2025  
**Target:** 100% data completeness for interactive Sankey visualization

---

## 📋 OVERVIEW

**Current Completeness:** 15% (Root node only)  
**Target Completeness:** 80%+ for MVP launch

### What We Have ✅
- Root node (Level 0) - Total NHE with full payer breakdown
- Complete data for Physician & Clinical Services (Level 1 + Level 2)
- Out-of-Pocket cross-reference data

### What We Need 🚧
- 9 remaining Level 1 categories (90% of Level 1)
- Level 2 subcategories for 8-9 major categories
- Level 3 detail where available

---

## 🎯 DATA COLLECTION PRIORITY LEVELS

### Priority 1: CRITICAL (Need for MVP)
- All 10 Level 1 categories with payer breakdowns
- Level 2 for top 3 spending categories (Hospital, Physician, Rx Drugs)

### Priority 2: HIGH (Significantly improves value)
- Level 2 for remaining 7 Level 1 categories
- Level 3 for Physician Services (we have partial data)

### Priority 3: MEDIUM (Nice to have)
- Level 3+ deep dives where data exists
- State-by-state breakdowns
- Demographic breakdowns (age groups)

### Priority 4: LOW (Future enhancement)
- Historical data (2020-2023 trends)
- International comparisons (OECD)
- Growth rate projections

---

## 📊 LEVEL 1: MAJOR CATEGORIES (9 REMAINING)

For EACH category below, collect:

### Required Data Points (for each category):
1. **Total Spending Amount** (in billions)
   - Source: CMS NHE tables
   - Year: 2023
   - Required: Yes

2. **Payer Breakdown - 5 Components:**
   - Private Insurance: Amount + Percentage
   - Medicare: Amount + Percentage
   - Medicaid: Amount + Percentage
   - Out-of-Pocket: Amount + Percentage
   - Other: Amount + Percentage + Description of what "Other" includes
   - **CRITICAL:** All 5 must sum to total (±1%)
   - **CRITICAL:** All percentages must sum to 100% (±0.5%)

3. **Sources (minimum 1, prefer 2-3):**
   - Organization name
   - Report/publication title
   - Direct URL
   - Publication date (YYYY-MM-DD)
   - Access date (YYYY-MM-DD)
   - Specific citation (page, table number)
   - Data year (2023)
   - **Tier requirement:** At least 1 Tier-1 source (government)

4. **Descriptive Information:**
   - CMS official category name
   - What this category includes (2-3 sentences)
   - What this category excludes (if relevant)
   - NAICS codes (if applicable)

5. **Metadata:**
   - Percentage of total NHE (calculate from $4.9T)
   - Percentage of GDP (calculate from $27.96T GDP)
   - Data quality rating (high/medium/estimated)
   - Last updated date
   - Any important notes or caveats

---

## 🏥 LEVEL 1 CATEGORY #1: HOSPITAL CARE

**Status:** ⏳ PRIORITY 1 - Need payer breakdown  
**Total Amount:** $1,519.7B (KNOWN)  
**Percentage of NHE:** 31.0%  
**Percentage of GDP:** 5.4%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%)
- [ ] Medicaid: $___B (__%)
- [ ] Out-of-Pocket: $45.6B (3.0%) ✅ [from OOP doc]
- [ ] Other: $___B (__%) + description

#### Sources Needed:
- [ ] CMS NHE Table for hospital care by payer
- [ ] Official CMS definition of "Hospital Care"
- [ ] Any supplementary sources

#### Description Needed:
- [ ] What counts as hospital care (inpatient, outpatient, ER)
- [ ] What's excluded (physician services in hospitals?)
- [ ] NAICS codes

#### Where to Look:
- **Primary:** CMS NHE Detailed Tables - "Hospital Care by Source of Funds"
- **URL:** https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/nhe-fact-sheet
- **Backup:** KFF Hospital Cost Tracker

---

## 🏥 LEVEL 1 CATEGORY #2: PHYSICIAN & CLINICAL SERVICES

**Status:** ✅ COMPLETE - Have all data from research doc  
**Total Amount:** $978.0B  
**Next Step:** Add to JSON with Level 2 children

### Data Available:
- ✅ Total: $978B
- ✅ All 5 payer breakdowns with amounts and percentages
- ✅ Sources documented
- ✅ Level 2 breakdown (4 subcategories)

**Action Required:** Structure into JSON format and add to root.children array

---

## 💊 LEVEL 1 CATEGORY #3: PRESCRIPTION DRUGS

**Status:** ⏳ PRIORITY 1 - Need payer breakdown  
**Total Amount:** $449.7B (KNOWN)  
**Percentage of NHE:** 9.2%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%)
- [ ] Medicaid: $___B (__%)
- [ ] Out-of-Pocket: $52.5B (11.7%) ✅ [from OOP doc]
- [ ] Other: $___B (__%) + description

#### Sources Needed:
- [ ] CMS NHE Table for prescription drugs by payer
- [ ] Breakdown between retail/mail/specialty if available

#### Where to Look:
- **Primary:** CMS NHE Tables - "Prescription Drugs"
- **Secondary:** IQVIA Medicine Spending Report
- **Note:** IRA provisions may affect OOP in future years

---

## 🏘️ LEVEL 1 CATEGORY #4: NURSING CARE FACILITIES

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $211.3B (KNOWN)  
**Percentage of NHE:** 4.3%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%)
- [ ] Medicaid: $___B (__%) (likely largest payer)
- [ ] Out-of-Pocket: $48.5B (23.0%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### Special Note:
- Medicaid typically pays 50%+ of nursing home care
- Medicare covers short-term skilled nursing only
- High OOP percentage (23%) is notable

#### Where to Look:
- **Primary:** CMS NHE Tables - "Nursing Care Facilities and Continuing Care Retirement Communities"
- **Secondary:** KFF Medicaid Long-Term Care report

---

## 🦷 LEVEL 1 CATEGORY #5: DENTAL SERVICES

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $173.8B (KNOWN)  
**Percentage of NHE:** 3.5%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%) (likely largest - dental insurance)
- [ ] Medicare: $___B (__%) (likely ~$0 - no dental coverage)
- [ ] Medicaid: $___B (__%) (children's coverage mainly)
- [ ] Out-of-Pocket: $74.8B (43.0%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### Special Note:
- Very high OOP percentage (43%) - many pay cash for dental
- Medicare doesn't cover routine dental
- Private dental insurance is separate from medical insurance

#### Where to Look:
- **Primary:** CMS NHE Tables - "Dental Services"
- **Secondary:** ADA Health Policy Institute reports

---

## 🏠 LEVEL 1 CATEGORY #6: HOME HEALTH CARE

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $147.8B (KNOWN)  
**Percentage of NHE:** 3.0%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%) (likely significant - covers home health)
- [ ] Medicaid: $___B (__%) (likely significant - long-term care)
- [ ] Out-of-Pocket: $14.9B (10.1%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### Where to Look:
- **Primary:** CMS NHE Tables - "Home Health Care"
- **Secondary:** Medicare Payment Advisory Commission (MedPAC) reports

---

## 👨‍⚕️ LEVEL 1 CATEGORY #7: OTHER PROFESSIONAL SERVICES

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $159.9B (KNOWN)  
**Percentage of NHE:** 3.3%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%)
- [ ] Medicaid: $___B (__%)
- [ ] Out-of-Pocket: $14.9B (9.3%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### What This Includes (NEED TO CONFIRM):
- [ ] Physical therapy
- [ ] Occupational therapy
- [ ] Speech therapy
- [ ] Podiatry
- [ ] Optometry
- [ ] Chiropractic care
- [ ] Other non-physician practitioners

#### Where to Look:
- **Primary:** CMS NHE Tables - "Other Professional Services"
- **Secondary:** May need to piece together from multiple sources

---

## 🦽 LEVEL 1 CATEGORY #8: DURABLE MEDICAL EQUIPMENT

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $72.8B (KNOWN)  
**Percentage of NHE:** 1.5%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%) (covers some DME)
- [ ] Medicaid: $___B (__%)
- [ ] Out-of-Pocket: $32.8B (45.1%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### What This Includes:
- Eyeglasses and contact lenses (largest component)
- Hearing aids
- Wheelchairs
- Hospital beds
- Other durable equipment

#### Special Note:
- Very high OOP (45.1%) - many items not covered by insurance
- Eyeglasses/contacts are mostly OOP

#### Where to Look:
- **Primary:** CMS NHE Tables - "Durable Medical Equipment"

---

## 💊 LEVEL 1 CATEGORY #9: OTHER NON-DURABLE MEDICAL PRODUCTS

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $124.1B (KNOWN)  
**Percentage of NHE:** 2.5%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%)
- [ ] Medicaid: $___B (__%)
- [ ] Out-of-Pocket: $119.1B (96.0%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### What This Includes:
- Over-the-counter medications
- Medical instruments and supplies
- Surgical dressings
- Other non-durable products

#### Special Note:
- Extremely high OOP (96%) - almost all paid by consumers
- OTC meds are rarely covered by insurance

#### Where to Look:
- **Primary:** CMS NHE Tables - "Other Non-Durable Medical Products"

---

## 🏥 LEVEL 1 CATEGORY #10: OTHER HEALTH SERVICES

**Status:** ⏳ PRIORITY 2 - Need all data  
**Total Amount:** $270.2B (KNOWN)  
**Percentage of NHE:** 5.5%

### Data to Collect:

#### Payer Breakdown (NEEDED):
- [ ] Private Insurance: $___B (__%)
- [ ] Medicare: $___B (__%)
- [ ] Medicaid: $___B (__%)
- [ ] Out-of-Pocket: $29.8B (11.0%) ✅ [from OOP doc]
- [ ] Other: $___B (__%)

#### What This Includes (NEED TO CONFIRM):
- [ ] Ambulance services
- [ ] Residential mental health facilities
- [ ] Substance abuse treatment facilities
- [ ] School health services
- [ ] Community-based care programs
- [ ] Other health services not elsewhere classified

#### Where to Look:
- **Primary:** CMS NHE Tables - "Other Health, Residential, and Personal Care"

---

## 📊 LEVEL 2: SUBCATEGORIES

### Priority Level 2 Categories to Break Down:

#### 🏥 HOSPITAL CARE → SUBCATEGORIES (Priority 1)

**Need to collect:**

1. **Inpatient Services**
   - [ ] Total amount
   - [ ] Percentage of hospital care
   - [ ] Payer breakdown (if available)
   - [ ] Sources

2. **Outpatient Services**
   - [ ] Total amount
   - [ ] Percentage of hospital care
   - [ ] Payer breakdown (if available)
   - [ ] Sources

3. **Emergency Room Services**
   - [ ] Total amount
   - [ ] Percentage of hospital care
   - [ ] Payer breakdown (if available)
   - [ ] Sources

4. **Hospital-based Physician Services** (if separate)
   - [ ] Total amount
   - [ ] Or note if included in physician services category

**Where to Look:**
- CMS Cost Reports
- AHA Hospital Statistics
- KFF Hospital Cost Data

---

#### 💊 PRESCRIPTION DRUGS → SUBCATEGORIES (Priority 1)

**Need to collect:**

1. **Retail Prescription Drugs**
   - [ ] Total amount
   - [ ] Percentage of Rx spending
   - [ ] Payer breakdown
   - [ ] Sources

2. **Mail Order Pharmacy**
   - [ ] Total amount
   - [ ] Percentage of Rx spending
   - [ ] Payer breakdown
   - [ ] Sources

3. **Specialty Pharmacy**
   - [ ] Total amount
   - [ ] Percentage of Rx spending
   - [ ] Payer breakdown
   - [ ] Sources

**Where to Look:**
- IQVIA Institute Reports
- CMS Drug Spending Dashboard
- PBM reports

---

#### 👨‍⚕️ PHYSICIAN SERVICES → SUBCATEGORIES (Priority 1)

**Status:** ✅ HAVE DATA - Just need to structure

We have complete Level 2 data:
1. Primary Care: $245B (25.1%) ✅
2. Specialist Care: $450B (46.0%) ✅
3. Surgical Services: $180B (18.4%) ✅
4. Laboratories & Diagnostics: $103B (10.5%) ✅

**Action:** Add to JSON with full payer breakdowns

---

#### 🦷 DENTAL SERVICES → SUBCATEGORIES (Priority 2)

**Need to collect:**

1. **Preventive/Routine Care**
   - [ ] Total amount
   - [ ] Percentage of dental spending
   - [ ] Sources

2. **Restorative Procedures**
   - [ ] Total amount
   - [ ] Percentage of dental spending
   - [ ] Sources

3. **Orthodontics/Cosmetic**
   - [ ] Total amount
   - [ ] Percentage of dental spending
   - [ ] Sources

**Where to Look:**
- ADA Health Policy Institute
- Dental practice management surveys

---

#### 🏘️ NURSING CARE → SUBCATEGORIES (Priority 2)

**Need to collect:**

1. **Skilled Nursing Facilities**
   - [ ] Total amount
   - [ ] Percentage of nursing care
   - [ ] Sources

2. **Continuing Care Retirement Communities**
   - [ ] Total amount
   - [ ] Percentage of nursing care
   - [ ] Sources

**Where to Look:**
- CMS Nursing Home Data
- AARP Long-Term Care reports

---

## 📚 PRIMARY DATA SOURCES - WHERE TO COLLECT

### Tier 1: Government Sources (PRIORITY)

1. **CMS National Health Expenditure Data**
   - **URL:** https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/nhe-fact-sheet
   - **What to get:** All Level 1 totals, payer breakdowns
   - **Files:** Look for Excel/CSV downloads with detailed tables
   - **Key Tables:**
     - "National Health Expenditures by Type of Service and Source of Funds"
     - "Personal Health Care Expenditures by Source of Funds"

2. **CMS Office of the Actuary Reports**
   - **URL:** https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata
   - **What to get:** Detailed methodology, definitions, historical data

3. **Medicare Payment Advisory Commission (MedPAC)**
   - **URL:** https://www.medpac.gov/
   - **What to get:** Medicare-specific spending details
   - **Reports:** Annual "Report to Congress"

### Tier 2: Research Organizations

4. **Kaiser Family Foundation (KFF)**
   - **URL:** https://www.healthsystemtracker.org/
   - **What to get:** Health System Tracker data, cross-verification
   - **Useful for:** Comparisons, visualizations, context

5. **Milbank Memorial Fund**
   - **URL:** https://www.milbank.org/
   - **What to get:** Primary care spending analysis
   - **Already have:** Primary care data from their reports

6. **Peterson-KFF Health System Tracker**
   - **URL:** https://www.healthsystemtracker.org/
   - **What to get:** Comprehensive data visualizations and comparisons

### Tier 3: Industry Sources (Cross-reference only)

7. **IQVIA Institute**
   - **URL:** https://www.iqvia.com/insights/the-iqvia-institute
   - **What to get:** Prescription drug spending details
   - **Report:** "Medicine Spending and Affordability in the U.S."

8. **American Hospital Association (AHA)**
   - **URL:** https://www.aha.org/statistics/fast-facts-us-hospitals
   - **What to get:** Hospital spending breakdowns

---

## 🎯 DATA COLLECTION WORKFLOW

### Phase 1: CMS Bulk Download (Day 1)
1. [ ] Download all CMS NHE detailed tables (Excel/CSV)
2. [ ] Extract Level 1 category totals for all 10 categories
3. [ ] Extract payer breakdowns for each category
4. [ ] Document source information for each data point

### Phase 2: Verification & Gap Analysis (Day 1-2)
1. [ ] Verify all Level 1 totals sum to $4.9T (±1%)
2. [ ] Identify which categories have complete payer data
3. [ ] List categories where payer breakdown is missing/incomplete
4. [ ] Cross-reference with OOP document to validate OOP amounts

### Phase 3: Fill Gaps (Day 2-3)
1. [ ] For missing payer data, calculate from percentages if available
2. [ ] Search KFF and other Tier 2 sources for missing data
3. [ ] Mark estimated values as "medium" or "estimated" quality
4. [ ] Document methodology for any estimated values

### Phase 4: Level 2 Collection (Day 3-5)
1. [ ] Prioritize Hospital, Rx Drugs, and complete Physician subcategories
2. [ ] Collect subcategory totals
3. [ ] Collect subcategory payer breakdowns where available
4. [ ] Estimate remaining values using category-level percentages

### Phase 5: Validation & Documentation (Day 5-6)
1. [ ] Run validation script on all collected data
2. [ ] Fix any mathematical inconsistencies
3. [ ] Ensure all sources properly documented
4. [ ] Create notes for any caveats or limitations

---

## ✅ DATA QUALITY CHECKLIST

For EACH category/subcategory collected, verify:

- [ ] Total amount is numeric (in billions)
- [ ] Total amount has at least 1 Tier-1 source
- [ ] All 5 payer amounts provided
- [ ] All 5 payer percentages provided
- [ ] Payer amounts sum to total (±1%)
- [ ] Payer percentages sum to 100% (±0.5%)
- [ ] Each payer has at least 1 source
- [ ] All sources have organization, title, URL, dates
- [ ] URLs are valid and accessible
- [ ] Description written (what's included/excluded)
- [ ] Data quality rating assigned (high/medium/estimated)
- [ ] percentageOfParent calculated correctly
- [ ] lastUpdated date is current

---

## 📊 DATA COLLECTION TEMPLATE

Use this template for each category:

```markdown
## CATEGORY NAME

### Basic Info
- Total Spending: $___B
- Percentage of Parent: ___%
- Data Year: 2023
- Data Quality: [high/medium/estimated]

### Payer Breakdown
1. Private Insurance: $___B (__%)
2. Medicare: $___B (__%)
3. Medicaid: $___B (__%)
4. Out-of-Pocket: $___B (__%)
5. Other: $___B (__%) - [Description of what Other includes]

**VERIFY:** Sum = $___B (should equal Total Spending ±1%)
**VERIFY:** Percentage Sum = ___% (should equal 100% ±0.5%)

### Sources
1. **Organization:** [Name]
   - **Title:** [Report title]
   - **URL:** [Direct link]
   - **Publication Date:** YYYY-MM-DD
   - **Access Date:** YYYY-MM-DD
   - **Citation:** [Page/table number]
   - **Data Year:** 2023

2. [Additional sources...]

### Description
[2-3 sentences explaining what this category includes and excludes]

### Notes
- [Any important caveats]
- [Methodology notes if estimated]
- [Cross-references to other categories]

### NAICS Codes (if applicable)
- [List codes]
```

---

## 🚀 QUICK START GUIDE

**To begin data collection right now:**

1. **Go to CMS NHE Tables:**
   https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/nhe-fact-sheet

2. **Download:** "NHE Tables" (Excel file with all detailed data)

3. **Look for Table:** "National Health Expenditures by Type of Service and Source of Funds, Calendar Years 2019-2023"

4. **Extract for each of the 10 Level 1 categories:**
   - Total row (2023 column)
   - Private Insurance row (2023 column)
   - Medicare row (2023 column)
   - Medicaid row (2023 column)
   - Out-of-Pocket row (2023 column)
   - Other row (2023 column)

5. **Verify:** Each category's payers sum to its total

6. **Document:** Record source information for CMS table

7. **Repeat:** For subcategories if available in CMS data

**Estimated time:** 2-3 hours for all Level 1 data collection

---

## 📈 PROGRESS TRACKING

| Category | Level | Total $ | Payer Data | Sources | Status |
|----------|-------|---------|------------|---------|--------|
| Total NHE | 0 | ✅ | ✅ | ✅ | ✅ COMPLETE |
| Hospital Care | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Physician Services | 1 | ✅ | ✅ | ✅ | ✅ COMPLETE |
| Rx Drugs | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Nursing Care | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Dental | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Home Health | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Other Professional | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| DME | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Other Non-Durable | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |
| Other Health Svc | 1 | ✅ | ❌ | ❌ | 🚧 NEED DATA |

**Level 1 Completion:** 20% (2/10 categories complete)

---

## 💡 TIPS FOR EFFICIENT DATA COLLECTION

1. **Batch Processing:** Collect all Level 1 payer data in one CMS session
2. **Spreadsheet First:** Use Excel/Google Sheets to organize before JSON
3. **Validate Math:** Check sums immediately to catch errors early
4. **Source URLs:** Copy exact URLs, not just domain names
5. **Screenshot:** Take screenshots of source data tables for backup
6. **Version Control:** Save copies as you make progress
7. **Ask for Help:** If data seems inconsistent, pause and verify

---

## 📞 QUESTIONS TO RESOLVE DURING COLLECTION

- [ ] How does CMS categorize hospital-based physician services?
- [ ] Are ambulatory surgical centers in "Hospital" or "Other"?
- [ ] What exactly is in "Other" payer category for each service type?
- [ ] Do retail clinic visits count as Physician Services?
- [ ] Are COVID-related public health expenditures in "Other Health Services"?

---

**Ready to start?** Begin with the CMS NHE Tables download!
