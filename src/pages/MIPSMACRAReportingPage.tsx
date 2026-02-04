import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  FileText,
  Shield,
  Clock,
  Users,
  Zap,
  Target,
  Award,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const MIPSMACRAReportingPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Measure Selection',
      description: 'Choosing the right Quality, Cost, Promoting Interoperability, and Improvement Activities measures is overwhelming and critical to MIPS performance.',
      impact: 'Wrong measure selection can result in penalties up to 9% of Medicare revenue',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Time-Consuming Data Collection',
      description: 'Gathering required data from EHRs, claims, and registries for quality measure reporting takes significant staff time away from patient care.',
      impact: 'MIPS reporting consumes 40-60 hours of staff time annually',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Submission Technical Complexity',
      description: 'Submitting data through qualified registries, EHRs, or directly to CMS involves technical processes that practices struggle with.',
      impact: 'Missed deadlines or submission errors result in automatic penalties',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'Risk of Payment Penalties',
      description: 'Failure to participate or poor MIPS performance results in Medicare payment penalties that directly reduce practice revenue.',
      impact: 'MIPS penalties can reduce Medicare revenue by up to 9%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: 'Strategic Measure Selection',
      description: 'Expert MIPS consultants analyze practice data and select optimal measures across all categories to maximize MIPS scores.',
      benefits: [
        'Practice-specific measure analysis',
        'Historical performance review',
        'Highest-scoring measure selection',
        'Multi-year strategy development'
      ]
    },
    {
      icon: Zap,
      title: 'Automated Data Collection',
      description: 'Technology integration pulls required data automatically from EHRs, registries, and claims to minimize manual data entry.',
      benefits: [
        'EHR data extraction automation',
        'Registry integration',
        'Claims data analysis',
        'Minimal staff time required'
      ]
    },
    {
      icon: Shield,
      title: 'Complete Submission Management',
      description: 'Handle all technical aspects of data submission to CMS through qualified registries ensuring timely and accurate reporting.',
      benefits: [
        'Submission via qualified registry',
        'Data validation and quality checks',
        'Deadline compliance assurance',
        'Confirmation documentation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring & Optimization',
      description: 'Real-time tracking of MIPS performance with recommendations to improve scores and maximize incentive payments.',
      benefits: [
        'Real-time score tracking',
        'Performance improvement recommendations',
        'Penalty avoidance strategies',
        'Bonus payment optimization'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Quality Measure Reporting',
      description: 'Complete management of Quality category measures including data collection, validation, and submission.',
      features: ['Measure selection guidance', 'Data collection automation', 'Performance tracking', 'Submission to CMS']
    },
    {
      icon: CheckCircle,
      title: 'Promoting Interoperability (PI)',
      description: 'Assist with Promoting Interoperability category requirements and ensure EHR-based measures are properly reported.',
      features: ['PI measure guidance', 'EHR configuration support', 'Attestation assistance', 'Exclusion qualification']
    },
    {
      icon: BarChart3,
      title: 'Improvement Activities',
      description: 'Identify and document eligible Improvement Activities that align with practice workflows and maximize points.',
      features: ['Activity identification', 'Documentation support', 'Attestation preparation', 'Credit maximization']
    },
    {
      icon: Award,
      title: 'Cost Category Management',
      description: 'Monitor Cost category performance with analysis of episode-based and patient relationship categories.',
      features: ['Cost measure tracking', 'Performance analysis', 'Comparative reports', 'Improvement recommendations']
    }
  ];

  const benefits = [
    { metric: '85+', label: 'Average MIPS Score', icon: TrendingUp },
    { metric: '100%', label: 'Penalty Avoidance', icon: CheckCircle },
    { metric: '$12K', label: 'Average Bonus Per Provider', icon: Clock },
    { metric: '95%', label: 'On-Time Submission', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="MIPS & MACRA Reporting Services | Quality Payment Program"
        description="MIPS experts achieve 85+ average score, avoid 9% penalties, earn $12K bonus per provider. 95% on-time submission, automated data collection. Strategic measure selection maximizes incentives!"
        canonical="https://medtransic.com/services/mips-macra-reporting"
        keywords="MIPS reporting, MACRA reporting, quality payment program, MIPS services, merit-based incentive"
        ogType="article"
      />
      <ServiceSchema
        name="MIPS MACRA Reporting"
        description="MIPS experts achieve 85+ average score, avoid 9% penalties, earn $12K bonus per provider. 95% on-time submission, automated data collection. Strategic measure selection maximizes incentives!"
        url="https://medtransic.com/services/mips-macra-reporting"
        serviceType="Medical Support Service"
      />

      <HeroSection
        badge={{ icon: TrendingUp, text: 'Quality Reporting' }}
        title="MIPS / MACRA Quality Reporting"
        description="Manage MIPS submissions and track performance metrics to maximize incentive payments and avoid penalties."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '85+', label: 'Average MIPS Score', icon: TrendingUp },
          { value: '100%', label: 'Penalty Avoidance', icon: CheckCircle },
          { value: '$12K', label: 'Avg Bonus Per Provider', icon: Clock },
          { value: '95%', label: 'On-Time Submission', icon: Shield }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Common Challenges We Solve
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MIPS compliance is complex and time-consuming, with penalties for poor performance directly reducing Medicare revenue.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((painPoint, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`${painPoint.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <painPoint.icon className={`w-8 h-8 ${painPoint.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {painPoint.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {painPoint.description}
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-red-800 font-medium text-sm">
                      <strong>Impact:</strong> {painPoint.impact}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
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
              How Medtransic Delivers Results
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our comprehensive solutions combine expertise, technology, and proven processes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
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
              Comprehensive Service Features
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Every component managed with precision and expertise.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-50"
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
                Proven Results
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our expertise delivers measurable improvements in performance and revenue.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {benefits.map((benefit, index) => (
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
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "MIPS reporting was overwhelming our staff every year. Medtransic's measure selection and automated data
                collection achieved an 88 MIPS score, earning us a 2.83% bonus payment worth $38K. They handled everything
                and we avoided the stress completely. Worth every penny."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. James Wilson</p>
                <p className="text-blue-600 font-medium">Practice Owner</p>
                <p className="text-gray-500">Primary Care Practice, Virginia</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('mips-macra-reporting')} />
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our experts show you how we can improve your operations and increase revenue.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
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
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MIPSMACRAReportingPage;
