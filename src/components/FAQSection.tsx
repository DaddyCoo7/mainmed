import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X, HelpCircle, CheckCircle, FileText, DollarSign, Shield, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from './AnimatedSection';

export interface FAQ {
  id: string;
  specialty_slug: string;
  category: string;
  question: string;
  answer: string;
  short_answer?: string;
  priority: number;
  search_keywords?: string[];
}

interface FAQSectionProps {
  faqs: FAQ[];
  specialtyName: string;
}

const categoryConfig = {
  'general': { label: 'General', icon: HelpCircle, color: 'blue' },
  'billing-basics': { label: 'Billing Basics', icon: FileText, color: 'green' },
  'coding': { label: 'Coding & Documentation', icon: FileText, color: 'purple' },
  'insurance': { label: 'Insurance & Claims', icon: DollarSign, color: 'orange' },
  'compliance': { label: 'Compliance & Regulations', icon: Shield, color: 'red' },
  'denials': { label: 'Denials & Appeals', icon: AlertCircle, color: 'yellow' },
  'technology': { label: 'Technology & Systems', icon: CheckCircle, color: 'teal' }
};

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, specialtyName }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(faqs.map(faq => faq.category));
    return Array.from(uniqueCategories).sort();
  }, [faqs]);

  const filteredFAQs = useMemo(() => {
    let filtered = [...faqs];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => {
        const questionMatch = faq.question.toLowerCase().includes(query);
        const answerMatch = faq.answer.toLowerCase().includes(query);
        const keywordMatch = faq.search_keywords?.some(keyword =>
          keyword.toLowerCase().includes(query)
        );
        return questionMatch || answerMatch || keywordMatch;
      });
    }

    return filtered.sort((a, b) => a.priority - b.priority);
  }, [faqs, searchQuery, selectedCategory]);

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setExpandedId(null);
  };

  const getCategoryColor = (category: string) => {
    const config = categoryConfig[category as keyof typeof categoryConfig];
    return config?.color || 'blue';
  };

  const getCategoryIcon = (category: string) => {
    const config = categoryConfig[category as keyof typeof categoryConfig];
    return config?.icon || HelpCircle;
  };

  const getCategoryLabel = (category: string) => {
    const config = categoryConfig[category as keyof typeof categoryConfig];
    return config?.label || category;
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();
  };

  const formatAnswer = (text: string): string => {
    if (!text) return '';

    console.log('Original text:', text.substring(0, 100));
    let formatted = text;

    // First, handle numbered list items (1), (2), (3), etc. - process BEFORE splitting sentences
    formatted = formatted.replace(/\((\d+)\)\s+([^,]+?)(?:,|(?=\s+\(\d+\)|$))/g, (match, num, content) => {
      return `<div class="flex items-start mb-3"><span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-3 flex-shrink-0 mt-0.5">${num}</span><p class="flex-1 text-gray-700 leading-relaxed">${content.trim()}</p></div>`;
    });

    // Handle "and (X)" pattern at the end of lists
    formatted = formatted.replace(/,?\s+and\s+<div class="flex items-start/g, ', and <div class="flex items-start');

    // Split remaining text into paragraphs (sentences that end with period followed by space and capital letter)
    formatted = formatted.replace(/\.\s+(?=[A-Z])/g, '.|SPLIT|');
    const parts = formatted.split('|SPLIT|');

    formatted = parts.map(part => {
      part = part.trim();
      if (!part) return '';

      // Skip if already formatted (contains HTML)
      if (part.includes('<div class="flex')) {
        return part;
      }

      // Check if this is a header (starts with all caps)
      if (/^[A-Z][A-Z\s]{3,}(?:\s*[-:])/.test(part)) {
        const headerMatch = part.match(/^([A-Z][A-Z\s]+?)(?:\s*[-:])(.*)$/);
        if (headerMatch) {
          return `<h4 class="text-lg font-bold text-gray-900 mt-6 mb-3 border-b-2 border-blue-200 pb-2">${headerMatch[1].trim()}</h4><p class="mb-3 text-gray-700 leading-relaxed">${headerMatch[2].trim()}</p>`;
        }
      }

      // Regular paragraph
      return `<p class="mb-3 text-gray-700 leading-relaxed">${part}</p>`;
    }).join('');

    // Post-processing for inline formatting

    // Highlight important keywords
    formatted = formatted.replace(/\b(IMPORTANT|NOTE|CRITICAL|WARNING|REQUIRED|MANDATORY|ESSENTIAL):/gi, '<span class="font-bold text-yellow-800 bg-yellow-100 px-1.5 py-0.5 rounded">$1:</span>');

    // Technical terms - bold and colored
    formatted = formatted.replace(/\b(EHR|EMR|EDI|ERA|EFT|HIPAA|CPT|ICD-10|ICD-9|NCCI|NPI|EOB|SOAP|E\/M|MIPS|ASC|CMS|RVU|RBRVS|MAC|LCD|NCD)\b/g, '<span class="font-semibold text-blue-800">$1</span>');

    // Dollar amounts
    formatted = formatted.replace(/\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/g, '<span class="font-semibold text-green-700">$$$1</span>');

    // Percentages
    formatted = formatted.replace(/(\d+(?:\.\d+)?%)/g, '<span class="font-semibold text-blue-700">$1</span>');

    // Time periods
    formatted = formatted.replace(/(\d+-\d+\s*(?:day|week|month|year)s?)/gi, '<span class="font-semibold text-indigo-700">$1</span>');

    // Parenthetical explanations (longer ones) - make italic and lighter
    formatted = formatted.replace(/\(([^)]{40,}?)\)/g, '<span class="text-gray-600 italic text-sm">($1)</span>');

    console.log('Formatted HTML:', formatted.substring(0, 200));
    return `<div class="space-y-1">${formatted}</div>`;
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': stripHtml(faq.answer)
      }
    }))
  };

  return (
    <AnimatedSection animation="slideUp" className="mb-24">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions About {specialtyName} Billing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Expert answers to common questions about {specialtyName.toLowerCase()} medical billing,
            coding, insurance requirements, and revenue cycle management.
          </motion.p>
        </div>

        <div className="mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 focus:border-blue-400 dark:focus:border-blue-600 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              All Questions ({faqs.length})
            </button>
            {categories.map(category => {
              const count = faqs.filter(faq => faq.category === category).length;
              const color = getCategoryColor(category);
              const Icon = getCategoryIcon(category);

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category
                      ? `bg-${color}-600 text-white shadow-lg`
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700'
                  }`}
                  style={selectedCategory === category ? {
                    backgroundColor: `var(--color-${color}-600, #2563eb)`,
                    color: 'white'
                  } : {}}
                >
                  <Icon className="w-4 h-4" />
                  {getCategoryLabel(category)} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {filteredFAQs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">No FAQs Found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or selecting a different category.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isExpanded = expandedId === faq.id;
              const color = getCategoryColor(faq.category);

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-expanded={isExpanded}
                  >
                    <span className="flex-1 pr-4">
                      <span className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `var(--color-${color}-100, #dbeafe)`,
                            color: `var(--color-${color}-700, #1e40af)`
                          }}
                        >
                          {getCategoryLabel(faq.category)}
                        </span>
                      </span>
                      <span className="block text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
                        {faq.question}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1 inline-block"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                          <div
                            className="text-gray-700 dark:text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: formatAnswer(faq.answer) }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 text-center border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Our {specialtyName.toLowerCase()} billing experts are ready to answer your specific questions
            and provide personalized guidance for your practice.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
          >
            Contact Our Specialists
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default FAQSection;
