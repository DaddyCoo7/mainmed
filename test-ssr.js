import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const baseHTML = readFileSync(join(distPath, 'index.html'), 'utf-8');

console.log('Creating JSDOM...');
const dom = new JSDOM(baseHTML, {
  url: `file://${distPath}/`,
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true,
  beforeParse(window) {
    console.log('BeforeParse called');
    window.matchMedia = () => ({ matches: false, addListener: () => {}, removeListener: () => {} });
    window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
    window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
    window.requestAnimationFrame = (cb) => setTimeout(cb, 0);
    window.__PRERENDERING__ = true;
  }
});

console.log('JSDOM created');
const { window } = dom;
const { document } = window;

setTimeout(() => {
  const root = document.getElementById('root');
  console.log('Root innerHTML length:', root?.innerHTML.length || 0);
  console.log('First 500 chars:', root?.innerHTML.slice(0, 500) || 'EMPTY');
  process.exit(0);
}, 8000);
