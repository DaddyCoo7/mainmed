import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Eye,
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
  Glasses,
  ScanLine,
  Crosshair
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';

const OphthalmologyPage: React.FC = () => {

  const painPoints = [
    {
      icon: Glasses,
      title: 'Routine vs Medical Determination',
      description: 'Distinguishing between routine eye exams (vision plans) and medical eye exams (medical insurance) requires proper diagnosis coding and medical necessity documentation.',
      impact: 'Claim denials when routine exams are incorrectly billed to medical insurance',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'Refraction Code Billing Restrictions',
      description: 'Medicare and many insurers do not cover refraction (92015) separately, requiring proper billing to patients and coordination with covered services.',
      impact: 'Lost revenue when refraction is not properly billed or collected from patients',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Zap,
      title: 'Surgical Procedure Complexity',
      description: 'Cataract surgery, LASIK, and other ophthalmologic procedures have complex coding with multiple components including pre-op, surgery, and post-op care.',
      impact: 'Underbilling when surgical components are not properly coded and billed',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      title: 'Vision Plan vs Medical Insurance',
      description: 'Managing separate billing systems for vision plans (VSP, EyeMed) and medical insurance requires different fee schedules and authorization processes.',
      impact: 'Payment delays and reduced collections from incorrect plan billing',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: FileText,
      title: 'Bilateral Procedure Modifiers',
      description: 'Many eye procedures are performed bilaterally requiring proper modifier usage (50, LT, RT, E1-E4) to ensure full reimbursement for both eyes.',
      impact: 'Revenue loss from bundling when bilateral modifiers are not correctly applied',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: ScanLine,
      title: 'Diagnostic Testing Documentation',
      description: 'OCT, visual fields, and other diagnostic tests require medical necessity documentation and proper frequency limits to avoid denials.',
      impact: 'Testing claim denials from frequency edits or insufficient medical necessity',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const solutions = [
    {
      icon: Eye,
      title: 'Vision & Medical Billing Specialists',
      description: 'Our team includes certified coders with expertise in both vision plan billing and medical ophthalmology coding requirements.',
      benefits: [
        'Expert routine vs medical exam determination',
        'Proper CPT and ICD-10 code selection',
        'Vision plan and medical insurance coordination',
        'Maximized reimbursement through accurate coding'
      ]
    },
    {
      icon: Glasses,
      title: 'Refraction Code Optimization',
      description: 'Specialized systems track refraction billing separately from covered services with automated patient billing and payment collection.',
      benefits: [
        'Automated refraction patient billing',
        'Proper bundling with covered services',
        'Payment collection tracking',
        'Increased refraction revenue capture'
      ]
    },
    {
      icon: Zap,
      title: 'Surgical Billing Expertise',
      description: 'Advanced knowledge of ophthalmologic surgical coding including cataract procedures, LASIK, retinal surgery, and glaucoma procedures.',
      benefits: [
        'Complete surgical package billing',
        'IOL and premium lens billing',
        'Global period management',
        'Maximized surgical reimbursement'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance Plan Coordination',
      description: 'Expert management of vision plans, Medicare, and commercial insurance with proper eligibility verification and authorization tracking.',
      benefits: [
        'Vision plan contract optimization',
        'Medical necessity documentation support',
        'Pre-authorization management',
        'Reduced claim denials and appeals'
      ]
    }
  ];

  const services = [
    {
      icon: Eye,
      title: 'Routine Eye Exam Billing',
      description: 'Complete billing for routine vision exams through vision plans with proper refraction and materials billing.',
      features: ['Routine eye exams (92004, 92014)', 'Refraction billing (92015)', 'Vision plan claims', 'Contact lens fitting']
    },
    {
      icon: Stethoscope,
      title: 'Medical Eye Condition Coding',
      description: 'Expert billing for medical eye exams treating conditions like glaucoma, cataracts, macular degeneration, and diabetic retinopathy.',
      features: ['Medical eye exams (92012, 92014)', 'Glaucoma management', 'Diabetic eye exams', 'Emergency eye care']
    },
    {
      icon: Zap,
      title: 'Surgical Procedure Billing',
      description: 'Specialized coding for cataract surgery, LASIK, retinal procedures, and other ophthalmologic surgeries.',
      features: ['Cataract surgery (66984)', 'IOL billing and upgrades', 'Retinal procedures', 'Glaucoma surgery']
    },
    {
      icon: ScanLine,
      title: 'Diagnostic Testing & Imaging',
      description: 'Complete billing support for OCT, visual fields, fundus photography, and other diagnostic eye testing.',
      features: ['OCT imaging (92134)', 'Visual field testing (92083)', 'Fundus photography', 'Fluorescein angiography']
    }
  ];

  const benefits = [
    { metric: '33%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '44%', label: 'Reduction in Denials', icon: Shield },
    { metric: '13 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Ophthalmology Billing Services | Eye Care Medical Billing & Coding"
        description="Specialized ophthalmology billing services for routine and medical eye care. Expert coding for cataract surgery, refractive procedures, and retinal treatments."
        canonical="https://medtransic.com/specialties/ophthalmology"
        keywords="ophthalmology billing, eye care billing, optometry billing, cataract surgery billing, vision care billing, retinal billing, refractive surgery billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Ophthalmology"
        description="Specialized ophthalmology billing services for routine and medical eye care. Expert coding for cataract surgery, refractive procedures, and retinal treatments."
        url="https://medtransic.com/specialties/ophthalmology"
      />

      <HeroSection
        badge={{ icon: Eye, text: "Ophthalmology & Optometry Billing Specialists" }}
        title="Expert Eye Care Billing Services"
        description="Maximize your eye care practice revenue with specialized billing expertise in routine vs medical exam differentiation, surgical procedure coding, and vision plan coordination. Our certified ophthalmology billing specialists understand refraction billing, bilateral modifiers, and diagnostic testing requirements unique to vision care practices."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "33%", label: "Revenue Increase", icon: TrendingUp },
          { value: "96%", label: "First-Pass Rate", icon: CheckCircle },
          { value: "44%", label: "Denial Reduction", icon: Shield },
          { value: "13 Days", label: "Faster Payment", icon: Clock }
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
              Common Eye Care Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ophthalmology and optometry practices face unique billing complexities with vision plan
              vs medical insurance distinctions, refraction billing rules, and surgical coding requirements
              that can significantly impact revenue.
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
              How Medtransic Solves Your Eye Care Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized ophthalmology billing solutions address each challenge with
              vision-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-amber-600" />
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
                        <CheckCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
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
              Specialized Eye Care Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for ophthalmology practices
              and optometry clinics.
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
                  iconColor="text-amber-600"
                  iconBgColor="bg-amber-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-12 shadow-xl border border-amber-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Eye Care Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized ophthalmology billing expertise delivers measurable improvements in revenue
                and operational efficiency for eye care practices.
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
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crosshair className="w-8 h-8 text-amber-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Billing for both routine vision care and medical ophthalmology procedures requires specialized
                knowledge that our internal staff struggled with. Medtransic's team understands the nuances
                of vision plan vs medical insurance billing, refraction coding, and cataract surgery billing.
                They've increased our surgical revenue by 35% and dramatically improved our refraction collections.
                Their expertise has been transformative for our practice."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Lisa Anderson, MD</p>
                <p className="text-amber-600 font-medium">Board-Certified Ophthalmologist</p>
                <p className="text-gray-500">Visionary Eye Care & Surgery Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('ophthalmology')} />
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
              Ready to Optimize Your Eye Care Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our ophthalmology billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with vision plan and medical billing requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-amber-600 text-white px-12 py-5 rounded-full hover:bg-amber-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Eye Care Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-amber-600 text-amber-600 px-12 py-5 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Ophthalmology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Ophthalmology-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-amber-600 hover:text-amber-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default OphthalmologyPage;
