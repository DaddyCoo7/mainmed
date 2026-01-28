import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  Clock, 
  CheckCircle,
  Users,
  TrendingUp,
  Headphones,
  FileText,
  Shield,
  DollarSign
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const VirtualReceptionist: React.FC = () => {
  const services = [
    'Insurance verification',
    'Appointment scheduling & management', 
    'Patient Registration & Intake',
    'Prior authorizations',
    'Document & medical record management',
    'Handling patient queries & support'
  ];

  const benefits = [
    'Practice Growth',
    'Risk Management', 
    'Financial Stability'
  ];

  return (
    <section className="py-20 bg-medtransic-gradient relative overflow-hidden">
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          x: [0, 15, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-24 left-12 w-56 h-56 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
        <div className="absolute bottom-16 right-32 w-40 h-40 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="slideLeft" className="max-w-xl">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Medical Virtual Receptionist for Healthcare Professionals
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mostly, the front desk is the earliest point of contact for patients, make it 
              smooth and error-free with the help of our Virtual Front Desk Services. 
              Our certified healthcare receptionists tackle appointment scheduling, 
              focus on accurate patient registration, plus robust insurance verification 
              as well as flawless operations. We offer the best medical billing services 
              while maintaining quality, accuracy, and better patient experiences 
              because we serve as an extension of your practice.
            </motion.p>

            {/* Services List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                  Get Quote
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                  Let's Connect
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Image with floating elements */}
          <AnimatedSection animation="slideRight" className="relative">
            <motion.img
              src="/assets/assistantsmall.png"
              alt="Professional virtual receptionist with headset"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VirtualReceptionist;