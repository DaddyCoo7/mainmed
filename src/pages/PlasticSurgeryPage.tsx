import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Scissors,
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
  Sparkles,
  Target,
  Award,
  Stethoscope,
  Monitor,
  FileSearch,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const PlasticSurgeryPage: React.FC = () => {
  const painPoints = [
    {
      icon: FileSearch,
      title: 'Cosmetic vs Reconstructive Coding',
      description: 'Distinguishing between cosmetic procedures (patient-pay) and reconstructive procedures (insurance-covered) requires precise documentation and coding expertise.',
      impact: 'Incorrect coding leads to claim denials and patient billing disputes',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Medical Necessity Documentation',
      description: 'Proving medical necessity for reconstructive procedures requires extensive documentation, clinical photos, and detailed operative reports.',
      impact: 'Insufficient documentation results in denials for covered procedures',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Modifier Complexity',
      description: 'Plastic surgery procedures require complex modifier usage for staged procedures, bilateral surgeries, and multiple procedures performed simultaneously.',
      impact: 'Incorrect modifiers lead to reduced reimbursements and bundling issues',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Clock,
      title: 'Insurance Coverage Determination',
      description: 'Determining which procedures are covered by insurance versus patient-pay requires knowledge of payer policies and coverage criteria.',
      impact: 'Coverage errors create patient financial hardship and collection issues',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: AlertTriangle,
      title: 'Prior Authorization Challenges',
      description: 'Reconstructive procedures often require extensive prior authorization with clinical documentation, photos, and supporting medical records.',
      impact: 'Authorization delays postpone procedures and impact patient satisfaction',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'Multiple Procedure Bundling',
      description: 'Understanding which plastic surgery procedures can be billed together and which are subject to NCCI edits and bundling rules.',
      impact: 'Bundling errors reduce revenue and increase claim denials',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: Scissors,
      title: 'Certified Plastic Surgery Coders',
      description: 'Our team includes certified coders with specialized training in plastic and reconstructive surgery coding and documentation requirements.',
      benefits: [
        'Expertise in cosmetic vs reconstructive distinction',
        'Knowledge of complex modifier requirements',
        'Understanding of payer-specific policies',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance Verification Systems',
      description: 'Advanced systems verify coverage for reconstructive procedures and identify patient-pay cosmetic services before treatment.',
      benefits: [
        'Accurate coverage determination',
        'Clear patient financial expectations',
        'Reduced billing disputes',
        'Improved patient satisfaction'
      ]
    },
    {
      icon: FileText,
      title: 'Medical Necessity Documentation',
      description: 'Comprehensive support for documenting medical necessity with clinical photos, operative reports, and supporting evidence.',
      benefits: [
        'Higher approval rates for reconstructive procedures',
        'Reduced claim denials',
        'Faster prior authorization processing',
        'Complete documentation compliance'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Strategic billing approaches to maximize reimbursements for covered procedures while managing patient-pay cosmetic services.',
      benefits: [
        'Increased revenue per procedure',
        'Optimized modifier usage',
        'Faster payment collection',
        'Improved cash flow management'
      ]
    }
  ];

  const services = [
    {
      icon: Stethoscope,
      title: 'Reconstructive Procedures',
      description: 'Expert billing for medically necessary reconstructive surgery including trauma reconstruction, burn reconstruction, and congenital defect repair.',
      features: ['Trauma reconstruction', 'Burn surgery billing', 'Congenital repair', 'Scar revision procedures']
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Procedures',
      description: 'Patient-pay billing management for elective cosmetic procedures with clear payment processing and collection systems.',
      features: ['Aesthetic surgery billing', 'Facial procedures', 'Body contouring', 'Injectables and fillers']
    },
    {
      icon: Users,
      title: 'Post-Mastectomy Reconstruction',
      description: 'Specialized billing for breast reconstruction following mastectomy with knowledge of Women\'s Health and Cancer Rights Act requirements.',
      features: ['Breast reconstruction', 'Implant procedures', 'Flap surgery billing', 'Revision procedures']
    },
    {
      icon: FileText,
      title: 'Hand & Microsurgery',
      description: 'Complex billing for hand surgery and microsurgical procedures including nerve repair, tendon repair, and tissue transfer.',
      features: ['Hand surgery procedures', 'Microsurgical billing', 'Nerve repair coding', 'Tissue transfer procedures']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '45%', label: 'Reduction in Denials', icon: Shield },
    { metric: '12 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden">
      <SEOHead
        title="Plastic Surgery Billing Services | Cosmetic & Reconstructive Billing"
        description="Expert plastic surgery billing for cosmetic and reconstructive procedures. Specialized coding for aesthetic surgery, reconstructive surgery, and cash-pay procedures."
        canonical="https://medtransic.com/specialties/plastic-surgery"
        keywords="plastic surgery billing, cosmetic surgery billing, reconstructive surgery billing, aesthetic procedure billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Plastic Surgery"
        description="Expert plastic surgery billing for cosmetic and reconstructive procedures. Specialized coding for aesthetic surgery, reconstructive surgery, and cash-pay procedures."
        url="https://medtransic.com/specialties/plastic-surgery"
      />

      <HeroSection
        badge={{ icon: Scissors, text: "Plastic Surgery Billing Specialists" }}
        title="Expert Plastic & Reconstructive Surgery Billing"
        description="Maximize your plastic surgery practice revenue with specialized billing expertise in cosmetic versus reconstructive coding, medical necessity documentation, and complex modifier management. Our certified coders understand the unique requirements of both insurance-covered reconstructive procedures and patient-pay cosmetic services."
        buttons={[
          { text: "Schedule Free Consultation", href: "/contact", variant: "primary" },
          { text: "View Our Services", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "32%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "96%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "45%", label: "Reduction in Denials", icon: Shield },
          { value: "12 Days", label: "Faster Payment", icon: Clock }
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
              src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Plastic surgeon preparing for reconstructive surgery procedure"
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
              Common Plastic Surgery Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Plastic surgery practices face unique billing complexities with cosmetic versus
              reconstructive distinctions and complex documentation requirements.
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
              How Medtransic Solves Your Plastic Surgery Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized plastic surgery billing solutions address each challenge with
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
              Specialized Plastic Surgery Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for plastic and
              reconstructive surgery practices.
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
                Proven Results for Plastic Surgery Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized plastic surgery billing expertise delivers measurable improvements
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
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's expertise in both cosmetic and reconstructive billing has been invaluable.
                Their team understands the nuances of medical necessity documentation and modifier usage,
                which has increased our reconstructive procedure revenue by 35% while streamlining our
                cosmetic patient-pay collections."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Sarah Martinez, MD</p>
                <p className="text-teal-600 font-medium">Board-Certified Plastic Surgeon</p>
                <p className="text-gray-500">Elite Plastic & Reconstructive Surgery Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('plastic-surgery')} />
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
              Ready to Optimize Your Plastic Surgery Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our plastic surgery billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with both cosmetic and
              reconstructive billing requirements.
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
                  Call Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Certified Plastic Surgery Coders</span>
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

export default PlasticSurgeryPage;
