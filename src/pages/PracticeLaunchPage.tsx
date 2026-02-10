import React, { useState } from 'react';
import { CheckCircle2, Rocket, FileText, Shield, DollarSign, Users, Stethoscope, ClipboardCheck, TrendingUp, Clock, ChevronDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import RelatedServices from '../components/RelatedServices';
import ServiceSchema from '../components/ServiceSchema';
import { getRelatedLinks } from '../config/internalLinks';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const PracticeLaunchPage: React.FC = () => {

  const timeline = [
    {
      phase: 'Pre-Launch (3-6 Months Before)',
      icon: FileText,
      tasks: [
        'Business entity formation and tax registration',
        'Obtain NPI numbers (individual and organizational)',
        'Apply for state medical licenses',
        'Secure malpractice insurance',
        'Choose and contract with EHR/PM system',
        'Begin payer credentialing process',
      ],
    },
    {
      phase: 'Setup Phase (2-3 Months Before)',
      icon: ClipboardCheck,
      tasks: [
        'Complete CAQH profile for all providers',
        'Submit credentialing applications to major payers',
        'Set up billing and coding workflows',
        'Establish fee schedule and charge master',
        'Configure clearinghouse connections',
        'Develop compliance and privacy policies',
      ],
    },
    {
      phase: 'Launch Preparation (1 Month Before)',
      icon: Rocket,
      tasks: [
        'Train staff on billing procedures',
        'Test claim submission workflows',
        'Set up patient registration processes',
        'Configure eligibility verification',
        'Establish payment processing',
        'Conduct compliance training',
      ],
    },
    {
      phase: 'Go-Live and Beyond',
      icon: TrendingUp,
      tasks: [
        'Begin seeing patients and submitting claims',
        'Monitor claim submission and payment posting',
        'Track key performance indicators',
        'Address initial denials promptly',
        'Refine workflows based on results',
        'Complete remaining credentialing applications',
      ],
    },
  ];

  const essentialServices = [
    {
      icon: Users,
      title: 'Provider Credentialing',
      description: 'Complete credentialing with Medicare, Medicaid, and commercial payers',
      details: [
        'CAQH profile setup and maintenance',
        'Application submission to all major payers',
        'Follow-up and status monitoring',
        'Typical timeline: 90-120 days',
        'Re-credentialing every 2-3 years',
      ],
    },
    {
      icon: FileText,
      title: 'Billing System Setup',
      description: 'Configure practice management and billing workflows',
      details: [
        'EHR/PM system selection and implementation',
        'Fee schedule configuration',
        'Clearinghouse integration',
        'Charge capture workflow design',
        'Payment posting automation',
      ],
    },
    {
      icon: Shield,
      title: 'Compliance Foundation',
      description: 'Establish policies and procedures for regulatory compliance',
      details: [
        'HIPAA privacy and security policies',
        'Compliance training for staff',
        'Business Associate Agreements',
        'Incident response procedures',
        'Regular compliance audits',
      ],
    },
    {
      icon: DollarSign,
      title: 'Revenue Cycle Setup',
      description: 'Build efficient processes for maximum revenue capture',
      details: [
        'Eligibility verification procedures',
        'Point of service collection policies',
        'Denial management workflows',
        'Patient billing and statements',
        'A/R management processes',
      ],
    },
  ];

  const commonMistakes = [
    {
      mistake: 'Starting Credentialing Too Late',
      impact: 'Cannot bill insurance for 3-6 months, losing significant revenue',
      solution: 'Begin credentialing 6 months before opening. Work with credentialing experts to expedite applications.',
    },
    {
      mistake: 'Underestimating Startup Costs',
      impact: 'Cash flow problems in first 6-12 months',
      solution: 'Budget for 6-12 months of operating expenses. Plan for 60-90 day payment lag from insurance companies.',
    },
    {
      mistake: 'Poor Front-End Processes',
      impact: 'High claim denial rates, delayed payments, patient frustration',
      solution: 'Invest in staff training for registration, eligibility verification, and authorization management from day one.',
    },
    {
      mistake: 'Inadequate Technology',
      impact: 'Manual inefficiencies, coding errors, billing delays',
      solution: 'Choose proven EHR and practice management systems with strong billing capabilities and clearinghouse integration.',
    },
    {
      mistake: 'No Compliance Program',
      impact: 'Risk of audits, fines, and legal liability',
      solution: 'Establish HIPAA policies, compliance training, and documentation standards before seeing patients.',
    },
    {
      mistake: 'Trying to Do Everything In-House',
      impact: 'Overwhelmed staff, billing errors, owner burnout',
      solution: 'Partner with experienced RCM providers for credentialing, billing, and collections to focus on patient care.',
    },
  ];

  const financialProjections = [
    {
      metric: 'Credentialing Timeline',
      typical: '90-120 days per payer',
      bestPractice: 'Start 6 months before opening',
    },
    {
      metric: 'Initial Claim Payment Lag',
      typical: '30-60 days from submission',
      bestPractice: 'Budget for 90-day cash flow gap',
    },
    {
      metric: 'First Year Collection Rate',
      typical: '60-75% for new practices',
      bestPractice: '85-95% with experienced RCM support',
    },
    {
      metric: 'Startup Capital Needed',
      typical: '6-12 months operating expenses',
      bestPractice: 'Include credentialing, technology, and working capital',
    },
    {
      metric: 'Time to Profitability',
      typical: '12-18 months',
      bestPractice: '9-12 months with optimized billing',
    },
  ];

  const faqs = [
    {
      question: 'When should I start the credentialing process for my new practice?',
      answer: 'Begin credentialing at least 6 months before you plan to open. The process typically takes 90-120 days per payer, but can take longer for certain specialties or if there are issues with your application. Starting early ensures you can bill insurance from day one of seeing patients. Work with a credentialing specialist to submit to multiple payers simultaneously.',
    },
    {
      question: 'What are the essential requirements before opening a medical practice?',
      answer: 'Essential requirements include: (1) Individual and organizational NPI numbers, (2) State medical licenses for all providers, (3) DEA registration if prescribing controlled substances, (4) Malpractice insurance, (5) Business entity formation (LLC, Corporation, etc.), (6) Tax ID/EIN, (7) CAQH profile completion, (8) Medicare and major payer credentialing applications submitted, (9) EHR/Practice Management system, and (10) HIPAA compliance policies and training.',
    },
    {
      question: 'How much should I budget for medical billing and RCM for a new practice?',
      answer: 'RCM costs typically range from 4-8% of collections depending on specialty, volume, and services included. For new practices, expect to budget 6-8% since volumes start low. This should include credentialing, eligibility verification, claim submission, payment posting, denial management, and patient billing. Many RCM companies offer lower startup rates or waive setup fees for new practices. Budget separately for your EHR/PM system ($500-1,500/provider/month) and clearinghouse fees ($100-300/month).',
    },
    {
      question: 'Should I hire billing staff or outsource to an RCM company?',
      answer: 'Most new practices benefit from outsourcing initially. In-house billing requires experienced staff (minimum $45,000-65,000 annually per biller), practice management software, clearinghouse costs, and ongoing training. Outsourcing provides expertise from day one with no staff management burden, allowing you to focus on building your patient base. Consider in-house billing once you reach consistent volume of 2,500+ monthly encounters and can justify dedicated billing staff.',
    },
    {
      question: 'What is a realistic timeline from deciding to open a practice to seeing patients?',
      answer: 'A realistic timeline is 6-12 months: Months 1-3: Business planning, location selection, entity formation, initial licensing applications; Months 4-6: Complete facility setup, hire staff, implement EHR, submit credentialing applications; Months 7-9: Staff training, credentialing follow-up, marketing, final inspections; Months 10-12: Soft opening, credentialing completion, full launch. Rushing this timeline often leads to credentialing delays, compliance gaps, and operational problems.',
    },
    {
      question: 'What are the most common billing mistakes new practices make?',
      answer: 'Common mistakes include: (1) Not starting credentialing early enough, resulting in months without insurance billing capability, (2) Inadequate front-end training leading to eligibility and authorization issues, (3) Poor charge capture processes causing revenue leakage, (4) Not verifying insurance before service, resulting in denials, (5) Insufficient cash reserves for the 90-120 day payment lag, (6) Missing timely filing deadlines due to disorganized billing processes, and (7) Not tracking key metrics like days in A/R, denial rates, and collection rates.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Practice Launch Guide 2025 | Billing & Credentialing Setup"
        description="Complete guide to launching your medical practice: credentialing timeline, billing setup, compliance requirements, financial projections, and avoiding common startup mistakes. Free expert consultation."
        keywords="start medical practice, medical practice startup, physician practice launch, credentialing new practice, medical billing setup, practice startup checklist, new practice credentialing, medical practice business plan, healthcare startup guide"
        canonical="https://medtransic.com/practice-launch"
      />
      <ServiceSchema
        name="Practice Launch"
        description="Complete guide to launching your medical practice: credentialing timeline, billing setup, compliance requirements, financial projections, and avoiding common startup mistakes. Free expert consultation."
        url="https://medtransic.com/practice-launch"
        serviceType="Medical Billing Service"
      />

      <div className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Complete Practice Launch Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Launch Your Medical Practice
                <span className="block text-blue-600 mt-2">With Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your comprehensive roadmap to starting a successful medical practice. From credentialing to billing setup, compliance to financial planning - we have got you covered.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">6-12 Months</h3>
                </div>
                <p className="text-gray-600">Typical timeline from planning to opening</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">$150K-$500K</h3>
                </div>
                <p className="text-gray-600">Average startup capital needed</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-gray-900">90-120 Days</h3>
                </div>
                <p className="text-gray-600">Credentialing timeline per payer</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Medtransic for Your Practice Launch?</h2>
              <p className="text-xl mb-6 text-blue-50">
                We specialize in helping new practices get off the ground quickly and profitably. Our launch package includes everything you need for billing success from day one.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">120+</div>
                  <div className="text-sm text-blue-100">Practices Launched</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">30 Days</div>
                  <div className="text-sm text-blue-100">Average Setup Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">95%+</div>
                  <div className="text-sm text-blue-100">First Pass Claim Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-2xl font-bold mb-1">$0</div>
                  <div className="text-sm text-blue-100">Setup Fees</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Your Practice Launch Timeline</h2>
              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.phase}</h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Essential Services for New Practices</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {essentialServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Financial Projections & Benchmarks</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metric</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Typical Experience</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Practice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {financialProjections.map((projection, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{projection.metric}</td>
                          <td className="px-6 py-4 text-gray-700">{projection.typical}</td>
                          <td className="px-6 py-4 text-gray-700">{projection.bestPractice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Common Startup Mistakes to Avoid</h2>
              <div className="space-y-6">
                {commonMistakes.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-600 mb-3">{item.mistake}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-2">Impact:</div>
                        <p className="text-gray-600">{item.impact}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-2">Solution:</div>
                        <p className="text-gray-700 font-medium">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <Stethoscope className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Launch Your Practice?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Get a free consultation with our practice launch specialists. We will create a customized timeline and budget for your specific situation, and show you how to avoid the expensive mistakes most new practices make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule Free Consultation
                  </a>
                  <a
                    href="tel:+18887770860"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Call 888-777-0860
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.85}>
            <div className="mb-16">
              <RelatedServices services={getRelatedLinks('practice-launch')} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Practice Launch FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default PracticeLaunchPage;
