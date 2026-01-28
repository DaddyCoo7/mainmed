/*
  # Fix Unindexed Foreign Keys

  This migration adds missing indexes on foreign key columns to improve query performance.

  ## Performance Improvements
  
  1. **blog_posts.category_id**
     - Adds index `idx_blog_posts_category_id`
     - Improves JOIN performance when querying posts by category
     
  2. **glossary_term_views.term_id**
     - Adds index `idx_glossary_term_views_term_id`
     - Improves performance when counting views per term
     
  3. **job_applications.job_posting_id**
     - Adds index `idx_job_applications_job_posting_id`
     - Improves performance when querying applications for a specific job posting

  ## Impact
  
  These indexes will significantly improve query performance for:
  - Fetching blog posts filtered by category
  - Counting glossary term view statistics
  - Retrieving job applications for specific postings
*/

-- Add index for blog_posts.category_id foreign key
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id 
  ON blog_posts(category_id);

-- Add index for glossary_term_views.term_id foreign key
CREATE INDEX IF NOT EXISTS idx_glossary_term_views_term_id 
  ON glossary_term_views(term_id);

-- Add index for job_applications.job_posting_id foreign key
CREATE INDEX IF NOT EXISTS idx_job_applications_job_posting_id 
  ON job_applications(job_posting_id);