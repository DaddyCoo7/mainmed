import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
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
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const HospitalFacilityBillingPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: DollarSign,
      title: 'Complex DRG & APC Coding',
      description: 'Hospital inpatient DRG assignments and outpatient APC coding require specialized expertise to ensure proper reimbursement and avoid costly downcoding.',
      impact: 'Incorrect DRG coding can reduce reimbursement by 20-40% per claim',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Charge Capture Leakage',
      description: 'Missing charges for supplies, procedures, and ancillary services in fast-paced hospital environments result in significant revenue loss.',
      impact: 'Facilities lose 3-10% of revenue from missed charge capture',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: AlertTriangle,
      title: 'Stringent Compliance Requirements',
      description: 'Hospital billing must comply with complex regulations including condition code requirements, medical necessity, and proper documentation.',
      impact: 'Non-compliance risks audits, recoupment, and substantial penalties',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'High Claim Volume & Complexity',
      description: 'Hospitals generate thousands of claims monthly with varying payer rules, requiring sophisticated billing systems and expert staff.',
      impact: 'Manual processes cannot handle volume, leading to backlogs and delays',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Payer-Specific Billing Rules',
      description: 'Each payer has unique billing requirements, edits, and documentation needs that change frequently and vary by facility type.',
      impact: 'Payer-specific errors cause 15-25% denial rates for facilities',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Revenue Cycle Inefficiency',
      description: 'Disconnected systems between registration, clinical, and billing departments create inefficiencies and revenue leakage.',
      impact: 'Poor coordination extends A/R days and increases operating costs',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Building2,
      title: 'Specialized Hospital Billing Experts',
      description: 'Team of certified facility coders with deep expertise in DRG, APC, and revenue code assignments for all facility types.',
      benefits: [
        'RHIA and RHIT certified hospital coders',
        'MS-DRG and APC optimization expertise',
        'Inpatient, outpatient, and ASC specialists',
        'Average 15+ years facility billing experience'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced Charge Capture Systems',
      description: 'Technology-driven charge capture solutions that integrate with clinical systems to ensure every service is captured and billed.',
      benefits: [
        'Real-time charge capture validation',
        'Integration with all major hospital systems',
        'Automated supply and implant tracking',
        'CDM management and maintenance'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Defense',
      description: 'Rigorous compliance protocols and audit preparation ensure adherence to CMS requirements and payer-specific rules.',
      benefits: [
        'Pre-bill compliance reviews on all claims',
        'Medical necessity validation',
        'Complete audit trail documentation',
        'RAC and MAC audit defense support'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization & Analytics',
      description: 'Data-driven approach identifies revenue opportunities, resolves denials, and optimizes facility reimbursement.',
      benefits: [
        'DRG optimization and case mix analysis',
        'Denial pattern analysis and prevention',
        'Payer contract variance tracking',
        'Real-time facility performance dashboards'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Inpatient Billing (UB-04)',
      description: 'Complete MS-DRG coding, revenue code assignment, and condition code management for hospital inpatient stays.',
      features: ['MS-DRG optimization', 'MCC/CC validation', 'Present on admission (POA) indicators', 'Transfer and discharge billing']
    },
    {
      icon: CheckCircle,
      title: 'Outpatient & ASC Billing',
      description: 'APC-based billing for hospital outpatient departments and ambulatory surgery centers with proper packaging rules.',
      features: ['APC assignment and optimization', 'Status indicator management', 'Modifier 25/59 application', 'Observation vs inpatient']
    },
    {
      icon: BarChart3,
      title: 'Charge Capture & CDM Management',
      description: 'Comprehensive charge capture validation and chargemaster maintenance to maximize compliant revenue.',
      features: ['Real-time charge validation', 'CDM pricing optimization', 'Supply and implant tracking', 'Revenue code mapping']
    },
    {
      icon: Award,
      title: 'Facility Denial Management',
      description: 'Specialized denial resolution for hospital-specific denial reasons including medical necessity and coverage.',
      features: ['DRG downgrade appeals', 'Medical necessity documentation', 'Coverage determination appeals', 'Timely filing management']
    }
  ];

  const benefits = [
    { metric: '98%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '35%', label: 'Revenue Increase', icon: TrendingUp },
    { metric: '<25', label: 'Days in A/R', icon: Clock },
    { metric: '<5%', label: 'Final Denial Rate', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Hospital & Facility Billing Services | Inpatient Medical Billing"
        description="Comprehensive hospital and facility billing services for inpatient and outpatient care. Expert coding for hospital procedures and services."
        canonical="https://medtransic.com/services/hospital-facility-billing"
        keywords="hospital billing, facility billing, inpatient billing, outpatient billing, hospital RCM services"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Hospital Facility Billing"
        description="Comprehensive hospital and facility billing services for inpatient and outpatient care. Expert coding for hospital procedures and services."
        url="https://medtransic.com/services/hospital-facility-billing"
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
        badge={{ icon: Building2, text: 'Facility Billing Services' }}
        title="Hospital & Facility Billing"
        description="Inpatient, outpatient, and ASC billing with complete DRG validation, charge capture, and audit compliance for facilities."
        buttons={[
          { text: 'Schedule Free Consultation', href: '/contact', variant: 'primary' },
          { text: 'Call Our Specialists', href: 'tel:+1-888-777-0860', variant: 'secondary' }
        ]}
        stats={[
          { value: '98%', label: 'Clean Claim Rate', icon: CheckCircle },
          { value: '35%', label: 'Revenue Increase', icon: TrendingUp },
          { value: '<25', label: 'Days in A/R', icon: Clock },
          { value: '<5%', label: 'Final Denial Rate', icon: Shield }
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
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Hospital and medical facility billing specialists managing inpatient and outpatient claims"
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
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-purple-600" />
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
                  iconColor="text-purple-600"
                  iconBgColor="bg-purple-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-12 shadow-xl border border-purple-200">
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
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's facility billing team has been exceptional. They optimized our DRG coding, reduced our denial rate from 22% to under 6%, and increased our net revenue by 35%. Their expertise in hospital billing is unmatched, and their compliance protocols give us complete confidence."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">David Martinez, CFO</p>
                <p className="text-purple-600 font-medium">Regional Medical Center</p>
                <p className="text-gray-500">250-Bed Acute Care Hospital</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('hospital-facility-billing')} />
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
                <Link to="/contact" className="bg-purple-600 text-white px-12 py-5 rounded-full hover:bg-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-purple-600 text-purple-600 px-12 py-5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-purple-600 hover:text-purple-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalFacilityBillingPage;
