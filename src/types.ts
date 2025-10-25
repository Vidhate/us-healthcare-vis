/**
 * Healthcare Spending Data Types
 * Version: 1.0.0
 * Data Year: 2023
 */

// Source citation structure
export interface DataSource {
  organization: string;          // e.g., "CMS", "KFF", "CDC"
  title: string;                 // Title of the report/publication
  url: string;                   // Direct link to source
  publicationDate: string;       // YYYY-MM-DD format
  accessDate: string;            // When we retrieved this data
  specificCitation?: string;     // Page number, table number, etc.
  dataYear: number;              // What year the data represents (e.g., 2023)
}

// Payer breakdown - who pays for this spending
export interface PayerBreakdown {
  privateInsurance: {
    amount: number;              // in billions
    percentage: number;          // of this category's total
    sources: DataSource[];
  };
  medicare: {
    amount: number;
    percentage: number;
    sources: DataSource[];
  };
  medicaid: {
    amount: number;
    percentage: number;
    sources: DataSource[];
  };
  outOfPocket: {
    amount: number;
    percentage: number;
    sources: DataSource[];
  };
  other: {
    amount: number;
    percentage: number;
    description: string;         // What "other" includes
    sources: DataSource[];
  };
}

// Growth metrics
export interface GrowthMetrics {
  yearOverYearGrowth: number;    // Percentage
  comparedToYear: number;        // Which year we're comparing to
  sources: DataSource[];
}

// State-by-state data (optional, where available)
export interface StateBreakdown {
  state: string;                 // Two-letter code (e.g., "CA")
  perCapitaSpending: number;     // Dollars per person
  totalSpending?: number;        // Total in millions
  percentageOfNational?: number;
  sources: DataSource[];
}

// Demographic breakdown (optional, where available)
export interface DemographicBreakdown {
  ageGroups?: {
    [key: string]: {             // e.g., "0-18", "19-44", "45-64", "65+"
      amount: number;
      percentage: number;
      perCapita: number;
      sources: DataSource[];
    };
  };
  byGender?: {
    male: { amount: number; percentage: number; sources: DataSource[] };
    female: { amount: number; percentage: number; sources: DataSource[] };
  };
}

// Core spending category node
export interface SpendingCategory {
  id: string;                    // Unique identifier (e.g., "total-nhe", "hospital-care")
  name: string;                  // Display name
  level: number;                 // Hierarchy level (0 = top, 1 = major category, etc.)
  
  // Spending data
  totalSpending: {
    amount: number;              // Total spending in billions
    year: number;                // Data year
    sources: DataSource[];
  };
  
  // Payer breakdown
  payerBreakdown: PayerBreakdown;
  
  // Share of parent and GDP
  percentageOfParent?: number;   // What % of parent category
  percentageOfGDP?: number;      // What % of GDP (for major categories)
  
  // Growth information
  growth?: GrowthMetrics;
  
  // Geographic variation
  stateData?: StateBreakdown[];
  
  // Demographic variation
  demographics?: DemographicBreakdown;
  
  // Additional context
  description: string;           // What this category includes
  naicsCodes?: string[];        // Industry classification codes if applicable
  cmsCategory?: string;         // Official CMS category name
  
  // Hierarchy
  parentId?: string;            // ID of parent category
  children?: SpendingCategory[]; // Subcategories
  hasMoreDetail: boolean;       // Can we drill down further?
  
  // Metadata
  notes?: string[];             // Important caveats or clarifications
  lastUpdated: string;          // When this data was last updated (YYYY-MM-DD)
  dataQuality: 'high' | 'medium' | 'estimated'; // Confidence level
}

// Root structure
export interface HealthcareSpendingData {
  metadata: {
    title: string;
    version: string;
    lastUpdated: string;         // YYYY-MM-DD
    dataYear: number;
    description: string;
    totalGDP: {
      amount: number;            // in billions
      sources: DataSource[];
    };
    totalPopulation: {
      count: number;             // in millions
      sources: DataSource[];
    };
    perCapitaSpending: {
      amount: number;
      sources: DataSource[];
    };
    license: {
      type: string;              // e.g., "CC-BY-4.0"
      url: string;
      attribution: string;
    };
  };
  
  // The hierarchical spending tree
  root: SpendingCategory;
  
  // Glossary of terms
  glossary: {
    [term: string]: {
      definition: string;
      sources: DataSource[];
    };
  };
  
  // Methodology notes
  methodology: {
    dataCollection: string;
    categorization: string;
    limitations: string[];
    sources: DataSource[];
  };
}
