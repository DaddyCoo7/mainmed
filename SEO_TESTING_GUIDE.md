# SEO Testing & Verification Guide

After deploying the SEO improvements, follow these tests to verify everything is working correctly.

## Pre-Deployment Checklist

- [x] netlify.toml updated with sitemap/robots explicit rules
- [x] SEO helper utilities created (`src/utils/seoHelpers.ts`)
- [x] SEOHead component enhanced with validation
- [x] HomePage description optimized (64 → 157 chars)
- [x] AboutPage description optimized (230 → 155 chars)
- [x] Build successful (no errors)
- [x] sitemap.xml in dist folder (38K, 1360+ URLs)
- [x] robots.txt in dist folder (295 bytes)

## Post-Deployment Tests

### Test 1: Sitemap Accessibility

**Test the sitemap is served correctly:**

```bash
curl -I https://medtransic.com/sitemap.xml
```

**Expected Response:**
```
HTTP/2 200
content-type: application/xml; charset=utf-8
cache-control: public, max-age=3600
```

**Verify content:**
```bash
curl https://medtransic.com/sitemap.xml | head -20
```

**Expected:** XML content starting with `<?xml version="1.0"...`, NOT HTML

**Test URL count:**
```bash
curl -s https://medtransic.com/sitemap.xml | grep -c "<loc>"
```

**Expected:** ~1360+ URLs

---

### Test 2: Robots.txt Accessibility

**Test robots.txt is served correctly:**

```bash
curl -I https://medtransic.com/robots.txt
```

**Expected Response:**
```
HTTP/2 200
content-type: text/plain; charset=utf-8
cache-control: public, max-age=3600
```

**Verify content:**
```bash
curl https://medtransic.com/robots.txt
```

**Expected:**
```
User-agent: *
Allow: /
Sitemap: https://medtransic.com/sitemap.xml
```

---

### Test 3: SPA Routing Still Works

**Test client-side routing:**

Visit these URLs in a browser:
- https://medtransic.com/services/medical-billing
- https://medtransic.com/specialties/cardiology
- https://medtransic.com/medical-billing-services/california

**Expected:**
- Pages load correctly
- No 404 errors
- URL stays the same (no redirect to index.html visible)
- Content appears properly

---

### Test 4: Prerendered Content for Crawlers

**Simulate Googlebot request:**

```bash
curl -A "Googlebot/2.1 (+http://www.google.com/bot.html)" \
  https://medtransic.com/services/medical-billing | grep -o '<title>.*</title>'
```

**Expected:**
```html
<title>Medical Billing Solutions | Certified Coders | 99% Rate | Medtransic</title>
```

**Check meta description:**
```bash
curl -A "Googlebot/2.1 (+http://www.google.com/bot.html)" \
  https://medtransic.com/services/medical-billing | grep -o '<meta name="description"[^>]*>'
```

**Expected:** Full meta description in response (not empty)

---

### Test 5: State Page SEO

**Test California state page:**

```bash
curl -A "Googlebot/2.1 (+http://www.google.com/bot.html)" \
  https://medtransic.com/medical-billing-services/california | head -50 | grep -E '<title>|<meta name="description"'
```

**Expected:**
- Unique title with "California"
- Unique description with state-specific content
- Both within character limits

---

### Test 6: City Page SEO

**Test Los Angeles city page:**

```bash
curl -A "Googlebot/2.1 (+http://www.google.com/bot.html)" \
  https://medtransic.com/medical-billing-services/california/los-angeles | head -50 | grep -E '<title>|<meta name="description"'
```

**Expected:**
- Unique title with "Los Angeles, California"
- Unique description with city-specific content

---

### Test 7: Google Search Console Verification

**URL Inspection Tool:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select property: `medtransic.com`
3. Use **URL Inspection** tool
4. Test URL: `https://medtransic.com/services/medical-billing`
5. Click **"Test Live URL"**

**Expected Results:**
- **Status:** URL is on Google / Can be indexed
- **Title:** Shows correct, unique title
- **Meta Description:** Shows correct, unique description
- **Canonical:** Points to correct URL
- **Screenshot:** Shows full page content

**Common Issues:**

❌ **"Page not indexed"** → Wait 2-3 days, then request indexing
❌ **"Crawled but not indexed"** → Check for duplicate content or thin content
❌ **"Discovered but not crawled"** → Submit sitemap, check robots.txt
❌ **Empty title/description** → Prerender not working, enable in Netlify

---

### Test 8: Sitemap Submission

**Submit to Google:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Navigate to **Sitemaps** (left sidebar)
3. Enter: `sitemap.xml`
4. Click **Submit**

**Expected:**
- Status: Success
- Discovered URLs: ~1360+
- Last read: Today's date

**Check status after 24 hours:**
- Successfully crawled: Should increase over time
- Error rate: Should be 0%

---

### Test 9: Metadata Length Validation

**Development mode warnings:**

```bash
npm run dev
```

Then navigate to various pages in browser. Open console (F12).

**Expected:**
- No SEO warnings for optimized pages
- Warnings for any pages exceeding limits
- Example warning: `SEO Warning: Description too long (180 chars), truncated`

**To fix warnings:**
- Update Supabase data for dynamic pages
- Update component props for static pages

---

### Test 10: Canonical URLs

**Check canonical tags:**

```bash
curl -s https://medtransic.com/services/medical-billing | grep 'rel="canonical"'
```

**Expected:**
```html
<link rel="canonical" href="https://medtransic.com/services/medical-billing">
```

**Test multiple pages:**

```bash
for url in "/" "/about" "/services/medical-billing" "/specialties/cardiology"; do
  echo "Testing: $url"
  curl -s "https://medtransic.com$url" | grep 'rel="canonical"'
done
```

**Expected:** Each page has unique, correct canonical URL

---

## Netlify Prerender Setup

### Enable Prerender (Required for Crawler Access)

1. **Login to Netlify Dashboard**
   - Go to: https://app.netlify.com
   - Select your site

2. **Navigate to Settings**
   - Click: **Site Settings**
   - Go to: **Build & Deploy** → **Post Processing**

3. **Enable Prerendering**
   - Find: **Prerendering**
   - Toggle: **ON**
   - Save changes

4. **Verify after 5 minutes**
   - Deploy site (or trigger rebuild)
   - Test with Googlebot user-agent (see Test 4)

### Alternative: Prerender.io

If Netlify Prerender isn't available:

1. Sign up at: https://prerender.io
2. Add site URL
3. Get token
4. Add to Netlify:
   - Build environment variable: `PRERENDER_TOKEN`
   - Add middleware or edge function to proxy requests

---

## Monitoring SEO Performance

### Google Search Console Dashboards

**Coverage Report:**
- Path: **Index** → **Coverage**
- Monitor: Indexed pages count (should increase over time)
- Target: 1360+ pages indexed

**Performance Report:**
- Path: **Performance** → **Search Results**
- Monitor: Impressions, clicks, average position
- Look for: Increases after SEO fixes

**Sitemaps Report:**
- Path: **Sitemaps**
- Monitor: Discovered vs indexed ratio
- Target: >80% indexed within 30 days

### Expected Indexing Timeline

- **Week 1:** Google discovers pages via sitemap
- **Week 2:** Google crawls high-priority pages
- **Week 3-4:** Crawls remaining pages
- **Month 2:** Most pages indexed
- **Month 3+:** Full indexing stabilizes

**Note:** Google indexing is not instant. Be patient!

---

## Common Issues & Solutions

### Issue: sitemap.xml returns HTML

**Symptoms:**
```bash
curl https://medtransic.com/sitemap.xml
# Returns: <!DOCTYPE html>...
```

**Cause:** SPA fallback catching the request

**Solution:**
1. Verify netlify.toml has sitemap rule with `force = true`
2. Clear Netlify cache: **Site Settings** → **Build & Deploy** → **Clear cache and retry deploy**
3. Redeploy site

---

### Issue: robots.txt returns HTML

**Symptoms:**
```bash
curl https://medtransic.com/robots.txt
# Returns: <!DOCTYPE html>...
```

**Cause:** Same as sitemap issue

**Solution:**
1. Verify netlify.toml has robots rule with `force = true`
2. Clear cache and redeploy
3. Check _redirects doesn't override rules

---

### Issue: Crawlers see empty HTML

**Symptoms:**
```bash
curl -A "Googlebot" https://medtransic.com/services/medical-billing
# Returns: <div id="root"></div> with no content
```

**Cause:** Prerender not enabled

**Solution:**
1. Enable Netlify Prerender in dashboard
2. Wait 5-10 minutes for cache to clear
3. Test again with Googlebot user-agent

---

### Issue: Pages not indexing

**Symptoms:** Google Search Console shows "Discovered but not crawled"

**Possible causes:**
1. **New site:** Google needs time (wait 2-4 weeks)
2. **Prerender off:** Enable prerender
3. **Sitemap not submitted:** Submit via GSC
4. **robots.txt blocking:** Verify Allow: / exists

**Solution:**
1. Request indexing via GSC URL Inspection
2. Build internal links to new pages
3. Create high-quality, unique content
4. Be patient!

---

### Issue: Duplicate content warnings

**Symptoms:** Google reports duplicate title/description tags

**Cause:** Multiple pages with identical metadata

**Solution:**
1. Check Supabase tables for duplicate content
2. Ensure each page has unique title and description
3. Use SEO helper templates for dynamic pages
4. Update static pages with unique content

---

### Issue: Title/Description truncated in search

**Symptoms:** Google truncates your metadata in results

**Cause:** Content exceeds display limits (title >65, description >170)

**Solution:**
1. SEOHead now auto-truncates, but result may not be readable
2. Manually optimize for better readability:
   - Keep most important keywords at the start
   - Use actionable language
   - Be concise and clear
3. Check Supabase data and update
4. Test in development mode for warnings

---

## Quick Reference: SEO Best Practices

### Title Tags
- Length: 50-60 characters (max 65)
- Format: `Primary Keyword | Secondary | Brand`
- Include location for local pages
- Unique per page
- Front-load important keywords

### Meta Descriptions
- Length: 150-160 characters (max 170)
- Include call-to-action
- Describe value proposition
- Include target keywords naturally
- Unique per page

### Canonical URLs
- Always absolute URLs
- Match sitemap URLs exactly
- No trailing slashes (unless sitemap has them)
- Use HTTPS

### URL Structure
- Use hyphens (not underscores)
- Lowercase only
- Descriptive keywords
- Logical hierarchy

---

## Deployment Checklist

Before marking this as complete:

- [ ] Deploy to Netlify
- [ ] Verify sitemap.xml accessible (Test 1)
- [ ] Verify robots.txt accessible (Test 2)
- [ ] Test SPA routing works (Test 3)
- [ ] Enable Netlify Prerender
- [ ] Test crawler sees content (Test 4)
- [ ] Submit sitemap to GSC (Test 8)
- [ ] Test URL Inspection (Test 7)
- [ ] Schedule follow-up in 7 days to check indexing progress
- [ ] Schedule follow-up in 30 days to review GSC reports

---

## Support & Resources

**Google Resources:**
- [Search Console](https://search.google.com/search-console)
- [URL Inspection Tool](https://support.google.com/webmasters/answer/9012289)
- [Sitemap Guide](https://developers.google.com/search/docs/advanced/sitemaps/overview)

**Netlify Resources:**
- [Prerender Docs](https://docs.netlify.com/site-deploys/post-processing/prerendering/)
- [Redirects & Rewrites](https://docs.netlify.com/routing/redirects/)

**Project Files:**
- Configuration: `netlify.toml`
- SEO Utilities: `src/utils/seoHelpers.ts`
- SEO Component: `src/components/SEOHead.tsx`
- Implementation Guide: `SEO_CRAWLABILITY_IMPLEMENTATION.md`
