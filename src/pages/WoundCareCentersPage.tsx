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
  Target,
  Award,
  Stethoscope,
  Monitor,
  Settings,
  Zap,
  Scan
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import SpecialtySchema from '../components/SpecialtySchema';
import { getRelatedLinks } from '../config/internalLinks';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const WoundCareCentersPage: React.FC = () => {
  usePrerenderReady(true);

  const painPoints = [
    {
      icon: Clock,
      title: 'Surgical Global Period Complexity',
      description: 'Thoracic surgeries have 90-day global periods requiring careful tracking of separately billable complications and unrelated services.',
      impact: 'Revenue loss when billable post-operative services are bundled incorrectly',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Video-Assisted vs Open Procedures',
      description: 'VATS procedures require different coding than open thoracotomy with specific CPT codes and approach modifiers.',
      impact: 'Underpayment when surgical approach is not properly documented and coded',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: FileText,
      title: 'Cancer Staging Documentation',
      description: 'Lung cancer resections require detailed staging information, margin documentation, and lymph node sampling coding.',
      impact: 'Claim denials when oncology staging and pathology are insufficiently documented',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: DollarSign,
      title: 'Multiple Procedure Bundling',
      description: 'Thoracic procedures often involve multiple components requiring proper modifier usage to prevent inappropriate bundling.',
      impact: 'Significant revenue loss when multiple procedures are bundled inappropriately',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Settings,
      title: 'Transplant Billing Complexity',
      description: 'Lung transplant procedures involve complex coding for procurement, back-table preparation, and recipient surgery.',
      impact: 'Revenue loss from missed billable components in transplant procedures',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Scan,
      title: 'Imaging and Diagnostic Coordination',
      description: 'Pre and intra-operative imaging requires proper technical and professional component billing with correct modifiers.',
      impact: 'Underpayment when imaging components are not properly separated and billed',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const solutions = [
    {
      icon: Heart,
      title: 'Wound Care Centers Billing Specialists',
      description: 'Our team includes certified coders with specialized training in wound care surgical procedures, VATS techniques, and oncology billing.',
      benefits: [
        'Expert CPT coding for all wound care procedures',
        'VATS vs open approach coding expertise',
        'Global period tracking and management',
        'Oncology and staging documentation support'
      ]
    },
    {
      icon: Shield,
      title: 'Cancer Surgery Billing Expertise',
      description: 'Dedicated support for lung cancer resections, mediastinal tumors, and esophageal cancer surgery with oncology coding.',
      benefits: [
        'Cancer staging documentation',
        'Margin and lymph node coding',
        'Pathology coordination',
        'Medical necessity validation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Multiple Procedure Optimization',
      description: 'Maximize reimbursements through proper modifier application for multiple wound care procedures performed together.',
      benefits: [
        'Modifier 51, 59 expertise',
        'Separate procedure identification',
        'NCCI edit compliance',
        'Reduced bundling denials'
      ]
    },
    {
      icon: Monitor,
      title: 'Transplant & Complex Surgery Management',
      description: 'Comprehensive billing support for lung transplantation and complex wound care reconstruction procedures.',
      benefits: [
        'Transplant procedure coding',
        'Multi-organ coordination',
        'Procurement billing',
        'Back-table preparation coding'
      ]
    }
  ];

  const services = [
    {
      icon: Heart,
      title: 'Lung Surgery Billing',
      description: 'Expert billing for lobectomy, pneumonectomy, wedge resection, and lung volume reduction surgery.',
      features: ['Lobectomy procedures', 'VATS billing', 'Cancer resection', 'Lung volume reduction']
    },
    {
      icon: Zap,
      title: 'Esophageal Surgery',
      description: 'Specialized billing for esophagectomy, anti-reflux procedures, and esophageal reconstruction.',
      features: ['Esophagectomy coding', 'GERD procedures', 'Reconstruction billing', 'Minimally invasive approaches']
    },
    {
      icon: Settings,
      title: 'Mediastinal Procedures',
      description: 'Complex billing for thymectomy, mediastinal tumor resection, and lymph node dissection.',
      features: ['Thymectomy billing', 'Tumor resection', 'Lymphadenectomy', 'Mediastinoscopy']
    },
    {
      icon: Scan,
      title: 'Thoracic Trauma & Emergency',
      description: 'Accurate billing for traumatic chest injuries, emergency thoracotomy, and chest tube placement.',
      features: ['Trauma surgery coding', 'Emergency procedures', 'Chest tube billing', 'Repair procedures']
    }
  ];

  const benefits = [
    { metric: '34%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '96%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '44%', label: 'Reduction in Denials', icon: Shield },
    { metric: '19 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Wound Care Billing Services | Wound Center Medical Billing"
        description="Expert wound care center billing for chronic wound management. Specialized coding for hyperbaric oxygen therapy and advanced wound treatments."
        canonical="https://medtransic.com/specialties/wound-care"
        keywords="wound care billing, wound center billing, chronic wound billing, hyperbaric oxygen billing, wound management billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Wound Care Centers"
        description="Expert wound care center billing for chronic wound management. Specialized coding for hyperbaric oxygen therapy and advanced wound treatments."
        url="https://medtransic.com/specialties/wound-care"
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
          backgroundImage: "url('/medtransic-logomark1.svg')"
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
              <div className="w-20 h-20 bg-lime-100 rounded-2xl flex items-center justify-center mr-6">
                <Heart className="w-10 h-10 text-lime-600" />
              </div>
              <span className="text-lime-600 font-semibold text-lg tracking-wide uppercase">
                Wound Care Centers Billing Specialists
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Wound Care Centers Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your wound care practice revenue with specialized billing expertise in
            lung procedures, esophageal surgery, and minimally invasive techniques. Our certified
            coders understand complex VATS coding, global period management, and cancer surgery
            documentation unique to wound care surgical practices.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Thoracic surgeon performing complex chest surgery"
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
              Common Wound Care Centers Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Thoracic surgery practices face unique billing complexities with surgical approach
              coding, cancer documentation, and global period management.
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
              How Medtransic Solves Your Wound Care Centers Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized wound care billing solutions address each challenge with
              targeted expertise in complex surgical coding and cancer documentation.
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
                    <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-lime-600" />
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
              Specialized Wound Care Centers Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for wound care practices
              and cardiowound care subspecialties.
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
                  iconColor="text-lime-600"
                  iconBgColor="bg-lime-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl p-12 shadow-xl border border-lime-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Wound Care Centers Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized wound care billing expertise delivers measurable improvements
                in revenue and operational efficiency for wound care practices.
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
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-lime-600" />
                  </div>
                  <div className="text-3xl font-bold text-lime-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-lime-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Thoracic surgery billing is complex with VATS procedures, cancer staging requirements,
                and long global periods. Medtransic's team has deep expertise in wound care surgical
                coding and has helped us properly code our minimally invasive procedures and cancer
                resections. Their knowledge of global period rules has prevented numerous denials.
                Our revenue has increased by 34% since partnering with them."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Jennifer Wilson, MD, FACS</p>
                <p className="text-lime-600 font-medium">Board-Certified Thoracic Surgeon</p>
                <p className="text-gray-500">Coastal Cardiowound care Surgery Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('wound-care-centers')} />
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
              Ready to Optimize Your Wound Care Centers Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our wound care billing specialists analyze your current processes and show you
              how we can increase your revenue while ensuring compliance with surgical billing requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-lime-600 text-white px-12 py-5 rounded-full hover:bg-lime-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-lime-600 text-lime-600 px-12 py-5 rounded-full hover:bg-lime-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Wound Care Centers Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-lime-600 mr-3" />
                  <span className="text-gray-700 font-medium">Thoracic-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-lime-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-lime-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-lime-600 hover:text-lime-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WoundCareCentersPage;
