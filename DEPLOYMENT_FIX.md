# Static HTML Title & Description Fix - Deployment Guide

## What Was Fixed

### 1. Build Command Updated
**File:** `netlify.toml`
- **Before:** `command = "npx vite build"` (only built React app, no static HTML)
- **After:** `command = "npm run build"` (builds React + generates static HTML with unique titles/descriptions)

### 2. How It Works Now
When you deploy:
1. Vite builds the React application
2. Static generator runs automatically (`npm run generate:static`)
3. Creates 100 static HTML pages with unique titles and meta descriptions
4. Each page has proper SEO tags pulled from Supabase database

## Verify Locally

Check static HTML files have unique titles:
```bash
# Home page
grep "<title>" dist/index.html

# California state page  
grep "<title>" dist/medical-billing-services/california/index.html

# Los Angeles city page
grep "<title>" dist/medical-billing-services/california/los-angeles/index.html

# Epic EMR integration
grep "<title>" dist/integrations/epic/index.html

# Comparison page
grep "<title>" dist/comparisons/in-house-billing-vs-outsourced-billing/index.html
```

## Deploy to Netlify

### Option 1: Push to Git (Recommended)
```bash
git add netlify.toml public/_redirects
git commit -m "Fix: Update build command to generate static HTML with unique SEO tags"
git push
```

### Option 2: Manual Deploy via Netlify CLI
```bash
npm run build
netlify deploy --prod --dir=dist
```

## After Deployment

1. **Clear Netlify Cache**
   - Go to Netlify Dashboard → Site Settings → Build & Deploy
   - Click "Clear cache and deploy site"

2. **Verify Pages**
   Visit these URLs and view source (Ctrl+U):
   - https://medtransic.com/ (should see "Medical Billing Services 2025...")
   - https://medtransic.com/medical-billing-services/california (should see "Medical Billing Company California...")
   - https://medtransic.com/medical-billing-services/texas/houston (should see "Medical Billing Company Houston...")
   - https://medtransic.com/integrations/epic (should see "Epic Medical Billing Integration...")

3. **Check Meta Description**
   Each page should have UNIQUE description tags specific to that location/service

## Static Pages Generated (100 Total)

- **Home:** 1 page
- **States:** 50 pages (all US states)
- **Cities:** 22 pages (major cities)
- **Comparisons:** 10 pages (billing comparisons)
- **EMR Integrations:** 12 pages (Epic, Athena, etc.)
- **Resources:** 2 pages (CPT codes, ICD-10 codes)
- **Static Pages:** 3 pages (About, Contact, Services)

## Troubleshooting

### If titles/descriptions still not showing:
1. Check Netlify build log shows "Successfully generated 100 static HTML pages"
2. Clear browser cache (Ctrl+Shift+R)
3. Clear Netlify CDN cache
4. Wait 5-10 minutes for CDN propagation

### If build fails:
- Ensure Supabase environment variables are set in Netlify:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

## Technical Details

**Static Generator:** `scripts/simple-static-generator.ts`
- Reads data from Supabase tables
- Generates complete HTML pages with inline CSS
- Embeds unique titles, descriptions, and schema markup
- Creates proper directory structure with index.html files

**Netlify Serving:**
- Static HTML files served directly (fast, SEO-friendly)
- Only non-existent routes fall back to SPA
- All SEO tags visible to crawlers immediately
