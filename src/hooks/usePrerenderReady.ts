import { useEffect } from 'react';

/**
 * Hook to signal to Netlify Prerender that the page is ready to be rendered.
 * Call this hook when your page has finished loading all critical content.
 *
 * @param isReady - Boolean indicating whether the page content is ready
 * @param dependencies - Array of dependencies to watch (e.g., [loading, data])
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
      window.prerenderReady = true;
    }
  }, [isReady]);
};
