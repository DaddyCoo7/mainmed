import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot,
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
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';

const RCMAutomationPage: React.FC = () => {

  const painPoints = [
    {
      icon: Clock,
      title: 'Time-Consuming Manual Processes',
      description: 'Staff spend hours on repetitive tasks like eligibility checks, claim scrubbing, payment posting, and denial tracking that could be automated.',
      impact: 'Manual processes consume 40-50% of billing staff time',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'High Human Error Rates',
      description: 'Manual data entry and repetitive tasks lead to costly errors in patient demographics, coding, charge entry, and payment posting.',
      impact: 'Human errors cause 15-20% of claim denials',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Users,
      title: 'Inability to Scale Operations',
      description: 'Manual processes cannot scale with practice growth without hiring additional staff, increasing overhead costs exponentially.',
      impact: 'Each 20% growth requires 1-2 additional FTEs at $40K-$60K each',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'Limited Staff Productivity',
      description: 'Staff focused on data entry and routine tasks cannot dedicate time to high-value activities like denial appeals and A/R follow-up.',
      impact: 'Low-value tasks prevent staff from recovering 20-30% more revenue',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: Bot,
      title: 'Robotic Process Automation (RPA)',
      description: 'Software bots handle repetitive, rule-based tasks like eligibility verification, claim status checks, and data entry with 100% accuracy.',
      benefits: [
        'Automated eligibility verification',
        'Real-time claim status checking',
        'Automated payment posting',
        '24/7 operation without breaks'
      ]
    },
    {
      icon: Zap,
      title: 'AI-Powered Coding Assistance',
      description: 'Artificial intelligence analyzes clinical documentation and suggests appropriate CPT and ICD-10 codes to improve accuracy and speed.',
      benefits: [
        'Computer-assisted coding suggestions',
        'Real-time coding validation',
        'Reduced coding errors and denials',
        'Increased coder productivity by 30%'
      ]
    },
    {
      icon: Shield,
      title: 'Intelligent Workflow Automation',
      description: 'Smart automation routes claims, denials, and tasks to the right person at the right time based on rules and priorities.',
      benefits: [
        'Automatic work queue distribution',
        'Priority-based task routing',
        'Bottleneck identification and resolution',
        'Reduced claim processing time'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Insights',
      description: 'Machine learning identifies patterns in denials, underpayments, and inefficiencies to prevent future revenue loss.',
      benefits: [
        'Denial prediction and prevention',
        'Underpayment detection algorithms',
        'Revenue optimization recommendations',
        'Proactive issue identification'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Front-End Automation',
      description: 'Automate patient registration, eligibility verification, authorization tracking, and pre-service collection processes.',
      features: ['Real-time eligibility checks', 'Automated authorization tracking', 'Point-of-service payment collection', 'Insurance verification bots']
    },
    {
      icon: CheckCircle,
      title: 'Claim Submission Automation',
      description: 'Automated claim scrubbing, validation, and electronic submission with minimal human intervention.',
      features: ['Pre-submission claim validation', 'Automated error correction', 'Direct electronic submission', 'Rejection prevention logic']
    },
    {
      icon: BarChart3,
      title: 'Payment & Posting Automation',
      description: 'Automatic ERA download, payment posting, adjustment calculations, and reconciliation without manual data entry.',
      features: ['Electronic remittance automation', 'Auto-posting with validation', 'Variance detection and alerts', 'Bank reconciliation automation']
    },
    {
      icon: Award,
      title: 'Denial Management Automation',
      description: 'Intelligent denial categorization, root cause analysis, and automated appeal generation for common denial types.',
      features: ['Automatic denial categorization', 'Root cause identification', 'Appeal letter generation', 'Denial trend analytics']
    }
  ];

  const benefits = [
    { metric: '60%', label: 'Reduction in Manual Tasks', icon: TrendingUp },
    { metric: '99.8%', label: 'Process Accuracy', icon: CheckCircle },
    { metric: '75%', label: 'Faster Claim Processing', icon: Clock },
    { metric: '40%', label: 'Cost Savings on Labor', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="RCM Automation Services | Revenue Cycle Technology Solutions"
        description="AI-powered RCM automation reduces manual tasks 60%, achieves 99.8% accuracy, processes claims 75% faster. 40% labor cost savings. Robotic eligibility checks, smart denial prediction, auto-posting!"
        canonical="https://medtransic.com/services/rcm-automation"
        keywords="RCM automation, revenue cycle automation, billing automation, healthcare automation, medical billing technology"
        ogType="article"
      />
      <ServiceSchema
        name="R C M Automation"
        description="AI-powered RCM automation reduces manual tasks 60%, achieves 99.8% accuracy, processes claims 75% faster. 40% labor cost savings. Robotic eligibility checks, smart denial prediction, auto-posting!"
        url="https://medtransic.com/services/rcm-automation"
        serviceType="Medical Billing Service"
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
              <div className="w-20 h-20 bg-fuchsia-100 rounded-2xl flex items-center justify-center mr-6">
                <Bot className="w-10 h-10 text-fuchsia-600" />
              </div>
              <span className="text-fuchsia-600 font-semibold text-lg tracking-wide uppercase">
                RPA Integration
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            RCM Process Automation
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Integrate robotic process automation to streamline claim validation, posting, and tracking for faster cycle times.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="RCM Process Automation services"
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
              Manual RCM processes are inefficient, error-prone, and prevent practices from scaling operations effectively.
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
                    <div className="w-16 h-16 bg-fuchsia-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-fuchsia-600" />
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
                  iconColor="text-fuchsia-600"
                  iconBgColor="bg-fuchsia-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-2xl p-12 shadow-xl border border-fuchsia-200">
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
                  <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-fuchsia-600" />
                  </div>
                  <div className="text-3xl font-bold text-fuchsia-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-fuchsia-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "RPA implementation reduced our eligibility verification time from 20 hours/week to just 2 hours.
                AI-assisted coding increased our coding accuracy to 98% and our coders are 35% more productive.
                Automation has transformed our revenue cycle from labor-intensive to technology-driven."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">David Rodriguez</p>
                <p className="text-fuchsia-600 font-medium">CFO</p>
                <p className="text-gray-500">Regional Hospital System, Arizona</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('rcm-automation')} />
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
                <Link to="/contact" className="bg-fuchsia-600 text-white px-12 py-5 rounded-full hover:bg-fuchsia-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-fuchsia-600 text-fuchsia-600 px-12 py-5 rounded-full hover:bg-fuchsia-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-fuchsia-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-fuchsia-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-fuchsia-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-fuchsia-600 hover:text-fuchsia-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RCMAutomationPage;
