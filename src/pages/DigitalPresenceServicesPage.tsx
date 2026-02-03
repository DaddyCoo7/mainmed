import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Share2,
  TrendingUp,
  MapPin,
  Code,
  Palette,
  Search,
  BarChart,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  Target,
  MessageCircle,
  Camera,
  Layout,
  Smartphone,
  Award,
  Clock,
  DollarSign,
  Phone,
  Shield
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';

const DigitalPresenceServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [selectedTier, setSelectedTier] = useState<{ [key: number]: number }>({
    0: 1,
    1: 1,
    2: 1,
    3: 1
  });

  const services = [
    {
      id: 0,
      name: 'Website Development',
      icon: Code,
      description: 'Professional, responsive websites built with modern technologies',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-700',
      features: [
        'Custom design tailored to your brand',
        'Mobile-responsive across all devices',
        'SEO-optimized structure',
        'Fast loading times',
        'HIPAA-compliant hosting',
        'Content management system'
      ]
    },
    {
      id: 1,
      name: 'Social Media Management',
      icon: Share2,
      description: 'Engaging social media content and community management',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700',
      features: [
        'Content creation and scheduling',
        'Multi-platform management',
        'Community engagement',
        'Analytics and reporting',
        'Brand consistency',
        'Reputation monitoring'
      ]
    },
    {
      id: 2,
      name: 'Performance Marketing',
      icon: TrendingUp,
      description: 'Data-driven digital advertising campaigns',
      color: 'green',
      gradient: 'from-green-500 to-green-700',
      features: [
        'Google Ads campaigns',
        'Facebook & Instagram ads',
        'Landing page optimization',
        'A/B testing',
        'Conversion tracking',
        'ROI reporting'
      ]
    },
    {
      id: 3,
      name: 'Google My Business',
      icon: MapPin,
      description: 'Local SEO optimization and GMB management',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-700',
      features: [
        'Profile optimization',
        'Review management',
        'Post scheduling',
        'Photo management',
        'Q&A monitoring',
        'Local ranking improvement'
      ]
    }
  ];

  const pricingTiers = {
    0: [ // Website Development
      {
        name: 'Starter',
        price: 2499,
        setup: 0,
        description: 'Perfect for new practices',
        features: [
          '5-page responsive website',
          'Mobile-optimized design',
          'Contact form integration',
          'Basic SEO setup',
          'SSL certificate included',
          '3 months free hosting',
          '2 rounds of revisions'
        ],
        recommended: false
      },
      {
        name: 'Professional',
        price: 4999,
        setup: 0,
        description: 'Most popular choice',
        features: [
          '10-page responsive website',
          'Custom design & branding',
          'Advanced SEO optimization',
          'Blog functionality',
          'Patient portal integration',
          '1 year free hosting',
          'Unlimited revisions',
          'Google Analytics setup'
        ],
        recommended: true
      },
      {
        name: 'Enterprise',
        price: 9999,
        setup: 0,
        description: 'For growing practices',
        features: [
          'Unlimited pages',
          'Premium custom design',
          'E-commerce capability',
          'Advanced integrations (EHR, CRM)',
          'Multi-location support',
          '2 years free hosting',
          'Priority support',
          'Monthly performance reports',
          'Conversion optimization'
        ],
        recommended: false
      }
    ],
    1: [ // Social Media Management
      {
        name: 'Basic',
        price: 499,
        setup: 0,
        description: 'Essential social presence',
        features: [
          '2 social platforms',
          '12 posts per month',
          'Content creation',
          'Basic analytics',
          'Community monitoring',
          'Monthly reporting'
        ],
        recommended: false
      },
      {
        name: 'Growth',
        price: 999,
        setup: 0,
        description: 'Expand your reach',
        features: [
          '4 social platforms',
          '20 posts per month',
          'Custom graphics & videos',
          'Advanced analytics',
          'Active engagement',
          'Competitor analysis',
          'Weekly reporting',
          'Paid social ad management ($500 ad spend)'
        ],
        recommended: true
      },
      {
        name: 'Premium',
        price: 1999,
        setup: 0,
        description: 'Maximum engagement',
        features: [
          'All major platforms',
          '40 posts per month',
          'Professional content creation',
          'Video production',
          'Influencer collaboration',
          'Crisis management',
          'Real-time monitoring',
          'Daily engagement',
          'Paid social ad management ($1500 ad spend)'
        ],
        recommended: false
      }
    ],
    2: [ // Performance Marketing
      {
        name: 'Starter',
        price: 799,
        setup: 299,
        description: 'Test the waters',
        features: [
          'Google Ads setup',
          '$1000 monthly ad budget managed',
          'Keyword research',
          'Ad copywriting',
          '1 landing page',
          'Monthly reporting',
          'Basic conversion tracking'
        ],
        recommended: false
      },
      {
        name: 'Professional',
        price: 1499,
        setup: 499,
        description: 'Drive more patients',
        features: [
          'Multi-channel campaigns',
          '$2500 monthly ad budget managed',
          'Advanced targeting',
          'A/B testing',
          '3 landing pages',
          'Conversion optimization',
          'Bi-weekly reporting',
          'Remarketing campaigns'
        ],
        recommended: true
      },
      {
        name: 'Enterprise',
        price: 2999,
        setup: 999,
        description: 'Scale your practice',
        features: [
          'Full-funnel marketing',
          '$5000+ monthly ad budget managed',
          'Custom audience building',
          'Advanced analytics',
          'Unlimited landing pages',
          'Marketing automation',
          'Weekly strategy calls',
          'Dedicated account manager',
          'Competitive intelligence'
        ],
        recommended: false
      }
    ],
    3: [ // Google My Business
      {
        name: 'Essential',
        price: 199,
        setup: 99,
        description: 'Get found locally',
        features: [
          'GMB profile optimization',
          '2 posts per month',
          'Review monitoring',
          'Q&A management',
          'Photo updates',
          'Monthly reporting'
        ],
        recommended: false
      },
      {
        name: 'Advanced',
        price: 399,
        setup: 99,
        description: 'Dominate local search',
        features: [
          'Complete GMB optimization',
          '8 posts per month',
          'Active review management',
          'Review response service',
          'Photo & video updates',
          'Local citation building',
          'Competitor monitoring',
          'Weekly reporting'
        ],
        recommended: true
      },
      {
        name: 'Premium',
        price: 699,
        setup: 99,
        description: 'Multi-location success',
        features: [
          'Multi-location management',
          '16 posts per month',
          'Proactive review generation',
          'Reputation management',
          'Professional photography',
          'Local SEO optimization',
          'Service area expansion',
          'Priority support',
          'Daily monitoring'
        ],
        recommended: false
      }
    ]
  };

  const currentService = services[activeService];
  const currentPricing = pricingTiers[activeService as keyof typeof pricingTiers];

  return (
    <>
      <SEOHead
        title="Digital Presence Services | Website Development & Digital Marketing | MedTransic"
        description="Complete digital presence solutions for healthcare practices. Website development, social media management, performance marketing, and Google My Business optimization."
        canonical="https://medtransic.com/services/digital-presence"
      />

      <HeroSection
        title="Build Your Digital Presence"
        subtitle="Complete digital marketing solutions to grow your healthcare practice online"
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage="/medium-vecteezy_doctor-assistant-in-uniform-working-on-laptop-in-modern_46870005_medium.jpg"
      />

      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Service Selection Tabs */}
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Digital Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Choose from our comprehensive suite of digital marketing services designed specifically for healthcare practices
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    activeService === index
                      ? `bg-gradient-to-br ${service.gradient} text-white shadow-2xl`
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <service.icon className={`w-12 h-12 mx-auto mb-4 ${
                    activeService === index ? 'text-white' : `text-${service.color}-600`
                  }`} />
                  <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                  <p className={`text-sm ${
                    activeService === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {service.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Service Details & Features */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`bg-gradient-to-br ${currentService.gradient} rounded-3xl p-8 mb-12 text-white`}>
                <div className="flex items-center mb-6">
                  <currentService.icon className="w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{currentService.name}</h3>
                    <p className="text-white/90 text-lg">{currentService.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                  Choose Your Plan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentPricing.map((tier, index) => (
                    <motion.div
                      key={index}
                      className={`relative rounded-2xl p-8 ${
                        tier.recommended
                          ? `bg-gradient-to-br ${currentService.gradient} text-white shadow-2xl`
                          : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      {tier.recommended && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          MOST POPULAR
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h4 className={`text-2xl font-bold mb-2 ${
                          tier.recommended ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                        }`}>
                          {tier.name}
                        </h4>
                        <p className={`text-sm ${
                          tier.recommended ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {tier.description}
                        </p>
                      </div>

                      <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center mb-2">
                          <span className={`text-5xl font-bold ${
                            tier.recommended ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                          }`}>
                            ${tier.price}
                          </span>
                          <span className={`ml-2 ${
                            tier.recommended ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            /month
                          </span>
                        </div>
                        {tier.setup > 0 && (
                          <p className={`text-sm ${
                            tier.recommended ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            + ${tier.setup} one-time setup fee
                          </p>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                              tier.recommended ? 'text-white' : `text-${currentService.color}-600`
                            }`} />
                            <span className={`text-sm ${
                              tier.recommended ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                          tier.recommended
                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                            : `bg-gradient-to-br ${currentService.gradient} text-white hover:shadow-lg`
                        }`}
                      >
                        Get Started
                        <ArrowRight className="inline-block w-5 h-5 ml-2" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Why Choose Us */}
          <AnimatedSection animation="slideUp">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
                Why Choose MedTransic for Your Digital Presence?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: 'Healthcare Expertise',
                    description: 'We understand healthcare marketing regulations and patient acquisition'
                  },
                  {
                    icon: Zap,
                    title: 'Fast Turnaround',
                    description: 'Quick implementation to get your digital presence up and running'
                  },
                  {
                    icon: Target,
                    title: 'Results-Driven',
                    description: 'Focus on ROI and measurable outcomes for your practice'
                  },
                  {
                    icon: Users,
                    title: 'Dedicated Support',
                    description: 'Personal account manager for all your digital marketing needs'
                  },
                  {
                    icon: BarChart,
                    title: 'Transparent Reporting',
                    description: 'Regular reports showing your digital marketing performance'
                  },
                  {
                    icon: Shield,
                    title: 'HIPAA Compliant',
                    description: 'All marketing activities follow healthcare privacy regulations'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${currentService.gradient} text-white mb-4`}>
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection animation="slideUp">
            <div className={`mt-16 bg-gradient-to-br ${currentService.gradient} rounded-3xl p-12 text-center text-white`}>
              <h3 className="text-4xl font-bold mb-4">
                Ready to Grow Your Digital Presence?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Get a free consultation and custom strategy for your practice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+1-888-777-0860"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 1-888-777-0860
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </>
  );
};

export default DigitalPresenceServicesPage;
