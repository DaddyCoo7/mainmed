import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase,
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

const PracticeManagementConsultingPage: React.FC = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'Revenue Leakage & Inefficiency',
      description: 'Practices lack visibility into where revenue is being lost through coding errors, missed charges, underpayments, and process inefficiencies.',
      impact: 'Most practices lose 10-15% of potential revenue from preventable issues',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Inefficient Workflows & Processes',
      description: 'Outdated workflows, redundant steps, and poor system integration waste staff time and reduce productivity across the practice.',
      impact: 'Workflow inefficiencies cost practices 20-30% in staff productivity',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Users,
      title: 'Staff Performance & Training Gaps',
      description: 'Staff lack proper training, clear performance standards, and accountability metrics, leading to inconsistent quality and errors.',
      impact: 'Undertrained staff make costly mistakes and miss revenue opportunities',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Target,
      title: 'Lack of Strategic Direction',
      description: 'Practices operate reactively without clear financial goals, growth strategies, or plans to improve revenue cycle performance.',
      impact: 'Without strategy, practices miss growth opportunities and optimization',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: Briefcase,
      title: 'Comprehensive Practice Assessment',
      description: 'In-depth analysis of all revenue cycle operations, workflows, and financial performance to identify specific improvement opportunities.',
      benefits: [
        'Complete operational assessment',
        'Revenue cycle performance analysis',
        'Workflow and process evaluation',
        'Detailed findings and recommendations'
      ]
    },
    {
      icon: Zap,
      title: 'Workflow Optimization & Redesign',
      description: 'Streamline and improve processes to eliminate redundancies, reduce errors, and increase staff productivity.',
      benefits: [
        'Process mapping and optimization',
        'Eliminate redundant steps',
        'Implement best practices',
        'Technology integration recommendations'
      ]
    },
    {
      icon: Shield,
      title: 'Revenue Enhancement Strategies',
      description: 'Identify and implement specific strategies to maximize revenue through better coding, charge capture, and payment optimization.',
      benefits: [
        'Coding and charge capture review',
        'Underpayment identification',
        'Fee schedule optimization',
        'Revenue recovery strategies'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning & Goal Setting',
      description: 'Develop clear financial goals, KPIs, and action plans to improve revenue cycle performance and practice profitability.',
      benefits: [
        'Financial goal development',
        'KPI identification and tracking',
        'Action plan creation',
        'Ongoing performance monitoring'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Operational Assessment',
      description: 'Comprehensive evaluation of current operations, identifying inefficiencies, revenue leakage, and improvement opportunities.',
      features: ['Revenue cycle audit', 'Process documentation review', 'Staff interview and assessment', 'Technology evaluation']
    },
    {
      icon: CheckCircle,
      title: 'Performance Benchmarking',
      description: 'Compare practice performance against industry standards and identify specific areas for improvement.',
      features: ['Industry benchmark comparison', 'KPI analysis', 'Best practice identification', 'Gap analysis and prioritization']
    },
    {
      icon: BarChart3,
      title: 'Implementation Support',
      description: 'Hands-on assistance implementing recommended changes, including process redesign and staff training.',
      features: ['Change management support', 'Process implementation', 'Staff training programs', 'Technology optimization']
    },
    {
      icon: Award,
      title: 'Ongoing Advisory Services',
      description: 'Continued consultation and support to ensure sustained improvements and address new challenges.',
      features: ['Quarterly performance reviews', 'Strategic guidance', 'Problem resolution support', 'Industry update briefings']
    }
  ];

  const benefits = [
    { metric: '18%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '35%', label: 'Efficiency Improvement', icon: CheckCircle },
    { metric: '25%', label: 'Cost Reduction', icon: Clock },
    { metric: '90 Days', label: 'Results Timeline', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Practice Management Consulting 2025 | Boost Revenue 18% in 90 Days"
        description="Healthcare consulting experts optimize workflows & increase profitability. 35% efficiency gains, 25% cost reduction, proven strategies. Free practice assessment for medical practices!"
        canonical="https://medtransic.com/services/practice-management-consulting"
        keywords="practice management consulting 2025, medical practice consulting, healthcare consulting, practice optimization, business consulting, workflow optimization, practice assessment"
        ogType="article"
      />
      <ServiceSchema
        name="Practice Management Consulting"
        description="Healthcare consulting experts optimize workflows & increase profitability. 35% efficiency gains, 25% cost reduction, proven strategies. Free practice assessment for medical practices!"
        url="https://medtransic.com/services/practice-management-consulting"
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
              <div className="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mr-6">
                <Briefcase className="w-10 h-10 text-neutral-600" />
              </div>
              <span className="text-neutral-600 font-semibold text-lg tracking-wide uppercase">
                Workflow Optimization
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Practice Management Consulting
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Analyze existing workflows to identify inefficiencies, revenue leakage, and opportunities for operational improvement.
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
              alt="Practice Management Consulting services"
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
              Practice management challenges prevent providers from achieving optimal financial performance and operational efficiency.
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
                    <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-neutral-600" />
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
                  iconColor="text-neutral-600"
                  iconBgColor="bg-neutral-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-12 shadow-xl border border-neutral-200">
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
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-neutral-600" />
                  </div>
                  <div className="text-3xl font-bold text-neutral-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-neutral-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "The practice assessment identified $280K in annual revenue we were leaving on the table. After implementing
                their workflow recommendations and coding improvements, we increased collections by 22% in just six months.
                Best investment we've made in our practice."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Lisa Patel</p>
                <p className="text-neutral-600 font-medium">Owner & Medical Director</p>
                <p className="text-gray-500">Family Medicine Practice, Georgia</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('practice-management-consulting')} />
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
                <Link to="/contact" className="bg-neutral-600 text-white px-12 py-5 rounded-full hover:bg-neutral-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-neutral-600 text-neutral-600 px-12 py-5 rounded-full hover:bg-neutral-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-neutral-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-neutral-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-neutral-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-neutral-600 hover:text-neutral-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PracticeManagementConsultingPage;
