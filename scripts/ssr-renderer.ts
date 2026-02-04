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

  // Create a jsdom instance with proper resource loading
  const dom = new JSDOM(baseHTML, {
    url: `file://${distPath}/`,
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    beforeParse(window) {
      // Set up the base path for resources
      (window as any).__RESOURCE_BASE__ = `file://${distPath}`;

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

      // Mock ResizeObserver for framer-motion
      (window as any).ResizeObserver = class ResizeObserver {
        constructor() {}
        observe() {}
        unobserve() {}
        disconnect() {}
      };

      // Mock requestAnimationFrame for animations
      (window as any).requestAnimationFrame = (callback: any) => {
        return setTimeout(callback, 0);
      };
      (window as any).cancelAnimationFrame = (id: any) => {
        clearTimeout(id);
      };

      // Set prerender flag
      (window as any).__PRERENDERING__ = true;
    }
  });

  const { window } = dom;
  const { document } = window;

  // Wait for the React app to render
  await new Promise<void>((resolve) => {
    let lastLength = 0;
    let stableCount = 0;

    const checkInterval = setInterval(() => {
      const root = document.getElementById('root');
      if (root && root.innerHTML) {
        const currentLength = root.innerHTML.length;

        // Check if content is substantial and stable
        if (currentLength > 500) {
          if (currentLength === lastLength) {
            stableCount++;
            // If content hasn't changed for 3 checks, consider it stable
            if (stableCount >= 3) {
              clearInterval(checkInterval);
              resolve();
            }
          } else {
            stableCount = 0;
            lastLength = currentLength;
          }
        }
      }
    }, 200);

    // Timeout fallback
    setTimeout(() => {
      clearInterval(checkInterval);
      resolve();
    }, timeout);
  });

  // Extract the rendered HTML
  return dom.serialize();
}
