import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Stethoscope,
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
  Zap,
  Target,
  Award,
  Monitor,
  Settings,
  BarChart3,
  Users,
  Activity,
  FastForward,
  Building2
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const UrgentCarePage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'High-Volume Claim Processing',
      description: 'Urgent care facilities see high patient volumes requiring rapid claim processing to maintain healthy cash flow.',
      impact: 'Cash flow issues from slow claim submission',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Real-Time Eligibility Verification',
      description: 'Walk-in patients require immediate insurance verification to prevent denials and collection issues.',
      impact: 'Increased denials and patient payment issues',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Same-Day Service Coding',
      description: 'Multiple services on the same day require precise coding and modifier application for proper reimbursement.',
      impact: 'Revenue loss from bundling and coding errors',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: BarChart3,
      title: 'E/M Level Determination',
      description: 'Accurately determining E/M levels for varied visit complexities is critical for appropriate reimbursement.',
      impact: 'Undercoding or overcoding leading to revenue loss or audits',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Settings,
      title: 'After-Hours Billing Complexity',
      description: 'Weekend and after-hours visits require specific coding considerations and documentation requirements.',
      impact: 'Missed revenue opportunities from improper coding',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Workers Comp Coordination',
      description: 'Workplace injury claims require different billing processes and coordination with multiple parties.',
      impact: 'Payment delays and increased administrative burden',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  const solutions = [
    {
      icon: FastForward,
      title: 'High-Speed Processing',
      description: 'Our systems and workflows are optimized for rapid claim submission and processing to match urgent care volume.',
      benefits: [
        'Same-day or next-day claim submission',
        'Batch processing capabilities',
        'Automated eligibility verification',
        'Accelerated payment cycles'
      ]
    },
    {
      icon: Shield,
      title: 'Real-Time Eligibility Systems',
      description: 'Integrated eligibility verification ensures coverage confirmation before service delivery.',
      benefits: [
        'Instant insurance verification',
        'Reduced claim denials',
        'Improved patient collections',
        'Seamless front-desk integration'
      ]
    },
    {
      icon: TrendingUp,
      title: 'E/M Optimization Expertise',
      description: 'Specialized training in urgent care E/M coding ensures proper level assignment and documentation.',
      benefits: [
        'Accurate E/M level determination',
        'Optimized reimbursement per visit',
        'Audit-proof documentation',
        'Reduced compliance risks'
      ]
    },
    {
      icon: Monitor,
      title: 'Scalable Multi-Location Support',
      description: 'Our platform seamlessly handles multiple urgent care locations with centralized reporting.',
      benefits: [
        'Unified billing across locations',
        'Centralized financial reporting',
        'Consistent coding standards',
        'Efficient multi-site management'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Urgent Care Visits',
      description: 'Expert billing for all levels of urgent care visits with proper E/M coding and documentation support.',
      features: ['E/M level optimization', 'Minor procedure coding', 'After-hours billing', 'Multi-visit management']
    },
    {
      icon: Users,
      title: 'Occupational Health',
      description: 'Specialized billing for workplace injuries, DOT physicals, drug screening, and workers compensation claims.',
      features: ['Workers comp billing', 'DOT physical coding', 'Drug screening', 'Injury treatment']
    },
    {
      icon: Zap,
      title: 'Procedures & Diagnostics',
      description: 'Comprehensive billing for in-office procedures, X-rays, lab tests, and point-of-care testing.',
      features: ['Procedure billing', 'X-ray coding', 'Lab test billing', 'Point-of-care tests']
    },
    {
      icon: Building2,
      title: 'Multi-Location Management',
      description: 'Centralized billing services for urgent care chains and multi-location facilities.',
      features: ['Multi-site coordination', 'Unified reporting', 'Centralized credentialing', 'Scalable workflows']
    }
  ];

  const benefits = [
    { metric: '35%', label: 'Faster Payment Collection', icon: TrendingUp },
    { metric: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '50%', label: 'Reduction in Denials', icon: Shield },
    { metric: '24 Hours', label: 'Average Claim Submission', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Urgent Care Billing Services | Walk-In Clinic Medical Billing"
        description="High-volume urgent care billing services with fast turnaround. Expert E&M coding, after-hours billing, and efficient claim processing for urgent care centers."
        canonical="https://medtransic.com/specialties/urgent-care"
        keywords="urgent care billing, walk-in clinic billing, emergency medicine billing, after-hours billing, urgent care coding"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Urgent Care"
        description="High-volume urgent care billing services with fast turnaround. Expert E&M coding, after-hours billing, and efficient claim processing for urgent care centers."
        url="https://medtransic.com/specialties/urgent-care"
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

      <HeroSection
        badge={{ icon: Stethoscope, text: 'Urgent Care & Walk-in Clinic Billing' }}
        title="Expert Urgent Care Medical Billing Services"
        description="Maximize your urgent care facility revenue with high-volume billing expertise. Our specialized team handles rapid claim processing, real-time eligibility verification, and multi-location coordination to keep your cash flow strong."
        buttons={[
          { text: 'Schedule Free Consultation', href: '/contact', variant: 'primary' },
          { text: 'Call Urgent Care Specialists', href: 'tel:+1-888-777-0860', variant: 'secondary' }
        ]}
        stats={[
          { value: '35%', label: 'Faster Payment Collection', icon: TrendingUp },
          { value: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
          { value: '50%', label: 'Reduction in Denials', icon: Shield },
          { value: '24 Hours', label: 'Average Claim Submission', icon: Clock }
        ]}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Busy urgent care clinic with medical professionals treating patients"
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
              Common Urgent Care Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Urgent care facilities face unique billing complexities driven by high patient
              volume and diverse service offerings.
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
              How Medtransic Solves Your Urgent Care Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized urgent care billing solutions are built for speed, accuracy,
              and scalability.
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
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-orange-600" />
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
              Specialized Urgent Care Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored for high-volume urgent care
              and walk-in clinic operations.
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
                  iconColor="text-orange-600"
                  iconBgColor="bg-orange-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 shadow-xl border border-orange-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Urgent Care Facilities
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized urgent care billing expertise delivers measurable improvements
                in cash flow and operational efficiency.
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
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-orange-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic revolutionized our billing operations across all five urgent care locations.
                Their high-speed processing and real-time eligibility verification improved our cash
                flow by 40% while reducing our denial rate to under 2%."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Sarah Martinez, MBA</p>
                <p className="text-orange-600 font-medium">Chief Operations Officer</p>
                <p className="text-gray-500">QuickCare Urgent Care Network</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('urgent-care')} />
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
              Ready to Optimize Your Urgent Care Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our urgent care billing specialists analyze your current processes and show you
              how we can accelerate your cash flow while handling high patient volumes efficiently.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-orange-600 text-white px-12 py-5 rounded-full hover:bg-orange-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Urgent Care Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-orange-600 text-orange-600 px-12 py-5 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Urgent Care Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">High-Volume Specialists</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">24/7 Claim Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-orange-600 hover:text-orange-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UrgentCarePage;
