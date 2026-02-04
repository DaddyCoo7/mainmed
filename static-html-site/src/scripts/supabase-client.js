/**
 * Supabase client for fetching dynamic content during build time
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '../../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in .env file');
  console.error('Please copy .env from the main project or create one with:');
  console.error('  VITE_SUPABASE_URL=your_url');
  console.error('  VITE_SUPABASE_ANON_KEY=your_key');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetch all state pages data
 */
export async function fetchStatePages() {
  const { data, error } = await supabase
    .from('state_pages')
    .select('*')
    .order('state_name');

  if (error) {
    console.error('Error fetching state pages:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch all city pages data
 */
export async function fetchCityPages() {
  const { data, error } = await supabase
    .from('city_pages')
    .select('*')
    .order('city_name');

  if (error) {
    console.error('Error fetching city pages:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch all comparison pages data
 */
export async function fetchComparisonPages() {
  const { data, error } = await supabase
    .from('comparison_pages')
    .select('*')
    .order('title');

  if (error) {
    console.error('Error fetching comparison pages:', error);
    return [];
  }

  return data || [];
}

/**
 * Fetch FAQs for a specific page
 */
export async function fetchFAQs(pageSlug) {
  const { data, error } = await supabase
    .from('specialty_faqs')
    .select('*')
    .eq('page_slug', pageSlug)
    .order('display_order');

  if (error) {
    console.error(`Error fetching FAQs for ${pageSlug}:`, error);
    return [];
  }

  return data || [];
}

/**
 * Fetch all glossary terms
 */
export async function fetchGlossaryTerms() {
  const { data, error } = await supabase
    .from('glossary_terms')
    .select('*')
    .order('term');

  if (error) {
    console.error('Error fetching glossary terms:', error);
    return [];
  }

  return data || [];
}
