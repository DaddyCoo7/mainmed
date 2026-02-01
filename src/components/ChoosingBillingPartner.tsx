import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Award, Users, Shield, TrendingUp, Zap, CheckCircle, AlertTriangle, Search, FileCheck, DollarSign } from 'lucide-react';

const ChoosingBillingPartner: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const selectionCriteria = [
    {
      icon: Award,
      title: 'Certification and Credentials',
      content: 'When evaluating medical billing companies, verify that they employ certified professional coders (CPC, CCS, or COC credentials) and certified medical reimbursement specialists. These certifications demonstrate formal training, ongoing education, and adherence to industry standards. Ask about staff credentials, training programs, and continuing education requirements. Reputable billing companies maintain AAPC (American Academy of Professional Coders) or AHIMA (American Health Information Management Association) memberships and require annual certification renewals. Additionally, billing companies should have business associate agreements (BAAs) in place and demonstrate HIPAA compliance training for all staff members. The certification status of coding and billing staff directly correlates with claim accuracy rates and overall revenue performance.',
      important: true
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record and Performance Metrics',
      content: 'Request concrete performance metrics from potential billing partners including their average first-pass claim acceptance rate (should be 95% or higher), average days in accounts receivable (should be 30-40 days or less), denial rate (should be 5% or lower), and collection rate percentage (should be 95%+ of expected reimbursement). Ask for case studies or references from practices similar to yours in size and specialty. Inquire about their experience with your specific specialty\'s billing requirements, as different specialties have unique coding challenges and payer requirements. A billing company with proven success in your specialty will understand common documentation requirements, typical procedure codes, and specialty-specific regulations. Request to speak with current clients to learn about their experience with claim accuracy, payment timeliness, and customer service responsiveness.',
      important: true
    },
    {
      icon: Zap,
      title: 'Technology Platform and Integration Capabilities',
      content: 'Modern medical billing requires sophisticated technology platforms that integrate seamlessly with your electronic health record (EHR) system. Evaluate whether the billing company\'s software integrates with your specific EHR (Epic, Cerner, Athenahealth, eClinicalWorks, etc.) and what level of integration is supported. Real-time eligibility verification, automated claim scrubbing, electronic remittance advice (ERA) posting, and patient portal integration are essential features. The billing platform should provide detailed analytics and reporting dashboards that give you visibility into key performance indicators, claim status, denial reasons, and collection trends. Cloud-based systems offer advantages including automatic updates, disaster recovery, remote accessibility, and enhanced security. Ask about system uptime guarantees, data backup procedures, and technical support availability.',
      important: false
    },
    {
      icon: Users,
      title: 'Dedicated Account Management and Communication',
      content: 'Effective medical billing requires ongoing communication between your practice and the billing team. Determine whether you will have a dedicated account manager who serves as your primary point of contact and becomes familiar with your practice\'s specific needs, preferences, and workflows. Ask about communication protocols, response time guarantees, and meeting frequency. Regular reporting should include detailed financial analytics, denial analysis, aging reports, and key performance indicators. The billing company should provide transparency into their processes and be responsive to questions or concerns. Understand their escalation procedures for urgent issues and how they handle complex denial appeals or payer disputes. Strong communication and partnership approach are critical for long-term success.',
      important: false
    },
    {
      icon: Shield,
      title: 'Compliance, Security, and Risk Management',
      content: 'Medical billing involves handling sensitive patient information and navigating complex healthcare regulations. Verify that potential billing partners maintain comprehensive HIPAA compliance programs including regular risk assessments, staff training, business associate agreements, breach notification procedures, and incident response plans. Ask about their data encryption standards, access controls, audit logging, and security certifications (such as HITRUST or SOC 2). Inquire about their professional liability insurance coverage, errors and omissions insurance, and cyber liability insurance. The billing company should conduct regular internal audits to identify potential compliance issues before they become problems. They should also stay current with changing regulations including Medicare rules, state Medicaid requirements, and commercial payer policies. Request copies of their HIPAA policies, security protocols, and compliance certifications.',
      important: true
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing Structure and Contract Terms',
      content: 'Medical billing companies typically charge either a percentage of collections (usually 4-8% for established practices) or a flat monthly fee. Percentage-based pricing aligns the billing company\'s interests with your revenue goals, while flat-fee pricing provides predictable costs. Carefully review contract terms including minimum commitment periods, termination clauses, transition assistance, and any setup fees or implementation charges. Ask about additional fees for specific services such as credentialing, patient statements, appeals, or custom reporting. Understand what services are included in the base price versus optional add-ons. Be wary of contracts that lock you in for extended periods without performance guarantees or that charge excessive transition fees if you decide to change vendors. Reputable billing companies offer reasonable terms and are confident enough in their services to include performance-based provisions.',
      important: false
    },
    {
      icon: FileCheck,
      title: 'Credentialing and Provider Enrollment Expertise',
      content: 'Provider credentialing and payer enrollment are critical prerequisites for receiving reimbursement. Ask whether the billing company offers credentialing services and what their experience is with CAQH registration, Medicare and Medicaid enrollment, commercial insurance paneling, and hospital privileging. The credentialing process typically takes 90-120 days for initial applications and requires meticulous attention to detail to avoid delays. Experienced credentialing specialists understand payer-specific requirements, can expedite applications when necessary, and ensure timely re-credentialing before credentials expire. They should also handle changes to your practice such as new providers, location additions, or practice structure modifications. Comprehensive credentialing services prevent payment delays and ensure your providers can see patients and receive reimbursement from all relevant payers.',
      important: false
    },
    {
      icon: Search,
      title: 'Denial Management and Appeals Process',
      content: 'A billing company\'s approach to denial management reveals much about their expertise and commitment to maximizing your revenue. Ask detailed questions about their denial management process including how quickly they identify denials, their systematic approach to categorizing and prioritizing denials, and their appeal success rate. Effective denial management requires analyzing denial patterns to prevent future occurrences, not just appealing individual claims. The billing company should provide regular denial reports showing denial reasons, denial rates by payer, and trending analysis. They should have experience with complex appeals including peer-to-peer reviews, reconsiderations, and external appeals to independent review organizations. Ask about their turnaround time for filing appeals (industry best practice is within 7-10 days of denial) and what percentage of denied claims they successfully recover. Many practices lose 5-10% of potential revenue to unworked denials, making this a critical evaluation criterion.',
      important: true
    }
  ];

  const redFlags = [
    'Promises that sound too good to be true (like 99.9% collection rates)',
    'Unwillingness to provide references or performance data',
    'Lack of certified coding professionals on staff',
    'No specialty-specific experience in your medical field',
    'Long-term contracts without performance guarantees',
    'Unclear or hidden fee structures and pricing',
    'Poor communication or unresponsive account management',
    'No formal HIPAA compliance program or security certifications',
    'Offshore billing operations without adequate oversight',
    'Inability to integrate with your current EHR system'
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
            <Target className="w-4 h-4 mr-2" />
            Expert Selection Guide
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Choose the Right
            <span className="block text-blue-600 mt-2">Medical Billing Partner for Your Practice</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Selecting a medical billing company is one of the most important decisions you'll make for your practice's
            financial health. This comprehensive guide, developed from our experience working with thousands of healthcare
            providers, outlines the essential criteria to evaluate when choosing a billing partner.
          </p>
        </motion.div>

        {/* Selection Criteria */}
        <div className="space-y-8 mb-16">
          {selectionCriteria.map((criterion, index) => (
            <motion.article
              key={index}
              className={`rounded-2xl p-8 lg:p-10 shadow-lg border-2 transition-all duration-300 ${
                criterion.important
                  ? 'bg-gradient-to-br from-blue-50 to-white border-blue-300 hover:shadow-xl'
                  : 'bg-white border-gray-200 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    criterion.important
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                      : 'bg-gradient-to-br from-gray-600 to-gray-700'
                  }`}>
                    <criterion.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  {criterion.important && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Critical Factor
                    </div>
                  )}

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {criterion.title}
                  </h3>

                  <div className="text-lg text-gray-700 leading-relaxed">
                    <p>{criterion.content}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Red Flags Section */}
        <motion.div
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12 border-2 border-red-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Warning Signs to Watch For
              </h3>
              <p className="text-lg text-gray-700">
                Be cautious if a medical billing company exhibits any of these red flags during your evaluation process:
              </p>
            </div>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            {redFlags.map((flag, index) => (
              <li key={index} className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 leading-relaxed">{flag}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Evaluate Us Against These Criteria?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            We welcome detailed questions about our certifications, performance metrics, technology, and processes.
            Experience the transparency and professionalism that sets Medtransic apart from other billing companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Request Detailed Information
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors"
            >
              Learn About Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChoosingBillingPartner;
