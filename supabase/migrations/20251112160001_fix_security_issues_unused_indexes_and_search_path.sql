/*
  # Fix Security Issues - Remove Unused Indexes and Fix Function Search Path

  1. Drop Unused Indexes
    - Drop `idx_glossary_term_views_term_id_fkey` (foreign key already indexed automatically)
    - Drop `idx_specialty_faqs_category` (not being used in queries)
    - Drop `idx_specialty_faqs_priority` (not being used in queries)
    - Drop `idx_specialty_faqs_published` (not being used in queries)
    - Drop `idx_specialty_faqs_keywords` (not being used in queries)
    - Drop `idx_contact_submissions_sms_opt_in` (not being used in queries yet)

  2. Fix Function Search Path
    - Update `update_specialty_faqs_updated_at` function to have immutable search_path
    - Update `update_updated_at_column` function to have immutable search_path

  3. Important Notes
    - Removing unused indexes improves write performance and reduces storage
    - Foreign key constraints automatically create indexes, so explicit indexes are redundant
    - Setting immutable search_path prevents SQL injection attacks through search_path manipulation
    - Indexes can be recreated later if usage patterns change
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_glossary_term_views_term_id_fkey;
DROP INDEX IF EXISTS idx_specialty_faqs_category;
DROP INDEX IF EXISTS idx_specialty_faqs_priority;
DROP INDEX IF EXISTS idx_specialty_faqs_published;
DROP INDEX IF EXISTS idx_specialty_faqs_keywords;
DROP INDEX IF EXISTS idx_contact_submissions_sms_opt_in;

-- Fix search_path for update_specialty_faqs_updated_at function
CREATE OR REPLACE FUNCTION update_specialty_faqs_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate triggers to use updated functions
DROP TRIGGER IF EXISTS update_specialty_faqs_updated_at ON specialty_faqs;
CREATE TRIGGER update_specialty_faqs_updated_at
  BEFORE UPDATE ON specialty_faqs
  FOR EACH ROW
  EXECUTE FUNCTION update_specialty_faqs_updated_at();

DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_glossary_terms_updated_at ON glossary_terms;
CREATE TRIGGER update_glossary_terms_updated_at
  BEFORE UPDATE ON glossary_terms
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
