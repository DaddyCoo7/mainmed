// Server-side rendering utility using jsdom
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { join } from 'path';

interface SSROptions {
  url: string;
  distPath: string;
  timeout?: number;
}

/**
 * Renders a page using jsdom to execute React and extract the rendered HTML
 */
export async function renderPageSSR(options: SSROptions): Promise<string> {
  const { url, distPath, timeout = 5000 } = options;

  // Read the base HTML
  const baseHTML = readFileSync(join(distPath, 'index.html'), 'utf-8');

  // Create a jsdom instance
  const dom = new JSDOM(baseHTML, {
    url: `https://medtransic.com${url}`,
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    beforeParse(window) {
      // Mock window.matchMedia for components that use it
      window.matchMedia = window.matchMedia || function() {
        return {
          matches: false,
          addListener: function() {},
          removeListener: function() {},
          addEventListener: function() {},
          removeEventListener: function() {},
          dispatchEvent: function() { return true; }
        } as any;
      };

      // Mock IntersectionObserver
      (window as any).IntersectionObserver = class IntersectionObserver {
        constructor() {}
        observe() {}
        unobserve() {}
        disconnect() {}
      };

      // Set prerender flag
      (window as any).__PRERENDERING__ = true;
    }
  });

  const { window } = dom;
  const { document } = window;

  // Wait for the React app to render
  await new Promise<void>((resolve) => {
    const checkInterval = setInterval(() => {
      const root = document.getElementById('root');
      if (root && root.innerHTML && root.innerHTML.length > 100) {
        clearInterval(checkInterval);
        resolve();
      }
    }, 100);

    // Timeout fallback
    setTimeout(() => {
      clearInterval(checkInterval);
      resolve();
    }, timeout);
  });

  // Extract the rendered HTML
  return dom.serialize();
}
