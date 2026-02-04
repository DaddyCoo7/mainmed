import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Footprints,
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
  Scissors,
  Scan,
  Thermometer
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const PodiatryPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Routine Foot Care Exclusions',
      description: 'Medicare and many insurers do not cover routine foot care unless specific Class A-D systemic conditions are documented.',
      impact: 'Claim denials and patient disputes when routine care is incorrectly billed',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Thermometer,
      title: 'Diabetic Foot Care Documentation',
      description: 'Proving medical necessity for diabetic foot care requires precise documentation of Class findings, PAD, neuropathy, and qualifying conditions.',
      impact: 'Denials for diabetic foot care without proper systemic condition documentation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Scissors,
      title: 'Nail Debridement vs Trimming',
      description: 'Distinguishing between covered nail debridement (mycotic nails, onychomycosis) and non-covered routine nail trimming is critical for compliance.',
      impact: 'Compliance issues and denials from billing routine trimming as debridement',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FileText,
      title: 'Class A-D Findings Requirements',
      description: 'Medicare requires documentation of specific Class A, B, C, or D findings for routine foot care coverage, which many practices struggle to properly document.',
      impact: 'Lost revenue from inability to bill routine care with qualifying conditions',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Orthotic Device Billing Complexity',
      description: 'Custom orthotics, accommodative inserts, and diabetic shoes have specific HCPCS codes, modifiers, and documentation requirements.',
      impact: 'Reduced reimbursement or denials for improper orthotic billing',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      title: 'Surgical Procedure Coding',
      description: 'Bunionectomies, hammertoe corrections, and neuroma excisions require precise CPT coding with proper approach and extent modifiers.',
      impact: 'Underbilling complex surgical procedures or denials from incorrect codes',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: Footprints,
      title: 'Podiatry-Certified Billing Specialists',
      description: 'Our team includes certified coders with specialized training in podiatric medicine, diabetic foot care, and routine care exclusion compliance.',
      benefits: [
        'Expert CPT coding for all podiatric procedures',
        'Class finding documentation expertise',
        'Routine care exclusion compliance',
        'Diabetic foot care medical necessity validation'
      ]
    },
    {
      icon: Shield,
      title: 'Diabetic Foot Care Documentation Support',
      description: 'Comprehensive guidance on documenting qualifying systemic conditions, Class findings, and medical necessity for diabetic foot care services.',
      benefits: [
        'Systemic condition documentation templates',
        'Class A-D finding identification',
        'PAD and neuropathy verification',
        'Q-modifier application expertise'
      ]
    },
    {
      icon: Settings,
      title: 'Orthotic Device Billing Expertise',
      description: 'Specialized knowledge of HCPCS codes for custom orthotics, diabetic shoes, and foot orthoses with proper modifier application.',
      benefits: [
        'Custom orthotic HCPCS coding (L3000 series)',
        'Diabetic shoe program billing (A5500-A5514)',
        'Modifier LT/RT application',
        'Documentation for medical necessity'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Surgical Procedure Optimization',
      description: 'Maximize reimbursement for bunionectomies, hammertoe repairs, and other foot surgeries with accurate CPT coding and global period management.',
      benefits: [
        'Surgical CPT code optimization',
        'Multiple procedure modifier application',
        'Global period tracking',
        'Proper bilateral procedure coding'
      ]
    }
  ];

  const services = [
    {
      icon: Thermometer,
      title: 'Diabetic Foot Care Billing',
      description: 'Expert billing for diabetic wound care, neuropathy treatment, and routine foot care with proper Class finding documentation.',
      features: ['Diabetic wound debridement', 'Neuropathy management', 'Routine care with Class findings', 'Ulcer treatment coding']
    },
    {
      icon: Scissors,
      title: 'Nail & Skin Procedures',
      description: 'Accurate billing for nail debridement, mycotic nail treatment, callus removal, and wart destruction with medical necessity documentation.',
      features: ['Nail debridement (11720-11721)', 'Mycotic nail treatment (11730)', 'Callus removal (11055-11057)', 'Wart destruction (17110-17111)']
    },
    {
      icon: Zap,
      title: 'Surgical Procedures',
      description: 'Comprehensive billing for bunionectomies, hammertoe corrections, neuroma excisions, and reconstructive foot surgery.',
      features: ['Bunionectomy procedures (28290-28299)', 'Hammertoe repair (28285)', 'Neuroma excision (28080)', 'Reconstructive surgery']
    },
    {
      icon: Settings,
      title: 'Orthotics & DME Billing',
      description: 'Specialized billing for custom foot orthotics, diabetic shoes, AFOs, and other durable medical equipment.',
      features: ['Custom orthotic devices (L3000 series)', 'Diabetic shoe program', 'AFO billing (L1900 series)', 'Insert and modification billing']
    }
  ];

  const benefits = [
    { metric: '26%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '46%', label: 'Reduction in Denials', icon: Shield },
    { metric: '14 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Podiatry Billing Services | Foot & Ankle Medical Billing"
        description="Podiatry billing for diabetic foot care, bunion surgery, toenail procedures, and orthotic fittings. Accurately code foot surgery, wound care, and routine foot care for Medicare diabetic patients."
        canonical="https://medtransic.com/specialties/podiatry"
        keywords="podiatry billing, foot care billing, podiatrist billing services, foot surgery billing, ankle procedure billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Podiatry"
        description="Podiatry billing for diabetic foot care, bunion surgery, toenail procedures, and orthotic fittings. Accurately code foot surgery, wound care, and routine foot care for Medicare diabetic patients."
        url="https://medtransic.com/specialties/podiatry"
      />
      <HeroSection
        badge={{ icon: Footprints, text: "Podiatry Billing Specialists" }}
        title="Expert Podiatry Medical Billing Services"
        description="Maximize your podiatry practice revenue with specialized billing expertise in diabetic foot care, routine care exclusions, and orthotic device billing. Our certified podiatric billing specialists understand Class finding documentation, medical necessity requirements, and complex foot care billing regulations."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "96%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "26%", label: "Revenue Increase", icon: TrendingUp },
          { value: "46%", label: "Fewer Denials", icon: Shield },
          { value: "14 Days", label: "Faster Payments", icon: Clock }
        ]}
      />

      <div className="bg-white relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Common Podiatry Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Podiatry practices face unique billing complexities with routine care exclusions, diabetic
              foot care documentation, and medical necessity requirements that significantly impact revenue.
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
              How Medtransic Solves Your Podiatry Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized podiatry billing solutions address each challenge with
              foot care-specific expertise and proven methodologies.
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
              Specialized Podiatry Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for podiatry practices
              and foot care specialists.
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
                Proven Results for Podiatry Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized podiatry billing expertise delivers measurable improvements in revenue
                and operational efficiency for foot care practices.
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
                "Podiatry billing is incredibly complex with routine care exclusions and Class finding
                requirements. Medtransic's team has specialized podiatry expertise and helped us properly
                document diabetic foot care with qualifying systemic conditions. Their guidance on routine
                care exclusion compliance and orthotic billing has increased our collections by 28% while
                eliminating compliance concerns."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Robert Kim, DPM</p>
                <p className="text-teal-600 font-medium">Board-Certified Podiatrist</p>
                <p className="text-gray-500">Advanced Foot & Ankle Care Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('podiatry')} />
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
              Ready to Optimize Your Podiatry Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our podiatry billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with routine care exclusions and diabetic foot care requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-teal-600 text-white px-12 py-5 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Podiatry Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-teal-600 text-teal-600 px-12 py-5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Podiatry Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700 font-medium">Podiatry-Certified Coders</span>
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
    </>
  );
};

export default PodiatryPage;
