import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  Users,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  Award,
  Star
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import OrganizationSchema from '../components/OrganizationSchema';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import ROICalculator from '../components/ROICalculator';
import BreakEvenAnalysis from '../components/BreakEvenAnalysis';

const PricingPage: React.FC = () => {
  const billingFeatures = [
    'Advance Benefits Verification',
    'Medical Coding Services',
    'Charge Creation/Submission',
    'AR & Denial Management',
    'Appeal Submissions',
    'Daily EDI Rejection',
    'Payment Hunting',
    'Daily Payment Posting',
    'Patient Statements Verification',
    'Medical Record Management',
    'Dedicated Account Managers',
    'Transparent Reporting'
  ];

  const credentialingFeatures = [
    'Quick enrollment for Federal Insurance (30-35 days)',
    'Quick enrollment for Commercial Insurance (70-80 days)',
    'Group (NPI-2) and Individual (NPI-1) enrollment',
    'Credentialing & Contracting',
    'Make you visible on Provider Directories on Insurance Portals',
    'Contract Negotiations (If Applicable)',
    'Coverage to all plans under Commercial insurances',
    'CAQH Maintenance (Setup not included)',
    'Performance Report'
  ];

  const auditFeatures = [
    'Identification of Issues',
    'Comprehensive reviews',
    'Transparent Reporting',
    'Customize Recommendations',
    'Improved RCM'
  ];

  const frontDeskFeatures = [
    'Patient Scheduling',
    'Check In Progress',
    'Patient Authorization',
    'Patient Communication',
    'Financial Guidance To Patient'
  ];

  const priorAuthFeatures = [
    'Comprehensive insurance verification',
    'Detailed patient benefit analysis',
    'Elimination of errors in billing',
    'Timely updates for smooth operations',
    'Timely Approved Prior Authorizations'
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient dark:bg-gray-900 relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Billing Pricing | Affordable Packages"
        description="Transparent medical billing pricing with flexible packages. Get comprehensive RCM services starting at just $800/month. No hidden fees, cancel anytime. Free consultation available."
        canonical="https://medtransic.com/pricing"
        keywords="medical billing pricing, RCM pricing, medical billing cost, billing services rates, affordable medical billing, billing packages"
        ogType="website"
      />
      <OrganizationSchema />
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, 2, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Transparent Pricing
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the right solution for your practice with our flexible pricing options.
              No hidden fees, no long-term contracts, just transparent pricing that scales with your success.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Billing Services Section */}
        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Billing Services Starting from
              </motion.h2>
              <motion.div
                className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                3.00% of Monthly Collections
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {billingFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-white dark:text-gray-900" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center">
                  Schedule Meeting
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-lg flex items-center justify-center">
                  Consult Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Credentialing Services Section */}
        <div className="mb-24">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Credentialing & Enrollment Services
              </h2>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8">
                Starting from $150 Per Application/Provider
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {credentialingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white dark:text-gray-900" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center">
                Schedule Meeting
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-lg flex items-center justify-center">
                Consult Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Medical Billing Audit */}
          <AnimatedSection animation="slideUp" delay={0.1}>
            <InteractiveCard
              icon={FileText}
              title="Medical Billing Audit"
              description="Based on the number of providers"
              features={auditFeatures}
              iconColor="text-blue-600"
              iconBgColor="bg-blue-50"
              className="h-full flex flex-col"
            >
              <div className="text-center mb-8">
                <motion.div
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  $450 to $800
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto"
              >
                <Link to="/contact" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center">
                  Book A Meeting
                </Link>
              </motion.div>
            </InteractiveCard>
          </AnimatedSection>

          {/* Front Desk Services */}
          <AnimatedSection animation="slideUp" delay={0.2}>
            <InteractiveCard
              icon={Users}
              title="Front Desk Services"
              description="Per Hour / Per Team Member"
              features={frontDeskFeatures}
              iconColor="text-blue-600"
              iconBgColor="bg-blue-50"
              className="h-full flex flex-col"
            >
              <div className="text-center mb-8">
                <motion.div
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  $35
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto"
              >
                <Link to="/contact" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center">
                  Book A Meeting
                </Link>
              </motion.div>
            </InteractiveCard>
          </AnimatedSection>

          {/* Adv. Benefits & Prior Auth */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <InteractiveCard
              icon={Shield}
              title="Adv. Benefits & Prior Auth"
              description="Per Patient"
              features={priorAuthFeatures}
              iconColor="text-blue-600"
              iconBgColor="bg-blue-50"
              className="h-full flex flex-col"
            >
              <div className="text-center mb-8">
                <motion.div
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  $4.50
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto"
              >
                <Link to="/contact" className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center">
                  Book A Meeting
                </Link>
              </motion.div>
            </InteractiveCard>
          </AnimatedSection>
        </div>

        {/* Why Choose Our Pricing */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Our Pricing Model?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our transparent pricing structure is designed to align with your success. 
                We only succeed when you do.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No Hidden Fees</h3>
                <p className="text-gray-600 dark:text-gray-400">What you see is what you pay. No surprise charges or hidden costs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Performance-Based</h3>
                <p className="text-gray-600 dark:text-gray-400">Our billing fees are based on your collections - we succeed when you succeed.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Flexible Terms</h3>
                <p className="text-gray-600 dark:text-gray-400">No long-term contracts. Scale up or down based on your practice needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mb-20">
          <ROICalculator />
        </div>

        {/* Break-Even Analysis */}
        <div className="mb-20">
          <BreakEvenAnalysis />
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What's included in the billing percentage?</h3>
              <p className="text-gray-600 dark:text-gray-400">Our billing service includes everything from claim submission to payment posting, denial management, patient statements, and dedicated account management.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How long does credentialing take?</h3>
              <p className="text-gray-600 dark:text-gray-400">Federal insurance enrollment typically takes 30-35 days, while commercial insurance enrollment takes 70-80 days depending on the payer.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Are there setup fees?</h3>
              <p className="text-gray-600 dark:text-gray-400">No setup fees for billing services. Credentialing services are charged per application. Contact us for a detailed quote based on your needs.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Can I customize my service package?</h3>
              <p className="text-gray-600 dark:text-gray-400">Absolutely! We offer flexible packages that can be tailored to your specific practice needs and requirements.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation to discuss your practice needs and get a 
              customized pricing quote that fits your budget and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3" />
                Schedule Free Consultation
              </Link>
              <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;