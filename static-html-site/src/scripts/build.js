#!/usr/bin/env node

/**
 * Main build script for static HTML site generation
 * Generates SEO-optimized static HTML pages with proper semantic markup
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { minify } from 'html-minifier-terser';
import {
  fetchStatePages,
  fetchCityPages,
  fetchComparisonPages,
  fetchFAQs
} from './supabase-client.js';
import { generateHomePage } from '../templates/pages/home.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = path.join(__dirname, '../..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const MAIN_PROJECT_PUBLIC = path.join(ROOT_DIR, '../../public');

console.log('🚀 Starting static HTML site build...\n');

/**
 * Ensure directory exists
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Minify HTML for production
 */
async function minifyHTML(html) {
  return await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
  });
}

/**
 * Write HTML file
 */
async function writeHTMLFile(filePath, html, shouldMinify = true) {
  const finalHTML = shouldMinify ? await minifyHTML(html) : html;
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, finalHTML, 'utf8');
}

/**
 * Copy assets from main project
 */
function copyAssets() {
  console.log('📁 Copying assets...');

  // Ensure assets directories exist
  ensureDir(path.join(DIST_DIR, 'assets/images'));
  ensureDir(path.join(DIST_DIR, 'assets/icons'));

  // Copy logo and essential images
  const assetsToCopy = [
    'medtransic-logomark1.svg',
    'logo_png_dark_white_text.png',
    'medtransiclogolight.png',
    'robots.txt',
    'sitemap.xml'
  ];

  assetsToCopy.forEach(asset => {
    const src = path.join(MAIN_PROJECT_PUBLIC, asset);
    const dest = path.join(DIST_DIR, asset);

    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`  ✅ Copied ${asset}`);
    }
  });

  // Copy images directory if exists
  const imagesDir = path.join(MAIN_PROJECT_PUBLIC, 'images');
  if (fs.existsSync(imagesDir)) {
    const destImagesDir = path.join(DIST_DIR, 'images');
    ensureDir(destImagesDir);

    // Copy all images recursively
    function copyRecursive(src, dest) {
      const entries = fs.readdirSync(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          ensureDir(destPath);
          copyRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    copyRecursive(imagesDir, destImagesDir);
    console.log('  ✅ Copied images directory');
  }

  console.log('✅ Assets copied successfully\n');
}

/**
 * Generate sitemap.xml
 */
function generateSitemap(pages) {
  console.log('🗺️  Generating sitemap.xml...');

  const urls = pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf8');
  console.log('✅ Sitemap generated\n');
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  console.log('🤖 Generating robots.txt...');

  const robotsTxt = `# Medtransic Medical Billing Services
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://medtransic.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1
`;

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf8');
  console.log('✅ Robots.txt generated\n');
}

/**
 * Main build function
 */
async function build() {
  try {
    // Clean and create dist directory
    if (fs.existsSync(DIST_DIR)) {
      fs.rmSync(DIST_DIR, { recursive: true });
    }
    ensureDir(DIST_DIR);
    ensureDir(path.join(DIST_DIR, 'assets/css'));

    let pageCount = 0;
    const sitemapPages = [];

    // Generate homepage
    console.log('🏠 Generating homepage...');
    const homeHTML = generateHomePage();
    await writeHTMLFile(path.join(DIST_DIR, 'index.html'), homeHTML);
    sitemapPages.push({ url: 'https://medtransic.com/', priority: '1.0', changefreq: 'weekly' });
    pageCount++;
    console.log('✅ Homepage generated\n');

    // TODO: Generate other pages (services, specialties, states, cities, etc.)
    // This will be expanded in the next phase

    // Copy assets
    copyAssets();

    // Generate sitemap and robots.txt
    generateSitemap(sitemapPages);
    generateRobotsTxt();

    console.log(`\n✨ Build completed successfully!`);
    console.log(`📊 Generated ${pageCount} pages`);
    console.log(`📂 Output directory: ${DIST_DIR}\n`);

  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Run build
build();
