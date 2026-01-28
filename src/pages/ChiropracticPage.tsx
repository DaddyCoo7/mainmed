import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
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
  Activity,
  Bone,
  Target,
  Award,
  Stethoscope,
  Monitor,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const ChiropracticPage: React.FC = () => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Frequency Limitation Compliance',
      description: 'Managing frequency limits for spinal manipulation and therapy services requires tracking visits per condition and adhering to payer-specific policies.',
      impact: 'Claim denials when frequency limits are exceeded without proper justification',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Medical Necessity Documentation',
      description: 'Proving medical necessity for ongoing chiropractic care requires detailed documentation of patient progress, functional outcomes, and treatment plans.',
      impact: 'Denials for lack of medical necessity documentation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Cash vs Insurance Mix Management',
      description: 'Managing both cash-pay patients and insurance billing requires separate systems and understanding when to bill insurance versus patient-pay.',
      impact: 'Billing errors and patient confusion about financial responsibility',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: AlertTriangle,
      title: 'Modifier Usage Complexity',
      description: 'Chiropractic billing requires specific modifiers for multiple conditions, concurrent care, and different regions of the spine being treated.',
      impact: 'Reduced reimbursements from incorrect modifier application',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: ClipboardCheck,
      title: 'Documentation Requirements',
      description: 'Each chiropractic visit requires specific documentation including examination findings, treatment provided, and patient response to care.',
      impact: 'Audit vulnerabilities and claim denials from incomplete documentation',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'Therapy Service Bundling',
      description: 'Understanding which physical therapy modalities can be billed with spinal manipulation and which are bundled by payers.',
      impact: 'Lost revenue from unbilled services or denials for bundled services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Chiropractic Billing Specialists',
      description: 'Our certified coders specialize in chiropractic billing with deep knowledge of CPT codes, modifiers, and payer-specific requirements.',
      benefits: [
        'Expertise in spinal manipulation coding',
        'Knowledge of therapy modality billing',
        'Proper modifier application',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring Systems',
      description: 'Automated tracking of visit frequency, treatment plans, and documentation requirements to ensure compliance with payer policies.',
      benefits: [
        'Frequency limit tracking',
        'Medical necessity alerts',
        'Documentation compliance',
        'Reduced audit risk'
      ]
    },
    {
      icon: FileText,
      title: 'Medical Necessity Support',
      description: 'Comprehensive support for documenting medical necessity with treatment plans, progress notes, and functional outcome measurements.',
      benefits: [
        'Proper documentation guidance',
        'Treatment plan optimization',
        'Progress tracking support',
        'Higher approval rates'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Treatment Plan Optimization',
      description: 'Strategic billing approaches to maximize reimbursements for covered services while managing cash-pay patient accounts.',
      benefits: [
        'Maximized insurance reimbursements',
        'Efficient cash-pay processing',
        'Optimized therapy billing',
        'Improved revenue capture'
      ]
    }
  ];

  const services = [
    {
      icon: Bone,
      title: 'Spinal Manipulation Services',
      description: 'Expert billing for chiropractic manipulative treatment (CMT) including different spinal regions and number of regions treated.',
      features: ['CMT coding (98940-98943)', 'Multiple region billing', 'Extraspinal manipulation', 'Treatment documentation']
    },
    {
      icon: Activity,
      title: 'Physical Therapy Modalities',
      description: 'Comprehensive billing for therapeutic procedures and modalities provided in conjunction with chiropractic care.',
      features: ['Therapeutic exercises', 'Manual therapy', 'Electrical stimulation', 'Ultrasound therapy']
    },
    {
      icon: Stethoscope,
      title: 'Examination Services',
      description: 'Accurate billing for initial examinations, re-examinations, and evaluation and management services.',
      features: ['Initial exam billing', 'Re-examination coding', 'E&M services', 'Diagnostic testing']
    },
    {
      icon: ClipboardCheck,
      title: 'Rehabilitation Services',
      description: 'Specialized billing for therapeutic procedures, rehabilitation programs, and functional restoration care.',
      features: ['Therapeutic activities', 'Neuromuscular re-education', 'Therapeutic procedures', 'Rehabilitation programs']
    }
  ];

  const benefits = [
    { metric: '29%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '94%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '43%', label: 'Reduction in Denials', icon: Shield },
    { metric: '11 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Chiropractic Billing Services | Chiropractic Medical Billing & Coding"
        description="Chiropractic billing for spinal manipulations, therapeutic exercises, and physical modalities. Navigate Medicare limited coverage rules and proper documentation for adjustment billing codes 98940-98943."
        canonical="https://medtransic.com/specialties/chiropractic"
        keywords="chiropractic billing, chiropractor billing services, spinal adjustment billing, chiropractic coding, DC billing"
        ogType="article"
      />
      <HeroSection
        badge={{ icon: Zap, text: "Chiropractic Billing Specialists" }}
        title="Expert Chiropractic Practice Billing Services"
        description="Maximize your chiropractic practice revenue with specialized billing expertise in spinal manipulation coding, therapy modality billing, and medical necessity documentation. Our certified coders understand the unique requirements of chiropractic billing including frequency limitations, modifier usage, and payer-specific compliance requirements."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "94%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "29%", label: "Revenue Increase", icon: TrendingUp },
          { value: "43%", label: "Fewer Denials", icon: Shield },
          { value: "11 Days", label: "Faster Payments", icon: Clock }
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
              Common Chiropractic Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Chiropractic practices face unique billing complexities with frequency limitations,
              medical necessity requirements, and therapy service bundling rules.
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
              How Medtransic Solves Your Chiropractic Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized chiropractic billing solutions address each challenge with
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
              Specialized Chiropractic Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for chiropractic practices
              and wellness centers.
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
                Proven Results for Chiropractic Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized chiropractic billing expertise delivers measurable improvements
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
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's chiropractic billing team has been phenomenal. They understand the
                complexities of spinal manipulation coding and therapy bundling rules that many
                billing companies miss. Our practice revenue increased by 31% while our audit risk
                decreased significantly thanks to their documentation support."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. James Anderson, DC</p>
                <p className="text-amber-600 font-medium">Licensed Chiropractor</p>
                <p className="text-gray-500">Anderson Chiropractic & Wellness Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('chiropractic')} />
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
              Ready to Optimize Your Chiropractic Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our chiropractic billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with frequency limitations
              and medical necessity requirements.
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
                  Call Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Certified Chiropractic Coders</span>
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
    </>
  );
};

export default ChiropracticPage;
