import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor,
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
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';

const TelehealthBillingPage: React.FC = () => {

  const painPoints = [
    {
      icon: FileText,
      title: 'Complex Modifier Requirements',
      description: 'Telehealth requires proper use of place of service codes, modifiers (95, GT, GQ), and originating/distant site distinctions that vary by payer.',
      impact: 'Incorrect modifiers cause 30-40% of telehealth claim denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'State Licensure & Location Rules',
      description: 'Providers must be licensed in the state where the patient is located, and billing rules vary by patient location and payer.',
      impact: 'Cross-state telehealth creates compliance and billing complexity',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Inconsistent Payer Coverage',
      description: 'Each payer has different telehealth coverage policies, eligible services, reimbursement rates, and technology requirements.',
      impact: 'Payer policy violations result in denials and lost revenue',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Technology Platform Documentation',
      description: 'Payers require documentation proving HIPAA-compliant, audio-visual technology was used rather than phone-only communication.',
      impact: 'Missing technology documentation leads to automatic denials',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: Monitor,
      title: 'Telehealth Billing Specialists',
      description: 'Expert team with specialized training in telehealth CPT codes, modifiers, place of service requirements, and payer-specific rules.',
      benefits: [
        'Certified telehealth billing expertise',
        'Up-to-date on COVID-19 policy changes',
        'Proper CPT code selection (99441-99443, 99421-99423)',
        'Modifier application for all platforms'
      ]
    },
    {
      icon: Zap,
      title: 'Payer Policy Management',
      description: 'Comprehensive tracking and application of each payer\'s unique telehealth coverage policies, eligible services, and requirements.',
      benefits: [
        'Real-time payer policy database',
        'Medicare, Medicaid, and commercial rules',
        'State-specific guideline tracking',
        'Proactive policy update monitoring'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Documentation Support',
      description: 'Ensure all telehealth encounters meet documentation requirements including technology platform, consent, and clinical necessity.',
      benefits: [
        'Platform compliance verification',
        'Consent and authorization tracking',
        'Proper location documentation',
        'HIPAA compliance assurance'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Reimbursement Optimization',
      description: 'Maximize telehealth reimbursement through proper code selection, bundling avoidance, and appeal of improper denials.',
      benefits: [
        'Maximize reimbursement opportunities',
        'Proper remote monitoring billing',
        'E-visit and virtual check-in optimization',
        'Appeal telehealth-specific denials'
      ]
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Synchronous Telehealth Billing',
      description: 'Real-time video visit billing with proper modifiers, place of service codes, and documentation requirements.',
      features: ['CPT 99201-99215 with modifiers', 'POS 02 or 10 as appropriate', 'Originating site facility fees', 'Distant site provider billing']
    },
    {
      icon: CheckCircle,
      title: 'Remote Patient Monitoring',
      description: 'Billing for RPM devices, setup, device supply, and monthly monitoring services under appropriate CPT codes.',
      features: ['CPT 99453-99454 device setup', 'CPT 99457-99458 monitoring time', 'CPT 99091 data analysis', 'Monthly service tracking']
    },
    {
      icon: BarChart3,
      title: 'E-Visits & Virtual Check-ins',
      description: 'Asynchronous communication and brief virtual check-in billing using patient portal and phone-based codes.',
      features: ['CPT 99421-99423 online assessments', 'CPT 99441-99443 telephone visits', 'G2010, G2012 virtual check-ins', 'Proper time documentation']
    },
    {
      icon: Award,
      title: 'Store-and-Forward Telehealth',
      description: 'Billing for asynchronous transmission of patient data including images, vital signs, and clinical information.',
      features: ['State Medicaid programs', 'Dermatology and radiology', 'Ophthalmology screening', 'Chronic condition monitoring']
    }
  ];

  const benefits = [
    { metric: '38%', label: 'Telehealth Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Acceptance', icon: CheckCircle },
    { metric: '15+', label: 'Telehealth CPT Codes', icon: Clock },
    { metric: '100%', label: 'Payer Policy Compliance', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Telehealth Billing Services | Telemedicine Medical Billing"
        description="Specialized telehealth and telemedicine billing services. Expert coding for virtual visits and remote patient monitoring."
        canonical="https://medtransic.com/services/telehealth-billing"
        keywords="telehealth billing, telemedicine billing, virtual visit billing, remote patient monitoring billing, online consultation billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Telehealth Billing"
        description="Specialized telehealth and telemedicine billing services. Expert coding for virtual visits and remote patient monitoring."
        url="https://medtransic.com/services/telehealth-billing"
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

      <HeroSection
        badge={{ icon: Monitor, text: 'Virtual Care Billing' }}
        title="Telehealth Billing Services"
        description="Specialized billing for virtual visits and remote patient monitoring with compliant telehealth CPT code usage."
        buttons={[
          { text: 'Schedule Free Consultation', href: '/contact', variant: 'primary' },
          { text: 'Call Our Specialists', href: 'tel:+1-888-777-0860', variant: 'secondary' }
        ]}
        stats={[
          { value: '38%', label: 'Telehealth Revenue Increase', icon: TrendingUp },
          { value: '96%', label: 'First-Pass Acceptance', icon: CheckCircle },
          { value: '15+', label: 'Telehealth CPT Codes', icon: Clock },
          { value: '100%', label: 'Payer Policy Compliance', icon: Shield }
        ]}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Telehealth Billing Services services"
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
              Telehealth billing presents unique challenges with complex modifiers, state rules, and constantly changing payer policies.
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
                    <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-sky-600" />
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
                  iconColor="text-sky-600"
                  iconBgColor="bg-sky-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-12 shadow-xl border border-sky-200">
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
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="text-3xl font-bold text-sky-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Telehealth became 60% of our visits during COVID, and billing became overwhelming. Medtransic's expertise
                in telehealth modifiers, payer policies, and RPM billing helped us capture $180K in previously lost revenue.
                They handle all the complexity while we focus on patient care."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Michael Chen</p>
                <p className="text-sky-600 font-medium">Medical Director</p>
                <p className="text-gray-500">Primary Care Telehealth Practice, California</p>
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
                <Link to="/contact" className="bg-sky-600 text-white px-12 py-5 rounded-full hover:bg-sky-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-sky-600 text-sky-600 px-12 py-5 rounded-full hover:bg-sky-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">Expert Team</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-sky-600 hover:text-sky-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TelehealthBillingPage;
