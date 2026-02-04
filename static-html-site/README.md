# Medtransic Static HTML Site

This is a fully static, SEO-optimized version of the Medtransic website built with pure HTML and CSS.

## Features

- 100% pre-rendered static HTML
- Perfect SEO with semantic markup
- All design elements from React app
- Fast loading times
- No JavaScript dependencies for content
- Proper heading hierarchy (H1, H2, H3)
- Semantic HTML with strong/em tags
- Complete internal linking
- Structured data (JSON-LD)
- Image optimization with alt text

## Build Process

1. **Install dependencies:**
   ```bash
   cd static-html-site
   npm install
   ```

2. **Copy .env file:**
   ```bash
   cp ../.env .env
   ```

3. **Build the site:**
   ```bash
   npm run build:full
   ```

This will:
- Compile Tailwind CSS with all custom styles
- Fetch content from Supabase
- Generate all HTML pages with proper SEO
- Copy and optimize assets
- Create sitemap.xml and robots.txt
- Output to `dist/` directory

## Directory Structure

```
static-html-site/
├── src/
│   ├── templates/       # HTML template components
│   │   ├── components/  # Reusable component templates
│   │   ├── layouts/     # Page layout templates
│   │   └── pages/       # Page-specific templates
│   ├── styles/          # CSS source files
│   ├── scripts/         # Build scripts
│   └── data/            # Static data files
├── public/
│   └── assets/          # Static assets (images, icons)
├── dist/                # Built site (output)
└── package.json

```

## Development

Watch mode for CSS changes:
```bash
npm run dev
```

## Deployment

The `dist/` folder contains the complete static site ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

Simply upload the `dist/` folder contents.

## SEO Features

- Semantic HTML5 markup
- Proper heading hierarchy (single H1, multiple H2/H3)
- Strong and emphasis tags for keyword highlighting
- Descriptive alt text on all images
- Internal linking with descriptive anchor text
- Meta tags: title, description, canonical, Open Graph
- JSON-LD structured data
- Sitemap.xml for search engines
- robots.txt configuration

## Performance

- Minified CSS
- Optimized images
- Minimal HTML
- No JavaScript required for core functionality
- Fast server response times
