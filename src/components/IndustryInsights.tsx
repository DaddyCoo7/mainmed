import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, AlertCircle, Clock, FileText, Users, Lightbulb } from 'lucide-react';

const IndustryInsights: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const insights = [
    {
      icon: DollarSign,
      title: 'The Financial Impact of Medical Billing Inefficiencies',
      content: 'Healthcare practices across the United States lose an estimated $125 billion annually due to medical billing errors, claim denials, and inefficient revenue cycle processes. According to the Medical Group Management Association (MGMA), the average medical practice writes off 3-5% of potential revenue as uncollectible, while practices with poor billing processes can lose 10% or more. The Centers for Medicare & Medicaid Services (CMS) reports that approximately 20-30% of all medical claims are initially denied, with nearly 65% of denied claims never being resubmed. This represents billions in lost revenue that could be recovered with proper denial management. Furthermore, administrative costs associated with billing and insurance-related activities consume approximately 14-25% of total practice revenue, significantly higher than other developed countries. Practices that implement professional revenue cycle management typically recover 95-98% of expected reimbursement and reduce administrative overhead by 30-40%.',
      stats: ['$125B lost annually to billing errors', '65% of denied claims never resubmitted', '14-25% of revenue spent on admin costs']
    },
    {
      icon: Clock,
      title: 'The True Cost of Days in Accounts Receivable',
      content: 'Days in accounts receivable (AR) serves as a critical financial health indicator for medical practices. Industry benchmarks suggest that healthy practices maintain 30-40 days in AR, while practices with billing challenges often exceed 60-90 days. Each additional day in AR directly impacts cash flow and operational capacity. Financial analysts estimate that every 10-day increase in AR days represents approximately 3% of annual revenue tied up in outstanding claims rather than available for practice operations, staff salaries, equipment purchases, or expansion initiatives. The American Medical Association (AMA) reports that practices with more than 60 days in AR face significantly higher risks of claim write-offs, as payer willingness to pay decreases substantially after 90 days from the date of service. Additionally, aged accounts require exponentially more effort to collect—claims less than 30 days old have a 90% collection probability, while claims over 90 days old have less than 50% probability of collection. Professional billing services utilize systematic follow-up processes and advanced analytics to maintain optimal AR days and prevent accounts from aging beyond 60 days.',
      stats: ['30-40 days is healthy AR benchmark', '90% collection rate for claims under 30 days', 'Less than 50% collection rate after 90 days']
    },
    {
      icon: AlertCircle,
      title: 'Understanding Denial Rates and Revenue Recovery',
      content: 'Medical claim denial rates have increased significantly over the past decade, with industry studies showing denial rates ranging from 5% to 25% depending on practice specialty, payer mix, and billing processes. The Healthcare Financial Management Association (HFMA) reports that the average cost to rework and resubmit a denied claim ranges from $25 to $117 per claim, depending on complexity. This means a practice submitting 10,000 claims annually with a 15% denial rate spends $37,500 to $175,500 annually just on reworking denied claims. The most common denial reasons include missing or incorrect patient information (accounting for 27% of denials), lack of prior authorization (22% of denials), coding errors (18% of denials), duplicate claims (8% of denials), and timely filing violations (7% of denials). Practices that implement proactive denial prevention strategies—including real-time eligibility verification, pre-submission claim scrubbing, systematic prior authorization tracking, and staff training—reduce denial rates by 40-60%. Additionally, structured denial management programs that track denial patterns, prioritize high-value appeals, and implement corrective actions can recover 90% or more of initially denied claims, compared to the 35% recovery rate for practices without formal denial management.',
      stats: ['5-25% average denial rate range', '$25-$117 cost per denied claim', '90% recovery with proper management']
    },
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Management ROI and Performance Benchmarks',
      content: 'Healthcare practices that partner with professional medical billing services typically experience measurable financial improvements within the first 3-6 months. Industry benchmarks from MGMA, HFMA, and the American Academy of Family Physicians (AAFP) indicate that practices implementing comprehensive revenue cycle management solutions achieve an average 20-30% increase in collections, 15-25% reduction in days in accounts receivable, 40-60% decrease in claim denial rates, and 30-50% reduction in administrative overhead costs. The average medical practice spends $3-$4 per claim on in-house billing operations when accounting for staff salaries, benefits, software, training, and overhead. Professional billing services typically charge 4-8% of collections, resulting in cost neutrality or savings for most practices while delivering superior performance. Additionally, outsourced billing frees physicians and clinical staff to focus on patient care rather than administrative tasks. Time studies show that practices with in-house billing dedicate 15-20 hours per week of physician or office manager time to billing-related activities—time that could be redirected to seeing additional patients, improving patient satisfaction, or pursuing practice growth initiatives. The ROI of professional billing services often exceeds 300-400% when considering both direct revenue improvements and indirect benefits of freed physician time.',
      stats: ['20-30% average collection increase', '15-20 hours per week saved', '300-400% ROI for practices']
    },
    {
      icon: FileText,
      title: 'The Complexity of Medical Coding and Compliance',
      content: 'The current medical coding system encompasses over 71,000 ICD-10 diagnosis codes, 10,000+ CPT procedure codes, and thousands of HCPCS supply codes, creating immense complexity for accurate claim submission. The American Academy of Professional Coders (AAPC) reports that medical coding accuracy rates vary dramatically between certified professional coders (95-98% accuracy) and non-certified personnel (70-75% accuracy). This 20-25% accuracy gap directly translates to higher denial rates, delayed payments, and increased audit risk for practices without certified coders. Furthermore, coding requirements change annually—CMS typically updates hundreds of codes each year, including new code additions, deletions, and revised code descriptions or guidelines. The 2024 CPT code set added 325 new codes and revised 180 existing codes, while ICD-10-CM added 395 new diagnosis codes. Staying current with these changes requires dedicated education and training. Professional billing companies invest substantially in staff certification, continuing education (AAPC and AHIMA require 36 continuing education credits every two years), and coding software with automatic code updates. They also maintain specialty-specific coding expertise—for example, orthopedic coding differs substantially from cardiology or dermatology coding in terms of procedure complexity, bundling rules, and modifier usage. Practices benefit from this specialized expertise without needing to maintain it in-house.',
      stats: ['71,000+ ICD-10 codes', '95-98% accuracy with certified coders', '325 new CPT codes added in 2024']
    },
    {
      icon: Users,
      title: 'The Challenge of Medical Billing Staff Recruitment and Retention',
      content: 'Healthcare practices face significant challenges recruiting and retaining qualified medical billing and coding staff. The U.S. Bureau of Labor Statistics projects 8% growth in medical records and health information technician positions through 2029, indicating strong demand and competitive hiring environments. The average salary for certified medical coders ranges from $45,000 to $65,000 annually, while billing specialists earn $38,000 to $55,000, representing substantial fixed costs for practices. Employee turnover in medical billing departments averages 25-35% annually, significantly higher than the overall healthcare average of 19%. Each employee departure costs practices an estimated $25,000 to $50,000 when considering recruitment expenses, training time (typically 3-6 months for new billing staff to reach full productivity), lost productivity during vacancy periods, and knowledge loss. Additionally, maintaining optimal performance requires ongoing training investments—industry experts recommend 20-30 hours of continuing education annually for billing staff to stay current with payer policy changes, coding updates, and regulatory requirements. Professional billing services eliminate these recruitment, retention, training, and management challenges while providing access to experienced billing teams, certified coders, and specialty-specific expertise. They absorb turnover costs and maintain staffing continuity regardless of individual employee changes.',
      stats: ['25-35% annual turnover in billing departments', '$25K-$50K cost per employee turnover', '3-6 months to reach full productivity']
    },
    {
      icon: BarChart3,
      title: 'Technology and Automation in Modern Medical Billing',
      content: 'The medical billing industry has undergone substantial technological transformation over the past decade, with automation and artificial intelligence playing increasingly important roles. Modern revenue cycle management platforms incorporate electronic eligibility verification, which reduces eligibility-related denials by 80-90% compared to manual verification processes. Automated claim scrubbing technology identifies potential errors before submission, catching 75-85% of common claim errors that would otherwise result in denials. Electronic remittance advice (ERA) and electronic funds transfer (EFT) automation reduces payment posting time by 60-70% while virtually eliminating posting errors. Advanced analytics and reporting dashboards provide real-time visibility into key performance indicators, enabling proactive identification of collection opportunities, denial patterns, and workflow bottlenecks. Artificial intelligence and machine learning algorithms are now being applied to predict denial probability, prioritize accounts for follow-up, identify underpayment patterns, and optimize workflow routing. Practices that leverage these advanced technologies see measurable improvements in efficiency and financial performance. However, implementing and maintaining sophisticated billing technology requires substantial capital investment ($50,000 to $200,000+ for comprehensive systems), technical expertise, ongoing maintenance, and regular updates. Professional billing services provide access to enterprise-level technology platforms and expertise without requiring practices to make large capital investments or maintain technical capabilities in-house.',
      stats: ['80-90% reduction in eligibility denials', '75-85% of errors caught before submission', '60-70% faster payment posting']
    },
    {
      icon: Lightbulb,
      title: 'Future Trends in Healthcare Revenue Cycle Management',
      content: 'The healthcare revenue cycle management industry continues to evolve rapidly, driven by regulatory changes, technology advancement, and shifting reimbursement models. Value-based care initiatives are transforming payment structures from traditional fee-for-service models to quality-based reimbursement, requiring sophisticated performance tracking and quality reporting capabilities. The Centers for Medicare & Medicaid Services (CMS) projects that 100% of Medicare fee-for-service payments will be tied to quality or value by 2030, up from approximately 40% today. This transition requires practices to track complex quality measures, submit accurate quality data, and demonstrate performance improvements. Patient financial responsibility continues to increase—high-deductible health plans now cover nearly 50% of employees with employer-sponsored insurance, up from 20% a decade ago. This shift means practices must collect more from patients rather than insurance companies, requiring robust patient payment processes including upfront estimates, flexible payment plans, and convenient payment technologies. Artificial intelligence and automation will play expanding roles in revenue cycle operations, with predictive analytics helping identify high-risk claims, optimize denials management, detect underpayments, and personalize patient payment communications. Telehealth billing has permanently expanded following temporary pandemic-era policy changes, creating new coding and billing requirements. Finally, interoperability and data exchange initiatives promise to streamline information sharing between EHRs, billing systems, and payers, potentially reducing administrative burden. Professional billing services that invest in these emerging capabilities provide practices with competitive advantages in an increasingly complex healthcare landscape.',
      stats: ['100% of Medicare tied to quality by 2030', '50% of employees have high-deductible plans', 'Value-based care transforming reimbursement']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Industry Research & Data
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Medical Billing Industry Insights
            <span className="block text-blue-600 mt-2">Data-Driven Analysis & Trends</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Understanding healthcare revenue cycle management requires examining comprehensive industry research,
            authoritative statistics, and emerging trends. This analysis draws from leading healthcare organizations
            including MGMA, HFMA, AAPC, AMA, and CMS to provide evidence-based insights into the state of medical
            billing and revenue cycle management.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="space-y-10">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <insight.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {insight.title}
                  </h3>

                  <div className="text-lg text-gray-700 leading-relaxed mb-6">
                    <p>{insight.content}</p>
                  </div>

                  {/* Key Statistics */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <div className="font-bold text-blue-900 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Key Statistics
                    </div>
                    <ul className="space-y-2">
                      {insight.stats.map((stat, statIndex) => (
                        <li key={statIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 font-bold">•</span>
                          <span className="text-gray-800 font-medium">{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sources and Authority */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Sources and Industry Authority</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The insights and statistics presented above are derived from authoritative healthcare industry sources including:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Medical Group Management Association (MGMA)</strong> - Practice performance benchmarking data</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Healthcare Financial Management Association (HFMA)</strong> - Revenue cycle best practices</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>American Academy of Professional Coders (AAPC)</strong> - Coding accuracy and certification standards</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Centers for Medicare & Medicaid Services (CMS)</strong> - Federal healthcare program regulations</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>American Medical Association (AMA)</strong> - Practice management insights</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>U.S. Bureau of Labor Statistics</strong> - Healthcare employment and salary data</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Apply These Industry Insights to Your Practice
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Our expert team leverages these industry insights and best practices to deliver measurable improvements
            in your practice's revenue cycle performance. Let's discuss how we can help you achieve benchmark-exceeding results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Get Your Free Revenue Cycle Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryInsights;
