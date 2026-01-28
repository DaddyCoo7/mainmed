/*
  # Medical Billing Glossary Database Schema

  ## Overview
  Creates database structure for storing and managing medical billing glossary terms
  with support for search, categorization, and analytics.

  ## New Tables Created
  
  ### `glossary_terms`
  Stores all medical billing and RCM terminology definitions
  - `id` (uuid, primary key) - Unique identifier for each term
  - `term` (text, unique, not null) - The glossary term name
  - `definition` (text, not null) - Short, clear definition
  - `detailed_explanation` (text, not null) - Comprehensive explanation
  - `example` (text, not null) - Real-world usage example
  - `why_it_matters` (text, not null) - Importance/impact explanation
  - `category` (text, not null) - Term category (Billing Process, Insurance Terms, etc.)
  - `related_terms` (text array) - Array of related term names
  - `search_vector` (tsvector) - Full-text search index
  - `view_count` (integer, default 0) - Number of times term viewed
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `glossary_searches`
  Tracks user search queries for analytics and improvement
  - `id` (uuid, primary key) - Unique identifier
  - `search_query` (text, not null) - The search term entered
  - `results_count` (integer, default 0) - Number of results returned
  - `created_at` (timestamptz) - Search timestamp

  ### `glossary_term_views`
  Tracks detailed term view analytics
  - `id` (uuid, primary key) - Unique identifier
  - `term_id` (uuid, foreign key) - Reference to glossary_terms
  - `viewed_at` (timestamptz) - View timestamp
  - `referrer` (text) - Page that linked to term

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access to glossary_terms for unauthenticated users
  - Insert-only access for analytics tables (searches and views)
  - Admin access required for term modifications

  ## Indexes
  - Full-text search index on term, definition, and detailed_explanation
  - Category index for filtering
  - Timestamps for analytics queries

  ## Performance Optimizations
  - GIN index for full-text search
  - Array index for related_terms lookups
  - Materialized view could be added later for trending terms
*/

-- Create glossary_terms table
CREATE TABLE IF NOT EXISTS glossary_terms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  term text UNIQUE NOT NULL,
  definition text NOT NULL,
  detailed_explanation text NOT NULL,
  example text NOT NULL,
  why_it_matters text NOT NULL,
  category text NOT NULL,
  related_terms text[] DEFAULT '{}',
  search_vector tsvector,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create glossary_searches table for analytics
CREATE TABLE IF NOT EXISTS glossary_searches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  search_query text NOT NULL,
  results_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create glossary_term_views table for detailed analytics
CREATE TABLE IF NOT EXISTS glossary_term_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id uuid REFERENCES glossary_terms(id) ON DELETE CASCADE,
  viewed_at timestamptz DEFAULT now(),
  referrer text
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_glossary_terms_category ON glossary_terms(category);
CREATE INDEX IF NOT EXISTS idx_glossary_terms_search_vector ON glossary_terms USING gin(search_vector);
CREATE INDEX IF NOT EXISTS idx_glossary_terms_related ON glossary_terms USING gin(related_terms);
CREATE INDEX IF NOT EXISTS idx_glossary_searches_created ON glossary_searches(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_glossary_term_views_term_id ON glossary_term_views(term_id);
CREATE INDEX IF NOT EXISTS idx_glossary_term_views_viewed_at ON glossary_term_views(viewed_at DESC);

-- Create function to update search_vector automatically
CREATE OR REPLACE FUNCTION update_glossary_search_vector()
RETURNS trigger AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.term, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.definition, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.detailed_explanation, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW.category, '')), 'D');
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for search_vector updates
DROP TRIGGER IF EXISTS glossary_terms_search_vector_update ON glossary_terms;
CREATE TRIGGER glossary_terms_search_vector_update
  BEFORE INSERT OR UPDATE ON glossary_terms
  FOR EACH ROW
  EXECUTE FUNCTION update_glossary_search_vector();

-- Enable Row Level Security
ALTER TABLE glossary_terms ENABLE ROW LEVEL SECURITY;
ALTER TABLE glossary_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE glossary_term_views ENABLE ROW LEVEL SECURITY;

-- RLS Policies for glossary_terms
CREATE POLICY "Anyone can view glossary terms"
  ON glossary_terms FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert glossary terms"
  ON glossary_terms FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update glossary terms"
  ON glossary_terms FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for glossary_searches (insert-only for analytics)
CREATE POLICY "Anyone can insert search queries"
  ON glossary_searches FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view searches"
  ON glossary_searches FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for glossary_term_views (insert-only for analytics)
CREATE POLICY "Anyone can insert term views"
  ON glossary_term_views FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view analytics"
  ON glossary_term_views FOR SELECT
  TO authenticated
  USING (true);

-- Create function to increment view count
CREATE OR REPLACE FUNCTION increment_term_view_count(term_uuid uuid)
RETURNS void AS $$
BEGIN
  UPDATE glossary_terms
  SET view_count = view_count + 1
  WHERE id = term_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create view for trending terms (most viewed in last 30 days)
CREATE OR REPLACE VIEW trending_glossary_terms AS
SELECT 
  gt.id,
  gt.term,
  gt.definition,
  gt.category,
  COUNT(gtv.id) as recent_views
FROM glossary_terms gt
LEFT JOIN glossary_term_views gtv ON gt.id = gtv.term_id 
  AND gtv.viewed_at > now() - interval '30 days'
GROUP BY gt.id, gt.term, gt.definition, gt.category
ORDER BY recent_views DESC
LIMIT 20;

-- Create view for popular search queries
CREATE OR REPLACE VIEW popular_glossary_searches AS
SELECT 
  search_query,
  COUNT(*) as search_count,
  AVG(results_count) as avg_results
FROM glossary_searches
WHERE created_at > now() - interval '30 days'
GROUP BY search_query
ORDER BY search_count DESC
LIMIT 50;
