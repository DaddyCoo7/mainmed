import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Archive,
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
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const OldARCleanupPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: Clock,
      title: 'Timely Filing Expired Claims',
      description: 'Aged accounts beyond payer timely filing limits cannot be billed to insurance, and practices have exhausted internal collection efforts.',
      impact: 'Accounts over 120 days represent $50K-$500K in uncollected revenue',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Unclear Denial Reasons',
      description: 'Old denials lack documentation about the reason for denial, making it difficult to determine if appeals or patient billing are appropriate.',
      impact: 'Without clear denial reasons, recovery probability drops below 10%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Missing or Incomplete Documentation',
      description: 'Old accounts often lack necessary medical records, authorizations, or supporting documentation needed for successful appeals.',
      impact: 'Missing documentation makes 60-70% of aged claims unrecoverable',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'No Resources for Old A/R Work',
      description: 'Current billing staff are too busy with new claims to dedicate time to researching and working aged accounts receivable.',
      impact: 'Aged A/R grows monthly while staff focuses on current claims',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: Archive,
      title: 'Dedicated A/R Recovery Team',
      description: 'Specialized team focuses exclusively on aged accounts with systematic review process and proven recovery strategies.',
      benefits: [
        'Expert collection specialists',
        'Focus solely on aged A/R recovery',
        'Experience with complex old claims',
        'Proven track record of recovery success'
      ]
    },
    {
      icon: Zap,
      title: 'Systematic Account Review',
      description: 'Comprehensive analysis of each aged account to determine collectability, appeal opportunities, and patient balance options.',
      benefits: [
        'Review payer explanation of benefits',
        'Identify recoverable vs write-off accounts',
        'Determine appeal eligibility',
        'Assess patient responsibility options'
      ]
    },
    {
      icon: Shield,
      title: 'Strategic Appeal Process',
      description: 'File timely appeals with supporting documentation for claims with recovery potential, even if outside standard filing limits.',
      benefits: [
        'Identify valid appeal opportunities',
        'Gather necessary supporting documentation',
        'File appeals with proper justification',
        'Follow up until final determination'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Patient Balance Resolution',
      description: 'Convert insurance-denied claims to patient responsibility and implement collection strategies for patient balances.',
      benefits: [
        'Transfer eligible balances to patients',
        'Patient statement and collection efforts',
        'Payment plan options for large balances',
        'Maximize recovery of aged revenue'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Account Analysis & Triage',
      description: 'Comprehensive review of all aged accounts to categorize by collectability and priority for recovery efforts.',
      features: ['Review all accounts 90+ days', 'Categorize by recovery probability', 'Prioritize high-value accounts', 'Identify write-off candidates']
    },
    {
      icon: CheckCircle,
      title: 'Documentation Research',
      description: 'Research and obtain missing medical records, authorizations, and supporting documentation needed for appeals.',
      features: ['Request medical record copies', 'Obtain authorization documentation', 'Compile supporting clinical notes', 'Organize appeal packages']
    },
    {
      icon: BarChart3,
      title: 'Insurance Appeals & Rebilling',
      description: 'File appeals for denied claims with strong recovery potential and attempt rebilling where appropriate.',
      features: ['Prepare detailed appeal letters', 'Submit with supporting documentation', 'Track appeal status and follow up', 'Rebill corrected claims when possible']
    },
    {
      icon: Award,
      title: 'Patient Collection & Write-Off',
      description: 'Convert insurance-denied balances to patient responsibility and systematically write off uncollectable accounts.',
      features: ['Transfer to patient responsibility', 'Send patient statements', 'Attempt collection contacts', 'Proper write-off documentation']
    }
  ];

  const benefits = [
    { metric: '15-25%', label: 'Aged A/R Recovery Rate', icon: TrendingUp },
    { metric: '$85K', label: 'Average Project Recovery', icon: CheckCircle },
    { metric: '90 Days', label: 'Typical Project Timeline', icon: Clock },
    { metric: '100%', label: 'Contingency-Based Pricing', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Old AR Cleanup | Recover 15-25% of Aged A/R"
        description="Recover 15-25% of aged A/R over 120 days with dedicated recovery team. $85K average project recovery in 90 days. Strategic appeals, patient collection. 100% contingency-based pricing!"
        canonical="https://medtransic.com/services/old-ar-cleanup"
        keywords="old AR cleanup, aged accounts recovery, AR recovery services, outstanding balance recovery, old debt collection"
        ogType="article"
      />
      <ServiceSchema
        name="Old A R Cleanup"
        description="Recover 15-25% of aged A/R over 120 days with dedicated recovery team. $85K average project recovery in 90 days. Strategic appeals, patient collection. 100% contingency-based pricing!"
        url="https://medtransic.com/services/old-ar-cleanup"
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
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mr-6">
                <Archive className="w-10 h-10 text-slate-600" />
              </div>
              <span className="text-slate-600 font-semibold text-lg tracking-wide uppercase">
                A/R Recovery Services
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Old A/R Clean-Up Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Review, rework, and recover old or neglected AR accounts for maximum revenue recovery and financial cleanup.
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
              alt="Old A/R Clean-Up Projects services"
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
              Aged accounts receivable represents lost revenue that drains practice finances and requires specialized recovery expertise.
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
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-slate-600" />
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
                  iconColor="text-slate-600"
                  iconBgColor="bg-slate-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 shadow-xl border border-slate-200">
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
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-slate-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "We had $340K in aged A/R that was dragging down our financials. Medtransic's cleanup project recovered
                $72K that we thought was lost forever. They systematically worked every account, filed appeals where
                appropriate, and properly transferred balances to patients. Outstanding results!"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Sarah Thompson</p>
                <p className="text-slate-600 font-medium">Practice Manager</p>
                <p className="text-gray-500">Orthopedic Surgery Practice, Texas</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('old-ar-cleanup')} />
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
                <Link to="/contact" className="bg-slate-600 text-white px-12 py-5 rounded-full hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-slate-600 text-slate-600 px-12 py-5 rounded-full hover:bg-slate-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-slate-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-slate-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-slate-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-slate-600 hover:text-slate-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OldARCleanupPage;
