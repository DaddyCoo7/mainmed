import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Dna,
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

const GeneticTestingPage: React.FC = () => {

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'High-Complexity CPT Codes',
      description: 'Molecular and genetic testing uses complex multi-tiered CPT codes with stacking rules and component billing requirements.',
      impact: 'Incorrect CPT coding causes 35-45% genetic test denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Medical Necessity Documentation',
      description: 'Genetic tests require extensive medical necessity documentation including family history, clinical indications, and genetic counseling.',
      impact: 'Insufficient documentation results in 40-50% denial rates',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Requirements',
      description: 'Most genetic and molecular tests require prior authorization with detailed clinical justification and supporting documentation.',
      impact: 'PA delays postpone revenue by 45-60 days on average',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Payer-Specific Policies',
      description: 'Each payer has unique coverage policies, testing criteria, and reimbursement rates for genetic tests.',
      impact: 'Policy non-compliance causes 30-40% claim rejections',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Microscope,
      title: 'Panel Bundling Complexity',
      description: 'Multi-gene panels require proper bundling of individual genes versus comprehensive panel codes.',
      impact: 'Bundling errors reduce reimbursement by 25-35%',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: BarChart3,
      title: 'Hereditary Testing Criteria',
      description: 'Hereditary cancer and disease testing has strict clinical criteria that must be met for coverage approval.',
      impact: 'Criteria failures result in patient liability and bad debt',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const solutions = [
    {
      icon: Dna,
      title: 'Molecular Billing Specialists',
      description: 'Our team includes certified coders with specialized training in molecular diagnostics and genetic testing billing.',
      benefits: [
        'Expert CPT code selection for genetic tests',
        'Proper panel bundling strategies',
        'Payer-specific coding knowledge',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Medical Necessity Validation',
      description: 'Comprehensive review of test orders against payer-specific medical necessity criteria before claim submission.',
      benefits: [
        'Pre-claim medical necessity review',
        'Family history documentation',
        'Clinical indication validation',
        'ABN management when needed'
      ]
    },
    {
      icon: Zap,
      title: 'Prior Authorization Management',
      description: 'Dedicated PA team with expertise in genetic testing authorizations and payer requirements.',
      benefits: [
        'Faster authorization approvals',
        'Clinical documentation support',
        'Genetic counseling coordination',
        'Appeal support for denials'
      ]
    },
    {
      icon: Monitor,
      title: 'Payer Policy Monitoring',
      description: 'Continuous monitoring of payer coverage policies and testing criteria for all genetic and molecular tests.',
      benefits: [
        'Real-time policy updates',
        'Coverage determination support',
        'Testing criteria validation',
        'Reimbursement optimization'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Genetic Panel Billing',
      description: 'Expert billing for multi-gene panels including hereditary cancer, cardiac, and neurology panels.',
      features: ['Cancer panel billing', 'Cardiac genetic testing', 'Neurology panels', 'Comprehensive genomics']
    },
    {
      icon: Microscope,
      title: 'Molecular Diagnostics',
      description: 'Specialized billing for molecular testing including PCR, sequencing, and chromosomal analysis.',
      features: ['Next-gen sequencing', 'PCR testing', 'Chromosomal microarray', 'FISH analysis']
    },
    {
      icon: Users,
      title: 'Cancer Genomics',
      description: 'Complete billing for oncology molecular testing including tumor profiling and liquid biopsies.',
      features: ['Tumor profiling', 'Liquid biopsy', 'Somatic mutation testing', 'Companion diagnostics']
    },
    {
      icon: FileText,
      title: 'Hereditary Testing',
      description: 'Expert billing for hereditary disease and carrier screening with proper documentation.',
      features: ['Hereditary cancer', 'Carrier screening', 'Prenatal testing', 'Pharmacogenomics']
    }
  ];

  const benefits = [
    { metric: '42%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '93%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '58%', label: 'Reduction in Denials', icon: Shield },
    { metric: '28 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Genetic Testing Billing Services | Genomic Testing Medical Billing"
        description="Genetic testing billing for BRCA analysis, carrier screening, pharmacogenomics, and whole exome sequencing. Handle complex molecular pathology codes and genetic counseling session billing."
        canonical="https://medtransic.com/specialties/genetic-testing"
        keywords="genetic testing billing, genomic billing, molecular diagnostics billing, genetic counseling billing, DNA testing billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Genetic Testing"
        description="Genetic testing billing for BRCA analysis, carrier screening, pharmacogenomics, and whole exome sequencing. Handle complex molecular pathology codes and genetic counseling session billing."
        url="https://medtransic.com/specialties/genetic-testing"
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
              <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mr-6">
                <Dna className="w-10 h-10 text-cyan-600" />
              </div>
              <span className="text-cyan-600 font-semibold text-lg tracking-wide uppercase">
                Genetic Testing Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Genetic & Molecular Testing Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your laboratory revenue with specialized billing expertise.
            Our certified coders understand the complexities of molecular diagnostics,
            genetic panel billing, medical necessity requirements, and payer-specific policies.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/8325701/pexels-photo-8325701.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Genetic testing and DNA analysis"
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
              Common Genetic Testing Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Genetic and molecular testing laboratories face unique billing complexities that can significantly
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
              How Medtransic Solves Your Genetic Testing Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized genetic testing billing solutions address each pain point with
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
              Specialized Genetic Testing Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for genetic testing,
              molecular diagnostics, and genomics laboratories.
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
                Proven Results for Genetic Testing Labs
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized genetic testing billing expertise delivers measurable improvements
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
                <Stethoscope className="w-8 h-8 text-cyan-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's genetic testing billing expertise has been invaluable for our molecular lab.
                Their understanding of complex CPT codes and payer policies has increased our revenue
                by 55% while virtually eliminating our authorization and denial issues."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Emily Thompson, PhD</p>
                <p className="text-cyan-600 font-medium">Laboratory Director</p>
                <p className="text-gray-500">Genomics & Molecular Testing Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('genetic-testing')} />
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
              Ready to Optimize Your Genetic Testing Lab Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our genetic testing billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-cyan-600 text-white px-12 py-5 rounded-full hover:bg-cyan-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Genetic Testing Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-cyan-600 text-cyan-600 px-12 py-5 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Genetic Testing Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Molecular-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneticTestingPage;
