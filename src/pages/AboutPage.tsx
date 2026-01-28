import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, CheckCircle, ArrowRight, Shield, Clock, Heart, Target, Star, Quote, MapPin, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import TestimonialCarousel from '../components/TestimonialCarousel';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in medical billing accuracy and compliance, ensuring every claim is processed with meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, understanding your unique needs and tailoring our solutions to fit your practice perfectly.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We help practices grow by optimizing revenue streams, reducing administrative burden, and providing insights for strategic decision-making.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty, building trust through consistent delivery and ethical business practices.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Our proven processes and dedicated team ensure consistent, timely results you can count on, day after day.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We genuinely care about your success and the patients you serve, treating every practice relationship as a long-term partnership.',
    },
  ];

  const testimonials = [
    {
      quote: "Medtransic transformed our practice's financial health. Our revenue increased by 25% in the first year, and we finally have time to focus on patient care.",
      author: "Dr. Amanda Foster",
      practice: "Foster Family Medicine",
      specialty: "Family Practice",
      rating: 5,
    },
    {
      quote: "The level of expertise and attention to detail is unmatched. They caught billing errors we didn't even know we had and recovered thousands in lost revenue.",
      author: "Mark Stevens",
      practice: "Riverside Cardiology",
      specialty: "Cardiology",
      rating: 5,
    },
    {
      quote: "Their virtual receptionist service has been a game-changer. Professional, efficient, and our patients love the improved experience.",
      author: "Dr. Jennifer Park",
      practice: "Park Dermatology",
      specialty: "Dermatology",
      rating: 5,
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Specialty-Focused Expertise',
      description: 'Our billing specialists are trained in specific medical specialties, ensuring deep understanding of unique coding requirements and payer policies.',
    },
    {
      icon: Shield,
      title: 'Advanced Security & Compliance',
      description: 'Beyond HIPAA compliance, we maintain SOC 2 certification and employ military-grade encryption to protect sensitive patient data.',
    },
    {
      icon: Clock,
      title: 'Real-Time Transparency',
      description: 'Our proprietary dashboard provides 24/7 access to your billing metrics, claim status, and financial performance indicators.',
    },
    {
      icon: Users,
      title: 'Dedicated Account Management',
      description: 'Each practice is assigned a dedicated account manager who becomes an expert in your specific needs and workflows.',
    },
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient dark:bg-gray-900 relative overflow-hidden pt-20">
      <SEOHead
        title="About Medtransic | Expert Medical Billing & RCM Company Since 2015"
        description="Learn about Medtransic's mission to revolutionize healthcare revenue cycle management. Trusted medical billing partner serving 500+ practices nationwide with expert billing, certified coding, and comprehensive RCM solutions."
        canonical="https://medtransic.com/about"
        keywords="about medtransic, medical billing company, RCM company, healthcare billing experts, medical billing partner, revenue cycle management company, certified medical billers"
        ogType="website"
      />
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, -1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      {/* Logo background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Medtransic
            </motion.h1>
            <motion.p
              className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your trusted partner in medical billing and revenue cycle management,
              dedicated to maximizing your practice's financial health while you focus on patient care.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Our Story Section */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Medtransic was born from a simple observation: healthcare providers were 
                  spending too much time on administrative tasks and not enough time with patients.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We've rapidly established ourselves as a comprehensive revenue cycle management 
                  company serving healthcare providers across the nation. Our journey has been marked by continuous 
                  innovation, unwavering commitment to excellence, and a deep understanding 
                  of the evolving healthcare landscape.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  We're proud to be a trusted partner that helps practices not just 
                  survive, but thrive in an increasingly complex healthcare environment.
                </motion.p>
              </div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://i.postimg.cc/MZDYF0w3/01-Our-Story.webp"
                alt="Healthcare team collaboration"
                className="w-full h-auto rounded-2xl shadow-large"
                loading="lazy"
              />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gradient dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              To empower healthcare providers by delivering exceptional revenue cycle
              management services that maximize financial performance, ensure compliance,
              and free up valuable time for patient care. We believe that when practices
              are financially healthy, they can focus on what matters most – healing and caring for patients.
            </p>

            <div className="space-y-4">
              <div className="flex items-center group">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">500+ Healthcare Providers Served</span>
              </div>
              <div className="flex items-center group">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">98% First-Pass Claim Acceptance Rate</span>
              </div>
              <div className="flex items-center group">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Average 25% Revenue Increase</span>
              </div>
              <div className="flex items-center group">
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 dark:text-gray-200 font-semibold">24/7 Support & Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="card-elevated p-10 dark:bg-gray-800">
            <h3 className="text-3xl font-bold mb-6 text-gradient-emerald dark:text-white">Our Vision</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              To be the most trusted and innovative revenue cycle management partner
              in healthcare, setting the standard for excellence, transparency, and
              results-driven service.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Looking Forward</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We're continuously investing in technology, training, and processes
                to stay ahead of industry changes and deliver even greater value to our partners.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              These core values guide every decision we make and every service we deliver.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const colors = [
                { bg: 'bg-gradient-to-br from-blue-100 to-blue-200', icon: 'text-blue-600', accent: 'from-blue-600 to-blue-700' },
                { bg: 'bg-gradient-to-br from-emerald-100 to-emerald-200', icon: 'text-emerald-600', accent: 'from-emerald-600 to-emerald-700' },
                { bg: 'bg-gradient-to-br from-amber-100 to-amber-200', icon: 'text-amber-600', accent: 'from-amber-600 to-amber-700' },
                { bg: 'bg-gradient-to-br from-blue-100 to-emerald-200', icon: 'text-blue-700', accent: 'from-blue-700 to-emerald-700' },
                { bg: 'bg-gradient-to-br from-emerald-100 to-blue-200', icon: 'text-emerald-700', accent: 'from-emerald-700 to-blue-700' },
                { bg: 'bg-gradient-to-br from-amber-100 to-blue-200', icon: 'text-amber-700', accent: 'from-amber-700 to-blue-700' },
              ];
              const colorScheme = colors[index % colors.length];

              return (
                <motion.div
                  key={index}
                  className="card-elevated p-8 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-20 h-20 ${colorScheme.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className={`w-10 h-10 ${colorScheme.icon}`} />
                  </motion.div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${colorScheme.accent} bg-clip-text text-transparent dark:text-white`}>{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Office Locations */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Office Location</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We operate from our headquarters to serve healthcare providers 
              across the nation with dedicated support.
            </p>
          </div>
          
          <div className="flex justify-center">
            {/* Wyoming Office */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">United States Office</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">Headquarters</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">30 N Gould St Ste R</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Sheridan, WY 82801</p>
                    <p className="text-gray-600 dark:text-gray-400">United States</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">+1 (888) 777-0860</p>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">contact@medtransic.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nationwide Support, Local Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Our headquarters allows us to provide 24/7 support coverage while maintaining the highest standards of service quality and 
                HIPAA compliance across all operations.
              </p>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it. Here's what healthcare providers say about 
              partnering with Medtransic.
            </motion.p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </AnimatedSection>

        {/* Strategic Partnerships */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry-leading partners to enhance our service offerings 
              and provide comprehensive solutions for healthcare providers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Partnership 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl flex items-center justify-center mr-6">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Healthcare Technology Partner"
                    className="w-16 h-16 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">HealthTech Solutions</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">Technology Integration Partner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our strategic partnership with HealthTech Solutions enhances our EHR integration 
                capabilities and provides cutting-edge practice management tools. This collaboration 
                enables us to offer seamless technology solutions that streamline workflows and 
                improve operational efficiency for healthcare providers.
              </p>
            </div>

            {/* Partnership 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl flex items-center justify-center mr-6">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Medical Compliance Partner"
                    className="w-16 h-16 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MedCompliance Pro</h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold">Compliance & Audit Partner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Through our affiliate agreement with MedCompliance Pro, we provide enhanced 
                compliance monitoring and audit services. This partnership strengthens our 
                ability to ensure HIPAA compliance, conduct thorough practice audits, and 
                maintain the highest standards of regulatory adherence for our clients.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Partnership Benefits for Our Clients</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Enhanced Service Capabilities</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Improved Compliance Standards</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Expanded Expert Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Medtransic?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We go beyond basic billing services to provide comprehensive solutions 
              that drive practice success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Practice?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of healthcare providers who trust Medtransic to optimize 
              their revenue cycle and improve their practice's financial health.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="btn-primary flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="btn-secondary">
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;