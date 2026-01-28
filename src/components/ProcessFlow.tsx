import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Shield,
  FileText,
  Code,
  Send,
  AlertTriangle,
  CreditCard,
  TrendingDown,
  BarChart3,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const stepsPerPage = 5;

  const steps = [
    {
      icon: Users,
      title: 'Patient Registration/Scheduling',
      description: 'Accurate patient information capture during initial interaction.',
      details: 'Accurate patient information is captured during the initial interaction, including demographics and insurance details.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Shield,
      title: 'Insurance Verification',
      description: 'Verifying patient insurance eligibility and benefits before services.',
      details: 'Verifying patient insurance eligibility and benefits before services are rendered is crucial to ensure proper coverage.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: FileText,
      title: 'Charge Capture',
      description: 'Ensuring all services rendered are accurately coded and documented.',
      details: 'Ensuring all services rendered are accurately coded and documented for billing purposes.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Code,
      title: 'Medical Coding',
      description: 'Assigning appropriate medical codes to diagnoses and procedures.',
      details: 'Assigning appropriate medical codes (ICD, CPT, HCPCS) to diagnoses and procedures.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Send,
      title: 'Claim Submission',
      description: 'Submitting claims to payers and government programs.',
      details: 'Submitting claims to payers (insurance companies or government programs).',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: AlertTriangle,
      title: 'Denial Management',
      description: 'Identifying, analyzing, and appealing denied claims.',
      details: 'Identifying, analyzing, and appealing denied claims to maximize reimbursement.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: CreditCard,
      title: 'Payment Posting',
      description: 'Accurately posting payments received from payers and patients.',
      details: 'Accurately posting payments received from payers and patients.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: TrendingDown,
      title: 'A/R Management',
      description: 'Managing outstanding patient balances and ensuring timely collections.',
      details: 'Managing outstanding patient balances and ensuring timely collections.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: BarChart3,
      title: 'Reporting and Analytics',
      description: 'Analyzing RCM data to identify trends and optimize performance.',
      details: 'Analyzing RCM data to identify trends, improve processes, and optimize financial performance.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  const handlePrev = () => {
    const newIndex = Math.max(0, currentSlideIndex - 1);
    setCurrentSlideIndex(newIndex);
    
    // Adjust activeStep if it's outside the visible range
    if (activeStep < newIndex || activeStep >= newIndex + stepsPerPage) {
      setActiveStep(newIndex);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, steps.length - stepsPerPage);
    const newIndex = Math.min(maxIndex, currentSlideIndex + 1);
    setCurrentSlideIndex(newIndex);
    
    // Adjust activeStep if it's outside the visible range
    if (activeStep < newIndex || activeStep >= newIndex + stepsPerPage) {
      setActiveStep(newIndex);
    }
  };

  const visibleSteps = steps.slice(currentSlideIndex, currentSlideIndex + stepsPerPage);

  return (
    <section className="py-24 bg-medtransic-gradient-reverse relative">
      {/* Logo background overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-no-repeat bg-contain" style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`
        }}></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Seamless RCM Process
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A proven, systematic approach to revenue cycle management that maximizes 
            collections while minimizing administrative burden.
          </motion.p>
        </AnimatedSection>

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-28 left-20 right-20 h-1 bg-gradient-to-r from-medtransic-primary/30 via-medtransic-primary/50 to-medtransic-primary/30 rounded-full z-0"></div>
            
            {/* Navigation Buttons */}
            <motion.button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              whileHover={{ scale: currentSlideIndex === 0 ? 1 : 1.1 }}
              whileTap={{ scale: currentSlideIndex === 0 ? 1 : 0.95 }}
              className={`absolute -left-20 top-28 z-20 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                currentSlideIndex === 0
                  ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                  : 'bg-white text-medtransic-primary hover:bg-medtransic-light-blue hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={currentSlideIndex >= steps.length - stepsPerPage}
              whileHover={{ scale: currentSlideIndex >= steps.length - stepsPerPage ? 1 : 1.1 }}
              whileTap={{ scale: currentSlideIndex >= steps.length - stepsPerPage ? 1 : 0.95 }}
              className={`absolute -right-20 top-28 z-20 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                currentSlideIndex >= steps.length - stepsPerPage
                  ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                  : 'bg-white text-medtransic-primary hover:bg-medtransic-light-blue hover:scale-110'
              }`}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-5 gap-8 items-start">
              {visibleSteps.map((step, index) => {
                const actualIndex = currentSlideIndex + index;
                return (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => setActiveStep(actualIndex)}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-24 h-24 rounded-full border-3 ${
                      activeStep === actualIndex 
                        ? 'bg-medtransic-primary border-medtransic-secondary shadow-xl scale-110' 
                        : 'bg-medtransic-light-blue border-medtransic-primary/20 hover:border-medtransic-primary hover:shadow-lg'
                    } transition-all duration-300 flex items-center justify-center mb-8 group`}
                  >
                    <motion.div
                      animate={activeStep === actualIndex ? { rotate: [0, 360] } : {}}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    >
                      <step.icon className={`w-10 h-10 ${
                      activeStep === actualIndex ? 'text-white' : 'text-medtransic-primary/70 group-hover:text-medtransic-primary'
                    } transition-colors duration-300`} />
                    </motion.div>
                  </motion.button>
                  
                  <div className="text-center">
                    <motion.h3 
                      className={`text-xl font-bold mb-3 ${
                      activeStep === actualIndex ? 'text-medtransic-secondary' : 'text-gray-700'
                    } leading-tight`}
                      animate={activeStep === actualIndex ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
              })}
            </div>

          </div>

          {/* Active Step Details */}
          <motion.div 
            className="mt-24 bg-gradient-to-br from-white via-medtransic-light-blue/30 to-medtransic-off-white rounded-3xl p-12 shadow-xl border border-medtransic-primary/10"
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start">
              <motion.div 
                className="bg-medtransic-light-blue w-24 h-24 rounded-3xl flex items-center justify-center mr-10 border-2 border-medtransic-primary/20"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {React.createElement(steps[activeStep].icon, { className: 'w-12 h-12 text-medtransic-primary' })}
              </motion.div>
              <div>
                <motion.h3 
                  className="text-4xl font-bold text-medtransic-secondary mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {steps[activeStep].title}
                </motion.h3>
                <motion.p 
                  className="text-xl text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {steps[activeStep].details}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.1}
            >
              <motion.div 
                className="bg-gradient-to-br from-white via-medtransic-light-blue/20 to-medtransic-off-white rounded-2xl p-8 shadow-lg border border-medtransic-primary/10"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
              <div className="flex items-start">
                <motion.div 
                  className="bg-medtransic-light-blue w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-medtransic-primary/20"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8 text-medtransic-primary" />
                </motion.div>
                <div>
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-semibold text-medtransic-primary mr-3">Step {index + 1}</span>
                    <CheckCircle className="w-5 h-5 text-medtransic-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-medtransic-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;