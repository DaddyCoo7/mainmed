import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Scale, TrendingUp, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Comparison {
  id: string;
  slug: string;
  title: string;
  h1: string;
  meta_description: string;
  option_a_name: string;
  option_b_name: string;
  intro: string;
}

const ComparisonsListPage: React.FC = () => {
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComparisons = async () => {
      const { data, error } = await supabase
        .from('comparison_pages')
        .select('*')
        .order('title');

      if (!error && data) {
        setComparisons(data);
      }
      setLoading(false);
    };

    fetchComparisons();
  }, []);

  return (
    <>
      <SEOHead
        title="Medical Billing Comparisons | In-House vs Outsourced, EMR vs PM Software"
        description="Compare medical billing solutions, revenue cycle models, and practice management options. Expert analysis to help you make the right decision for your practice."
        canonicalUrl="https://medtransic.com/resources/comparisons"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl mb-6">
                <Scale className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Medical Billing Comparisons
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Make informed decisions with expert comparisons of billing models, software solutions, and revenue cycle strategies.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Expert Analysis to Guide Your Decisions
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Choosing the right medical billing solution can significantly impact your practice's revenue and efficiency.
                  Our comprehensive comparisons provide unbiased analysis to help you make the best decision for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-sky-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading comparisons...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.id}
                  to={`/comparisons/${comparison.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-500"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Scale className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                        </div>
                        <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">VS</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {comparison.option_a_name} vs {comparison.option_b_name}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {comparison.intro}
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        DETAILED COMPARISON
                      </span>
                      <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm group-hover:underline">
                        Read Analysis →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing the Right Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our experts can provide personalized recommendations based on your practice size, specialty, and specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8887770860"
                className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call (888) 777-0860
              </a>
              <Link
                to="/contact"
                className="bg-sky-800 hover:bg-sky-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComparisonsListPage;
