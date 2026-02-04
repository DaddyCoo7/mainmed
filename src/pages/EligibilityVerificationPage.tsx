import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
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
  BarChart3,
  TrendingUp
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const EligibilityVerificationPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Insurance Verification Denials',
      description: 'Claims denied due to inactive coverage, incorrect policy information, or services not covered under patient benefits create costly rework.',
      impact: '25-30% of claim denials are due to eligibility and coverage issues',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Time-Consuming Manual Process',
      description: 'Staff spend hours on hold with insurance companies verifying coverage, taking time away from patient care and other critical tasks.',
      impact: 'Average 15-20 minutes per verification ties up front office staff',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Patient Financial Surprises',
      description: 'Failure to verify benefits upfront leads to unexpected patient bills, collection problems, and damaged patient relationships.',
      impact: 'Patient complaints and bad debt write-offs damage reputation',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Authorization Requirements Missed',
      description: 'Services requiring prior authorization are performed without approval, resulting in complete claim denials and zero payment.',
      impact: 'Authorization denials result in 100% payment loss for services',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Incomplete Coverage Information',
      description: 'Partial eligibility checks miss critical benefit details like deductibles, co-pays, and coverage limitations leading to payment issues.',
      impact: 'Incomplete information causes billing delays and patient disputes',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Target,
      title: 'Day-of-Service Verification Gaps',
      description: 'Insurance coverage changes between scheduling and service date go undetected, causing point-of-service collection problems.',
      impact: 'Coverage changes after verification lead to denied claims',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: ClipboardCheck,
      title: 'Real-Time Eligibility Verification',
      description: 'Automated electronic verification system checks insurance eligibility and benefits in real-time for every patient appointment.',
      benefits: [
        'Instant verification in under 10 seconds',
        'Electronic connectivity to all major payers',
        '24/7 automated verification capability',
        'Immediate identification of coverage issues'
      ]
    },
    {
      icon: Zap,
      title: 'Comprehensive Benefits Analysis',
      description: 'Detailed review of patient benefits including deductibles, co-pays, co-insurance, and coverage limitations for planned services.',
      benefits: [
        'Complete benefit breakdown for each service',
        'Patient responsibility estimates',
        'Out-of-pocket maximum tracking',
        'Coverage limitation identification'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Management',
      description: 'Proactive identification and management of services requiring prior authorization to prevent denials.',
      benefits: [
        'Authorization requirement identification',
        'Complete authorization request submission',
        'Follow-up until approval received',
        'Authorization tracking and renewal'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Day-of-Service Re-Verification',
      description: 'Re-verify insurance coverage on service date to catch any coverage changes that occurred after initial verification.',
      benefits: [
        'Catch coverage terminations before service',
        'Identify policy changes and updates',
        'Prevent denied claims from coverage lapses',
        'Improve first-pass claim acceptance'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Insurance Eligibility Checks',
      description: 'Real-time verification of active insurance coverage and policy details for every patient encounter.',
      features: ['Active coverage verification', 'Policy effective dates', 'Subscriber information', 'Plan type identification']
    },
    {
      icon: CheckCircle,
      title: 'Benefits Verification',
      description: 'Detailed analysis of patient benefits including financial responsibility and coverage limitations.',
      features: ['Deductible and co-pay amounts', 'Co-insurance percentages', 'Out-of-pocket maximums', 'Service-specific coverage']
    },
    {
      icon: BarChart3,
      title: 'Authorization Tracking',
      description: 'Identification and management of services requiring prior authorization or pre-certification.',
      features: ['Authorization requirements', 'Request submission', 'Approval tracking', 'Expiration monitoring']
    },
    {
      icon: Award,
      title: 'Patient Responsibility Estimates',
      description: 'Accurate estimates of patient financial responsibility for planned services.',
      features: ['Pre-service cost estimates', 'Payment plan options', 'Financial counseling', 'Collection at time of service']
    }
  ];

  const benefits = [
    { metric: '85%', label: 'Reduction in Eligibility Denials', icon: CheckCircle },
    { metric: '<10sec', label: 'Average Verification Time', icon: Clock },
    { metric: '40%', label: 'Increase in Upfront Collections', icon: DollarSign },
    { metric: '98%', label: 'Verification Accuracy', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="Insurance Eligibility Verification Services | Benefits Verification"
        description="Real-time eligibility checks reduce denials 85% with 98% accuracy. Verify coverage, deductibles, prior auth in under 10 seconds. Increase upfront collections 40%. Free verification audit!"
        canonical="https://medtransic.com/services/eligibility-verification"
        keywords="eligibility verification, insurance verification, benefits verification, coverage verification, insurance eligibility check"
        ogType="article"
      />
      <ServiceSchema
        name="Eligibility Verification"
        description="Real-time eligibility checks reduce denials 85% with 98% accuracy. Verify coverage, deductibles, prior auth in under 10 seconds. Increase upfront collections 40%. Free verification audit!"
        url="https://medtransic.com/services/eligibility-verification"
        serviceType="Medical Billing Service"
      />

      <HeroSection
        badge={{ icon: ClipboardCheck, text: 'Insurance Verification' }}
        title="Eligibility & Benefits Verification"
        description="Confirm insurance coverage, co-pays, deductibles, and patient responsibilities before service to prevent claim denials."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '85%', label: 'Reduction in Denials', icon: CheckCircle },
          { value: '<10sec', label: 'Verification Time', icon: Clock },
          { value: '40%', label: 'Collection Increase', icon: DollarSign },
          { value: '98%', label: 'Accuracy Rate', icon: Shield }
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
              Insurance eligibility and benefit verification prevents claim denials and ensures proper reimbursement. These verification challenges cost practices revenue.
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
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-cyan-600" />
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
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "We were drowning in eligibility denials - over 28% of our claims. Medtransic's real-time verification system reduced that to under 4% in just three months. Our staff is no longer on hold with insurance companies, and patients appreciate knowing their costs upfront. It's been a game-changer."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Jennifer Rodriguez, Practice Manager</p>
                <p className="text-cyan-600 font-medium">Downtown Family Health Center</p>
                <p className="text-gray-500">High-Volume Primary Care Practice</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('eligibility-verification')} />
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
                <Link to="/contact" className="bg-cyan-600 text-white px-12 py-5 rounded-full hover:bg-cyan-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-cyan-600 text-cyan-600 px-12 py-5 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EligibilityVerificationPage;
