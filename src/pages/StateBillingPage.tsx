import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, TrendingUp, CheckCircle2, ArrowRight, DollarSign, Shield, Clock, Users, FileText, Building2, Mountain, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import LocationSchema from '../components/LocationSchema';

interface StatePageData {
  state_name: string;
  state_code: string;
  slug: string;
  hero_title: string;
  hero_description: string;
  major_cities: string[];
  key_benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  stats: {
    practices: string;
    states: string;
    collections: string;
    days: string;
  };
  meta_title: string;
  meta_description: string;
}

const iconMap: Record<string, typeof DollarSign> = {
  DollarSign,
  Shield,
  TrendingUp,
  Clock,
  Users,
  FileText,
  Building2,
  Mountain,
  Star,
  CheckCircle2,
};

export default function StateBillingPage() {
  const { state } = useParams<{ state: string }>();
  const [pageData, setPageData] = useState<StatePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStateData() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('state_pages')
          .select('*')
          .eq('slug', state)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          setError('State not found');
          return;
        }

        setPageData(data);
      } catch (err) {
        console.error('Error fetching state data:', err);
        setError('Failed to load state information');
      } finally {
        setLoading(false);
      }
    }

    if (state) {
      fetchStateData();
    }
  }, [state]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading state information...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">State Not Found</h1>
            <p className="text-gray-600 mb-6">The state you're looking for doesn't exist.</p>
            <Link to="/medical-billing" className="text-blue-600 hover:text-blue-700 font-semibold">
              Return to Medical Billing Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={pageData.meta_title}
        description={pageData.meta_description}
        canonical={`https://medtransic.com/medical-billing-services/${pageData.slug}`}
      />
      <LocationSchema
        locationName={pageData.state_name}
        locationType="state"
        description={pageData.meta_description}
        url={`https://medtransic.com/medical-billing-services/${pageData.slug}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-12 w-12 text-blue-200 mr-3" />
                <span className="text-2xl font-bold text-white">{pageData.state_name}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {pageData.hero_title.replace(' | Medtransic', '')}
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                {pageData.hero_description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all border-2 border-white/20"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <AnimatedSection className="py-12 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{pageData.stats.practices}</div>
                <div className="text-gray-600">Healthcare Practices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{pageData.stats.states}</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{pageData.stats.collections}%</div>
                <div className="text-gray-600">Collection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{pageData.stats.days}</div>
                <div className="text-gray-600">Avg. Days in A/R</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Benefits Section */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Medtransic in {pageData.state_name}?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-specific expertise that maximizes your revenue and reduces administrative burden
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pageData.key_benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon] || CheckCircle2;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Cities Served Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Serving Healthcare Providers Across {pageData.state_name}
              </h2>
              <p className="text-xl text-gray-600">
                We proudly serve medical practices in these cities and throughout the state
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {pageData.major_cities.map((city, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <MapPin className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Overview */}
        <AnimatedSection className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Comprehensive Medical Billing Services for {pageData.state_name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  From patient registration to final payment, we handle every aspect of your revenue cycle with expertise and precision.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">Claims Management</span>
                      <p className="text-gray-600">Expert submission and follow-up for maximum reimbursement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">Denial Management</span>
                      <p className="text-gray-600">Reduce denials by up to 40% with our proven strategies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">Patient Billing</span>
                      <p className="text-gray-600">Professional, patient-friendly billing communications</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-gray-900">Credentialing</span>
                      <p className="text-gray-600">Streamlined provider enrollment and maintenance</p>
                    </div>
                  </li>
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Maximize Your Revenue?</h3>
                <p className="text-blue-100 mb-8">
                  Get a free, no-obligation analysis of your practice's revenue cycle. Discover how much you could be earning with Medtransic.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 mr-3 text-blue-200" />
                    <span>Increase revenue by 25-30%</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-3 text-blue-200" />
                    <span>Reduce claim denials by 40%</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-blue-200" />
                    <span>Cut A/R days to under 25</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Request Free Analysis
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-600 to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join {pageData.state_name} Healthcare Providers Who Trust Medtransic
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us handle your medical billing so you can focus on patient care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/10 transition-all border-2 border-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                (123) 456-7890
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
