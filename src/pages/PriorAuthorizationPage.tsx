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
  TrendingUp,
  FileWarning,
  XCircle,
  Timer,
  Archive
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import HeroSection from '../components/HeroSection';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const PriorAuthorizationPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: XCircle,
      title: 'Authorization Denials',
      description: 'Services rendered without proper authorization result in automatic denials, leaving practices unable to collect payment for care already provided.',
      impact: 'Average loss of $3,200 per unauthorized service with no recourse',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Processing Delays',
      description: 'Manual authorization requests take 7-14 days on average, causing treatment delays and potential patient dissatisfaction or abandonment.',
      impact: 'Lost patient volume and extended treatment timelines harm revenue',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileWarning,
      title: 'Missing Documentation',
      description: 'Incomplete or incorrect authorization requests result in denials, requiring resubmission and further delaying patient care and reimbursement.',
      impact: '40% of initial authorization requests denied for documentation issues',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Tracking Failures',
      description: 'Without systematic tracking, authorization expiration dates are missed, resulting in denied claims for services performed after expiration.',
      impact: 'Services rendered with expired authorizations cannot be billed',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Staff Overwhelm',
      description: 'Administrative staff spends hours on hold with payers, pulling them away from other critical tasks and creating bottlenecks.',
      impact: 'Up to 40% of staff time consumed by authorization processes',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Timer,
      title: 'Urgent Case Delays',
      description: 'Emergency and urgent cases requiring expedited authorization face delays when standard processes are followed, compromising patient care.',
      impact: 'Patient outcomes affected and potential liability exposure',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: ClipboardCheck,
      title: 'Proactive Authorization Tracking',
      description: 'Comprehensive system monitors all authorization requirements by payer and procedure, ensuring requests are submitted well before service dates.',
      benefits: [
        'Automated payer requirement identification',
        'Procedure-specific tracking by specialty',
        'Proactive submission 7-14 days before service',
        '98% authorization approval rate'
      ]
    },
    {
      icon: Zap,
      title: 'Expert Submission Management',
      description: 'Experienced authorization specialists prepare complete, accurate requests with all required documentation to maximize first-time approval.',
      benefits: [
        'Certified specialists handle all submissions',
        'Complete clinical documentation gathering',
        'Payer-specific form completion',
        '60% faster approval turnaround'
      ]
    },
    {
      icon: Shield,
      title: 'Real-Time Status Monitoring',
      description: 'Continuous tracking of all pending authorizations with proactive follow-up and escalation ensures nothing falls through the cracks.',
      benefits: [
        'Daily status checks on pending requests',
        'Automated payer portal monitoring',
        'Strategic escalation for delayed approvals',
        'Expiration alerts prevent claim denials'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Payer Relationship Management',
      description: 'Direct payer contacts and relationships enable faster processing, expedited urgent requests, and higher approval rates.',
      benefits: [
        'Dedicated payer representative contacts',
        'Expedited processing for urgent cases',
        'Appeals support for denied authorizations',
        'Higher approval rates through relationship leverage'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Authorization Request Submission',
      description: 'Complete preparation and submission of all authorization requests with comprehensive supporting documentation.',
      features: ['Payer portal submissions', 'Fax and phone requests', 'Clinical documentation gathering', 'Procedure justification']
    },
    {
      icon: CheckCircle,
      title: 'Real-Time Status Tracking',
      description: 'Continuous monitoring of all pending authorizations with proactive follow-up to ensure timely approvals.',
      features: ['Daily status monitoring', 'Automated payer checks', 'Proactive payer follow-up', 'Approval confirmation']
    },
    {
      icon: BarChart3,
      title: 'Expiration Management',
      description: 'Systematic tracking of authorization expiration dates with alerts and renewal management to prevent service disruption.',
      features: ['Expiration date tracking', 'Automated renewal alerts', 'Extension request management', 'Multi-visit authorization tracking']
    },
    {
      icon: Award,
      title: 'Denial Appeals & Peer-to-Peer',
      description: 'Expert management of authorization denials including peer-to-peer reviews and appeal submission.',
      features: ['Denial reason analysis', 'Clinical appeal preparation', 'Peer-to-peer coordination', '70% denial overturn rate']
    },
    {
      icon: Archive,
      title: 'Retroactive Authorization Recovery',
      description: 'Specialized services to recover revenue from emergency and services provided without prior authorization.',
      features: ['Emergency service recovery', 'Clinical documentation support', 'Timely filing management', '70% retro auth success rate']
    }
  ];

  const benefits = [
    { metric: '98%', label: 'Authorization Approval Rate', icon: TrendingUp },
    { metric: '60%', label: 'Faster Processing Time', icon: Clock },
    { metric: '$2.8M', label: 'Average Annual Savings', icon: DollarSign },
    { metric: '99%', label: 'On-Time Service Delivery', icon: CheckCircle }
  ];

  return (
    <>
      <SEOHead
        title="Prior Authorization | 98% Approval Rate"
        description="Expert authorization management with 98% approval rates including proactive prior auth and retroactive recovery. Comprehensive tracking, submission, and emergency authorization services."
        canonical="https://medtransic.com/services/prior-authorization"
        keywords="prior authorization, pre-authorization, medical authorization, authorization management, insurance authorization, pre-cert services, authorization tracking, retroactive authorization, retro auth"
        ogType="article"
      />
      <ServiceSchema
        name="Prior Authorization"
        description="Expert authorization management with 98% approval rates including proactive prior auth and retroactive recovery. Comprehensive tracking, submission, and emergency authorization services."
        url="https://medtransic.com/services/prior-authorization"
        serviceType="Medical Billing Service"
      />
      <HeroSection
        badge={{ icon: ClipboardCheck, text: 'Authorization Excellence' }}
        title="Prior Authorization Management"
        description="Comprehensive authorization services including proactive prior auth and retroactive recovery that ensures timely approvals and maximizes revenue."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '98%', label: 'Authorization Approval Rate', icon: TrendingUp },
          { value: '60%', label: 'Faster Processing Time', icon: Clock },
          { value: '$2.8M', label: 'Average Annual Savings', icon: DollarSign },
          { value: '99%', label: 'On-Time Service Delivery', icon: CheckCircle }
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
              Prior authorization complexity creates significant operational challenges and revenue risk for healthcare practices.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="bg-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                The Benefits for Your Practice
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Expert prior authorization management delivers measurable operational and financial advantages
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Eliminate Authorization Denials</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reduce authorization-related denials by up to 95% with expert submission and follow-up. Recover revenue that would otherwise be lost to preventable authorization failures.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Faster Treatment Authorization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reduce average authorization time from 10-14 days to 2-3 days. Enable patients to receive necessary care faster, improving satisfaction and clinical outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Free Staff for Patient Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Eliminate 15-20 hours per week of staff time spent on authorizations. Your team focuses on delivering excellent patient care instead of navigating payer bureaucracy.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Expert Payer Knowledge</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leverage specialists who understand specific payer requirements and approval criteria. Higher first-submission approval rates mean less rework and faster payment.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Complete Compliance Assurance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stay current with changing payer policies and requirements without constant staff training. Reduce compliance risk with documented authorization processes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Improved Patient Satisfaction</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Faster authorizations mean less patient frustration and treatment delays. Reduced surprise bills and authorization issues lead to better patient relationships and retention.
                    </p>
                  </div>
                </div>
              </motion.div>
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
                "Before Medtransic, our staff spent 15+ hours per week on prior authorizations, and we still had a 35% denial rate. Now, they handle everything with a 98% approval rate, and our staff can focus on patient care. We've eliminated over $400,000 in annual authorization-related denials."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Rebecca Thompson, Medical Director</p>
                <p className="text-blue-600 font-medium">Cardiovascular Associates</p>
                <p className="text-gray-500">18-Provider Specialty Group</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('prior-authorization')} />
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

export default PriorAuthorizationPage;
