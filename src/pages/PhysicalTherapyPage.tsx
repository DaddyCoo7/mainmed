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
  ClipboardCheck,
  Settings,
  BarChart3,
  HeartPulse,
  Bone
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const PhysicalTherapyPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Therapy Cap & Threshold Complexities',
      description: 'Navigating Medicare therapy caps, KX modifiers, and threshold requirements creates confusion and potential revenue loss.',
      impact: 'Missed revenue when threshold documentation is incomplete',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Functional Limitation Reporting',
      description: 'G-code reporting requirements for functional limitations demand precise documentation at evaluation, progress, and discharge.',
      impact: 'Claim denials due to missing or incorrect G-codes',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Medical Necessity Documentation',
      description: 'Proving medical necessity for ongoing therapy requires detailed progress notes and measurable functional outcomes.',
      impact: 'Denials and audits when medical necessity is not well-documented',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Time-Based vs Service-Based Coding',
      description: 'Confusion between timed codes requiring 8-minute rule calculations and untimed service codes leads to billing errors.',
      impact: 'Underbilling when time units are not properly calculated',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Modifier Usage for Multiple Procedures',
      description: 'Proper use of modifiers (GP, GO, GN, 59, XS) for multiple therapy services on the same day is critical and complex.',
      impact: 'Bundling issues and claim rejections from incorrect modifiers',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Evaluation vs Treatment Distinction',
      description: 'Properly coding initial evaluations, re-evaluations, and treatment sessions with appropriate CPT codes.',
      impact: 'Reduced reimbursement when evaluation complexity is undervalued',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Activity,
      title: 'PT-Certified Billing Specialists',
      description: 'Our team includes physical therapy billing experts trained in therapy-specific CPT codes, modifiers, and documentation requirements.',
      benefits: [
        'Accurate 8-minute rule calculations for timed codes',
        'Proper G-code reporting for functional limitations',
        'Expert modifier application for multiple procedures',
        'Maximized reimbursement through correct code selection'
      ]
    },
    {
      icon: Shield,
      title: 'Medical Necessity Documentation Support',
      description: 'We help ensure your documentation meets payer requirements for demonstrating continued medical necessity.',
      benefits: [
        'Review of progress notes for compliance',
        'Guidance on functional outcome measurements',
        'Support for audit defense preparation',
        'Reduced claim denials from documentation issues'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Therapy Threshold & Cap Management',
      description: 'Expert handling of Medicare therapy thresholds and KX modifier requirements to maximize allowable payments.',
      benefits: [
        'Automatic threshold tracking and alerts',
        'Proper KX modifier application when needed',
        'Documentation guidance for exceptions',
        'Maximized therapy cap utilization'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Real-Time Billing Compliance',
      description: 'Advanced systems track therapy sessions, units, and documentation to ensure billing compliance.',
      benefits: [
        'Time-unit validation before claim submission',
        'Modifier compliance checking',
        'G-code reporting verification',
        'Detailed performance analytics'
      ]
    }
  ];

  const services = [
    {
      icon: Stethoscope,
      title: 'Evaluation & Re-evaluation Billing',
      description: 'Accurate coding for initial evaluations, re-evaluations, and discharge assessments.',
      features: ['97161-97163 evaluation codes', 'Re-evaluation coding (97164)', 'Complexity level determination', 'Discharge documentation']
    },
    {
      icon: Zap,
      title: 'Therapeutic Procedures',
      description: 'Expert billing for therapeutic exercises, manual therapy, and neuromuscular re-education.',
      features: ['Therapeutic exercise (97110)', 'Manual therapy (97140)', 'Neuromuscular re-ed (97112)', 'Gait training (97116)']
    },
    {
      icon: HeartPulse,
      title: 'Modality Billing',
      description: 'Proper coding for physical agent modalities and their supervised/constant attendance requirements.',
      features: ['Hot/cold packs (97010)', 'Electrical stimulation (97014)', 'Ultrasound (97035)', 'Mechanical traction (97012)']
    },
    {
      icon: FileText,
      title: 'Functional Limitation Reporting',
      description: 'Complete G-code management for mobility, changing positions, carrying, and other functional categories.',
      features: ['G-code selection and reporting', 'Severity modifier application', 'Progress tracking', 'Discharge G-codes']
    }
  ];

  const benefits = [
    { metric: '28%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '45%', label: 'Reduction in Denials', icon: Shield },
    { metric: '12 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Physical Therapy Billing Services | PT Medical Billing & Coding"
        description="Expert physical therapy billing services with specialized PT coders. Accurate therapy cap management, progress note documentation, and CPT coding for rehabilitation services."
        canonical="https://medtransic.com/specialties/physical-therapy"
        keywords="physical therapy billing, PT billing services, therapy billing, rehabilitation billing, PT coding, therapy cap management"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Physical Therapy"
        description="Expert physical therapy billing services with specialized PT coders. Accurate therapy cap management, progress note documentation, and CPT coding for rehabilitation services."
        url="https://medtransic.com/specialties/physical-therapy"
      />
      <HeroSection
        badge={{ icon: Activity, text: "Physical Therapy Billing Specialists" }}
        title="Expert Physical Therapy Billing Services"
        description="Maximize your PT practice revenue with specialized billing expertise in therapeutic procedures, functional limitation reporting, and therapy threshold management. Our certified PT billing specialists understand the 8-minute rule, G-codes, and modifier requirements unique to rehabilitation services."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "97%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "28%", label: "Revenue Increase", icon: TrendingUp },
          { value: "45%", label: "Fewer Denials", icon: Shield },
          { value: "12 Days", label: "Faster Payments", icon: Clock }
        ]}
      />

      <div className="bg-white relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Pain Points Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Common Physical Therapy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              PT practices face unique billing complexities with time-based coding, functional
              reporting requirements, and therapy-specific modifiers that can impact revenue significantly.
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

        {/* Solutions Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How Medtransic Solves Your PT Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized physical therapy billing solutions address each challenge with
              therapy-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-green-600" />
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

        {/* Services Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Specialized Physical Therapy Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for physical therapy practices
              and rehabilitation centers.
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
                  iconColor="text-green-600"
                  iconBgColor="bg-green-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Results Section */}
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
                Proven Results for Physical Therapy Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized PT billing expertise delivers measurable improvements in revenue
                and operational efficiency for rehabilitation practices.
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

        {/* Testimonial Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bone className="w-8 h-8 text-green-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's physical therapy billing team understands the nuances of the 8-minute rule,
                G-code reporting, and therapy thresholds better than anyone. They've increased our revenue
                by 32% while reducing claim denials to nearly zero. Their expertise in PT-specific coding
                has been invaluable to our growing practice."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Sarah Mitchell, PT, DPT</p>
                <p className="text-green-600 font-medium">Owner & Clinical Director</p>
                <p className="text-gray-500">Advanced Rehabilitation & Sports Therapy</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('physical-therapy')} />
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
              Ready to Optimize Your PT Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our physical therapy billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with therapy-specific requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free PT Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-green-600 text-green-600 px-12 py-5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call PT Specialists
                </a>
              </motion.div>
            </div>

            {/* Additional Benefits */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">PT-Certified Billing Specialists</span>
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

        {/* Back to Specialties */}
        <div className="text-center mt-12">
          <Link to="/specialties" className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </>
  );
};

export default PhysicalTherapyPage;
