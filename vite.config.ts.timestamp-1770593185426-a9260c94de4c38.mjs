// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";

// vite-plugin-prerender.ts
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { JSDOM } from "file:///home/project/node_modules/jsdom/lib/api.js";
var routes = [
  // Main pages
  { path: "/", component: null },
  { path: "/about", component: null },
  { path: "/services", component: null },
  { path: "/specialties", component: null },
  { path: "/pricing", component: null },
  { path: "/contact", component: null },
  { path: "/careers", component: null },
  { path: "/faq", component: null },
  { path: "/resources", component: null },
  { path: "/locations", component: null },
  { path: "/ceo", component: null },
  // Service pages
  { path: "/services/medical-billing", component: null },
  { path: "/services/medical-coding", component: null },
  { path: "/services/credentialing", component: null },
  { path: "/services/ar-management", component: null },
  { path: "/services/denial-management", component: null },
  { path: "/services/payment-posting", component: null },
  { path: "/services/prior-authorization", component: null },
  { path: "/services/eligibility-verification", component: null },
  { path: "/services/patient-billing-support", component: null },
  { path: "/services/old-ar-cleanup", component: null },
  { path: "/services/rcm-automation", component: null },
  { path: "/services/analytics-reporting", component: null },
  { path: "/services/compliance-audits", component: null },
  { path: "/services/ehr-emr-integration", component: null },
  { path: "/services/practice-management", component: null },
  { path: "/services/payer-enrollment", component: null },
  { path: "/services/credentialing-payer", component: null },
  { path: "/services/payment-reconciliation", component: null },
  { path: "/services/virtual-assistants", component: null },
  { path: "/services/call-center", component: null },
  { path: "/services/staff-training", component: null },
  { path: "/services/practice-launch", component: null },
  { path: "/services/mips-macra", component: null },
  { path: "/services/telehealth-billing", component: null },
  { path: "/services/payer-contract-negotiation", component: null },
  { path: "/services/website-design", component: null },
  { path: "/services/digital-presence", component: null },
  // Specialty pages (40+ specialties)
  { path: "/specialties/cardiology", component: null },
  { path: "/specialties/orthopedics", component: null },
  { path: "/specialties/dermatology", component: null },
  { path: "/specialties/gastroenterology", component: null },
  { path: "/specialties/neurology", component: null },
  { path: "/specialties/oncology", component: null },
  { path: "/specialties/pediatrics", component: null },
  { path: "/specialties/psychiatry", component: null },
  { path: "/specialties/urology", component: null },
  { path: "/specialties/ophthalmology", component: null },
  { path: "/specialties/ent", component: null },
  { path: "/specialties/anesthesiology", component: null },
  { path: "/specialties/radiology", component: null },
  { path: "/specialties/pathology", component: null },
  { path: "/specialties/emergency-medicine", component: null },
  { path: "/specialties/family-medicine", component: null },
  { path: "/specialties/internal-medicine", component: null },
  { path: "/specialties/obstetrics-gynecology", component: null },
  { path: "/specialties/pain-management", component: null },
  { path: "/specialties/physical-therapy", component: null },
  { path: "/specialties/chiropractic", component: null },
  { path: "/specialties/podiatry", component: null },
  { path: "/specialties/rheumatology", component: null },
  { path: "/specialties/endocrinology", component: null },
  { path: "/specialties/nephrology", component: null },
  { path: "/specialties/pulmonology", component: null },
  { path: "/specialties/hematology", component: null },
  { path: "/specialties/infectious-disease", component: null },
  { path: "/specialties/allergy-immunology", component: null },
  { path: "/specialties/geriatrics", component: null },
  { path: "/specialties/sleep-medicine", component: null },
  { path: "/specialties/sports-medicine", component: null },
  { path: "/specialties/wound-care", component: null },
  { path: "/specialties/occupational-medicine", component: null },
  { path: "/specialties/telemedicine", component: null },
  { path: "/specialties/urgent-care", component: null },
  { path: "/specialties/home-health", component: null },
  { path: "/specialties/mental-health", component: null },
  { path: "/specialties/dental", component: null },
  { path: "/specialties/plastic-surgery", component: null },
  { path: "/specialties/neurosurgery", component: null },
  { path: "/specialties/thoracic-surgery", component: null },
  { path: "/specialties/oral-surgery", component: null },
  { path: "/specialties/interventional-radiology", component: null },
  { path: "/specialties/genetic-testing", component: null },
  { path: "/specialties/laboratory", component: null },
  { path: "/specialties/dme", component: null },
  { path: "/specialties/pharmacy", component: null },
  { path: "/specialties/occupational-therapy", component: null },
  { path: "/specialties/speech-therapy", component: null },
  { path: "/specialties/respiratory-therapy", component: null },
  { path: "/specialties/clinical-research", component: null },
  { path: "/specialties/community-health", component: null },
  { path: "/specialties/primary-care", component: null },
  { path: "/specialties/physician-billing", component: null },
  { path: "/specialties/hospital-billing", component: null },
  // Resource pages
  { path: "/resources/billing-glossary", component: null },
  { path: "/resources/cpt-codes-cheat-sheet", component: null },
  { path: "/resources/icd10-codes-reference", component: null },
  { path: "/resources/medical-billing-modifiers-guide", component: null },
  { path: "/resources/dental-codes-cheat-sheet", component: null },
  { path: "/resources/state-billing-laws", component: null },
  // Comparison pages
  { path: "/comparisons", component: null },
  { path: "/comparisons/medtransic-vs-r1-rcm", component: null },
  { path: "/comparisons/medtransic-vs-athenahealth", component: null },
  { path: "/comparisons/medtransic-vs-kareo", component: null },
  { path: "/comparisons/medtransic-vs-advancedmd", component: null },
  { path: "/comparisons/medtransic-vs-drchrono", component: null },
  // Legal pages
  { path: "/privacy", component: null },
  { path: "/terms", component: null },
  { path: "/hipaa-compliance", component: null },
  { path: "/data-security", component: null }
];
var states = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new-hampshire",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-carolina",
  "north-dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode-island",
  "south-carolina",
  "south-dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west-virginia",
  "wisconsin",
  "wyoming"
];
states.forEach((state) => {
  routes.push({ path: `/locations/${state}`, component: null });
});
var cities = [
  "new-york-ny",
  "los-angeles-ca",
  "chicago-il",
  "houston-tx",
  "phoenix-az",
  "philadelphia-pa",
  "san-antonio-tx",
  "san-diego-ca",
  "dallas-tx",
  "san-jose-ca",
  "austin-tx",
  "jacksonville-fl",
  "fort-worth-tx",
  "columbus-oh",
  "charlotte-nc",
  "san-francisco-ca",
  "indianapolis-in",
  "seattle-wa",
  "denver-co",
  "washington-dc",
  "boston-ma",
  "el-paso-tx",
  "nashville-tn",
  "detroit-mi",
  "oklahoma-city-ok",
  "portland-or",
  "las-vegas-nv",
  "memphis-tn",
  "louisville-ky",
  "baltimore-md",
  "milwaukee-wi",
  "albuquerque-nm",
  "tucson-az",
  "fresno-ca",
  "mesa-az",
  "sacramento-ca",
  "atlanta-ga",
  "kansas-city-mo",
  "colorado-springs-co",
  "omaha-ne",
  "raleigh-nc",
  "miami-fl",
  "long-beach-ca",
  "virginia-beach-va",
  "oakland-ca",
  "minneapolis-mn",
  "tulsa-ok",
  "tampa-fl",
  "arlington-tx",
  "new-orleans-la"
];
cities.forEach((city) => {
  routes.push({ path: `/locations/${city}`, component: null });
});
function prerenderPlugin() {
  return {
    name: "vite-plugin-prerender",
    apply: "build",
    closeBundle: async () => {
      console.log("\n\u{1F680} Starting prerendering process...\n");
      const distPath = join(process.cwd(), "dist");
      const indexPath = join(distPath, "index.html");
      if (!existsSync(indexPath)) {
        console.error("\u274C index.html not found in dist folder");
        return;
      }
      const template = readFileSync(indexPath, "utf-8");
      let successCount = 0;
      let errorCount = 0;
      for (const route of routes) {
        try {
          const outputPath = join(distPath, route.path === "/" ? "index.html" : `${route.path}/index.html`);
          const outputDir = dirname(outputPath);
          if (!existsSync(outputDir)) {
            mkdirSync(outputDir, { recursive: true });
          }
          const dom = new JSDOM(template);
          const document = dom.window.document;
          document.documentElement.setAttribute("data-prerendered", "true");
          document.documentElement.setAttribute("data-prerender-route", route.path);
          let canonicalLink = document.querySelector('link[rel="canonical"]');
          if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
          }
          canonicalLink.setAttribute("href", `https://medtransic.com${route.path}`);
          const html = dom.serialize();
          writeFileSync(outputPath, html, "utf-8");
          successCount++;
          if (successCount % 20 === 0) {
            console.log(`\u2705 Prerendered ${successCount}/${routes.length} pages...`);
          }
        } catch (error) {
          console.error(`\u274C Failed to prerender ${route.path}:`, error);
          errorCount++;
        }
      }
      console.log(`
\u2728 Prerendering complete!`);
      console.log(`   Success: ${successCount} pages`);
      if (errorCount > 0) {
        console.log(`   Errors: ${errorCount} pages`);
      }
      console.log("");
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [react(), prerenderPlugin()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "motion": ["framer-motion"],
          "supabase": ["@supabase/supabase-js"],
          "swiper": ["swiper"]
        }
      }
    },
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4tcHJlcmVuZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgcHJlcmVuZGVyUGx1Z2luIH0gZnJvbSAnLi92aXRlLXBsdWdpbi1wcmVyZW5kZXInO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHByZXJlbmRlclBsdWdpbigpXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAnbW90aW9uJzogWydmcmFtZXItbW90aW9uJ10sXG4gICAgICAgICAgJ3N1cGFiYXNlJzogWydAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXSxcbiAgICAgICAgICAnc3dpcGVyJzogWydzd2lwZXInXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3Qvdml0ZS1wbHVnaW4tcHJlcmVuZGVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS1wbHVnaW4tcHJlcmVuZGVyLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYywgbWtkaXJTeW5jLCBleGlzdHNTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgam9pbiwgZGlybmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgSlNET00gfSBmcm9tICdqc2RvbSc7XG5cbmludGVyZmFjZSBQcmVyZW5kZXJSb3V0ZSB7XG4gIHBhdGg6IHN0cmluZztcbiAgY29tcG9uZW50OiBhbnk7XG59XG5cbmNvbnN0IHJvdXRlczogUHJlcmVuZGVyUm91dGVbXSA9IFtcbiAgLy8gTWFpbiBwYWdlc1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc2VydmljZXMnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9wcmljaW5nJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9jb250YWN0JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9jYXJlZXJzJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9mYXEnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3Jlc291cmNlcycsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvbG9jYXRpb25zJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9jZW8nLCBjb21wb25lbnQ6IG51bGwgfSxcblxuICAvLyBTZXJ2aWNlIHBhZ2VzXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9tZWRpY2FsLWJpbGxpbmcnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NlcnZpY2VzL21lZGljYWwtY29kaW5nJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9jcmVkZW50aWFsaW5nJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9hci1tYW5hZ2VtZW50JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9kZW5pYWwtbWFuYWdlbWVudCcsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc2VydmljZXMvcGF5bWVudC1wb3N0aW5nJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9wcmlvci1hdXRob3JpemF0aW9uJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9lbGlnaWJpbGl0eS12ZXJpZmljYXRpb24nLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NlcnZpY2VzL3BhdGllbnQtYmlsbGluZy1zdXBwb3J0JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9vbGQtYXItY2xlYW51cCcsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc2VydmljZXMvcmNtLWF1dG9tYXRpb24nLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NlcnZpY2VzL2FuYWx5dGljcy1yZXBvcnRpbmcnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NlcnZpY2VzL2NvbXBsaWFuY2UtYXVkaXRzJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9laHItZW1yLWludGVncmF0aW9uJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9wcmFjdGljZS1tYW5hZ2VtZW50JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9wYXllci1lbnJvbGxtZW50JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9jcmVkZW50aWFsaW5nLXBheWVyJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9wYXltZW50LXJlY29uY2lsaWF0aW9uJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy92aXJ0dWFsLWFzc2lzdGFudHMnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NlcnZpY2VzL2NhbGwtY2VudGVyJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9zdGFmZi10cmFpbmluZycsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc2VydmljZXMvcHJhY3RpY2UtbGF1bmNoJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy9taXBzLW1hY3JhJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy90ZWxlaGVhbHRoLWJpbGxpbmcnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NlcnZpY2VzL3BheWVyLWNvbnRyYWN0LW5lZ290aWF0aW9uJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zZXJ2aWNlcy93ZWJzaXRlLWRlc2lnbicsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc2VydmljZXMvZGlnaXRhbC1wcmVzZW5jZScsIGNvbXBvbmVudDogbnVsbCB9LFxuXG4gIC8vIFNwZWNpYWx0eSBwYWdlcyAoNDArIHNwZWNpYWx0aWVzKVxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvY2FyZGlvbG9neScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvb3J0aG9wZWRpY3MnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2Rlcm1hdG9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9nYXN0cm9lbnRlcm9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9uZXVyb2xvZ3knLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL29uY29sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9wZWRpYXRyaWNzJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9wc3ljaGlhdHJ5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy91cm9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9vcGh0aGFsbW9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9lbnQnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2FuZXN0aGVzaW9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9yYWRpb2xvZ3knLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL3BhdGhvbG9neScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvZW1lcmdlbmN5LW1lZGljaW5lJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9mYW1pbHktbWVkaWNpbmUnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2ludGVybmFsLW1lZGljaW5lJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9vYnN0ZXRyaWNzLWd5bmVjb2xvZ3knLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL3BhaW4tbWFuYWdlbWVudCcsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvcGh5c2ljYWwtdGhlcmFweScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvY2hpcm9wcmFjdGljJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9wb2RpYXRyeScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvcmhldW1hdG9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9lbmRvY3Jpbm9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9uZXBocm9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9wdWxtb25vbG9neScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvaGVtYXRvbG9neScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvaW5mZWN0aW91cy1kaXNlYXNlJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9hbGxlcmd5LWltbXVub2xvZ3knLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2dlcmlhdHJpY3MnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL3NsZWVwLW1lZGljaW5lJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9zcG9ydHMtbWVkaWNpbmUnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL3dvdW5kLWNhcmUnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL29jY3VwYXRpb25hbC1tZWRpY2luZScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvdGVsZW1lZGljaW5lJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy91cmdlbnQtY2FyZScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvaG9tZS1oZWFsdGgnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL21lbnRhbC1oZWFsdGgnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2RlbnRhbCcsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvcGxhc3RpYy1zdXJnZXJ5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9uZXVyb3N1cmdlcnknLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL3Rob3JhY2ljLXN1cmdlcnknLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL29yYWwtc3VyZ2VyeScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvaW50ZXJ2ZW50aW9uYWwtcmFkaW9sb2d5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9nZW5ldGljLXRlc3RpbmcnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2xhYm9yYXRvcnknLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2RtZScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvcGhhcm1hY3knLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL29jY3VwYXRpb25hbC10aGVyYXB5JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9zcGVjaWFsdGllcy9zcGVlY2gtdGhlcmFweScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvcmVzcGlyYXRvcnktdGhlcmFweScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvY2xpbmljYWwtcmVzZWFyY2gnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2NvbW11bml0eS1oZWFsdGgnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL3ByaW1hcnktY2FyZScsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvc3BlY2lhbHRpZXMvcGh5c2ljaWFuLWJpbGxpbmcnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3NwZWNpYWx0aWVzL2hvc3BpdGFsLWJpbGxpbmcnLCBjb21wb25lbnQ6IG51bGwgfSxcblxuICAvLyBSZXNvdXJjZSBwYWdlc1xuICB7IHBhdGg6ICcvcmVzb3VyY2VzL2JpbGxpbmctZ2xvc3NhcnknLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3Jlc291cmNlcy9jcHQtY29kZXMtY2hlYXQtc2hlZXQnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3Jlc291cmNlcy9pY2QxMC1jb2Rlcy1yZWZlcmVuY2UnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3Jlc291cmNlcy9tZWRpY2FsLWJpbGxpbmctbW9kaWZpZXJzLWd1aWRlJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9yZXNvdXJjZXMvZGVudGFsLWNvZGVzLWNoZWF0LXNoZWV0JywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9yZXNvdXJjZXMvc3RhdGUtYmlsbGluZy1sYXdzJywgY29tcG9uZW50OiBudWxsIH0sXG5cbiAgLy8gQ29tcGFyaXNvbiBwYWdlc1xuICB7IHBhdGg6ICcvY29tcGFyaXNvbnMnLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL2NvbXBhcmlzb25zL21lZHRyYW5zaWMtdnMtcjEtcmNtJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9jb21wYXJpc29ucy9tZWR0cmFuc2ljLXZzLWF0aGVuYWhlYWx0aCcsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvY29tcGFyaXNvbnMvbWVkdHJhbnNpYy12cy1rYXJlbycsIGNvbXBvbmVudDogbnVsbCB9LFxuICB7IHBhdGg6ICcvY29tcGFyaXNvbnMvbWVkdHJhbnNpYy12cy1hZHZhbmNlZG1kJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9jb21wYXJpc29ucy9tZWR0cmFuc2ljLXZzLWRyY2hyb25vJywgY29tcG9uZW50OiBudWxsIH0sXG5cbiAgLy8gTGVnYWwgcGFnZXNcbiAgeyBwYXRoOiAnL3ByaXZhY3knLCBjb21wb25lbnQ6IG51bGwgfSxcbiAgeyBwYXRoOiAnL3Rlcm1zJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9oaXBhYS1jb21wbGlhbmNlJywgY29tcG9uZW50OiBudWxsIH0sXG4gIHsgcGF0aDogJy9kYXRhLXNlY3VyaXR5JywgY29tcG9uZW50OiBudWxsIH0sXG5dO1xuXG4vLyBBZGQgNTAgc3RhdGVzXG5jb25zdCBzdGF0ZXMgPSBbXG4gICdhbGFiYW1hJywgJ2FsYXNrYScsICdhcml6b25hJywgJ2Fya2Fuc2FzJywgJ2NhbGlmb3JuaWEnLCAnY29sb3JhZG8nLCAnY29ubmVjdGljdXQnLFxuICAnZGVsYXdhcmUnLCAnZmxvcmlkYScsICdnZW9yZ2lhJywgJ2hhd2FpaScsICdpZGFobycsICdpbGxpbm9pcycsICdpbmRpYW5hJywgJ2lvd2EnLFxuICAna2Fuc2FzJywgJ2tlbnR1Y2t5JywgJ2xvdWlzaWFuYScsICdtYWluZScsICdtYXJ5bGFuZCcsICdtYXNzYWNodXNldHRzJywgJ21pY2hpZ2FuJyxcbiAgJ21pbm5lc290YScsICdtaXNzaXNzaXBwaScsICdtaXNzb3VyaScsICdtb250YW5hJywgJ25lYnJhc2thJywgJ25ldmFkYScsICduZXctaGFtcHNoaXJlJyxcbiAgJ25ldy1qZXJzZXknLCAnbmV3LW1leGljbycsICduZXcteW9yaycsICdub3J0aC1jYXJvbGluYScsICdub3J0aC1kYWtvdGEnLCAnb2hpbycsXG4gICdva2xhaG9tYScsICdvcmVnb24nLCAncGVubnN5bHZhbmlhJywgJ3Job2RlLWlzbGFuZCcsICdzb3V0aC1jYXJvbGluYScsICdzb3V0aC1kYWtvdGEnLFxuICAndGVubmVzc2VlJywgJ3RleGFzJywgJ3V0YWgnLCAndmVybW9udCcsICd2aXJnaW5pYScsICd3YXNoaW5ndG9uJywgJ3dlc3QtdmlyZ2luaWEnLFxuICAnd2lzY29uc2luJywgJ3d5b21pbmcnXG5dO1xuXG5zdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gIHJvdXRlcy5wdXNoKHsgcGF0aDogYC9sb2NhdGlvbnMvJHtzdGF0ZX1gLCBjb21wb25lbnQ6IG51bGwgfSk7XG59KTtcblxuLy8gQWRkIG1ham9yIGNpdGllc1xuY29uc3QgY2l0aWVzID0gW1xuICAnbmV3LXlvcmstbnknLCAnbG9zLWFuZ2VsZXMtY2EnLCAnY2hpY2Fnby1pbCcsICdob3VzdG9uLXR4JywgJ3Bob2VuaXgtYXonLFxuICAncGhpbGFkZWxwaGlhLXBhJywgJ3Nhbi1hbnRvbmlvLXR4JywgJ3Nhbi1kaWVnby1jYScsICdkYWxsYXMtdHgnLCAnc2FuLWpvc2UtY2EnLFxuICAnYXVzdGluLXR4JywgJ2phY2tzb252aWxsZS1mbCcsICdmb3J0LXdvcnRoLXR4JywgJ2NvbHVtYnVzLW9oJywgJ2NoYXJsb3R0ZS1uYycsXG4gICdzYW4tZnJhbmNpc2NvLWNhJywgJ2luZGlhbmFwb2xpcy1pbicsICdzZWF0dGxlLXdhJywgJ2RlbnZlci1jbycsICd3YXNoaW5ndG9uLWRjJyxcbiAgJ2Jvc3Rvbi1tYScsICdlbC1wYXNvLXR4JywgJ25hc2h2aWxsZS10bicsICdkZXRyb2l0LW1pJywgJ29rbGFob21hLWNpdHktb2snLFxuICAncG9ydGxhbmQtb3InLCAnbGFzLXZlZ2FzLW52JywgJ21lbXBoaXMtdG4nLCAnbG91aXN2aWxsZS1reScsICdiYWx0aW1vcmUtbWQnLFxuICAnbWlsd2F1a2VlLXdpJywgJ2FsYnVxdWVycXVlLW5tJywgJ3R1Y3Nvbi1heicsICdmcmVzbm8tY2EnLCAnbWVzYS1heicsXG4gICdzYWNyYW1lbnRvLWNhJywgJ2F0bGFudGEtZ2EnLCAna2Fuc2FzLWNpdHktbW8nLCAnY29sb3JhZG8tc3ByaW5ncy1jbycsICdvbWFoYS1uZScsXG4gICdyYWxlaWdoLW5jJywgJ21pYW1pLWZsJywgJ2xvbmctYmVhY2gtY2EnLCAndmlyZ2luaWEtYmVhY2gtdmEnLCAnb2FrbGFuZC1jYScsXG4gICdtaW5uZWFwb2xpcy1tbicsICd0dWxzYS1vaycsICd0YW1wYS1mbCcsICdhcmxpbmd0b24tdHgnLCAnbmV3LW9ybGVhbnMtbGEnXG5dO1xuXG5jaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgcm91dGVzLnB1c2goeyBwYXRoOiBgL2xvY2F0aW9ucy8ke2NpdHl9YCwgY29tcG9uZW50OiBudWxsIH0pO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVyZW5kZXJQbHVnaW4oKTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tcHJlcmVuZGVyJyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBjbG9zZUJ1bmRsZTogYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1xcblx1RDgzRFx1REU4MCBTdGFydGluZyBwcmVyZW5kZXJpbmcgcHJvY2Vzcy4uLlxcbicpO1xuXG4gICAgICBjb25zdCBkaXN0UGF0aCA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2Rpc3QnKTtcbiAgICAgIGNvbnN0IGluZGV4UGF0aCA9IGpvaW4oZGlzdFBhdGgsICdpbmRleC5odG1sJyk7XG5cbiAgICAgIGlmICghZXhpc3RzU3luYyhpbmRleFBhdGgpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1Mjc0QyBpbmRleC5odG1sIG5vdCBmb3VuZCBpbiBkaXN0IGZvbGRlcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gcmVhZEZpbGVTeW5jKGluZGV4UGF0aCwgJ3V0Zi04Jyk7XG4gICAgICBsZXQgc3VjY2Vzc0NvdW50ID0gMDtcbiAgICAgIGxldCBlcnJvckNvdW50ID0gMDtcblxuICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBvdXRwdXRQYXRoID0gam9pbihkaXN0UGF0aCwgcm91dGUucGF0aCA9PT0gJy8nID8gJ2luZGV4Lmh0bWwnIDogYCR7cm91dGUucGF0aH0vaW5kZXguaHRtbGApO1xuICAgICAgICAgIGNvbnN0IG91dHB1dERpciA9IGRpcm5hbWUob3V0cHV0UGF0aCk7XG5cbiAgICAgICAgICBpZiAoIWV4aXN0c1N5bmMob3V0cHV0RGlyKSkge1xuICAgICAgICAgICAgbWtkaXJTeW5jKG91dHB1dERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIGEgc2ltcGxlIHByZXJlbmRlcmVkIHZlcnNpb24gd2l0aCByb3V0ZS1zcGVjaWZpYyBtZXRhIHRhZ3NcbiAgICAgICAgICBjb25zdCBkb20gPSBuZXcgSlNET00odGVtcGxhdGUpO1xuICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZG9tLndpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAgIC8vIEFkZCBwcmVyZW5kZXItcmVhZHkgYXR0cmlidXRlXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVyZW5kZXJlZCcsICd0cnVlJyk7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVyZW5kZXItcm91dGUnLCByb3V0ZS5wYXRoKTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSBjYW5vbmljYWwgVVJMXG4gICAgICAgICAgbGV0IGNhbm9uaWNhbExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgIGlmICghY2Fub25pY2FsTGluaykge1xuICAgICAgICAgICAgY2Fub25pY2FsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIGNhbm9uaWNhbExpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnY2Fub25pY2FsJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNhbm9uaWNhbExpbmspO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5vbmljYWxMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovL21lZHRyYW5zaWMuY29tJHtyb3V0ZS5wYXRofWApO1xuXG4gICAgICAgICAgY29uc3QgaHRtbCA9IGRvbS5zZXJpYWxpemUoKTtcbiAgICAgICAgICB3cml0ZUZpbGVTeW5jKG91dHB1dFBhdGgsIGh0bWwsICd1dGYtOCcpO1xuICAgICAgICAgIHN1Y2Nlc3NDb3VudCsrO1xuXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NDb3VudCAlIDIwID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXHUyNzA1IFByZXJlbmRlcmVkICR7c3VjY2Vzc0NvdW50fS8ke3JvdXRlcy5sZW5ndGh9IHBhZ2VzLi4uYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFx1Mjc0QyBGYWlsZWQgdG8gcHJlcmVuZGVyICR7cm91dGUucGF0aH06YCwgZXJyb3IpO1xuICAgICAgICAgIGVycm9yQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhgXFxuXHUyNzI4IFByZXJlbmRlcmluZyBjb21wbGV0ZSFgKTtcbiAgICAgIGNvbnNvbGUubG9nKGAgICBTdWNjZXNzOiAke3N1Y2Nlc3NDb3VudH0gcGFnZXNgKTtcbiAgICAgIGlmIChlcnJvckNvdW50ID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgICAgRXJyb3JzOiAke2Vycm9yQ291bnR9IHBhZ2VzYCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgfVxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7OztBQ0FsQixTQUFTLGNBQWMsZUFBZSxXQUFXLGtCQUFrQjtBQUNuRSxTQUFTLE1BQU0sZUFBZTtBQUM5QixTQUFTLGFBQWE7QUFPdEIsSUFBTSxTQUEyQjtBQUFBO0FBQUEsRUFFL0IsRUFBRSxNQUFNLEtBQUssV0FBVyxLQUFLO0FBQUEsRUFDN0IsRUFBRSxNQUFNLFVBQVUsV0FB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
