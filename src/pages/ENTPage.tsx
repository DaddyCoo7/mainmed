import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ear,
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
  Microscope,
  Target,
  Award,
  Stethoscope,
  Monitor,
  Wind,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';

const ENTPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Procedure Coding',
      description: 'ENT procedures involve intricate coding requirements for endoscopies, surgeries, and diagnostic tests with multiple components.',
      impact: 'Coding errors lead to significant revenue loss and denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Global Period Complications',
      description: 'Managing global surgical periods and distinguishing between related and unrelated services during recovery periods.',
      impact: 'Lost revenue from unbillable services during global periods',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Modifier Management Challenges',
      description: 'ENT billing requires precise use of modifiers for bilateral procedures, multiple procedures, and staged surgeries.',
      impact: 'Incorrect modifiers result in reduced reimbursements and denials',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Delays',
      description: 'Many ENT procedures and surgeries require prior authorization, causing delays in patient care and revenue collection.',
      impact: 'Delayed procedures and administrative burden on staff',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Microscope,
      title: 'Audiology Testing Billing',
      description: 'Complex billing requirements for comprehensive audiology evaluations and hearing aid fittings with specific documentation needs.',
      impact: 'Underbilling for audiology services reduces overall revenue',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'Multiple Service Bundling',
      description: 'Understanding which ENT procedures can be billed together and which are bundled by payers.',
      impact: 'Reduced revenue from improper bundling and denials',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: Ear,
      title: 'ENT-Specialized Coding Team',
      description: 'Our certified coders have extensive experience in otolaryngology procedures and complex ENT coding requirements.',
      benefits: [
        'Expertise in ENT-specific CPT codes',
        'Proper modifier application for procedures',
        'Knowledge of surgical bundling rules',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorization requirements for surgeries, procedures, and specialized testing.',
      benefits: [
        'Faster approval times for procedures',
        'Complete documentation submission',
        'Higher approval rates',
        'Reduced administrative burden'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Optimization',
      description: 'Comprehensive billing strategies to maximize reimbursements for all ENT services and procedures.',
      benefits: [
        'Increased revenue per procedure',
        'Optimized global period billing',
        'Faster payment collection',
        'Improved cash flow'
      ]
    },
    {
      icon: Monitor,
      title: 'Advanced Claim Tracking',
      description: 'Real-time visibility into claim status, denials, and payment tracking with automated follow-up.',
      benefits: [
        '24/7 billing dashboard access',
        'Automated denial management',
        'Detailed financial reporting',
        'Performance analytics'
      ]
    }
  ];

  const services = [
    {
      icon: Ear,
      title: 'Diagnostic Procedures',
      description: 'Expert billing for endoscopic examinations, audiology testing, and diagnostic imaging services.',
      features: ['Nasal endoscopy billing', 'Laryngoscopy procedures', 'Audiology evaluations', 'Vestibular testing']
    },
    {
      icon: Activity,
      title: 'Surgical Procedures',
      description: 'Comprehensive billing for ENT surgeries including sinus procedures, tonsillectomies, and head/neck surgeries.',
      features: ['Sinus surgery billing', 'Tonsillectomy/adenoidectomy', 'Septoplasty procedures', 'Thyroid surgery']
    },
    {
      icon: Wind,
      title: 'Allergy Services',
      description: 'Specialized billing for allergy testing, immunotherapy, and treatment services provided by ENT practices.',
      features: ['Allergy testing panels', 'Immunotherapy billing', 'Skin testing', 'Sublingual immunotherapy']
    },
    {
      icon: Microscope,
      title: 'Audiology & Hearing Services',
      description: 'Complete billing for hearing evaluations, tympanometry, hearing aid fittings, and related audiology services.',
      features: ['Comprehensive audiometry', 'Hearing aid fittings', 'Tympanometry billing', 'ABR testing']
    }
  ];

  const benefits = [
    { metric: '28%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '42%', label: 'Reduction in Denials', icon: Shield },
    { metric: '14 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="ENT Billing Services | Otolaryngology Medical Billing & Coding"
        description="Specialized ENT billing for otolaryngology procedures. Expert coding for sinus surgery, tonsillectomy, hearing tests, and head and neck procedures."
        canonical="https://medtransic.com/specialties/ent"
        keywords="ENT billing, otolaryngology billing, ear nose throat billing, sinus surgery billing, ENT coding services"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="E N T"
        description="Specialized ENT billing for otolaryngology procedures. Expert coding for sinus surgery, tonsillectomy, hearing tests, and head and neck procedures."
        url="https://medtransic.com/specialties/ent"
      />

      <HeroSection
        badge={{ icon: Ear, text: "ENT Billing Specialists" }}
        title="Expert ENT Medical Billing Services"
        description="Maximize your otolaryngology practice revenue with specialized billing expertise. Our certified coders understand the complexities of ENT procedures, surgical coding, audiology billing, and the unique requirements of ear, nose, and throat services."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "28%", label: "Revenue Increase", icon: TrendingUp },
          { value: "97%", label: "First-Pass Rate", icon: CheckCircle },
          { value: "42%", label: "Denial Reduction", icon: Shield },
          { value: "14 Days", label: "Faster Payment", icon: Clock }
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
              Common ENT Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ENT practices face unique billing complexities that require specialized
              knowledge of procedure coding and payer requirements.
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
              How Medtransic Solves Your ENT Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized ENT billing solutions address each pain point with
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
              Specialized ENT Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for otolaryngology
              practices and ENT subspecialties.
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
                Proven Results for ENT Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized ENT billing expertise delivers measurable improvements
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's ENT billing expertise has been a game-changer for our practice.
                Their knowledge of complex surgical coding and modifier application increased our
                revenue by 32% while eliminating our prior authorization headaches."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Robert Chen, MD</p>
                <p className="text-blue-600 font-medium">Board-Certified Otolaryngologist</p>
                <p className="text-gray-500">Advanced ENT & Allergy Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('ent')} />
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
              Ready to Optimize Your ENT Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our ENT billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free ENT Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call ENT Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">ENT-Certified Coders</span>
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
    </>
  );
};

export default ENTPage;
