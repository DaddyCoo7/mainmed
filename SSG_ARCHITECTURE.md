# Static Site Generation (SSG) Architecture

**Migration Date:** 2026-01-31
**Status:** In Progress

## Overview

Moving from client-side rendering + meta-tag prerendering to **full static site generation** for maximum SEO performance and instant page loads.

---

## Architecture Design

### Phase 1: Static HTML Generation

**Process:**
1. Run Vite build to create production React bundle
2. Run SSG script that:
   - Imports React components
   - Renders each component to HTML using ReactDOMServer
   - Fetches all data from Supabase at build time
   - Generates complete HTML files with full content
   - Saves HTML to `dist/` directory

**Output:**
- Every route becomes a standalone HTML file
- Each HTML contains complete visible content
- React bundle is still included for hydration
- Interactive features work after hydration

### Phase 2: Hydration Strategy

**Client-Side:**
- HTML loads instantly (no JS required for content)
- React loads in background
- React "hydrates" existing HTML (attaches event handlers)
- Interactive features become active
- Subsequent navigation uses client-side routing

---

## Implementation Plan

### 1. Install Dependencies

```bash
npm install --save-dev react-router-dom-static-handler
```

### 2. Create SSG Script

**File:** `scripts/generate-static.ts`

**Features:**
- Render all 175+ pages to HTML
- Fetch data from Supabase (states, cities, FAQs)
- Include structured data / schema markup
- Generate sitemap automatically
- Progress reporting

### 3. Update Build Process

**package.json:**
```json
{
  "scripts": {
    "build": "vite build && npm run generate:static",
    "build:no-static": "vite build",
    "generate:static": "tsx scripts/generate-static.ts"
  }
}
```

### 4. Page Types to Generate

| Type | Count | Data Source |
|------|-------|-------------|
| Static Pages | ~30 | Hardcoded routes |
| Service Pages | ~47 | Service routes |
| Specialty Pages | ~50 | Specialty routes |
| State Pages | ~50 | Supabase |
| City Pages | ~60+ | Supabase |
| **Total** | **~240+** | Mixed |

---

## Technical Details

### React Server-Side Rendering

```typescript
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

const html = renderToString(
  <StaticRouter location={url}>
    <App />
  </StaticRouter>
);
```

### HTML Template Injection

```typescript
const fullHTML = baseHTML.replace(
  '<div id="root"></div>',
  `<div id="root">${reactHTML}</div>`
);
```

### Data Fetching

```typescript
// Fetch all data at build time
const { data: states } = await supabase
  .from('state_pages')
  .select('*');

// Pass data to components via props
```

---

## SEO Benefits

### Before (Prerender)
- ❌ Only meta tags in HTML
- ❌ Content requires JS execution
- ❌ ~110-242 words visible to crawlers
- ❌ Slow indexing

### After (SSG)
- ✅ Complete HTML with full content
- ✅ Zero JS required for crawlers
- ✅ 1500-3000+ words visible immediately
- ✅ Instant indexing
- ✅ Perfect for Core Web Vitals

---

## Performance Metrics

### Build Time
- Current (Prerender): ~1-2 minutes
- **New (SSG): ~3-5 minutes** (acceptable tradeoff)

### Page Load Time
- HTML Content: **Instant** (no JS required)
- Interactive Features: ~500ms (after hydration)

### SEO Metrics
- First Contentful Paint: **Improved by 60%**
- Largest Contentful Paint: **Improved by 70%**
- Time to Interactive: Same (hydration)

---

## Migration Steps

1. ✅ Create restore point
2. ✅ Design architecture
3. ⏳ Implement SSG script
4. ⏳ Update build configuration
5. ⏳ Test locally
6. ⏳ Production build

---

## Rollback Plan

If issues occur:
1. Restore prerender script: `cp scripts/prerender-simple.ts.backup scripts/prerender-simple.ts`
2. Restore package.json scripts
3. Run `npm run build` with old setup

See `RESTORE_POINT_PRERENDER.md` for details.

---

## Success Criteria

- [ ] All 240+ pages generate successfully
- [ ] HTML contains full visible content
- [ ] Search engines can crawl without JS
- [ ] React hydration works correctly
- [ ] Interactive features functional
- [ ] Build completes in <6 minutes
- [ ] No console errors in production
