# Restore Point - Before Static Generation Migration

**Date:** 2026-01-31
**Status:** Pre-SSG Migration Backup

## Current Setup (Prerender-based)

### Architecture
- **Type:** Client-side rendered React with meta tag prerendering
- **Build Process:** Vite build + simple prerender script
- **Prerender Script:** `scripts/prerender-simple.ts`
- **Output:** HTML shells with meta tags only

### Build Commands
```json
"build": "vite build && npm run prerender",
"prerender": "tsx scripts/prerender-simple.ts"
```

### Files to Restore (if needed)

#### scripts/prerender-simple.ts
- Location: `/tmp/cc-agent/59522945/project/scripts/prerender-simple.ts`
- Purpose: Generates meta tags only (no full content)

#### package.json scripts
```json
"build": "vite build && npm run prerender",
"build:no-prerender": "vite build",
"prerender": "tsx scripts/prerender-simple.ts"
```

### What Was Wrong
1. ❌ Only meta tags generated, not actual content
2. ❌ Search engines had to execute JavaScript
3. ❌ Poor SEO - content not in HTML source
4. ❌ Slow indexing by search engines
5. ❌ Half-measure approach

### Backup Files Created
- `scripts/prerender-simple.ts.backup` - Original prerender script (1228 lines)
- This file documents the complete state before SSG migration

## To Restore This Setup
1. Restore the prerender script:
   ```bash
   cp scripts/prerender-simple.ts.backup scripts/prerender-simple.ts
   ```
2. Restore package.json scripts to:
   ```json
   "build": "vite build && npm run prerender",
   "prerender": "tsx scripts/prerender-simple.ts"
   ```
3. Revert any vite.config.ts changes made during SSG migration
4. Run `npm run build` to use old prerender approach

## Migration Reason
Moving to **full static site generation** for:
- ✅ Complete HTML with all content (not just meta tags)
- ✅ Perfect SEO - search engines see full content
- ✅ No JavaScript execution needed by crawlers
- ✅ Instant indexing by search engines
- ✅ Faster page loads
- ✅ Better Core Web Vitals
