# SEO Quick Start Guide

## Getting Started with Your New SEO Features

### 1. Optimize All Images (First Time Setup)

Run this command to convert and optimize all images:
```bash
npm run optimize:images
```

This will:
- Convert JPG/PNG to WebP
- Create responsive image sizes
- Compress originals
- Save 40-60% on file sizes

**Note**: Run this after adding any new images to the `/public` directory.

---

### 2. Using the Enhanced OptimizedImage Component

Replace standard `<img>` tags with `<OptimizedImage>`:

```tsx
import OptimizedImage from '../components/OptimizedImage';

// Before (standard img):
<img src="/images/hero.jpg" alt="Medical billing" />

// After (optimized with WebP):
<OptimizedImage
  src="/images/hero.jpg"
  alt="Medical billing services"
  width={1200}
  height={630}
  loading="lazy"
  fetchpriority="auto"
/>
```

**Key Props**:
- `width` & `height`: Required for proper layout (prevents CLS)
- `loading`: Use `"lazy"` for below-fold images, `"eager"` for hero images
- `fetchpriority`: Use `"high"` for LCP images (hero), `"auto"` for others
- `sizes`: Optional, helps browser pick right image size

---

### 3. Adding Customer Reviews with Schema Markup

```tsx
import ReviewSchema from '../components/ReviewSchema';

<ReviewSchema
  itemReviewed={{
    type: 'Service',
    name: 'Medical Billing Services',
    description: 'Professional medical billing for healthcare practices'
  }}
  reviews={[
    {
      author: 'Dr. Sarah Johnson',
      datePublished: '2024-01-15',
      reviewBody: 'Outstanding service! Increased our collections by 35%.',
      reviewRating: 5,
      reviewTitle: 'Best Decision for Our Practice'
    }
  ]}
  aggregateRating={{
    ratingValue: 4.8,
    ratingCount: 150,
    bestRating: 5,
    worstRating: 1
  }}
/>
```

This creates rich snippets with star ratings in search results!

---

### 4. Adding Medical Specialty Schema

```tsx
import MedicalSpecialtySchema from '../components/MedicalSpecialtySchema';

<MedicalSpecialtySchema
  name="Cardiology Medical Billing"
  description="Specialized billing services for cardiology practices"
  url="https://medtransic.com/specialties/cardiology"
  specialtyCode="394579002"
  associatedAnatomy={['Heart', 'Cardiovascular System']}
  relevantSpecialty={['Internal Medicine', 'Vascular Surgery']}
/>
```

---

### 5. Creating How-To Guides with Schema

```tsx
import HowToSchema from '../components/HowToSchema';

<HowToSchema
  name="How to Submit a Clean Medical Claim"
  description="Step-by-step guide to submitting error-free medical claims"
  totalTime="PT15M"
  steps={[
    {
      name: 'Verify Patient Insurance',
      text: 'Check eligibility and benefits before the appointment',
      url: 'https://medtransic.com/services/eligibility-verification'
    },
    {
      name: 'Assign Correct CPT Codes',
      text: 'Use accurate CPT codes that match the service provided',
      url: 'https://medtransic.com/services/medical-coding'
    },
    {
      name: 'Submit with Complete Documentation',
      text: 'Include all required documentation and modifiers',
    }
  ]}
  tool={['EHR System', 'Clearinghouse', 'Code Book']}
/>
```

---

### 6. Enhancing Page SEO with SEOHead

The `SEOHead` component now supports more options:

```tsx
import SEOHead from '../components/SEOHead';

<SEOHead
  title="Cardiology Medical Billing Services"
  description="Expert cardiology billing services. Increase revenue by 30% with specialized CPT coding and claims management."
  keywords="cardiology billing, cardiac procedure coding, heart billing services"
  ogImage="https://medtransic.com/images/cardiology-services.jpg"
  article={{
    publishedTime: '2024-01-15T10:00:00Z',
    modifiedTime: '2024-02-01T15:30:00Z',
    author: 'MedTransic Team',
    section: 'Medical Billing',
    tags: ['Cardiology', 'Medical Billing', 'Healthcare']
  }}
  locale="en_US"
  alternateLocales={['es_US']}
/>
```

---

### 7. Monitoring Performance

#### Check Core Web Vitals:
1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your URL
3. Check mobile and desktop scores

**Target Scores**:
- Performance: 90+ (desktop), 80+ (mobile)
- First Contentful Paint: <1.0s (desktop), <1.5s (mobile)
- Largest Contentful Paint: <2.5s
- Total Blocking Time: <300ms

#### Google Search Console:
1. Submit your sitemap: `https://medtransic.com/sitemap.xml`
2. Monitor Core Web Vitals report
3. Check Rich Results report for schema errors
4. Track search queries and impressions

---

### 8. HTML Sitemap

Users can now navigate all pages at: `https://medtransic.com/sitemap`

This page:
- Lists all 193 pages by category
- Improves internal linking
- Helps users find content
- Assists search engine crawling

---

### 9. Best Practices for New Content

When adding new pages:

1. **Always include SEOHead**:
```tsx
<SEOHead
  title="Unique Page Title (under 60 chars)"
  description="Compelling description 150-160 characters that includes primary keyword and CTA"
  keywords="primary keyword, secondary keyword, long-tail keyword"
/>
```

2. **Use OptimizedImage for all images**:
```tsx
<OptimizedImage
  src="/images/new-image.jpg"
  alt="Descriptive alt text with keywords"
  width={800}
  height={600}
  loading="lazy"
/>
```

3. **Add appropriate schema markup**:
- Service pages → ServiceSchema
- Specialty pages → MedicalSpecialtySchema
- Blog posts → ArticleSchema
- FAQs → FAQSchema
- How-to guides → HowToSchema

4. **Internal linking**:
- Link to 3-5 related pages
- Use descriptive anchor text
- Add to `/src/config/internalLinks.ts` if needed

---

### 10. Troubleshooting

#### Images not loading?
- Check the file path is correct
- Run `npm run optimize:images` again
- Verify WebP files exist alongside originals

#### Schema errors?
- Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
- Check JSON-LD syntax with [Schema.org validator](https://validator.schema.org/)

#### Slow page loads?
- Check bundle sizes with `npm run build`
- Verify lazy loading is working
- Check Network tab in DevTools

#### Build errors?
- Clear cache: `rm -rf dist node_modules/.vite`
- Reinstall: `npm install`
- Rebuild: `npm run build`

---

## Quick Reference Commands

```bash
# Build for production
npm run build

# Optimize images
npm run optimize:images

# Run development server
npm run dev

# Preview production build
npm run preview
```

---

## Important URLs

- **HTML Sitemap**: https://medtransic.com/sitemap
- **XML Sitemap**: https://medtransic.com/sitemap.xml
- **Robots.txt**: https://medtransic.com/robots.txt

---

## Need Help?

Refer to:
- [Full Implementation Guide](./SEO_IMPROVEMENTS_IMPLEMENTED.md)
- [Google Search Central](https://developers.google.com/search)
- [Web.dev Performance Guide](https://web.dev/performance/)

---

**Remember**: SEO is an ongoing process. Monitor, test, and iterate based on real data!
