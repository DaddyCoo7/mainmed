import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor,
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

const RehabilitationSportsMedicinePage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex CPT Code Selection',
      description: 'Sports medicine involves multiple CPT code ranges (97000-97799 for therapy, 20000-29999 for orthopedic procedures) requiring precise selection.',
      impact: 'Incorrect code selection leads to underpayment or denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Medicare Therapy Cap Management',
      description: 'Navigating therapy caps, KX modifiers, and medical necessity documentation for services exceeding thresholds.',
      impact: 'Lost revenue when caps are exceeded without proper documentation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Multiple Modality Billing',
      description: 'Properly billing for multiple therapeutic modalities in one session with correct time-based and service-based codes.',
      impact: 'Bundling issues and payment reductions from improper coding',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Functional Outcome Reporting',
      description: 'G-code reporting requirements for functional limitations and improvement tracking in therapy services.',
      impact: 'Claim denials for missing or incorrect G-code reporting',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Athletic Training Services',
      description: 'Billing challenges for athletic training, sports performance, and preventive services not always covered by insurance.',
      impact: 'Confusion over covered vs non-covered services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Orthopedic Procedure Bundling',
      description: 'Understanding NCCI edits and bundling rules for sports injury repairs, arthroscopy, and rehabilitation procedures.',
      impact: 'Payment denials from bundling violations',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const solutions = [
    {
      icon: Activity,
      title: 'Sports Medicine Billing Experts',
      description: 'Our team specializes in sports medicine and rehabilitation billing with expertise in therapy codes, orthopedic procedures, and athletic care.',
      benefits: [
        'Expert CPT 97000-97799 and 20000-29999 coding',
        'Medicare therapy cap navigation',
        'Functional outcome reporting (G-codes)',
        'Sports injury documentation optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Therapy Compliance Management',
      description: 'Navigate complex therapy regulations, KX modifiers, and medical necessity documentation requirements.',
      benefits: [
        'KX modifier application for therapy caps',
        'Plan of care documentation review',
        'Progress note compliance verification',
        'Medical necessity justification support'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Maximization',
      description: 'Optimize sports medicine and rehabilitation reimbursements through proper code selection and bundling strategies.',
      benefits: [
        'Multiple modality billing optimization',
        'Time-based vs service-based code selection',
        'NCCI edit compliance',
        'Evaluation and re-evaluation billing'
      ]
    },
    {
      icon: Target,
      title: 'Specialized Service Billing',
      description: 'Expert billing for diverse sports medicine services from rehabilitation to performance training and injury prevention.',
      benefits: [
        'Athletic training services billing',
        'Sports performance program billing',
        'Manual therapy and manipulation codes',
        'Therapeutic exercise and activity billing'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Physical Therapy Services',
      description: 'Expert billing for therapeutic exercises, manual therapy, and modality-based treatments.',
      features: ['Therapeutic exercise (97110)', 'Manual therapy (97140)', 'Neuromuscular re-education (97112)', 'Therapeutic activities (97530)']
    },
    {
      icon: FileText,
      title: 'Orthopedic Procedures',
      description: 'Specialized billing for sports injury repairs, joint injections, and minor orthopedic surgeries.',
      features: ['Joint injections (20600-20611)', 'Arthroscopy procedures', 'Fracture care coding', 'Casting and splinting']
    },
    {
      icon: Target,
      title: 'Athletic Training',
      description: 'Comprehensive billing for athletic training services, sports performance, and injury prevention programs.',
      features: ['Athletic training evaluations', 'Sports-specific rehab', 'Performance optimization', 'Injury prevention programs']
    },
    {
      icon: Users,
      title: 'Rehabilitation Programs',
      description: 'Complete billing for comprehensive rehabilitation programs including work conditioning and functional capacity.',
      features: ['Work hardening programs', 'Functional capacity evaluations', 'Community reintegration', 'Aquatic therapy']
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
        title="Sports Medicine Billing Services | Rehabilitation Medical Billing"
        description="Specialized sports medicine and rehabilitation billing services. Expert coding for sports injuries, athletic training, and rehab programs."
        canonical="https://medtransic.com/specialties/rehabilitation-sports-medicine"
        keywords="sports medicine billing, rehabilitation billing, sports injury billing, athletic training billing, sports rehab billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Rehabilitation Sports Medicine"
        description="Specialized sports medicine and rehabilitation billing services. Expert coding for sports injuries, athletic training, and rehab programs."
        url="https://medtransic.com/specialties/rehabilitation-sports-medicine"
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
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                <Activity className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                Sports Medicine & Rehabilitation Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Sports Medicine & Rehabilitation Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your sports medicine and rehabilitation revenue with specialized billing expertise. Our team
            understands complex therapy codes, orthopedic procedures, athletic training services, and Medicare therapy
            caps to ensure optimal reimbursement for your sports medicine practice.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/6111613/pexels-photo-6111613.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sports medicine physical therapy rehabilitation session"
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
              Common Sports Medicine & Rehabilitation Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sports medicine and rehabilitation practices face unique billing complexities with therapy caps,
              multiple modalities, and complex orthopedic procedure coding.
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
              How Medtransic Solves Your Sports Medicine Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized sports medicine and rehabilitation billing solutions address each challenge with
              expert coding knowledge and proven methodologies.
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
              Specialized Sports Medicine & Rehabilitation Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for sports medicine providers,
              rehabilitation clinics, and athletic training facilities.
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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 shadow-xl border border-blue-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Sports Medicine & Rehabilitation Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized sports medicine and rehabilitation billing expertise delivers measurable improvements
                in revenue and compliance.
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's sports medicine billing expertise transformed our practice. They navigate the complex
                therapy codes, handle Medicare caps seamlessly, and ensure we maximize reimbursement for every service.
                Our rehabilitation revenue increased by 28% in the first year."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Michael Rodriguez, PT, DPT</p>
                <p className="text-blue-600 font-medium">Practice Owner</p>
                <p className="text-gray-500">Elite Sports Medicine & Rehabilitation</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('rehabilitation-sports-medicine')} />
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
              Ready to Optimize Your Sports Medicine Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our sports medicine and rehabilitation billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring full compliance.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Sports Medicine Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Sports Medicine Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Sports Medicine Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RehabilitationSportsMedicinePage;
