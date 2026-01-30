import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wind,
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
  Syringe,
  FlaskConical,
  Droplets,
  TestTube
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const AllergyImmunologyPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Immunotherapy Billing Complexity',
      description: 'Billing for allergy shots requires tracking build-up and maintenance phases, multiple injections per visit, and proper CPT code selection.',
      impact: 'Underbilling or denials due to improper code usage',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: TestTube,
      title: 'Testing Panel Bundling',
      description: 'Allergy testing involves complex bundling rules for skin tests, patch tests, and in-vitro testing that vary by payer.',
      impact: 'Revenue loss from incorrect bundling or unbundling',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Syringe,
      title: 'Venom Therapy Coding',
      description: 'Specialized venom immunotherapy has unique coding requirements and higher reimbursement rates that require specific expertise.',
      impact: 'Missed revenue from improper venom therapy billing',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FileText,
      title: 'Biologics Prior Authorization',
      description: 'Expensive biologic medications for asthma and chronic urticaria require extensive documentation and prior authorization.',
      impact: 'Treatment delays and high administrative burden',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Multi-Allergen Extract Billing',
      description: 'Billing for custom allergen extracts and mixing requires proper documentation of ingredients and concentrations.',
      impact: 'Denials due to insufficient extract documentation',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Time-Based Service Documentation',
      description: 'Oral food challenges and drug desensitization procedures require extensive time-based documentation and monitoring.',
      impact: 'Underpayment for lengthy supervised procedures',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Wind,
      title: 'Allergy-Certified Billing Team',
      description: 'Our team specializes in allergy and immunology billing with deep knowledge of immunotherapy, testing, and biologic medication coding.',
      benefits: [
        'Accurate immunotherapy administration coding',
        'Expertise in testing panel bundling rules',
        'Knowledge of venom therapy requirements',
        'Proper biologic medication billing'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Specialists',
      description: 'Dedicated team handles all prior authorizations for biologic medications and specialty procedures with proven success rates.',
      benefits: [
        'Faster biologic medication approvals',
        'Reduced administrative burden on staff',
        'Higher approval rates through expert documentation',
        'Streamlined patient treatment initiation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Maximize reimbursements through proper coding of immunotherapy, testing panels, and biologic administration.',
      benefits: [
        'Capture all immunotherapy doses correctly',
        'Optimize testing panel billing',
        'Proper extract and mixing billing',
        'Improved cash flow management'
      ]
    },
    {
      icon: Monitor,
      title: 'Real-Time Claim Tracking',
      description: 'Advanced platform provides visibility into immunotherapy series, testing claims, and biologic medication billing.',
      benefits: [
        '24/7 access to billing dashboard',
        'Immunotherapy series tracking',
        'Automated denial alerts',
        'Performance analytics and insights'
      ]
    }
  ];

  const services = [
    {
      icon: Syringe,
      title: 'Immunotherapy Billing',
      description: 'Expert billing for allergen immunotherapy including build-up, maintenance, venom therapy, and sublingual immunotherapy.',
      features: ['Multi-dose administration', 'Venom immunotherapy', 'Build-up phase tracking', 'SCIT and SLIT billing']
    },
    {
      icon: TestTube,
      title: 'Allergy Testing',
      description: 'Comprehensive billing for skin testing, patch testing, in-vitro testing, and challenge procedures with proper bundling.',
      features: ['Percutaneous testing', 'Intradermal testing', 'In-vitro allergen testing', 'Oral food challenges']
    },
    {
      icon: Droplets,
      title: 'Biologic Medications',
      description: 'Specialized billing for biologic injections and infusions for asthma, chronic urticaria, and other conditions.',
      features: ['Biologic administration', 'Infusion billing', 'Drug wastage coding', 'J-code management']
    },
    {
      icon: FlaskConical,
      title: 'Extract & Lab Services',
      description: 'Complete billing for allergen extract preparation, mixing, and in-office laboratory procedures.',
      features: ['Extract preparation', 'Custom mixing billing', 'Lab procedure coding', 'Supply billing']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '42%', label: 'Reduction in Denials', icon: Shield },
    { metric: '10 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Allergy & Immunology Billing | Allergy Testing Medical Billing"
        description="Allergy and immunology billing for skin testing, venom immunotherapy, food allergy testing, and desensitization treatments. Accurately code multiple allergen testing and maintenance immunotherapy visits."
        canonical="https://medtransic.com/specialties/allergy-immunology"
        keywords="allergy billing, immunology billing, allergy testing billing, immunotherapy billing, allergist billing services"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Allergy Immunology"
        description="Allergy and immunology billing for skin testing, venom immunotherapy, food allergy testing, and desensitization treatments. Accurately code multiple allergen testing and maintenance immunotherapy visits."
        url="https://medtransic.com/specialties/allergy-immunology"
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
                Allergy & Immunology Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Allergy & Immunology Medical Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your allergy and immunology practice revenue with specialized billing expertise.
            Our certified coders understand the complexities of immunotherapy, allergy testing,
            biologic medications, and extract billing to optimize your reimbursements.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Allergist performing skin testing on patient"
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
              Common Allergy & Immunology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Allergy and immunology practices face unique billing complexities that can significantly
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

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How Medtransic Solves Your Allergy & Immunology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized allergy and immunology billing solutions address each pain point with
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
              Specialized Allergy & Immunology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for allergy and immunology
              practices and subspecialties.
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
                Proven Results for Allergy & Immunology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized allergy and immunology billing expertise delivers measurable improvements
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
                <Stethoscope className="w-8 h-8 text-teal-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's allergy and immunology billing expertise has been a game-changer for our practice.
                Their deep understanding of immunotherapy coding and biologic medication billing has increased
                our revenue by 35% and dramatically reduced our prior authorization delays."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. James Patterson, MD</p>
                <p className="text-teal-600 font-medium">Board-Certified Allergist & Immunologist</p>
                <p className="text-gray-500">Comprehensive Allergy & Asthma Care</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('allergy-immunology')} />
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
              Ready to Optimize Your Allergy & Immunology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our allergy and immunology billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Allergy Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Allergy Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Allergy-Certified Coders</span>
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

export default AllergyImmunologyPage;
