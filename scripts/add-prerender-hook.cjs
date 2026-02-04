#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Pages that should be skipped
const SKIP_PAGES = ['NotFoundPage.tsx'];

// Get all page files
const pagesDir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir, { recursive: true })
  .filter(file => file.endsWith('.tsx') && !SKIP_PAGES.includes(path.basename(file)));

let updatedCount = 0;
let skippedCount = 0;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already has usePrerenderReady
  if (content.includes('usePrerenderReady')) {
    console.log(`⏭️  Skipping ${file} (already has usePrerenderReady)`);
    skippedCount++;
    return;
  }

  // Check if it's a page component (has export default and React.FC)
  if (!content.includes('React.FC') && !content.includes('FC<')) {
    console.log(`⏭️  Skipping ${file} (not a React component)`);
    skippedCount++;
    return;
  }

  let modified = false;

  // Add import after other hook imports or after React import
  if (!content.includes("from '../hooks/usePrerenderReady'")) {
    // Find the last import line
    const importRegex = /^import .+ from .+;$/gm;
    const imports = [...content.matchAll(importRegex)];

    if (imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const insertPos = lastImport.index + lastImport[0].length;

      const hookImport = "\nimport { usePrerenderReady } from '../hooks/usePrerenderReady';";
      content = content.slice(0, insertPos) + hookImport + content.slice(insertPos);
      modified = true;
    }
  }

  // Add usePrerenderReady(true) call inside component
  // Look for pattern: const ComponentName: React.FC = () => {
  const componentRegex = /const \w+: React\.FC[^=]*= \(\) => \{/;
  const match = content.match(componentRegex);

  if (match) {
    const componentStart = match.index + match[0].length;

    // Find the first non-whitespace, non-comment line after the component declaration
    let insertPos = componentStart;
    const lines = content.slice(componentStart).split('\n');

    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      // Skip empty lines, comments, and existing hook calls
      if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('/*') && !trimmed.startsWith('*')) {
        // Insert before the first real line
        const lineStart = content.indexOf(lines[i], componentStart);
        insertPos = lineStart;
        break;
      }
    }

    // Insert the hook call with proper indentation
    const hookCall = "\n  usePrerenderReady(true);\n";
    content = content.slice(0, insertPos) + hookCall + content.slice(insertPos);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${file}`);
    updatedCount++;
  } else {
    console.log(`⚠️  Could not update ${file} (pattern not found)`);
    skippedCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Updated: ${updatedCount} files`);
console.log(`   ⏭️  Skipped: ${skippedCount} files`);
