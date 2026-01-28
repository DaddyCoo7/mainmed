import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  Calendar, 
  BarChart3, 
  Users, 
  Camera, 
  MessageSquare,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Zap
} from 'lucide-react';

const SocialMediaPackages: React.FC = () => {
  const packages = [
    {
      name: 'Essential Social',
      price: 399,
      popular: false,
      description: 'Perfect for new practices looking to establish their online presence',
      features: [
        'Social media account setup (Facebook, Instagram, LinkedIn)',
        '12 custom posts per month (3 per week)',
        'Basic content calendar planning',
        'Stock photo sourcing and editing',
        'Community management (respond to comments)',
        'Monthly performance report',
        'Healthcare compliance review',
        'Basic hashtag research'
      ],
      benefits: [
        'Build brand awareness',
        'Engage with patients online',
        'Establish professional credibility'
      ],
      color: 'blue',
      icon: Share2
    },
    {
      name: 'Professional Growth',
      price: 499,
      popular: true,
      description: 'Comprehensive social media management for growing practices',
      features: [
        'Everything in Essential Social package',
        '20 custom posts per month (5 per week)',
        'Advanced content calendar planning',
        'Custom graphics and branded visuals',
        'Advanced analytics and insights',
        'Targeted hashtag strategy',
      ],
      benefits: [
        'Accelerate patient acquisition',
        'Build thought leadership',
        'Maximize online visibility',
        'Drive website traffic'
      ],
      color: 'purple',
      icon: TrendingUp
    }
  ];

  const getColorClasses = (color: string, popular: boolean = false) => {
    if (popular) {
      return {
        border: 'border-purple-300',
        bg: 'bg-gradient-to-br from-purple-50 via-purple-25 to-white',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        priceColor: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        badge: 'bg-purple-600'
      };
    }
    
    return color === 'blue' ? {
      border: 'border-blue-200',
      bg: 'bg-gradient-to-br from-blue-50 via-blue-25 to-white',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      priceColor: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
      badge: 'bg-blue-600'
    } : {
      border: 'border-gray-200',
      bg: 'bg-gradient-to-br from-gray-50 via-gray-25 to-white',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600',
      priceColor: 'text-gray-600',
      button: 'bg-gray-600 hover:bg-gray-700',
      badge: 'bg-gray-600'
    };
  };

  return (
    <section className="py-24 bg-medtransic-gradient-reverse relative overflow-hidden">
      {/* Logo background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mr-4">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Social Media Management
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Build your practice's online presence and connect with patients through strategic 
            social media management. Our healthcare-focused approach ensures HIPAA compliance 
            while maximizing engagement and patient acquisition.
          </p>
          
          {/* Hero Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Healthcare social media management and digital marketing"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Packages Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const colors = getColorClasses(pkg.color, pkg.popular);
            
            return (
              <div
                key={index}
                className={`relative ${colors.bg} ${colors.border} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`${colors.badge} text-white px-6 py-2 rounded-full text-sm font-bold flex items-center`}>
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <pkg.icon className={`w-10 h-10 ${colors.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold ${colors.priceColor}`}>${pkg.price}</span>
                    <span className="text-gray-600 text-lg">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 ${colors.iconColor} mr-3 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h4>
                  <div className="space-y-2">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <Target className={`w-4 h-4 ${colors.iconColor} mr-3`} />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to="/contact" 
                  className={`w-full ${colors.button} text-white px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center`}
                >
                  Get Started with {pkg.name}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our Social Media Management */}
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Social Media Management?</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We understand the unique challenges healthcare providers face in social media marketing. 
              Our specialized approach ensures compliance while maximizing engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">HIPAA Compliant</h4>
              <p className="text-gray-600">All content reviewed for healthcare compliance and patient privacy protection.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Healthcare Focused</h4>
              <p className="text-gray-600">Content specifically designed for healthcare providers and patient education.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Data-Driven Results</h4>
              <p className="text-gray-600">Monthly analytics and insights to track engagement and patient acquisition.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Setup</h4>
              <p className="text-gray-600">Get your social media presence up and running within 7 days of signup.</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 shadow-xl border border-blue-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Proven Results for Healthcare Practices</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our social media management has helped healthcare practices increase their online presence 
              and patient engagement significantly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
              <div className="text-gray-700 font-medium">Average Increase in Social Media Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-700 font-medium">Improvement in Online Engagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-700 font-medium">Increase in Website Traffic from Social</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
              <div className="text-gray-700 font-medium">Growth in New Patient Inquiries</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Grow Your Practice Online?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss which social media package is right for your practice and 
              create a customized strategy to attract more patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-purple-600 text-white px-12 py-5 rounded-full hover:bg-purple-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                <Share2 className="w-6 h-6 mr-3" />
                Start Your Social Media Journey
              </Link>
              <Link to="/contact" className="border-2 border-purple-600 text-purple-600 px-12 py-5 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPackages;