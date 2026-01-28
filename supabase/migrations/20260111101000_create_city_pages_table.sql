/*
  # Create City Pages Table

  1. New Tables
    - `city_pages`
      - `id` (uuid, primary key)
      - `state_slug` (text, foreign key to state_pages)
      - `city_name` (text)
      - `city_slug` (text)
      - `metro_area` (text) - e.g., "Greater Los Angeles Area"
      - `population` (text) - e.g., "3.9M"
      - `hero_title` (text)
      - `hero_description` (text)
      - `key_benefits` (jsonb)
      - `nearby_cities` (text[])
      - `meta_title` (text)
      - `meta_description` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `city_pages` table
    - Add policy for public read access
  
  3. Indexes
    - Add index on state_slug for efficient lookups
    - Add unique constraint on (state_slug, city_slug)
*/

CREATE TABLE IF NOT EXISTS city_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state_slug TEXT NOT NULL REFERENCES state_pages(slug) ON DELETE CASCADE,
  city_name TEXT NOT NULL,
  city_slug TEXT NOT NULL,
  metro_area TEXT,
  population TEXT,
  hero_title TEXT NOT NULL,
  hero_description TEXT NOT NULL,
  key_benefits JSONB DEFAULT '[]'::jsonb,
  nearby_cities TEXT[] DEFAULT ARRAY[]::TEXT[],
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(state_slug, city_slug)
);

-- Create index for efficient state lookups
CREATE INDEX IF NOT EXISTS idx_city_pages_state_slug ON city_pages(state_slug);

-- Create index for slug lookups
CREATE INDEX IF NOT EXISTS idx_city_pages_city_slug ON city_pages(city_slug);

-- Enable RLS
ALTER TABLE city_pages ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "City pages are viewable by everyone"
  ON city_pages FOR SELECT
  TO public
  USING (true);
