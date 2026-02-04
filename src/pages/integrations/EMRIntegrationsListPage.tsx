import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Zap } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';
import { usePrerenderReady } from '../../hooks/usePrerenderReady';

interface EMRIntegration {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  description: string;
  integration_type: string;
  popularity_rank: number;
  supported_specialties: string[];
}

export default function EMRIntegrationsListPage() {
  const [integrations, setIntegrations] = useState<EMRIntegration[]>([]);
  const [filteredIntegrations, setFilteredIntegrations] = useState<EMRIntegration[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIntegrations();
  }, []);

  useEffect(() => {
    filterIntegrations();
  }, [searchTerm, integrations]);

  usePrerenderReady(!loading && integrations.length > 0);

  const fetchIntegrations = async () => {
    try {
      const { data, error } = await supabase
        .from('emr_integrations')
        .select('*')
        .order('popularity_rank');

      if (error) throw error;
      setIntegrations(data || []);
    } catch (error) {
      console.error('Error fetching EMR integrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterIntegrations = () => {
    if (!searchTerm) {
      setFilteredIntegrations(integrations);
      return;
    }

    const search = searchTerm.toLowerCase();
    const filtered = integrations.filter(
      int =>
        int.name.toLowerCase().includes(search) ||
        int.description.toLowerCase().includes(search) ||
        int.supported_specialties.some(s => s.toLowerCase().includes(search))
    );
    setFilteredIntegrations(filtered);
  };

  return (
    <>
      <Helmet>
        <title>EMR/EHR Integrations | eClinicalWorks, Office Ally, Kareo & More</title>
        <meta
          name="description"
          content="Professional medical billing integration with all major EMR/EHR systems including eClinicalWorks (ECW), Office Ally, Kareo, Athena, Epic, NextGen, and Allscripts. Seamless API and HL7 connections."
        />
        <meta name="keywords" content="emr integrations, ehr integrations, eclinicalworks, office ally, kareo, athena emr, epic emr, nextgen, allscripts, medical billing integration" />
        <link rel="canonical" href="https://medtransic.com/resources/emr-integrations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                Seamless Integrations
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                EMR/EHR System Integrations
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We integrate with all major electronic health record systems for seamless medical billing.
                API and HL7 connections available for automated workflows.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search EMR/EHR systems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading EMR integrations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map((integration, index) => (
                <AnimatedSection key={integration.id} animation="fade-up" delay={0.1 * (index % 6)}>
                  <Link
                    to={`/integrations/${integration.slug}`}
                    className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {integration.name}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {integration.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          {integration.integration_type}
                        </span>
                        <span className="text-gray-500">
                          {integration.supported_specialties.length} specialties
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {filteredIntegrations.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-600">No EMR integrations match your search.</p>
            </div>
          )}

          <AnimatedSection animation="fade-up" delay={0.6}>
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Don't See Your EMR System?</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  We can integrate with virtually any EMR/EHR system using API, HL7, or direct data feed
                  connections. Contact us to discuss custom integration options.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Request Custom Integration
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}