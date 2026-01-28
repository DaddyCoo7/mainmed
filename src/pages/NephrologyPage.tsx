import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplets,
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
  BarChart3,
  Home,
  Syringe
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';

const NephrologyPage: React.FC = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'ESRD Management Complexity',
      description: 'End-Stage Renal Disease patients require comprehensive monthly billing with specific CPT codes for age, number of visits, and patient location.',
      impact: 'Underbilling or incorrect ESRD codes result in significant revenue loss',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Dialysis Session Bundling',
      description: 'Medicare composite rate includes multiple services bundled together, requiring knowledge of what can and cannot be billed separately.',
      impact: 'Billing separately for bundled services leads to denials and compliance issues',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Syringe,
      title: 'Vascular Access Billing',
      description: 'Catheter insertions, fistula evaluations, and access procedures have specific coding requirements with proper modifiers.',
      impact: 'Improper coding results in reduced reimbursement for high-value procedures',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: BarChart3,
      title: 'Monthly Capitation Tracking',
      description: 'ESRD monthly capitated payments require accurate tracking of visits, age ranges, and service locations to avoid underbilling.',
      impact: 'Missing monthly visits or incorrect codes decrease practice revenue',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Home vs In-Center Billing',
      description: 'Different reimbursement rates and coding requirements for home hemodialysis, peritoneal dialysis, and in-center treatments.',
      impact: 'Confusion between modalities leads to incorrect billing and payment delays',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      title: 'Medicare Composite Rate Compliance',
      description: 'Understanding which drugs, labs, and supplies are included in the composite rate versus separately billable items.',
      impact: 'Compliance violations from billing included services separately',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: Droplets,
      title: 'Nephrology-Certified Billing Specialists',
      description: 'Our team includes certified coders with specialized training in nephrology, dialysis billing, ESRD management, and composite rate requirements.',
      benefits: [
        'Expert CPT coding for all dialysis modalities',
        'ESRD monthly capitation optimization',
        'Vascular access procedure expertise',
        'Composite rate compliance management'
      ]
    },
    {
      icon: Shield,
      title: 'Dialysis Composite Rate Expertise',
      description: 'Comprehensive knowledge of Medicare composite rate bundling rules ensures compliant billing and maximizes separately billable services.',
      benefits: [
        'Accurate identification of bundled services',
        'Proper billing of separately payable drugs',
        'Lab and diagnostic test coordination',
        'Compliance with composite rate limitations'
      ]
    },
    {
      icon: TrendingUp,
      title: 'ESRD Monthly Payment Optimization',
      description: 'Advanced tracking systems ensure accurate monthly capitated billing based on patient age, visits, and location.',
      benefits: [
        'Automated ESRD visit tracking',
        'Age-based CPT code selection',
        'Location-specific billing (home, facility, hospital)',
        'Maximized monthly capitation revenue'
      ]
    },
    {
      icon: Activity,
      title: 'Modality-Specific Billing Support',
      description: 'Specialized expertise in billing for hemodialysis, peritoneal dialysis, and home dialysis programs with proper documentation.',
      benefits: [
        'Home dialysis training billing',
        'Peritoneal dialysis supplies tracking',
        'In-center hemodialysis optimization',
        'Modality change documentation'
      ]
    }
  ];

  const services = [
    {
      icon: Droplets,
      title: 'Dialysis Treatment Billing',
      description: 'Expert billing for hemodialysis sessions, peritoneal dialysis, and home dialysis programs with composite rate compliance.',
      features: ['Hemodialysis session billing', 'Peritoneal dialysis (CAPD/CCPD)', 'Home dialysis programs', 'Composite rate management']
    },
    {
      icon: Stethoscope,
      title: 'ESRD Comprehensive Care',
      description: 'Monthly capitated billing for End-Stage Renal Disease patients with accurate visit tracking and age-based coding.',
      features: ['Monthly ESRD billing (90951-90970)', 'Age-based code selection', 'Visit frequency tracking', 'Location-specific billing']
    },
    {
      icon: Syringe,
      title: 'Vascular Access Procedures',
      description: 'Specialized billing for catheter placements, fistula evaluations, angioplasty, and access maintenance procedures.',
      features: ['Catheter insertion billing', 'Fistula creation and revision', 'Access declotting procedures', 'Vascular ultrasound guidance']
    },
    {
      icon: Home,
      title: 'Chronic Kidney Disease Management',
      description: 'Billing for pre-dialysis CKD patients including education, counseling, and progression monitoring.',
      features: ['CKD education billing', 'Dietary counseling', 'Progression monitoring', 'Pre-dialysis patient management']
    }
  ];

  const benefits = [
    { metric: '32%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '99%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '48%', label: 'Reduction in Denials', icon: Shield },
    { metric: '10 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Nephrology Billing Services | Dialysis & Kidney Disease RCM Experts"
        description="Maximize dialysis reimbursement with bundled payment expertise and ESRD coding specialists. Handle in-center hemodialysis (MCP), home dialysis, and transitional care management. Expert vascular access procedure coding and Medicare ESRD compliance. Increase collections 30% with our nephrology-certified billing team."
        canonical="https://medtransic.com/specialties/nephrology"
        keywords="nephrology billing, dialysis billing, kidney disease billing, renal care billing, nephrologist billing services, ESRD billing, hemodialysis billing, peritoneal dialysis billing"
        ogType="article"
      />

      <HeroSection
        badge={{
          icon: Droplets,
          text: "Nephrology & Dialysis Billing Specialists"
        }}
        title="Expert Nephrology & Dialysis Billing Services"
        description="Maximize your nephrology practice revenue with specialized billing expertise in dialysis, ESRD management, and vascular access procedures. Our certified coders understand Medicare composite rates, monthly capitation billing, and the complexities of renal care reimbursement."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" as const },
          { text: "Learn More", href: "/services", variant: "secondary" as const }
        ]}
        stats={[
          { value: "32%", label: "Average Revenue Increase", icon: TrendingUp },
          { value: "99%", label: "First-Pass Claim Rate", icon: CheckCircle },
          { value: "48%", label: "Reduction in Denials", icon: Shield },
          { value: "10 Days", label: "Faster Payment", icon: Clock }
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
              Common Nephrology & Dialysis Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nephrology and dialysis centers face unique billing complexities with Medicare composite
              rates, ESRD management, and modality-specific requirements that significantly impact revenue.
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
              How Medtransic Solves Your Nephrology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized nephrology billing solutions address each challenge with
              dialysis-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-cyan-600" />
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
              Specialized Nephrology & Dialysis Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for nephrology practices,
              dialysis centers, and renal care specialists.
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
                  iconColor="text-cyan-600"
                  iconBgColor="bg-cyan-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-12 shadow-xl border border-cyan-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Nephrology & Dialysis Centers
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized nephrology billing expertise delivers measurable improvements in revenue
                and operational efficiency for dialysis centers and renal care practices.
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
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-cyan-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Running a dialysis center involves incredibly complex billing with Medicare composite rates,
                ESRD monthly billing, and vascular access procedures. Medtransic's team has deep expertise
                in nephrology billing and has helped us optimize our dialysis reimbursements while ensuring
                full compliance with composite rate requirements. Their ESRD tracking system has increased
                our monthly capitation revenue by 35%."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Maria Gonzalez, MD</p>
                <p className="text-cyan-600 font-medium">Board-Certified Nephrologist</p>
                <p className="text-gray-500">Regional Dialysis & Kidney Care Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('nephrology')} />
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
              Ready to Optimize Your Nephrology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our nephrology billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with dialysis billing requirements and ESRD management.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-cyan-600 text-white px-12 py-5 rounded-full hover:bg-cyan-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Nephrology Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-cyan-600 text-cyan-600 px-12 py-5 rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Nephrology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Nephrology-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default NephrologyPage;
