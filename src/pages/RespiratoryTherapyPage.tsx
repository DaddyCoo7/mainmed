import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wind,
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
  Heart,
  Activity
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const RespiratoryTherapyPage: React.FC = () => {

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Complex DME Coordination',
      description: 'Respiratory equipment billing requires coordination between therapy services and DME suppliers with separate coding requirements.',
      impact: 'Revenue loss when equipment and therapy services are not properly coordinated',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Documentation Requirements',
      description: 'Medicare and insurance companies require extensive clinical documentation for oxygen therapy, ventilators, and pulmonary rehabilitation.',
      impact: 'Claim denials due to insufficient medical necessity documentation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: 'Monthly Rental Billing Complexity',
      description: 'Oxygen concentrators and ventilators require accurate monthly rental billing with proper tracking of capped rental periods.',
      impact: 'Lost revenue from missed rental months or incorrect billing cycles',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Certificate of Medical Necessity',
      description: 'CMN forms are mandatory for many respiratory equipment items and must be completed accurately with physician signatures.',
      impact: 'Payment delays and denials when CMN documentation is incomplete',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: DollarSign,
      title: 'Pulmonary Rehab Billing',
      description: 'Pulmonary rehabilitation programs have specific session limits and require careful tracking of visit frequency and medical necessity.',
      impact: 'Denials for exceeding frequency limits or insufficient documentation',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Monitor,
      title: 'Home Care vs Facility Billing',
      description: 'Different billing rules apply for respiratory services provided in home settings versus facility-based care.',
      impact: 'Coding errors when place of service is not correctly identified',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Wind,
      title: 'Respiratory Therapy Billing Specialists',
      description: 'Our team includes certified coders with specialized training in respiratory care procedures, DME billing, and pulmonary rehabilitation.',
      benefits: [
        'Expert HCPCS coding for respiratory equipment',
        'Proper CPT coding for therapy procedures',
        'Knowledge of capped rental billing rules',
        'Expertise in pulmonary rehabilitation coding'
      ]
    },
    {
      icon: Shield,
      title: 'CMN & Documentation Management',
      description: 'Dedicated support for Certificate of Medical Necessity completion, clinical documentation, and medical necessity validation.',
      benefits: [
        'CMN form completion and tracking',
        'Clinical documentation review',
        'Medical necessity validation',
        'Audit-ready documentation standards'
      ]
    },
    {
      icon: TrendingUp,
      title: 'DME & Therapy Revenue Optimization',
      description: 'Maximize reimbursements through proper coordination of equipment rentals, therapy services, and maintenance billing.',
      benefits: [
        'Coordinated DME and therapy billing',
        'Monthly rental tracking and billing',
        'Maintenance and supply billing',
        'Reduced accounts receivable aging'
      ]
    },
    {
      icon: Monitor,
      title: 'Compliance & Authorization Management',
      description: 'Comprehensive prior authorization handling and ongoing compliance monitoring for respiratory therapy services.',
      benefits: [
        'Prior authorization management',
        'Frequency limit tracking',
        'Place of service verification',
        'Payer-specific requirement compliance'
      ]
    }
  ];

  const services = [
    {
      icon: Wind,
      title: 'Oxygen Therapy Billing',
      description: 'Expert billing for oxygen concentrators, liquid oxygen systems, and portable oxygen devices with proper rental tracking.',
      features: ['Oxygen equipment rentals', 'CMN documentation', 'Monthly billing cycles', 'Capped rental management']
    },
    {
      icon: Activity,
      title: 'Mechanical Ventilation',
      description: 'Specialized billing for home ventilators, BiPAP, CPAP devices, and related respiratory support equipment.',
      features: ['Ventilator rentals', 'BiPAP/CPAP billing', 'Supply coordination', 'Maintenance billing']
    },
    {
      icon: Heart,
      title: 'Pulmonary Rehabilitation',
      description: 'Comprehensive billing for structured pulmonary rehab programs with exercise training and patient education.',
      features: ['Session-based billing', 'Frequency tracking', 'Outcome documentation', 'Multi-disciplinary coordination']
    },
    {
      icon: Zap,
      title: 'Respiratory Treatments',
      description: 'Accurate billing for nebulizer treatments, breathing exercises, and airway clearance therapy procedures.',
      features: ['Treatment procedures', 'Nebulizer billing', 'Airway clearance', 'Therapeutic interventions']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '48%', label: 'Reduction in Denials', icon: Shield },
    { metric: '16 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Respiratory Therapy Billing Services | RT Medical Billing"
        description="Professional respiratory therapy billing services. Expert coding for breathing treatments, pulmonary rehabilitation, and RT procedures."
        canonical="https://medtransic.com/specialties/respiratory-therapy"
        keywords="respiratory therapy billing, RT billing services, breathing treatment billing, pulmonary rehabilitation billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Respiratory Therapy"
        description="Professional respiratory therapy billing services. Expert coding for breathing treatments, pulmonary rehabilitation, and RT procedures."
        url="https://medtransic.com/specialties/respiratory-therapy"
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
              <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mr-6">
                <Wind className="w-10 h-10 text-teal-600" />
              </div>
              <span className="text-teal-600 font-semibold text-lg tracking-wide uppercase">
                Respiratory Therapy Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Respiratory Therapy Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your respiratory therapy practice revenue with specialized billing expertise in
            oxygen therapy, mechanical ventilation, pulmonary rehabilitation, and DME coordination.
            Our certified coders understand complex rental billing, CMN requirements, and documentation
            standards unique to respiratory care services.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Respiratory therapist assisting patient with breathing treatment"
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
              Common Respiratory Therapy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Respiratory therapy providers face unique billing complexities with equipment rentals,
              extensive documentation requirements, and coordination between therapy and DME services.
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
              How Medtransic Solves Your Respiratory Therapy Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized respiratory therapy billing solutions address each challenge with
              targeted expertise in DME coordination and pulmonary care billing.
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
              Specialized Respiratory Therapy Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for respiratory therapy providers
              and pulmonary rehabilitation programs.
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
                Proven Results for Respiratory Therapy Providers
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized respiratory therapy billing expertise delivers measurable improvements
                in revenue and operational efficiency for respiratory care providers.
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
                "Respiratory therapy billing has always been challenging with all the DME coordination,
                CMN requirements, and monthly rental tracking. Medtransic's team has deep expertise in
                respiratory care billing and has helped us capture revenue we were previously missing
                on equipment rentals and pulmonary rehab programs. Their CMN management system alone
                has reduced our denials by 45%. They truly understand the complexities of respiratory
                billing and have been a game-changer for our practice."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Sarah Mitchell, RRT</p>
                <p className="text-teal-600 font-medium">Director of Respiratory Services</p>
                <p className="text-gray-500">Breathe Easy Respiratory Care Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('respiratory-therapy')} />
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
              Ready to Optimize Your Respiratory Therapy Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our respiratory therapy billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with DME billing and documentation requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Respiratory Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Respiratory-Certified Coders</span>
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
  );
};

export default RespiratoryTherapyPage;
