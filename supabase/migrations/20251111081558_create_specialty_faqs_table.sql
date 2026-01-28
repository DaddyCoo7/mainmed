/*
  # Create Specialty FAQs Table for Medical Billing Specialties

  ## Overview
  This migration creates a comprehensive FAQ system for 50+ medical billing specialty pages 
  optimized for SEO, E-E-A-T principles, Answer Search, and AI search engines.

  ## 1. New Tables
    - `specialty_faqs`
      - `id` (uuid, primary key) - Unique identifier for each FAQ
      - `specialty_slug` (text, indexed) - URL slug matching specialty pages (e.g., 'cardiology', 'dermatology')
      - `category` (text) - FAQ category for organization (e.g., 'billing-basics', 'coding', 'insurance', 'compliance')
      - `question` (text) - The FAQ question optimized for search queries
      - `answer` (text) - Comprehensive answer with E-E-A-T principles
      - `short_answer` (text) - Brief answer for featured snippets (50-60 words)
      - `priority` (integer) - Display order (lower numbers appear first)
      - `search_keywords` (text array) - Keywords for internal FAQ search
      - `is_published` (boolean) - Publication status
      - `view_count` (integer) - Track FAQ engagement
      - `helpful_count` (integer) - User feedback tracking
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  ## 2. Security
    - Enable RLS on `specialty_faqs` table
    - Add policy for public read access (FAQs are public content)
    - Admin-only write access (not exposed via RLS, managed server-side)

  ## 3. Performance
    - Index on specialty_slug for fast filtering
    - Index on category for category filtering
    - Index on priority for ordering
    - GIN index on search_keywords for full-text search

  ## 4. Important Notes
    - FAQs are public content optimized for search engines
    - Content includes structured data markup information
    - Designed for easy content management and updates
    - Supports analytics tracking via view_count and helpful_count
*/

-- Create specialty_faqs table
CREATE TABLE IF NOT EXISTS specialty_faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  specialty_slug text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  question text NOT NULL,
  answer text NOT NULL,
  short_answer text,
  priority integer DEFAULT 100,
  search_keywords text[] DEFAULT '{}',
  is_published boolean DEFAULT true,
  view_count integer DEFAULT 0,
  helpful_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_specialty_faqs_slug ON specialty_faqs(specialty_slug);
CREATE INDEX IF NOT EXISTS idx_specialty_faqs_category ON specialty_faqs(category);
CREATE INDEX IF NOT EXISTS idx_specialty_faqs_priority ON specialty_faqs(priority);
CREATE INDEX IF NOT EXISTS idx_specialty_faqs_published ON specialty_faqs(is_published);
CREATE INDEX IF NOT EXISTS idx_specialty_faqs_keywords ON specialty_faqs USING GIN(search_keywords);

-- Enable Row Level Security
ALTER TABLE specialty_faqs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "FAQs are publicly readable"
  ON specialty_faqs
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_specialty_faqs_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER set_specialty_faqs_updated_at
  BEFORE UPDATE ON specialty_faqs
  FOR EACH ROW
  EXECUTE FUNCTION update_specialty_faqs_updated_at();