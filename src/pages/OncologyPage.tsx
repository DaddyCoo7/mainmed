import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Radiation,
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
  Syringe,
  FlaskConical,
  Layers
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import RelatedServices from '../components/RelatedServices';
import { getRelatedLinks } from '../config/internalLinks';
import HeroSection from '../components/HeroSection';
import SpecialtySchema from '../components/SpecialtySchema';

const OncologyPage: React.FC = () => {

  const painPoints = [
    {
      icon: Syringe,
      title: 'Chemotherapy Infusion Coding Complexity',
      description: 'Multiple drug administrations require proper sequencing with initial, concurrent, and sequential codes that must follow strict hierarchy rules.',
      impact: 'Incorrect sequencing results in denials and significant revenue loss',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: DollarSign,
      title: 'J-Code Drug Billing',
      description: 'Expensive chemotherapy drugs require accurate J-code billing with proper units, wastage documentation, and HCPCS code selection.',
      impact: 'Missing drug charges or incorrect units cause substantial financial losses',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: AlertTriangle,
      title: 'Prior Authorization for Biologics',
      description: 'High-cost biologic medications and immunotherapies require extensive prior authorizations with detailed medical necessity documentation.',
      impact: 'Authorization delays postpone treatment and create administrative burden',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Layers,
      title: 'Multiple Drug Administration Sequencing',
      description: 'When multiple drugs are administered in one visit, proper CPT code hierarchy must be followed for initial, concurrent, and subsequent infusions.',
      impact: 'Improper sequencing leads to bundling and reduced reimbursement',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Settings,
      title: 'Radiation Therapy Complex Planning',
      description: 'Radiation oncology involves complex planning codes, simulation charges, dosimetry, and daily treatment management that must be properly billed.',
      impact: 'Unbilled planning services result in significant revenue loss',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      title: 'Clinical Trial Coverage Determination',
      description: 'Distinguishing between research-covered services and patient-billable routine care in clinical trials requires careful analysis.',
      impact: 'Billing protocol-covered services to patients causes compliance violations',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: Radiation,
      title: 'Oncology-Certified Billing Specialists',
      description: 'Our team includes certified coders with specialized training in oncology billing, chemotherapy administration, and radiation therapy coding.',
      benefits: [
        'Expert CPT coding for all oncology services',
        'Chemotherapy sequencing expertise',
        'J-code and HCPCS drug billing knowledge',
        'Radiation therapy planning codes'
      ]
    },
    {
      icon: Syringe,
      title: 'Infusion Hierarchy Management',
      description: 'Comprehensive understanding of chemotherapy administration hierarchy ensures proper initial, concurrent, and sequential code application.',
      benefits: [
        'Accurate infusion sequencing',
        'Push vs infusion determination',
        'Concurrent therapy coding',
        'Hydration and supportive care billing'
      ]
    },
    {
      icon: Shield,
      title: 'Prior Authorization Coordination',
      description: 'Dedicated team manages complex prior authorizations for expensive biologics, immunotherapies, and targeted cancer treatments.',
      benefits: [
        'Faster biologic approvals',
        'Medical necessity documentation',
        'Peer-to-peer support',
        'Reduced treatment delays'
      ]
    },
    {
      icon: FlaskConical,
      title: 'Drug & Supply Cost Recovery',
      description: 'Ensure full reimbursement for expensive chemotherapy drugs, biologics, and oncology supplies with proper J-code billing and wastage documentation.',
      benefits: [
        'Accurate J-code selection',
        'Wastage documentation guidance',
        'Buy-and-bill optimization',
        'Unit calculation accuracy'
      ]
    }
  ];

  const services = [
    {
      icon: Syringe,
      title: 'Chemotherapy Administration',
      description: 'Expert billing for IV push, infusion, intra-arterial, and subcutaneous chemotherapy with proper sequencing and drug coding.',
      features: ['IV infusion (96413-96417)', 'IV push administration', 'Concurrent therapy', 'Sequential drug administration']
    },
    {
      icon: Activity,
      title: 'Immunotherapy & Biologics',
      description: 'Specialized billing for immunotherapy infusions, biologic medications, and targeted cancer therapies with J-code expertise.',
      features: ['Immunotherapy infusions', 'Monoclonal antibodies', 'CAR-T cell therapy', 'Targeted biologic drugs']
    },
    {
      icon: Radiation,
      title: 'Radiation Oncology',
      description: 'Comprehensive billing for radiation therapy planning, simulation, dosimetry, treatment delivery, and management services.',
      features: ['Treatment planning (77295-77301)', 'Simulation (77280-77295)', 'Dosimetry calculations', 'Treatment management']
    },
    {
      icon: FlaskConical,
      title: 'Oncology Drug Billing',
      description: 'Accurate billing for chemotherapy drugs, supportive medications, and oncology supplies with proper J-code and HCPCS coding.',
      features: ['J-code drug billing', 'Supportive care drugs', 'Antiemetic administration', 'Drug wastage documentation']
    }
  ];

  const benefits = [
    { metric: '38%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '52%', label: 'Reduction in Denials', icon: Shield },
    { metric: '12 Days', label: 'Faster Payment Collection', icon: Clock }
  ];

  return (
    <>
      <SEOHead
        title="Oncology Billing | Chemotherapy & Cancer Treatment RCM"
        description="Comprehensive oncology billing for chemotherapy administration (96413-96417), immunotherapy infusions, and oral anti-cancer agents. Expert J-code selection, drug wastage documentation, and OCM (Oncology Care Model) reporting. Handle complex radiation oncology billing with IMRT, IGRT, and brachytherapy coding. Increase revenue 28% with oncology-specific denial management."
        canonical="https://medtransic.com/specialties/oncology"
        keywords="oncology billing, cancer care billing, chemotherapy billing, radiation oncology billing, medical oncology billing, immunotherapy billing, J-code billing"
        ogType="article"
      />
      <SpecialtySchema
        specialtyName="Oncology"
        description="Comprehensive oncology billing for chemotherapy administration (96413-96417), immunotherapy infusions, and oral anti-cancer agents. Expert J-code selection, drug wastage documentation, and OCM (Oncology Care Model) reporting. Handle complex radiation oncology billing with IMRT, IGRT, and brachytherapy coding. Increase revenue 28% with oncology-specific denial management."
        url="https://medtransic.com/specialties/oncology"
      />

      <HeroSection
        badge={{ icon: Radiation, text: "Oncology Billing Specialists" }}
        title="Expert Oncology Medical Billing Services"
        description="Maximize your oncology practice revenue with specialized billing expertise in chemotherapy administration, infusion sequencing, and J-code drug billing. Our certified oncology billing specialists understand complex chemotherapy hierarchies, biologic medications, and radiation therapy coding requirements."
        buttons={[
          { text: "Get Started", href: "/contact", variant: "primary" },
          { text: "Learn More", href: "/services", variant: "secondary" }
        ]}
        stats={[
          { value: "38%", label: "Revenue Increase", icon: TrendingUp },
          { value: "98%", label: "First-Pass Rate", icon: CheckCircle },
          { value: "52%", label: "Denial Reduction", icon: Shield },
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
              Common Oncology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Oncology practices face unique billing complexities with chemotherapy sequencing, expensive
              drug billing, and prior authorization requirements that significantly impact revenue.
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
              How Medtransic Solves Your Oncology Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized oncology billing solutions address each challenge with
              cancer care-specific expertise and proven methodologies.
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
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-orange-600" />
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
              Specialized Oncology Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for oncology practices,
              cancer centers, and radiation oncology specialists.
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
                  iconColor="text-orange-600"
                  iconBgColor="bg-orange-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 shadow-xl border border-orange-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for Oncology Practices
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized oncology billing expertise delivers measurable improvements in revenue
                and operational efficiency for cancer treatment centers and oncology practices.
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
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-orange-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Managing billing for our oncology practice was overwhelming with chemotherapy sequencing rules,
                expensive J-code drugs, and complex radiation therapy coding. Medtransic's team has deep oncology
                billing expertise and their infusion hierarchy knowledge has eliminated coding errors. Their drug
                wastage documentation guidance and prior authorization management has increased our revenue by 40%
                while ensuring we capture every dollar for expensive biologic medications."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. David Thompson, MD</p>
                <p className="text-orange-600 font-medium">Board-Certified Medical Oncologist</p>
                <p className="text-gray-500">Comprehensive Cancer Care Center</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <RelatedServices services={getRelatedLinks('oncology')} />
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
              Ready to Optimize Your Oncology Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our oncology billing specialists analyze your current processes and show you how we can
              increase your revenue while ensuring compliance with chemotherapy sequencing and drug billing requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-orange-600 text-white px-12 py-5 rounded-full hover:bg-orange-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Oncology Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-orange-600 text-orange-600 px-12 py-5 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Oncology Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">Oncology-Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-orange-600 hover:text-orange-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default OncologyPage;
