import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  Shield,
  Clock,
  Users,
  Zap,
  Target,
  Award,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import HeroSection from '../components/HeroSection';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const MedicalCodingPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: FileText,
      title: 'Coding Errors & Inaccuracies',
      description: 'Incorrect ICD-10, CPT, or HCPCS codes lead to claim denials, payment delays, and compliance risks that threaten practice revenue and reputation.',
      impact: 'Up to 80% of medical bills contain errors that cost practices thousands',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Coding Backlogs & Delays',
      description: 'Staff shortages and high turnover create coding backlogs that delay claim submission, extending accounts receivable and hurting cash flow.',
      impact: 'Coding delays of 3-7 days extend payment cycles by 30+ days',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Undercoding & Revenue Loss',
      description: 'Conservative or incomplete coding fails to capture the full complexity of services provided, leaving significant revenue on the table.',
      impact: 'Practices lose 10-20% of potential revenue from undercoding',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance & Audit Exposure',
      description: 'Improper coding practices expose practices to audits, recoupment demands, and potential fraud allegations with severe penalties.',
      impact: 'Non-compliant coding can result in substantial fines and sanctions',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Lack of Specialty Expertise',
      description: 'Generic coders without specialty-specific knowledge miss nuances that affect code selection, modifiers, and medical necessity documentation.',
      impact: 'Specialty complexity requires expert knowledge most practices lack',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Constant Regulatory Changes',
      description: 'Annual code updates and evolving payer policies require continuous education and adaptation that strains internal resources.',
      impact: 'Thousands of code changes annually require ongoing training',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: FileText,
      title: 'CPC-Certified Professional Coders',
      description: 'Team of certified professional coders with extensive experience across all medical specialties ensure accurate, compliant coding.',
      benefits: [
        'CPC and specialty-certified coders only',
        'Average 12+ years coding experience',
        'Continuous education on code updates',
        '99.2% coding accuracy rate'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced Coding Technology',
      description: 'State-of-the-art coding software with AI-assisted code selection, built-in compliance checks, and real-time validation.',
      benefits: [
        'Computer-assisted coding (CAC) technology',
        'Real-time code validation and edits',
        'Automatic compliance checking',
        'Integrated with all major EHR systems'
      ]
    },
    {
      icon: Shield,
      title: 'Multi-Level Quality Review',
      description: 'Rigorous quality assurance process with peer review, supervisory audits, and continuous monitoring ensures coding excellence.',
      benefits: [
        'Dual-coder review for complex cases',
        'Regular internal audits',
        'Compliance-focused quality checks',
        'Detailed feedback and improvement tracking'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization Focus',
      description: 'Proactive approach captures appropriate code complexity, proper modifiers, and complete documentation to maximize reimbursement.',
      benefits: [
        'E&M optimization strategies',
        'Proper use of modifiers and add-ons',
        'Medical necessity documentation review',
        'Capture of all billable services'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'ICD-10-CM Diagnosis Coding',
      description: 'Precise diagnosis coding that supports medical necessity and maximizes appropriate reimbursement.',
      features: ['Complete diagnosis coding', 'Specificity optimization', 'Medical necessity support', 'Payer-specific requirements']
    },
    {
      icon: CheckCircle,
      title: 'CPT & HCPCS Procedure Coding',
      description: 'Accurate procedure coding with proper modifiers ensures correct payment for all services rendered.',
      features: ['CPT code selection', 'HCPCS coding', 'Modifier application', 'Bundling and unbundling rules']
    },
    {
      icon: BarChart3,
      title: 'Coding Audits & Compliance',
      description: 'Regular coding audits identify areas for improvement and ensure ongoing compliance with regulations.',
      features: ['Internal coding audits', 'Compliance reviews', 'Documentation improvement', 'Risk assessment']
    },
    {
      icon: Award,
      title: 'Specialty-Specific Coding',
      description: 'Expert coders with specialty certifications understand the unique coding requirements of your practice.',
      features: ['Surgery coding', 'E&M optimization', 'Anesthesia coding', 'Radiology and pathology']
    }
  ];

  const benefits = [
    { metric: '99.2%', label: 'Coding Accuracy', icon: CheckCircle },
    { metric: '18%', label: 'Revenue Increase', icon: TrendingUp },
    { metric: '24hr', label: 'Coding Turnaround', icon: Clock },
    { metric: '100%', label: 'Compliance Rate', icon: Shield }
  ];

  return (
    <>
      <SEOHead
        title="Medical Coding | 99.2% Accuracy CPC Certified"
        description="Professional medical coders boost revenue 18% with accurate ICD-10, CPT & HCPCS coding. 24-hour turnaround, 100% compliant, all specialties. Free coding audit for your practice!"
        canonical="https://medtransic.com/services/medical-coding"
        keywords="medical coding services 2025, professional medical coding, CPT coding, ICD-10 coding, certified professional coders, HCPCS coding, medical coding audit, CPC coders"
        ogType="website"
      />
      <ServiceSchema
        name="Medical Coding"
        description="Professional medical coders boost revenue 18% with accurate ICD-10, CPT & HCPCS coding. 24-hour turnaround, 100% compliant, all specialties. Free coding audit for your practice!"
        url="https://medtransic.com/services/medical-coding"
        serviceType="Medical Billing Service"
      />
      <HeroSection
        badge={{ icon: FileText, text: 'Certified Coding Excellence' }}
        title="Medical Coding Services"
        description="CPC-certified coders ensure accurate ICD-10, CPT, and HCPCS coding for all encounters, maximizing reimbursement and ensuring compliance."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '99.2%', label: 'Coding Accuracy', icon: CheckCircle },
          { value: '18%', label: 'Revenue Increase', icon: TrendingUp },
          { value: '24hr', label: 'Coding Turnaround', icon: Clock },
          { value: '100%', label: 'Compliance Rate', icon: Shield }
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
              Common Challenges We Solve
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Accurate medical coding is critical for proper reimbursement and compliance. These coding challenges cost practices revenue.
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
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-indigo-600" />
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
                  iconColor="text-indigo-600"
                  iconBgColor="bg-indigo-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-12 shadow-xl border border-indigo-200">
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
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Our internal coders were overwhelmed and making costly errors. Since switching to Medtransic's coding team, our coding accuracy improved to 99%, our denial rate dropped from 14% to 3%, and we're capturing $85,000 more per month in previously missed revenue. The ROI has been incredible."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Amanda Foster, Medical Director</p>
                <p className="text-indigo-600 font-medium">Metropolitan Pain & Spine Center</p>
                <p className="text-gray-500">8-Provider Specialty Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('medical-coding')} />
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
                <Link to="/contact" className="bg-indigo-600 text-white px-12 py-5 rounded-full hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-indigo-600 text-indigo-600 px-12 py-5 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default MedicalCodingPage;
