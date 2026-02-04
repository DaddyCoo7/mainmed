import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  DollarSign,
  FileText,
  Shield,
  Clock,
  Users,
  Award,
  TrendingUp,
  Building2,
  Database
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';
import InteractiveCard from '../components/InteractiveCard';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import AggregateRatingSchema from '../components/AggregateRatingSchema';
import { usePrerenderReady } from '../hooks/usePrerenderReady';

const ChicagoBillingPage: React.FC = () => {
  usePrerenderReady(true);

  const services = [
    {
      icon: FileText,
      title: 'Medical Billing for Chicago Practices',
      description: 'Comprehensive billing services for all specialties across the Chicago metropolitan area.',
      features: ['Local Chicago expertise', 'Illinois payer knowledge', 'BCBSIL specialists', 'Cook County billing']
    },
    {
      icon: TrendingUp,
      title: 'Revenue Cycle Management',
      description: 'End-to-end RCM services specifically tailored for Chicago healthcare providers.',
      features: ['99% clean claim rate', 'Faster collections', '24/7 support', 'Performance analytics']
    },
    {
      icon: Database,
      title: 'EHR/EMR Integration Chicago',
      description: 'Seamless integration with accounting systems and EHR platforms used by Chicago practices.',
      features: ['QuickBooks integration', 'Epic integration', 'Cerner connectivity', 'HL7/FHIR standards']
    },
    {
      icon: Shield,
      title: 'Compliance & Credentialing',
      description: 'HIPAA-compliant services with expertise in Illinois healthcare regulations.',
      features: ['Illinois compliance', 'Provider credentialing', 'HIPAA security', 'Audit protection']
    }
  ];

  const chicagoSpecialties = [
    'Primary Care Practices',
    'Orthopedics',
    'Cardiology',
    'Mental Health',
    'Physical Therapy',
    'Urgent Care',
    'Dermatology',
    'Gastroenterology',
    'Pediatrics',
    'OB/GYN',
    'Pain Management',
    'Family Medicine'
  ];

  const chicagoAreas = [
    'Downtown Chicago',
    'North Side',
    'South Side',
    'West Side',
    'Oak Park',
    'Evanston',
    'Naperville',
    'Schaumburg',
    'Joliet',
    'Arlington Heights',
    'Bolingbrook',
    'Elgin'
  ];

  const benefits = [
    { metric: '99%', label: 'Clean Claim Rate', icon: CheckCircle },
    { metric: '30%', label: 'Revenue Increase', icon: TrendingUp },
    { metric: '24/7', label: 'Local Support', icon: Clock },
    { metric: '500+', label: 'Chicago Providers', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-medtransic-gradient relative overflow-hidden pt-20">
      <SEOHead
        title="Medical Billing Services Chicago 2025 | EMR Integration & Accounting"
        description="Chicago medical billing experts: EMR integration with accounting systems, BCBSIL specialists, 99% clean claims. Serving Cook County practices. Free consultation!"
        canonical="https://medtransic.com/chicago-medical-billing"
        keywords="medical billing Chicago, EMR integration Chicago, Chicago healthcare billing, revenue cycle management Chicago, medical billing Cook County, BCBSIL billing, QuickBooks integration Chicago, accounting integration Chicago"
        ogType="article"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://medtransic.com/" },
        { name: "Locations", url: "https://medtransic.com/locations" },
        { name: "Chicago Medical Billing", url: "https://medtransic.com/chicago-medical-billing" }
      ]} />
      <AggregateRatingSchema
        name="Medtransic Chicago Medical Billing Services"
        ratingValue={4.8}
        reviewCount={89}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          rotate: [0, 1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                Chicago Healthcare Billing
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Medical Billing Services for Chicago Healthcare Providers
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert medical billing and EMR integration services for practices across the Chicago metropolitan area.
            Specialized knowledge of Illinois payers, BCBSIL requirements, and local accounting system integration.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2} className="mb-24">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Chicago medical billing and EMR integration services"
              className="w-full h-80 object-cover rounded-2xl shadow-large"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Comprehensive Services for Chicago Practices
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Specialized billing services with deep knowledge of Chicago-area payers and healthcare systems.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <InteractiveCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-50"
                  className="h-full"
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 shadow-xl border border-blue-200">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Serving Chicago-Area Healthcare Providers
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Proven results for medical practices throughout the Chicago metropolitan area and Cook County.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-700 font-medium">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Specialties We Serve in Chicago</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {chicagoSpecialties.map((specialty, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Chicago Areas We Serve</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {chicagoAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mb-24">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
                "As a Chicago practice, we needed billing partners who understood BCBSIL and local payer requirements.
                Medtransic's team increased our collections by 32% and their EMR integration with our accounting system
                has streamlined everything. Highly recommended for Chicago providers!"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">Dr. Michael Sullivan, MD</p>
                <p className="text-blue-600 font-medium">Orthopedic Surgeon</p>
                <p className="text-gray-500">Chicago Orthopedics & Sports Medicine</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Optimize Your Chicago Practice?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our Chicago medical billing experts show you how we can increase your revenue, improve cash flow,
              and integrate seamlessly with your accounting systems.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Free Chicago Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href="tel:+1-888-777-0860" className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 font-semibold text-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Chicago Specialists
                </a>
              </motion.div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">Local Chicago Expertise</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">EMR/Accounting Integration</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="text-center mt-12">
          <Link to="/services" className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChicagoBillingPage;
