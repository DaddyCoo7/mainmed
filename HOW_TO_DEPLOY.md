# How to Deploy Your Site with Static HTML

## Quick Start - Choose One Method:

---

## Method 1: Netlify Drop (Easiest - 2 Minutes)

1. **Build your site:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with all your files.

2. **Go to Netlify Drop:**
   Open https://app.netlify.com/drop

3. **Drag and Drop:**
   - Drag the entire `dist` folder from your file manager
   - Drop it onto the Netlify page
   - Wait 30 seconds for deployment

4. **Done!**
   - Netlify gives you a URL like `https://random-name-123.netlify.app`
   - You can change this name in Site Settings

**Note:** For future updates, just build again and drag the new `dist` folder.

---

## Method 2: Netlify CLI (Better for Repeated Deployments)

### First Time Setup:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```
   (Opens browser - click "Authorize")

3. **Initialize your site:**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Give it a site name (or leave blank for random)
   - Build command: `npm run build`
   - Deploy directory: `dist`

### Deploy (Every Time):

```bash
npm run build
netlify deploy --prod
```

Your site is now live!

---

## Method 3: Connect to GitHub (Auto-Deploy on Push)

### 1. Initialize Git:
```bash
git init
git add .
git commit -m "Initial commit with static HTML SEO pages"
```

### 2. Create GitHub Repository:
- Go to https://github.com/new
- Create a new repository (don't add README, .gitignore, or license)
- Copy the repository URL

### 3. Push to GitHub:
```bash
git remote add origin YOUR_GITHUB_URL
git branch -M main
git push -u origin main
```

### 4. Connect to Netlify:
- Go to https://app.netlify.com
- Click "Add new site" → "Import an existing project"
- Choose "GitHub"
- Select your repository
- Build settings:
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
- Click "Deploy site"

### 5. Add Environment Variables:
In Netlify Dashboard → Site Settings → Environment Variables, add:
- `VITE_SUPABASE_URL` = (your Supabase URL)
- `VITE_SUPABASE_ANON_KEY` = (your Supabase anon key)

**From now on:** Every time you push to GitHub, Netlify auto-deploys!

---

## Custom Domain Setup (After Deployment)

Once your site is deployed:

1. Go to Netlify Dashboard → Domain Settings
2. Click "Add custom domain"
3. Enter your domain (e.g., `medtransic.com`)
4. Update your domain's DNS settings:
   - Add an A record pointing to Netlify's load balancer
   - Or add a CNAME record (Netlify shows you exactly what to do)
5. Enable HTTPS (automatic and free)

---

## Verify Deployment

After deploying, check these URLs (view source with Ctrl+U):

1. **Home page** - should see "Medical Billing Services 2025..."
2. **California page** - `/medical-billing-services/california`
3. **Houston page** - `/medical-billing-services/texas/houston`
4. **Epic integration** - `/integrations/epic`

Each should have UNIQUE title and meta description tags.

---

## What Happens During Build

When you run `npm run build`:

1. ✅ Vite builds your React app
2. ✅ Static generator creates 100 HTML pages:
   - 50 state pages with unique titles
   - 22 city pages with unique titles
   - 10 comparison pages
   - 12 EMR integration pages
   - 2 resource pages
   - 3 static pages
3. ✅ Each page gets unique SEO tags from Supabase
4. ✅ Creates proper directory structure
5. ✅ Copies `_redirects` file for routing

---

## Need Help?

If you get stuck:
- **Netlify Support:** https://answers.netlify.com
- **Your build logs:** Check Netlify Dashboard → Deploys → Build Log
- **Test locally first:** `npm run build` then `npm run preview`
