/**
 * Services section template
 * Creates an SEO-optimized services overview with proper semantic markup
 */

export function servicesSection() {
  const services = [
    {
      title: 'Medical Billing & RCM',
      description: 'Comprehensive revenue cycle management from patient registration to final payment collection.',
      features: ['Claims Processing', 'Payment Posting', 'Patient Statements', 'Collections'],
      link: '/services/medical-billing'
    },
    {
      title: 'Medical Coding Services',
      description: 'Expert ICD-10 and CPT coding services ensuring maximum reimbursements and compliance.',
      features: ['ICD-10 Coding', 'CPT Coding', 'Modifier Application', 'Audit Support'],
      link: '/services/medical-coding'
    },
    {
      title: 'Denial Management Services',
      description: 'Proactive denial management and appeals to recover lost revenue and prevent future denials.',
      features: ['Denial Analysis', 'Appeals Processing', 'Root Cause Analysis', 'Prevention Strategies'],
      link: '/services/denial-management'
    },
    {
      title: 'Provider Credentialing Services',
      description: 'Streamlined credentialing process to get you enrolled with insurance networks faster.',
      features: ['Initial Credentialing', 'Re-credentialing', 'CAQH Management', 'Network Enrollment'],
      link: '/services/credentialing'
    },
    {
      title: 'AR Management Services',
      description: 'Professional accounts receivable management to improve cash flow and reduce aging.',
      features: ['AR Analysis', 'Follow-up Services', 'Aging Reduction', 'Cash Flow Optimization'],
      link: '/services/ar-management'
    },
    {
      title: 'Virtual Medical Assistants',
      description: 'Professional virtual assistants to enhance patient experience and reduce operational costs.',
      features: ['Appointment Scheduling', 'Insurance Verification', 'Patient Inquiries', 'Call Management'],
      link: '/services/virtual-assistants'
    }
  ];

  return `
  <section class="section-padding bg-medtransic-gradient-reverse">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Comprehensive <strong>Healthcare Revenue Cycle Solutions</strong>
        </h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          From <strong>medical billing and coding</strong> to <strong>credentialing and compliance</strong>,
          we provide <em>end-to-end solutions</em> that streamline your practice operations and
          <strong>maximize revenue</strong>.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${services.map(service => `
        <article class="bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            <strong>${service.title}</strong>
          </h3>
          <p class="text-gray-700 mb-6 leading-relaxed">
            ${service.description}
          </p>
          <ul class="space-y-3 mb-6">
            ${service.features.map(feature => `
            <li class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">${feature}</span>
            </li>
            `).join('')}
          </ul>
          <a href="${service.link}" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
            Learn More
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </article>
        `).join('')}
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <a href="/services" class="btn-primary inline-block">
          <strong>View All Services</strong>
        </a>
      </div>
    </div>
  </section>
  `;
}
