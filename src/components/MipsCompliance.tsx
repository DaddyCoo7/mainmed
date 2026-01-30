import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket,
  Award,
  TrendingUp,
  Activity,
  Network
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const MipsCompliance: React.FC = () => {
  return (
    <section className="py-20 bg-medtransic-gradient relative overflow-hidden">
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          rotate: [0, -1, 0],
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-32 right-16 w-60 h-60 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with floating element */}
          <AnimatedSection animation="slideLeft" className="relative">
            <motion.img
              src="/compliance.png"
              alt="Healthcare professional analyzing compliance regulations and standards"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Floating "Boots MIPS Score" card */}
            <motion.div 
              className="absolute bottom-8 left-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center mb-3">
                <motion.div 
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-6 h-6 text-white" />
                </motion.div>
              </div>
              <h3 className="text-lg font-bold">Boots MIPS Score</h3>
            </motion.div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="slideRight" className="max-w-xl">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Expert MIPS Reporting & Compliance Solutions
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Are you unable to meet the requirements of MIPS 2025? Due to the 
              ongoing transformation of the Medicare value-based model, 
              healthcare professionals face a growing burden to meet challenging 
              MIPS requirements 2025 and perform correct MIPS quality reporting. 
              Our overall combination of MIPS Consulting Services in the USA involves 
              assisting you with this process, making sure your practice has the 
              ability to meet compliance requirements, not receive penalty 
              frameworks as well as to prime the practice in order to obtain optimal 
              performance incentives.
            </motion.p>

            {/* Services List */}
            <div className="space-y-4 mb-10">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-gray-700 font-medium text-lg">Quality Reporting</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Activity className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-gray-700 font-medium text-lg">Improvement Activities & Cost</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Network className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-gray-700 font-medium text-lg">Promoting Interoperability (PI)</span>
              </motion.div>
            </div>

            {/* CTA Button and Certification */}
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/services" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                  Explore MIPS Services
                </Link>
              </motion.div>
              
              {/* CMS Certification Badge */}
              <motion.div 
                className="relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center border-4 border-yellow-400 shadow-lg"
                  animate={{ boxShadow: ['0 0 20px rgba(255, 193, 7, 0.3)', '0 0 30px rgba(255, 193, 7, 0.5)', '0 0 20px rgba(255, 193, 7, 0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-center">
                    <div className="text-yellow-400 text-xs font-bold">CMS</div>
                    <div className="text-yellow-400 text-xs font-bold">Certified</div>
                    <div className="text-yellow-400 text-xs font-bold">Registry</div>
                  </div>
                </motion.div>
                {/* Badge ribbon effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-4 bg-yellow-400 rounded-b-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MipsCompliance;