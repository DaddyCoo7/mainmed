import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Search, X, Building2, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import OrganizationSchema from '../components/OrganizationSchema';
import { supabase } from '../lib/supabase';

interface StateData {
  state_name: string;
  slug: string;
}

interface CityData {
  city_name: string;
  city_slug: string;
  state_slug: string;
}

const LocationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [states, setStates] = useState<StateData[]>([]);
  const [cities, setCities] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const [statesResult, citiesResult] = await Promise.all([
          supabase.from('state_pages').select('state_name, slug').order('state_name'),
          supabase.from('city_pages').select('city_name, city_slug, state_slug').order('city_name')
        ]);

        if (statesResult.data) setStates(statesResult.data);
        if (citiesResult.data) setCities(citiesResult.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const filteredStates = states.filter(state =>
    state.state_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCities = cities.filter(city =>
    city.city_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Medical Billing By Location | 50 States"
        description="Find expert medical billing services in your state or city. Medtransic provides comprehensive RCM solutions across all 50 states with local expertise and national support."
        keywords="medical billing by state, medical billing by city, local medical billing services, state medical billing, city medical billing"
        canonicalUrl="https://medtransic.com/locations"
      />
      <OrganizationSchema />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Medical Billing Services <span className="text-blue-600">Nationwide</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Expert medical billing and RCM solutions in your state and city. Local expertise backed by national infrastructure.
              </p>

              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for a state or city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">50 States</h3>
                  <p className="text-gray-600">Complete nationwide coverage</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Major Cities</h3>
                  <p className="text-gray-600">Focused urban market expertise</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Local Support</h3>
                  <p className="text-gray-600">Regional specialists available</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <AnimatedSection>
              <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Medical Billing by State
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredStates.map((state, index) => (
                      <motion.div
                        key={state.state_slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.02 }}
                      >
                        <Link
                          to={`/medical-billing-services/${state.slug}`}
                          className="block p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                            <span className="font-medium text-gray-900 group-hover:text-blue-600">
                              {state.state_name}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  {filteredStates.length === 0 && (
                    <p className="text-center text-gray-500 py-12">
                      No states found matching "{searchQuery}"
                    </p>
                  )}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Featured Cities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCities.map((city, index) => (
                      <motion.div
                        key={`${city.state_slug}-${city.city_slug}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                      >
                        <Link
                          to={`/medical-billing-services/${city.state_slug}/${city.city_slug}`}
                          className="block p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group bg-white"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">
                              {city.city_name}
                            </h3>
                            <Building2 className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  {filteredCities.length === 0 && (
                    <p className="text-center text-gray-500 py-12">
                      No cities found matching "{searchQuery}"
                    </p>
                  )}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection>
              <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">
                    Why Choose Local Medical Billing Expertise?
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                      <h3 className="font-semibold mb-2">State-Specific Knowledge</h3>
                      <p className="text-blue-100 text-sm">
                        Understanding of regional payer requirements and regulations
                      </p>
                    </div>
                    <div>
                      <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                      <h3 className="font-semibold mb-2">Local Market Insight</h3>
                      <p className="text-blue-100 text-sm">
                        Expertise in city-specific healthcare landscapes
                      </p>
                    </div>
                    <div>
                      <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                      <h3 className="font-semibold mb-2">Regional Performance</h3>
                      <p className="text-blue-100 text-sm">
                        Optimized billing strategies for your area
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started in Your Area
                  </Link>
                </div>
              </section>
            </AnimatedSection>
          </>
        )}
      </div>
    </>
  );
};

export default LocationsPage;
