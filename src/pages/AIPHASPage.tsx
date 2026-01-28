import React from 'react';
import { Shield, TrendingUp, Zap, FileSearch, Database, CheckCircle2, BarChart3, Network, Lock, Layers } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';

const AIPHASPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description: 'Access comprehensive dashboards with real-time insights into billing patterns, denial trends, and revenue cycle performance metrics.'
    },
    {
      icon: FileSearch,
      title: 'Deep Audit Analysis',
      description: 'AI-powered analysis of existing billing data identifies discrepancies, compliance issues, and revenue optimization opportunities.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Leakage Detection',
      description: 'Identify missed charges, undercoding patterns, and revenue leakage across your historical billing data.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connects to your existing billing systems and practice management software to analyze historical data.'
    },
    {
      icon: Shield,
      title: 'Compliance Auditing',
      description: 'Automated compliance checks against CMS guidelines, payer policies, and coding standards to identify risk areas.'
    },
    {
      icon: Network,
      title: 'Pattern Recognition',
      description: 'Machine learning algorithms detect billing patterns, anomalies, and trends across your revenue cycle operations.'
    },
    {
      icon: Layers,
      title: 'Multi-Specialty Analytics',
      description: 'Specialized audit frameworks tailored for different medical specialties with specialty-specific benchmarking.'
    },
    {
      icon: Zap,
      title: 'Denial Pattern Analysis',
      description: 'Comprehensive analysis of denial patterns to identify root causes and provide actionable recommendations.'
    }
  ];

  const benefits = [
    {
      title: 'Uncover Revenue Opportunities',
      description: 'Identify missed revenue in existing data',
      metric: '$150K+'
    },
    {
      title: 'Comprehensive Audits',
      description: 'Deep analysis across all billing activities',
      metric: '100%'
    },
    {
      title: 'Compliance Risk Reduction',
      description: 'Identify compliance issues before they become problems',
      metric: '85%'
    },
    {
      title: 'Actionable Insights',
      description: 'Data-driven recommendations for improvement',
      metric: '24/7'
    }
  ];

  const capabilities = [
    'Historical billing data analysis and pattern recognition',
    'Compliance auditing against CMS and payer guidelines',
    'Revenue leakage identification and quantification',
    'Denial pattern analysis and root cause identification',
    'Coding accuracy assessment and benchmarking',
    'Provider productivity analytics and comparisons',
    'Payer-specific performance tracking',
    'Comprehensive audit reporting and documentation'
  ];

  return (
    <>
      <SEOHead
        title="AIPHAS Platform - AI-Powered RCM Audit Analytics | Medtransic"
        description="Transform your revenue cycle with AIPHAS - an AI-powered audit analytics platform. Join the Beta for deep billing analysis, compliance auditing, and revenue optimization insights."
        canonical="https://medtransic.com/aiphas"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Now in Beta
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                AIPHAS Platform
              </h1>

              <p className="text-2xl md:text-3xl text-slate-700 mb-4 font-light">
                AI-Powered Healthcare Audit & Analytics System
              </p>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Transform your revenue cycle with deep audit analytics, comprehensive compliance reviews, and AI-driven insights from your existing billing data.
                Built exclusively for Medtransic clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#beta"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Join the Beta
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200"
                >
                  Explore Features
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="grid md:grid-cols-4 gap-8 mt-16">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">360°</div>
                <div className="text-slate-600">Audit Coverage</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">AI-Driven</div>
                <div className="text-slate-600">Pattern Analysis</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">Real-Time</div>
                <div className="text-slate-600">Analytics Dashboard</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-slate-600">HIPAA Compliant</div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Intelligent Audit Analytics for Modern RCM
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                AIPHAS combines artificial intelligence with healthcare expertise to deliver
                comprehensive audit analytics and insights from your existing billing data.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Actionable Insights & Results
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See the impact of AI-powered audit analytics on your revenue cycle performance
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                      {benefit.metric}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Advanced Audit Capabilities
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  AIPHAS delivers enterprise-grade audit analytics with intelligent features
                  designed specifically for healthcare revenue cycle auditing and optimization.
                </p>
                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 text-lg">{capability}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-8 rounded-2xl text-white">
                  <Lock className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Enterprise Security & Compliance
                  </h3>
                  <ul className="space-y-3 text-blue-50">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      HIPAA-compliant infrastructure
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Role-based access controls
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Complete audit trails
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      SOC 2 Type II certified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Regular security audits
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="beta" className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Limited Beta Access
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the AIPHAS Beta Program
              </h2>

              <p className="text-xl text-slate-300 mb-8">
                Be among the first Medtransic clients to experience the future of revenue cycle audit analytics.
                Beta participants receive priority support, exclusive training, and special pricing.
              </p>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-6">Beta Program Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Early Access</div>
                      <div className="text-slate-300 text-sm">First to use cutting-edge features</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Priority Support</div>
                      <div className="text-slate-300 text-sm">Dedicated implementation team</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Special Pricing</div>
                      <div className="text-slate-300 text-sm">Exclusive beta participant rates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Direct Influence</div>
                      <div className="text-slate-300 text-sm">Shape product development</div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <CheckCircle2 className="w-5 h-5" />
                Request Beta Access
              </a>

              <p className="text-slate-400 mt-6 text-sm">
                Available exclusively to current Medtransic clients
              </p>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPHASPage;
