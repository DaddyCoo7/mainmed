import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Download, Star, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';
import { usePrerenderReady } from '../../hooks/usePrerenderReady';

interface ICD10Code {
  id: string;
  code: string;
  description: string;
  category: string;
  commonly_used: boolean;
  clinical_notes: string | null;
}

export default function ICD10CodesReferencePage() {
  const [codes, setCodes] = useState<ICD10Code[]>([]);
  const [filteredCodes, setFilteredCodes] = useState<ICD10Code[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [commonOnly, setCommonOnly] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchICD10Codes();
  }, []);

  useEffect(() => {
    filterCodes();
  }, [searchTerm, selectedCategory, commonOnly, codes]);

  usePrerenderReady(!loading && codes.length > 0);

  const fetchICD10Codes = async () => {
    try {
      const { data, error } = await supabase
        .from('icd10_codes')
        .select('*')
        .order('code');

      if (error) throw error;
      setCodes(data || []);
    } catch (error) {
      console.error('Error fetching ICD-10 codes:', error);
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
          code.clinical_notes?.toLowerCase().includes(search)
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(code => code.category === selectedCategory);
    }

    if (commonOnly) {
      filtered = filtered.filter(code => code.commonly_used);
    }

    setFilteredCodes(filtered);
  };

  const categories = Array.from(new Set(codes.map(c => c.category))).sort();

  return (
    <>
      <Helmet>
        <title>ICD-10 Codes Reference Guide 2025 | Pre-Op Clearance & Medical Diagnosis Codes</title>
        <meta
          name="description"
          content="Complete ICD-10 code reference guide including pre-op clearance codes (Z01.818), surgical clearance, and commonly used diagnosis codes. Free searchable database updated for 2025."
        />
        <meta name="keywords" content="icd 10 codes, icd 10 pre op clearance, z01.818, pre operative clearance icd 10, icd 10 for pre op, preop clearance icd 10, surgery clearance icd 10" />
        <link rel="canonical" href="https://medtransic.com/resources/icd-10-codes-reference" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <AlertCircle className="w-4 h-4" />
                ICD-10-CM 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ICD-10 Codes Reference Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick reference for ICD-10 diagnosis codes including pre-operative clearance codes,
                surgical clearance, and commonly used diagnosis codes for medical billing.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search ICD-10 codes or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={commonOnly}
                    onChange={(e) => setCommonOnly(e.target.checked)}
                    className="w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-500"
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

          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Most Searched Pre-Op Codes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-mono font-bold text-blue-600 mb-1">Z01.818</div>
                  <div className="text-sm text-gray-700">Encounter for other preprocedural examination</div>
                  <div className="text-xs text-gray-500 mt-2">Most common pre-op clearance code</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-mono font-bold text-blue-600 mb-1">Z01.810</div>
                  <div className="text-sm text-gray-700">Encounter for preprocedural cardiovascular examination</div>
                  <div className="text-xs text-gray-500 mt-2">Cardiac pre-op clearance</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading ICD-10 codes...</p>
            </div>
          ) : (
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {filteredCodes.map((code) => (
                    <div key={code.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-lg font-bold text-green-600">{code.code}</span>
                          {code.commonly_used && (
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          )}
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {code.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-900 font-medium mb-2">{code.description}</div>
                      {code.clinical_notes && (
                        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mt-3">
                          <span className="font-semibold">Clinical Notes:</span> {code.clinical_notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {filteredCodes.length === 0 && (
                  <div className="text-center py-12">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No ICD-10 codes match your search criteria.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Pre-Op Clearance Codes</h3>
                <p className="text-gray-600 mb-4">
                  Pre-operative clearance codes (Z codes) are used when a patient visits for evaluation
                  before a scheduled surgery. The most commonly used code is Z01.818 for general pre-op
                  clearance.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Z01.818:</strong> General pre-op examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Z01.810:</strong> Cardiovascular pre-op clearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Z01.812:</strong> Pre-op laboratory examination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Z01.811:</strong> Respiratory pre-op examination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Professional Medical Coding Services</h3>
                <p className="text-green-100 mb-6">
                  Ensure accurate ICD-10 coding and maximize reimbursement with our certified medical
                  coding specialists. We handle diagnosis coding, CPT coding, and claim submission.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Request Free Analysis
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}