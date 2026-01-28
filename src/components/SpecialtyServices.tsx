import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Scissors, 
  Users, 
  MessageCircle,
  Brain,
  Heart,
  Activity,
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';

const SpecialtyServices: React.FC = () => {
  const specialties = [
    {
      icon: Truck,
      title: 'Urgent Care',
      description: 'Maximize revenue for urgent care facilities with specialized billing expertise.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Scissors,
      title: 'Plastic Surgery',
      description: 'Navigate complex cosmetic and reconstructive surgery billing requirements.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Family Medicine',
      description: 'Comprehensive billing solutions tailored for family practice workflows.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: MessageCircle,
      title: 'Speech Therapy',
      description: 'Expert billing for speech-language pathology and communication disorders.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Specialized billing for behavioral health and psychiatric services.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care billing with expertise in complex procedures.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Activity,
      title: 'Physical Therapy',
      description: 'Optimize rehabilitation and therapy billing for maximum reimbursement.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Streamline internal medicine billing processes and improve cash flow.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section 
      id="specialties" 
      className="py-24 bg-medtransic-gradient relative overflow-hidden"
    >
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, 1, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
              What We Offer
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Specialty Medical Billing Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our specialized medical billing services deliver enhanced reimbursements through 
            specialty-focused billing teams skilled in ICD-10 coding standards and protocols 
            specific to your medical practice. We ensure accuracy and efficiency in every 
            step of the revenue cycle. Our comprehensive Revenue Cycle Management (RCM) 
            services support a wide range of medical specialties.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.1}
            >
              <InteractiveCard
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
                iconColor={specialty.color}
                iconBgColor={specialty.bgColor}
                className="text-center h-full"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center justify-center">
                    Learn More About {specialty.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </InteractiveCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slideUp" delay={0.6} className="text-center">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/specialties" className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center mx-auto w-fit">
              View All Specialties
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SpecialtyServices;