import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  HelpCircle,
  Video,
  CheckSquare,
  FileText,
  Database,
  ArrowRight,
  Search,
  TrendingUp,
  Calendar,
  Phone,
  Scale
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Medtransic Brochure 2026',
      href: '/documents/medtransicprofile.pdf',
      description: 'Download our comprehensive company profile featuring our complete revenue cycle management services, team expertise, and proven results.',
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      features: ['Service overview', 'Technology & security', 'Pricing information', 'Contact details'],
      externalLink: true
    },
    {
      icon: BookOpen,
      title: 'Billing Glossary',
      href: '/resources/billing-glossary',
      description: 'Comprehensive glossary of medical billing and RCM terminology. Find clear definitions for CPT codes, ICD-10, EOB, ERA, and more.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: ['80+ RCM terms defined', 'Easy alphabetical navigation', 'Real-world examples', 'Searchable database']
    },
    {
      icon: HelpCircle,
      title: 'Frequently Asked Questions',
      href: '/faq',
      description: 'Get answers to 60+ common questions about medical billing, CPT codes, modifiers, denials, and RCM services.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: ['CPT coding questions', 'Modifier usage', 'Denial management', 'Insurance claims']
    },
    {
      icon: Scale,
      title: 'Service Comparisons',
      href: '/comparisons',
      description: 'Side-by-side comparisons of billing options, software systems, and practice strategies to help you make informed decisions.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      features: ['In-house vs outsourced', 'Software comparisons', 'Cost-benefit analysis', 'Expert recommendations']
    },
    {
      icon: CheckSquare,
      title: 'Case Studies',
      href: '/resources',
      description: 'Real-world success stories from healthcare practices that have transformed their revenue cycle with Medtransic.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Practice revenue growth', 'Denial rate reduction', 'AR improvement', 'Time savings']
    },
    {
      icon: FileText,
      title: 'Industry Guides',
      href: '/resources',
      description: 'Expert guides on healthcare billing compliance, best practices, and revenue optimization strategies.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Compliance checklists', 'Coding guidelines', 'Payer requirements', 'Best practices']
    },
    {
      icon: Video,
      title: 'Webinars & Training',
      href: '/resources',
      description: 'Educational webinars covering RCM optimization, industry trends, and regulatory updates.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      features: ['Live training sessions', 'On-demand recordings', 'Expert Q&A', 'CPE credits']
    },
    {
      icon: Database,
      title: 'Blog & Insights',
      href: '/resources',
      description: 'Latest insights, tips, and news on medical billing, healthcare technology, and revenue cycle management.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      features: ['Industry news', 'Billing tips', 'Technology updates', 'Regulatory changes']
    }
  ];

  const featuredTopics = [
    {
      title: 'Understanding Your Revenue Cycle',
      description: 'Complete guide to optimizing every step of your revenue cycle management process.',
      icon: TrendingUp
    },
    {
      title: 'MIPS & MACRA Compliance',
      description: 'Navigate value-based payment programs and maximize your quality incentives.',
      icon: CheckSquare
    },
    {
      title: 'Denial Management Best Practices',
      description: 'Proven strategies to reduce denials and accelerate claim resolution.',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Billing Resources | Healthcare Billing Information"
        description="Free medical billing resources, guides, and educational content. Learn about billing best practices and industry insights."
        canonical="https://medtransic.com/resources"
        keywords="medical billing resources, billing guides, healthcare billing information, billing education"
        ogType="website"
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          rotate: [0, 1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                Resources & Learning Center
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Medical Billing Resources to Grow Your Practice
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert guides, educational content, and tools to help you master medical billing,
            optimize your revenue cycle, and stay compliant with healthcare regulations.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <Search className="w-6 h-6 text-gray-400 absolute ml-4" />
              <input
                type="text"
                placeholder="Search resources, glossary terms, guides..."
                className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore Our Resource Library
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Access comprehensive educational materials designed to help healthcare providers
              understand and optimize their billing processes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <InteractiveCard
                  icon={resource.icon}
                  title={resource.title}
                  description={resource.description}
                  features={resource.features}
                  iconColor={resource.color}
                  iconBgColor={resource.bgColor}
                  linkTo={resource.href}
                  externalLink={resource.externalLink}
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 shadow-xl border border-blue-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Featured Topics
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Dive deep into the most important topics in medical billing and revenue cycle management.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <topic.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{topic.title}</h3>
                  <p className="text-gray-600 text-center">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Start with Our Billing Glossary
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                New to medical billing? Our comprehensive glossary defines over 80 essential RCM terms
                with clear explanations and real-world examples.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/resources/billing-glossary"
                className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Explore Billing Glossary
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Need Personalized Guidance?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our billing experts are ready to answer your questions and help you optimize
              your practice revenue cycle.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Experts Now
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ResourcesPage;
