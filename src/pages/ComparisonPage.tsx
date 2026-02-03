import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';

interface ComparisonFactor {
  factor: string;
  optionA: string;
  optionB: string;
  winner: 'A' | 'B' | 'tie';
}

interface FAQ {
  question: string;
  answer: string;
}

interface ComparisonPageData {
  slug: string;
  title: string;
  meta_description: string;
  h1: string;
  intro: string;
  option_a_name: string;
  option_b_name: string;
  comparison_factors: ComparisonFactor[];
  winner_summary: string;
  faqs: FAQ[];
  cta_text: string;
}

export default function ComparisonPage() {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<ComparisonPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    async function fetchComparisonData() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('comparison_pages')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError('Comparison not found');
          return;
        }

        setPageData(data);
      } catch (err) {
        console.error('Error fetching comparison data:', err);
        setError('Failed to load comparison information');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchComparisonData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading comparison...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Comparison Not Found</h1>
            <p className="text-gray-600 mb-6">The comparison you're looking for doesn't exist.</p>
            <Link
              to="/resources"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Resources <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getWinnerIcon = (winner: string, option: 'A' | 'B') => {
    if (winner === 'tie') {
      return <Minus className="h-5 w-5 text-gray-500" />;
    }
    if (winner === option) {
      return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    }
    return <XCircle className="h-5 w-5 text-gray-600" />;
  };

  const getWinnerClass = (winner: string, option: 'A' | 'B') => {
    if (winner === 'tie') return '';
    if (winner === option) return 'bg-green-50 border-green-200';
    return 'bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEOHead
        title={pageData.title}
        description={pageData.meta_description}
        canonical={`https://medtransic.com/comparisons/${pageData.slug}`}
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {pageData.h1}
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  {pageData.intro}
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold w-1/4">
                      Comparison Factor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold w-3/8">
                      {pageData.option_a_name}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold w-3/8">
                      {pageData.option_b_name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.comparison_factors.map((factor, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {factor.factor}
                      </td>
                      <td className={`px-6 py-4 ${getWinnerClass(factor.winner, 'A')} border-l border-gray-200`}>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {getWinnerIcon(factor.winner, 'A')}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {factor.optionA}
                          </p>
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${getWinnerClass(factor.winner, 'B')} border-l border-gray-200`}>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {getWinnerIcon(factor.winner, 'B')}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {factor.optionB}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Better Option</span>
              </div>
              <div className="flex items-center gap-2">
                <Minus className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">Tied/Equal</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Winner Summary */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Bottom Line
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {pageData.winner_summary}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {pageData.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="flex items-start gap-4 flex-1">
                        <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-gray-900 text-lg">
                          {faq.question}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4 inline-block"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? 'auto' : 0,
                        opacity: openFAQ === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 pl-16">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {pageData.cta_text}
            </h2>
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
    </div>
  );
}
