import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import CostComparisonTool from '../components/CostComparisonTool';
import ServiceSchema from '../components/ServiceSchema';
import {
  TrendingUp,
  DollarSign,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  Building2,
  BarChart3,
  FileCheck,
  HeadphonesIcon,
  Zap,
  Award,
  ArrowRight,
  Target,
  Briefcase,
  TrendingDown,
  Quote
} from 'lucide-react';

export default function OutsourcingMedicalBillingPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Operating Costs by 30-50%",
      description: "Eliminate overhead costs of hiring, training, and maintaining an in-house billing team. Pay only for services you need."
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue by 15-25%",
      description: "Expert billing specialists optimize claims submission, reduce denials, and accelerate payment cycles for maximum reimbursement."
    },
    {
      icon: Clock,
      title: "Faster Payment Cycles",
      description: "Reduce days in A/R from 45+ days to 25-30 days with streamlined processes and dedicated follow-up."
    },
    {
      icon: Shield,
      title: "Ensure Compliance & Security",
      description: "Stay compliant with HIPAA, HITECH, and evolving regulations without the burden of constant monitoring and training."
    },
    {
      icon: Users,
      title: "Access Expert Specialists",
      description: "Leverage certified coders, billing specialists, and denial management experts without hiring full-time staff."
    },
    {
      icon: Zap,
      title: "Scalability & Flexibility",
      description: "Scale services up or down based on practice growth, seasonal changes, or specialty requirements without staffing concerns."
    }
  ];

  const comparisonData = {
    headers: ["Factor", "In-House Billing", "Outsourcing Medical Billing"],
    rows: [
      {
        factor: "Monthly Cost",
        inHouse: "$8,000-$15,000+",
        outsourcing: "$3,000-$7,000",
        advantage: "outsourcing"
      },
      {
        factor: "Setup Time",
        inHouse: "3-6 months",
        outsourcing: "2-4 weeks",
        advantage: "outsourcing"
      },
      {
        factor: "Staff Training",
        inHouse: "Ongoing expense",
        outsourcing: "Included",
        advantage: "outsourcing"
      },
      {
        factor: "Technology Costs",
        inHouse: "$500-$2,000/month",
        outsourcing: "Included",
        advantage: "outsourcing"
      },
      {
        factor: "Compliance Updates",
        inHouse: "Manual tracking",
        outsourcing: "Automatic",
        advantage: "outsourcing"
      },
      {
        factor: "Denial Rate",
        inHouse: "8-15%",
        outsourcing: "2-5%",
        advantage: "outsourcing"
      },
      {
        factor: "Days in A/R",
        inHouse: "45-60 days",
        outsourcing: "25-35 days",
        advantage: "outsourcing"
      },
      {
        factor: "Collection Rate",
        inHouse: "85-92%",
        outsourcing: "95-98%",
        advantage: "outsourcing"
      }
    ]
  };

  const processSteps = [
    {
      number: "01",
      title: "Free Practice Assessment",
      description: "We analyze your current billing performance, identify revenue leaks, and provide a detailed transition plan with projected ROI."
    },
    {
      number: "02",
      title: "Seamless Transition",
      description: "Our team manages the entire transition process, including EHR integration, staff training, and workflow setup within 2-4 weeks."
    },
    {
      number: "03",
      title: "Ongoing Optimization",
      description: "Continuous monitoring, denial management, and process improvements to maximize revenue and minimize administrative burden."
    },
    {
      number: "04",
      title: "Transparent Reporting",
      description: "Real-time access to dashboards, KPIs, and detailed reports. Monthly reviews to discuss performance and opportunities."
    }
  ];

  const reasons = [
    {
      icon: Award,
      title: "15+ Years of Expertise",
      description: "Proven track record managing billing for 500+ healthcare practices across all specialties and practice sizes."
    },
    {
      icon: BarChart3,
      title: "98% Average Collection Rate",
      description: "Industry-leading collection rates through expert claim management, denial prevention, and aggressive follow-up."
    },
    {
      icon: FileCheck,
      title: "99.5% Clean Claim Rate",
      description: "Advanced scrubbing technology and expert coding ensure claims are submitted correctly the first time."
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Account Manager",
      description: "Your practice receives a dedicated account manager who understands your specialty and specific needs."
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Infrastructure",
      description: "SOC 2 certified facilities with 256-bit encryption, regular security audits, and comprehensive compliance protocols."
    },
    {
      icon: Target,
      title: "Specialty-Specific Expertise",
      description: "Certified coders and billers trained in your specific specialty's coding requirements and payer rules."
    }
  ];

  const faqs = [
    {
      question: "How much does outsourcing medical billing services cost?",
      answer: "Outsourcing medical billing typically costs 4-8% of collections, or a flat monthly fee ranging from $3,000-$7,000 depending on practice size and complexity. This is 30-50% less than maintaining an in-house billing department when you factor in salaries, benefits, software, training, and overhead costs."
    },
    {
      question: "Will I lose control over my billing when outsourcing?",
      answer: "No. With Medtransic, you maintain full visibility and control through real-time dashboards, weekly reports, and monthly reviews. You approve all major decisions while we handle the day-to-day operations. Many practices report having MORE control after outsourcing due to better reporting and analytics."
    },
    {
      question: "How long does it take to transition to outsourced medical billing?",
      answer: "Our typical transition timeline is 2-4 weeks. This includes EHR integration, workflow setup, staff training, and claim submission. We manage the entire process to ensure zero disruption to your revenue cycle during the transition."
    },
    {
      question: "What happens to my current billing staff when I outsource?",
      answer: "Many practices redeploy their billing staff to front-desk duties, patient care coordination, or practice management roles where they can focus on patient experience and practice growth. We can also provide transition support and training if needed."
    },
    {
      question: "Can I switch back to in-house billing if outsourcing doesn't work out?",
      answer: "Yes. Our contracts are flexible with 30-60 day termination clauses. We maintain complete documentation and provide full transition support if you decide to bring billing in-house. However, 98% of our clients renew their contracts due to improved performance and cost savings."
    },
    {
      question: "How do you handle denied claims and appeals?",
      answer: "Denial management is included in our outsourcing services. Our specialists analyze every denial, file appeals within 24-48 hours, and implement corrective measures to prevent future denials. We achieve a 92% success rate on first-level appeals."
    },
    {
      question: "Will outsourcing work with my existing EHR system?",
      answer: "Yes. Medtransic integrates with 50+ EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, and more. We handle the technical integration and ensure seamless data flow between your EHR and our billing systems."
    },
    {
      question: "How quickly will I see results after outsourcing medical billing?",
      answer: "Most practices see measurable improvements within 60-90 days. Initial improvements in claim submission accuracy and reduced denials appear within 30 days. Full revenue optimization, including accelerated collections and reduced A/R, typically occurs within 90 days."
    },
    {
      question: "Is my patient and practice data secure when outsourcing?",
      answer: "Absolutely. Medtransic is HIPAA-compliant with SOC 2 certification. We use 256-bit encryption, secure servers, regular security audits, comprehensive staff training, and strict access controls. Your data is more secure with our enterprise-grade infrastructure than typical in-house systems."
    },
    {
      question: "What if I have a very small practice - is outsourcing still worth it?",
      answer: "Yes! Small practices often benefit most from outsourcing. Even solo practitioners can reduce costs by 40-60% while improving collections. We offer scalable solutions starting at $1,500/month for smaller practices, making professional billing services accessible regardless of size."
    }
  ];

  return (
    <>
      <SEOHead
        title="Outsourcing Medical Billing Services | End-to-End RCM Solutions 2025"
        description="Reduce costs by 30-50% and increase revenue by 15-25% with expert outsourced medical billing and RCM services. Full end-to-end revenue cycle management. HIPAA-compliant, 98% collection rate. Free assessment."
        keywords="outsourcing medical billing services, medical billing outsourcing, outsource medical billing, end-to-end RCM, complete RCM services, healthcare billing services, medical billing companies, RCM outsourcing, billing service providers"
        canonical="https://medtransic.com/services/outsourcing-medical-billing"
        ogType="article"
      />
      <ServiceSchema
        name="Outsourcing Medical Billing"
        description="Reduce costs by 30-50% and increase revenue by 15-25% with expert outsourced medical billing and RCM services. Full end-to-end revenue cycle management. HIPAA-compliant, 98% collection rate. Free assessment."
        url="https://medtransic.com/services/outsourcing-medical-billing"
        serviceType="Medical Billing Service"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                Reduce Costs by 30-50% • Increase Revenue by 15-25%
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                End-to-End Medical Billing & RCM Outsourcing Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop losing revenue to billing inefficiencies. Partner with Medtransic for complete medical billing and revenue cycle management outsourcing services that reduce costs by 30-50%, increase revenue by 15-25%, and maximize reimbursements—so you can focus on patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
                >
                  Get Free Revenue Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all border-2 border-blue-600 inline-flex items-center justify-center gap-2"
                >
                  View Pricing Plans
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  No Setup Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  2-4 Week Transition
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  98% Collection Rate
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Healthcare Providers Choose to Outsource Medical Billing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The benefits of outsourcing medical billing extend far beyond cost savings. Transform your entire revenue cycle with proven expertise.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all h-full">
                    <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison Tool Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <CostComparisonTool />
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                In-House vs. Outsourcing Medical Billing: The Clear Choice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how outsourcing medical billing services compares to maintaining an in-house billing department.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                      <tr>
                        {comparisonData.headers.map((header, index) => (
                          <th
                            key={index}
                            className={`px-6 py-4 text-left text-white font-semibold ${
                              index === 0 ? 'w-1/3' : 'w-1/3'
                            }`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.rows.map((row, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                        >
                          <td className="px-6 py-4 font-semibold text-gray-900">{row.factor}</td>
                          <td className="px-6 py-4 text-gray-600">{row.inHouse}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-green-700">{row.outsourcing}</span>
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-t-2 border-green-200">
                  <p className="text-center text-gray-800 font-semibold">
                    <TrendingUp className="inline w-5 h-5 text-green-600 mr-2" />
                    Average ROI: 250-400% within the first year of outsourcing medical billing services
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Our Medical Billing Outsourcing Process Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamless transition from in-house to outsourced medical billing in just 2-4 weeks.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="pl-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Why Outsource Medical Billing to Medtransic?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Industry-leading expertise, technology, and results that drive practice growth.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all h-full">
                    <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{reason.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Proven Results from Outsourcing Medical Billing
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Healthcare Practices Served" },
                { value: "98%", label: "Average Collection Rate" },
                { value: "99.5%", label: "Clean Claim Rate" },
                { value: "30-50%", label: "Cost Reduction" }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Outsourcing Medical Billing
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about medical billing outsourcing services.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <details className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                    <summary className="px-8 py-6 cursor-pointer hover:bg-blue-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1 group-open:bg-blue-600">
                          <ArrowRight className="w-4 h-4 text-blue-600 group-open:text-white transform group-open:rotate-90 transition-transform" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 flex-1">{faq.question}</h3>
                      </div>
                    </summary>
                    <div className="px-8 pb-6 pl-16">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 shadow-xl border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-blue-600" />
                  </div>
                  <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                    "Outsourcing to Medtransic eliminated three full-time billing positions, saving $165K annually in salaries and benefits.
                    Our collections increased 28% and we never worry about billing anymore. The practice is more profitable and I focus
                    entirely on patient care. Best decision we ever made."
                  </blockquote>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="font-bold text-gray-900 text-lg">Dr. Robert Kim</p>
                    <p className="text-blue-600 font-medium">Practice Owner</p>
                    <p className="text-gray-500">Internal Medicine Practice, Illinois</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12">
              <div className="text-center mb-12">
                <motion.h2
                  className="text-4xl font-bold mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  The Benefits for Your Practice
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Outsourcing medical billing transforms your practice with proven financial and operational advantages
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Dramatic Cost Reduction</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Save 40-60% compared to maintaining in-house billing operations. Eliminate expenses for staff, software licenses, hardware, training, and office space overhead.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Revenue Increase 20-30%</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Expert billing specialists capture more revenue through higher clean claim rates, faster submissions, reduced denials, and persistent collections follow-up.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Focus on Core Clinical Work</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Redirect provider and staff time from billing operations to patient care, practice growth, and clinical excellence. Build a better practice experience for everyone.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Scalability Without Limits</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Grow your practice without hiring challenges. Add providers, open locations, or increase volume without billing department constraints or training delays.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Accelerated Cash Flow</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Reduce days in accounts receivable by 30-40%. Faster claim submission, expert follow-up, and efficient processes turn your services into revenue quicker.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Expertise and Technology Access</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Leverage certified coders, experienced billing specialists, and advanced RCM technology without capital investment. Get enterprise-level capabilities at a fraction of the cost.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Revenue Cycle?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 500+ practices that increased revenue by 15-25% and reduced costs by 30-50% through expert medical billing outsourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all border-2 border-white/20 inline-flex items-center justify-center gap-2"
                >
                  View Pricing Options
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-blue-100">
                <Shield className="w-5 h-5" />
                <span>HIPAA-Compliant • No Long-Term Contracts • 30-Day Money-Back Guarantee</span>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
