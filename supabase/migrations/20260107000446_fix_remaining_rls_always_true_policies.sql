/*
  # Fix Remaining RLS Policies with Always True Conditions

  This migration addresses the remaining RLS policies that use `WITH CHECK (true)` 
  conditions which effectively bypass row-level security.

  ## Security Improvements

  1. **contact_submissions** - Add validation for contact form submissions
  2. **glossary_searches** - Add validation for search query tracking
  3. **glossary_term_views** - Add validation for term view tracking
  4. **job_applications** - Add validation for job application submissions

  ## Changes

  - Replace unrestricted `WITH CHECK (true)` with proper data validation
  - Maintain public access where needed for application functionality
  - Add length and null checks to prevent abuse
*/

-- ============================================================================
-- contact_submissions: Add validation to public insert policies
-- ============================================================================

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
DROP POLICY IF EXISTS "auth_insert_contact" ON contact_submissions;

-- Allow anonymous users to submit contact forms with validation
CREATE POLICY "Anonymous users can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND length(email) > 0 
    AND length(email) <= 255
    AND name IS NOT NULL
    AND length(name) > 0
  );

-- Allow authenticated users to submit contact forms with validation
CREATE POLICY "Authenticated users can submit contact forms"
  ON contact_submissions FOR INSERT
  TO authenticated
  WITH CHECK (
    email IS NOT NULL 
    AND length(email) > 0 
    AND length(email) <= 255
    AND name IS NOT NULL
    AND length(name) > 0
  );

-- ============================================================================
-- glossary_searches: Add validation for search tracking
-- ============================================================================

DROP POLICY IF EXISTS "Anyone can insert search queries" ON glossary_searches;

-- Allow public to insert search queries for analytics with validation
CREATE POLICY "Public can track search queries"
  ON glossary_searches FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    search_query IS NOT NULL 
    AND length(search_query) > 0 
    AND length(search_query) <= 500
  );

-- ============================================================================
-- glossary_term_views: Add validation for term view tracking
-- ============================================================================

DROP POLICY IF EXISTS "Anyone can insert term views" ON glossary_term_views;

-- Allow public to track term views for analytics with validation
CREATE POLICY "Public can track term views"
  ON glossary_term_views FOR INSERT
  TO anon, authenticated
  WITH CHECK (term_id IS NOT NULL);

-- ============================================================================
-- job_applications: Add validation for job application submissions
-- ============================================================================

DROP POLICY IF EXISTS "Anyone can submit job applications" ON job_applications;

-- Allow public to submit job applications with validation
CREATE POLICY "Public can submit job applications"
  ON job_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    job_posting_id IS NOT NULL
    AND applicant_name IS NOT NULL
    AND length(applicant_name) > 0
    AND email IS NOT NULL
    AND length(email) > 0
    AND length(email) <= 255
  );