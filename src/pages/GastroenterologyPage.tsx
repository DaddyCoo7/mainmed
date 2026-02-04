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
  Zap,
  Target,
  Award,
  Stethoscope,
  Monitor,
  Settings,
  BarChart3,
  Microscope,
  Package
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const GastroenterologyPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Endoscopy Coding',
      description: 'Endoscopic procedures require precise CPT coding with multiple modifiers for polyp removal, biopsies, and therapeutic interventions.',
      impact: 'Incorrect coding leads to claim denials and significant revenue loss',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Package,
      title: 'Procedure Bundling Issues',
      description: 'Multiple GI procedures performed during the same session often face bundling challenges and modifier requirements.',
      impact: 'Reduced reimbursement from improper bundling and unbundling',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Prior Authorization Delays',
      description: 'Advanced endoscopic procedures and diagnostic tests require extensive prior authorizations causing treatment delays.',
      impact: 'Delayed patient care and increased administrative burden',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'ASC vs Office Setting Billing',
      description: 'Different reimbursement rates and coding requirements for procedures performed in ASC versus office settings.',
      impact: 'Revenue leakage from incorrect facility coding',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Microscope,
      title: 'Pathology Coordination',
      description: 'Managing biopsy specimens and coordinating pathology billing for tissue samples collected during procedures.',
      impact: 'Lost pathology revenue from poor coordination',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: BarChart3,
      title: 'Screening vs Diagnostic Coding',
      description: 'Critical distinction between screening and diagnostic colonoscopies affects coverage and patient responsibility.',
      impact: 'Increased claim denials and patient billing disputes',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const solutions = [
    {
      icon: Activity,
      title: 'GI-Certified Coding Experts',
      description: 'Our team includes specialized coders with extensive training in gastroenterology procedures and CPT coding.',
      benefits: [
        'Accurate endoscopy and colonoscopy coding',
        'Expertise in therapeutic procedure modifiers',
        'Knowledge of polyp removal and biopsy coding',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Procedure Optimization',
      description: 'Maximize reimbursements through proper bundling management and modifier application for multiple procedures.',
      benefits: [
        'Optimized bundling and unbundling strategies',
        'Correct modifier usage for multiple procedures',
        'Higher reimbursement per procedure session',
        'Reduced payer audit risks'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Excellence',
      description: 'Comprehensive revenue cycle management specifically designed for gastroenterology practices.',
      benefits: [
        'Faster claim submission and payment',
        'Reduced accounts receivable aging',
        'Improved cash flow management',
        'Detailed financial analytics'
      ]
    },
    {
      icon: Monitor,
      title: 'Real-Time Authorization Management',
      description: 'Dedicated team handles all prior authorization requirements for GI procedures and diagnostic tests.',
      benefits: [
        'Faster approval times for procedures',
        'Reduced administrative burden',
        'Higher approval rates',
        'Streamlined scheduling process'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Colonoscopy Billing',
      description: 'Expert billing for screening and diagnostic colonoscopies with proper screening-to-diagnostic conversion.',
      features: ['Screening colonoscopy coding', 'Diagnostic procedure billing', 'Polyp removal coding', 'High-risk screening management']
    },
    {
      icon: Microscope,
      title: 'Upper Endoscopy (EGD)',
      description: 'Specialized billing for upper GI endoscopy procedures including biopsies and therapeutic interventions.',
      features: ['EGD procedure coding', 'Biopsy billing', 'Dilation procedures', 'Foreign body removal']
    },
    {
      icon: Zap,
      title: 'Advanced Procedures',
      description: 'Complex billing for ERCP, EUS, and other advanced endoscopic procedures.',
      features: ['ERCP billing', 'Endoscopic ultrasound', 'Capsule endoscopy', 'Advanced therapeutic procedures']
    },
    {
      icon: FileText,
      title: 'GI Lab Services',
      description: 'Comprehensive billing for in-office and ASC-based GI lab services and diagnostics.',
      features: ['Facility fee billing', 'Anesthesia coordination', 'Pathology management', 'Multi-location support']
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
        title="Gastroenterology Billing | GI & Endoscopy Coding Services"
        description="Specialized gastroenterology billing for endoscopy procedures, colonoscopies, and GI treatments. Expert coding for complex gastrointestinal procedures."
        canonical="https://medtransic.com/specialties/gastroenterology"
        keywords="gastroenterology billing, GI billing, endoscopy billing, colonoscopy billing, gastrointestinal billing, digestive health billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Gastroenterology"
        description="Specialized gastroenterology billing for endoscopy procedures, colonoscopies, and GI treatments. Expert coding for complex gastrointestinal procedures."
        url="https://medtransic.com/specialties/gastroenterology"
      />
      <HeroSection
        badge={{
          icon: Activity,
          text: "Gastroenterology Billing Specialists"
        }}
        title="Expert Gastroenterology Medical Billing Services"
        description="Maximize your GI practice revenue with specialized billing expertise. Our certified coders understand the complexities of endoscopy procedures, colonoscopy billing, and advanced therapeutic interventions."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "28%", label: "Revenue Increase", icon: TrendingUp },
          { value: "97%", label: "Clean Claim Rate", icon: CheckCircle },
          { value: "45%", label: "Fewer Denials", icon: Shield },
          { value: "12 Days", label: "Faster Payment", icon: Clock }
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
              Common Gastroenterology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GI practices face unique billing complexities that can significantly impact
              revenue and operational efficiency.
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
              How Medtransic Solves Your GI Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized gastroenterology billing solutions address each pain point with
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
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-teal-600" />
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
              Specialized Gastroenterology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for GI practices
              and endoscopy centers.
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
                  iconColor="text-teal-600"
                  iconBgColor="bg-teal-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-12 shadow-xl border border-teal-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Gastroenterology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized GI billing expertise delivers measurable improvements
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
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's GI billing expertise transformed our practice. Their deep understanding
                of endoscopy coding and procedure bundling increased our revenue by 32% while eliminating
                the administrative headaches we faced with our previous billing company."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Chen, MD</p>
                <p className="text-teal-600 font-medium">Gastroenterologist</p>
                <p className="text-gray-500">Advanced Digestive Care Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('gastroenterology')} />
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
              Ready to Optimize Your GI Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our gastroenterology billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free GI Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call GI Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">GI-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-teal-600 hover:text-teal-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default GastroenterologyPage;
