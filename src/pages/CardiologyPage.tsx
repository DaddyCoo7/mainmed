import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
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
  Monitor,
  Settings,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import FAQSection from '../components/FAQSection';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { useFAQs } from '../hooks/useFAQs';

const CardiologyPage: React.FC = () => {
  const { faqs, loading: faqsLoading } = useFAQs('cardiology');
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex Procedure Coding',
      description: 'Cardiology procedures require precise CPT coding for diagnostic tests, interventional procedures, and device implantations.',
      impact: 'Incorrect coding leads to claim denials and revenue loss',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Prior Authorization Delays',
      description: 'Cardiac procedures often require extensive prior authorizations, causing treatment delays and administrative burden.',
      impact: 'Delayed patient care and increased administrative costs',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'High-Value Claim Denials',
      description: 'Cardiac procedures are high-value, making denials particularly costly for practice revenue.',
      impact: 'Significant financial impact from denied expensive procedures',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Global Period Management',
      description: 'Managing global periods for surgical procedures and avoiding bundling issues with follow-up care.',
      impact: 'Lost revenue from unbillable services during global periods',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Device & Implant Billing',
      description: 'Complex billing for pacemakers, defibrillators, and other cardiac devices with specific coding requirements.',
      impact: 'Underbilling or denials for expensive device procedures',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Multiple Payer Requirements',
      description: 'Different insurance companies have varying requirements for cardiac procedure documentation and coding.',
      impact: 'Increased claim rejections due to payer-specific requirements',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Heart,
      title: 'Cardiology-Certified Coders',
      description: 'Our team includes certified coders with specialized training in cardiovascular procedures and coding.',
      benefits: [
        'Accurate CPT and ICD-10 coding for all cardiac procedures',
        'Expertise in interventional cardiology billing',
        'Knowledge of device-specific coding requirements',
        'Reduced coding errors and claim denials'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorization requirements for cardiac procedures and diagnostics.',
      benefits: [
        'Faster approval times for urgent procedures',
        'Reduced administrative burden on clinical staff',
        'Higher approval rates through proper documentation',
        'Streamlined patient scheduling process'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Maximize reimbursements through proper coding, documentation, and denial management.',
      benefits: [
        'Increased revenue per procedure',
        'Faster payment collection',
        'Reduced accounts receivable aging',
        'Improved cash flow management'
      ]
    },
    {
      icon: Monitor,
      title: 'Real-Time Claim Tracking',
      description: 'Advanced technology platform provides real-time visibility into claim status and payments.',
      benefits: [
        '24/7 access to billing dashboard',
        'Automated denial alerts and follow-up',
        'Detailed financial reporting',
        'Performance analytics and insights'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Diagnostic Cardiology Billing',
      description: 'Expert billing for EKGs, echocardiograms, stress tests, and cardiac catheterizations.',
      features: ['EKG interpretation billing', 'Echo and stress test coding', 'Holter monitor billing', 'Nuclear cardiology procedures']
    },
    {
      icon: Zap,
      title: 'Interventional Procedures',
      description: 'Specialized billing for angioplasty, stent placement, and other interventional procedures.',
      features: ['PCI procedure coding', 'Stent and device billing', 'Balloon angioplasty', 'Atherectomy procedures']
    },
    {
      icon: Settings,
      title: 'Device Implantation',
      description: 'Complex billing for pacemaker, ICD, and CRT device implantations and follow-ups.',
      features: ['Pacemaker implantation', 'ICD placement and programming', 'CRT device billing', 'Device interrogation']
    },
    {
      icon: FileText,
      title: 'Electrophysiology',
      description: 'Specialized billing for EP studies, ablations, and arrhythmia management.',
      features: ['EP study billing', 'Catheter ablation procedures', 'Arrhythmia monitoring', 'Loop recorder implantation']
    }
  ];

  const benefits = [
    { metric: '25%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '40%', label: 'Reduction in Denials', icon: Shield },
    { metric: '15 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Cardiology Billing | Cardiac Procedures & Devices"
        description="Specialized cardiology medical billing services with expert coders for cardiac procedures, device implantations, and interventional cardiology. Increase revenue by 25% with our certified billing specialists."
        canonical="https://medtransic.com/specialties/cardiology"
        keywords="cardiology billing, cardiac billing services, interventional cardiology billing, cardiology coding, EKG billing, echocardiogram billing, pacemaker billing, ICD billing, cardiac catheterization billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Cardiology"
        description="Specialized cardiology medical billing services with expert coders for cardiac procedures, device implantations, and interventional cardiology. Increase revenue by 25% with our certified billing specialists."
        url="https://medtransic.com/specialties/cardiology"
      />
      <HeroSection
        badge={{
          icon: Heart,
          text: "Cardiology Billing Specialists"
        }}
        title="Expert Cardiology Medical Billing Services"
        description="Maximize your cardiology practice revenue with specialized billing expertise. Our certified coders understand the complexities of cardiac procedures, device implantations, and interventional cardiology billing requirements."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "25%", label: "Revenue Increase", icon: TrendingUp },
          { value: "98%", label: "Clean Claim Rate", icon: CheckCircle },
          { value: "40%", label: "Fewer Denials", icon: Shield },
          { value: "15 Days", label: "Faster Payment", icon: Clock }
        ]}
      />
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

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
              Common Cardiology Billing Challenges
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cardiology practices face unique billing complexities that can significantly 
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
              How Medtransic Solves Your Cardiology Billing Challenges
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized cardiology billing solutions address each pain point with 
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
              Specialized Cardiology Billing Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for cardiology practices 
              and subspecialties.
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
                  iconColor="text-red-600"
                  iconBgColor="bg-red-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Results Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-12 shadow-xl border border-red-200">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Cardiology Practices
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized cardiology billing expertise delivers measurable improvements 
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
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{benefit.metric}</div>
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's cardiology billing expertise has been transformative for our practice. 
                Their understanding of complex cardiac procedures and device billing has increased 
                our revenue by 30% while reducing our administrative burden significantly."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Michael Rodriguez, MD</p>
                <p className="text-blue-600 font-medium">Interventional Cardiologist</p>
                <p className="text-gray-500">Heart & Vascular Institute</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('cardiology')} />
        </AnimatedSection>

        {!faqsLoading && faqs.length > 0 && (
          <FAQSection faqs={faqs} specialtyName="Cardiology" />
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
              Ready to Optimize Your Cardiology Practice Revenue?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our cardiology billing specialists analyze your current processes and show you 
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-red-600 text-white px-12 py-5 rounded-full hover:bg-red-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Cardiology Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-red-600 text-red-600 px-12 py-5 rounded-full hover:bg-red-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Cardiology Specialists
                </a>
              </motion.div>
            </div>
            
            {/* Additional Benefits */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Cardiology-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Back to Specialties */}
        <div className="text-center mt-12">
          <Link to="/specialties" className="text-red-600 hover:text-red-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default CardiologyPage;