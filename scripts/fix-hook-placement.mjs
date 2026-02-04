#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pagesDir = join(__dirname, '../src/pages');

function getAllTsxFiles(dir) {
  const files = [];
  const items = readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = getAllTsxFiles(pagesDir);
let fixedCount = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  const original = content;

  // Fix pattern: return (\n  usePrerenderReady(true);\n
  content = content.replace(
    /(const \w+: React\.FC[^=]*=\s*\(\)\s*=>\s*\{)\s*\n\s*return\s*\(\s*\n\s*usePrerenderReady\(true\);/g,
    (match, componentStart) => {
      return `${componentStart}\n  usePrerenderReady(true);\n\n  return (`;
    }
  );

  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    console.log(`✅ Fixed: ${file.replace(pagesDir + '/', '')}`);
    fixedCount++;
  }
}

console.log(`\n📊 Fixed ${fixedCount} files with incorrect hook placement`);
