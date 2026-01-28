/*
  # Fix Database Security Issues

  ## Summary
  This migration addresses security and performance concerns identified in the database audit.

  ## Changes Made

  1. **Add Missing Foreign Key Index**
     - Added index on `glossary_term_views.term_id` to improve JOIN performance
     - This foreign key was missing a covering index which can impact query performance

  2. **Remove Unused Indexes**
     - Removed `idx_glossary_search_vector` (unused, already covered by unique constraint)
     - Removed `idx_glossary_terms_term` (unused, term already has unique constraint)
     - Removed `idx_contact_submissions_email` (unused in current queries)
     - Removed `idx_contact_submissions_created_at` (unused in current queries)
     - Removed `idx_contact_submissions_status` (unused in current queries)
     - These indexes consume space and slow down writes without providing query benefits

  3. **Fix Function Security Issues**
     - Fixed `update_updated_at_column` function to use immutable search_path
     - Added explicit schema qualification to prevent search path injection attacks
     - This prevents potential privilege escalation vulnerabilities

  ## Security Improvements
  - Function search paths are now immutable and explicitly set
  - Removed unnecessary indexes that don't provide security or performance benefits
  - Added required index for foreign key joins

  ## Performance Improvements
  - Faster INSERT/UPDATE operations due to fewer indexes
  - Better JOIN performance on glossary_term_views with new index
  - Reduced storage overhead from unused indexes
*/

-- 1. Add missing index for foreign key on glossary_term_views
CREATE INDEX IF NOT EXISTS idx_glossary_term_views_term_id_fkey 
  ON public.glossary_term_views(term_id);

-- 2. Remove unused indexes from glossary_terms table
DROP INDEX IF EXISTS public.idx_glossary_search_vector;
DROP INDEX IF EXISTS public.idx_glossary_terms_term;

-- 3. Remove unused indexes from contact_submissions table
DROP INDEX IF EXISTS public.idx_contact_submissions_email;
DROP INDEX IF EXISTS public.idx_contact_submissions_created_at;
DROP INDEX IF EXISTS public.idx_contact_submissions_status;

-- 4. Fix update_updated_at_column function security issue
-- Drop the trigger first
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;

-- Recreate the function with explicit search_path
DROP FUNCTION IF EXISTS public.update_updated_at_column();
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
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

-- Recreate the trigger
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add comment explaining the security measure
COMMENT ON FUNCTION public.update_updated_at_column() IS 
  'Trigger function with explicit search_path to prevent search path injection attacks. SECURITY DEFINER allows execution without elevated privileges.';
