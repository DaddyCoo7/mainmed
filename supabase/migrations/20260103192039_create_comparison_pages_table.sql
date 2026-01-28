/*
  # Create Comparison Pages Table

  1. New Tables
    - `comparison_pages`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `title` (text) - Page title for SEO
      - `meta_description` (text) - Meta description for SEO
      - `h1` (text) - Main heading
      - `intro` (text) - Introduction paragraph
      - `option_a_name` (text) - First option name (e.g., "In-House Billing")
      - `option_b_name` (text) - Second option name (e.g., "Outsourced Billing")
      - `comparison_factors` (jsonb) - Array of comparison factors with details
      - `winner_summary` (text) - Summary of which option wins in what scenarios
      - `faqs` (jsonb) - Array of FAQs specific to this comparison
      - `cta_text` (text) - Call to action text
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `comparison_pages` table
    - Add policy for public read access (anyone can view)
    - Add policy for authenticated insert/update (admin only)
*/

CREATE TABLE IF NOT EXISTS comparison_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  meta_description text NOT NULL,
  h1 text NOT NULL,
  intro text NOT NULL,
  option_a_name text NOT NULL,
  option_b_name text NOT NULL,
  comparison_factors jsonb NOT NULL DEFAULT '[]'::jsonb,
  winner_summary text NOT NULL,
  faqs jsonb NOT NULL DEFAULT '[]'::jsonb,
  cta_text text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE comparison_pages ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view comparison pages"
  ON comparison_pages
  FOR SELECT
  USING (true);

-- Authenticated users can insert
CREATE POLICY "Authenticated users can insert comparison pages"
  ON comparison_pages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update
CREATE POLICY "Authenticated users can update comparison pages"
  ON comparison_pages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete
CREATE POLICY "Authenticated users can delete comparison pages"
  ON comparison_pages
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_comparison_pages_slug ON comparison_pages(slug);
