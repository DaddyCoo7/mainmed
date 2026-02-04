/**
 * Header component template
 * Creates the site navigation header with SEO-friendly links
 */

export function header({ currentPath = '/' }) {
  const isActive = (path) => currentPath === path || currentPath.startsWith(path + '/');

  return `
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="flex items-center space-x-3" aria-label="Medtransic Home">
            <img src="/medtransic-logomark1.svg" alt="Medtransic Logo" class="h-10 w-10" width="40" height="40">
            <span class="text-2xl font-bold text-gradient">Medtransic</span>
          </a>
        </div>

        <!-- Main Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a href="/" class="font-medium ${isActive('/') && currentPath === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors">
            Home
          </a>
          <a href="/services" class="font-medium ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors">
            <strong>Services</strong>
          </a>
          <a href="/specialties" class="font-medium ${isActive('/specialties') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors">
            Specialties
          </a>
          <a href="/locations" class="font-medium ${isActive('/locations') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors">
            Locations
          </a>
          <a href="/resources" class="font-medium ${isActive('/resources') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors">
            Resources
          </a>
          <a href="/about" class="font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors">
            About
          </a>
          <a href="/contact" class="btn-primary px-6 py-2 text-base">
            <strong>Get Started</strong>
          </a>
        </div>

        <!-- Phone Number -->
        <div class="hidden lg:block">
          <a href="tel:8887770860" class="text-xl font-bold text-blue-600 hover:text-blue-700">
            (888) 777-0860
          </a>
        </div>
      </div>
    </nav>
  </header>
  `;
}
