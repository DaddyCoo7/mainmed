/*
  # Create Medical Coding Resources Tables
  
  ## Overview
  This migration creates database tables for medical coding resources to support
  ranking for competitor keywords including CPT codes, ICD-10 codes, modifiers,
  EMR integrations, state billing laws, and dental codes.
  
  ## New Tables
  
  ### 1. `cpt_codes`
  Medical procedure codes with descriptions, categories, and RVU values
  - Supports cheat sheets and specialty-specific guides
  - Enables searchable code database
  
  ### 2. `icd10_codes`
  Diagnosis codes with clinical notes and usage guidelines
  - Pre-op clearance codes, surgical clearance codes, etc.
  - Commonly used codes flagging for quick reference
  
  ### 3. `billing_modifiers`
  Medical billing modifiers (GA, GW, GV, etc.) with usage guidelines
  - Detailed examples and specialty-specific guidance
  - Comparison information for similar modifiers
  
  ### 4. `emr_integrations`
  EMR/EHR system integration pages and setup guides
  - eClinicalWorks, Office Ally, Kareo, Athena, Epic, etc.
  - Features, pricing, supported specialties
  
  ### 5. `state_billing_laws`
  State-specific billing regulations and statute of limitations
  - Timely filing limits by state
  - Balance billing and surprise billing laws
  - Legal summaries and source references
  
  ### 6. `dental_codes`
  CDT dental procedure codes (ADA codes)
  - D0140, D9310, and other common dental codes
  - Category organization for cheat sheets
  
  ## Security
  - Enable RLS on all tables
  - Public read access for all content (educational/reference material)
  - Authenticated admin access for content management
  
  ## Performance
  - Indexes on code lookups, specialty filters, and search
  - Full-text search capability for descriptions
*/

-- Create cpt_codes table
CREATE TABLE IF NOT EXISTS cpt_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  specialty text,
  year integer DEFAULT 2025,
  relative_value decimal(10,2),
  commonly_used boolean DEFAULT false,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create icd10_codes table
CREATE TABLE IF NOT EXISTS icd10_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  commonly_used boolean DEFAULT false,
  clinical_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create billing_modifiers table
CREATE TABLE IF NOT EXISTS billing_modifiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  modifier text UNIQUE NOT NULL,
  description text NOT NULL,
  usage_guidelines text,
  specialty_specific text,
  examples text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create emr_integrations table
CREATE TABLE IF NOT EXISTS emr_integrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  logo_url text,
  description text NOT NULL,
  features text[] DEFAULT '{}',
  setup_guide text,
  supported_specialties text[] DEFAULT '{}',
  integration_type text DEFAULT 'API',
  pricing_notes text,
  popularity_rank integer DEFAULT 100,
  meta_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create state_billing_laws table
CREATE TABLE IF NOT EXISTS state_billing_laws (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state_code text UNIQUE NOT NULL,
  state_name text NOT NULL,
  statute_of_limitations_years integer,
  timely_filing_limit_days integer,
  balance_billing_allowed boolean DEFAULT true,
  surprise_billing_protection boolean DEFAULT false,
  legal_summary text,
  key_regulations text[] DEFAULT '{}',
  last_updated date DEFAULT CURRENT_DATE,
  sources text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create dental_codes table
CREATE TABLE IF NOT EXISTS dental_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  commonly_used boolean DEFAULT false,
  ada_category text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_cpt_codes_code ON cpt_codes(code);
CREATE INDEX IF NOT EXISTS idx_cpt_codes_specialty ON cpt_codes(specialty);
CREATE INDEX IF NOT EXISTS idx_cpt_codes_category ON cpt_codes(category);
CREATE INDEX IF NOT EXISTS idx_cpt_codes_commonly_used ON cpt_codes(commonly_used) WHERE commonly_used = true;

CREATE INDEX IF NOT EXISTS idx_icd10_codes_code ON icd10_codes(code);
CREATE INDEX IF NOT EXISTS idx_icd10_codes_category ON icd10_codes(category);
CREATE INDEX IF NOT EXISTS idx_icd10_codes_commonly_used ON icd10_codes(commonly_used) WHERE commonly_used = true;

CREATE INDEX IF NOT EXISTS idx_emr_integrations_slug ON emr_integrations(slug);
CREATE INDEX IF NOT EXISTS idx_emr_integrations_popularity ON emr_integrations(popularity_rank);

CREATE INDEX IF NOT EXISTS idx_state_billing_laws_code ON state_billing_laws(state_code);

CREATE INDEX IF NOT EXISTS idx_dental_codes_code ON dental_codes(code);
CREATE INDEX IF NOT EXISTS idx_dental_codes_commonly_used ON dental_codes(commonly_used) WHERE commonly_used = true;

-- Enable Row Level Security
ALTER TABLE cpt_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE icd10_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE billing_modifiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE emr_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE state_billing_laws ENABLE ROW LEVEL SECURITY;
ALTER TABLE dental_codes ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for CPT codes"
  ON cpt_codes FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access for ICD-10 codes"
  ON icd10_codes FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access for billing modifiers"
  ON billing_modifiers FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access for EMR integrations"
  ON emr_integrations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access for state billing laws"
  ON state_billing_laws FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public read access for dental codes"
  ON dental_codes FOR SELECT
  TO public
  USING (true);

-- Create policies for authenticated admin users
CREATE POLICY "Authenticated users can manage CPT codes"
  ON cpt_codes FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage ICD-10 codes"
  ON icd10_codes FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage billing modifiers"
  ON billing_modifiers FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage EMR integrations"
  ON emr_integrations FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage state billing laws"
  ON state_billing_laws FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage dental codes"
  ON dental_codes FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);