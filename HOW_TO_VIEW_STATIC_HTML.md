# How to View Static HTML Pages

## 📂 Where Are the Static HTML Files?

All static HTML files are generated in the **`dist`** folder after running `npm run build`.

## 🚀 Quick Start

### 1. Build the Project (if not already done)
```bash
npm run build
```

### 2. Preview the Site Locally
```bash
npm run preview
```
Then open your browser to the URL shown (usually `http://localhost:4173`)

### 3. Or Open HTML Files Directly

All generated HTML files are in: **`dist/`**

## 📍 File Locations

### State Pages (50 files)
```
dist/medical-billing-services/[state]/index.html
```
**Examples:**
- `dist/medical-billing-services/california/index.html`
- `dist/medical-billing-services/texas/index.html`
- `dist/medical-billing-services/new-york/index.html`
- `dist/medical-billing-services/florida/index.html`

### City Pages (22 files)
```
dist/medical-billing-services/[state]/[city]/index.html
```
**Examples:**
- `dist/medical-billing-services/california/los-angeles/index.html`
- `dist/medical-billing-services/texas/houston/index.html`
- `dist/medical-billing-services/new-york/new-york-city/index.html`
- `dist/medical-billing-services/illinois/chicago/index.html`

### Comparison Pages (10 files)
```
dist/comparisons/[comparison-slug]/index.html
```
**Examples:**
- `dist/comparisons/in-house-vs-outsourced-medical-billing/index.html`
- `dist/comparisons/ehr-vs-practice-management-software/index.html`
- `dist/comparisons/fee-for-service-vs-value-based-care/index.html`
- `dist/comparisons/medical-billing-vs-revenue-cycle-management/index.html`

### EMR Integration Pages (12 files)
```
dist/integrations/[emr-slug]/index.html
```
**Examples:**
- `dist/integrations/eclinicalworks/index.html`
- `dist/integrations/office-ally/index.html`
- `dist/integrations/kareo/index.html`
- `dist/integrations/athena-health/index.html`
- `dist/integrations/epic/index.html`

### Resource Pages
```
dist/resources/cpt-codes-cheat-sheet/index.html
dist/resources/icd10-codes-reference/index.html
```

### Main Pages
```
dist/index.html (home page)
dist/about/index.html
dist/contact/index.html
```

## 🌐 How to Open HTML Files

### Option 1: Use the Preview Server (Recommended)
```bash
npm run preview
```
Then navigate to any page through the website navigation.

### Option 2: Open Files Directly in Browser

**On Mac:**
```bash
open dist/medical-billing-services/california/index.html
```

**On Linux:**
```bash
xdg-open dist/medical-billing-services/california/index.html
```

**On Windows:**
```bash
start dist/medical-billing-services/california/index.html
```

### Option 3: Use VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on any HTML file in the `dist` folder
3. Select "Open with Live Server"

## 📊 Complete List of All 100 Static HTML Pages

### States (50):
All 50 US states at: `dist/medical-billing-services/[state]/index.html`

### Cities (22):
- Los Angeles, San Diego, San Francisco, San Jose, Sacramento (California)
- Houston, Dallas, Austin, San Antonio (Texas)  
- New York City (New York)
- Miami, Orlando, Tampa, Jacksonville (Florida)
- Chicago, Springfield (Illinois)
- Phoenix, Tucson (Arizona)
- Philadelphia, Pittsburgh (Pennsylvania)
- Atlanta (Georgia)
- Charlotte (North Carolina)

### Comparisons (10):
1. In-House vs Outsourced Medical Billing
2. Centralized vs Decentralized Billing
3. Clearinghouse vs Direct Claims Submission
4. EHR vs Practice Management Software
5. Fee-for-Service vs Value-Based Care
6. Medical Billing vs Revenue Cycle Management
7. Medical Coder vs Medical Biller
8. Paper Claims vs Electronic Claims
9. Professional vs Facility Billing
10. Self-Pay vs Insurance Billing

### EMR Integrations (12):
1. eClinicalWorks
2. Office Ally
3. Kareo
4. Athena Health (athenaOne)
5. Epic
6. NextGen Healthcare
7. Allscripts
8. AdvancedMD
9. DrChrono
10. Practice Fusion
11. Cerner (Oracle Health)
12. Prognocis EMR

### Resource Pages (2):
1. CPT Codes Cheat Sheet
2. ICD-10 Codes Reference

### Other Pages (3):
1. Home page
2. About page
3. Contact page

## 🎯 URLs When Deployed

When deployed to production, these pages will be accessible at:

- **States:** `https://medtransic.com/medical-billing-services/california`
- **Cities:** `https://medtransic.com/medical-billing-services/california/los-angeles`
- **Comparisons:** `https://medtransic.com/comparisons/in-house-vs-outsourced-medical-billing`
- **EMR:** `https://medtransic.com/integrations/eclinicalworks`
- **Resources:** `https://medtransic.com/resources/cpt-codes-cheat-sheet`

## ✨ Summary

**Total: 100 pre-rendered static HTML pages**
- ✅ Fully SEO-optimized
- ✅ Fast loading times
- ✅ Ready for production deployment
- ✅ Accessible from navigation menu

All pages are in the `dist` folder and can be viewed using `npm run preview`!
