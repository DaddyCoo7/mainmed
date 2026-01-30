import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FlaskConical,
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
  Microscope,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const LaboratoriesPathologyPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Panel Bundling',
      description: 'Laboratory billing requires intricate knowledge of panel bundling rules, component codes, and payer-specific requirements.',
      impact: 'Improper bundling causes 30-40% claim denial rates',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'NCD/LCD Compliance',
      description: 'National and Local Coverage Determinations have strict medical necessity requirements that vary by test and payer.',
      impact: 'Non-compliance results in denials and potential fraud audits',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Molecular Test Authorizations',
      description: 'High-complexity molecular and genetic tests require extensive prior authorizations with detailed clinical documentation.',
      impact: 'Authorization delays cause 45-60 day payment delays',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Toxicology Billing Challenges',
      description: 'Toxicology testing faces increased scrutiny with specific billing limitations and documentation requirements.',
      impact: 'Toxicology denials average 35-50% without specialized expertise',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Microscope,
      title: 'Pathology Interpretation Coding',
      description: 'Surgical pathology and cytology interpretation require proper technical and professional component separation.',
      impact: 'Incorrect component coding reduces reimbursement by 20-30%',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      icon: BarChart3,
      title: 'Electronic Order Integration',
      description: 'Managing electronic orders, accession numbers, and result reporting across multiple systems is complex.',
      impact: 'Manual processes increase errors and processing time by 40%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const solutions = [
    {
      icon: FlaskConical,
      title: 'Laboratory Billing Specialists',
      description: 'Our team includes certified coders with specialized training in clinical, molecular, and toxicology laboratory billing.',
      benefits: [
        'Expert panel bundling and component coding',
        'NCD/LCD compliance expertise',
        'Payer-specific policy knowledge',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Medical Necessity Validation',
      description: 'Comprehensive review of test orders against medical necessity criteria to ensure compliance and prevent denials.',
      benefits: [
        'ICD-10 diagnosis validation',
        'Medical necessity documentation',
        'ABN management when required',
        'Reduced audit risk'
      ]
    },
    {
      icon: Zap,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorizations for high-complexity molecular and genetic testing.',
      benefits: [
        'Faster approval times for specialty tests',
        'Clinical documentation support',
        'Automated tracking system',
        'Higher approval rates'
      ]
    },
    {
      icon: Monitor,
      title: 'Electronic Order Processing',
      description: 'Seamless integration with lab information systems for automated order entry and result reporting.',
      benefits: [
        'Reduced manual data entry',
        'Accession number tracking',
        'Automated claim generation',
        'Real-time status updates'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Clinical Laboratory Billing',
      description: 'Expert billing for routine and specialized clinical lab tests including chemistry, hematology, and microbiology.',
      features: ['Chemistry panel billing', 'Hematology testing', 'Microbiology cultures', 'Immunology assays']
    },
    {
      icon: Microscope,
      title: 'Molecular Diagnostics',
      description: 'Specialized billing for molecular testing including genetic panels, PCR, and next-generation sequencing.',
      features: ['Genetic panel billing', 'PCR testing', 'NGS procedures', 'Oncology molecular testing']
    },
    {
      icon: FileText,
      title: 'Toxicology Billing',
      description: 'Compliant billing for drug testing and toxicology screening with proper documentation and limitations.',
      features: ['Drug screening', 'Confirmation testing', 'Therapeutic drug monitoring', 'Pain management testing']
    },
    {
      icon: Users,
      title: 'Pathology Services',
      description: 'Complete billing for surgical pathology, cytology, and anatomic pathology services.',
      features: ['Surgical pathology', 'Cytology interpretation', 'Immunohistochemistry', 'Flow cytometry']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '50%', label: 'Reduction in Denials', icon: Shield },
    { metric: '18 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Laboratory & Pathology Billing Services | Lab Medical Billing"
        description="Professional laboratory and pathology billing services. Expert coding for diagnostic testing, pathology services, and lab procedures."
        canonical="https://medtransic.com/specialties/laboratories-pathology"
        keywords="laboratory billing, pathology billing, lab billing services, diagnostic testing billing, clinical lab billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Laboratories Pathology"
        description="Professional laboratory and pathology billing services. Expert coding for diagnostic testing, pathology services, and lab procedures."
        url="https://medtransic.com/specialties/laboratories-pathology"
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
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mr-6">
                <FlaskConical className="w-10 h-10 text-amber-600" />
              </div>
              <span className="text-amber-600 font-semibold text-lg tracking-wide uppercase">
                Laboratory Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Laboratory & Pathology Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your laboratory revenue with specialized billing expertise.
            Our certified coders understand the complexities of clinical lab, molecular diagnostics,
            toxicology, and pathology billing with expert panel bundling and compliance knowledge.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Laboratory technician analyzing samples"
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
              Common Laboratory Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Laboratory and pathology practices face unique billing complexities that can significantly
              impact revenue and compliance.
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
              How Medtransic Solves Your Laboratory Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized laboratory billing solutions address each pain point with
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
              Specialized Laboratory Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for clinical labs,
              molecular diagnostics, and pathology services.
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
                Proven Results for Laboratory Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized laboratory billing expertise delivers measurable improvements
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
                <Stethoscope className="w-8 h-8 text-amber-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's laboratory billing expertise has been a game-changer for our lab.
                Their understanding of complex panel bundling and NCD requirements has increased
                our revenue by 40% while virtually eliminating our denial issues."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Robert Chen, PhD</p>
                <p className="text-amber-600 font-medium">Laboratory Director</p>
                <p className="text-gray-500">Advanced Molecular Diagnostics</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('pathology')} />
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
              Ready to Optimize Your Laboratory Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our laboratory billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-amber-600 text-white px-12 py-5 rounded-full hover:bg-amber-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Laboratory Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-amber-600 text-amber-600 px-12 py-5 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Laboratory Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Laboratory-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-amber-600 hover:text-amber-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaboratoriesPathologyPage;
