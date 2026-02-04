/**
 * Footer component template
 * Creates SEO-friendly footer with internal links and company information
 */

export function footer() {
  const currentYear = new Date().getFullYear();

  return `
  <footer class="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <img src="/medtransic-logomark1.svg" alt="Medtransic Logo" class="h-12 w-12" width="48" height="48">
            <h3 class="text-xl font-bold text-white">Medtransic</h3>
          </div>
          <p class="text-gray-400 mb-6">
            <strong>Expert medical billing services</strong> delivering <em>99% clean claims</em> and <strong>30% revenue increase</strong> for healthcare practices nationwide.
          </p>
          <div class="space-y-2">
            <p class="text-white font-semibold">Call Us Today:</p>
            <a href="tel:8887770860" class="text-2xl font-bold text-blue-400 hover:text-blue-300">
              (888) 777-0860
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Services</h3>
          <ul class="space-y-3">
            <li><a href="/services/medical-billing" class="hover:text-white transition-colors"><strong>Medical Billing Services</strong></a></li>
            <li><a href="/services/medical-coding" class="hover:text-white transition-colors">Medical Coding</a></li>
            <li><a href="/services/ar-management" class="hover:text-white transition-colors">AR Management</a></li>
            <li><a href="/services/denial-management" class="hover:text-white transition-colors">Denial Management</a></li>
            <li><a href="/services/credentialing" class="hover:text-white transition-colors">Provider Credentialing</a></li>
            <li><a href="/services/virtual-assistants" class="hover:text-white transition-colors">Virtual Assistants</a></li>
            <li><a href="/services/eligibility-verification" class="hover:text-white transition-colors">Eligibility Verification</a></li>
            <li><a href="/services/prior-authorization" class="hover:text-white transition-colors">Prior Authorization</a></li>
          </ul>
        </div>

        <!-- Specialties -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Medical Specialties</h3>
          <ul class="space-y-3">
            <li><a href="/specialties/primary-care" class="hover:text-white transition-colors">Primary Care</a></li>
            <li><a href="/specialties/cardiology" class="hover:text-white transition-colors">Cardiology</a></li>
            <li><a href="/specialties/orthopedics" class="hover:text-white transition-colors">Orthopedics</a></li>
            <li><a href="/specialties/dermatology" class="hover:text-white transition-colors">Dermatology</a></li>
            <li><a href="/specialties/gastroenterology" class="hover:text-white transition-colors">Gastroenterology</a></li>
            <li><a href="/specialties/urgent-care" class="hover:text-white transition-colors">Urgent Care</a></li>
            <li><a href="/specialties/mental-health" class="hover:text-white transition-colors">Mental Health</a></li>
            <li><a href="/specialties" class="text-blue-400 hover:text-blue-300">View All Specialties →</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Company</h3>
          <ul class="space-y-3">
            <li><a href="/about" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact" class="hover:text-white transition-colors"><strong>Contact Us</strong></a></li>
            <li><a href="/locations" class="hover:text-white transition-colors">Locations</a></li>
            <li><a href="/resources" class="hover:text-white transition-colors">Resources</a></li>
            <li><a href="/faq" class="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm mb-4 md:mb-0">
            © ${currentYear} Medtransic. All rights reserved. <strong>HIPAA Compliant Medical Billing Services</strong>.
          </p>
          <div class="flex items-center space-x-6">
            <span class="text-sm text-gray-500">Certified Medical Billing Specialists</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `;
}
