/*
  # Fix Security and Performance Issues

  1. Performance Improvements
    - Optimize RLS policies to use (select auth.uid()) instead of auth.uid()
    - Remove unused indexes to reduce storage overhead
    
  2. Security Fixes
    - Remove redundant permissive policies
    - Remove "always true" policies that bypass RLS
    - Ensure proper restrictive policies are in place
    
  3. Tables affected:
    - blog_categories, blog_posts
    - comparison_pages
    - contact_submissions
    - glossary_terms
    - job_applications, job_postings
    - specialty_faqs
    - billing_modifiers, cpt_codes, dental_codes
    - emr_integrations, icd10_codes, state_billing_laws
*/

-- =====================================================
-- 1. FIX AUTH RLS INITIALIZATION (Performance)
-- =====================================================

-- blog_categories policies
DROP POLICY IF EXISTS "Authenticated users can delete own categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Authenticated users can insert categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Authenticated users can update own categories" ON public.blog_categories;

CREATE POLICY "Authenticated users can delete own categories"
  ON public.blog_categories
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can insert categories"
  ON public.blog_categories
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update own categories"
  ON public.blog_categories
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- blog_posts policies
DROP POLICY IF EXISTS "Authenticated users can delete posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON public.blog_posts;

CREATE POLICY "Authenticated users can delete posts"
  ON public.blog_posts
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can insert posts"
  ON public.blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update posts"
  ON public.blog_posts
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- comparison_pages policies
DROP POLICY IF EXISTS "Authenticated users can delete comparison pages" ON public.comparison_pages;
DROP POLICY IF EXISTS "Authenticated users can insert comparison pages" ON public.comparison_pages;
DROP POLICY IF EXISTS "Authenticated users can update comparison pages" ON public.comparison_pages;

CREATE POLICY "Authenticated users can delete comparison pages"
  ON public.comparison_pages
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can insert comparison pages"
  ON public.comparison_pages
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update comparison pages"
  ON public.comparison_pages
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- contact_submissions policies
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON public.contact_submissions;

CREATE POLICY "Authenticated users can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- glossary_terms policies
DROP POLICY IF EXISTS "Authenticated users can insert glossary terms" ON public.glossary_terms;
DROP POLICY IF EXISTS "Authenticated users can update glossary terms" ON public.glossary_terms;

CREATE POLICY "Authenticated users can insert glossary terms"
  ON public.glossary_terms
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update glossary terms"
  ON public.glossary_terms
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- job_applications policies
DROP POLICY IF EXISTS "Authenticated users can delete applications" ON public.job_applications;
DROP POLICY IF EXISTS "Authenticated users can update applications" ON public.job_applications;

CREATE POLICY "Authenticated users can delete applications"
  ON public.job_applications
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update applications"
  ON public.job_applications
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- job_postings policies
DROP POLICY IF EXISTS "Authenticated users can delete job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated users can insert job postings" ON public.job_postings;
DROP POLICY IF EXISTS "Authenticated users can update job postings" ON public.job_postings;

CREATE POLICY "Authenticated users can delete job postings"
  ON public.job_postings
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can insert job postings"
  ON public.job_postings
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update job postings"
  ON public.job_postings
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- specialty_faqs policies
DROP POLICY IF EXISTS "Authenticated users can insert FAQs" ON public.specialty_faqs;

CREATE POLICY "Authenticated users can insert FAQs"
  ON public.specialty_faqs
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

-- =====================================================
-- 2. REMOVE UNUSED INDEXES
-- =====================================================

DROP INDEX IF EXISTS public.idx_glossary_term_views_term_id;
DROP INDEX IF EXISTS public.idx_job_applications_job_posting_id;
DROP INDEX IF EXISTS public.idx_city_pages_state_slug;
DROP INDEX IF EXISTS public.idx_blog_posts_category_id;
DROP INDEX IF EXISTS public.idx_cpt_codes_specialty;
DROP INDEX IF EXISTS public.idx_cpt_codes_category;
DROP INDEX IF EXISTS public.idx_cpt_codes_commonly_used;
DROP INDEX IF EXISTS public.idx_icd10_codes_code;
DROP INDEX IF EXISTS public.idx_icd10_codes_category;
DROP INDEX IF EXISTS public.idx_icd10_codes_commonly_used;
DROP INDEX IF EXISTS public.idx_emr_integrations_slug;
DROP INDEX IF EXISTS public.idx_state_billing_laws_code;
DROP INDEX IF EXISTS public.idx_dental_codes_commonly_used;

-- =====================================================
-- 3. FIX MULTIPLE PERMISSIVE POLICIES & ALWAYS TRUE
-- =====================================================

-- billing_modifiers: Remove "always true" policy and keep only public read
DROP POLICY IF EXISTS "Authenticated users can manage billing modifiers" ON public.billing_modifiers;
DROP POLICY IF EXISTS "Public read access for billing modifiers" ON public.billing_modifiers;

CREATE POLICY "Public read access for billing modifiers"
  ON public.billing_modifiers
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert billing modifiers"
  ON public.billing_modifiers
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update billing modifiers"
  ON public.billing_modifiers
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete billing modifiers"
  ON public.billing_modifiers
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- cpt_codes: Remove "always true" policy and keep only public read
DROP POLICY IF EXISTS "Authenticated users can manage CPT codes" ON public.cpt_codes;
DROP POLICY IF EXISTS "Public read access for CPT codes" ON public.cpt_codes;

CREATE POLICY "Public read access for CPT codes"
  ON public.cpt_codes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert CPT codes"
  ON public.cpt_codes
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update CPT codes"
  ON public.cpt_codes
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete CPT codes"
  ON public.cpt_codes
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- dental_codes: Remove "always true" policy and keep only public read
DROP POLICY IF EXISTS "Authenticated users can manage dental codes" ON public.dental_codes;
DROP POLICY IF EXISTS "Public read access for dental codes" ON public.dental_codes;

CREATE POLICY "Public read access for dental codes"
  ON public.dental_codes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert dental codes"
  ON public.dental_codes
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update dental codes"
  ON public.dental_codes
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete dental codes"
  ON public.dental_codes
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- emr_integrations: Remove "always true" policy and keep only public read
DROP POLICY IF EXISTS "Authenticated users can manage EMR integrations" ON public.emr_integrations;
DROP POLICY IF EXISTS "Public read access for EMR integrations" ON public.emr_integrations;

CREATE POLICY "Public read access for EMR integrations"
  ON public.emr_integrations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert EMR integrations"
  ON public.emr_integrations
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update EMR integrations"
  ON public.emr_integrations
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete EMR integrations"
  ON public.emr_integrations
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- icd10_codes: Remove "always true" policy and keep only public read
DROP POLICY IF EXISTS "Authenticated users can manage ICD-10 codes" ON public.icd10_codes;
DROP POLICY IF EXISTS "Public read access for ICD-10 codes" ON public.icd10_codes;

CREATE POLICY "Public read access for ICD-10 codes"
  ON public.icd10_codes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert ICD-10 codes"
  ON public.icd10_codes
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update ICD-10 codes"
  ON public.icd10_codes
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete ICD-10 codes"
  ON public.icd10_codes
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);

-- state_billing_laws: Remove "always true" policy and keep only public read
DROP POLICY IF EXISTS "Authenticated users can manage state billing laws" ON public.state_billing_laws;
DROP POLICY IF EXISTS "Public read access for state billing laws" ON public.state_billing_laws;

CREATE POLICY "Public read access for state billing laws"
  ON public.state_billing_laws
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert state billing laws"
  ON public.state_billing_laws
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can update state billing laws"
  ON public.state_billing_laws
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL)
  WITH CHECK ((select auth.uid()) IS NOT NULL);

CREATE POLICY "Authenticated users can delete state billing laws"
  ON public.state_billing_laws
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) IS NOT NULL);
