import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { getRegionByCode } from '../config/regions';

const Footer: React.FC = () => {
  const location = useLocation();

  const getCurrentRegion = () => {
    const path = location.pathname;
    if (path.startsWith('/pk')) return 'pk';
    if (path.startsWith('/ph')) return 'ph';
    return 'us';
  };

  const regionData = getRegionByCode(getCurrentRegion());
  const services = [
    'Outsourcing Medical Billing',
    'Medical Billing & RCM',
    'Medical Coding',
    'Provider Credentialing',
    'Virtual Receptionist',
    'Practice Audits',
    'MIPS Compliance',
    'Transparent Pricing',
  ];

  const resources = [
    { name: 'Medtransic Brochure', href: '/documents/medtransicprofile.pdf', external: true },
    { name: 'Billing Glossary', href: '/resources/billing-glossary' },
    { name: 'Service Comparisons', href: '/comparisons' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Case Studies', href: '/resources' },
    { name: 'Industry Guides', href: '/resources' },
    { name: 'Webinars', href: '/resources' },
    { name: 'Blog Articles', href: '/resources' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'CEO Message', href: '/ceo' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200 overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
        <div className="absolute bottom-32 right-1/3 w-64 h-64 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-emerald-900/10"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-emerald-200">
                Stay Updated with Healthcare Billing Insights
              </h3>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Get the latest updates on medical billing regulations, industry best practices,
                and revenue optimization strategies delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-slate-800/50 dark:bg-slate-700/50 border-2 border-slate-700 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg text-white dark:text-gray-100 placeholder:text-gray-300 dark:placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300"
                  aria-label="Email address for newsletter subscription"
                />
                <button
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center font-bold text-lg group"
                  aria-label="Subscribe to Medtransic newsletter"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-8">
                  <img
                    src="/logo_png_dark_white_text.png"
                    alt="Medtransic Logo"
                    className="h-10 w-auto mb-6 object-contain"
                  />
                  <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
                    Smart Billing. Stronger Practice.
                  </p>
                </div>

                <p className="text-gray-300 dark:text-gray-400 mb-8 leading-relaxed">
                  Empowering healthcare providers with precise, efficient, and compliant
                  medical billing solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-800 transition-colors">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300 dark:text-gray-400 font-medium">{regionData.phoneNumber}</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-800 transition-colors">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 dark:text-gray-400 font-medium">{regionData.email}</span>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-slate-700 transition-colors">
                      <MapPin className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="text-gray-300 dark:text-gray-400 font-medium">
                      {regionData.address.street}, {regionData.address.city}, {regionData.address.state} {regionData.address.zip}, {regionData.address.country}
                    </span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <a
                      href="https://medtransic.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 dark:text-gray-400 font-medium hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      aria-label="Visit Medtransic official website"
                    >
                      medtransic.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {regionData.socials.facebook && (
                    <a
                      href={regionData.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300"
                      aria-label="Follow Medtransic on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {regionData.socials.instagram && (
                    <a
                      href={regionData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-200 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white transition-all duration-300"
                      aria-label="Follow Medtransic on Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {regionData.socials.linkedin && (
                    <a
                      href={regionData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300"
                      aria-label="Connect with Medtransic on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-8">Services</h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={
                          service === 'Transparent Pricing' ? '/pricing' :
                          service === 'Outsourcing Medical Billing' ? '/services/outsourcing-medical-billing' :
                          '/services'
                        }
                        className="text-gray-300 dark:text-gray-400 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors flex items-center group"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 group-hover:scale-110 transition-transform" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-8">Company</h4>
                <ul className="space-y-4">
                  {company.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-8">Resources</h4>
                <ul className="space-y-4">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      {resource.external ? (
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center group"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                          {resource.name}
                        </a>
                      ) : (
                        <Link
                          to={resource.href}
                          className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center group"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-3 group-hover:translate-x-1 transition-transform" />
                          {resource.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance & Legal */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-8">Compliance</h4>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-800 transition-colors">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 dark:text-gray-400 font-medium">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-emerald-900/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-800 transition-colors">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 dark:text-gray-400 font-medium">SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-800 transition-colors">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300 dark:text-gray-400 font-medium">AAPC Certified</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/privacy" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/hipaa-compliance" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    HIPAA Statement
                  </Link>
                  <Link to="/data-security" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    Data Security
                  </Link>
                  <Link to="/terms-of-service" className="block text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 font-medium">
                © 2025 Medtransic. All rights reserved.
              </p>
              <p className="text-gray-400 mt-2 md:mt-0 font-medium">
                Empowering healthcare providers nationwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;