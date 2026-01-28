/*
  # Enhance Contact Submissions Table
  
  ## Changes
  - Add contact_type field to categorize the reason for contact
  - Add contact_purpose field for specific purpose
  - Add preferred_contact_method field
  - Add additional context fields
  
  ## Contact Types
  - new_client: Interested in becoming a client
  - existing_client: Current client with questions
  - security_inquiry: Questions about HIPAA/security
  - partnership: Business partnership opportunities
  - employment: Career opportunities
  - vendor: Vendor/supplier inquiries
  - other: Other inquiries
*/

-- Add new columns to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS contact_type text DEFAULT 'new_client',
ADD COLUMN IF NOT EXISTS contact_purpose text,
ADD COLUMN IF NOT EXISTS preferred_contact_method text DEFAULT 'email',
ADD COLUMN IF NOT EXISTS company_size text,
ADD COLUMN IF NOT EXISTS current_billing_system text,
ADD COLUMN IF NOT EXISTS estimated_monthly_charges integer;

-- Add check constraint for contact_type
ALTER TABLE contact_submissions
DROP CONSTRAINT IF EXISTS contact_submissions_contact_type_check;

ALTER TABLE contact_submissions
ADD CONSTRAINT contact_submissions_contact_type_check 
CHECK (contact_type IN (
  'new_client',
  'existing_client',
  'security_inquiry',
  'partnership',
  'employment',
  'vendor',
  'other'
));

-- Add check constraint for preferred_contact_method
ALTER TABLE contact_submissions
DROP CONSTRAINT IF EXISTS contact_submissions_preferred_contact_method_check;

ALTER TABLE contact_submissions
ADD CONSTRAINT contact_submissions_preferred_contact_method_check 
CHECK (preferred_contact_method IN (
  'email',
  'phone',
  'sms',
  'any'
));

-- Add check constraint for company_size
ALTER TABLE contact_submissions
DROP CONSTRAINT IF EXISTS contact_submissions_company_size_check;

ALTER TABLE contact_submissions
ADD CONSTRAINT contact_submissions_company_size_check 
CHECK (company_size IN (
  'solo',
  'small_2_10',
  'medium_11_50',
  'large_51_plus',
  'not_specified'
));

-- Add comment to explain the new fields
COMMENT ON COLUMN contact_submissions.contact_type IS 'Type of inquiry: new_client, existing_client, security_inquiry, partnership, employment, vendor, other';
COMMENT ON COLUMN contact_submissions.contact_purpose IS 'Specific purpose or subject of the contact';
COMMENT ON COLUMN contact_submissions.preferred_contact_method IS 'How the contact prefers to be reached: email, phone, sms, any';
COMMENT ON COLUMN contact_submissions.company_size IS 'Size of the practice/company: solo, small_2_10, medium_11_50, large_51_plus, not_specified';
COMMENT ON COLUMN contact_submissions.current_billing_system IS 'Current billing system in use (if applicable)';
COMMENT ON COLUMN contact_submissions.estimated_monthly_charges IS 'Estimated number of monthly charges/claims (if applicable)';
