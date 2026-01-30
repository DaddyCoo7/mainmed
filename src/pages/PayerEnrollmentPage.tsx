import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileCheck,
  Clock,
  Shield,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Users,
  FileText,
  Calendar,
  ArrowRight,
  Phone,
  Zap,
  Award,
  ClipboardCheck,
  Target,
  BarChart3
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import ServiceSchema from '../components/ServiceSchema';

const PayerEnrollmentPage: React.FC = () => {

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Enrollment',
      description: 'Average enrollment time reduced from 120+ days to 60-90 days through streamlined processes.'
    },
    {
      icon: CheckCircle,
      title: 'Higher Approval Rates',
      description: '98%+ approval rate with our error-free application submissions and proactive follow-up.'
    },
    {
      icon: TrendingUp,
      title: 'Maximize Revenue',
      description: 'Start billing sooner and expand your patient base by being in-network with major payers.'
    },
    {
      icon: Shield,
      title: 'Compliance Guaranteed',
      description: 'Stay compliant with all federal and state requirements, plus individual payer policies.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Expert enrollment specialists assigned to your account for personalized service.'
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'We handle all paperwork, credentialing databases (CAQH, PECOS), and follow-up.'
    }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Initial Payer Enrollment',
      description: 'Complete enrollment with Medicare, Medicaid, and commercial insurance plans including Blue Cross Blue Shield, Aetna, UnitedHealthcare, Cigna, and Humana.',
      features: [
        'CAQH profile setup and maintenance',
        'Medicare PECOS enrollment',
        'Medicaid state-specific applications',
        'Commercial payer applications',
        'Participating provider agreements'
      ]
    },
    {
      icon: Calendar,
      title: 'Re-Enrollment & Revalidation',
      description: 'Timely re-enrollment and revalidation services to maintain your in-network status.',
      features: [
        'Medicare revalidation every 5 years',
        'Medicaid re-enrollment tracking',
        'CAQH attestation (every 120 days)',
        'Payer roster updates',
        'Proactive deadline monitoring'
      ]
    },
    {
      icon: Users,
      title: 'Multi-Location & Group Practice',
      description: 'Specialized enrollment services for practices with multiple locations and providers.',
      features: [
        'Group NPI enrollment',
        'Multi-state licensure coordination',
        'Facility credentialing',
        'Practice location additions',
        'Provider roster management'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Enrollment Status Tracking',
      description: 'Real-time tracking and reporting of all enrollment applications and their status.',
      features: [
        'Application status dashboard',
        'Proactive payer follow-up',
        'Issue resolution and appeals',
        'Effective date confirmation',
        'Credentialing database updates'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'We review your practice information, specialties, locations, and target payer mix to create a customized enrollment strategy.',
      icon: Target
    },
    {
      step: 2,
      title: 'Document Collection',
      description: 'We gather all required documents including licenses, certifications, malpractice insurance, DEA, and provider attestations.',
      icon: FileText
    },
    {
      step: 3,
      title: 'Application Preparation',
      description: 'Our specialists complete all enrollment applications with 100% accuracy, ensuring compliance with payer-specific requirements.',
      icon: ClipboardCheck
    },
    {
      step: 4,
      title: 'Submission & Tracking',
      description: 'We submit applications through appropriate channels (CAQH, PECOS, direct payer portals) and track progress daily.',
      icon: Zap
    },
    {
      step: 5,
      title: 'Follow-Up & Resolution',
      description: 'Proactive follow-up with payers to expedite processing and resolve any issues or requests for additional information.',
      icon: Phone
    },
    {
      step: 6,
      title: 'Confirmation & Setup',
      description: 'We confirm effective dates, obtain payer IDs, and ensure billing systems are updated for seamless claims submission.',
      icon: CheckCircle
    }
  ];

  const payerTypes = [
    {
      category: 'Government Payers',
      payers: [
        'Medicare Part A & B',
        'Medicare Advantage Plans',
        'Medicaid (All 50 States)',
        'TRICARE',
        'Veterans Affairs (VA)',
        'Workers Compensation'
      ]
    },
    {
      category: 'Major Commercial Payers',
      payers: [
        'Blue Cross Blue Shield (All Plans)',
        'UnitedHealthcare / Optum',
        'Aetna / CVS Health',
        'Cigna',
        'Humana',
        'Anthem'
      ]
    },
    {
      category: 'Regional & Specialty Payers',
      payers: [
        'Regional HMOs and PPOs',
        'Managed Care Organizations',
        'Workers Comp Networks',
        'Auto Insurance Carriers',
        'Specialty Insurance Plans'
      ]
    }
  ];

  const stats = [
    { value: '98%', label: 'Approval Rate', icon: Award },
    { value: '60-90', label: 'Days to Enroll', icon: Clock },
    { value: '500+', label: 'Payers Enrolled', icon: FileCheck },
    { value: '100%', label: 'Compliance Rate', icon: Shield }
  ];

  return (
    <>
      <SEOHead
        title="Payer Enrollment Services | Insurance Credentialing & Enrollment - Medtransic"
        description="Expert payer enrollment services for healthcare providers. Fast-track Medicare, Medicaid, and commercial insurance enrollment. 98% approval rate, 60-90 day turnaround. Get in-network faster."
        keywords="payer enrollment services, insurance enrollment, provider enrollment, Medicare enrollment, Medicaid enrollment, CAQH enrollment, PECOS enrollment, commercial insurance credentialing, insurance panel enrollment, payer credentialing"
        canonical="https://medtransic.com/services/payer-enrollment"
      />
      <ServiceSchema
        name="Payer Enrollment"
        description="Expert payer enrollment services for healthcare providers. Fast-track Medicare, Medicaid, and commercial insurance enrollment. 98% approval rate, 60-90 day turnaround. Get in-network faster."
        url="https://medtransic.com/services/payer-enrollment"
        serviceType="Medical Billing Service"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <FileCheck className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Professional Payer Enrollment</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-emerald-200">
              Fast-Track Your Payer Enrollment
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get enrolled with Medicare, Medicaid, and commercial insurance payers 50% faster. Our expert enrollment specialists handle all paperwork, follow-up, and compliance—so you can start billing and seeing patients sooner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 group"
              >
                Start Enrollment Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Payer Enrollment Matters */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Payer Enrollment Is Critical
            </h2>
            <p className="text-xl text-gray-600">
              Without proper payer enrollment, you cannot bill insurance companies or receive reimbursements. Our enrollment services ensure you're in-network and ready to accept patients quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Complete Payer Enrollment Services
            </h2>
            <p className="text-xl text-gray-600">
              From initial applications to ongoing revalidation, we manage every aspect of your payer enrollment lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Proven Enrollment Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined 6-step process that gets you enrolled faster with zero hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <item.icon className="w-12 h-12 text-blue-600 mb-4 mt-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Payer Types */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Payers We Work With
            </h2>
            <p className="text-xl text-gray-300">
              We handle enrollment with all major government and commercial insurance payers across the United States.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {payerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-300">{type.category}</h3>
                <ul className="space-y-3">
                  {type.payers.map((payer, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{payer}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Common Challenges */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Common Enrollment Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Payer enrollment is complex and time-consuming. Let our experts handle these common challenges:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Long Processing Times',
                    description: 'Standard enrollment takes 120-180 days. We reduce this to 60-90 days through strategic follow-up.'
                  },
                  {
                    title: 'Complex Documentation',
                    description: 'Each payer has unique requirements. We know exactly what each payer needs and ensure 100% accuracy.'
                  },
                  {
                    title: 'Missing Deadlines',
                    description: 'Revalidation and attestation deadlines can result in termination. We track all deadlines proactively.'
                  },
                  {
                    title: 'Application Denials',
                    description: 'Errors and incomplete applications cause delays. Our 98% approval rate eliminates this frustration.'
                  },
                  {
                    title: 'Multi-State Complications',
                    description: 'Each state has different requirements. We coordinate multi-state enrollment seamlessly.'
                  }
                ].map((challenge, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Get Enrolled?
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Start accepting more patients and maximize your revenue with fast, expert payer enrollment services.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">Free enrollment consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">Dedicated enrollment specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">Real-time status tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700">No upfront payment required</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Enrolled 50% Faster
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop waiting months to start billing. Our expert enrollment team will have you in-network and seeing patients in 60-90 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-glow transition-all duration-300 group"
            >
              Start Your Enrollment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+18889990974"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Phone className="mr-2 w-5 h-5" />
              (888) 999-0974
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default PayerEnrollmentPage;
