# Netlify Prerender Extension Setup Guide

## Overview

Your application has been successfully migrated from build-time prerendering to the Netlify Prerender extension. This guide will walk you through enabling the extension in the Netlify UI and verifying it works correctly.

## What Changed

### Code Changes

1. **App.tsx**: Added `window.prerenderReady` signal
   - The app now sets `window.prerenderReady = false` on mount
   - After 2 seconds (allowing content to load), it sets `window.prerenderReady = true`
   - This tells the Netlify prerender headless browser when to capture the HTML

2. **vite.config.ts**: Removed build-time prerender plugin
   - Simplified the build process
   - No more custom prerendering at build time

3. **netlify.toml**: Updated build command
   - Changed from `npx vite build` to `npm run build`
   - All other configurations remain optimal for the extension

4. **Build Process**: Successfully tested
   - Build completed without errors
   - All pages compile correctly
   - Ready for deployment

## Enabling Netlify Prerender Extension

Follow these steps to enable the extension:

### Step 1: Install the Extension at Team Level

1. Go to: https://app.netlify.com/extensions/prerender
2. Click **"Install extension"** button
3. This installs the extension for your entire team

### Step 2: Enable for Your Project

1. Open your project in Netlify dashboard
2. Look for **"Extensions"** in the left sidebar navigation
3. Click on **"Prerender"** extension
4. Click **"Enable prerendering"** button
5. Save your changes

### Step 3: Deploy Your Site

1. Deploy your updated code to Netlify
   - Either push to your connected git repository
   - Or manually deploy the new build

2. The extension will activate after deployment
   - You'll see two new functions added:
     - Edge function (intercepts crawler requests)
     - Serverless function (renders pages with headless browser)

## Configuration Options (Optional)

After enabling, you can adjust these settings in the extension UI:

### Resource Optimization (Recommended)

By default, the headless browser skips:
- Images
- CSS files
- Fonts
- Analytics scripts
- Marketing tools

This speeds up rendering with no impact on HTML content. You can customize this if needed.

### Detailed Logging

Enable this initially to see exactly what the headless browser is doing:
1. Go to extension settings
2. Toggle **"Detailed logging"** ON
3. Check function logs to see full rendering reports

### Caching

- Default: 3 days at CDN edge
- Cache clears automatically on new deployments
- Can be manually cleared via UI or API

## How to Verify It's Working

### Method 1: Check Function Logs

1. Go to **Functions** in Netlify dashboard
2. Look for the prerender function invocations
3. You should see logs when crawlers access your site

### Method 2: Test with User-Agent

Use curl to simulate a crawler:

```bash
curl -H "User-Agent: Googlebot" https://medtransic.com/services/medical-billing
```

Check the response HTML - it should contain full content.

### Method 3: Use SEO Crawler Tool

1. Re-run your SEO crawler tool on key pages
2. Check word counts - should now show 500-2000+ words
3. Verify no more "0 word count" issues

### Method 4: Social Media Preview

Share a page URL on Twitter or LinkedIn and check if the preview card shows correctly.

## Expected Results

### Before (Build-time Prerendering Issues)
- Crawlers saw 0 words on most pages
- React hydration destroyed pre-rendered content
- Social media previews didn't work

### After (Netlify Prerender Extension)
- Crawlers see full page content (500-2000+ words)
- Headless browser waits for React to render
- `window.prerenderReady` ensures content is complete
- Social media previews work perfectly
- Regular users: unchanged experience

## Performance Characteristics

- **First render**: 3-6 seconds (depending on page complexity)
- **Subsequent renders**: Served from CDN cache (milliseconds)
- **Cache duration**: 3 days (configurable)
- **Cache invalidation**: Automatic on deployment

## Monitoring

### Function Metrics

Go to **Functions > Metrics** to track:
- Number of prerender invocations
- Execution time per page
- Cache hit rates
- Any errors or timeouts

### Cost Considerations

- Prerender functions count toward your plan's function invocations
- Cached responses don't count as new invocations
- Most sites see minimal cost (crawlers visit infrequently)

## Troubleshooting

### Issue: Pages Still Showing 0 Words

**Solution:**
1. Check if extension is enabled for the project (not just installed)
2. Ensure you've re-deployed after enabling
3. Check function logs for errors
4. Verify `window.prerenderReady` is being set (check browser console)

### Issue: Content Missing from Renders

**Solution:**
1. Increase the timeout in `window.prerenderReady` (currently 2 seconds)
2. Enable detailed logging to see what's being loaded
3. Check if essential data fetches are completing

### Issue: Prerender Function Timing Out

**Solution:**
1. Optimize resource skipping (disable loading of non-essential resources)
2. Reduce the number of third-party scripts
3. Check for infinite loading states in your app

### Issue: Social Media Previews Not Working

**Solution:**
1. Verify Open Graph meta tags are in your page headers
2. Test with specific crawlers (facebookexternalhit, Twitterbot)
3. Check function logs when social platforms fetch your URL

## Optimization Tips

### 1. Tune `window.prerenderReady` Timing

Currently set to 2 seconds. If pages need more/less time:

```typescript
// In App.tsx, adjust the timeout:
const timer = setTimeout(() => {
  window.prerenderReady = true;
}, 2000); // Adjust this value
```

### 2. Per-Page Ready Signal

For pages with heavy data loading, you can set `window.prerenderReady` in individual page components after data loads:

```typescript
useEffect(() => {
  fetchData().then(() => {
    window.prerenderReady = true;
  });
}, []);
```

### 3. Skip Non-Essential Resources

In extension settings, add domains to skip:
- Analytics: Google Analytics, Mixpanel, etc.
- Tag managers: GTM, Segment
- Chat widgets: Intercom, Drift
- Ad networks

## Rolling Back (If Needed)

If you need to revert to build-time prerendering:

1. In extension settings, toggle **"Enable prerendering"** OFF
2. Restore the old code:
   - Add back `prerenderPlugin()` to vite.config.ts
   - Change build command to `npm run build:legacy`
3. Re-deploy

(Not recommended - the extension is the better solution!)

## Additional Resources

- [Netlify Prerender Extension Docs](https://docs.netlify.com/extensions/prerendering/)
- [Prerender Checker Tool](https://netlify.com/prerender-checker)
- [SEO Testing Guide](./SEO_TESTING_GUIDE.md)

## Next Steps

1. **Enable the extension** following Step 1-3 above
2. **Deploy your code** (already updated and tested)
3. **Wait 5-10 minutes** for deployment and CDN propagation
4. **Test with curl** or SEO crawler tool
5. **Check function logs** to verify prerender invocations
6. **Enable detailed logging** initially for debugging
7. **Monitor function metrics** over the next few days

## Questions?

If you encounter any issues or need to adjust the configuration, check:
- Function logs in Netlify dashboard
- Extension settings for optimization options
- This guide for troubleshooting tips

---

**Status**: Ready to enable! All code changes complete and tested.
