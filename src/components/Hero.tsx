import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Star, Shield, Clock, Zap, Target, Calendar, Calculator, Headphones, DollarSign, FileText, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const heroSlides = [
    {
      url: '/medium-vecteezy_female-medical-receptionist-in-blue-scrubs-answers-phone_65453150_medium.jpg',
      alt: 'Medical receptionist managing patient communications',
      trustBadgeText: 'Complete RCM Solutions Provider',
      headlinePrimary: 'Complete Revenue',
      headlineSecondary: 'Cycle Management',
      headlineTertiary: 'Solutions',
      valueProposition: 'End-to-end RCM services that maximize collections and reduce administrative burden. From patient registration to final payment, we handle it all.',
      stat1Value: 98,
      stat1Suffix: '%',
      stat1Label: 'First-Pass Rate',
      stat1Color: 'text-green-400',
      stat2Value: 25,
      stat2Suffix: '%',
      stat2Label: 'Revenue Increase',
      stat2Color: 'text-blue-400',
      cta1Text: 'Get RCM Analysis',
      cta1Link: '/services/medical-billing',
      cta1Icon: Calculator,
      cta2Text: 'Contact Us',
      cta2Link: '/contact'
    },
    {
      url: '/medium-vecteezy_portrait-of-smiling-doctor-in-uniform-standing-in-medicine_47262856_medium.jpg',
      alt: 'Professional doctor in medical uniform ready to serve',
      trustBadgeText: 'Fast Provider Credentialing',
      headlinePrimary: 'Provider',
      headlineSecondary: 'Credentialing',
      headlineTertiary: 'Experts',
      valueProposition: 'Get credentialed with insurance networks faster. Federal insurance in 30-35 days, commercial insurance in 70-80 days.',
      stat1Value: 35,
      stat1Suffix: ' Days',
      stat1Label: 'Federal Insurance',
      stat1Color: 'text-green-400',
      stat2Value: 80,
      stat2Suffix: ' Days',
      stat2Label: 'Commercial Insurance',
      stat2Color: 'text-blue-400',
      cta1Text: 'Start Credentialing',
      cta1Link: '/services/credentialing',
      cta1Icon: Shield,
      cta2Text: 'Contact Us',
      cta2Link: '/contact'
    },
    {
      url: '/medtransicva.jpg',
      alt: 'Virtual medical assistant providing telemedicine support',
      trustBadgeText: 'Professional Virtual Assistants',
      headlinePrimary: 'Virtual',
      headlineSecondary: 'Medical',
      headlineTertiary: 'Assistants',
      valueProposition: 'Professional virtual receptionists and medical assistants to handle scheduling, insurance verification, and patient communications.',
      stat1Value: 60,
      stat1Suffix: '%',
      stat1Label: 'Cost Reduction',
      stat1Color: 'text-green-400',
      stat2Value: 24,
      stat2Suffix: '/7',
      stat2Label: 'Support Available',
      stat2Color: 'text-blue-400',
      cta1Text: 'Hire Virtual Staff',
      cta1Link: '/services/virtual-assistants',
      cta1Icon: Headphones,
      cta2Text: 'Contact Us',
      cta2Link: '/contact',
      flipImage: true
    },
    {
      url: '/medium-vecteezy_doctor-assistant-in-uniform-working-on-laptop-in-modern_46870005_medium.jpg',
      alt: 'Medical professional working on laptop with medical charts',
      trustBadgeText: 'Medical Coding Excellence',
      headlinePrimary: 'Expert Medical',
      headlineSecondary: 'Coding &',
      headlineTertiary: 'Billing',
      valueProposition: 'Certified medical coders ensure accurate ICD-10, CPT, and HCPCS coding for maximum reimbursement and compliance.',
      stat1Value: 99,
      stat1Suffix: '%',
      stat1Label: 'Coding Accuracy',
      stat1Color: 'text-green-400',
      stat2Value: 40,
      stat2Suffix: '%',
      stat2Label: 'Denial Reduction',
      stat2Color: 'text-blue-400',
      cta1Text: 'Improve Coding',
      cta1Link: '/services/medical-coding',
      cta1Icon: FileText,
      cta2Text: 'Contact Us',
      cta2Link: '/contact'
    },
    {
      url: '/medium-vecteezy_an-empty-waiting-room-with-chairs-and-a-clock_70594850_medium.jpg',
      alt: 'Healthcare provider consulting with patient',
      trustBadgeText: 'Practice Launch Solutions',
      headlinePrimary: 'Launch Your',
      headlineSecondary: 'Medical',
      headlineTertiary: 'Practice',
      valueProposition: 'Complete practice setup services including credentialing, website development, EHR setup, and marketing to get you operational fast.',
      stat1Value: 8,
      stat1Suffix: ' Weeks',
      stat1Label: 'Average Launch',
      stat1Color: 'text-green-400',
      stat2Value: 50,
      suffix: '+',
      stat2Label: 'Practices Launched',
      stat2Color: 'text-blue-400',
      cta1Text: 'Launch Practice',
      cta1Link: '/practice-launch',
      cta1Icon: Target,
      cta2Text: 'Call Now',
      cta2Link: 'tel:+1-888-777-0860'
    },
    {
      url: '/dentist.jpg',
      alt: 'Modern dental practice with advanced equipment',
      trustBadgeText: 'Dental Practice Billing Experts',
      headlinePrimary: 'Expert Dental',
      headlineSecondary: 'Practice',
      headlineTertiary: 'Billing',
      valueProposition: 'Specialized billing services for dental practices including CDT coding, insurance verification, and claim management for all procedures.',
      stat1Value: 96,
      stat1Suffix: '%',
      stat1Label: 'Clean Claim Rate',
      stat1Color: 'text-green-400',
      stat2Value: 30,
      stat2Suffix: '%',
      stat2Label: 'Revenue Boost',
      stat2Color: 'text-blue-400',
      cta1Text: 'Get Dental Billing',
      cta1Link: '/specialties/dental',
      cta1Icon: FileText,
      cta2Text: 'Contact Us',
      cta2Link: '/contact',
      flipImage: true
    }
  ];

  const currentSlide = heroSlides[activeSlideIndex];

  const keyStats = [
    {
      icon: TrendingUp,
      value: currentSlide.stat1Value,
      suffix: currentSlide.stat1Suffix,
      label: currentSlide.stat1Label,
      color: currentSlide.stat1Color,
    },
    {
      icon: Users,
      value: currentSlide.stat2Value,
      suffix: currentSlide.stat2Suffix,
      label: currentSlide.stat2Label,
      color: currentSlide.stat2Color,
    },
  ];

  return (
    <section
      id="home"
      className="relative h-[780px] sm:h-[910px] lg:h-[975px] flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Full-width Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          speed={800}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !scale-125',
          }}
          navigation={false}
          className="w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-top"
                  style={slide.flipImage ? { transform: 'scaleX(-1)' } : undefined}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 via-blue-900/15 to-transparent dark:from-slate-950/40 dark:via-blue-950/25"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Subtle text readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-blue-900/10 to-transparent dark:from-slate-950/55 dark:via-blue-950/20 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent dark:from-slate-950/30 z-10"></div>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="w-full max-w-2xl">
            {/* Trust Badge */}
            <AnimatedSection key={`trust-${activeSlideIndex}`} animation="slideUp" delay={0.1}>
              <motion.div
                className="inline-flex items-center px-4 py-3 sm:px-7 sm:py-4 rounded-full bg-gradient-to-r from-white/15 to-white/5 dark:from-white/10 dark:to-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 mb-4 sm:mb-6 lg:mb-8 shadow-premium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(255, 255, 255, 0.25)',
                  y: -3
                }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mr-3 sm:mr-4 flex-shrink-0" />
                </div>
                <span className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-wide">
                  {currentSlide.trustBadgeText}
                </span>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 ml-3 sm:ml-4" />
                </motion.div>
              </motion.div>
            </AnimatedSection>
            
            {/* Main Headline */}
            <AnimatedSection key={`headline-${activeSlideIndex}`} animation="slideUp" delay={0.3}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-gray-100 mb-4 sm:mb-6 lg:mb-8 leading-tight break-words">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block"
                >
                  {currentSlide.headlinePrimary}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="block"
                >
                  {currentSlide.headlineSecondary}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="block"
                >
                  {currentSlide.headlineTertiary}
                </motion.span>
              </h1>
            </AnimatedSection>
            
            {/* Value Proposition */}
            <AnimatedSection key={`value-${activeSlideIndex}`} animation="slideUp" delay={0.6}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 dark:text-gray-300 mb-6 sm:mb-8 lg:mb-12 leading-relaxed font-medium">
                {currentSlide.valueProposition}
              </p>
            </AnimatedSection>

            {/* Animated Statistics */}
            <AnimatedSection key={`stats-${activeSlideIndex}`} animation="slideUp" delay={0.8}>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-10 lg:mb-16">
                {keyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 dark:border-white/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-300 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection key={`cta-${activeSlideIndex}`} animation="slideUp" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link to={currentSlide.cta1Link} className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full shadow-premium font-bold text-base sm:text-lg lg:text-xl flex items-center justify-center group transition-all duration-300">
                    <currentSlide.cta1Icon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4" />
                    <span>{currentSlide.cta1Text}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 sm:ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link to={currentSlide.cta2Link} className="relative border-3 border-white/60 dark:border-white/40 text-white dark:text-gray-100 px-7 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full hover:bg-white hover:text-slate-900 dark:hover:text-slate-900 hover:border-white transition-all duration-500 font-bold text-base sm:text-lg lg:text-xl flex items-center justify-center backdrop-blur-md shadow-medium overflow-hidden group">
                    <div className="absolute inset-0 bg-white dark:bg-gray-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative z-10">{currentSlide.cta2Text}</span>
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 2rem !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }
        
        .swiper-pagination-bullet {
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet:hover {
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;