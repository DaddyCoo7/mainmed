import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calculator,
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
  CreditCard,
  ClipboardCheck,
  TrendingUp
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import AggregateRatingSchema from '../components/AggregateRatingSchema';
import RelatedServices from '../components/RelatedServices';
import FAQSection from '../components/FAQSection';
import { getRelatedLinks } from '../config/internalLinks';
import { useFAQs } from '../hooks/useFAQs';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const MedicalBillingPage: React.FC = () => {
  const { faqs, loading: faqsLoading } = useFAQs('general');

  usePrerenderReady(!faqsLoading);

  const painPoints = [
    {
      icon: FileText,
      title: 'Coding Errors & Inaccuracies',
      description: 'Incorrect CPT, ICD-10, or HCPCS codes lead to claim rejections, underpayments, and compliance issues.',
      impact: 'Up to 80% of medical bills contain errors costing practices thousands',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Delayed Claim Submissions',
      description: 'Manual billing processes cause delays in claim submission, extending time to payment and hurting cash flow.',
      impact: 'Average 30-45 day delay increases accounts receivable aging',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Lost Revenue from Denials',
      description: 'Claim denials due to billing errors result in significant revenue loss and require costly rework.',
      impact: 'Practices lose 5-10% of revenue to preventable denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Compliance & Audit Risks',
      description: 'Improper billing practices expose practices to audits, penalties, and potential fraud allegations.',
      impact: 'Non-compliance can result in substantial fines and legal issues',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Staff Training & Turnover',
      description: 'Constant updates to billing regulations require ongoing training, and turnover creates knowledge gaps.',
      impact: 'High costs for hiring, training, and productivity loss',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Lack of Billing Transparency',
      description: 'Limited visibility into billing metrics and performance prevents proactive management.',
      impact: 'Unable to identify issues or optimize billing processes',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Calculator,
      title: 'Expert Medical Billing Team',
      description: 'Dedicated team of certified billing specialists with extensive experience across all medical specialties.',
      benefits: [
        'CPC-certified professional coders',
        'Specialty-specific billing expertise',
        'Continuous training on regulatory updates',
        'Average 15+ years industry experience'
      ]
    },
    {
      icon: Zap,
      title: 'Advanced Billing Technology',
      description: 'State-of-the-art billing software with automated claim scrubbing and validation before submission.',
      benefits: [
        'Real-time claim validation and error detection',
        'Electronic claim submission to all payers',
        'Automated follow-up and status tracking',
        'Integrated with all major EHR systems'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Quality Assurance',
      description: 'Rigorous quality control processes ensure billing accuracy and full regulatory compliance.',
      benefits: [
        'Multi-level claim review before submission',
        'HIPAA-compliant data handling',
        'Regular compliance audits',
        'Adherence to payer-specific requirements'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Proactive strategies to maximize reimbursements and accelerate payment collection.',
      benefits: [
        'Identify and capture missed charges',
        'Optimize coding for maximum reimbursement',
        'Reduce claim denial rates below 5%',
        'Decrease A/R days by 40%+'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Claims Preparation',
      description: 'Accurate coding and thorough documentation review ensure clean claim submission.',
      features: ['CPT/ICD-10 coding', 'Documentation review', 'Modifier application', 'Claim scrubbing']
    },
    {
      icon: CreditCard,
      title: 'Electronic Submission',
      description: 'Fast electronic claim submission to all insurance payers with real-time tracking.',
      features: ['EDI claim transmission', 'Clearinghouse management', 'Submission tracking', 'Status monitoring']
    },
    {
      icon: ClipboardCheck,
      title: 'Payment Posting',
      description: 'Timely and accurate posting of all payments, adjustments, and denials.',
      features: ['ERA auto-posting', 'Payment reconciliation', 'Adjustment tracking', 'Variance analysis']
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analytics',
      description: 'Comprehensive reporting on billing performance, collections, and key metrics.',
      features: ['Custom dashboards', 'KPI tracking', 'Trend analysis', 'Performance reports']
    }
  ];

  const heroStats = [
    { value: '99%', label: 'Clean Claim Rate', icon: CheckCircle },
    { value: '25%', label: 'Revenue Increase', icon: TrendingUp },
    { value: '60%', label: 'Faster Payments', icon: Clock },
    { value: '<5%', label: 'Denial Rate', icon: Shield }
  ];

  const benefits = [
    { icon: CheckCircle, metric: '99%', label: 'Clean Claim Rate' },
    { icon: TrendingUp, metric: '25%', label: 'Revenue Increase' },
    { icon: Clock, metric: '60%', label: 'Faster Payments' },
    { icon: Shield, metric: '<5%', label: 'Denial Rate' }
  ];

  return (
    <>
      <SEOHead
        title="Medical Billing Solutions | Certified Coders | 99% Rate"
        description="Expert medical billing services with CPC-certified coders increase revenue 25%. Accurate CPT/ICD-10 coding, under 5% denial rate, 60% faster payments. HIPAA-compliant. Free billing analysis!"
        canonical="https://medtransic.com/services/medical-billing"
        keywords="professional medical billing, healthcare billing solutions, medical billing companies, certified medical coders, CPT coding, ICD-10 coding, medical claims processing, practice billing services"
        ogType="article"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://medtransic.com/" },
        { name: "Services", url: "https://medtransic.com/services" },
        { name: "Medical Billing", url: "https://medtransic.com/services/medical-billing" }
      ]} />
      <AggregateRatingSchema
        name="Medtransic Medical Billing Services"
        ratingValue={4.9}
        reviewCount={312}
      />

      <HeroSection
        badge={{
          icon: Calculator,
          text: "Medical Billing Excellence"
        }}
        title="Professional Medical Billing Services"
        description="Accurate, compliant billing for all medical specialties. Our certified billing specialists ensure claims are correctly coded, submitted promptly, and reimbursed at the highest allowable rates."
        buttons={[
          { text: "Start Your Free Consultation", href: "/contact", variant: "primary" },
          { text: "View Pricing", href: "/pricing", variant: "secondary" }
        ]}
        stats={heroStats}
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
              Common Medical Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Medical practices struggle with complex billing requirements that impact revenue and compliance.
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
              How Medtransic Delivers Billing Excellence
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our comprehensive billing solutions combine expert staff, advanced technology, and proven processes.
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

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Complete Medical Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              End-to-end billing management from claim creation through payment collection.
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
                Proven Medical Billing Results
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our billing expertise delivers measurable improvements in revenue and efficiency.
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
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's billing team has been exceptional. Our claim denial rate dropped from 18% to under 4%,
                and we're collecting 30% more revenue. Their attention to detail and proactive communication gives
                us complete confidence in our billing operations."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Robert Chen, MD</p>
                <p className="text-green-600 font-medium">Family Medicine Physician</p>
                <p className="text-gray-500">Primary Care Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                The Benefits for Your Practice
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Professional medical billing services deliver measurable results that transform your practice finances
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Increase Collections 15-25%</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Expert billing and follow-up recovers more revenue from every claim. Faster submission, fewer denials, and persistent follow-up maximize your practice income.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Reduce Operating Costs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Save 30-50% compared to in-house billing staff. Eliminate costs for salaries, benefits, training, software, and office space while improving performance.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Faster Payment Cycles</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reduce days in A/R from 50-60 days to 30-35 days. Clean claims, prompt submission, and expert follow-up accelerate cash flow for better financial stability.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Focus on Patient Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Free your clinical staff from billing tasks. Invest time in patient care, practice growth, and provider satisfaction instead of administrative burden.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Complete Compliance Assurance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Stay current with HIPAA, coding updates, and payer requirements without constant training. Expert teams manage compliance so you don't have to worry.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Transparent Performance Reporting</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Access real-time dashboards and detailed reports on collections, denials, and revenue trends. Make informed decisions with complete financial visibility.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('medical-billing')} />
        </AnimatedSection>

        {!faqsLoading && faqs.length > 0 && (
          <FAQSection faqs={faqs} specialtyName="Medical Billing" />
        )}

        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Improve Your Medical Billing?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our billing experts show you how we can increase your revenue, reduce denials,
              and free your staff to focus on patient care.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Billing Analysis
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-green-600 text-green-600 px-12 py-5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Billing Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Certified Professional Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">All Specialties Supported</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default MedicalBillingPage;
