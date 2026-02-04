import { useEffect } from 'react';

/**
 * Hook to signal to Netlify Prerender that the page is ready to be rendered.
 * Includes a delay to ensure react-helmet-async has time to update the DOM
 * before Netlify captures the HTML.
 *
 * @param isReady - Boolean indicating whether the page content is ready
 *
 * @example
 * ```tsx
 * const [loading, setLoading] = useState(true);
 * const [data, setData] = useState([]);
 *
 * usePrerenderReady(!loading && data.length > 0);
 * ```
 */
export const usePrerenderReady = (isReady: boolean) => {
  useEffect(() => {
    if (isReady && typeof window !== 'undefined') {
      // Add a small delay to ensure react-helmet-async has completed DOM updates
      // react-helmet-async operates asynchronously and needs time to:
      // 1. Collect all Helmet components from the React tree
      // 2. Deduplicate and merge metadata
      // 3. Update the actual DOM elements
      const timeoutId = setTimeout(() => {
        window.prerenderReady = true;
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isReady]);
};
