import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
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
  Baby,
  Package,
  Activity
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const OBGYNPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: Package,
      title: 'Global Maternity Package Billing',
      description: 'Maternity care bundles antepartum, delivery, and postpartum services into one global package requiring careful tracking and proper delivery date billing.',
      impact: 'Lost revenue when global packages are not properly managed or components are unbundled',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Baby,
      title: 'Delivery & Cesarean Coding Complexity',
      description: 'Vaginal vs cesarean delivery coding, VBAC procedures, and complications require precise CPT code selection based on delivery method and maternal conditions.',
      impact: 'Underbilling when delivery complexity and complications are not properly documented',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Activity,
      title: 'Antepartum Visit Tracking',
      description: 'Tracking antepartum visits to determine if billing globally or individually requires precise visit counting and complication monitoring.',
      impact: 'Revenue loss when visit count falls short of global threshold or individual visits are not billed',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Zap,
      title: 'Device Insertion Billing',
      description: 'IUD, Nexplanon, and other contraceptive device billing requires proper supply codes, insertion procedure codes, and payer-specific coverage verification.',
      impact: 'Claim denials when device supply and insertion are not coded separately',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Family Planning Services Coverage',
      description: 'Different payers have varying coverage for contraception, sterilization, and abortion services requiring knowledge of state-specific regulations.',
      impact: 'Payment delays and denials from payer-specific coverage limitations',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50'
    },
    {
      icon: FileText,
      title: 'Ultrasound & Fetal Monitoring',
      description: 'OB ultrasounds have specific CPT codes based on trimester and type, with medical necessity requirements for non-routine imaging.',
      impact: 'Denials for frequency edits and insufficient medical necessity documentation',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  const solutions = [
    {
      icon: Heart,
      title: 'Maternity Billing Specialists',
      description: 'Our team includes certified coders with specialized training in OB/GYN procedures, global maternity packages, and women\'s health coding.',
      benefits: [
        'Expert global package vs individual visit determination',
        'Accurate delivery and complication coding',
        'Proper antepartum visit tracking',
        'Maximized maternity reimbursement'
      ]
    },
    {
      icon: Package,
      title: 'Global Package Tracking Systems',
      description: 'Advanced systems automatically track antepartum visits, delivery dates, and postpartum care to ensure proper global billing.',
      benefits: [
        'Automated visit counting and tracking',
        'Delivery date monitoring and alerts',
        'Global vs individual billing optimization',
        'Reduced global package billing errors'
      ]
    },
    {
      icon: Zap,
      title: 'Delivery & Surgical Coding Expertise',
      description: 'Specialized knowledge of vaginal and cesarean delivery coding, including complications, VBAC procedures, and gynecologic surgeries.',
      benefits: [
        'Accurate delivery method coding',
        'Complication and co-morbidity capture',
        'Gynecologic surgery billing (hysterectomy, etc)',
        'Higher reimbursement through proper coding'
      ]
    },
    {
      icon: Shield,
      title: 'Device & Contraceptive Billing Support',
      description: 'Expert billing for IUDs, implants, and contraceptive devices with proper supply and insertion procedure coding.',
      benefits: [
        'Device supply code expertise (J codes)',
        'Insertion procedure billing',
        'Payer coverage verification',
        'Improved device reimbursement'
      ]
    }
  ];

  const services = [
    {
      icon: Package,
      title: 'Prenatal Care Global Billing',
      description: 'Complete management of global maternity packages including antepartum visits, delivery, and postpartum care.',
      features: ['Global OB package (59400, 59510)', 'Antepartum visit tracking', 'Delivery date billing', 'Postpartum care inclusion']
    },
    {
      icon: Baby,
      title: 'Delivery & C-Section Procedures',
      description: 'Expert coding for vaginal delivery, cesarean section, VBAC, and delivery complications with proper CPT code selection.',
      features: ['Vaginal delivery (59400)', 'Cesarean delivery (59510)', 'VBAC procedures (59610)', 'Delivery complications']
    },
    {
      icon: Activity,
      title: 'Gynecological Surgery Billing',
      description: 'Specialized billing for hysterectomy, laparoscopic procedures, and other gynecologic surgeries.',
      features: ['Hysterectomy procedures', 'Laparoscopic surgery', 'Endometrial ablation', 'Pelvic floor repair']
    },
    {
      icon: Zap,
      title: 'Contraceptive Device & Services',
      description: 'Complete billing support for IUD insertion, Nexplanon, tubal ligation, and family planning services.',
      features: ['IUD insertion (58300)', 'Nexplanon placement (11981)', 'Tubal ligation', 'Contraceptive counseling']
    }
  ];

  const benefits = [
    { metric: '31%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '97%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '46%', label: 'Reduction in Denials', icon: Shield },
    { metric: '12 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="OBGYN Billing | Obstetrics & Gynecology Coding"
        description="Expert OBGYN billing services for obstetrics and gynecology practices. Global maternity billing, surgical procedure coding, and comprehensive women's health billing."
        canonical="https://medtransic.com/specialties/obgyn"
        keywords="OBGYN billing, obstetrics billing, gynecology billing, maternity billing, women's health billing, prenatal care billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="O B G Y N"
        description="Expert OBGYN billing services for obstetrics and gynecology practices. Global maternity billing, surgical procedure coding, and comprehensive women's health billing."
        url="https://medtransic.com/specialties/obgyn"
      />
      <HeroSection
        badge={{ icon: Heart, text: "OB/GYN & Women's Health Billing Specialists" }}
        title="Expert Women's Health Billing Services"
        description="Maximize your OB/GYN practice revenue with specialized billing expertise in global maternity packages, delivery coding, and contraceptive device billing. Our certified women's health billing specialists understand antepartum visit tracking, cesarean vs vaginal delivery coding, and family planning service requirements unique to obstetrics and gynecology."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "97%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "31%", label: "Revenue Increase", icon: TrendingUp },
          { value: "46%", label: "Fewer Denials", icon: Shield },
          { value: "12 Days", label: "Faster Payments", icon: Clock }
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
              Common OB/GYN Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              OB/GYN practices face unique billing complexities with global maternity packages,
              delivery coding variations, and device billing requirements that can significantly
              impact revenue and reimbursement.
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
              How Medtransic Solves Your OB/GYN Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized women's health billing solutions address each challenge with
              OB/GYN-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-rose-600" />
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
                        <CheckCircle className="w-5 h-5 text-rose-600 mr-3 flex-shrink-0" />
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
              Specialized Women's Health Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for OB/GYN practices
              and women's health centers.
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
                  iconColor="text-rose-600"
                  iconBgColor="bg-rose-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-12 shadow-xl border border-rose-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for OB/GYN Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized OB/GYN billing expertise delivers measurable improvements in revenue
                and operational efficiency for women's health practices.
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
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-rose-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Managing global maternity packages and tracking antepartum visits was a constant challenge
                for our OB/GYN practice. Medtransic's team has deep expertise in maternity billing, delivery
                coding, and device insertion procedures. They've increased our obstetric revenue by 33%
                and virtually eliminated our global package billing errors. Their specialized knowledge
                of women's health coding has been invaluable."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Rebecca Martinez, MD</p>
                <p className="text-rose-600 font-medium">Board-Certified OB/GYN</p>
                <p className="text-gray-500">Women's Health & Maternity Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('obgyn')} />
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
              Ready to Optimize Your Women's Health Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our OB/GYN billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with maternity and women's health billing requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-rose-600 text-white px-12 py-5 rounded-full hover:bg-rose-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free OB/GYN Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-rose-600 text-rose-600 px-12 py-5 rounded-full hover:bg-rose-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Women's Health Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-rose-600 mr-3" />
                  <span className="text-gray-700 font-medium">OB/GYN-Certified Billing Specialists</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-rose-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-rose-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-rose-600 hover:text-rose-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </>
  );
};

export default OBGYNPage;
