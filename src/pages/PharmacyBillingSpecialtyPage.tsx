import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Pill,
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
  Beaker,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const PharmacyBillingSpecialtyPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Compound Formula Billing',
      description: 'Compounded medications require individual ingredient billing with proper HCPCS codes and quantities for each component.',
      impact: 'Incorrect compound billing causes 40-50% claim denial rates',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'Ingredient Cost Calculations',
      description: 'Calculating accurate ingredient costs, markups, and dispensing fees for compound medications is complex and time-consuming.',
      impact: 'Pricing errors reduce profit margins by 25-35%',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Delays',
      description: 'Specialty medications and compounds require extensive prior authorizations with detailed clinical justification.',
      impact: 'PA delays result in 30-45 day revenue postponement',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Specialty Drug Management',
      description: 'High-cost specialty medications require special handling, documentation, and payer-specific billing requirements.',
      impact: 'Specialty drug denials average 30-40% without expertise',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Beaker,
      title: 'DME-Linked Pharmacy Items',
      description: 'Items that cross pharmacy and DME categories require proper classification and billing under the correct benefit.',
      impact: 'Wrong benefit classification causes automatic denials',
      color: 'text-sky-600',
      bgColor: 'bg-sky-50'
    },
    {
      icon: BarChart3,
      title: 'Payer-Specific Requirements',
      description: 'Each payer has unique requirements for compounded medications, specialty drugs, and pharmacy billing.',
      impact: 'Non-compliance increases rejection rates by 35-45%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Pill,
      title: 'Compound Billing Experts',
      description: 'Our team specializes in compound medication billing with expertise in ingredient coding and formula calculations.',
      benefits: [
        'Accurate ingredient HCPCS coding',
        'Proper quantity calculations',
        'Cost markup optimization',
        'Reduced compound denials'
      ]
    },
    {
      icon: Shield,
      title: 'Specialty Pharmacy Management',
      description: 'Comprehensive management of specialty medication billing with payer-specific compliance and documentation.',
      benefits: [
        'High-cost drug billing expertise',
        'Manufacturer assistance programs',
        'Copay assistance coordination',
        'Specialty payer knowledge'
      ]
    },
    {
      icon: Zap,
      title: 'Prior Authorization System',
      description: 'Dedicated PA team with automated tracking ensures timely approvals for specialty and compound medications.',
      benefits: [
        'Faster medication approvals',
        'Clinical documentation support',
        'Step therapy navigation',
        'Appeal support for denials'
      ]
    },
    {
      icon: Monitor,
      title: 'Ingredient Tracking Platform',
      description: 'Advanced system tracks ingredient costs, quantities, and proper billing for all compound formulations.',
      benefits: [
        'Automated cost calculations',
        'Real-time pricing updates',
        'Formula library management',
        'Profitability analysis'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Compound Drug Billing',
      description: 'Expert billing for compounded medications with proper ingredient coding and cost calculations.',
      features: ['Ingredient billing', 'Formula tracking', 'Cost optimization', 'Compound documentation']
    },
    {
      icon: Users,
      title: 'Specialty Medications',
      description: 'Specialized billing for high-cost specialty drugs with manufacturer program coordination.',
      features: ['Specialty drug billing', 'Buy-and-bill services', 'Copay assistance', 'Manufacturer rebates']
    },
    {
      icon: FileText,
      title: 'DME-Linked Pharmacy',
      description: 'Expert billing for pharmacy items that qualify under DME benefits with proper classification.',
      features: ['Nebulizer medications', 'Diabetic supplies', 'Enteral nutrition', 'Ostomy supplies']
    },
    {
      icon: Beaker,
      title: 'Prior Authorization',
      description: 'Complete PA management for specialty and compound medications with clinical support.',
      features: ['PA submission', 'Clinical documentation', 'Step therapy appeals', 'Formulary management']
    }
  ];

  const benefits = [
    { metric: '38%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '94%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '52%', label: 'Reduction in Denials', icon: Shield },
    { metric: '25 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Pharmacy Billing Services | Specialty Pharmacy Medical Billing"
        description="Specialized pharmacy billing for specialty and retail pharmacies. Expert billing for medication management and pharmaceutical services."
        canonical="https://medtransic.com/specialties/pharmacy-billing"
        keywords="pharmacy billing, specialty pharmacy billing, pharmaceutical billing, pharmacy claim processing, medication billing"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center mr-6">
                <Pill className="w-10 h-10 text-sky-600" />
              </div>
              <span className="text-sky-600 font-semibold text-lg tracking-wide uppercase">
                Pharmacy Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Pharmacy & Compounding Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your pharmacy revenue with specialized billing expertise.
            Our certified coders understand the complexities of compound medication billing,
            specialty drugs, ingredient calculations, and prior authorization management.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/3873154/pexels-photo-3873154.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pharmacist preparing compound medications"
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
              Common Pharmacy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pharmacy and compounding businesses face unique billing complexities that can significantly
              impact revenue and profitability.
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
              How Medtransic Solves Your Pharmacy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized pharmacy billing solutions address each pain point with
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
                    <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-sky-600" />
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
              Specialized Pharmacy Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for compounding pharmacies
              and specialty medication providers.
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
                  iconColor="text-sky-600"
                  iconBgColor="bg-sky-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-12 shadow-xl border border-sky-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Pharmacy Businesses
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized pharmacy billing expertise delivers measurable improvements
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
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="text-3xl font-bold text-sky-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-sky-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's pharmacy billing expertise has revolutionized our compounding business.
                Their understanding of ingredient billing and specialty medications has increased
                our revenue by 50% while eliminating the billing headaches we used to face daily."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Amanda Lee, PharmD</p>
                <p className="text-sky-600 font-medium">Owner & Pharmacist</p>
                <p className="text-gray-500">Precision Compounding Pharmacy</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('pharmacy-billing')} />
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
              Ready to Optimize Your Pharmacy Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our pharmacy billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-sky-600 text-white px-12 py-5 rounded-full hover:bg-sky-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Pharmacy Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-sky-600 text-sky-600 px-12 py-5 rounded-full hover:bg-sky-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Pharmacy Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">Pharmacy-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-sky-600 hover:text-sky-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PharmacyBillingSpecialtyPage;
