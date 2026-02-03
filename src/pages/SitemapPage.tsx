import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { url: '/', label: 'Home' },
        { url: '/about', label: 'About Us' },
        { url: '/services', label: 'Services' },
        { url: '/specialties', label: 'Specialties' },
        { url: '/pricing', label: 'Pricing' },
        { url: '/contact', label: 'Contact' },
        { url: '/resources', label: 'Resources' },
        { url: '/careers', label: 'Careers' },
        { url: '/faq', label: 'FAQ' },
        { url: '/locations', label: 'Locations' }
      ]
    },
    {
      title: 'Services',
      links: [
        { url: '/services/rcm', label: 'Revenue Cycle Management' },
        { url: '/services/medical-billing', label: 'Medical Billing' },
        { url: '/services/medical-coding', label: 'Medical Coding' },
        { url: '/services/ar-management', label: 'AR Management' },
        { url: '/services/denial-management', label: 'Denial Management' },
        { url: '/services/credentialing', label: 'Credentialing' },
        { url: '/services/eligibility-verification', label: 'Eligibility Verification' },
        { url: '/services/charge-entry-payment-posting', label: 'Charge Entry & Payment Posting' },
        { url: '/services/patient-billing-support', label: 'Patient Billing Support' },
        { url: '/services/hospital-facility-billing', label: 'Hospital & Facility Billing' },
        { url: '/services/laboratory-billing', label: 'Laboratory Billing' },
        { url: '/services/dme-billing', label: 'DME Billing' },
        { url: '/services/physician-billing', label: 'Physician Billing' },
        { url: '/services/telehealth-billing', label: 'Telehealth Billing' },
        { url: '/services/old-ar-cleanup', label: 'Old AR Cleanup' },
        { url: '/services/rcm-automation', label: 'RCM Automation' },
        { url: '/services/practice-management-consulting', label: 'Practice Management Consulting' },
        { url: '/services/analytics-reporting', label: 'Analytics & Reporting' },
        { url: '/services/call-center-scheduling', label: 'Call Center & Scheduling' },
        { url: '/services/payment-reconciliation', label: 'Payment Reconciliation' },
        { url: '/services/payer-contract-negotiation', label: 'Payer Contract Negotiation' },
        { url: '/services/compliance-hipaa-audits', label: 'Compliance & HIPAA Audits' },
        { url: '/services/mips-macra-reporting', label: 'MIPS/MACRA Reporting' },
        { url: '/services/ehr-emr-integration', label: 'EHR/EMR Integration' },
        { url: '/services/staff-training-sop', label: 'Staff Training & SOP' },
        { url: '/services/virtual-assistants', label: 'Virtual Assistants' },
        { url: '/services/prior-authorization', label: 'Prior Authorization' },
        { url: '/services/payer-enrollment', label: 'Payer Enrollment' }
      ]
    },
    {
      title: 'Medical Specialties',
      links: [
        { url: '/specialties/cardiology', label: 'Cardiology' },
        { url: '/specialties/orthopedics', label: 'Orthopedics' },
        { url: '/specialties/dermatology', label: 'Dermatology' },
        { url: '/specialties/gastroenterology', label: 'Gastroenterology' },
        { url: '/specialties/urology', label: 'Urology' },
        { url: '/specialties/ophthalmology', label: 'Ophthalmology' },
        { url: '/specialties/obgyn', label: 'OB/GYN' },
        { url: '/specialties/pediatrics', label: 'Pediatrics' },
        { url: '/specialties/family-medicine', label: 'Family Medicine' },
        { url: '/specialties/mental-health', label: 'Mental Health' },
        { url: '/specialties/physical-therapy', label: 'Physical Therapy' },
        { url: '/specialties/dental', label: 'Dental' },
        { url: '/specialties/urgent-care', label: 'Urgent Care' },
        { url: '/specialties/pain-management', label: 'Pain Management' },
        { url: '/specialties/ent', label: 'ENT' },
        { url: '/specialties/pulmonology', label: 'Pulmonology' },
        { url: '/specialties/plastic-surgery', label: 'Plastic Surgery' },
        { url: '/specialties/chiropractic', label: 'Chiropractic' },
        { url: '/specialties/nephrology', label: 'Nephrology' },
        { url: '/specialties/occupational-therapy', label: 'Occupational Therapy' },
        { url: '/specialties/podiatry', label: 'Podiatry' },
        { url: '/specialties/anesthesiology', label: 'Anesthesiology' },
        { url: '/specialties/oncology', label: 'Oncology' },
        { url: '/specialties/neurosurgery', label: 'Neurosurgery' },
        { url: '/specialties/allergy-immunology', label: 'Allergy & Immunology' }
      ]
    },
    {
      title: 'Resource Pages',
      links: [
        { url: '/resources/cpt-codes-cheat-sheet', label: 'CPT Codes Cheat Sheet' },
        { url: '/resources/icd-10-codes-reference', label: 'ICD-10 Codes Reference' },
        { url: '/resources/dental-codes-cheat-sheet', label: 'Dental Codes Cheat Sheet' },
        { url: '/resources/medical-billing-modifiers-guide', label: 'Medical Billing Modifiers Guide' },
        { url: '/resources/state-billing-laws', label: 'State Billing Laws' },
        { url: '/resources/emr-integrations', label: 'EMR Integrations' },
        { url: '/resources/billing-glossary', label: 'Billing Glossary' }
      ]
    },
    {
      title: 'Comparisons',
      links: [
        { url: '/comparisons', label: 'All Comparisons' },
        { url: '/comparisons/in-house-vs-outsourced-medical-billing', label: 'In-House vs Outsourced Billing' },
        { url: '/comparisons/medical-billing-vs-revenue-cycle-management', label: 'Medical Billing vs RCM' },
        { url: '/comparisons/medical-coder-vs-medical-biller', label: 'Medical Coder vs Medical Biller' },
        { url: '/comparisons/ehr-vs-practice-management-software', label: 'EHR vs Practice Management' },
        { url: '/comparisons/fee-for-service-vs-value-based-care', label: 'Fee-for-Service vs Value-Based Care' }
      ]
    },
    {
      title: 'State Pages (Sample)',
      links: [
        { url: '/medical-billing-services/california', label: 'California Medical Billing' },
        { url: '/medical-billing-services/texas', label: 'Texas Medical Billing' },
        { url: '/medical-billing-services/florida', label: 'Florida Medical Billing' },
        { url: '/medical-billing-services/new-york', label: 'New York Medical Billing' },
        { url: '/medical-billing-services/illinois', label: 'Illinois Medical Billing' }
      ]
    },
    {
      title: 'City Pages (Sample)',
      links: [
        { url: '/medical-billing-services/california/los-angeles', label: 'Los Angeles Medical Billing' },
        { url: '/medical-billing-services/texas/houston', label: 'Houston Medical Billing' },
        { url: '/medical-billing-services/florida/miami', label: 'Miami Medical Billing' },
        { url: '/medical-billing-services/new-york/new-york-city', label: 'New York City Medical Billing' },
        { url: '/medical-billing-services/illinois/chicago', label: 'Chicago Medical Billing' }
      ]
    },
    {
      title: 'EMR Integrations',
      links: [
        { url: '/integrations/eclinicalworks', label: 'eClinicalWorks Integration' },
        { url: '/integrations/epic', label: 'Epic Integration' },
        { url: '/integrations/athena-health', label: 'Athena Health Integration' },
        { url: '/integrations/nextgen', label: 'NextGen Integration' },
        { url: '/integrations/cerner', label: 'Cerner Integration' },
        { url: '/integrations/allscripts', label: 'Allscripts Integration' },
        { url: '/integrations/kareo', label: 'Kareo Integration' }
      ]
    },
    {
      title: 'Company',
      links: [
        { url: '/ceo', label: 'CEO Message' },
        { url: '/hipaa-compliance', label: 'HIPAA Compliance' },
        { url: '/data-security', label: 'Data Security' },
        { url: '/practice-launch', label: 'Practice Launch' },
        { url: '/privacy', label: 'Privacy Policy' },
        { url: '/terms-of-service', label: 'Terms of Service' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <SEOHead
        title="Sitemap - All Pages"
        description="Complete sitemap of Medtransic medical billing services, specialties, resources, and locations. Find all pages and navigate our comprehensive healthcare billing solutions."
        keywords="sitemap, site navigation, medical billing pages, healthcare services, specialty pages"
      />

      <Header />

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Navigate through all pages of Medtransic. Find services, specialties, resources, and locations for comprehensive medical billing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section) => (
              <div
                key={section.title}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-600">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        to={link.url}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group"
                      >
                        <span className="mr-2 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Looking for Something Specific?</h2>
            <p className="text-xl mb-6 opacity-90">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              For search engines, please visit our{' '}
              <a
                href="/sitemap.xml"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                XML sitemap
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;
