import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wind,
  Activity,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Moon,
  Target,
  Award,
  Stethoscope,
  Monitor,
  Heart,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const PulmonologyPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Diagnostic Testing',
      description: 'Pulmonary function tests and sleep studies involve multiple components with intricate coding and technical requirements.',
      impact: 'Incomplete billing reduces revenue from diagnostic testing',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Sleep Study Billing Complexity',
      description: 'Complex coding requirements for polysomnography, CPAP titration, and home sleep testing with specific documentation needs.',
      impact: 'Lost revenue from improper sleep study billing',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Chronic Care Management',
      description: 'Billing for ongoing COPD, asthma, and respiratory disease management requires proper documentation and time tracking.',
      impact: 'Missed opportunities for chronic care revenue',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Challenges',
      description: 'Pulmonary procedures and testing often require extensive prior authorization causing delays and administrative burden.',
      impact: 'Delayed patient care and revenue collection',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Monitor,
      title: 'Technical vs Professional Billing',
      description: 'Distinguishing between technical and professional components in pulmonary testing for accurate reimbursement.',
      impact: 'Underbilling from incomplete component billing',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'DME and Equipment Billing',
      description: 'Complex billing for oxygen therapy, nebulizers, and respiratory equipment with specific payer requirements.',
      impact: 'Revenue loss from improper DME billing',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: Wind,
      title: 'Pulmonology-Specialized Coders',
      description: 'Our certified coders have extensive experience in respiratory procedures, sleep studies, and pulmonary function testing.',
      benefits: [
        'Expertise in pulmonary-specific CPT codes',
        'Complete component billing',
        'Knowledge of respiratory equipment coding',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Moon,
      title: 'Sleep Study Billing Expertise',
      description: 'Specialized knowledge in all sleep study types including in-lab and home testing with proper technical billing.',
      benefits: [
        'Complete polysomnography billing',
        'CPAP titration coding',
        'Home sleep testing optimization',
        'Maximized sleep study revenue'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Chronic Care Optimization',
      description: 'Maximize revenue from chronic respiratory disease management and care coordination services.',
      benefits: [
        'Chronic care management billing',
        'Care coordination services',
        'Remote patient monitoring',
        'Improved ongoing care revenue'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorization requirements for procedures, testing, and equipment.',
      benefits: [
        'Faster approval times',
        'Complete documentation submission',
        'Higher approval rates',
        'Reduced administrative burden'
      ]
    }
  ];

  const services = [
    {
      icon: Wind,
      title: 'Pulmonary Function Testing',
      description: 'Complete billing for spirometry, lung volume measurement, diffusion capacity, and bronchial provocation testing.',
      features: ['Spirometry billing', 'Lung volume tests', 'Diffusion capacity', 'Bronchoprovocation']
    },
    {
      icon: Moon,
      title: 'Sleep Studies & Diagnostics',
      description: 'Comprehensive billing for polysomnography, CPAP titration, home sleep testing, and follow-up care.',
      features: ['In-lab polysomnography', 'Home sleep testing', 'CPAP titration', 'Sleep disorder diagnosis']
    },
    {
      icon: Heart,
      title: 'Chronic Disease Management',
      description: 'Billing for ongoing management of COPD, asthma, pulmonary fibrosis, and other chronic respiratory conditions.',
      features: ['COPD management', 'Asthma care programs', 'Chronic care billing', 'Care coordination']
    },
    {
      icon: Activity,
      title: 'Interventional Procedures',
      description: 'Specialized billing for bronchoscopy, thoracentesis, and other pulmonary interventional procedures.',
      features: ['Bronchoscopy billing', 'Thoracentesis procedures', 'Pleural procedures', 'Biopsy billing']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '40%', label: 'Reduction in Denials', icon: Shield },
    { metric: '13 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Pulmonology Billing | Sleep & PFT Coding"
        description="Complete pulmonology billing for bronchoscopy with EBUS, pulmonary function testing interpretation, and sleep study billing (95782-95783). Navigate complex BiPAP/CPAP documentation requirements, home oxygen therapy orders, and pulmonary rehabilitation coding. Expert handling of interventional procedures including TBNA and thoracentesis. Reduce denial rates 38% with respiratory-certified billing specialists."
        canonical="https://medtransic.com/specialties/pulmonology"
        keywords="pulmonology billing, respiratory billing, lung specialist billing, pulmonary function test billing, bronchoscopy billing, sleep study billing, CPAP billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Pulmonology"
        description="Complete pulmonology billing for bronchoscopy with EBUS, pulmonary function testing interpretation, and sleep study billing (95782-95783). Navigate complex BiPAP/CPAP documentation requirements, home oxygen therapy orders, and pulmonary rehabilitation coding. Expert handling of interventional procedures including TBNA and thoracentesis. Reduce denial rates 38% with respiratory-certified billing specialists."
        url="https://medtransic.com/specialties/pulmonology"
      />

      <HeroSection
        badge={{
          icon: Wind,
          text: "Pulmonology Billing Specialists"
        }}
        title="Expert Pulmonology Medical Billing Services"
        description="Maximize your pulmonology practice revenue with specialized billing expertise. Our certified coders understand respiratory function testing, sleep studies, chronic disease management, and the unique complexities of pulmonary medicine billing."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "32%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "98%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "40%", label: "Reduction in Denials", icon: Shield },
          { value: "13 Days", label: "Faster Payment", icon: Clock }
        ]}
      />

      <div className="relative bg-white">
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
              Common Pulmonology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pulmonology practices face unique billing complexities that require specialized
              knowledge of respiratory procedures and diagnostic testing.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              How Medtransic Solves Your Pulmonology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized pulmonology billing solutions address each pain point with
              targeted expertise and proven methodologies.
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
              Specialized Pulmonology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for pulmonology
              practices and respiratory medicine providers.
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
                  iconColor="text-cyan-600"
                  iconBgColor="bg-cyan-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-12 shadow-xl border border-cyan-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Pulmonology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized pulmonology billing expertise delivers measurable improvements
                in revenue and operational efficiency.
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
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{benefit.metric}</div>
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
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's pulmonology billing expertise transformed our practice revenue.
                Their knowledge of sleep study billing and pulmonary function testing increased
                our revenue by 38% while streamlining our entire billing process."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Sarah Thompson, MD</p>
                <p className="text-blue-600 font-medium">Board-Certified Pulmonologist</p>
                <p className="text-gray-500">Respiratory Health Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('pulmonology')} />
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
              Ready to Optimize Your Pulmonology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our pulmonology billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-cyan-600 text-white px-12 py-5 rounded-full hover:bg-cyan-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Pulmonology Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-cyan-600 text-cyan-600 px-12 py-5 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Pulmonology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Pulmonology-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default PulmonologyPage;
