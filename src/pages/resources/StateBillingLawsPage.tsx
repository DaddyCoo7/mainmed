import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Scale, Clock, Shield } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';

interface StateBillingLaw {
  id: string;
  state_code: string;
  state_name: string;
  statute_of_limitations_years: number | null;
  timely_filing_limit_days: number | null;
  balance_billing_allowed: boolean;
  surprise_billing_protection: boolean;
  legal_summary: string | null;
  key_regulations: string[];
  last_updated: string;
}

export default function StateBillingLawsPage() {
  const [states, setStates] = useState<StateBillingLaw[]>([]);
  const [filteredStates, setFilteredStates] = useState<StateBillingLaw[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<StateBillingLaw | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStateLaws();
  }, []);

  useEffect(() => {
    filterStates();
  }, [searchTerm, states]);

  const fetchStateLaws = async () => {
    try {
      const { data, error } = await supabase
        .from('state_billing_laws')
        .select('*')
        .order('state_name');

      if (error) throw error;
      setStates(data || []);
    } catch (error) {
      console.error('Error fetching state billing laws:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterStates = () => {
    if (!searchTerm) {
      setFilteredStates(states);
      return;
    }

    const search = searchTerm.toLowerCase();
    const filtered = states.filter(
      state =>
        state.state_name.toLowerCase().includes(search) ||
        state.state_code.toLowerCase().includes(search)
    );
    setFilteredStates(filtered);
  };

  return (
    <>
      <Helmet>
        <title>State Medical Billing Laws | Statute of Limitations by State 2025</title>
        <meta
          name="description"
          content="Complete guide to medical billing laws by state including statute of limitations on medical debt, timely filing limits, and balance billing regulations. Texas, California, Illinois & all 50 states."
        />
        <meta name="keywords" content="medical billing laws, statute of limitations medical bills, texas medical debt statute of limitations, california medical billing time limits, timely filing limits by state" />
        <link rel="canonical" href="https://medtransic.com/resources/state-billing-laws" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Scale className="w-4 h-4" />
                Legal Reference Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                State Medical Billing Laws
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive guide to statute of limitations, timely filing requirements, and medical
                billing regulations for all 50 states.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by state name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                <Clock className="w-8 h-8 mb-3" />
                <h3 className="text-2xl font-bold mb-2">Statute of Limitations</h3>
                <p className="text-blue-100 text-sm">
                  Time limits for collecting medical debt vary by state from 3-10 years
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
                <Shield className="w-8 h-8 mb-3" />
                <h3 className="text-2xl font-bold mb-2">Timely Filing</h3>
                <p className="text-green-100 text-sm">
                  State Medicaid filing deadlines range from 90-365 days
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                <Scale className="w-8 h-8 mb-3" />
                <h3 className="text-2xl font-bold mb-2">Balance Billing</h3>
                <p className="text-purple-100 text-sm">
                  State surprise billing protections and balance billing regulations
                </p>
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading state billing laws...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStates.map((state, index) => (
                <AnimatedSection key={state.id} animation="fade-up" delay={0.05 * (index % 12)}>
                  <div
                    onClick={() => setSelectedState(state)}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {state.state_code}
                      </h3>
                      <span className="text-sm text-gray-500">{state.state_name}</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Statute of Limitations</span>
                        <span className="font-bold text-indigo-600">
                          {state.statute_of_limitations_years
                            ? `${state.statute_of_limitations_years} years`
                            : 'Varies'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Timely Filing</span>
                        <span className="font-bold text-green-600">
                          {state.timely_filing_limit_days
                            ? `${state.timely_filing_limit_days} days`
                            : 'Varies'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {state.surprise_billing_protection && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            Surprise Billing Protection
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 text-indigo-600 text-sm font-semibold group-hover:text-indigo-700">
                      Click for details →
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {selectedState && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedState(null)}
            >
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">{selectedState.state_name}</h2>
                  <p className="text-indigo-100">Medical Billing Laws & Regulations</p>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="text-sm text-gray-600 mb-1">Statute of Limitations</div>
                      <div className="text-3xl font-bold text-blue-600">
                        {selectedState.statute_of_limitations_years
                          ? `${selectedState.statute_of_limitations_years} Years`
                          : 'Varies'}
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <div className="text-sm text-gray-600 mb-1">Timely Filing Limit</div>
                      <div className="text-3xl font-bold text-green-600">
                        {selectedState.timely_filing_limit_days
                          ? `${selectedState.timely_filing_limit_days} Days`
                          : 'Varies'}
                      </div>
                    </div>
                  </div>

                  {selectedState.legal_summary && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Summary</h3>
                      <div
                        className="prose max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: selectedState.legal_summary }}
                      />
                    </div>
                  )}

                  {selectedState.key_regulations.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Regulations</h3>
                      <ul className="space-y-2">
                        {selectedState.key_regulations.map((reg, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-indigo-600 mt-1">•</span>
                            <span className="text-gray-700">{reg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      Last updated: {new Date(selectedState.last_updated).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => setSelectedState(null)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <AnimatedSection animation="fade-up" delay={0.6}>
            <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Need Help with State-Specific Billing?</h2>
              <p className="text-indigo-100 mb-6 text-lg">
                Our team stays current with medical billing regulations in all 50 states. We ensure your
                practice remains compliant while maximizing collections.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get State-Specific Guidance
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}