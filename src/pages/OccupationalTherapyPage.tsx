import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Armchair,
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
  Zap,
  Target,
  Award,
  Stethoscope,
  Activity,
  Settings,
  Wrench,
  ClipboardList,
  HandMetal
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const OccupationalTherapyPage: React.FC = () => {

  const painPoints = [
    {
      icon: DollarSign,
      title: 'Therapy Cap Limitations',
      description: 'Medicare therapy caps require careful tracking of services and proper use of KX modifiers for medical necessity exceptions.',
      impact: 'Reaching therapy cap without proper modifiers results in claim denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Functional Assessment Coding',
      description: 'ADL evaluations and functional outcome measurements require specific G-codes that many practices struggle to apply correctly.',
      impact: 'Missing or incorrect G-codes lead to reduced reimbursement and denials',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Wrench,
      title: 'Work-Related Injury Documentation',
      description: 'Workers compensation claims require different documentation standards, fee schedules, and authorization processes than traditional insurance.',
      impact: 'Delayed payments and denials from inadequate workers comp documentation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: ClipboardList,
      title: 'Medicare Threshold Requirements',
      description: 'Understanding when medical review is triggered and properly documenting medical necessity for services exceeding threshold amounts.',
      impact: 'Claims held for review or denied due to insufficient medical necessity documentation',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: FileText,
      title: 'Evaluation vs Re-evaluation Billing',
      description: 'Distinguishing between initial evaluations, re-evaluations, and progress reports with appropriate CPT codes and timing requirements.',
      impact: 'Incorrect evaluation coding results in underbilling or claim denials',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Time-Based vs Service-Based Codes',
      description: 'Mixing timed codes requiring 8-minute rule calculations with untimed codes causes billing complexity and compliance issues.',
      impact: 'Improper time unit calculations lead to reduced reimbursement or audits',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: Armchair,
      title: 'OT-Certified Billing Specialists',
      description: 'Our team includes certified coders with specialized training in occupational therapy, functional assessments, and therapy cap management.',
      benefits: [
        'Expert CPT coding for all OT procedures',
        'G-code functional reporting expertise',
        'KX modifier application for therapy caps',
        '8-minute rule compliance for timed codes'
      ]
    },
    {
      icon: Shield,
      title: 'Therapy Cap Management System',
      description: 'Advanced tracking technology monitors therapy cap thresholds and ensures proper KX modifier application for medically necessary services.',
      benefits: [
        'Automated cap threshold monitoring',
        'Medical necessity documentation guidance',
        'KX modifier optimization',
        'Manual medical review preparation'
      ]
    },
    {
      icon: Wrench,
      title: 'Workers Compensation Expertise',
      description: 'Specialized knowledge of workers comp billing requirements, state-specific fee schedules, and authorization processes for work-related injuries.',
      benefits: [
        'State-specific workers comp compliance',
        'Authorization management',
        'Fee schedule optimization',
        'Faster workers comp payment collection'
      ]
    },
    {
      icon: Activity,
      title: 'Functional Outcome Reporting',
      description: 'Comprehensive support for G-code functional reporting requirements including initial assessments, progress tracking, and discharge coding.',
      benefits: [
        'Accurate G-code selection and reporting',
        'Functional limitation documentation',
        'Progress measurement tracking',
        'Discharge status reporting'
      ]
    }
  ];

  const services = [
    {
      icon: HandMetal,
      title: 'Therapeutic Services Billing',
      description: 'Expert billing for therapeutic activities, exercises, neuromuscular re-education, and functional training with proper time-unit calculations.',
      features: ['Therapeutic activities (97530)', 'Neuromuscular re-education (97112)', 'Therapeutic exercises (97110)', '8-minute rule compliance']
    },
    {
      icon: ClipboardList,
      title: 'Evaluations & Assessments',
      description: 'Specialized billing for initial evaluations, re-evaluations, and functional capacity assessments with appropriate complexity levels.',
      features: ['OT evaluations (97165-97167)', 'Re-evaluation billing (97168)', 'FCE assessments', 'ADL documentation']
    },
    {
      icon: Wrench,
      title: 'Work Rehabilitation Programs',
      description: 'Comprehensive billing for work-related injury treatments, ergonomic assessments, and return-to-work programs.',
      features: ['Work injury rehabilitation', 'Ergonomic evaluations', 'Job site analysis', 'Return-to-work coordination']
    },
    {
      icon: Settings,
      title: 'Specialized OT Procedures',
      description: 'Expert billing for hand therapy, sensory integration, adaptive equipment training, and home modification assessments.',
      features: ['Hand therapy procedures', 'Sensory integration therapy', 'Adaptive equipment training', 'Home assessments']
    }
  ];

  const benefits = [
    { metric: '27%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '44%', label: 'Reduction in Denials', icon: Shield },
    { metric: '13 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Occupational Therapy Billing Services | OT Medical Billing"
        description="Professional occupational therapy billing with expert OT coding. Comprehensive billing for therapeutic activities and rehabilitation services."
        canonical="https://medtransic.com/specialties/occupational-therapy"
        keywords="occupational therapy billing, OT billing services, therapeutic activity billing, rehabilitation billing, occupational therapist billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Occupational Therapy"
        description="Professional occupational therapy billing with expert OT coding. Comprehensive billing for therapeutic activities and rehabilitation services."
        url="https://medtransic.com/specialties/occupational-therapy"
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
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6">
                <Armchair className="w-10 h-10 text-emerald-600" />
              </div>
              <span className="text-emerald-600 font-semibold text-lg tracking-wide uppercase">
                Occupational Therapy Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Occupational Therapy Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your occupational therapy practice revenue with specialized billing expertise in
            functional assessments, therapy cap management, and workers compensation claims. Our certified
            OT billing specialists understand G-code reporting, the 8-minute rule, and complex therapy billing requirements.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Occupational therapist working with patient on functional activities"
              className="w-full h-80 object-cover rounded-2xl shadow-large"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
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
              Common Occupational Therapy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Occupational therapy practices face unique billing complexities with therapy caps, functional
              outcome reporting, and time-based coding rules that significantly impact revenue.
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
              How Medtransic Solves Your Occupational Therapy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized occupational therapy billing solutions address each challenge with
              OT-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-emerald-600" />
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
              Specialized Occupational Therapy Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for occupational therapy practices
              and rehabilitation clinics.
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
                  iconColor="text-emerald-600"
                  iconBgColor="bg-emerald-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 shadow-xl border border-emerald-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Occupational Therapy Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized occupational therapy billing expertise delivers measurable improvements
                in revenue and operational efficiency for OT practices.
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
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-emerald-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Managing billing for our occupational therapy clinic was overwhelming with therapy caps,
                G-code reporting, and workers compensation claims. Medtransic's team has specialized OT
                billing expertise and has helped us navigate therapy cap thresholds while maximizing our
                reimbursements. Their automated cap tracking and KX modifier management has increased our
                revenue by 29% without any compliance issues."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Lisa Henderson, OTR/L</p>
                <p className="text-emerald-600 font-medium">Clinical Director & Owner</p>
                <p className="text-gray-500">Active Life Occupational Therapy Services</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('occupational-therapy')} />
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
              Ready to Optimize Your Occupational Therapy Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our occupational therapy billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with therapy cap requirements and functional reporting.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-emerald-600 text-white px-12 py-5 rounded-full hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free OT Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-emerald-600 text-emerald-600 px-12 py-5 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call OT Billing Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">OT-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OccupationalTherapyPage;
