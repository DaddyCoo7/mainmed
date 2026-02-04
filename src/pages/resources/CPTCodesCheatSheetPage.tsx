import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Download, Filter, Star, BookOpen } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';
import { usePrerenderReady } from '../../hooks/usePrerenderReady';

interface CPTCode {
  id: string;
  code: string;
  description: string;
  category: string;
  specialty: string | null;
  year: number;
  relative_value: number | null;
  commonly_used: boolean;
  notes: string | null;
}

export default function CPTCodesCheatSheetPage() {
  const [codes, setCodes] = useState<CPTCode[]>([]);
  const [filteredCodes, setFilteredCodes] = useState<CPTCode[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [commonOnly, setCommonOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCPTCodes();
  }, []);

  useEffect(() => {
    filterCodes();
  }, [searchTerm, selectedCategory, selectedSpecialty, commonOnly, codes]);

  usePrerenderReady(!loading && codes.length > 0);

  const fetchCPTCodes = async () => {
    try {
      const { data, error } = await supabase
        .from('cpt_codes')
        .select('*')
        .order('code');

      if (error) throw error;
      setCodes(data || []);
    } catch (error) {
      console.error('Error fetching CPT codes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCodes = () => {
    let filtered = [...codes];

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        code =>
          code.code.toLowerCase().includes(search) ||
          code.description.toLowerCase().includes(search) ||
          code.notes?.toLowerCase().includes(search)
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(code => code.category === selectedCategory);
    }

    if (selectedSpecialty !== 'all') {
      filtered = filtered.filter(code => code.specialty === selectedSpecialty);
    }

    if (commonOnly) {
      filtered = filtered.filter(code => code.commonly_used);
    }

    setFilteredCodes(filtered);
  };

  const categories = Array.from(new Set(codes.map(c => c.category))).sort();
  const specialties = Array.from(new Set(codes.map(c => c.specialty).filter(Boolean))).sort();

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>CPT Codes Cheat Sheet 2025 | Complete Medical Billing Code Reference</title>
        <meta
          name="description"
          content="Free CPT codes cheat sheet 2025 with descriptions, RVU values, and specialty-specific codes. Searchable database of E&M codes, surgical codes, and procedure codes."
        />
        <meta name="keywords" content="cpt codes, cpt code cheat sheet, medical billing codes, evaluation and management codes, cpt 2025, cardiology cpt codes, pediatric cpt codes" />
        <link rel="canonical" href="https://medtransic.com/resources/cpt-codes-cheat-sheet" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <BookOpen className="w-4 h-4" />
                Updated for 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                CPT Codes Cheat Sheet 2025
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive, searchable reference guide for Current Procedural Terminology codes.
                Find E&M codes, surgical codes, and specialty-specific billing codes instantly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search codes or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Specialties</option>
                  {specialties.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>

                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={commonOnly}
                    onChange={(e) => setCommonOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Show commonly used codes only
                  </span>
                </label>
                <span className="text-sm text-gray-500">
                  {filteredCodes.length} codes found
                </span>
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading CPT codes...</p>
            </div>
          ) : (
            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Code
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Specialty
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          RVU
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredCodes.map((code, index) => (
                        <tr key={code.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-blue-600">{code.code}</span>
                              {code.commonly_used && (
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{code.description}</div>
                            {code.notes && (
                              <div className="text-xs text-gray-500 mt-1">{code.notes}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">{code.category}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">{code.specialty || '-'}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-gray-700">
                              {code.relative_value ? code.relative_value.toFixed(2) : '-'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredCodes.length === 0 && (
                  <div className="text-center py-12">
                    <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No CPT codes match your search criteria.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade-up" delay={0.3}>
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Help with Medical Billing?</h2>
              <p className="text-blue-100 mb-6">
                Our certified medical billing specialists can help you maximize reimbursement and reduce denials.
                We handle CPT coding, claim submission, and denial management for all specialties.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}