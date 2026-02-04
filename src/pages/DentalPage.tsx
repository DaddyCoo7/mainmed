import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smile,
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
  ClipboardCheck,
  FileSearch,
  Network
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const DentalPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: Network,
      title: 'CDT to CPT Crosswalk Complexity',
      description: 'Converting dental procedures (CDT codes) to medical billing (CPT codes) for medically necessary oral surgery requires specialized expertise and proper documentation.',
      impact: 'Lost revenue from medically necessary procedures when crosswalk coding is not done correctly',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileSearch,
      title: 'Medical Necessity Documentation',
      description: 'Proving medical necessity for dental procedures to medical insurance requires extensive clinical documentation and narrative justification.',
      impact: 'Claim denials when medical necessity is not properly documented',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Dual Billing Optimization',
      description: 'Determining when to bill dental insurance (CDT) vs medical insurance (CPT) for oral surgery and trauma requires expertise in both coding systems.',
      impact: 'Underbilling when procedures qualify for higher medical insurance reimbursement',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FileText,
      title: 'Pre-Authorization Complexity',
      description: 'Medical insurance pre-authorization for oral surgery procedures requires different documentation than dental pre-auth with longer approval times.',
      impact: 'Treatment delays and patient dissatisfaction from pre-auth complications',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Coordination of Benefits Issues',
      description: 'Managing primary/secondary coverage between dental and medical insurance when both may be responsible creates coordination challenges.',
      impact: 'Payment delays and reduced collections from COB billing errors',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: ClipboardCheck,
      title: 'Narrative Report Requirements',
      description: 'Medical insurance claims for dental procedures often require detailed narrative reports explaining clinical necessity that dental billing does not.',
      impact: 'Increased denials and administrative burden creating narrative documentation',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Smile,
      title: 'Certified Dental Billing Specialists',
      description: 'Our team includes certified coders with dual expertise in both CDT dental coding and CPT medical coding for oral surgery crossovers.',
      benefits: [
        'Expert CDT and CPT crosswalk coding',
        'Medical necessity documentation support',
        'Oral surgery and trauma billing expertise',
        'Maximized reimbursement through proper code selection'
      ]
    },
    {
      icon: Network,
      title: 'Medical Crossover Expertise',
      description: 'Specialized knowledge of when dental procedures qualify for medical insurance billing with proper CPT code conversion and ICD-10 diagnosis linking.',
      benefits: [
        'Identification of medical crossover opportunities',
        'Proper diagnosis code linking (ICD-10)',
        'Narrative report preparation assistance',
        'Higher reimbursement from medical insurance'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Dual Billing Optimization Systems',
      description: 'Advanced systems identify procedures that qualify for medical billing and automatically track coordination of benefits between dental and medical insurance.',
      benefits: [
        'Automated medical billing opportunity identification',
        'Primary/secondary insurance coordination',
        'Dual claim tracking and follow-up',
        'Reduced coordination of benefits errors'
      ]
    },
    {
      icon: Shield,
      title: 'Pre-Authorization Management',
      description: 'Dedicated team handles pre-authorizations for both dental and medical insurance with proper clinical documentation for approval.',
      benefits: [
        'Faster approval times for oral surgery',
        'Higher pre-auth approval rates',
        'Reduced administrative burden on staff',
        'Improved patient treatment scheduling'
      ]
    }
  ];

  const services = [
    {
      icon: Smile,
      title: 'Routine Dental Billing',
      description: 'Complete CDT coding and billing for preventive, restorative, and periodontal procedures through dental insurance.',
      features: ['Preventive services (D1000)', 'Restorative procedures (D2000)', 'Periodontal treatment (D4000)', 'Endodontic services (D3000)']
    },
    {
      icon: Stethoscope,
      title: 'Oral Surgery Medical Crossover',
      description: 'Specialized billing for medically necessary oral surgery using CPT codes for medical insurance reimbursement.',
      features: ['Surgical extractions (CPT 41899)', 'TMJ procedures', 'Trauma and fracture repair', 'Biopsy and pathology billing']
    },
    {
      icon: Zap,
      title: 'Periodontal Procedure Billing',
      description: 'Expert coding for surgical and non-surgical periodontal treatments with proper documentation and medical crossover identification.',
      features: ['Scaling and root planing', 'Periodontal surgery (D4000)', 'Gingival grafting', 'Bone grafting procedures']
    },
    {
      icon: ClipboardCheck,
      title: 'Orthodontic Billing Management',
      description: 'Monthly payment tracking and insurance billing for orthodontic treatment plans with proper contract management.',
      features: ['Initial placement billing', 'Monthly contract tracking', 'Progress billing', 'Retention phase coding']
    }
  ];

  const benefits = [
    { metric: '35%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '95%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '48%', label: 'Reduction in Denials', icon: Shield },
    { metric: '11 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Dental Billing | CDT & Medical Crossover"
        description="Dental billing combining CDT codes for dental insurance and CPT medical crossover billing. Handle oral surgery, periodontics, and medically necessary dental procedures with proper insurance coordination."
        canonical="https://medtransic.com/specialties/dental"
        keywords="dental billing services, dental practice billing, CDT coding, dental insurance billing, oral surgery billing, dental claims processing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Dental"
        description="Dental billing combining CDT codes for dental insurance and CPT medical crossover billing. Handle oral surgery, periodontics, and medically necessary dental procedures with proper insurance coordination."
        url="https://medtransic.com/specialties/dental"
      />
      <HeroSection
        badge={{ icon: Smile, text: "Dental Practice Billing Specialists" }}
        title="Expert Dental Billing Services"
        description="Maximize your dental practice revenue with specialized billing expertise in CDT coding, medical crossover billing, and dual dental/medical insurance coordination. Our certified dental billing specialists understand the complexities of oral surgery medical necessity, periodontal treatment coding, and orthodontic contract management."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "95%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "35%", label: "Revenue Increase", icon: TrendingUp },
          { value: "48%", label: "Fewer Denials", icon: Shield },
          { value: "11 Days", label: "Faster Payments", icon: Clock }
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
              Common Dental Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dental practices face unique billing complexities with dual coding systems, medical
              crossover requirements, and coordination of benefits that can significantly impact
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

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How Medtransic Solves Your Dental Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized dental billing solutions address each challenge with
              dual coding expertise and proven methodologies.
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
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
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
              Specialized Dental Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for dental practices
              and oral surgery centers.
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
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 shadow-xl border border-blue-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Dental Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized dental billing expertise delivers measurable improvements in revenue
                and operational efficiency for dental practices.
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
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
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Managing both dental and medical billing for our oral surgery practice was incredibly
                challenging. Medtransic's team has expertise in both CDT and CPT coding, and they've
                helped us identify medical crossover opportunities that increased our revenue by 40%.
                Their knowledge of medical necessity documentation and pre-authorization management
                has streamlined our entire billing process."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Michael Chen, DDS</p>
                <p className="text-blue-600 font-medium">Oral & Maxillofacial Surgeon</p>
                <p className="text-gray-500">Advanced Dental & Oral Surgery Associates</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('dental')} />
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
              Ready to Optimize Your Dental Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our dental billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with both dental and medical billing requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Dental Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Dental Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dental-Certified Billing Specialists</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </>
  );
};

export default DentalPage;
