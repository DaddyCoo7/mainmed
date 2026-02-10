import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import { resolve } from 'path';

function prerenderPlugin(): Plugin {
  return {
    name: 'prerender-pages',
    apply: 'build',
    closeBundle: {
      sequential: true,
      order: 'post',
      async handler() {
        console.log('\n[prerender-plugin] Running prerender script...');
        try {
          execSync('npx tsx scripts/prerender-simple.ts', {
            cwd: resolve(__dirname),
            stdio: 'inherit',
            timeout: 300000,
          });
          console.log('[prerender-plugin] Prerendering completed successfully.');
        } catch (error) {
          console.error('[prerender-plugin] Prerendering failed:', error);
          process.exit(1);
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), prerenderPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          'supabase': ['@supabase/supabase-js'],
          'swiper': ['swiper'],
        },
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
