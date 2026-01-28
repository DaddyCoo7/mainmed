import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Settings, 
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: Users,
      title: 'Dedicated Partnership',
      description: 'Every practice receives a dedicated account manager who becomes an expert in your unique workflows, challenges, and goals, ensuring personalized solutions that drive results.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Settings,
      title: 'Seamless Integration',
      description: 'Our advanced technology platform integrates effortlessly with your existing EHR and practice management systems, creating a unified workflow that eliminates data silos and reduces errors.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready Solutions',
      description: 'We proactively monitor healthcare regulations and payer policy changes, automatically updating our processes to keep your practice compliant and optimized for maximum reimbursement.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          x: [0, 10, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-32 left-16 w-48 h-48 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
        <div className="absolute bottom-24 right-20 w-36 h-36 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <AnimatedSection animation="slideLeft">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                Why Healthcare Providers Choose Medtransic as Their Trusted RCM Partner
              </h2>
            </AnimatedSection>
            
            <div className="space-y-10">
              {advantages.map((advantage, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="slideLeft" 
                  delay={index * 0.2}
                >
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`${advantage.bgColor} ${advantage.borderColor} w-16 h-16 rounded-2xl border-2 flex items-center justify-center mr-6 flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                    </motion.div>
                    <div>
                      <h3 className={`text-xl font-bold mb-3 ${advantage.color}`}>
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Image */}
          <AnimatedSection animation="slideRight" className="relative">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.6 }}
            >
            <img
              src="/doctors_copy.png"
              alt="Healthcare professional consulting with patient"
              className="w-full h-auto rounded-2xl shadow-large"
              loading="lazy"
            />
            </motion.div>
            
            {/* Floating Quality Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </motion.div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Quality</div>
                  <div className="text-lg font-bold text-gray-900">Assurance</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;