import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FlaskConical,
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
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const LaboratoryBillingPage: React.FC = () => {
  const painPoints = [
    {
      icon: FileText,
      title: 'Complex Panel & Test Bundling',
      description: 'Laboratory billing requires expertise in proper bundling of panel components, reflex testing, and add-on tests to comply with payer edit rules.',
      impact: 'Incorrect bundling causes 25-35% of laboratory claim denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Medical Necessity Documentation',
      description: 'Payers require specific ICD-10 codes and proper linking to support medical necessity for laboratory tests, especially high-cost molecular testing.',
      impact: 'Missing diagnosis links result in automatic denials and appeals',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Payer-Specific Coverage Policies',
      description: 'Each payer has unique Local Coverage Determinations (LCDs) and coverage policies that vary by test type and frequency.',
      impact: 'Policy violations lead to denials, audits, and recoupment demands',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Modifier Application Complexity',
      description: 'Laboratory billing requires precise modifier usage including 91, 59, and QW to indicate test circumstances and prevent unbundling errors.',
      impact: 'Modifier errors trigger automatic edits and claim rejections',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'ABN Management Requirements',
      description: 'Advanced Beneficiary Notices must be properly obtained, documented, and billed with correct modifiers when tests may not be covered.',
      impact: 'Missing ABNs prevent billing to patients when Medicare denies',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'High Volume Processing Needs',
      description: 'Clinical laboratories process thousands of claims daily requiring automated systems and quality controls to maintain accuracy.',
      impact: 'Manual processing cannot handle volume without significant errors',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: FlaskConical,
      title: 'Laboratory Billing Specialists',
      description: 'Certified coders with specialized training in clinical, molecular, and pathology laboratory billing requirements.',
      benefits: [
        'Experts in CLFS and MPFS reimbursement',
        'Panel bundling and unbundling expertise',
        'Current on all LCD and NCD requirements',
        'Average 10+ years laboratory billing experience'
      ]
    },
    {
      icon: Zap,
      title: 'Automated Edit Checking',
      description: 'Advanced billing software with built-in laboratory-specific edit checks and payer rule validation before claim submission.',
      benefits: [
        'Real-time bundling and unbundling validation',
        'Automatic LCD/NCD compliance checking',
        'Modifier appropriateness verification',
        'Integration with laboratory information systems'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Medical Necessity',
      description: 'Comprehensive review processes ensure proper diagnosis code linking and medical necessity documentation for all tests.',
      benefits: [
        'Pre-submission medical necessity validation',
        'ABN tracking and proper modifier application',
        'Frequency limitation monitoring',
        'Audit-ready documentation protocols'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Optimization',
      description: 'Strategic approach to maximize compliant reimbursement and minimize denials through proactive management.',
      benefits: [
        'Test menu optimization for reimbursement',
        'Payer contract rate verification',
        'Denial pattern analysis and prevention',
        'Cash flow improvement strategies'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Clinical Laboratory Billing',
      description: 'Complete billing for routine and specialty laboratory testing including chemistry, hematology, immunology, and microbiology.',
      features: ['Automated panel bundling', 'Profile and panel optimization', 'CLIA waived test billing', 'Reference lab coordination']
    },
    {
      icon: CheckCircle,
      title: 'Molecular & Genetic Testing',
      description: 'Specialized billing for high-complexity molecular diagnostics, genomic testing, and genetic counseling services.',
      features: ['Molecular pathology codes', 'Multi-analyte assays', 'PLA code identification', 'Genetic counseling billing']
    },
    {
      icon: BarChart3,
      title: 'Anatomic Pathology Services',
      description: 'Professional and technical component billing for surgical pathology, cytology, and immunohistochemistry.',
      features: ['TC/PC component separation', 'Surgical pathology levels', 'IHC and special stains', 'Frozen section billing']
    },
    {
      icon: Award,
      title: 'Medicare & LCD Compliance',
      description: 'Comprehensive LCD monitoring and compliance management for all covered laboratory services.',
      features: ['LCD requirement tracking', 'Medical necessity validation', 'Frequency limitation monitoring', 'ABN management']
    }
  ];

  const benefits = [
    { metric: '97%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '40%', label: 'Faster Reimbursement', icon: Clock },
    { metric: '<8%', label: 'Denial Rate', icon: Shield },
    { metric: '25%', label: 'Revenue Growth', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Laboratory Billing Services | Clinical Lab Medical Billing"
        description="Professional laboratory billing services for clinical and diagnostic labs. Expert coding for lab tests and pathology services."
        canonical="https://medtransic.com/services/laboratory-billing"
        keywords="laboratory billing, clinical lab billing, lab billing services, pathology billing, diagnostic lab billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Laboratory Billing"
        description="Professional laboratory billing services for clinical and diagnostic labs. Expert coding for lab tests and pathology services."
        url="https://medtransic.com/services/laboratory-billing"
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
        badge={{ icon: FlaskConical, text: 'Lab Billing Specialists' }}
        title="Laboratory Billing Services"
        description="Billing for clinical, molecular, and pathology labs with payer-specific compliance and panel bundling expertise."
        buttons={[
          { text: 'Schedule Free Consultation', href: '/contact', variant: 'primary' },
          { text: 'Call Our Specialists', href: 'tel:+1-888-777-0860', variant: 'secondary' }
        ]}
        stats={[
          { value: '97%', label: 'Clean Claim Rate', icon: CheckCircle },
          { value: '40%', label: 'Faster Reimbursement', icon: Clock },
          { value: '<8%', label: 'Denial Rate', icon: Shield },
          { value: '25%', label: 'Revenue Growth', icon: TrendingUp }
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
              src="https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Clinical laboratory billing specialists managing test orders and claims for pathology services"
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
              Common Challenges We Solve
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Healthcare providers face significant obstacles in this area that impact revenue and operations.
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
                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-amber-600" />
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
                  iconColor="text-amber-600"
                  iconBgColor="bg-amber-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-12 shadow-xl border border-amber-200">
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
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's laboratory billing team understands the complexity of molecular testing and LCD requirements better than anyone. They reduced our denial rate from 28% to under 8% and improved our cash collections by 40%. Their expertise in panel bundling and medical necessity has been invaluable."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Emily Roberts, Laboratory Director</p>
                <p className="text-amber-600 font-medium">Regional Diagnostic Laboratory</p>
                <p className="text-gray-500">Clinical & Molecular Testing Facility</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('laboratory-billing')} />
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
                <Link to="/contact" className="bg-amber-600 text-white px-12 py-5 rounded-full hover:bg-amber-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-amber-600 text-amber-600 px-12 py-5 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-amber-600 hover:text-amber-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryBillingPage;
