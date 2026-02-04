import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Handshake,
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
  Wifi,
  Settings,
  BarChart3,
  Video,
  Globe
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const CommunityHealthClinicsPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'PPS Rate Complexity',
      description: 'Prospective Payment System rates require specific coding and documentation for proper reimbursement.',
      impact: 'Incorrect PPS billing leads to significant revenue loss',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'Sliding Scale Documentation',
      description: 'Complex requirements for documenting and billing sliding-fee scale patients appropriately.',
      impact: 'Risk of audit findings and compliance issues',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Grant Reporting Requirements',
      description: 'Multiple grant programs require specific billing and reporting compliance.',
      impact: 'Potential loss of grant funding due to reporting errors',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Encounter Bundling',
      description: 'Properly bundling multiple services within a single FQHC encounter for maximum reimbursement.',
      impact: 'Underbilling or denials from improper bundling',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Multiple Payer Types',
      description: 'Managing billing for Medicaid, Medicare, uninsured, and commercial payers with different rules.',
      impact: 'Increased claim rejections and administrative burden',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'UDS Reporting',
      description: 'Uniform Data System reporting requires accurate billing data collection throughout the year.',
      impact: 'Compliance risk and impact on future funding',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Handshake,
      title: 'FQHC Billing Specialists',
      description: 'Our team has extensive experience with Federally Qualified Health Center billing and PPS rate optimization.',
      benefits: [
        'PPS rate calculation expertise',
        'Encounter bundling optimization',
        'Grant compliance support',
        'UDS reporting assistance'
      ]
    },
    {
      icon: Shield,
      title: 'Sliding Scale Management',
      description: 'Complete support for sliding-fee scale programs and patient eligibility documentation.',
      benefits: [
        'Fee schedule optimization',
        'Discount documentation',
        'Patient eligibility verification',
        'Charity care billing support'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Maximization',
      description: 'Maximize FQHC revenue through proper encounter coding and bundling strategies.',
      benefits: [
        'Optimized PPS rate billing',
        'Proper service bundling',
        'Enhanced service capture',
        'Grant-compliant billing'
      ]
    },
    {
      icon: Activity,
      title: 'Technology Integration',
      description: 'Seamless integration with FQHC-specific EHR systems and reporting tools.',
      benefits: [
        'Automated PPS billing',
        'UDS data capture',
        'Grant reporting integration',
        'Real-time eligibility verification'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'PPS Rate Optimization',
      description: 'Expert billing to maximize Prospective Payment System reimbursements.',
      features: ['PPS rate calculation', 'Encounter bundling', 'Rate adjustment billing', 'FQHC-specific coding']
    },
    {
      icon: Users,
      title: 'Sliding Scale Management',
      description: 'Complete billing support for sliding-fee scale program compliance.',
      features: ['Fee schedule management', 'Discount documentation', 'Patient eligibility', 'Charity care billing']
    },
    {
      icon: Shield,
      title: 'Grant Compliance',
      description: 'Specialized billing aligned with HRSA and grant requirements.',
      features: ['HRSA compliance', 'Grant reporting support', 'UDS data accuracy', 'Quality metrics tracking']
    },
    {
      icon: Activity,
      title: 'Rural Health Billing',
      description: 'Dedicated billing services for Rural Health Clinics with RHC-specific expertise.',
      features: ['RHC encounter billing', 'Medicare cost reporting', 'Medicaid RHC rates', 'Preventive service billing']
    }
  ];

  const benefits = [
    { metric: '30%', label: 'Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '45%', label: 'Faster Reimbursement', icon: Clock },
    { metric: '100%', label: 'Policy Compliance', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Community Health Clinic Billing | FQHC Medical Billing Services"
        description="Professional billing for community health clinics and FQHCs. Expert coding for safety-net providers and community healthcare centers."
        canonical="https://medtransic.com/specialties/community-health-clinics"
        keywords="community health clinic billing, FQHC billing, community health center billing, safety-net billing, CHC billing services"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Community Health Clinics"
        description="Professional billing for community health clinics and FQHCs. Expert coding for safety-net providers and community healthcare centers."
        url="https://medtransic.com/specialties/community-health-clinics"
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
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mr-6">
                <Handshake className="w-10 h-10 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold text-lg tracking-wide uppercase">
                FQHC & CHC Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Community Health Clinic Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your FQHC revenue with specialized billing expertise. Our team understands
            PPS rates, sliding-scale billing, and rural health center requirements to ensure optimal
            reimbursement for your community health services.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Community health clinic providing patient care"
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
              Common Community Health Clinic Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              FQHCs and community health clinics face unique billing complexities with PPS rates,
              grant compliance, and diverse payer requirements.
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
              How Medtransic Solves Your FQHC Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized FQHC billing solutions address each challenge with
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
              Specialized FQHC Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for Federally Qualified Health
              Centers and Rural Health Clinics.
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
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 shadow-xl border border-green-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Community Health Clinics
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized FQHC billing expertise delivers measurable improvements
                in revenue and grant compliance.
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's FQHC billing expertise has been transformative for our clinic.
                Their understanding of PPS rates and grant compliance has increased our revenue by 32%
                while ensuring we meet all UDS reporting requirements."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Maria Gonzalez, MD</p>
                <p className="text-green-600 font-medium">Chief Medical Officer</p>
                <p className="text-gray-500">Community Care Health Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('community-health-clinics')} />
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
              Ready to Optimize Your FQHC Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our FQHC billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring grant and regulatory compliance.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free FQHC Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-green-600 text-green-600 px-12 py-5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call FQHC Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">FQHC-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityHealthClinicsPage;
