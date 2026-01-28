const fs = require('fs');
const path = require('path');

const specialties = [
  {
    fileName: 'CommunityHealthClinicsPage',
    icon: 'Handshake',
    title: 'Community Health Clinics',
    subtitle: 'FQHC & CHC Billing Specialists',
    description: 'Maximize your FQHC revenue with specialized billing expertise. Our team understands PPS rates, sliding-scale billing, and rural health center requirements to ensure optimal reimbursement for your community health services.',
    heroImage: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'green',
    painPoints: [
      {
        icon: 'AlertTriangle',
        title: 'PPS Rate Complexity',
        description: 'Prospective Payment System rates require specific coding and documentation for proper reimbursement.',
        impact: 'Incorrect PPS billing leads to significant revenue loss',
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      },
      {
        icon: 'DollarSign',
        title: 'Sliding Scale Documentation',
        description: 'Complex requirements for documenting and billing sliding-fee scale patients appropriately.',
        impact: 'Risk of audit findings and compliance issues',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
      },
      {
        icon: 'FileText',
        title: 'Grant Reporting Requirements',
        description: 'Multiple grant programs require specific billing and reporting compliance.',
        impact: 'Potential loss of grant funding due to reporting errors',
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      },
      {
        icon: 'Clock',
        title: 'Encounter Bundling',
        description: 'Properly bundling multiple services within a single FQHC encounter for maximum reimbursement.',
        impact: 'Underbilling or denials from improper bundling',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      },
      {
        icon: 'Settings',
        title: 'Multiple Payer Types',
        description: 'Managing billing for Medicaid, Medicare, uninsured, and commercial payers with different rules.',
        impact: 'Increased claim rejections and administrative burden',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      },
      {
        icon: 'BarChart3',
        title: 'UDS Reporting',
        description: 'Uniform Data System reporting requires accurate billing data collection throughout the year.',
        impact: 'Compliance risk and impact on future funding',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      }
    ],
    services: [
      {
        icon: 'FileText',
        title: 'PPS Rate Optimization',
        description: 'Expert billing to maximize Prospective Payment System reimbursements.',
        features: ['PPS rate calculation', 'Encounter bundling', 'Rate adjustment billing', 'FQHC-specific coding']
      },
      {
        icon: 'Users',
        title: 'Sliding Scale Management',
        description: 'Complete billing support for sliding-fee scale program compliance.',
        features: ['Fee schedule management', 'Discount documentation', 'Patient eligibility', 'Charity care billing']
      },
      {
        icon: 'Shield',
        title: 'Grant Compliance',
        description: 'Specialized billing aligned with HRSA and grant requirements.',
        features: ['HRSA compliance', 'Grant reporting support', 'UDS data accuracy', 'Quality metrics tracking']
      },
      {
        icon: 'Activity',
        title: 'Rural Health Billing',
        description: 'Dedicated billing services for Rural Health Clinics with RHC-specific expertise.',
        features: ['RHC encounter billing', 'Medicare cost reporting', 'Medicaid RHC rates', 'Preventive service billing']
      }
    ]
  },
  {
    fileName: 'PrimaryCarePracticesPage',
    icon: 'Users',
    title: 'Primary Care Practices',
    subtitle: 'Primary Care Billing Specialists',
    description: 'Optimize your primary care practice revenue with comprehensive billing expertise. We specialize in preventive care, chronic care management, and the full spectrum of family medicine billing requirements.',
    heroImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'teal',
    painPoints: [
      {
        icon: 'AlertTriangle',
        title: 'Preventive vs Diagnostic Coding',
        description: 'Properly distinguishing between preventive and problem-focused visits affects reimbursement significantly.',
        impact: 'Undercoding preventive services or claim denials',
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      },
      {
        icon: 'Clock',
        title: 'Time-Based CCM Billing',
        description: 'Chronic Care Management requires precise time tracking and documentation for monthly billing.',
        impact: 'Lost revenue from unbilled CCM services',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
      },
      {
        icon: 'DollarSign',
        title: 'Wellness Visit Complexity',
        description: 'Annual Wellness Visits have specific Medicare requirements that differ from standard physicals.',
        impact: 'Denials due to incorrect coding or documentation',
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      },
      {
        icon: 'FileText',
        title: 'Same-Day Sick Visits',
        description: 'Billing both preventive and problem visits on same day requires proper modifier use.',
        impact: 'Claim rejections or missed revenue opportunities',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      },
      {
        icon: 'Settings',
        title: 'Immunization Billing',
        description: 'Complex billing for vaccine products and administration with proper modifier application.',
        impact: 'Underpayment for vaccine services',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      },
      {
        icon: 'BarChart3',
        title: 'Care Coordination Services',
        description: 'Multiple new care coordination codes available but underutilized in primary care.',
        impact: 'Significant lost revenue from unbilled services',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      }
    ],
    services: [
      {
        icon: 'Activity',
        title: 'Preventive Care Billing',
        description: 'Maximize reimbursement for wellness visits and preventive services.',
        features: ['Annual wellness visits', 'Preventive medicine codes', 'Screening services', 'Same-day billing optimization']
      },
      {
        icon: 'Users',
        title: 'Chronic Care Management',
        description: 'Complete CCM billing including time tracking and care plan documentation.',
        features: ['CCM monthly billing', 'Complex CCM services', 'Principal care management', 'Time documentation']
      },
      {
        icon: 'FileText',
        title: 'Office Visit Optimization',
        description: 'Accurate E/M coding for all office encounters with proper documentation review.',
        features: ['E/M level selection', 'Modifier management', 'Documentation guidance', 'Diagnosis coding accuracy']
      },
      {
        icon: 'Shield',
        title: 'Care Coordination',
        description: 'Billing for transitional care, behavioral health integration, and care coordination services.',
        features: ['TCM billing', 'BHI services', 'Collaborative care', 'Remote physiologic monitoring']
      }
    ]
  }
];

specialties.forEach(specialty => {
  const template = `import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ${specialty.icon},
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
  Target,
  Award,
  Stethoscope,
  Settings,
  BarChart3
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';

const ${specialty.fileName}: React.FC = () => {
  const painPoints = ${JSON.stringify(specialty.painPoints, null, 4)};

  const solutions = [
    {
      icon: ${specialty.icon},
      title: 'Specialized Billing Team',
      description: 'Our certified coders have extensive experience in ${specialty.title.toLowerCase()} billing requirements and regulations.',
      benefits: [
        'Accurate coding and billing',
        'Regulatory compliance expertise',
        'Maximized reimbursements',
        'Reduced claim denials'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure full compliance with all federal, state, and payer-specific requirements.',
      benefits: [
        'HIPAA compliance assurance',
        'Documentation review',
        'Audit preparation support',
        'Policy tracking and updates'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Strategic approaches to maximize revenue through proper coding and billing practices.',
      benefits: [
        'Increased revenue per visit',
        'Faster payment collection',
        'Reduced AR aging',
        'Improved cash flow'
      ]
    },
    {
      icon: Activity,
      title: 'Technology Integration',
      description: 'Seamless integration with your existing EHR and practice management systems.',
      benefits: [
        'Automated claim submission',
        'Real-time reporting',
        'Denial management',
        'Performance analytics'
      ]
    }
  ];

  const services = ${JSON.stringify(specialty.services, null, 4)};

  const benefits = [
    { metric: '28%', label: 'Average Revenue Increase', icon: TrendingUp },
    { metric: '98%', label: 'First-Pass Claim Rate', icon: CheckCircle },
    { metric: '35%', label: 'Reduction in Denials', icon: Shield },
    { metric: '20 Days', label: 'Faster Payment', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
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
          backgroundImage: \`url('/medtransic-logomark1.png')\`
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
              <div className="w-20 h-20 bg-${specialty.color}-100 rounded-2xl flex items-center justify-center mr-6">
                <${specialty.icon} className="w-10 h-10 text-${specialty.color}-600" />
              </div>
              <span className="text-${specialty.color}-600 font-semibold text-lg tracking-wide uppercase">
                ${specialty.subtitle}
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert ${specialty.title} Billing Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ${specialty.description}
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="${specialty.heroImage}"
              alt="${specialty.title} medical billing services"
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
              Common ${specialty.title} Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ${specialty.title} face unique billing complexities that can significantly
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
                  <div className={\`\${painPoint.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6\`}>
                    <painPoint.icon className={\`w-8 h-8 \${painPoint.color}\`} />
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
              How Medtransic Solves Your Billing Challenges
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our specialized billing solutions address each challenge with
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
                    <div className="w-16 h-16 bg-${specialty.color}-50 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-${specialty.color}-600" />
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
              Specialized Billing Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive billing solutions tailored specifically for your practice needs.
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
                  iconColor="text-${specialty.color}-600"
                  iconBgColor="bg-${specialty.color}-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-${specialty.color}-50 to-${specialty.color}-100 rounded-2xl p-12 shadow-xl border border-${specialty.color}-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Proven Results for ${specialty.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our specialized billing expertise delivers measurable improvements
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
                  <div className="w-12 h-12 bg-${specialty.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-${specialty.color}-600" />
                  </div>
                  <div className="text-3xl font-bold text-${specialty.color}-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-${specialty.color}-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-${specialty.color}-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "Medtransic's billing expertise has transformed our practice. Their understanding
                of our specialty requirements and dedication to maximizing our revenue has been
                invaluable. We've seen a significant increase in collections and cash flow."
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Healthcare Provider</p>
                <p className="text-${specialty.color}-600 font-medium">${specialty.title}</p>
              </div>
            </div>
          </div>
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
              Ready to Optimize Your Practice Revenue?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our billing specialists analyze your current processes and show you
              how we can increase your revenue while reducing administrative complexity.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-${specialty.color}-600 text-white px-12 py-5 rounded-full hover:bg-${specialty.color}-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-${specialty.color}-600 text-${specialty.color}-600 px-12 py-5 rounded-full hover:bg-${specialty.color}-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Our Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-${specialty.color}-600 mr-3" />
                  <span className="text-gray-700 font-medium">Certified Coders</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-${specialty.color}-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant & Secure</span>
                </div>
                <div className="flex items-center justify-center">
                  <Target className="w-6 h-6 text-${specialty.color}-600 mr-3" />
                  <span className="text-gray-700 font-medium">Dedicated Account Manager</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/specialties" className="text-${specialty.color}-600 hover:text-${specialty.color}-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Specialties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ${specialty.fileName};
`;

  const filePath = path.join(__dirname, 'src', 'pages', `${specialty.fileName}.tsx`);
  fs.writeFileSync(filePath, template);
  console.log(`Created: ${specialty.fileName}.tsx`);
});

console.log('Generated specialty pages successfully!');
