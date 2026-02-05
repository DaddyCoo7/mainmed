import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Use hydrate if content is prerendered, otherwise use render
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

// Signal to Netlify Prerender that the page is ready
// Wait for React and react-helmet-async to finish rendering
setTimeout(() => {
  if (typeof window !== 'undefined') {
    (window as any).prerenderReady = true;
  }
}, 2000); // 2 second delay to ensure helmet has updated meta tags