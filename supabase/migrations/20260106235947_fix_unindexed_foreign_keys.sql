/*
  # Add Missing Foreign Key Indexes

  1. Performance Improvements
    - Add index on `blog_posts.category_id` for faster category lookups
    - Add index on `glossary_term_views.term_id` for faster term view queries
    - Add index on `job_applications.job_posting_id` for faster application queries

  2. Why These Indexes Matter
    - Foreign key columns are frequently used in JOINs and WHERE clauses
    - Without indexes, these queries perform full table scans
    - Indexes dramatically improve query performance, especially as tables grow
*/

-- Add index for blog_posts.category_id
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id 
  ON blog_posts(category_id);

-- Add index for glossary_term_views.term_id
CREATE INDEX IF NOT EXISTS idx_glossary_term_views_term_id 
  ON glossary_term_views(term_id);

-- Add index for job_applications.job_posting_id
CREATE INDEX IF NOT EXISTS idx_job_applications_job_posting_id 
  ON job_applications(job_posting_id);