import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Download, Star } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';
import { usePrerenderReady } from '../../hooks/usePrerenderReady';

interface DentalCode {
  id: string;
  code: string;
  description: string;
  category: string;
  commonly_used: boolean;
  ada_category: string | null;
  notes: string | null;
}

export default function DentalCodesCheatSheetPage() {
  const [codes, setCodes] = useState<DentalCode[]>([]);
  const [filteredCodes, setFilteredCodes] = useState<DentalCode[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [commonOnly, setCommonOnly] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDentalCodes();
  }, []);

  useEffect(() => {
    filterCodes();
  }, [searchTerm, selectedCategory, commonOnly, codes]);

  usePrerenderReady(!loading && codes.length > 0);

  const fetchDentalCodes = async () => {
    try {
      const { data, error } = await supabase
        .from('dental_codes')
        .select('*')
        .order('code');

      if (error) throw error;
      setCodes(data || []);
    } catch (error) {
      console.error('Error fetching dental codes:', error);
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

    if (commonOnly) {
      filtered = filtered.filter(code => code.commonly_used);
    }

    setFilteredCodes(filtered);
  };

  const categories = Array.from(new Set(codes.map(c => c.category))).sort();

  return (
    <>
      <Helmet>
        <title>Dental Codes Cheat Sheet 2025 | CDT Codes & ADA Procedure Codes</title>
        <meta
          name="description"
          content="Free dental codes cheat sheet 2025 with CDT codes, ADA categories, and commonly used dental procedure codes. Includes D0140, D9310, and all diagnostic, preventive, and restorative codes."
        />
        <meta name="keywords" content="dental codes, dental codes cheat sheet, cdt codes, ada dental codes, d0140, d9310, dental billing codes, dental procedure codes" />
        <link rel="canonical" href="https://medtransic.com/resources/dental-codes-cheat-sheet" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                CDT 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Dental Codes Cheat Sheet 2025
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete reference guide for CDT (Current Dental Terminology) codes and ADA dental
                procedure codes. Searchable database of diagnostic, preventive, and restorative codes.
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
                    placeholder="Search dental codes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-600 mb-3">Most Common Codes</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-mono font-semibold">D0140</span> - Limited oral evaluation</div>
                  <div><span className="font-mono font-semibold">D0150</span> - Comprehensive oral exam</div>
                  <div><span className="font-mono font-semibold">D1110</span> - Adult prophylaxis</div>
                  <div><span className="font-mono font-semibold">D9310</span> - Consultation</div>
                </div>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-600 mb-3">Diagnostic Codes</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-mono font-semibold">D0120</span> - Periodic oral evaluation</div>
                  <div><span className="font-mono font-semibold">D0210</span> - Complete X-ray series</div>
                  <div><span className="font-mono font-semibold">D0220</span> - Periapical first image</div>
                  <div><span className="font-mono font-semibold">D0230</span> - Each additional image</div>
                </div>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-600 mb-3">Preventive Codes</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-mono font-semibold">D1110</span> - Adult prophylaxis</div>
                  <div><span className="font-mono font-semibold">D1120</span> - Child prophylaxis</div>
                  <div><span className="font-mono font-semibold">D1206</span> - Fluoride varnish</div>
                  <div><span className="font-mono font-semibold">D1351</span> - Sealant per tooth</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading dental codes...</p>
            </div>
          ) : (
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {filteredCodes.map((code) => (
                    <div key={code.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-lg font-bold text-purple-600">{code.code}</span>
                          {code.commonly_used && (
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <div className="flex gap-2">
                          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                            {code.category}
                          </span>
                          {code.ada_category && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                              {code.ada_category}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-gray-900 font-medium mb-2">{code.description}</div>
                      {code.notes && (
                        <div className="text-sm text-gray-600 bg-purple-50 p-3 rounded-lg mt-3">
                          <span className="font-semibold">Usage Notes:</span> {code.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {filteredCodes.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No dental codes match your search criteria.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Dental Billing Services</h2>
                  <p className="text-purple-100 mb-6">
                    Our specialized dental billing team handles CDT coding, dental insurance verification,
                    claim submission, and denial management for dental practices of all sizes.
                  </p>
                  <ul className="space-y-2 text-purple-100 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Expert CDT coding and documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Dental insurance verification & pre-authorization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Patient billing and payment posting</span>
                    </li>
                  </ul>
                  <a
                    href="/specialties/dental"
                    className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Learn More About Dental Billing
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Reference: ADA Categories</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>I.</strong> Diagnostic</div>
                    <div><strong>II.</strong> Preventive</div>
                    <div><strong>III.</strong> Restorative</div>
                    <div><strong>IV.</strong> Endodontics</div>
                    <div><strong>V.</strong> Periodontics</div>
                    <div><strong>VI.</strong> Prosthodontics (Removable)</div>
                    <div><strong>VII.</strong> Prosthodontics (Fixed)</div>
                    <div><strong>VIII.</strong> Oral & Maxillofacial Surgery</div>
                    <div><strong>IX.</strong> Orthodontics</div>
                    <div><strong>X.</strong> Adjunctive General Services</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}