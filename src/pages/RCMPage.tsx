import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
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
  Activity,
  CreditCard,
  Database
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import AggregateRatingSchema from '../components/AggregateRatingSchema';
import HeroSection from '../components/HeroSection';
import RelatedServices from '../components/RelatedServices';
import FAQSchema from '../components/FAQSchema';
import RevenueLeakageCalculator from '../components/RevenueLeakageCalculator';
import DenialRateComparison from '../components/DenialRateComparison';
import PaymentTimelineComparison from '../components/PaymentTimelineComparison';

const RCMPage: React.FC = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'Revenue Leakage',
      description: 'Inefficient processes lead to missed charges, unbilled services, and lost revenue opportunities across the entire patient care cycle.',
      impact: 'Practices lose 10-30% of potential revenue due to gaps in RCM',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Slow Payment Collection',
      description: 'Extended accounts receivable aging and delays in payment posting create cash flow problems and operational strain.',
      impact: 'Average collection time of 45-90 days impacts practice liquidity',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'High Denial Rates',
      description: 'Claim denials from coding errors, missing documentation, or authorization issues require costly rework and appeals.',
      impact: '15-20% of claims denied on first submission in inefficient systems',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Manual Process Inefficiency',
      description: 'Labor-intensive manual tasks for eligibility verification, charge entry, and follow-up drain staff resources.',
      impact: 'High administrative costs and increased risk of human error',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: BarChart3,
      title: 'Limited Financial Visibility',
      description: 'Lack of real-time reporting and analytics prevents proactive decision-making and revenue optimization.',
      impact: 'Unable to identify trends, issues, or opportunities quickly',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      title: 'Patient Billing Confusion',
      description: 'Complex statements and unclear communication lead to patient dissatisfaction and payment delays.',
      impact: 'Poor patient experience damages reputation and collections',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: 'End-to-End RCM Optimization',
      description: 'Comprehensive management of every revenue cycle stage from patient registration through final payment collection.',
      benefits: [
        'Complete oversight of all billing operations',
        'Streamlined workflows reduce cycle time by 40%',
        'Proactive issue identification and resolution',
        'Continuous process improvement and optimization'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced Technology Integration',
      description: 'State-of-the-art RCM software and automation tools integrated seamlessly with your existing EHR/EMR systems.',
      benefits: [
        'Real-time claim scrubbing and validation',
        'Automated eligibility verification and benefits checks',
        'Electronic remittance processing and auto-posting',
        'Intelligent denial management and tracking'
      ]
    },
    {
      icon: Shield,
      title: 'Expert Billing Specialists',
      description: 'Dedicated team of certified medical billing professionals with deep expertise across all specialties.',
      benefits: [
        'CPC-certified coders ensure accuracy',
        '99% clean claim submission rate',
        'Specialty-specific billing knowledge',
        'Continuous training on regulatory updates'
      ]
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics & Reporting',
      description: 'Comprehensive dashboards and reports provide complete visibility into your practice financial performance.',
      benefits: [
        '24/7 access to financial metrics and KPIs',
        'Customizable reports for decision-making',
        'Trend analysis and predictive insights',
        'Transparent performance tracking'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Patient Registration & Eligibility',
      description: 'Verify insurance coverage and benefits before services to prevent claim denials.',
      features: ['Real-time eligibility checks', 'Benefits verification', 'Prior authorization management', 'Patient demographic accuracy']
    },
    {
      icon: CreditCard,
      title: 'Charge Capture & Entry',
      description: 'Accurate and timely charge entry ensures all services are properly billed.',
      features: ['Electronic charge capture', 'Coding validation', 'Fee schedule management', 'Charge reconciliation']
    },
    {
      icon: Activity,
      title: 'Claims Management',
      description: 'Submit clean claims quickly and track status through payment.',
      features: ['Electronic claims submission', 'Real-time claim tracking', 'Automated clearinghouse management', 'Rejection management']
    },
    {
      icon: Database,
      title: 'Payment Posting & Reconciliation',
      description: 'Efficient posting of payments and EOB processing with full reconciliation.',
      features: ['Auto-posting of ERAs', 'Manual payment entry', 'Variance analysis', 'Bank reconciliation support']
    }
  ];

  const benefits = [
    { metric: '30%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '99%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '50%', label: 'Faster Collections', icon: Clock },
    { metric: '24/7', label: 'Performance Monitoring', icon: Activity }
  ];

  const faqs = [
    {
      question: "What is revenue cycle management (RCM) in healthcare?",
      answer: "Revenue cycle management is the financial process healthcare providers use to track patient care from registration through final payment. RCM includes patient scheduling, insurance verification, charge capture, claim submission, payment posting, denial management, and patient billing. Effective RCM maximizes revenue collection and minimizes accounts receivable days."
    },
    {
      question: "How can RCM services improve my practice's revenue?",
      answer: "Professional RCM services increase revenue through accurate coding, faster claim submission, reduced denials, efficient payment posting, and systematic follow-up on unpaid claims. Typical results include 20-30% revenue improvement, 99% clean claim rates, and 40-50% reduction in days in accounts receivable."
    },
    {
      question: "What is a clean claim rate and why does it matter?",
      answer: "Clean claim rate is the percentage of claims accepted by payers on first submission without errors or additional information needed. A clean claim rate above 95% indicates excellent billing accuracy. Higher clean claim rates mean faster payment, less rework, and better cash flow for your practice."
    },
    {
      question: "How long does it take to see results from RCM optimization?",
      answer: "Most practices see measurable improvements within 60-90 days of implementing professional RCM services. Initial focus is on clearing old accounts receivable and reducing denial rates. Long-term benefits including sustained revenue growth and improved cash flow continue to compound over time."
    },
    {
      question: "Do I need to replace my current billing staff to use RCM services?",
      answer: "No. Many practices retain their front-office staff for patient interaction and scheduling while outsourcing back-end RCM functions like coding, claim submission, and follow-up. This hybrid approach lets your team focus on patient care while billing experts handle revenue cycle complexities."
    }
  ];

  return (
    <>
      <SEOHead
        title="RCM Services | Increase Collections 30%"
        description="End-to-end RCM services: 99% clean claims, 50% faster payments, 24/7 monitoring. Certified billing specialists reduce denials & maximize revenue. Free RCM assessment available!"
        canonical="https://medtransic.com/services/rcm"
        keywords="revenue cycle management 2025, RCM services, revenue cycle solutions, healthcare RCM, medical RCM services, RCM optimization, revenue cycle consulting"
        ogType="article"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://medtransic.com/" },
        { name: "Services", url: "https://medtransic.com/services" },
        { name: "Revenue Cycle Management", url: "https://medtransic.com/services/rcm" }
      ]} />
      <AggregateRatingSchema
        name="Medtransic Revenue Cycle Management Services"
        ratingValue={4.9}
        reviewCount={247}
      />
      <HeroSection
        badge={{ icon: TrendingUp, text: 'Revenue Cycle Excellence' }}
        title="Complete Revenue Cycle Management Solutions"
        description="Optimize every stage of your revenue cycle from patient registration to final payment collection. Our comprehensive RCM solutions streamline operations, accelerate cash flow, and maximize revenue while reducing administrative burden on your staff."
        buttons={[
          { text: 'Get Started', href: '/contact', variant: 'primary' },
          { text: 'View Pricing', href: '/pricing', variant: 'secondary' }
        ]}
        stats={[
          { value: '30%', label: 'Average Revenue Increase', icon: TrendingUp },
          { value: '99%', label: 'Clean Claim Rate', icon: CheckCircle },
          { value: '50%', label: 'Faster Collections', icon: Clock },
          { value: '24/7', label: 'Performance Monitoring', icon: Activity }
        ]}
      />
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Common Revenue Cycle Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Healthcare providers face numerous obstacles in managing their revenue cycle effectively,
              leading to lost revenue and operational inefficiencies.
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
          <RevenueLeakageCalculator />
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <DenialRateComparison />
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <PaymentTimelineComparison />
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
              How Medtransic Transforms Your Revenue Cycle
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our comprehensive RCM solutions address every pain point with proven strategies
              and cutting-edge technology.
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
              Comprehensive RCM Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Every component of the revenue cycle managed with precision and expertise.
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
                Proven Results Across All Specialties
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our RCM expertise delivers measurable improvements in revenue, efficiency, and cash flow.
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
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Partnering with Medtransic for our RCM has been transformational. Our collections improved by 35%,
                our A/R days dropped from 65 to 28, and our staff can finally focus on patient care instead of
                billing headaches. The transparency and expertise they bring is unmatched."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Sarah Johnson, MD</p>
                <p className="text-blue-600 font-medium">Practice Owner</p>
                <p className="text-gray-500">Multi-Specialty Medical Group</p>
              </div>
            </div>
          </div>
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
              Ready to Optimize Your Revenue Cycle?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our RCM experts analyze your current processes and show you how we can increase
              your revenue, improve cash flow, and reduce administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free RCM Assessment
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call RCM Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Certified Billing Specialists</span>
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

        <AnimatedSection animation="slideUp" className="mt-24 mb-12">
          <RelatedServices
            services={[
              {
                title: "Medical Billing Services",
                description: "Comprehensive billing services with certified coders for accurate claim submission and payment posting.",
                url: "/services/medical-billing"
              },
              {
                title: "Denial Management",
                description: "Reduce claim denials and maximize revenue recovery with expert denial management strategies.",
                url: "/services/denial-management"
              },
              {
                title: "Medical Coding",
                description: "Professional ICD-10, CPT, and HCPCS coding services to ensure accurate reimbursement.",
                url: "/services/medical-coding"
              }
            ]}
          />
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default RCMPage;
