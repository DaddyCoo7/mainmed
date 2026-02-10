import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
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

const PatientBillingSupportPage: React.FC = () => {

  const painPoints = [
    {
      icon: DollarSign,
      title: 'Low Patient Payment Collection',
      description: 'Patient responsibility is increasing with high-deductible plans, but practices lack effective systems to collect payments before and after services.',
      impact: 'Practices collect only 50-60% of patient balances on average',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: MessageCircle,
      title: 'Patient Confusion & Complaints',
      description: 'Patients do not understand their bills, insurance explanations, or payment options, leading to complaints, frustration, and delayed payments.',
      impact: 'Patient billing confusion drives 70% of negative online reviews',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Time-Consuming Patient Inquiries',
      description: 'Staff spend hours daily answering patient billing questions, taking time away from clinical care and other critical tasks.',
      impact: 'Staff spends 15-20 hours weekly managing patient billing calls',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Inefficient Payment Processes',
      description: 'Manual statement generation, mailing, and payment processing create delays, errors, and poor patient experience.',
      impact: 'Manual processes add 30-45 days to patient collection cycles',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: MessageCircle,
      title: 'Patient Communication Specialists',
      description: 'Dedicated team trained in patient financial counseling, insurance explanations, and payment assistance with empathy and clarity.',
      benefits: [
        'HIPAA-trained patient support specialists',
        'Clear, easy-to-understand bill explanations',
        'Compassionate approach to sensitive financial topics',
        'Multilingual support for diverse populations'
      ]
    },
    {
      icon: Zap,
      title: 'Online Patient Portal & Payment Options',
      description: 'Modern, user-friendly portal allows patients to view bills, understand charges, set up payment plans, and pay online 24/7.',
      benefits: [
        'Self-service bill viewing and payment',
        'Flexible payment plan options',
        'Mobile-friendly design for convenience',
        'Automatic payment reminders and receipts'
      ]
    },
    {
      icon: Shield,
      title: 'Transparent Billing & Financial Counseling',
      description: 'Proactive communication about costs, insurance coverage, and payment expectations before and after service delivery.',
      benefits: [
        'Pre-service cost estimates provided',
        'Insurance benefit verification and explanation',
        'Financial assistance program guidance',
        'Payment plan setup before service when needed'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Automated Statement & Follow-Up',
      description: 'Automated generation and distribution of clear statements with strategic follow-up sequences that increase collections.',
      benefits: [
        'Timely, accurate statement generation',
        'Multi-channel reminders (mail, email, text)',
        'Escalation protocols for aged balances',
        'Performance tracking and optimization'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Patient Statement Services',
      description: 'Professional, easy-to-understand billing statements that clearly explain charges and payment options.',
      features: ['Automated statement generation', 'Clear itemization of charges', 'Insurance payment application', 'Multiple delivery methods']
    },
    {
      icon: CheckCircle,
      title: 'Payment Plan Management',
      description: 'Flexible payment plans that make healthcare affordable while ensuring reliable revenue for your practice.',
      features: ['Interest-free payment options', 'Automated payment processing', 'Default prevention strategies', 'Real-time balance tracking']
    },
    {
      icon: BarChart3,
      title: 'Patient Inquiry Support',
      description: 'Professional call center handles patient billing questions, freeing your staff to focus on patient care.',
      features: ['Trained billing representatives', 'Extended hours coverage', 'Multi-channel support', 'Issue resolution tracking']
    },
    {
      icon: Award,
      title: 'Financial Assistance Programs',
      description: 'Help patients access charity care, financial assistance, and payment resources they qualify for.',
      features: ['Program eligibility screening', 'Application assistance', 'Documentation management', 'Approval tracking']
    }
  ];

  const benefits = [
    { metric: '45%', label: 'Patient Collection Increase', icon: TrendingUp },
    { metric: '85%', label: 'Patient Satisfaction Rate', icon: CheckCircle },
    { metric: '60%', label: 'Reduction in Call Volume', icon: Clock },
    { metric: '24/7', label: 'Online Payment Access', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="Patient Billing Support Services | Patient Statement Services"
        description="Increase patient collections 45% with clear statements and flexible payment plans. 85% satisfaction rate, reduce call volume 60%. Multilingual support, online portal, financial counseling 24/7!"
        canonical="https://medtransic.com/services/patient-billing-support"
        keywords="patient billing, patient statements, patient collections, patient payment services, patient billing support"
        ogType="article"
      />
      <ServiceSchema
        name="Patient Billing Support"
        description="Increase patient collections 45% with clear statements and flexible payment plans. 85% satisfaction rate, reduce call volume 60%. Multilingual support, online portal, financial counseling 24/7!"
        url="https://medtransic.com/services/patient-billing-support"
        serviceType="Medical Billing Service"
      />

      <HeroSection
        badge={{ icon: MessageCircle, text: 'Patient Financial Services' }}
        title="Patient Billing & Support"
        description="Manage patient statements, follow-ups, and inquiries with clear communication that improves collections and satisfaction."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '45%', label: 'Collection Increase', icon: TrendingUp },
          { value: '85%', label: 'Satisfaction Rate', icon: CheckCircle },
          { value: '60%', label: 'Call Volume Reduction', icon: Clock },
          { value: '24/7', label: 'Online Access', icon: Shield }
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
              Patient billing and collections present significant challenges that directly impact practice revenue and patient satisfaction.
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
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-teal-600" />
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
                  iconColor="text-teal-600"
                  iconBgColor="bg-teal-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 shadow-xl border border-teal-200">
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
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's patient billing support has been a game-changer. Our patient collections increased by 42%,
                and our staff no longer spends hours on billing calls. Patients love the online portal and payment plans.
                This service has transformed our revenue cycle."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Martinez</p>
                <p className="text-teal-600 font-medium">Practice Administrator</p>
                <p className="text-gray-500">Multi-Specialty Clinic, Florida</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('patient-billing-support')} />
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
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-teal-600 hover:text-teal-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientBillingSupportPage;
