/**
 * Hero component template
 * Creates an SEO-optimized hero section with proper semantic markup
 */

export function hero() {
  return `
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white overflow-hidden section-padding">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Main Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <strong>Medical Billing Services</strong> That <em>Maximize Your Revenue</em>
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
          <strong>Boost revenue by 30%</strong> with certified <strong>medical billing experts</strong>.
          <em>HIPAA-compliant</em> RCM solutions, <strong>99% clean claims</strong>, faster payments nationwide.
        </p>

        <!-- Key Benefits -->
        <div class="flex flex-wrap justify-center gap-6 mb-10">
          <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="font-semibold"><strong>99% Clean Claims Rate</strong></span>
          </div>
          <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="font-semibold"><strong>30% Revenue Increase</strong></span>
          </div>
          <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="font-semibold"><strong>24/7 Support</strong></span>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact" class="btn-primary inline-block">
            <strong>Get Free Consultation</strong>
          </a>
          <a href="tel:8887770860" class="btn-secondary inline-block">
            Call (888) 777-0860
          </a>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-12 pt-8 border-t border-white/20">
          <p class="text-sm text-blue-200 mb-4">
            <strong>Trusted by 500+ healthcare practices</strong> nationwide
          </p>
          <div class="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <span class="text-sm font-medium">HIPAA Compliant</span>
            <span class="text-sm font-medium">Certified Coders</span>
            <span class="text-sm font-medium">10+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}
