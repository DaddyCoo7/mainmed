import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
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
  Video,
  Target,
  Award,
  Stethoscope,
  Lock,
  Timer,
  BarChart3,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const MentalHealthPage: React.FC = () => {
  const painPoints = [
    {
      icon: Timer,
      title: 'Time-Based CPT Code Accuracy',
      description: 'Psychotherapy and psychiatric services require precise time tracking with specific CPT codes based on session duration (30, 45, 60 minutes).',
      impact: 'Underbilling or overbilling when time is not accurately documented',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Video,
      title: 'Telehealth Billing Complexities',
      description: 'Virtual mental health services have specific modifier requirements and varying state regulations for reimbursement.',
      impact: 'Claim denials due to incorrect telehealth modifiers or non-covered services',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: AlertTriangle,
      title: 'Crisis Intervention Coding',
      description: 'Emergency psychiatric services and crisis intervention require specific CPT codes with detailed documentation of medical necessity.',
      impact: 'Missed revenue from unbilled crisis services or claim denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      title: 'Group vs Individual Session Billing',
      description: 'Different CPT codes and reimbursement rates for individual, family, and group therapy sessions require careful distinction.',
      impact: 'Revenue loss from incorrect service type coding',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: FileText,
      title: 'Add-On Code Confusion',
      description: 'Psychotherapy with E/M services on the same day requires proper add-on code usage and medical necessity justification.',
      impact: 'Bundling denials when add-on codes are not properly documented',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Lock,
      title: 'HIPAA-Sensitive Documentation',
      description: 'Mental health billing requires extra confidentiality measures while ensuring documentation supports medical necessity.',
      impact: 'Privacy breaches or insufficient documentation for claim support',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'Behavioral Health Billing Specialists',
      description: 'Our team includes certified coders with specialized training in psychiatric and psychological service billing.',
      benefits: [
        'Expert time-based CPT code selection',
        'Accurate differentiation between therapy types',
        'Knowledge of crisis intervention billing',
        'Reduced coding errors and claim denials'
      ]
    },
    {
      icon: Video,
      title: 'Telehealth Expertise',
      description: 'Dedicated support for virtual mental health services with up-to-date knowledge of telehealth regulations and modifiers.',
      benefits: [
        'Proper modifier application for telehealth',
        'State-specific compliance tracking',
        'Audio-only vs video session coding',
        'Maximized telehealth reimbursement'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Time Tracking & Documentation Systems',
      description: 'Advanced systems help ensure accurate time tracking and proper CPT code selection based on session duration.',
      benefits: [
        'Automated time-based code recommendations',
        'Session duration validation',
        'Documentation completeness checks',
        'Reduced underbilling from time discrepancies'
      ]
    },
    {
      icon: Lock,
      title: 'HIPAA-Compliant Confidentiality Protocols',
      description: 'Extra security measures specific to mental health records while maintaining documentation necessary for billing.',
      benefits: [
        'Enhanced privacy protections for behavioral health',
        'Secure handling of sensitive information',
        'Compliant documentation practices',
        'Audit-ready record keeping'
      ]
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: 'Psychotherapy Session Billing',
      description: 'Accurate coding for individual, family, and group therapy sessions with proper time-based CPT codes.',
      features: ['Individual therapy (90832-90834, 90837)', 'Family therapy (90846-90847)', 'Group therapy (90853)', 'Interactive complexity add-on (90785)']
    },
    {
      icon: Stethoscope,
      title: 'Psychiatric Evaluation & Management',
      description: 'Expert billing for diagnostic evaluations, medication management, and psychiatric consultations.',
      features: ['Diagnostic evaluations (90791-90792)', 'Medication management (90863)', 'Psychiatric consultation', 'Follow-up E/M services']
    },
    {
      icon: AlertTriangle,
      title: 'Crisis Intervention Services',
      description: 'Specialized billing for emergency psychiatric services and crisis intervention with appropriate time documentation.',
      features: ['Crisis psychotherapy (90839-90840)', 'Emergency psychiatric services', 'First 60 minutes billing', 'Additional time increments']
    },
    {
      icon: Video,
      title: 'Telehealth & Virtual Care',
      description: 'Complete telehealth billing support with proper modifiers for synchronous and asynchronous services.',
      features: ['Telehealth modifier application', 'Audio-only services (modifier FQ)', 'Place of service codes', 'State regulation compliance']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '50%', label: 'Reduction in Denials', icon: Shield },
    { metric: '10 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Mental Health Billing Services | Behavioral Health Medical Billing"
        description="Specialized mental health and behavioral health billing services. Expert coding for psychotherapy, psychiatric services, and counseling. HIPAA-compliant telehealth billing."
        canonical="https://medtransic.com/specialties/mental-health"
        keywords="mental health billing, behavioral health billing, psychiatry billing, psychotherapy billing, counseling billing, telehealth mental health"
        ogType="article"
      />
      <HeroSection
        badge={{ icon: Brain, text: "Mental & Behavioral Health Billing Specialists" }}
        title="Expert Mental Health Billing Services"
        description="Maximize your behavioral health practice revenue with specialized billing expertise in psychotherapy services, telehealth coding, and psychiatric medication management. Our certified mental health billing specialists understand time-based CPT codes, crisis intervention billing, and HIPAA-compliant documentation requirements unique to behavioral health services."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "96%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "32%", label: "Revenue Increase", icon: TrendingUp },
          { value: "50%", label: "Fewer Denials", icon: Shield },
          { value: "10 Days", label: "Faster Payments", icon: Clock }
        ]}
      />

      <div className="bg-white relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

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
              Common Mental Health Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Behavioral health practices face unique billing complexities with time-based coding,
              telehealth requirements, and heightened confidentiality standards that can significantly
              impact revenue and compliance.
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
              How Medtransic Solves Your Mental Health Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized behavioral health billing solutions address each challenge with
              mental health-specific expertise and proven methodologies.
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
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
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
              Specialized Mental Health Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for behavioral health practices,
              psychiatry, and counseling services.
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

        {/* Results Section */}
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
                Proven Results for Mental Health Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized behavioral health billing expertise delivers measurable improvements
                in revenue and operational efficiency for mental health practices.
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

        {/* Testimonial Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "As a psychiatry practice offering both in-person and telehealth services, billing accuracy
                is critical. Medtransic's team understands the complexities of time-based psychotherapy codes,
                telehealth modifiers, and medication management billing. They've increased our revenue by 35%
                while maintaining the highest standards of patient confidentiality. Their expertise in
                behavioral health billing is unmatched."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Chen, MD</p>
                <p className="text-teal-600 font-medium">Board-Certified Psychiatrist</p>
                <p className="text-gray-500">Mindful Wellness Psychiatry Group</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('mental-health')} />
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
              Ready to Optimize Your Mental Health Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our behavioral health billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with mental health-specific requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Mental Health Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Mental Health Specialists
                </a>
              </motion.div>
            </div>

            {/* Additional Benefits */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Behavioral Health Certified Coders</span>
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

        {/* Back to Specialties */}
        <div className="text-center mt-12">
          <Link to="/specialties" className="text-teal-600 hover:text-teal-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </>
  );
};

export default MentalHealthPage;
