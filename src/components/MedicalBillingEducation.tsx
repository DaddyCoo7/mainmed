import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, DollarSign, FileText, AlertCircle, CheckCircle2, TrendingUp, Shield, Clock } from 'lucide-react';

const MedicalBillingEducation: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const keyTopics = [
    {
      icon: DollarSign,
      title: 'Understanding Revenue Cycle Management',
      content: 'Revenue Cycle Management (RCM) encompasses the entire financial process of a healthcare practice, from patient scheduling and registration to final payment collection. Effective RCM involves multiple critical steps including insurance verification, accurate medical coding, timely claims submission, payment posting, denial management, and patient billing. Each step must be executed with precision to ensure optimal cash flow. Modern RCM leverages advanced technology and experienced billing professionals to minimize claim denials, reduce days in accounts receivable, and maximize revenue capture. Practices that implement comprehensive RCM solutions typically see a 20-30% improvement in collections within the first year.'
    },
    {
      icon: FileText,
      title: 'Medical Coding Accuracy: The Foundation of Clean Claims',
      content: 'Medical coding is the process of translating healthcare diagnoses, procedures, and services into standardized alphanumeric codes used for billing purposes. The three primary code sets—CPT (Current Procedural Terminology), ICD-10 (International Classification of Diseases), and HCPCS (Healthcare Common Procedure Coding System)—must be selected with absolute precision. Even minor coding errors can result in claim denials, underpayment, or compliance issues. Certified professional coders stay current with annual code updates, payer-specific requirements, and documentation guidelines. Accurate coding ensures proper reimbursement, reduces audit risk, and maintains compliance with federal regulations. Practices using certified medical coders achieve 95-98% first-pass claim acceptance rates compared to 60-70% for practices without specialized coding expertise.'
    },
    {
      icon: AlertCircle,
      title: 'Common Causes of Claim Denials and Prevention Strategies',
      content: 'Claim denials represent one of the most significant revenue challenges facing medical practices today. The most common denial reasons include missing or incorrect patient information, lack of prior authorization, coding errors, duplicate claims, and timely filing violations. Industry research indicates that 20-25% of all claims are initially denied, and nearly 65% of denied claims are never resubmitted, resulting in permanent revenue loss. Effective denial prevention requires implementing front-end verification processes, maintaining current payer contracts knowledge, utilizing real-time eligibility verification, conducting pre-submission claim scrubbing, and establishing systematic denial tracking and analysis. Practices that implement comprehensive denial management programs reduce denial rates by 45-60% and recover 90% or more of initially denied claims.'
    },
    {
      icon: CheckCircle2,
      title: 'Insurance Verification and Eligibility: Preventing Payment Issues',
      content: 'Insurance verification is a critical front-end process that confirms patient coverage, identifies co-pays and deductibles, determines covered services, and verifies authorization requirements before services are rendered. Real-time eligibility verification prevents claim denials due to inactive coverage, identifies secondary insurance, confirms in-network status, and establishes patient financial responsibility upfront. Practices that conduct thorough insurance verification before every appointment reduce claim denials by 30-40% and improve patient collections by 25-35%. This proactive approach also enhances patient satisfaction by providing clear cost estimates and payment expectations before treatment begins.'
    },
    {
      icon: TrendingUp,
      title: 'Accounts Receivable Management and Collections Optimization',
      content: 'Effective accounts receivable (AR) management is essential for maintaining healthy cash flow and practice financial stability. Key performance indicators include days in AR (industry benchmark: 30-40 days), aging percentages (goal: 70%+ current, less than 15% over 90 days), and collection rates (target: 95%+ of expected reimbursement). Systematic AR management involves regular follow-up on unpaid claims, patient statement generation, payment plan establishment, and strategic collection efforts. Practices should implement automated payment reminders, offer convenient payment options including online portals, and maintain consistent follow-up schedules. Professional billing services utilize advanced analytics to identify collection opportunities, prioritize high-value accounts, and prevent write-offs. Optimized AR management typically increases practice revenue by 15-25% without adding new patients.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance and Data Security in Medical Billing',
      content: 'Healthcare billing operations must maintain strict compliance with HIPAA (Health Insurance Portability and Accountability Act) regulations to protect patient protected health information (PHI). Compliance requirements include implementing physical, technical, and administrative safeguards, conducting regular risk assessments, providing staff training, maintaining business associate agreements, and establishing breach notification procedures. Medical billing companies should utilize encrypted data transmission, secure cloud-based systems, access controls, audit trails, and disaster recovery protocols. HIPAA violations can result in penalties ranging from $100 to $50,000 per violation with annual maximum penalties exceeding $1.5 million. Beyond regulatory compliance, robust data security practices build patient trust and protect practice reputation. Certified medical billing services maintain comprehensive compliance programs and undergo regular security audits to ensure the highest protection standards.'
    },
    {
      icon: Clock,
      title: 'Timely Filing Requirements and Claim Submission Best Practices',
      content: 'Every insurance payer establishes specific timely filing deadlines—the maximum time allowed between the date of service and claim submission. These deadlines typically range from 30 to 365 days but vary significantly by payer and contract. Missing a timely filing deadline results in automatic claim denial with no possibility of appeal, representing permanent revenue loss. Best practices for avoiding timely filing denials include establishing systematic claim submission processes, implementing daily charge entry procedures, utilizing clearinghouse claim tracking, maintaining payer-specific deadline calendars, and monitoring claim acknowledgment reports. Professional billing services implement multiple quality checkpoints to ensure 100% of claims are submitted well within filing deadlines. They also maintain documentation of submission proof to appeal inappropriate timely filing denials. Preventing timely filing denials alone can protect 3-5% of practice revenue that would otherwise be lost.'
    },
    {
      icon: BookOpen,
      title: 'Medical Billing Regulations and Compliance Requirements',
      content: 'Medical billing operations must navigate a complex regulatory landscape including Medicare regulations (Medicare Claims Processing Manual), Medicaid state-specific requirements, commercial payer guidelines, and federal laws like the False Claims Act and Anti-Kickback Statute. Compliance responsibilities include accurate documentation, appropriate code selection, proper modifier usage, medical necessity verification, and adherence to national and local coverage determinations (NCDs and LCDs). The Centers for Medicare & Medicaid Services (CMS) regularly updates billing rules, payment methodologies, and documentation requirements. Professional billing services maintain dedicated compliance staff who monitor regulatory changes, update billing procedures, conduct internal audits, and provide staff education. Non-compliance can result in claim denials, payment recoupments, exclusion from federal programs, and significant financial penalties. Maintaining rigorous compliance standards protects practice revenue while ensuring ethical billing practices.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Expert Medical Billing Knowledge
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Essential Medical Billing Concepts
            <span className="block text-blue-600 mt-2">Every Healthcare Practice Should Know</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the fundamentals of medical billing and revenue cycle management is crucial for maintaining
            a financially healthy practice. Our expert team has compiled comprehensive insights based on decades of
            experience managing medical billing for thousands of healthcare providers across all specialties.
          </p>
        </motion.div>

        {/* Educational Topics Grid */}
        <div className="space-y-8">
          {keyTopics.map((topic, index) => (
            <motion.article
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <topic.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {topic.title}
                  </h3>

                  <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                    <p>{topic.content}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Expert Guidance for Your Practice?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Our certified medical billing specialists bring this expertise to your practice every single day,
            ensuring optimal revenue capture, compliance, and financial performance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Schedule Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MedicalBillingEducation;
