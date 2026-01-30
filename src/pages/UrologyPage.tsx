import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplets,
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
  Activity
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';

const UrologyPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Cystoscopy Coding Complexity',
      description: 'Cystoscopy procedures require precise coding based on approach (rigid vs flexible), setting, and additional procedures performed.',
      impact: 'Incorrect coding leads to underpayment and claim denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Settings,
      title: 'Lithotripsy Billing Challenges',
      description: 'Complex billing for shock wave lithotripsy procedures with specific documentation requirements and session limitations.',
      impact: 'Revenue loss from improper session billing',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Urodynamic Study Documentation',
      description: 'Urodynamic studies require extensive documentation and precise component coding for proper reimbursement.',
      impact: 'Frequent denials due to insufficient documentation',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Microscope,
      title: 'Prostate Procedure Nuances',
      description: 'Different coding requirements for various prostate procedures including TURP, laser ablation, and biopsy techniques.',
      impact: 'Underbilling of high-value prostate procedures',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Multiple Procedure Management',
      description: 'Same-day multiple procedures require careful modifier application to ensure proper reimbursement.',
      impact: 'Reduced payments from bundling and modifier errors',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Office vs Facility Coding',
      description: 'Different billing requirements and reimbursement rates for procedures performed in office versus facility settings.',
      impact: 'Revenue leakage from incorrect setting codes',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const solutions = [
    {
      icon: Droplets,
      title: 'Urology-Certified Coders',
      description: 'Our team includes specialized coders with extensive training in urological procedures and complex surgical coding.',
      benefits: [
        'Accurate cystoscopy and surgical coding',
        'Expertise in stone treatment procedures',
        'Knowledge of urodynamic study billing',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Surgical Revenue Optimization',
      description: 'Maximize reimbursements through proper coding of surgical procedures and modifier management.',
      benefits: [
        'Optimized surgical procedure billing',
        'Correct modifier usage for multiple procedures',
        'Higher reimbursement per case',
        'Reduced payer audit risks'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Comprehensive RCM',
      description: 'End-to-end revenue cycle management specifically designed for urology practices and surgical centers.',
      benefits: [
        'Faster claim processing',
        'Improved cash flow',
        'Reduced AR aging',
        'Detailed financial analytics'
      ]
    },
    {
      icon: Monitor,
      title: 'Prior Authorization Excellence',
      description: 'Dedicated team manages all prior authorization requirements for urological procedures and treatments.',
      benefits: [
        'Expedited approval process',
        'Reduced administrative burden',
        'Higher approval rates',
        'Streamlined patient scheduling'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Cystoscopy Procedures',
      description: 'Expert billing for diagnostic and therapeutic cystoscopy procedures in all settings.',
      features: ['Flexible cystoscopy', 'Rigid cystoscopy', 'Biopsy procedures', 'Stent placement']
    },
    {
      icon: Zap,
      title: 'Stone Management',
      description: 'Specialized billing for lithotripsy, ureteroscopy, and percutaneous stone removal procedures.',
      features: ['Shock wave lithotripsy', 'Ureteroscopy with laser', 'PCNL procedures', 'Stone analysis']
    },
    {
      icon: Microscope,
      title: 'Prostate Treatments',
      description: 'Complex billing for TURP, laser procedures, biopsies, and minimally invasive treatments.',
      features: ['TURP procedures', 'Laser ablation', 'Prostate biopsies', 'UroLift/Rezum billing']
    },
    {
      icon: FileText,
      title: 'Urodynamic Studies',
      description: 'Comprehensive billing for all components of urodynamic testing and evaluation.',
      features: ['Uroflowmetry', 'Cystometry', 'Pressure flow studies', 'EMG studies']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '48%', label: 'Reduction in Denials', icon: Shield },
    { metric: '14 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Urology Billing Services | Urology Medical Billing & Coding"
        description="Professional urology billing services for surgical and diagnostic procedures. Expert coding for cystoscopy, TURP, kidney stone treatment, and urologic oncology."
        canonical="https://medtransic.com/specialties/urology"
        keywords="urology billing, urological billing services, cystoscopy billing, kidney stone billing, urologic surgery billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Urology"
        description="Professional urology billing services for surgical and diagnostic procedures. Expert coding for cystoscopy, TURP, kidney stone treatment, and urologic oncology."
        url="https://medtransic.com/specialties/urology"
      />

      <HeroSection
        badge={{ icon: Droplets, text: "Urology Billing Specialists" }}
        title="Expert Urology Medical Billing Services"
        description="Maximize your urology practice revenue with specialized billing expertise. Our certified coders understand the complexities of cystoscopy procedures, lithotripsy billing, urodynamic studies, and surgical interventions."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "32%", label: "Revenue Increase", icon: TrendingUp },
          { value: "96%", label: "First-Pass Rate", icon: CheckCircle },
          { value: "48%", label: "Denial Reduction", icon: Shield },
          { value: "14 Days", label: "Faster Payment", icon: Clock }
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
              Common Urology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Urology practices face unique billing complexities that can significantly impact
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
              How Medtransic Solves Your Urology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized urology billing solutions address each pain point with
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

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Specialized Urology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for urology practices
              and surgical centers.
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
                Proven Results for Urology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized urology billing expertise delivers measurable improvements
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
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Working with Medtransic has been a game-changer for our urology practice. Their
                expertise in complex surgical billing and urodynamic studies increased our revenue
                by 35% while freeing up our staff to focus on patient care."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Robert Thompson, MD</p>
                <p className="text-blue-600 font-medium">Urologist</p>
                <p className="text-gray-500">Metro Urology Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('urology')} />
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
              Ready to Optimize Your Urology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our urology billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Urology Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Urology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Urology-Certified Coders</span>
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
    </>
  );
};

export default UrologyPage;
