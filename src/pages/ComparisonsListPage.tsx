import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';

interface ComparisonItem {
  slug: string;
  title: string;
  meta_description: string;
  option_a_name: string;
  option_b_name: string;
}

export default function ComparisonsListPage() {
  const [comparisons, setComparisons] = useState<ComparisonItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComparisons() {
      try {
        const { data, error } = await supabase
          .from('comparison_pages')
          .select('slug, title, meta_description, option_a_name, option_b_name')
          .order('title');

        if (error) throw error;
        setComparisons(data || []);
      } catch (err) {
        console.error('Error fetching comparisons:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchComparisons();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEOHead
        title="Medical Billing Comparisons | Expert Analysis"
        description="Compare medical billing services, software, and strategies side-by-side. In-depth analysis of in-house vs outsourced billing, EHR vs PM systems, and more to help you choose the right solution."
        canonicalUrl="https://medtransic.com/comparisons"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <Scale className="h-16 w-16 text-blue-200" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Medical Billing Service Comparisons
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Side-by-side comparisons to help you make informed decisions about medical billing,
                  revenue cycle management, software systems, and practice operations. Compare costs,
                  benefits, risks, and outcomes.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading comparisons...</p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {comparisons.map((comparison, index) => (
                  <motion.div
                    key={comparison.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/comparisons/${comparison.slug}`}
                      className="block h-full group"
                    >
                      <div className="h-full bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                            <TrendingUp className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {comparison.option_a_name} vs {comparison.option_b_name}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {comparison.meta_description}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                          View Detailed Comparison
                          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Why Comparisons Matter */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Side-by-Side Comparisons Matter
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Making the right decision about medical billing services, software systems, and operational
                  strategies can significantly impact your practice revenue and efficiency. Our comprehensive
                  comparisons provide:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Objective Analysis:</strong> Unbiased evaluation of costs, benefits, and tradeoffs for each option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Real-World Insights:</strong> Practical considerations based on actual practice experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Expert Guidance:</strong> Professional recommendations on which approach fits your specific situation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span><strong>Common Questions Answered:</strong> Detailed FAQs addressing your most pressing concerns</span>
                  </li>
                </ul>
                <p className="mt-6">
                  Each comparison includes detailed factor-by-factor analysis, clear winners for each criterion,
                  comprehensive summaries, and actionable recommendations to help you make confident decisions
                  for your practice.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions About What's Right for Your Practice?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation with our experts to get personalized recommendations
              based on your practice size, specialty, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors text-lg font-semibold border-2 border-blue-400"
              >
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
