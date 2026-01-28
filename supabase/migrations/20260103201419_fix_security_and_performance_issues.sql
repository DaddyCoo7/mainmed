/*
  # Fix Security and Performance Issues

  ## Changes Made

  1. **RLS Policy Optimization**
     - Fix job_postings RLS policy to use `(select auth.role())` instead of `auth.role()` for better performance at scale

  2. **Remove Unused Indexes**
     - Drop idx_specialty_faqs_slug
     - Drop idx_job_applications_job_posting_id
     - Drop idx_glossary_term_views_term_id
     - Drop idx_indexnow_url
     - Drop idx_indexnow_batch_id
     - Drop idx_blog_posts_slug
     - Drop idx_blog_posts_published_at
     - Drop idx_blog_posts_category
     - Drop idx_blog_posts_status
     - Drop idx_blog_posts_search
     - Drop idx_state_pages_state_code

  3. **Fix Multiple Permissive Policies**
     - Consolidate blog_posts SELECT policies into a single policy

  4. **Fix Function Search Path**
     - Update update_updated_at_column function with immutable search_path

  ## Notes
  - Auth DB Connection Strategy requires manual adjustment in Supabase Dashboard (cannot be fixed via migration)
*/

-- 1. Fix RLS policy on job_postings table to optimize auth function calls
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'job_postings' 
    AND policyname = 'Public can view active, authenticated can view all job postings'
  ) THEN
    DROP POLICY "Public can view active, authenticated can view all job postings" ON job_postings;
    
    CREATE POLICY "Public can view active, authenticated can view all job postings"
      ON job_postings
      FOR SELECT
      USING (
        is_active = true OR (select auth.role()) = 'authenticated'
      );
  END IF;
END $$;

-- 2. Drop unused indexes (with IF EXISTS to prevent errors)
DROP INDEX IF EXISTS idx_specialty_faqs_slug;
DROP INDEX IF EXISTS idx_job_applications_job_posting_id;
DROP INDEX IF EXISTS idx_glossary_term_views_term_id;
DROP INDEX IF EXISTS idx_indexnow_url;
DROP INDEX IF EXISTS idx_indexnow_batch_id;
DROP INDEX IF EXISTS idx_blog_posts_slug;
DROP INDEX IF EXISTS idx_blog_posts_published_at;
DROP INDEX IF EXISTS idx_blog_posts_category;
DROP INDEX IF EXISTS idx_blog_posts_status;
DROP INDEX IF EXISTS idx_blog_posts_search;
DROP INDEX IF EXISTS idx_state_pages_state_code;

-- 3. Fix multiple permissive policies on blog_posts table
DO $$
BEGIN
  -- Drop existing conflicting policies if they exist
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'blog_posts' 
    AND policyname = 'Anyone can view published posts'
  ) THEN
    DROP POLICY "Anyone can view published posts" ON blog_posts;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'blog_posts' 
    AND policyname = 'Authenticated users can view all posts'
  ) THEN
    DROP POLICY "Authenticated users can view all posts" ON blog_posts;
  END IF;

  -- Create a single consolidated policy with optimized auth check
  CREATE POLICY "Users can view posts based on status and auth"
    ON blog_posts
    FOR SELECT
    USING (
      status = 'published' OR (select auth.role()) = 'authenticated'
    );
END $$;

-- 4. Fix function search_path issue
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;