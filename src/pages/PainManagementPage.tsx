import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
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
  Target,
  Award,
  Stethoscope,
  Monitor,
  Syringe,
  Radio,
  Settings,
  Pill,
  ScanLine,
  AlertCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const PainManagementPage: React.FC = () => {

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Injection Coding',
      description: 'Pain management involves numerous injection procedures with specific anatomical site coding, levels, and technique modifiers that must be precisely applied.',
      impact: 'Underpayment or denials from incorrect CPT code selection',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Radio,
      title: 'Fluoroscopy Billing Complexity',
      description: 'Image-guided procedures require proper coding of both the procedure and fluoroscopic guidance with correct modifier usage.',
      impact: 'Revenue loss from unbilled imaging guidance',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Settings,
      title: 'Multi-Level Procedure Coding',
      description: 'Billing for multiple spinal levels requires understanding of add-on codes, bilateral modifiers, and payer-specific bundling rules.',
      impact: 'Significant underpayment from improper level coding',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FileText,
      title: 'Medical Necessity Documentation',
      description: 'Pain procedures require extensive documentation of conservative treatment failure, functional limitations, and medical necessity.',
      impact: 'Denials due to insufficient medical necessity documentation',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: AlertCircle,
      title: 'Controlled Substance Compliance',
      description: 'Medication management requires strict documentation for controlled substances and compliance with state and federal regulations.',
      impact: 'Compliance risks and potential audit exposure',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Delays',
      description: 'High-cost procedures and medication management require extensive prior authorizations that delay patient treatment.',
      impact: 'Treatment delays and high administrative burden',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Pain Management Coding Experts',
      description: 'Our team includes certified coders with specialized training in interventional pain procedures, spinal injections, and medication management.',
      benefits: [
        'Accurate CPT coding for all injection procedures',
        'Expertise in multi-level and bilateral coding',
        'Knowledge of fluoroscopy guidance billing',
        'Proper modifier application for complex procedures'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Documentation',
      description: 'Comprehensive documentation review ensures medical necessity and controlled substance compliance for all procedures and treatments.',
      benefits: [
        'Medical necessity validation before submission',
        'Controlled substance documentation review',
        'Audit-resistant claim submission',
        'Regulatory compliance management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Maximize reimbursements through proper coding of complex procedures, imaging guidance, and proper level documentation.',
      benefits: [
        'Capture all billable procedure components',
        'Proper fluoroscopy guidance billing',
        'Multi-level procedure optimization',
        'Improved cash flow management'
      ]
    },
    {
      icon: Monitor,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorizations for procedures, implants, and medication management with proven success rates.',
      benefits: [
        'Faster procedure approvals',
        'Reduced administrative burden',
        'Higher approval rates through expert documentation',
        'Streamlined patient treatment scheduling'
      ]
    }
  ];

  const services = [
    {
      icon: Syringe,
      title: 'Spinal Injections',
      description: 'Expert billing for epidural steroid injections, facet joint injections, nerve blocks, and trigger point injections.',
      features: ['Epidural injections', 'Facet joint procedures', 'Nerve block billing', 'Multi-level coding']
    },
    {
      icon: Radio,
      title: 'Radiofrequency Ablation',
      description: 'Specialized billing for RFA procedures with proper coding for ablation, neuroplasty, and image guidance.',
      features: ['RFA procedures', 'Medial branch blocks', 'Neuroplasty billing', 'Imaging guidance']
    },
    {
      icon: Settings,
      title: 'Implantable Devices',
      description: 'Complex billing for spinal cord stimulators, intrathecal pumps, trials, and permanent implantations.',
      features: ['SCS implantation', 'Pump placement', 'Trial procedures', 'Device programming']
    },
    {
      icon: Pill,
      title: 'Medication Management',
      description: 'Comprehensive billing for pain medication management, urine drug screening, and controlled substance monitoring.',
      features: ['Medication management E/M', 'UDS billing', 'Controlled substance tracking', 'Follow-up visits']
    }
  ];

  const benefits = [
    { metric: '35%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '95%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '48%', label: 'Reduction in Denials', icon: Shield },
    { metric: '14 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Pain Management Billing Services | Interventional Pain Billing"
        description="Expert pain management billing for interventional procedures, injections, and chronic pain treatment. Specialized coding for pain clinic services."
        canonical="https://medtransic.com/specialties/pain-management"
        keywords="pain management billing, pain clinic billing, interventional pain billing, injection billing, chronic pain billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Pain Management"
        description="Expert pain management billing for interventional procedures, injections, and chronic pain treatment. Specialized coding for pain clinic services."
        url="https://medtransic.com/specialties/pain-management"
      />
      <HeroSection
        badge={{ icon: Zap, text: "Pain Management Billing Specialists" }}
        title="Expert Pain Management Medical Billing Services"
        description="Maximize your pain management practice revenue with specialized billing expertise. Our certified coders understand the complexities of interventional procedures, multi-level injections, fluoroscopy guidance, and controlled substance documentation."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "95%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "35%", label: "Revenue Increase", icon: TrendingUp },
          { value: "48%", label: "Fewer Denials", icon: Shield },
          { value: "14 Days", label: "Faster Payments", icon: Clock }
        ]}
      />

      <div className="bg-white relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Common Pain Management Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pain management practices face unique billing complexities that can significantly
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
              How Medtransic Solves Your Pain Management Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized pain management billing solutions address each pain point with
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
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-orange-600" />
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
              Specialized Pain Management Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for pain management practices
              and interventional procedures.
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
                  iconColor="text-orange-600"
                  iconBgColor="bg-orange-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 shadow-xl border border-orange-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Pain Management Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized pain management billing expertise delivers measurable improvements
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
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-orange-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's pain management billing expertise has revolutionized our practice operations.
                Their deep understanding of multi-level procedures, fluoroscopy billing, and controlled
                substance documentation has increased our revenue by 38% while ensuring full compliance."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Robert Martinez, MD</p>
                <p className="text-orange-600 font-medium">Board-Certified Pain Management Specialist</p>
                <p className="text-gray-500">Advanced Pain & Spine Institute</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('pain-management')} />
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
              Ready to Optimize Your Pain Management Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our pain management billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-orange-600 text-white px-12 py-5 rounded-full hover:bg-orange-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Pain Management Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-orange-600 text-orange-600 px-12 py-5 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Pain Management Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">Pain Management-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-orange-600 hover:text-orange-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </>
  );
};

export default PainManagementPage;
