import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Syringe,
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
  Activity,
  Settings,
  Timer,
  Building2,
  Layers
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const AnesthesiologyPage: React.FC = () => {

  const painPoints = [
    {
      icon: Timer,
      title: 'Time-Unit Calculation Complexity',
      description: 'Anesthesia billing requires precise time tracking in 15-minute increments with specific start/stop times and documentation requirements.',
      impact: 'Incorrect time units result in significant underbilling or denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Base Unit Determination',
      description: 'Each anesthesia procedure has specific base units that must be correctly identified and combined with time units and modifying factors.',
      impact: 'Using wrong base units leads to substantial reimbursement errors',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Users,
      title: 'Physical Status Modifiers',
      description: 'P1-P6 physical status modifiers affect reimbursement and must be accurately assigned based on patient condition and ASA classification.',
      impact: 'Missing or incorrect modifiers reduce reimbursement for complex cases',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Layers,
      title: 'Concurrent Care Requirements',
      description: 'Medical direction and supervision rules for CRNAs require specific QK, QX, QY, QZ modifiers with strict documentation of ratios and oversight.',
      impact: 'Non-compliance with concurrent care rules results in claim denials',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Building2,
      title: 'ASC vs Hospital Facility Coding',
      description: 'Different coding requirements and reimbursement rates for ambulatory surgery centers versus hospital-based anesthesia services.',
      impact: 'Location errors cause incorrect payment amounts and compliance issues',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      title: 'MAC vs General Anesthesia Billing',
      description: 'Distinguishing between monitored anesthesia care and general anesthesia requires proper documentation and appropriate code selection.',
      impact: 'Incorrect anesthesia type coding leads to denials or reduced payment',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: Syringe,
      title: 'Anesthesia-Certified Billing Specialists',
      description: 'Our team includes certified coders with specialized training in anesthesia billing, time-unit calculations, and medical direction requirements.',
      benefits: [
        'Expert CPT coding for all anesthesia services',
        'Accurate time-unit calculations',
        'Base unit and modifier expertise',
        'ASA physical status classification knowledge'
      ]
    },
    {
      icon: Timer,
      title: 'Time-Unit Tracking Systems',
      description: 'Advanced technology automatically calculates anesthesia time units from documented start/stop times with 15-minute interval precision.',
      benefits: [
        'Automated time-unit calculations',
        'Start/stop time validation',
        '15-minute increment accuracy',
        'Reduced calculation errors'
      ]
    },
    {
      icon: Shield,
      title: 'Medical Direction Compliance',
      description: 'Comprehensive expertise in CRNA supervision rules, concurrent care ratios, and proper QK/QX/QY/QZ modifier application.',
      benefits: [
        'Medical direction compliance',
        'Concurrent case ratio tracking',
        'Proper modifier selection',
        'Documentation requirement guidance'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Anesthesia Revenue Optimization',
      description: 'Maximize reimbursements through accurate coding of complex cases, qualifying circumstances, and appropriate modifier application.',
      benefits: [
        'Physical status modifier optimization',
        'Qualifying circumstance identification',
        'Base unit verification',
        'Enhanced revenue per case'
      ]
    }
  ];

  const services = [
    {
      icon: Syringe,
      title: 'General Anesthesia Billing',
      description: 'Expert billing for general anesthesia services with accurate time-unit calculations, base units, and physical status modifiers.',
      features: ['Time-based unit calculation', 'Base unit assignment', 'Physical status modifiers (P1-P6)', 'Qualifying circumstances']
    },
    {
      icon: Activity,
      title: 'Monitored Anesthesia Care (MAC)',
      description: 'Specialized billing for MAC services with proper distinction from general anesthesia and appropriate modifier application.',
      features: ['MAC service billing', 'QS modifier application', 'Sedation level documentation', 'Medical necessity validation']
    },
    {
      icon: Users,
      title: 'Medical Direction Services',
      description: 'Comprehensive billing for anesthesiologist medical direction of CRNAs with proper concurrent care ratio compliance.',
      features: ['Medical direction billing', 'QK modifier application', 'Concurrent case tracking', 'CRNA supervision documentation']
    },
    {
      icon: Building2,
      title: 'ASC Anesthesia Services',
      description: 'Accurate billing for ambulatory surgery center anesthesia with facility-specific requirements and coding.',
      features: ['ASC facility billing', 'Time-unit ASC rates', 'Facility fee coordination', 'Multiple procedure coding']
    }
  ];

  const benefits = [
    { metric: '34%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '99%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '50%', label: 'Reduction in Denials', icon: Shield },
    { metric: '11 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden">
      <SEOHead
        title="Anesthesiology Billing Services | Anesthesia Medical Billing"
        description="Expert anesthesiology billing with precise time-based and base unit coding. Comprehensive billing for anesthesia services and pain management."
        canonical="https://medtransic.com/specialties/anesthesiology"
        keywords="anesthesiology billing, anesthesia billing services, CRNA billing, anesthesia coding, time-based billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Anesthesiology"
        description="Expert anesthesiology billing with precise time-based and base unit coding. Comprehensive billing for anesthesia services and pain management."
        url="https://medtransic.com/specialties/anesthesiology"
      />

      <HeroSection
        badge={{ icon: Syringe, text: "Anesthesiology Billing Specialists" }}
        title="Expert Anesthesiology Medical Billing Services"
        description="Maximize your anesthesia practice revenue with specialized billing expertise in time-unit calculations, medical direction, and concurrent care compliance. Our certified anesthesia billing specialists understand base units, physical status modifiers, and complex anesthesia billing requirements."
        buttons={[
          { text: "Schedule Free Consultation", href: "/contact", variant: "primary" },
          { text: "View Our Services", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "34%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "99%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "50%", label: "Reduction in Denials", icon: Shield },
          { value: "11 Days", label: "Faster Payment", icon: Clock }
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
              src="https://images.pexels.com/photos/5752282/pexels-photo-5752282.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Anesthesiologist monitoring patient during surgical procedure"
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
              Common Anesthesiology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Anesthesiology practices face unique billing complexities with time-unit calculations,
              concurrent care requirements, and modifier-heavy coding that significantly impact revenue.
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
              How Medtransic Solves Your Anesthesiology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized anesthesiology billing solutions address each challenge with
              anesthesia-specific expertise and proven methodologies.
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
              Specialized Anesthesiology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for anesthesiology practices,
              surgery centers, and pain management anesthesia.
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
                Proven Results for Anesthesiology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized anesthesiology billing expertise delivers measurable improvements in revenue
                and operational efficiency for anesthesia groups and surgery centers.
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
                <Stethoscope className="w-8 h-8 text-sky-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Anesthesia billing is notoriously complex with time-unit calculations, medical direction
                rules, and concurrent care compliance. Medtransic's team has deep anesthesia billing expertise
                and their automated time-unit tracking system has eliminated calculation errors. Their knowledge
                of QK/QX modifier requirements and concurrent case ratios has increased our revenue by 36% while
                ensuring full compliance with medical direction rules."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Williams, MD</p>
                <p className="text-sky-600 font-medium">Board-Certified Anesthesiologist</p>
                <p className="text-gray-500">Metropolitan Anesthesia Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('anesthesiology')} />
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
              Ready to Optimize Your Anesthesiology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our anesthesiology billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with time-unit calculations and medical direction requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-sky-600 text-white px-12 py-5 rounded-full hover:bg-sky-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Anesthesia Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-sky-600 text-sky-600 px-12 py-5 rounded-full hover:bg-sky-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Anesthesia Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">Anesthesia-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-sky-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-sky-600 hover:text-sky-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnesthesiologyPage;
