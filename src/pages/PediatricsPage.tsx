import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Baby,
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
  Syringe,
  Target,
  Award,
  Stethoscope,
  Monitor,
  HeartPulse,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const PediatricsPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Age-Based Coding Complexity',
      description: 'Pediatric billing requires age-specific CPT codes and modifiers for accurate reimbursement across different developmental stages.',
      impact: 'Incorrect age modifiers lead to claim denials and underpayment',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Syringe,
      title: 'Immunization Billing Challenges',
      description: 'Complex vaccine billing with multiple components including administration, counseling, and product codes.',
      impact: 'Lost revenue from incomplete immunization billing',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Preventive vs Sick Visit Coding',
      description: 'Distinguishing between well-child visits and sick visits while properly billing for both on the same day.',
      impact: 'Reduced reimbursement from improper visit type classification',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Clock,
      title: 'High Volume, Lower Reimbursement',
      description: 'Pediatric practices handle high patient volumes with lower per-visit reimbursements, requiring efficient billing processes.',
      impact: 'Cash flow challenges from billing inefficiencies',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Missed Preventive Service Revenue',
      description: 'Failure to capture all billable preventive services including developmental screening and anticipatory guidance.',
      impact: 'Significant revenue loss from unbilled preventive services',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: BarChart3,
      title: 'Multiple Payer Policies',
      description: 'Different insurance policies for pediatric services including CHIP, Medicaid, and commercial payers with varying requirements.',
      impact: 'Increased denials due to payer-specific requirement variations',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: Baby,
      title: 'Pediatric-Certified Coding Team',
      description: 'Our specialized coders understand age-specific requirements and pediatric coding nuances for accurate billing.',
      benefits: [
        'Expertise in age-based CPT code selection',
        'Proper use of pediatric modifiers',
        'Knowledge of developmental milestone coding',
        'Reduced coding errors and claim rejections'
      ]
    },
    {
      icon: Syringe,
      title: 'Comprehensive Immunization Billing',
      description: 'Complete vaccine billing capturing administration, counseling, and product codes for maximum reimbursement.',
      benefits: [
        'Accurate vaccine product and administration coding',
        'Proper counseling code application',
        'VFC program compliance',
        'Maximized immunization revenue'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Preventive Care Optimization',
      description: 'Ensure all well-child visits and preventive services are properly documented and billed for optimal revenue.',
      benefits: [
        'Complete well-child visit billing',
        'Developmental screening capture',
        'Anticipatory guidance coding',
        'Improved preventive care revenue'
      ]
    },
    {
      icon: Monitor,
      title: 'Real-Time Eligibility Verification',
      description: 'Advanced technology verifies insurance eligibility before appointments to reduce claim denials and patient issues.',
      benefits: [
        'Instant insurance verification',
        'CHIP and Medicaid eligibility checks',
        'Reduced claim denials',
        'Improved patient satisfaction'
      ]
    }
  ];

  const services = [
    {
      icon: HeartPulse,
      title: 'Well-Child Visit Billing',
      description: 'Complete billing for preventive checkups with age-appropriate screening and counseling codes.',
      features: ['Age-specific preventive codes', 'Developmental screening', 'Anticipatory guidance', 'Vision/hearing screening']
    },
    {
      icon: Syringe,
      title: 'Immunization Services',
      description: 'Comprehensive vaccine billing including administration, counseling, and VFC program compliance.',
      features: ['Vaccine administration codes', 'Counseling documentation', 'VFC program billing', 'Multi-vaccine visits']
    },
    {
      icon: Stethoscope,
      title: 'Sick Visit & Acute Care',
      description: 'Accurate billing for illness visits, same-day preventive and sick visits, and urgent care services.',
      features: ['E/M code optimization', 'Same-day visit billing', 'Modifier 25 application', 'Procedure coding']
    },
    {
      icon: Activity,
      title: 'Specialty Pediatric Services',
      description: 'Billing for subspecialty services including asthma management, ADHD treatment, and chronic condition care.',
      features: ['Chronic care management', 'Behavioral health integration', 'Asthma care billing', 'Special needs services']
    }
  ];

  const benefits = [
    { metric: '30%', label: 'Increase in Preventive Revenue', icon: TrendingUp },
    { metric: '99%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '45%', label: 'Reduction in Denials', icon: Shield },
    { metric: '12 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Pediatric Billing Services | Children's Healthcare Medical Billing"
        description="Professional pediatric billing services for primary care and specialty pediatrics. Expert coding for well-child visits, immunizations, and pediatric procedures."
        canonical="https://medtransic.com/specialties/pediatrics"
        keywords="pediatric billing, children's healthcare billing, pediatrician billing, well-child visit billing, pediatric coding"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Pediatrics"
        description="Professional pediatric billing services for primary care and specialty pediatrics. Expert coding for well-child visits, immunizations, and pediatric procedures."
        url="https://medtransic.com/specialties/pediatrics"
      />
      <HeroSection
        badge={{
          icon: Baby,
          text: "Pediatric Billing Specialists"
        }}
        title="Expert Pediatric Medical Billing Services"
        description="Maximize your pediatric practice revenue with specialized billing expertise. Our certified coders understand age-specific requirements, immunization billing, and the unique complexities of pediatric preventive and acute care services."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "30%", label: "Preventive Revenue Increase", icon: TrendingUp },
          { value: "99%", label: "Clean Claim Rate", icon: CheckCircle },
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
              Common Pediatric Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pediatric practices face unique billing complexities that require specialized
              knowledge and attention to detail.
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
              How Medtransic Solves Your Pediatric Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized pediatric billing solutions address each pain point with
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
              Specialized Pediatric Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for pediatric practices
              and children's healthcare providers.
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
                  iconColor="text-pink-600"
                  iconBgColor="bg-pink-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-12 shadow-xl border border-pink-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Pediatric Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized pediatric billing expertise delivers measurable improvements
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
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">{benefit.metric}</div>
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
                "Medtransic transformed our pediatric billing operations. Their expertise in immunization
                billing and preventive care coding increased our revenue by 35% while reducing our
                administrative workload. They truly understand the complexities of pediatric billing."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Martinez, MD</p>
                <p className="text-blue-600 font-medium">Board-Certified Pediatrician</p>
                <p className="text-gray-500">Bright Futures Pediatric Care</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('pediatrics')} />
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
              Ready to Optimize Your Pediatric Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our pediatric billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-pink-600 text-white px-12 py-5 rounded-full hover:bg-pink-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Pediatric Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-pink-600 text-pink-600 px-12 py-5 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Pediatric Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-gray-700 font-medium">Pediatric-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-pink-600 hover:text-pink-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default PediatricsPage;
