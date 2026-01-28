const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Read environment variables from .env file
const envContent = fs.readFileSync('.env', 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length > 0) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const supabaseUrl = envVars.VITE_SUPABASE_URL;
const supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function insertFAQs() {
  console.log('Clearing existing FAQs...');
  const { error: deleteError } = await supabase
    .from('specialty_faqs')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');

  if (deleteError) console.error('Delete error:', deleteError);

  console.log('Reading seed file...');
  const sqlContent = fs.readFileSync('./seed-faqs.sql', 'utf8');

  // Parse INSERT statements
  const insertMatches = sqlContent.match(/INSERT INTO specialty_faqs[^;]+;/gs);

  if (!insertMatches) {
    console.error('No INSERT statements found');
    return;
  }

  console.log(`Found ${insertMatches.length} INSERT statement blocks`);

  for (let i = 0; i < insertMatches.length; i++) {
    const insertSQL = insertMatches[i];
    console.log(`\nExecuting INSERT block ${i + 1}...`);

    const { error } = await supabase.rpc('exec_sql', { sql: insertSQL });

    if (error) {
      console.error(`Error in block ${i + 1}:`, error.message);
    } else {
      console.log(`Block ${i + 1} inserted successfully`);
    }
  }

  // Check final count
  const { count, error: countError } = await supabase
    .from('specialty_faqs')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('Count error:', countError);
  } else {
    console.log(`\nTotal FAQs in database: ${count}`);
  }

  // Show breakdown
  const { data } = await supabase
    .from('specialty_faqs')
    .select('specialty_slug');

  if (data) {
    const counts = {};
    data.forEach(item => {
      counts[item.specialty_slug] = (counts[item.specialty_slug] || 0) + 1;
    });
    console.log('\nFAQs by specialty:');
    Object.entries(counts).forEach(([slug, count]) => {
      console.log(`  ${slug}: ${count} FAQs`);
    });
  }
}

insertFAQs().catch(console.error);
