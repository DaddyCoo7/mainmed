import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, ArrowRight, Users, Zap, Shield } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AnimatedSection from '../../components/AnimatedSection';

interface EMRIntegration {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  description: string;
  features: string[];
  setup_guide: string | null;
  supported_specialties: string[];
  integration_type: string;
  pricing_notes: string | null;
  popularity_rank: number;
  meta_description: string | null;
}

export default function EMRIntegrationPage() {
  const { slug } = useParams();
  const [integration, setIntegration] = useState<EMRIntegration | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchIntegration();
    }
  }, [slug]);

  const fetchIntegration = async () => {
    try {
      const { data, error } = await supabase
        .from('emr_integrations')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setNotFound(true);
      } else {
        setIntegration(data);
      }
    } catch (error) {
      console.error('Error fetching EMR integration:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (notFound || !integration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Integration Not Found</h1>
          <p className="text-gray-600 mb-6">The EMR integration you're looking for doesn't exist.</p>
          <a href="/resources/emr-integrations" className="text-blue-600 hover:underline">
            View All Integrations
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${integration.name} Medical Billing Integration | ${integration.integration_type} Connection`}</title>
        <meta
          name="description"
          content={integration.meta_description || `Professional medical billing services with ${integration.name} EHR integration. Seamless ${integration.integration_type} connection for automated claims and real-time data sync.`}
        />
        <meta name="keywords" content={`${integration.name.toLowerCase()}, ${integration.slug}, ${integration.name.toLowerCase()} billing, ${integration.name.toLowerCase()} integration, ${integration.name.toLowerCase()} emr`} />
        <link rel="canonical" href={`https://medtransic.com/integrations/${integration.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex items-center gap-6 mb-6">
                {integration.logo_url && (
                  <img
                    src={integration.logo_url}
                    alt={`${integration.name} logo`}
                    className="h-16 w-auto"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold text-gray-900">
                      {integration.name} Medical Billing Integration
                    </h1>
                  </div>
                  <p className="text-lg text-gray-600">
                    Seamless {integration.integration_type} integration for automated billing workflows
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {integration.description}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <AnimatedSection animation="fade-up" delay={0.1} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Zap className="w-7 h-7 text-blue-600" />
                  Integration Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {integration.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="text-blue-100 mb-6">
                  Connect your {integration.name} system with our professional billing services
                </p>
                <a
                  href="/contact"
                  className="block w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors mb-4"
                >
                  Request Integration Setup
                </a>
                <div className="space-y-3 text-sm text-blue-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free integration setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No long-term contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Dedicated support team</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={0.3}>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-7 h-7 text-blue-600" />
                Supported Specialties
              </h2>
              <div className="flex flex-wrap gap-3">
                {integration.supported_specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {integration.setup_guide && (
            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="w-7 h-7 text-blue-600" />
                  Setup Process
                </h2>
                <div
                  className="prose max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: integration.setup_guide }}
                />
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade-up" delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">99.8%</h3>
                <p className="text-green-100">Clean Claim Rate</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">24/7</h3>
                <p className="text-blue-100">System Monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">&lt;5 Days</h3>
                <p className="text-purple-100">Average A/R Days</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.6}>
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Optimize Your {integration.name} Billing?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Our team has extensive experience with {integration.name} integration and can help you
                  maximize revenue while reducing administrative burden.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}