import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  FileText,
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
import RelatedServices from '../components/RelatedServices';
import HeroSection from '../components/HeroSection';
import { getRelatedLinks } from '../config/internalLinks';

const CredentialingPage: React.FC = () => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Lengthy Application Process',
      description: 'Credentialing applications with insurance payers take 90-180 days, delaying practice revenue and preventing providers from seeing patients.',
      impact: 'Lost revenue of $50K-$150K per provider during credentialing delays',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Complex Documentation Requirements',
      description: 'Each payer requires unique forms, supporting documents, and verification methods creating administrative complexity and errors.',
      impact: 'Incomplete applications get rejected, extending timeline by months',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Re-Credentialing Lapses',
      description: 'Missed re-credentialing deadlines cause provider enrollment to lapse, halting all claim payments until re-enrollment is complete.',
      impact: 'Complete payment stoppage until re-credentialing is completed',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'CAQH Profile Maintenance',
      description: 'Keeping CAQH profiles current with licenses, certifications, and practice information requires constant monitoring and updates.',
      impact: 'Outdated CAQH data delays all payer credentialing processes',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Multiple Payer Requirements',
      description: 'Each insurance company has different credentialing requirements, creating a maze of paperwork and follow-up for practices.',
      impact: 'Administrative burden overwhelms staff without dedicated resources',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Privileging & Hospital Credentialing',
      description: 'Hospital medical staff credentialing and privileging add another layer of complexity with separate requirements and timelines.',
      impact: 'Delays in hospital privileges prevent facility-based revenue',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Expedited Credentialing Process',
      description: 'Expert credentialing specialists who know payer requirements ensure complete, accurate applications submitted quickly the first time.',
      benefits: [
        'Average 60-90 day credentialing timeline',
        'Complete application accuracy prevents delays',
        'Direct payer relationships expedite processing',
        'Parallel processing of multiple payers'
      ]
    },
    {
      icon: Zap,
      title: 'CAQH Profile Management',
      description: 'Comprehensive CAQH profile setup and ongoing maintenance keeps provider information current and accessible to all payers.',
      benefits: [
        'Initial CAQH profile creation and optimization',
        'Quarterly profile attestation and updates',
        'License and certification monitoring',
        'Proactive document upload and management'
      ]
    },
    {
      icon: Clock,
      title: 'Re-Credentialing Tracking',
      description: 'Automated tracking system monitors all re-credentialing deadlines and initiates renewal process well in advance to prevent lapses.',
      benefits: [
        'Deadline tracking prevents enrollment lapses',
        '120-day advance renewal initiation',
        'Zero interruption in payment eligibility',
        'Complete audit trail of all renewals'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Comprehensive Enrollment Support',
      description: 'End-to-end support for all credentialing needs including commercial payers, Medicare, Medicaid, and hospital medical staff.',
      benefits: [
        'All commercial payer credentialing',
        'Medicare and Medicaid enrollment',
        'Hospital medical staff credentialing',
        'Specialty-specific payer networks'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Initial Credentialing',
      description: 'Complete credentialing application preparation and submission for new providers joining your practice.',
      features: ['Application completion', 'Document gathering', 'Primary source verification', 'Payer submission and follow-up']
    },
    {
      icon: CheckCircle,
      title: 'CAQH Profile Setup',
      description: 'Comprehensive CAQH database profile creation and ongoing maintenance for streamlined payer access.',
      features: ['Profile creation', 'Document upload', 'Quarterly attestation', 'Update management']
    },
    {
      icon: BarChart3,
      title: 'Re-Credentialing Services',
      description: 'Proactive monitoring and management of all re-credentialing requirements to prevent any lapses.',
      features: ['Deadline tracking', 'Renewal initiation', 'Updated documentation', 'Continuous enrollment']
    },
    {
      icon: Award,
      title: 'Network Expansion',
      description: 'Strategic enrollment with additional payer networks to expand patient access and revenue opportunities.',
      features: ['Network analysis', 'Contract negotiation support', 'Multi-payer coordination', 'Specialty networks']
    }
  ];

  const benefits = [
    { metric: '75', label: 'Average Days to Credential', icon: Clock },
    { metric: '100%', label: 'Application Accuracy', icon: CheckCircle },
    { metric: 'Zero', label: 'Credentialing Lapses', icon: Shield },
    { metric: '250+', label: 'Payers We Work With', icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead
        title="Provider Credentialing Services | Medical Credentialing & Enrollment"
        description="Provider credentialing completing CAQH profiles, primary source verification, and payer applications in 60-90 days. Navigate PECOS, NPPES, state licensing, and commercial insurance enrollment efficiently."
        canonical="https://medtransic.com/services/credentialing"
        keywords="provider credentialing, medical credentialing, payer enrollment, provider enrollment, credentialing services"
        ogType="article"
      />
      <HeroSection
        badge={{ icon: Shield, text: 'Payer Enrollment Services' }}
        title="Provider Credentialing & Enrollment"
        description="Handle all payer enrollment, CAQH setup, and revalidation to keep your providers in-network and payment-ready."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '75', label: 'Average Days to Credential', icon: Clock },
          { value: '100%', label: 'Application Accuracy', icon: CheckCircle },
          { value: 'Zero', label: 'Credentialing Lapses', icon: Shield },
          { value: '250+', label: 'Payers We Work With', icon: TrendingUp }
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
              Provider credentialing delays cost practices significant revenue. These challenges extend enrollment timelines and create payment disruptions.
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
                "We hired three new physicians and were facing 4-6 month credentialing delays. Medtransic got all three fully credentialed with our top 15 payers in under 90 days. Their CAQH expertise and payer relationships saved us over $300,000 in lost revenue."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Michael Chen, CEO</p>
                <p className="text-blue-600 font-medium">Riverside Medical Associates</p>
                <p className="text-gray-500">Growing Multi-Specialty Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('credentialing')} />
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
    </>
  );
};

export default CredentialingPage;
