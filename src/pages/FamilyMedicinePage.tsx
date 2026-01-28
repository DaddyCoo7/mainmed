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
  Heart,
  Activity,
  Target,
  Award,
  Stethoscope,
  Monitor,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const FamilyMedicinePage: React.FC = () => {
  const painPoints = [
    {
      icon: ClipboardCheck,
      title: 'Preventive Care Billing Complexity',
      description: 'Billing for preventive services, screenings, and immunizations requires knowledge of age-specific codes and frequency limitations.',
      impact: 'Missed revenue opportunities from unbilled preventive services',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Chronic Care Management Coding',
      description: 'Complex requirements for chronic care management (CCM) and remote patient monitoring (RPM) with time tracking and documentation needs.',
      impact: 'Lost revenue from valuable CCM services when not billed properly',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Annual Wellness Visit Requirements',
      description: 'Medicare Annual Wellness Visits have specific documentation requirements separate from comprehensive physicals that are often confused.',
      impact: 'Claim denials when AWV requirements are not met correctly',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Multi-Generational Patient Mix',
      description: 'Managing billing for patients across all age groups from newborns to seniors requires knowledge of age-specific codes and payer policies.',
      impact: 'Coding errors due to age-specific code requirements',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Activity,
      title: 'E&M Level Selection Challenges',
      description: 'Determining appropriate evaluation and management levels based on complexity, time, or medical decision-making requires expertise.',
      impact: 'Undercoding reduces revenue while overcoding increases audit risk',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Time-Based Billing Requirements',
      description: 'Counseling and coordination of care services require time documentation and specific coding that is often missed.',
      impact: 'Unbilled services result in lost revenue for time-intensive visits',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: Users,
      title: 'Primary Care Coding Experts',
      description: 'Our certified coders specialize in family medicine with deep knowledge of preventive care, chronic disease management, and E&M coding.',
      benefits: [
        'Expertise in age-specific coding requirements',
        'Knowledge of preventive service guidelines',
        'Proper E&M level selection',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'Preventive Care Optimization',
      description: 'Systematic approach to identify and bill all preventive services, screenings, and immunizations based on patient age and payer guidelines.',
      benefits: [
        'Capture all billable preventive services',
        'Maximize immunization revenue',
        'Ensure frequency compliance',
        'Improved preventive care revenue'
      ]
    },
    {
      icon: Heart,
      title: 'Chronic Care Management Support',
      description: 'Complete support for CCM, RPM, and transitional care management billing with time tracking and documentation assistance.',
      benefits: [
        'Maximize CCM revenue opportunities',
        'Proper time documentation',
        'Compliance with CMS requirements',
        'New recurring revenue streams'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Wellness Visit Specialists',
      description: 'Expert handling of Annual Wellness Visits, comprehensive physicals, and preventive visit coding to maximize reimbursements.',
      benefits: [
        'Proper AWV documentation',
        'Distinction between AWV and comprehensive exams',
        'Higher approval rates',
        'Increased wellness revenue'
      ]
    }
  ];

  const services = [
    {
      icon: ClipboardCheck,
      title: 'Preventive Services Billing',
      description: 'Complete billing for all preventive care services including screenings, immunizations, and age-appropriate wellness visits.',
      features: ['Wellness visit billing', 'Immunization coding', 'Screening procedures', 'Preventive counseling']
    },
    {
      icon: Heart,
      title: 'Chronic Disease Management',
      description: 'Expert billing for chronic care management, remote patient monitoring, and complex chronic condition management.',
      features: ['CCM billing support', 'RPM program billing', 'Care coordination', 'Chronic condition coding']
    },
    {
      icon: Activity,
      title: 'Acute Care Visits',
      description: 'Accurate E&M coding for sick visits, urgent care needs, and same-day appointments across all patient age groups.',
      features: ['E&M level optimization', 'Problem-focused visits', 'New patient encounters', 'Established patient care']
    },
    {
      icon: Stethoscope,
      title: 'Comprehensive Care Services',
      description: 'Billing for complete family medicine services including procedures, counseling, and care coordination activities.',
      features: ['In-office procedures', 'Counseling services', 'Care coordination', 'Transitional care management']
    }
  ];

  const benefits = [
    { metric: '27%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '40%', label: 'Reduction in Denials', icon: Shield },
    { metric: '13 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden">
      <SEOHead
        title="Family Medicine Billing Services | Primary Care Medical Billing"
        description="Comprehensive family medicine billing for primary care practices. Expert coding for preventive care, chronic disease management, and family practice services."
        canonical="https://medtransic.com/specialties/family-medicine"
        keywords="family medicine billing, primary care billing, family practice billing, preventive care billing, general practice billing"
        ogType="article"
      />

      <HeroSection
        badge={{ icon: Users, text: "Family Medicine Billing Specialists" }}
        title="Expert Family & Internal Medicine Billing"
        description="Maximize your family medicine practice revenue with specialized billing expertise in preventive care, chronic care management, and comprehensive primary care services. Our certified coders understand the complexities of multi-generational patient care, wellness visits, and the unique requirements of family practice billing."
        buttons={[
          { text: "Schedule Free Consultation", href: "/contact", variant: "primary" },
          { text: "View Our Services", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "27%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "97%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "40%", label: "Reduction in Denials", icon: Shield },
          { value: "13 Days", label: "Faster Payment", icon: Clock }
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
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Family medicine doctor examining patient in primary care setting"
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
              Common Family Medicine Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Family medicine practices face unique billing complexities with preventive care
              services, chronic disease management, and multi-generational patient populations.
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
              How Medtransic Solves Your Family Medicine Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized family medicine billing solutions address each challenge with
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
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-green-600" />
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
              Specialized Family Medicine Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for family medicine and
              internal medicine practices.
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
                  iconColor="text-green-600"
                  iconBgColor="bg-green-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 shadow-xl border border-green-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Family Medicine Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized family medicine billing expertise delivers measurable improvements
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic transformed our family practice billing. Their expertise in preventive care
                and chronic care management helped us identify over $150,000 in previously unbilled
                services annually. The team's knowledge of age-specific coding and wellness visits has
                been exceptional."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Thompson, MD</p>
                <p className="text-green-600 font-medium">Board-Certified Family Medicine Physician</p>
                <p className="text-gray-500">Thompson Family Health Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('family-medicine')} />
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
              Ready to Optimize Your Family Medicine Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our family medicine billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with preventive care and
              chronic disease management requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-green-600 text-white px-12 py-5 rounded-full hover:bg-green-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-green-600 text-green-600 px-12 py-5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Certified Family Medicine Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamilyMedicinePage;
