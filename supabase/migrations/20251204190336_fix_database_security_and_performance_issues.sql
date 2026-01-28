/*
  # Fix Database Security and Performance Issues

  ## Changes Made
  
  1. **Add Missing Index**
     - Add index on `glossary_term_views.term_id` (foreign key) for optimal query performance
  
  2. **Remove Unused Indexes**
     - Drop `idx_job_postings_is_active` (unused index)
     - Drop `idx_job_applications_status` (unused index)
  
  3. **Fix Multiple Permissive Policies**
     - Consolidate duplicate SELECT policies on `job_postings` table
     - Remove redundant policies and create a single comprehensive policy
  
  4. **Fix Function Search Path**
     - Update `update_updated_at_column` function to use immutable search_path
     - Prevents potential security issues from search_path manipulation
  
  ## Security Impact
  - Improved query performance on foreign key lookups
  - Reduced index maintenance overhead
  - Cleaner RLS policy structure
  - Enhanced security for database functions
*/

-- 1. Add index on glossary_term_views.term_id (foreign key)
CREATE INDEX IF NOT EXISTS idx_glossary_term_views_term_id 
ON glossary_term_views(term_id);

-- 2. Drop unused indexes
DROP INDEX IF EXISTS idx_job_postings_is_active;
DROP INDEX IF EXISTS idx_job_applications_status;

-- 3. Fix multiple permissive policies on job_postings
-- Drop existing duplicate SELECT policies
DROP POLICY IF EXISTS "Anyone can view active job postings" ON job_postings;
DROP POLICY IF EXISTS "Authenticated users can view all job postings" ON job_postings;

-- Create a single consolidated SELECT policy
CREATE POLICY "Public can view active, authenticated can view all job postings"
  ON job_postings
  FOR SELECT
  USING (
    (is_active = true) OR 
    (auth.role() = 'authenticated'::text)
  );

-- 4. Fix function search_path to be immutable
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate triggers that used this function (CASCADE would have dropped them)
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_job_postings_updated_at ON job_postings;
CREATE TRIGGER update_job_postings_updated_at
  BEFORE UPDATE ON job_postings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_job_applications_updated_at ON job_applications;
CREATE TRIGGER update_job_applications_updated_at
  BEFORE UPDATE ON job_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_glossary_terms_updated_at ON glossary_terms;
CREATE TRIGGER update_glossary_terms_updated_at
  BEFORE UPDATE ON glossary_terms
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_specialty_faqs_updated_at ON specialty_faqs;
CREATE TRIGGER update_specialty_faqs_updated_at
  BEFORE UPDATE ON specialty_faqs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
