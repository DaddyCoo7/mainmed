import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Info } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';

interface BillingModifier {
  id: string;
  modifier: string;
  description: string;
  usage_guidelines: string | null;
  specialty_specific: string | null;
  examples: string | null;
}

export default function MedicalBillingModifiersGuidePage() {
  const [modifiers, setModifiers] = useState<BillingModifier[]>([]);
  const [filteredModifiers, setFilteredModifiers] = useState<BillingModifier[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModifiers();
  }, []);

  useEffect(() => {
    filterModifiers();
  }, [searchTerm, modifiers]);

  const fetchModifiers = async () => {
    try {
      const { data, error } = await supabase
        .from('billing_modifiers')
        .select('*')
        .order('modifier');

      if (error) throw error;
      setModifiers(data || []);
    } catch (error) {
      console.error('Error fetching modifiers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterModifiers = () => {
    if (!searchTerm) {
      setFilteredModifiers(modifiers);
      return;
    }

    const search = searchTerm.toLowerCase();
    const filtered = modifiers.filter(
      mod =>
        mod.modifier.toLowerCase().includes(search) ||
        mod.description.toLowerCase().includes(search) ||
        mod.usage_guidelines?.toLowerCase().includes(search)
    );
    setFilteredModifiers(filtered);
  };

  return (
    <>
      <Helmet>
        <title>Medical Billing Modifiers Guide | GA, GW, GV Modifier Comparison 2025</title>
        <meta
          name="description"
          content="Complete guide to medical billing modifiers including GA modifier, GW modifier, GV modifier, and 59 modifier. Learn when to use each modifier with examples and comparisons."
        />
        <meta name="keywords" content="ga modifier, gw modifier, gv modifier, modifier gw and gv, gv and gw modifier difference, medical billing modifiers, modifier 59, modifier 25" />
        <link rel="canonical" href="https://medtransic.com/resources/medical-billing-modifiers-guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Info className="w-4 h-4" />
                Complete Reference Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Medical Billing Modifiers Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding when and how to use medical billing modifiers is crucial for accurate
                reimbursement. Learn about GA, GW, GV, and other essential modifiers.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search modifiers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">GA vs GW vs GV</div>
                <p className="text-blue-100">
                  The most commonly confused modifiers explained with clear examples
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Modifier 25</div>
                <p className="text-green-100">
                  E&M services on the same day as a procedure
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">Modifier 59</div>
                <p className="text-purple-100">
                  Distinct procedural services
                </p>
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading modifiers...</p>
            </div>
          ) : (
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="space-y-6">
                {filteredModifiers.map((modifier) => (
                  <div key={modifier.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                          <span className="text-3xl font-bold text-white">{modifier.modifier}</span>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-white mb-1">
                            Modifier {modifier.modifier}
                          </h2>
                          <p className="text-orange-100">{modifier.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-6">
                      {modifier.usage_guidelines && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-orange-600">📋</span>
                            When to Use
                          </h3>
                          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                            {modifier.usage_guidelines}
                          </p>
                        </div>
                      )}

                      {modifier.specialty_specific && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-blue-600">🏥</span>
                            Specialty-Specific Information
                          </h3>
                          <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                            {modifier.specialty_specific}
                          </p>
                        </div>
                      )}

                      {modifier.examples && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="text-green-600">💡</span>
                            Examples
                          </h3>
                          <p className="text-gray-700 bg-green-50 p-4 rounded-lg">
                            {modifier.examples}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {filteredModifiers.length === 0 && (
                  <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                    <p className="text-gray-600">No modifiers match your search.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                GW vs GV Modifier: What's the Difference?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">GW Modifier</h3>
                  <p className="text-gray-700 mb-4">
                    Used when a service is <strong>not related</strong> to the hospice patient's terminal
                    condition.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> A hospice patient with terminal cancer receives treatment
                      for a broken arm. The orthopedic services would be billed with GW modifier.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-green-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-4">GV Modifier</h3>
                  <p className="text-gray-700 mb-4">
                    Used by an attending physician who is <strong>not employed</strong> by the hospice but
                    continues to care for the patient.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> Patient's long-time primary care physician continues care
                      while patient is in hospice. PCP bills with GV modifier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.5}>
            <div className="mt-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Expert Medical Billing with Proper Modifier Usage</h2>
              <p className="text-orange-100 mb-6">
                Incorrect modifier usage is a leading cause of claim denials. Our certified billing
                specialists ensure proper modifier application for maximum reimbursement.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Get Expert Billing Support
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}