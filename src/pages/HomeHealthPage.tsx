import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
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
  Zap,
  Target,
  Award,
  Stethoscope,
  Monitor,
  ClipboardList,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import HeroSection from '../components/HeroSection';
import { getRelatedLinks } from '../config/internalLinks';

const HomeHealthPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'OASIS Documentation Complexity',
      description: 'Home health agencies struggle with accurate OASIS assessments that directly impact payment calculations and quality reporting.',
      impact: 'Incorrect OASIS coding reduces reimbursement by 15-25%',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'RAP/NOA Timing Requirements',
      description: 'Request for Anticipated Payment and Notice of Admission submissions have strict timing requirements that are difficult to manage.',
      impact: 'Late submissions result in delayed payments and cash flow issues',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Episode Payment Calculations',
      description: 'PDGM episode-based payment model requires complex calculations and proper timing of claims for optimal reimbursement.',
      impact: 'Payment calculation errors cause 20-30% revenue loss',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Medicare Compliance Audits',
      description: 'Home health agencies face frequent audits requiring extensive documentation and compliance with changing regulations.',
      impact: 'Audit failures result in costly recoupments and penalties',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: ClipboardList,
      title: 'Therapy Threshold Management',
      description: 'Managing therapy visit thresholds and proper documentation for skilled nursing and therapy services is complex.',
      impact: 'Threshold miscalculations lead to underpayment and denials',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: BarChart3,
      title: 'HIS-ICD Coding Alignment',
      description: 'Aligning diagnosis codes with Home Health Groupings Model requires specialized expertise.',
      impact: 'Misaligned codes reduce payment and increase audit risk',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const solutions = [
    {
      icon: Home,
      title: 'OASIS-Certified Billing Team',
      description: 'Our specialized home health billing team includes OASIS-certified coders who understand the intricacies of home health documentation.',
      benefits: [
        'Accurate OASIS assessments for optimal payment',
        'Proper case-mix weight calculations',
        'Quality reporting optimization',
        'Reduced OASIS deficiency rates'
      ]
    },
    {
      icon: Shield,
      title: 'PDGM Payment Optimization',
      description: 'Expert management of Patient-Driven Groupings Model to maximize episode payments and ensure proper timing.',
      benefits: [
        'Optimized 30-day episode payments',
        'Proper LUPA threshold management',
        'Accurate functional impairment coding',
        'Comorbidity adjustment maximization'
      ]
    },
    {
      icon: TrendingUp,
      title: 'RAP/NOA Management System',
      description: 'Automated tracking and submission of Requests for Anticipated Payment and Notice of Admission for timely reimbursement.',
      benefits: [
        'On-time RAP submissions for cash flow',
        'Proper NOA documentation',
        'Automated deadline tracking',
        'Reduced submission errors'
      ]
    },
    {
      icon: Monitor,
      title: 'Compliance & Audit Support',
      description: 'Comprehensive audit preparation and compliance monitoring to protect against recoupments and ensure regulatory adherence.',
      benefits: [
        'Audit-ready documentation review',
        'Medical necessity validation',
        'Regulatory compliance monitoring',
        'Appeal support for denials'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Skilled Nursing Billing',
      description: 'Expert billing for skilled nursing visits with proper documentation of medical necessity and care progression.',
      features: ['Wound care billing', 'IV therapy management', 'Disease education', 'Medication management']
    },
    {
      icon: Zap,
      title: 'Therapy Services Billing',
      description: 'Specialized billing for PT, OT, and speech therapy with threshold management and functional outcome tracking.',
      features: ['Physical therapy billing', 'Occupational therapy', 'Speech-language pathology', 'Therapy threshold tracking']
    },
    {
      icon: Users,
      title: 'Hospice Care Billing',
      description: 'Compassionate billing for hospice services including routine care, continuous care, and respite care.',
      features: ['Routine home care', 'Continuous home care', 'Respite care billing', 'General inpatient care']
    },
    {
      icon: FileText,
      title: 'PDGM Episode Management',
      description: 'Complete management of episode-based billing under the Patient-Driven Groupings Model.',
      features: ['30-day episode billing', 'LUPA management', 'Case-mix calculations', 'Comorbidity coding']
    }
  ];

  const benefits = [
    { metric: '28%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '45%', label: 'Reduction in Denials', icon: Shield },
    { metric: '20 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Home Health Billing Services | Home Healthcare Medical Billing"
        description="Home health billing with OASIS assessments, LUPA prevention, and PDGM grouping. Optimize 30-day period payments, therapy thresholds, and RAP billing for home health agencies."
        canonical="https://medtransic.com/specialties/home-health"
        keywords="home health billing, home healthcare billing, visiting nurse billing, home care billing, OASIS billing"
        ogType="article"
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
        badge={{ icon: Home, text: 'Home Health Billing Specialists' }}
        title="Expert Home Health & Hospice Billing Services"
        description="Maximize your home health agency revenue with specialized billing expertise. Our OASIS-certified coders understand the complexities of PDGM episode payments, RAP/NOA submissions, and compliance requirements for home health and hospice care."
        buttons={[
          { text: 'Schedule Free Home Health Consultation', href: '/contact', variant: 'primary' },
          { text: 'Call Home Health Specialists', href: 'tel:+1-888-777-0860', variant: 'secondary' }
        ]}
        stats={[
          { value: '28%', label: 'Average Revenue Increase', icon: TrendingUp },
          { value: '97%', label: 'Clean Claim Rate', icon: CheckCircle },
          { value: '45%', label: 'Reduction in Denials', icon: Shield },
          { value: '20 Days', label: 'Faster Payment Collection', icon: Clock }
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
              src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Home health nurse providing care to patient"
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
              Common Home Health Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Home health agencies face unique billing complexities that can significantly
              impact revenue and operational efficiency.
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
              How Medtransic Solves Your Home Health Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized home health billing solutions address each pain point with
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
              Specialized Home Health Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for home health agencies
              and hospice care providers.
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
                Proven Results for Home Health Agencies
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized home health billing expertise delivers measurable improvements
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
                <Stethoscope className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's home health billing expertise has been transformative for our agency.
                Their understanding of OASIS documentation and PDGM episode payments has increased
                our revenue by 35% while significantly reducing our denial rates."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Sarah Johnson, RN</p>
                <p className="text-teal-600 font-medium">Director of Operations</p>
                <p className="text-gray-500">Community Home Health Services</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('home-health')} />
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
              Ready to Optimize Your Home Health Agency Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our home health billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Home Health Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Home Health Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">OASIS-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-teal-600 hover:text-teal-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHealthPage;
