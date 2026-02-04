# Netlify Prerender Extension Setup Guide

## Overview

This project is configured to work seamlessly with the [Netlify Prerender extension](https://app.netlify.com/extensions/prerender). The extension makes your React SPA content discoverable to:
- Search engine crawlers (Google, Bing, etc.)
- AI agents and tools
- Social media preview services (Facebook, Twitter, LinkedIn)
- Web scrapers and other automated tools

## How It Works

1. **Regular Users**: Continue to receive your fast, interactive React app
2. **Crawlers/Bots**: Automatically receive fully-rendered HTML with all content

The extension:
- Detects requests from relevant user-agents (crawlers, bots, social media)
- Uses a headless browser to fully render the page
- Returns complete HTML with all data loaded
- Caches rendered pages for 3 days on Netlify's CDN

## Setup Instructions

### 1. Enable the Extension

1. Go to https://app.netlify.com/extensions/prerender
2. Click "Install" to enable it for your team
3. In your project, go to **Extensions** in the left sidebar
4. Find **Prerender** and click **Enable prerendering**
5. **Deploy your site** to activate the extension

### 2. Configuration (Optional)

The extension works out-of-the-box with sensible defaults:

- **Resource Optimization**: Automatically skips images, CSS, fonts, and analytics scripts for faster rendering
- **Caching**: 3-day CDN cache with automatic cache clearing on deployment
- **Network Idle Detection**: Waits for network requests to settle before capturing HTML

You can customize these settings in the Extension configuration UI:
- Enable/disable resource skipping
- Turn on detailed logging
- Manually clear cache
- Adjust cache duration

### 3. Verify It's Working

After deployment, test that prerendering is working:

1. Use the [Netlify Prerender Checker](https://prerender.netlify.app/) with your site URL
2. Or test manually with curl:
   ```bash
   curl -A "Googlebot" https://medtransic.com
   ```
3. Check your Function logs in Netlify to see prerender requests

## Implementation Details

### Window.prerenderReady Signal

This project implements `window.prerenderReady` to signal when pages are ready:

```typescript
// TypeScript Declaration (src/vite-env.d.ts)
interface Window {
  prerenderReady?: boolean;
}
```

### Custom Hook

We've created a reusable hook for signaling readiness:

```typescript
// src/hooks/usePrerenderReady.ts
import { useEffect } from 'react';

export const usePrerenderReady = (isReady: boolean) => {
  useEffect(() => {
    if (isReady && typeof window !== 'undefined') {
      window.prerenderReady = true;
    }
  }, [isReady]);
};
```

### Pages Using Prerender Ready

The following pages fetch data and signal when ready:

1. **LocationsPage** - Signals after loading states and cities
2. **FAQPage** - Signals after loading FAQ data
3. **BillingGlossaryPage** - Signals after loading glossary terms
4. **ComparisonsListPage** - Signals after loading comparisons
5. **CareersPage** - Signals after loading job postings
6. **CPTCodesCheatSheetPage** - Signals after loading CPT codes
7. **ICD10CodesReferencePage** - Signals after loading ICD-10 codes
8. **EMRIntegrationsListPage** - Signals after loading EMR integrations

### Usage Pattern

For pages that fetch data from Supabase:

```typescript
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const MyPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data
    fetchData().then(() => setLoading(false));
  }, []);

  // Signal when content is ready
  usePrerenderReady(!loading && data.length > 0);

  return (/* JSX */);
};
```

## Performance Expectations

### First Render
- **3-6 seconds** depending on page complexity
- Network requests from Supabase add 1-2 seconds
- Only happens on cache miss

### Subsequent Requests
- **Instant** from CDN cache
- Cache duration: 3 days
- Stale-while-revalidate for seamless updates

## SEO Benefits

This setup provides complete SEO coverage:

1. **Meta Tags**: react-helmet-async tags are fully rendered
2. **Structured Data**: All JSON-LD schema markup is included
3. **Dynamic Content**: Supabase data is loaded and rendered
4. **Social Previews**: Open Graph and Twitter Card tags work perfectly
5. **Fast Indexing**: Crawlers get content immediately without JavaScript execution

## Existing SEO Features (Already Implemented)

The following features work seamlessly with prerendering:

- ✅ `sitemap.xml` at `/public/sitemap.xml`
- ✅ `robots.txt` at `/public/robots.txt`
- ✅ SEOHead component with comprehensive meta tags
- ✅ Structured data schemas (Organization, Service, FAQ, Breadcrumb)
- ✅ Canonical URLs on all pages
- ✅ Open Graph and Twitter Card tags
- ✅ Proper heading hierarchy (H1, H2, H3)

## Monitoring

### Function Logs
- View prerender requests in Netlify Function logs
- Each render includes debugging information
- Enable detailed logging in extension settings for full reports

### Metrics
- Check Function Metrics page for:
  - Invocation counts
  - Execution times
  - Error rates
  - Cache hit/miss ratios

### Cache Management
- Automatic cache clearing on deployment
- Manual cache clearing via Extension UI
- Programmatic clearing via Netlify API

## Compatibility Notes

### What Works Great
- ✅ All react-helmet-async meta tags
- ✅ Lazy-loaded components (React.lazy)
- ✅ Supabase data fetching
- ✅ Dynamic routing with React Router
- ✅ All existing redirects in netlify.toml
- ✅ Structured data (JSON-LD)

### Security Considerations
- ✅ No authentication headers on public pages
- ✅ No private/no-store cache-control directives
- ✅ Separate CDN cache keys for prerendered vs regular content
- ✅ RLS policies on Supabase protect sensitive data

## Troubleshooting

### Page Not Rendering Correctly
1. Check Function logs for errors
2. Enable detailed logging in extension settings
3. Verify `window.prerenderReady` is being set
4. Check network requests are completing

### Slow First Render
1. Review which resources are being loaded
2. Enable resource skipping for non-essential assets
3. Optimize Supabase queries
4. Consider using `window.prerenderReady` earlier

### Content Not Updated
1. Wait for CDN cache to expire (3 days)
2. Deploy to trigger automatic cache clear
3. Manually clear cache in Extension UI

## Additional Resources

- [Netlify Prerender Documentation](https://docs.netlify.com/extensions/prerendering/)
- [Prerender Checker Tool](https://prerender.netlify.app/)
- [Extension Page](https://app.netlify.com/extensions/prerender)

## Summary

Your site is perfectly configured for Netlify Prerender:
- **No code changes required** - Extension works with current setup
- **Enhanced with prerenderReady** - Optimal performance for data-heavy pages
- **Full SEO coverage** - All content visible to crawlers
- **Fast for users** - Regular visitors get the full React experience
- **Cache optimized** - 3-day CDN cache for instant bot responses
