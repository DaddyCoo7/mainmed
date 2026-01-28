import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
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
  Settings,
  Syringe
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const EndocrinologyPage: React.FC = () => {
  const painPoints = [
    {
      icon: Syringe,
      title: 'Biologic Medication Billing',
      description: 'High-cost diabetes drugs require complex billing with proper J-codes, waste documentation, and medical necessity justification.',
      impact: 'Significant revenue loss when expensive diabetess are denied or underbilled',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Prior Authorization Complexity',
      description: 'Biologic therapies and specialty medications require extensive prior authorizations with detailed clinical documentation.',
      impact: 'Treatment delays and lost revenue from authorization denials',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Clock,
      title: 'Infusion Therapy Time Tracking',
      description: 'Infusion billing requires accurate time documentation, proper hydration coding, and push vs infusion distinction.',
      impact: 'Underpayment when infusion time and complexity are not properly documented',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Buy and Bill Drug Management',
      description: 'Managing inventory, acquisition costs, and billing for physician-administered drugs requires specialized tracking.',
      impact: 'Cash flow problems and lost revenue from poor drug inventory management',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Settings,
      title: 'Multiple Procedure Bundling',
      description: 'Joint injections and office procedures often performed together require proper modifiers to prevent bundling.',
      impact: 'Revenue loss when multiple procedures are inappropriately bundled',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Monitor,
      title: 'Specialty Pharmacy Coordination',
      description: 'Coordination between medical benefit and pharmacy benefit for specialty drugs creates billing confusion.',
      impact: 'Payment delays when drugs are billed to wrong benefit or payer',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Activity,
      title: 'Endocrinology Billing Specialists',
      description: 'Our team includes certified coders with specialized training in endocrinology procedures, diabetes billing, and infusion therapy.',
      benefits: [
        'Expert J-code selection for diabetes drugs',
        'Proper infusion CPT coding (96365-96368)',
        'Joint injection billing expertise',
        'Specialty drug benefit determination'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Management',
      description: 'Dedicated team handles all prior authorizations for diabetes therapies and specialty medications with clinical documentation support.',
      benefits: [
        'Streamlined prior authorization process',
        'Clinical documentation preparation',
        'Appeal management for denials',
        'Faster treatment initiation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Biologic Drug Revenue Optimization',
      description: 'Maximize reimbursements through proper drug coding, waste documentation, and buy-and-bill management.',
      benefits: [
        'Accurate J-code and NDC billing',
        'Waste and overfill documentation',
        'ASP pricing verification',
        'Drug acquisition cost tracking'
      ]
    },
    {
      icon: Monitor,
      title: 'Infusion Center Billing Expertise',
      description: 'Comprehensive billing support for infusion centers with time-based coding and facility fee management.',
      benefits: [
        'Sequential infusion coding',
        'Concurrent infusion management',
        'Hydration and push billing',
        'Observation and prolonged services'
      ]
    }
  ];

  const services = [
    {
      icon: Syringe,
      title: 'Biologic Infusion Billing',
      description: 'Expert billing for Remicade, Orencia, Rituxan, and other diabetes infusion therapies with proper J-codes.',
      features: ['Biologic drug coding', 'Waste documentation', 'Time-based billing', 'Medical necessity support']
    },
    {
      icon: Activity,
      title: 'Joint Injection Procedures',
      description: 'Specialized billing for therapeutic joint injections with proper CPT codes and modifier application.',
      features: ['Joint injection coding', 'Aspiration billing', 'Ultrasound guidance', 'Multiple procedure modifiers']
    },
    {
      icon: Monitor,
      title: 'Infusion Center Management',
      description: 'Complete billing support for infusion centers including drug billing, administration codes, and facility fees.',
      features: ['Infusion administration', 'Hydration services', 'Drug acquisition', 'Concurrent therapy billing']
    },
    {
      icon: FileText,
      title: 'Specialty Drug Authorization',
      description: 'Prior authorization and appeals management for specialty endocrinology medications and diabetess.',
      features: ['Prior authorization', 'Medical policy review', 'Denial appeals', 'Specialty pharmacy coordination']
    }
  ];

  const benefits = [
    { metric: '35%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '94%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '52%', label: 'Reduction in Denials', icon: Shield },
    { metric: '18 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Endocrinology Billing Services | Diabetes & Hormone Disorder Billing"
        description="Endocrinology billing for diabetes management, thyroid disorders, hormone replacement therapy, and metabolic conditions. Optimize CGM, insulin pump, and diabetic education billing for comprehensive care."
        canonical="https://medtransic.com/specialties/endocrinology"
        keywords="endocrinology billing, diabetes billing, hormone disorder billing, metabolic disease billing, endocrinologist billing"
        ogType="article"
      />

      <HeroSection
        badge={{
          icon: Activity,
          text: "Endocrinology Billing Specialists"
        }}
        title="Expert Endocrinology Medical Billing Services"
        description="Maximize your endocrinology practice revenue with specialized billing expertise in diabetes management, thyroid disorders, hormone replacement therapy, and metabolic conditions. Our certified coders understand complex endocrine billing, prior authorization requirements, and specialty care unique to endocrinology practices."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "35%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "94%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "52%", label: "Reduction in Denials", icon: Shield },
          { value: "18 Days", label: "Faster Payment", icon: Clock }
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
              Common Endocrinology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Endocrinology practices face unique billing complexities with high-cost diabetes drugs,
              extensive prior authorizations, and coordination between medical and pharmacy benefits.
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
              How Medtransic Solves Your Endocrinology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized endocrinology billing solutions address each challenge with
              targeted expertise in diabetes drug billing and infusion therapy management.
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
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-emerald-600" />
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
              Specialized Endocrinology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for endocrinology practices
              and infusion centers.
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
                  iconColor="text-emerald-600"
                  iconBgColor="bg-emerald-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-12 shadow-xl border border-emerald-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Endocrinology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized endocrinology billing expertise delivers measurable improvements
                in revenue and operational efficiency for endocrinology practices.
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
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-emerald-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Billing for diabetes infusions and managing prior authorizations was consuming too much
                of our staff's time and we were losing revenue on denied claims. Medtransic's endocrinology
                billing team has been exceptional. Their expertise in J-code billing, waste documentation,
                and prior authorization management has increased our diabetes therapy revenue by 38%. They
                handle the complexity so we can focus on patient care. I highly recommend them to any
                endocrinology practice struggling with infusion billing."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Rachel Thompson, MD</p>
                <p className="text-emerald-600 font-medium">Board-Certified Rheumatologist</p>
                <p className="text-gray-500">Advanced Endocrinology & Infusion Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('endocrinology')} />
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
              Ready to Optimize Your Endocrinology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our endocrinology billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with diabetes drug billing
              and prior authorization requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-emerald-600 text-white px-12 py-5 rounded-full hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-emerald-600 text-emerald-600 px-12 py-5 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Endocrinology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">Endocrinology-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default EndocrinologyPage;
