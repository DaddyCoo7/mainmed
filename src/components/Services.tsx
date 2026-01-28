import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  FileText, 
  Shield, 
  Headphones, 
  Search, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Medical Billing & RCM',
      description: 'Comprehensive revenue cycle management from patient registration to final payment collection.',
      features: ['Claims Processing', 'Payment Posting', 'Patient Statements', 'Collections'],
      variant: 'blue' as const,
    },
    {
      icon: FileText,
      title: 'Medical Coding & Denials',
      description: 'Expert coding services and proactive denial management to maximize reimbursements.',
      features: ['ICD-10 Coding', 'CPT Coding', 'Denial Appeals', 'Audit Support'],
      variant: 'emerald' as const,
    },
    {
      icon: Shield,
      title: 'Provider Credentialing',
      description: 'Streamlined credentialing process to get you enrolled with insurance networks faster.',
      features: ['Initial Credentialing', 'Re-credentialing', 'CAQH Management', 'Network Enrollment'],
      variant: 'blue' as const,
    },
    {
      icon: Headphones,
      title: 'Virtual Receptionist',
      description: 'Professional virtual receptionist services to enhance patient experience and reduce costs.',
      features: ['Appointment Scheduling', 'Insurance Verification', 'Patient Inquiries', 'Call Management'],
      variant: 'amber' as const,
    },
    {
      icon: Search,
      title: 'Practice Audits',
      description: 'Comprehensive audits to identify revenue leaks and compliance issues.',
      features: ['Revenue Audits', 'Compliance Reviews', 'Process Analysis', 'Recommendations'],
      variant: 'emerald' as const,
    },
    {
      icon: TrendingUp,
      title: 'MIPS Compliance',
      description: 'Navigate MIPS requirements and maximize your quality payment program incentives.',
      features: ['MIPS Reporting', 'Quality Measures', 'Performance Tracking', 'Incentive Optimization'],
      variant: 'gradient' as const,
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-medtransic-gradient-reverse dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, 2, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" className="text-center mb-24">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <motion.h2
              className="text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-700 dark:from-gray-100 dark:via-blue-400 dark:to-emerald-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Comprehensive Healthcare Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From billing and coding to credentialing and compliance, we provide end-to-end
              solutions that streamline your practice operations and maximize revenue.
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/services">
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.1}
            >
              <InteractiveCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                variant={service.variant}
                linkTo="/services"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;