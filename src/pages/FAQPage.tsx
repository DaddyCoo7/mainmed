import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  DollarSign,
  Shield,
  AlertCircle,
  CheckCircle,
  Code,
  Clock,
  Users,
  Stethoscope
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import FAQStructuredData from '../components/FAQStructuredData';
import { supabase } from '../lib/supabase';

interface FAQ {
  id: string;
  specialty_slug: string;
  category: string;
  question: string;
  answer: string;
  short_answer?: string;
  priority: number;
  search_keywords?: string[];
}

const categoryConfig = {
  'general': { label: 'General Billing', icon: HelpCircle, color: 'blue', description: 'Common medical billing questions' },
  'cpt-coding': { label: 'CPT Coding', icon: Code, color: 'purple', description: 'CPT codes and procedure coding' },
  'modifiers': { label: 'Modifiers', icon: FileText, color: 'green', description: 'CPT modifier usage and requirements' },
  'denials': { label: 'Denials & Appeals', icon: AlertCircle, color: 'red', description: 'Claim denials and appeal process' },
  'em-coding': { label: 'E/M Coding', icon: Stethoscope, color: 'teal', description: 'Evaluation & Management coding' },
  'time-based-codes': { label: 'Time-Based Codes', icon: Clock, color: 'orange', description: 'Timed procedure codes and 8-minute rule' },
  'surgical-coding': { label: 'Surgical Coding', icon: FileText, color: 'indigo', description: 'Surgical procedures and global periods' },
  'radiology': { label: 'Radiology & Diagnostic', icon: FileText, color: 'cyan', description: 'Radiology and diagnostic imaging' },
  'pt-chiro': { label: 'PT & Chiropractic', icon: Users, color: 'lime', description: 'Physical therapy and chiropractic billing' },
  'mental-health': { label: 'Mental Health', icon: HelpCircle, color: 'pink', description: 'Mental health and psychotherapy' },
  'telehealth': { label: 'Telehealth', icon: MessageCircle, color: 'violet', description: 'Telemedicine and virtual visits' },
  'insurance': { label: 'Insurance & Claims', icon: DollarSign, color: 'yellow', description: 'Insurance verification and claims' },
  'authorization': { label: 'Prior Authorization', icon: Shield, color: 'rose', description: 'Authorization requirements and process' },
  'coding': { label: 'Medical Coding', icon: Code, color: 'emerald', description: 'Medical coding and documentation' },
  'patient-billing': { label: 'Patient Billing', icon: DollarSign, color: 'amber', description: 'Patient statements and payments' },
  'credentialing': { label: 'Credentialing', icon: CheckCircle, color: 'sky', description: 'Provider credentialing and enrollment' },
  'ar-followup': { label: 'A/R Follow-up', icon: DollarSign, color: 'slate', description: 'Accounts receivable management' },
  'compliance': { label: 'Compliance', icon: Shield, color: 'red', description: 'HIPAA and regulatory compliance' }
};

const FAQPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const formatAnswer = (text: string): string => {
    if (!text) return '';

    let formatted = text;

    // Handle numbered list items (1), (2), (3), etc.
    formatted = formatted.replace(/\((\d+)\)\s+([^,]+?)(?:,|(?=\s+\(\d+\)|$))/g, (match, num, content) => {
      return `<div class="flex items-start mb-3"><span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm mr-3 flex-shrink-0 mt-0.5">${num}</span><p class="flex-1 text-gray-700 leading-relaxed">${content.trim()}</p></div>`;
    });

    // Split remaining text into paragraphs
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
    formatted = formatted.replace(/\b(IMPORTANT|NOTE|CRITICAL|WARNING|REQUIRED|MANDATORY|ESSENTIAL):/gi, '<span class="font-bold text-yellow-800 bg-yellow-100 px-1.5 py-0.5 rounded">$1:</span>');
    formatted = formatted.replace(/\b(EHR|EMR|EDI|ERA|EFT|HIPAA|CPT|ICD-10|ICD-9|NCCI|NPI|EOB|SOAP|E\/M|MIPS|ASC|CMS|RVU|RBRVS|MAC|LCD|NCD)\b/g, '<span class="font-semibold text-blue-800">$1</span>');
    formatted = formatted.replace(/\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/g, '<span class="font-semibold text-green-700">$$$1</span>');
    formatted = formatted.replace(/(\d+(?:\.\d+)?%)/g, '<span class="font-semibold text-blue-700">$1</span>');
    formatted = formatted.replace(/(\d+-\d+\s*(?:day|week|month|year)s?)/gi, '<span class="font-semibold text-indigo-700">$1</span>');
    formatted = formatted.replace(/\(([^)]{40,}?)\)/g, '<span class="text-gray-600 italic text-sm">($1)</span>');

    return `<div class="space-y-1">${formatted}</div>`;
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('specialty_faqs')
          .select('*')
          .eq('specialty_slug', 'general')
          .eq('is_published', true)
          .order('priority', { ascending: true });

        if (error) throw error;
        setFaqs(data || []);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const categories = Array.from(new Set(faqs.map(faq => faq.category))).sort();

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;

    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.search_keywords?.some(keyword => keyword.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryConfig = (category: string) => {
    return categoryConfig[category as keyof typeof categoryConfig] || {
      label: category,
      icon: HelpCircle,
      color: 'blue',
      description: ''
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <SEOHead
        title="Medical Billing FAQ | 100+ Answers"
        description="Get answers to 100+ medical billing questions. Comprehensive FAQ covering CPT codes, modifiers, denials, E/M coding, claims, insurance, and more. Expert answers from certified Medtransic billing specialists."
        canonical="https://medtransic.com/faq"
        keywords="medical billing FAQ, billing questions, CPT codes FAQ, modifier questions, claim denials, billing help, E/M coding questions, healthcare billing answers"
        ogType="website"
      />

      <FAQStructuredData faqs={filteredFAQs} />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-600 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Medical Billing FAQ
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Find answers to common medical billing questions. From CPT codes and modifiers to denials and insurance claims - we've got you covered.
            </motion.p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-900 focus:border-transparent outline-none text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Categories ({faqs.length})
              </button>
              {categories.map(category => {
                const config = getCategoryConfig(category);
                const count = faqs.filter(f => f.category === category).length;
                const Icon = config.icon;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {config.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-center text-lg text-gray-600 dark:text-gray-400">
            {loading ? 'Loading...' : `Showing ${filteredFAQs.length} question${filteredFAQs.length !== 1 ? 's' : ''}`}
            {selectedCategory !== 'all' && ` in ${getCategoryConfig(selectedCategory).label}`}
          </p>
        </div>

        {/* FAQ List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading FAQs...</p>
          </div>
        ) : filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-400">No FAQs found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const config = getCategoryConfig(faq.category);
              const Icon = config.icon;

              return (
                <AnimatedSection
                  key={faq.id}
                  animation="slideUp"
                  delay={index * 0.05}
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
                    whileHover={{ y: -2 }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="flex-1 flex flex-col">
                        <span className="flex items-center gap-3 mb-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-${config.color}-100 dark:bg-${config.color}-900/30 text-${config.color}-700 dark:text-${config.color}-400`}>
                            <Icon className="w-3.5 h-3.5" />
                            {config.label}
                          </span>
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                          {faq.question}
                        </h3>
                      </span>
                      <span className="flex-shrink-0">
                        {expandedId === faq.id ? (
                          <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        )}
                      </span>
                    </button>

                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 pt-2 border-t border-gray-100 dark:border-gray-700"
                      >
                        <div
                          className="text-gray-700 dark:text-gray-300 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatAnswer(faq.answer) }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        )}

        {/* Contact CTA Section */}
        <AnimatedSection animation="slideUp" className="mt-16">
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-12 text-center shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our billing experts are here to help. Get personalized answers to your specific billing challenges.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Free Consultation
                </Link>
                <a
                  href="tel:+1-888-777-0860"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: (888) 777-0860
                </a>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Additional Resources */}
        <AnimatedSection animation="slideUp" className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/resources/billing-glossary"
                className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
              >
                <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Billing Glossary</h3>
                <p className="text-gray-600 dark:text-gray-400">Comprehensive definitions of 70+ billing terms</p>
              </Link>

              <Link
                to="/services"
                className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
              >
                <DollarSign className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Services</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore our comprehensive billing solutions</p>
              </Link>

              <Link
                to="/specialties"
                className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
              >
                <Stethoscope className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Specialties</h3>
                <p className="text-gray-600 dark:text-gray-400">Specialty-specific billing expertise</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FAQPage;
