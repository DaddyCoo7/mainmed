import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
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
  Settings,
  BarChart3,
  Activity,
  Wrench,
  Scan
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const GeriatricsPage: React.FC = () => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Surgical Global Period Management',
      description: 'Geriatric surgeries have 90-day global periods where most related services are bundled, requiring careful tracking to avoid denials.',
      impact: 'Lost revenue from incorrectly billing services during global periods',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Fracture Care Billing Complexity',
      description: 'Fracture treatment includes initial care, follow-ups, and cast changes within the global package, with specific rules for when to bill separately.',
      impact: 'Underbilling when services fall outside global care or overbilling bundled services',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Settings,
      title: 'Implant & Hardware Cost Recovery',
      description: 'High-cost implants, plates, screws, and prosthetics require separate billing with proper documentation and manufacturer information.',
      impact: 'Significant financial loss when expensive implants are not properly billed',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Arthroscopy Procedure Bundling',
      description: 'Multiple arthroscopic procedures on the same joint require proper modifier usage to prevent bundling and ensure full reimbursement.',
      impact: 'Revenue loss from bundled procedures when modifiers are not correctly applied',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Wrench,
      title: 'Workers Compensation Claims',
      description: 'Work-related geriatric injuries involve different coding requirements, fee schedules, and authorization processes than standard insurance.',
      impact: 'Delayed payments and denials from workers comp-specific requirements',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Scan,
      title: 'Imaging Coordination & Billing',
      description: 'Geriatric practices often provide in-office imaging requiring technical and professional component billing with proper modifiers.',
      impact: 'Reduced reimbursement when component modifiers are not used correctly',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: 'Geriatric Surgery Billing Specialists',
      description: 'Our team includes certified coders with specialized training in geriatric procedures, global period management, and implant billing.',
      benefits: [
        'Expert CPT coding for all geriatric procedures',
        'Global period tracking and management',
        'Proper modifier application for multiple procedures',
        'Maximized reimbursement for complex surgeries'
      ]
    },
    {
      icon: Settings,
      title: 'Implant Cost Recovery Expertise',
      description: 'Dedicated support for tracking and billing high-cost implants, hardware, and prosthetics with proper documentation.',
      benefits: [
        'Accurate implant billing with manufacturer codes',
        'HCPCS code expertise for geriatric supplies',
        'Documentation support for medical necessity',
        'Full cost recovery for expensive hardware'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Global Period Tracking Systems',
      description: 'Advanced technology automatically tracks global periods and identifies billable services that fall outside global packages.',
      benefits: [
        'Automated global period monitoring',
        'Alerts for separately billable services',
        'Modifier 24 and 25 guidance',
        'Reduced denials from global period errors'
      ]
    },
    {
      icon: Shield,
      title: 'Workers Compensation Expertise',
      description: 'Specialized knowledge of workers comp billing requirements, fee schedules, and authorization processes for geriatric injuries.',
      benefits: [
        'State-specific workers comp compliance',
        'Fee schedule optimization',
        'Authorization management',
        'Faster workers comp payment collection'
      ]
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'Surgical Procedure Billing',
      description: 'Expert coding for joint replacement, arthroscopy, fracture repair, and spinal surgeries with global period management.',
      features: ['Joint replacement (27447, 27130)', 'Arthroscopic procedures', 'Fracture repair (ORIF/CRIF)', 'Spinal fusion procedures']
    },
    {
      icon: Activity,
      title: 'Injection & In-Office Procedures',
      description: 'Accurate billing for joint injections, trigger point injections, and in-office geriatric procedures.',
      features: ['Joint injections (20610-20611)', 'Trigger point injections', 'Bursa aspirations', 'Casting and splinting']
    },
    {
      icon: Scan,
      title: 'Imaging & Diagnostic Services',
      description: 'Complete billing support for in-office X-rays, ultrasound, and other diagnostic imaging with proper component coding.',
      features: ['X-ray technical/professional split', 'Ultrasound guidance (76942)', 'Users density scanning', 'Modifier 26 and TC application']
    },
    {
      icon: Wrench,
      title: 'Hardware & Implant Billing',
      description: 'Specialized billing for geriatric implants, plates, screws, prosthetics, and surgical hardware.',
      features: ['Implant HCPCS codes', 'Manufacturer documentation', 'Prosthetic device billing', 'Hardware removal procedures']
    }
  ];

  const benefits = [
    { metric: '30%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '42%', label: 'Reduction in Denials', icon: Shield },
    { metric: '14 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Geriatrics Billing Services | Senior Care Medical Billing"
        description="Geriatrics billing for annual wellness visits, cognitive assessments, transitional care management, and dementia care. Maximize Medicare geriatric care management and complex chronic care coordination codes."
        canonical="https://medtransic.com/specialties/geriatrics"
        keywords="geriatrics billing, senior care billing, elderly care billing, geriatrician billing services, aging care billing"
        ogType="article"
      />
      <HeroSection
        badge={{ icon: Users, text: "Geriatric Surgery Billing Specialists" }}
        title="Expert Geriatric Billing Services"
        description="Maximize your geriatric practice revenue with specialized billing expertise in surgical procedures, implant billing, and global period management. Our certified geriatric billing specialists understand complex fracture care, arthroscopy bundling, and workers compensation requirements unique to geriatric practices."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "98%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "30%", label: "Revenue Increase", icon: TrendingUp },
          { value: "42%", label: "Fewer Denials", icon: Shield },
          { value: "14 Days", label: "Faster Payments", icon: Clock }
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
              Common Geriatric Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Geriatric practices face unique billing complexities with surgical global periods,
              high-cost implants, and procedure-specific bundling rules that can significantly impact
              revenue and reimbursement.
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
              How Medtransic Solves Your Geriatric Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized geriatric billing solutions address each challenge with
              geriatric-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-yellow-600" />
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
                        <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
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
              Specialized Geriatric Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for geriatric surgery practices
              and geriatric specialists.
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
                  iconColor="text-yellow-600"
                  iconBgColor="bg-yellow-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Results Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-12 shadow-xl border border-yellow-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Geriatric Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized geriatric billing expertise delivers measurable improvements in revenue
                and operational efficiency for geriatric practices.
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
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{benefit.metric}</div>
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
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-yellow-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Managing billing for an geriatric surgery practice is incredibly complex with global periods,
                implant billing, and workers compensation claims. Medtransic's team has deep expertise in
                geriatric coding and has helped us recover costs on high-value implants that we were previously
                missing. Their global period tracking system alone has increased our revenue by 28%. They truly
                understand the unique challenges of geriatric billing."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. James Patterson, MD</p>
                <p className="text-yellow-600 font-medium">Board-Certified Geriatric Surgeon</p>
                <p className="text-gray-500">Summit Geriatrics & Sports Medicine</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('geriatrics')} />
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
              Ready to Optimize Your Geriatric Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our geriatric billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with surgical billing requirements and implant cost recovery.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-yellow-600 text-white px-12 py-5 rounded-full hover:bg-yellow-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Geriatric Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-yellow-600 text-yellow-600 px-12 py-5 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Geriatric Specialists
                </a>
              </motion.div>
            </div>

            {/* Additional Benefits */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600 mr-3" />
                  <span className="text-gray-700 font-medium">Geriatric-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-yellow-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Back to Specialties */}
        <div className="text-center mt-12">
          <Link to="/specialties" className="text-yellow-600 hover:text-yellow-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </>
  );
};

export default GeriatricsPage;
