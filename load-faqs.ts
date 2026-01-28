import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const sql = fs.readFileSync('./seed-faqs.sql', 'utf8');

async function loadFAQs() {
  console.log('Loading FAQs from seed-faqs.sql...');

  // Execute the SQL directly
  const { error } = await supabase.rpc('exec', { sql });

  if (error) {
    console.error('Error loading FAQs:', error);
    // Try alternate approach - parse and insert
    console.log('Trying alternate insert method...');

    // Count current FAQs
    const { count: beforeCount } = await supabase
      .from('specialty_faqs')
      .select('*', { count: 'exact', head: true });

    console.log(`Current FAQs in database: ${beforeCount}`);
  } else {
    console.log('FAQs loaded successfully!');
  }

  // Check final count
  const { count } = await supabase
    .from('specialty_faqs')
    .select('*', { count: 'exact', head: true });

  console.log(`Total FAQs now in database: ${count}`);

  // Show breakdown by specialty
  const { data } = await supabase
    .from('specialty_faqs')
    .select('specialty_slug')
    .then(res => {
      const counts: Record<string, number> = {};
      res.data?.forEach(item => {
        counts[item.specialty_slug] = (counts[item.specialty_slug] || 0) + 1;
      });
      return { data: counts };
    });

  console.log('FAQs by specialty:', data);
}

loadFAQs();
