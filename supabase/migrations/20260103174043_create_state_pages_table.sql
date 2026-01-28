/*
  # Create State Landing Pages Table

  1. New Tables
    - `state_pages`
      - `id` (uuid, primary key)
      - `state_name` (text, unique) - Full state name
      - `state_code` (text, unique) - Two-letter state code
      - `slug` (text, unique) - URL-friendly slug
      - `hero_title` (text) - Main headline
      - `hero_description` (text) - Hero section description
      - `major_cities` (text array) - List of major cities
      - `key_benefits` (jsonb) - Array of benefit objects
      - `stats` (jsonb) - State-specific statistics
      - `meta_title` (text) - SEO title
      - `meta_description` (text) - SEO description
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `state_pages` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS state_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state_name text UNIQUE NOT NULL,
  state_code text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  hero_title text NOT NULL,
  hero_description text NOT NULL,
  major_cities text[] DEFAULT '{}',
  key_benefits jsonb DEFAULT '[]',
  stats jsonb DEFAULT '{}',
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE state_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view state pages"
  ON state_pages
  FOR SELECT
  TO public
  USING (true);

-- Create index for fast lookups by slug
CREATE INDEX IF NOT EXISTS idx_state_pages_slug ON state_pages(slug);
CREATE INDEX IF NOT EXISTS idx_state_pages_state_code ON state_pages(state_code);