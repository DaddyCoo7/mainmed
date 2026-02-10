import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
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
  Microscope,
  Scissors,
  Sun,
  Star
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const DermatologyPage: React.FC = () => {

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Cosmetic vs Medical Coding',
      description: 'Distinguishing between cosmetic procedures (non-covered) and medically necessary dermatologic treatments requires precise documentation and coding.',
      impact: 'Improper classification leads to claim denials and patient disputes',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Complex Procedure Coding',
      description: 'Dermatology involves numerous procedures with specific size, location, and technique modifiers that must be accurately applied.',
      impact: 'Incorrect modifiers result in underpayment or denials',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Microscope,
      title: 'Pathology Coordination',
      description: 'Managing billing for biopsies, excisions, and coordinating with pathology labs for proper claim submission.',
      impact: 'Missed revenue from unbilled pathology services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Sun,
      title: 'Phototherapy Billing Complexity',
      description: 'UV phototherapy for psoriasis and other conditions requires tracking treatment units and frequency limitations.',
      impact: 'Denials due to frequency limits or improper documentation',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Multiple Lesion Management',
      description: 'Billing for multiple lesion removals, destructions, or biopsies in a single visit requires complex coding and bundling knowledge.',
      impact: 'Revenue loss from improper bundling or unbilled procedures',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Delays',
      description: 'Biologic medications and certain procedures require extensive prior authorizations that delay patient care.',
      impact: 'Treatment delays and administrative burden on clinical staff',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Sparkles,
      title: 'Dermatology-Certified Coders',
      description: 'Our team includes certified coders with specialized training in dermatologic procedures and cosmetic vs medical coding distinctions.',
      benefits: [
        'Accurate CPT and ICD-10 coding for all skin procedures',
        'Expertise in lesion measurement and site coding',
        'Knowledge of cosmetic exclusion guidelines',
        'Proper modifier application for multiple procedures'
      ]
    },
    {
      icon: Shield,
      title: 'Documentation & Compliance',
      description: 'Comprehensive documentation review ensures medical necessity is clearly established for all procedures and treatments.',
      benefits: [
        'Medical necessity validation before submission',
        'Photographic documentation guidance',
        'Pathology report coordination',
        'Audit-resistant claim submission'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Maximize reimbursements through proper coding of complex procedures, biopsies, and pathology coordination.',
      benefits: [
        'Capture all billable procedures per visit',
        'Proper bundling and unbundling decisions',
        'Reduced accounts receivable aging',
        'Improved cash flow management'
      ]
    },
    {
      icon: Monitor,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorizations for biologic medications and specialty procedures.',
      benefits: [
        'Faster approval for biologic therapies',
        'Reduced administrative burden',
        'Higher approval rates through proper documentation',
        'Streamlined patient treatment initiation'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Medical Dermatology',
      description: 'Expert billing for acne, eczema, psoriasis, and other medical skin conditions with proper E/M coding.',
      features: ['Medical consultations', 'Chronic condition management', 'Phototherapy billing', 'Biologic infusions']
    },
    {
      icon: Scissors,
      title: 'Surgical Procedures',
      description: 'Specialized billing for biopsies, excisions, Mohs surgery, and skin cancer removal with accurate size coding.',
      features: ['Biopsy procedures', 'Excisions with repair', 'Mohs micrographic surgery', 'Flap and graft procedures']
    },
    {
      icon: Zap,
      title: 'Cosmetic Procedures',
      description: 'Clear billing distinction for cosmetic treatments and proper patient financial responsibility communication.',
      features: ['Cosmetic procedure tracking', 'Patient payment processing', 'Medical crossover identification', 'Cash billing optimization']
    },
    {
      icon: Microscope,
      title: 'Pathology & Lab Billing',
      description: 'Comprehensive billing for in-office procedures with pathology coordination and proper specimen tracking.',
      features: ['Pathology coordination', 'Specimen tracking', 'Lab result integration', 'Professional fee billing']
    }
  ];

  const benefits = [
    { metric: '28%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '45%', label: 'Reduction in Denials', icon: Shield },
    { metric: '12 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Dermatology Billing Services | Skin Care Medical Billing & Coding"
        description="Expert dermatology billing for medical and cosmetic procedures. Specialized coding for Mohs surgery, biopsies, laser treatments, and dermatologic procedures."
        canonical="https://medtransic.com/specialties/dermatology"
        keywords="dermatology billing, skin care billing, Mohs surgery billing, dermatology coding, cosmetic dermatology billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Dermatology"
        description="Expert dermatology billing for medical and cosmetic procedures. Specialized coding for Mohs surgery, biopsies, laser treatments, and dermatologic procedures."
        url="https://medtransic.com/specialties/dermatology"
      />
      <HeroSection
        badge={{
          icon: Sparkles,
          text: "Dermatology Billing Specialists"
        }}
        title="Expert Dermatology Medical Billing Services"
        description="Maximize your dermatology practice revenue with specialized billing expertise. Our certified coders understand the complexities of skin procedures, cosmetic vs medical distinctions, and pathology coordination to optimize your reimbursements."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "28%", label: "Revenue Increase", icon: TrendingUp },
          { value: "97%", label: "Clean Claim Rate", icon: CheckCircle },
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
              Common Dermatology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dermatology practices face unique billing complexities that can significantly
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
              How Medtransic Solves Your Dermatology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized dermatology billing solutions address each pain point with
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
                    <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-pink-600" />
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
              Specialized Dermatology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for dermatology practices
              and subspecialties.
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
                Proven Results for Dermatology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized dermatology billing expertise delivers measurable improvements
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
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-pink-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's dermatology billing expertise has transformed our practice revenue.
                Their understanding of cosmetic versus medical coding and pathology coordination
                has increased our collections by 32% while significantly reducing claim denials."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Sarah Chen, MD</p>
                <p className="text-pink-600 font-medium">Board-Certified Dermatologist</p>
                <p className="text-gray-500">Skin Health & Wellness Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('dermatology')} />
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
              Ready to Optimize Your Dermatology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our dermatology billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-pink-600 text-white px-12 py-5 rounded-full hover:bg-pink-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Dermatology Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-pink-600 text-pink-600 px-12 py-5 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Dermatology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dermatology-Certified Coders</span>
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

export default DermatologyPage;
