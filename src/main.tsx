import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

// Check if there's already static content rendered
const hasStaticContent = rootElement?.querySelector('.static-content');

if (!hasStaticContent && rootElement) {
  // Only render React if there's no static content
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  // Static content exists, just add interactive elements without replacing content
  console.log('Static content detected, preserving pre-rendered HTML');
}
