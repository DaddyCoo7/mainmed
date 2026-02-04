import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Search,
  ArrowRight,
  Calendar,
  Phone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import OrganizationSchema from '../components/OrganizationSchema';
import AnimatedSection from '../components/AnimatedSection';
import { supabase } from '../lib/supabase';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  detailed_explanation: string;
  example: string;
  related_terms: string[];
  why_it_matters: string;
  category: string;
}

const BillingGlossaryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());
  const [glossaryTerms, setGlossaryTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    const fetchGlossaryTerms = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('glossary_terms')
          .select('*')
          .order('term', { ascending: true });

        if (error) throw error;

        setGlossaryTerms(data || []);
      } catch (err) {
        console.error('Error fetching glossary terms:', err);
        setError('Failed to load glossary terms. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGlossaryTerms();
  }, []);

  usePrerenderReady(!loading && glossaryTerms.length > 0);

  const filteredTerms = glossaryTerms
    .filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = !selectedLetter || term.term.charAt(0).toUpperCase() === selectedLetter;
      return matchesSearch && matchesLetter;
    })
    .sort((a, b) => a.term.localeCompare(b.term));

  const toggleTerm = (term: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(term)) {
      newExpanded.delete(term);
    } else {
      newExpanded.add(term);
    }
    setExpandedTerms(newExpanded);
  };

  useEffect(() => {
    if (glossaryTerms.length === 0) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "name": "Medical Billing and RCM Glossary 2025",
      "description": "Comprehensive glossary of medical billing, revenue cycle management, and healthcare reimbursement terminology with clear definitions and examples",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "Medtransic",
        "url": "https://medtransic.com"
      },
      "hasDefinedTerm": glossaryTerms.map(term => ({
        "@type": "DefinedTerm",
        "name": term.term,
        "description": term.definition,
        "inDefinedTermSet": "Medical Billing and RCM Glossary"
      }))
    });
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [glossaryTerms]);

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Billing Glossary | Healthcare Billing Terms & Definitions"
        description="Comprehensive medical billing glossary with definitions of common billing terms, codes, and healthcare acronyms. Over 70+ essential terms defined."
        canonical="https://medtransic.com/resources/billing-glossary"
        keywords="medical billing glossary, billing terms, healthcare definitions, billing terminology, medical billing dictionary, RCM terms"
        ogType="website"
      />
      <OrganizationSchema />
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
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                Medical Billing Glossary 2025
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Medical Billing Terms and RCM Definitions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your comprehensive guide to understanding medical billing terminology, revenue cycle management concepts,
            and healthcare reimbursement language. Over 70 essential terms defined with clear explanations and real-world examples.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <Search className="w-6 h-6 text-gray-400 absolute ml-4" />
              <input
                type="text"
                placeholder="Search glossary terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedLetter(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  !selectedLetter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedLetter === letter
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-lg text-gray-600">Loading glossary terms...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-12">
              <p className="text-center text-lg text-gray-600">
                Showing {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'}
                {selectedLetter && ` starting with ${selectedLetter}`}
              </p>
            </div>

            <div className="space-y-6 mb-24">
              {filteredTerms.map((item, index) => (
                <AnimatedSection
                  key={item.id}
                  animation="slideUp"
                  delay={index * 0.05}
                >
                  <motion.article
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                    whileHover={{ y: -2, scale: 1.01 }}
                    itemScope
                    itemType="https://schema.org/DefinedTerm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2
                          className="text-2xl font-bold text-gray-900 mb-2"
                          itemProp="name"
                        >
                          {item.term}
                        </h2>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleTerm(item.term)}
                        className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label={expandedTerms.has(item.term) ? 'Collapse' : 'Expand'}
                      >
                        {expandedTerms.has(item.term) ? (
                          <ChevronUp className="w-6 h-6 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-600" />
                        )}
                      </button>
                    </div>

                    <div
                      className="text-lg text-gray-700 mb-4 leading-relaxed"
                      itemProp="description"
                    >
                      <strong>Definition:</strong> {item.definition}
                    </div>

                    {expandedTerms.has(item.term) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="pt-4 border-t border-gray-200">
                          <h3 className="font-bold text-gray-900 mb-2">Detailed Explanation</h3>
                          <p className="text-gray-700 leading-relaxed">{item.detailed_explanation}</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                          <h3 className="font-bold text-gray-900 mb-2">Example</h3>
                          <p className="text-gray-700 leading-relaxed">{item.example}</p>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                          <h3 className="font-bold text-gray-900 mb-2">Why It Matters</h3>
                          <p className="text-gray-700 leading-relaxed">{item.why_it_matters}</p>
                        </div>

                        {item.related_terms && item.related_terms.length > 0 && (
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">Related Terms</h3>
                            <div className="flex flex-wrap gap-2">
                              {item.related_terms.map((related, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                                  onClick={() => setSearchQuery(related)}
                                >
                                  {related}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No terms found matching your search. Try a different search term or letter.
                </p>
              </div>
            )}
          </>
        )}

        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Need Help with Medical Billing?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our billing experts understand all these terms and more. Let us handle your revenue cycle
              so you can focus on patient care.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Billing Experts
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <Link
                to="/resources"
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Resources
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BillingGlossaryPage;
