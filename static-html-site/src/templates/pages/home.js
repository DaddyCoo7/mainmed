/**
 * Homepage template
 * SEO-optimized homepage with comprehensive content and semantic markup
 */

import { header } from '../components/header.js';
import { hero } from '../components/hero.js';
import { servicesSection } from '../components/services-section.js';
import { footer } from '../components/footer.js';
import { baseLayout } from '../layouts/base.js';
import { organizationSchema, aggregateRatingSchema } from '../../scripts/structured-data.js';

export function generateHomePage() {
  const content = `
    ${header({ currentPath: '/' })}

    ${hero()}

    <!-- Why Choose Medtransic Section -->
    <section class="section-padding bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Why Choose <strong>Medtransic Medical Billing</strong>
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            <em>Industry-leading medical billing services</em> with proven results and
            <strong>certified medical billing specialists</strong>
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
          <article class="text-center">
            <div class="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              <strong>99% Clean Claims Rate</strong>
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Our <strong>certified medical coders</strong> ensure accuracy with every claim submission,
              minimizing <em>claim denials</em> and maximizing <strong>first-pass acceptance rates</strong>.
            </p>
          </article>

          <article class="text-center">
            <div class="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              <strong>30% Revenue Increase</strong>
            </h3>
            <p class="text-gray-700 leading-relaxed">
              <strong>Medical practices</strong> partnering with us see an average <em>30% increase in revenue</em>
              through <strong>optimized billing processes</strong> and <strong>faster payment collection</strong>.
            </p>
          </article>

          <article class="text-center">
            <div class="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              <strong>24/7 Support</strong>
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Round-the-clock support from <strong>dedicated account managers</strong> and
              <strong>billing specialists</strong> ensures your practice never misses a beat.
            </p>
          </article>
        </div>
      </div>
    </section>

    ${servicesSection()}

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your <strong>Healthcare Revenue Cycle</strong>?
        </h2>
        <p class="text-xl mb-8 text-blue-50">
          Join 500+ <strong>healthcare practices</strong> that trust Medtransic for their
          <strong>medical billing needs</strong>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-block">
            <strong>Get Free Consultation</strong>
          </a>
          <a href="tel:8887770860" class="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-block">
            Call <strong>(888) 777-0860</strong>
          </a>
        </div>
      </div>
    </section>

    ${footer()}
  `;

  return baseLayout({
    title: 'Medical Billing Services 2025 | Expert RCM | 99% Clean Claims',
    description: 'Boost revenue by 30% with certified medical billing experts. HIPAA-compliant RCM solutions, 99% clean claims, faster payments nationwide.',
    canonical: 'https://medtransic.com/',
    keywords: 'medical billing services, revenue cycle management, RCM, medical coding, healthcare billing, denial management, accounts receivable management, HIPAA compliance, certified medical coders, practice management, claims processing',
    structuredData: [
      organizationSchema(),
      aggregateRatingSchema()
    ],
    content
  });
}
