import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
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
  Settings,
  Scan
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const InfectiousDiseasePage: React.FC = () => {

  const painPoints = [
    {
      icon: Clock,
      title: 'Complex Global Period Management',
      description: 'Neurosurgical procedures have 90-day global periods with complex rules for separately billable services and complications.',
      impact: 'Lost revenue when billable services are incorrectly bundled into global periods',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'High-Value Procedure Coding',
      description: 'Neurosurgical procedures are high-complexity requiring precise CPT selection, approach modifiers, and anatomical site coding.',
      impact: 'Significant underpayment when complex procedures are miscoded',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Extensive Documentation Requirements',
      description: 'Payers require detailed operative reports, medical necessity documentation, and complication documentation for infectious disease.',
      impact: 'Claim denials and payment delays due to insufficient documentation',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Implant and Hardware Billing',
      description: 'Spinal hardware, shunts, and neuro-stimulators require separate billing with proper HCPCS codes and manufacturer documentation.',
      impact: 'Revenue loss when expensive implants and devices are not properly billed',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: DollarSign,
      title: 'Multiple Surgeon Coordination',
      description: 'Co-surgeons, assistants, and consultants require proper modifier usage and documentation for appropriate reimbursement.',
      impact: 'Payment disputes when multiple surgeon roles are not clearly documented',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Scan,
      title: 'Intraoperative Monitoring Billing',
      description: 'Neurophysiological monitoring during surgery requires separate billing with proper time documentation and professional components.',
      impact: 'Missed revenue from unbilled intraoperative monitoring services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Activity,
      title: 'Infectious Disease Billing Specialists',
      description: 'Our team includes certified coders with specialized training in infectious disease procedures, spinal surgery, and cranial operations.',
      benefits: [
        'Expert CPT coding for all infectious disease procedures',
        'Proper approach and anatomical modifiers',
        'Global period tracking and management',
        'Complex procedure unbundling expertise'
      ]
    },
    {
      icon: Shield,
      title: 'Implant & Device Revenue Recovery',
      description: 'Dedicated support for tracking and billing high-cost infectious disease implants, hardware, and neuro-stimulation devices.',
      benefits: [
        'Spinal hardware and implant billing',
        'Shunt and drainage device coding',
        'Neuro-stimulator billing expertise',
        'Manufacturer code coordination'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Global Period Optimization',
      description: 'Advanced tracking systems identify separately billable services during global periods, including complications and unrelated services.',
      benefits: [
        'Automated global period monitoring',
        'Modifier 24, 25, 79 guidance',
        'Complication billing expertise',
        'Reduced denials from global period errors'
      ]
    },
    {
      icon: Monitor,
      title: 'Multi-Surgeon Billing Management',
      description: 'Comprehensive support for co-surgeon, assistant surgeon, and team surgery billing with proper documentation.',
      benefits: [
        'Co-surgeon modifier 62 expertise',
        'Assistant surgeon billing (80, 81, 82)',
        'Team surgery coordination',
        'Multiple procedure modifier application'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Cranial Infectious Disease',
      description: 'Expert billing for brain tumor resection, aneurysm repair, craniotomy procedures, and skull base surgery.',
      features: ['Craniotomy procedures', 'Tumor resection billing', 'Aneurysm repair', 'Skull base approaches']
    },
    {
      icon: Activity,
      title: 'Spinal Surgery Billing',
      description: 'Specialized billing for spinal fusion, laminectomy, disc procedures, and spinal decompression with hardware billing.',
      features: ['Spinal fusion coding', 'Decompression procedures', 'Hardware billing', 'Multi-level approaches']
    },
    {
      icon: Zap,
      title: 'Functional Infectious Disease',
      description: 'Complex billing for DBS implantation, VNS placement, spinal cord stimulators, and pain pump management.',
      features: ['DBS implantation', 'Neuro-stimulator billing', 'Pump placement', 'Programming and adjustments']
    },
    {
      icon: Settings,
      title: 'Peripheral Nerve Surgery',
      description: 'Accurate billing for nerve decompression, nerve repair, and peripheral nerve tumor procedures.',
      features: ['Nerve decompression', 'Nerve repair coding', 'Tumor excision', 'Graft procedures']
    }
  ];

  const benefits = [
    { metric: '38%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '46%', label: 'Reduction in Denials', icon: Shield },
    { metric: '20 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden">
      <SEOHead
        title="Infectious Disease Billing Services | ID Medical Billing"
        description="Infectious disease billing for HIV/AIDS management, antibiotic therapy, infectious consultations, and complex infection treatments. Handle hospitalist consultations and long-term antimicrobial management billing."
        canonical="https://medtransic.com/specialties/infectious-disease"
        keywords="infectious disease billing, ID billing services, infection management billing, infectious disease specialist billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Infectious Disease"
        description="Infectious disease billing for HIV/AIDS management, antibiotic therapy, infectious consultations, and complex infection treatments. Handle hospitalist consultations and long-term antimicrobial management billing."
        url="https://medtransic.com/specialties/infectious-disease"
      />

      <HeroSection
        badge={{ icon: Activity, text: "Infectious Disease Billing Specialists" }}
        title="Expert Infectious Disease Medical Billing Services"
        description="Maximize your infectious disease practice revenue with specialized billing expertise in complex cranial procedures, spinal surgery, and neuro-stimulation devices. Our certified coders understand intricate CPT coding, global period management, and implant billing unique to infectious disease practices."
        buttons={[
          { text: "Schedule Free Consultation", href: "/contact", variant: "primary" },
          { text: "View Our Services", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "38%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "97%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "46%", label: "Reduction in Denials", icon: Shield },
          { value: "20 Days", label: "Faster Payment", icon: Clock }
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
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Neurosurgeon performing complex brain surgery procedure"
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
              Common Infectious Disease Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Infectious Disease practices face unique billing complexities with high-value procedures,
              extensive global periods, and complex implant and device billing requirements.
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 h-full"
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
              How Medtransic Solves Your Infectious Disease Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized infectious disease billing solutions address each challenge with
              targeted expertise in complex surgical coding and device billing.
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
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
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
                        <span className="text-amber-600">{benefit}</span>
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
              Specialized Infectious Disease Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for infectious disease practices
              and specialized infectious disease subspecialties.
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
                  iconBgColor="bg-amber-100"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-gray-50 to-amber-100 rounded-2xl p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Infectious Disease Practices
              </motion.h2>
              <motion.p
                className="text-lg text-amber-600 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized infectious disease billing expertise delivers measurable improvements
                in revenue and operational efficiency for infectious disease practices.
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
                  <div className="text-amber-600 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-amber-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-amber-600" />
              </div>
              <blockquote className="text-2xl text-amber-600 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Infectious Disease billing is incredibly complex with high-value procedures, long global periods,
                and expensive implants that must be properly documented. Medtransic's team has expertise
                in the most complex infectious disease coding and has helped us capture revenue on implants
                and devices that we were previously missing. Their global period tracking system has
                prevented countless denials. I wouldn't trust our billing to anyone else."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. David Martinez, MD, FAANS</p>
                <p className="text-amber-600 font-medium">Board-Certified Neurosurgeon</p>
                <p className="text-gray-500">Advanced Neurosurgical Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('infectious-disease')} />
        </AnimatedSection>


        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-amber-100">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Optimize Your Infectious Disease Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our infectious disease billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with complex surgical billing requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-amber-600 text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
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
                  Call Infectious Disease Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-amber-600 font-medium">Infectious Disease-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-amber-600 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-amber-600 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-amber-600 hover:text-gray-800 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfectiousDiseasePage;
