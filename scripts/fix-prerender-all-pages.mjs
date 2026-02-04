#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SKIP_PAGES = ['NotFoundPage.tsx'];
const pagesDir = join(__dirname, '../src/pages');

function getAllPageFiles(dir) {
  const files = [];
  const items = readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllPageFiles(fullPath));
    } else if (item.name.endsWith('.tsx') && !SKIP_PAGES.includes(item.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function addPrerenderHook(filePath) {
  let content = readFileSync(filePath, 'utf8');
  const filename = basename(filePath);

  // Skip if already has the hook
  if (content.includes('usePrerenderReady')) {
    return { updated: false, reason: 'already has hook' };
  }

  // Skip if not a React component
  if (!content.match(/const \w+:\s*React\.FC/)) {
    return { updated: false, reason: 'not a React.FC component' };
  }

  let modified = false;

  // Step 1: Add import if not present
  if (!content.includes("from '../hooks/usePrerenderReady'")) {
    // Find the last import statement
    const importLines = content.split('\n').map((line, idx) => ({ line, idx }))
      .filter(({ line }) => line.match(/^import .* from ['"].*['"];?\s*$/));

    if (importLines.length > 0) {
      const lastImport = importLines[importLines.length - 1];
      const lines = content.split('\n');
      lines.splice(lastImport.idx + 1, 0, "import { usePrerenderReady } from '../hooks/usePrerenderReady';");
      content = lines.join('\n');
      modified = true;
    }
  }

  // Step 2: Add hook call inside component
  // Find the component declaration
  const componentMatch = content.match(/const (\w+):\s*React\.FC[^=]*=\s*\(\)\s*=>\s*\{/);

  if (componentMatch) {
    const componentStart = componentMatch.index + componentMatch[0].length;

    // Find where to insert (after opening brace, before first statement)
    const afterBrace = content.slice(componentStart);
    const lines = afterBrace.split('\n');

    // Find the first line with actual code (not whitespace, comments, or existing hooks)
    let insertLineIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (trimmed &&
          !trimmed.startsWith('//') &&
          !trimmed.startsWith('/*') &&
          !trimmed.startsWith('*') &&
          !trimmed.startsWith('use') && // Skip other hooks
          !trimmed.startsWith('const') && // Skip const declarations
          !trimmed.startsWith('let') &&
          !trimmed.startsWith('return')) {
        insertLineIndex = i;
        break;
      }
      if (trimmed.startsWith('const') || trimmed.startsWith('let')) {
        insertLineIndex = i;
        break;
      }
    }

    // Insert the hook call
    lines.splice(insertLineIndex, 0, '  usePrerenderReady(true);', '');
    const newAfterBrace = lines.join('\n');
    content = content.slice(0, componentStart) + newAfterBrace;
    modified = true;
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf8');
    return { updated: true };
  }

  return { updated: false, reason: 'could not find insertion point' };
}

// Main execution
console.log('🔍 Finding all page files...\n');
const pageFiles = getAllPageFiles(pagesDir);

let updated = 0;
let skipped = 0;
const errors = [];

for (const filePath of pageFiles) {
  const filename = basename(filePath);
  const result = addPrerenderHook(filePath);

  if (result.updated) {
    console.log(`✅ ${filename}`);
    updated++;
  } else {
    console.log(`⏭️  ${filename} (${result.reason})`);
    skipped++;
  }
}

console.log('\n📊 Summary:');
console.log(`   ✅ Updated: ${updated} pages`);
console.log(`   ⏭️  Skipped: ${skipped} pages`);

if (updated > 0) {
  console.log('\n✨ All pages have been updated with usePrerenderReady hook!');
  console.log('   Run `npm run build` to regenerate static files.');
}
