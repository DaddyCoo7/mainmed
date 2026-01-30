import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Zap,
  Target,
  Sparkles,
  TrendingDown,
  UserCheck,
  Wallet
} from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const AboutUsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const impactMetrics = [
    {
      icon: TrendingUp,
      value: 98,
      suffix: '%',
      label: 'First-Pass Claim Rate',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'Claims accepted on first submission'
    },
    {
      icon: TrendingDown,
      value: 45,
      suffix: '%',
      label: 'Denial Rate Reduction',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Fewer claim rejections and delays'
    },
    {
      icon: Clock,
      value: 30,
      suffix: ' Days',
      label: 'Faster Collections',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Accelerated payment cycles'
    },
    {
      icon: Wallet,
      value: 25,
      suffix: '%',
      label: 'Revenue Increase',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Average practice growth'
    }
  ];

  const valuePillars = [
    {
      icon: Zap,
      title: 'Technology-Driven',
      description: 'Advanced automation and AI-powered tools streamline every step of the revenue cycle'
    },
    {
      icon: UserCheck,
      title: 'Expert Oversight',
      description: 'Certified medical coders and billing specialists ensure accuracy and compliance'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Measurable improvements in collections, cash flow, and practice efficiency'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%'
        }}
      />

      {/* Floating logo watermarks */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-no-repeat bg-contain opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`,
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-no-repeat bg-contain opacity-5"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `url('/medtransic-logomark1.svg')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by Healthcare Providers Nationwide
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Practice's
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Financial Performance
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of comprehensive revenue cycle management that combines
            cutting-edge technology with expert human oversight to maximize your practice's revenue.
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className={`text-4xl lg:text-5xl font-bold ${metric.color} mb-2`}>
                {isInView && (
                  <AnimatedCounter
                    end={metric.value}
                    suffix={metric.suffix}
                    duration={2500}
                  />
                )}
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Visual Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/02_Your Comprehensive Medical Billing Partner.png"
                alt="The Revenue Cycle - Complete management from utilization review through collections"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete Revenue Cycle Management from Patient to Payment
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Medtransic, we handle every aspect of your revenue cycle with precision and transparency.
              From initial patient registration through final payment collection, our comprehensive approach
              ensures you get paid faster while reducing administrative burden.
            </p>

            {/* Value Pillars */}
            <div className="space-y-4 mb-8">
              {valuePillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="flex items-start group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </div>
                    <div className="text-gray-600">
                      {pillar.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-xl hover:shadow-2xl font-bold text-lg flex items-center justify-center group"
                >
                  Get Free RCM Analysis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-bold text-lg flex items-center justify-center"
                >
                  Learn Our Story
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;