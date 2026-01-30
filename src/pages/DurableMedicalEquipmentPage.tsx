import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Package,
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
  Truck,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';

const DurableMedicalEquipmentPage: React.FC = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Certificate of Medical Necessity',
      description: 'CMN requirements are complex and vary by equipment type, requiring detailed physician documentation and patient information.',
      impact: 'Missing or incorrect CMNs cause 30-40% of DME claim denials',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Clock,
      title: 'Prior Authorization Delays',
      description: 'Most DME items require prior authorization with extensive documentation, causing significant delays in equipment delivery.',
      impact: 'PA delays result in 45-60 day revenue postponement',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Rental vs Purchase Rules',
      description: 'Complex Medicare and commercial payer rules for rental caps, purchase options, and capped rental periods.',
      impact: 'Incorrect billing method causes denials and revenue loss',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Same/Similar Equipment Denials',
      description: 'Payers require proof that beneficiaries do not have similar equipment before approving new DME items.',
      impact: 'Same/similar denials account for 25-35% of DME rejections',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Truck,
      title: 'Delivery Documentation',
      description: 'Proof of delivery, beneficiary signatures, and setup documentation are required but often incomplete.',
      impact: 'Missing delivery proof causes automatic claim denials',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: BarChart3,
      title: 'Modifier Complexity',
      description: 'DME billing requires specialized HCPCS modifiers for rental periods, repairs, replacements, and upgrades.',
      impact: 'Incorrect modifiers reduce reimbursement by 20-30%',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const solutions = [
    {
      icon: Package,
      title: 'DME Coding Specialists',
      description: 'Our team includes certified coders with specialized training in HCPCS codes, modifiers, and DME-specific billing rules.',
      benefits: [
        'Accurate HCPCS code selection',
        'Proper modifier application',
        'Rental vs purchase determination',
        'Reduced coding errors and denials'
      ]
    },
    {
      icon: Shield,
      title: 'CMN Documentation Management',
      description: 'Comprehensive management of Certificates of Medical Necessity with automated tracking and physician follow-up.',
      benefits: [
        'Complete CMN documentation',
        'Physician signature tracking',
        'Medical necessity validation',
        'Reduced documentation denials'
      ]
    },
    {
      icon: Zap,
      title: 'Prior Authorization System',
      description: 'Dedicated PA team with automated tracking ensures timely approvals for all DME equipment and supplies.',
      benefits: [
        'Faster authorization approvals',
        'Clinical documentation support',
        'Automated deadline tracking',
        'Higher approval rates'
      ]
    },
    {
      icon: Monitor,
      title: 'Compliance & Audit Protection',
      description: 'Comprehensive compliance monitoring and audit support to protect against recoupments and ensure regulatory adherence.',
      benefits: [
        'Same/similar equipment checks',
        'Delivery documentation tracking',
        'Medical necessity verification',
        'Appeal support for denials'
      ]
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'Mobility Equipment Billing',
      description: 'Expert billing for wheelchairs, walkers, hospital beds, and mobility aids with proper CMN and PA management.',
      features: ['Wheelchair billing', 'Hospital bed rentals', 'Walkers and canes', 'Scooter billing']
    },
    {
      icon: Truck,
      title: 'Respiratory Equipment',
      description: 'Specialized billing for oxygen equipment, CPAP/BiPAP devices, and nebulizers with compliance tracking.',
      features: ['Oxygen equipment', 'CPAP/BiPAP billing', 'Nebulizer supplies', 'Ventilator billing']
    },
    {
      icon: Users,
      title: 'Diabetic Supplies',
      description: 'Complete billing for diabetic testing supplies, insulin pumps, and continuous glucose monitors.',
      features: ['Test strips and lancets', 'Insulin pump billing', 'CGM systems', 'Diabetic footwear']
    },
    {
      icon: FileText,
      title: 'Orthotic & Prosthetic',
      description: 'Expert billing for custom orthotics, prosthetic devices, and bracing with proper documentation.',
      features: ['Custom orthotics', 'Prosthetic devices', 'Bracing and supports', 'Compression garments']
    }
  ];

  const benefits = [
    { metric: '35%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '95%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '55%', label: 'Reduction in Denials', icon: Shield },
    { metric: '22 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Equipment Billing Services | DME Providers & Suppliers"
        description="Complete medical equipment billing for DME providers. Expert HCPCS coding, rental vs purchase billing, diabetic supplies, mobility equipment. 95% clean claim rate."
        canonical="https://medtransic.com/specialties/durable-medical-equipment"
        keywords="medical equipment billing, DME provider billing, HCPCS coding, durable medical equipment, diabetic supply billing, mobility equipment billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Durable Medical Equipment"
        description="Complete medical equipment billing for DME providers. Expert HCPCS coding, rental vs purchase billing, diabetic supplies, mobility equipment. 95% clean claim rate."
        url="https://medtransic.com/specialties/durable-medical-equipment"
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
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6">
                <Package className="w-10 h-10 text-emerald-600" />
              </div>
              <span className="text-emerald-600 font-semibold text-lg tracking-wide uppercase">
                DME Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Durable Medical Equipment Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your DME supplier revenue with specialized billing expertise.
            Our certified coders understand the complexities of HCPCS coding, CMN requirements,
            rental vs purchase rules, and prior authorization management for all DME categories.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Medical equipment and supplies"
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
              Common DME Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              DME suppliers face unique billing complexities that can significantly
              impact revenue and cash flow.
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
              How Medtransic Solves Your DME Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized DME billing solutions address each pain point with
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
              Specialized DME Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for durable medical equipment
              suppliers and providers.
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
                Proven Results for DME Suppliers
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized DME billing expertise delivers measurable improvements
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
                "Medtransic's DME billing expertise has transformed our operations. Their understanding
                of CMN requirements and prior authorizations has increased our revenue by 45% while
                dramatically reducing our denial rates and administrative headaches."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">James Martinez</p>
                <p className="text-emerald-600 font-medium">Operations Director</p>
                <p className="text-gray-500">Premier DME Supply Company</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('durable-medical-equipment')} />
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
              Ready to Optimize Your DME Business Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our DME billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-emerald-600 text-white px-12 py-5 rounded-full hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free DME Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-emerald-600 text-emerald-600 px-12 py-5 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call DME Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700 font-medium">DME-Certified Coders</span>
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
  );
};

export default DurableMedicalEquipmentPage;
