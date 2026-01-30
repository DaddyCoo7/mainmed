import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import RegionSwitcher from './RegionSwitcher';
import { Menu, X, Phone, Calendar, ArrowRight, Shield, Award, Calculator, FileText, Headphones, Search, TrendingUp, Truck, Scissors, Users, MessageCircle, Brain, Heart, Activity, Stethoscope, Star, Rocket, Globe, Palette, Share2, MapPin, Database, ChevronDown, ChevronRight, Target, BookOpen, HelpCircle, Video, CheckSquare, Building2, CircleUser as UserCircle, FileCheck, Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGigamenu, setActiveGigamenu] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      children: [
        {
          name: 'About Medtransic',
          href: '/about',
          icon: Building2,
          description: 'Learn about our mission, values, and commitment to excellence in healthcare revenue cycle management.'
        },
        {
          name: 'About the CEO',
          href: '/ceo',
          icon: UserCircle,
          description: 'Meet Nasar Haq, founder and CEO with extensive experience in healthcare technology and revenue cycle management.'
        },
        {
          name: 'About the Website Design',
          href: '/about-website-design',
          icon: Palette,
          description: 'Discover our intentional design philosophy focused on clarity, simplicity, and respecting your time.'
        }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      children: [
        {
          name: 'Outsourcing Medical Billing',
          href: '/services/outsourcing-medical-billing',
          icon: Globe,
          description: 'Reduce costs by 30-50% and increase revenue by 15-25% with expert outsourced billing services.'
        },
        {
          name: 'Medical Billing & RCM',
          href: '/services/rcm',
          icon: Calculator,
          description: 'Comprehensive revenue cycle management from patient registration to final payment collection.'
        },
        {
          name: 'Medical Coding',
          href: '/services/medical-coding',
          icon: FileText,
          description: 'Expert coding services to ensure accurate claims and maximize reimbursements.'
        },
        {
          name: 'Denial Management',
          href: '/services/denial-management',
          icon: Shield,
          description: 'Proactive denial management and appeals to recover lost revenue.'
        },
        {
          name: 'AR Management',
          href: '/services/ar-management',
          icon: TrendingUp,
          description: 'Optimize accounts receivable and accelerate payment collection.'
        },
        {
          name: 'Provider Credentialing',
          href: '/services/credentialing',
          icon: Award,
          description: 'Streamlined credentialing process to get you enrolled with insurance networks faster.'
        },
        {
          name: 'Payer Enrollment Services',
          href: '/services/payer-enrollment',
          icon: FileCheck,
          description: 'Fast-track insurance payer enrollment with Medicare, Medicaid, and commercial plans.'
        },
        {
          name: 'Virtual Receptionist',
          href: '/services/call-center-scheduling',
          icon: Headphones,
          description: 'Professional virtual receptionist services to enhance patient experience.'
        },
        {
          name: 'MIPS Compliance',
          href: '/services/mips-macra-reporting',
          icon: CheckSquare,
          description: 'Navigate MIPS requirements and maximize your quality payment program incentives.'
        },
        {
          name: 'Practice Launch',
          href: '/practice-launch',
          icon: Target,
          description: 'Complete practice setup services including credentialing, website development, EHR setup, and marketing to get you operational fast.'
        }
      ]
    },
    {
      name: 'RCM Technologies',
      href: '/aiphas',
      children: [
        {
          name: 'AIPHAS Platform',
          href: '/aiphas',
          icon: Zap,
          description: 'AI-powered healthcare audit and automation platform for intelligent revenue cycle management.'
        }
      ]
    },
    {
      name: 'Specialties',
      href: '/specialties',
      children: [
        {
          name: 'Urgent Care',
          href: '/specialties',
          icon: Truck,
          description: 'Specialized billing solutions for urgent care facilities with high-volume expertise.'
        },
        {
          name: 'Plastic Surgery',
          href: '/specialties',
          icon: Scissors,
          description: 'Navigate complex cosmetic and reconstructive surgery billing requirements.'
        },
        {
          name: 'Family Medicine',
          href: '/specialties',
          icon: Users,
          description: 'Comprehensive billing solutions tailored for family practice workflows.'
        },
        {
          name: 'Speech Therapy',
          href: '/specialties',
          icon: MessageCircle,
          description: 'Expert billing for speech-language pathology and communication disorders.'
        },
        {
          name: 'Mental Health',
          href: '/specialties',
          icon: Brain,
          description: 'Specialized billing for behavioral health and psychiatric services.'
        },
        {
          name: 'Cardiology',
          href: '/specialties',
          icon: Heart,
          description: 'Advanced cardiac care billing with expertise in complex procedures.'
        },
        {
          name: 'Physical Therapy',
          href: '/specialties',
          icon: Activity,
          description: 'Optimize rehabilitation and therapy billing for maximum reimbursement.'
        },
        {
          name: 'Internal Medicine',
          href: '/specialties',
          icon: Stethoscope,
          description: 'Streamline internal medicine billing processes and improve cash flow.'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      children: [
        {
          name: 'Medtransic Brochure',
          href: '/documents/medtransicprofile.pdf',
          icon: FileText,
          description: 'Download our comprehensive company profile and service overview.',
          external: true
        },
        {
          name: 'Billing Glossary',
          href: '/resources/billing-glossary',
          icon: BookOpen,
          description: 'Comprehensive glossary of medical billing and RCM terminology.'
        },
        {
          name: 'FAQ',
          href: '/faq',
          icon: HelpCircle,
          description: 'Answers to common questions about medical billing and RCM services.'
        },
        {
          name: 'Case Studies',
          href: '/resources',
          icon: CheckSquare,
          description: 'Real-world success stories from healthcare practices we serve.'
        },
        {
          name: 'Industry Guides',
          href: '/resources',
          icon: FileText,
          description: 'Expert guides on healthcare billing compliance and best practices.'
        },
        {
          name: 'HIPAA Compliance',
          href: '/hipaa-compliance',
          icon: Shield,
          description: 'Learn about our comprehensive HIPAA compliance and data security measures.'
        }
      ]
    },
    {
      name: 'Locations',
      href: '/locations',
      children: [
        {
          name: 'California',
          href: '/medical-billing-services/california',
          icon: MapPin,
          description: 'Expert medical billing services for healthcare providers throughout California.'
        },
        {
          name: 'Texas',
          href: '/medical-billing-services/texas',
          icon: MapPin,
          description: 'Comprehensive RCM solutions for Texas healthcare practices and facilities.'
        },
        {
          name: 'New York',
          href: '/medical-billing-services/new-york',
          icon: MapPin,
          description: 'Professional billing services for New York medical practices and hospitals.'
        },
        {
          name: 'Florida',
          href: '/medical-billing-services/florida',
          icon: MapPin,
          description: 'Specialized medical billing for Florida healthcare providers statewide.'
        },
        {
          name: 'Los Angeles, CA',
          href: '/medical-billing-services/california/los-angeles',
          icon: MapPin,
          description: 'Local medical billing expertise for Los Angeles area healthcare providers.'
        },
        {
          name: 'New York City, NY',
          href: '/medical-billing-services/new-york/new-york-city',
          icon: MapPin,
          description: 'Dedicated billing services for NYC medical practices and specialists.'
        },
        {
          name: 'Houston, TX',
          href: '/medical-billing-services/texas/houston',
          icon: MapPin,
          description: 'Houston-focused medical billing solutions with local market expertise.'
        },
        {
          name: 'Chicago, IL',
          href: '/medical-billing-services/illinois/chicago',
          icon: MapPin,
          description: 'Chicago medical billing services with deep local healthcare knowledge.'
        },
        {
          name: 'Miami, FL',
          href: '/medical-billing-services/florida/miami',
          icon: MapPin,
          description: 'Expert billing services for Miami healthcare providers and specialists.'
        }
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  const handleGigamenuEnter = (itemName: string) => {
    setActiveGigamenu(itemName);
  };

  const handleGigamenuLeave = () => {
    setActiveGigamenu(null);
  };

  const toggleMobileSubmenu = (itemName: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === itemName ? null : itemName);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 dark:border-gray-700/50 shadow-medium"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8 pl-2 sm:pl-3 lg:pl-4">
          <div className="flex items-center h-20 gap-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 -ml-[200px]"
            >
              <Link to="/" className="flex items-center">
                <img
                  src={isDarkMode ? "/logo_png_dark_white_text.png" : "/medtransiclogolightbk.png"}
                  alt="Medtransic Logo"
                  className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation with Gigamenu */}
            <nav className="hidden xl:flex items-center space-x-[0.175rem] flex-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => item.children && handleGigamenuEnter(item.name)}
                  onMouseLeave={() => item.children && handleGigamenuLeave()}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Link
                    to={item.href}
                    className="relative px-5 py-2.5 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm flex items-center rounded-full group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
                    <span className="relative z-10 flex items-center">
                      {item.name}
                      {item.children && (
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </span>
                  </Link>

                  {/* Gigamenu Panel */}
                  {item.children && (
                    <AnimatePresence>
                      {activeGigamenu === item.name && (
                        <motion.div
                         className={`absolute top-full mt-2 w-screen max-w-xl rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 z-50 ${
                           item.alignRight ? 'right-0' : 'left-1/2 transform -translate-x-1/2'
                         }`}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                         <div className="grid grid-cols-2 gap-3">
                            {item.children.map((child, childIndex) => (
                              <motion.div
                                key={child.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: childIndex * 0.05 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                {child.external ? (
                                  <a
                                    href={child.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-gray-700/50 border border-transparent hover:border-blue-200 dark:hover:border-gray-600 transition-all duration-200 group"
                                    onClick={() => setActiveGigamenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                      <child.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                                        {child.name}
                                      </h3>
                                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {child.description}
                                      </p>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 mt-1" />
                                  </a>
                                ) : (
                                  <Link
                                    to={child.href}
                                    className="flex items-start p-3 rounded-lg hover:bg-blue-50/50 dark:hover:bg-gray-700/50 border border-transparent hover:border-blue-200 dark:hover:border-gray-600 transition-all duration-200 group"
                                    onClick={() => setActiveGigamenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                                      <child.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                                        {child.name}
                                      </h3>
                                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {child.description}
                                      </p>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 mt-1" />
                                  </Link>
                                )}
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Gigamenu Footer */}
                         <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                               <Shield className="w-3 h-3 text-blue-600 dark:text-blue-400 mr-1" />
                               <span className="text-xs font-medium text-gray-700 dark:text-gray-300">HIPAA Compliant</span>
                              </div>
                              <div className="flex items-center">
                               <Award className="w-3 h-3 text-green-600 dark:text-green-400 mr-1" />
                               <span className="text-xs font-medium text-gray-700 dark:text-gray-300">SOC 2 Certified</span>
                              </div>
                            </div>
                            <Link
                              to={item.name === 'Specialties' ? '/specialties' : item.name === 'Locations' ? '/locations' : item.name === 'RCM Technologies' ? '/aiphas' : item.href}
                             className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center"
                              onClick={() => setActiveGigamenu(null)}
                            >
                              {item.name === 'Specialties' ? 'View All Specialties' : item.name === 'Locations' ? 'View All Locations' : item.name === 'RCM Technologies' ? 'Explore AIPHAS' : 'View All Services'}
                             <ArrowRight className="w-2 h-2 ml-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
              <RegionSwitcher />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-glow hover:shadow-premium transition-all duration-300 font-bold flex items-center group"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Get in Touch</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden relative w-10 h-10 flex-shrink-0 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 xl:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
                  <img
                    src={isDarkMode ? "/logo_png_dark_white_text.png" : "/medtransiclogolightbk.png"}
                    alt="Medtransic Logo"
                    className="h-6 w-auto"
                  />
                  <motion.button
                    onClick={closeMenu}
                    className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.button>
                </div>

                {/* Trust Badges */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">HIPAA</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">SOC 2</span>
                    </div>
                  </div>
                </div>

                {/* Region Switcher and Theme Toggle */}
                <div className="mb-8 flex justify-center items-center gap-3">
                  <RegionSwitcher />
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle dark mode"
                  >
                    {isDarkMode ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-700" />
                    )}
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2 mb-8">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium text-lg"
                          >
                            <span>{item.name}</span>
                            <ChevronRight 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeMobileSubmenu === item.name ? 'rotate-90' : ''
                              }`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {activeMobileSubmenu === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {item.children.map((child, childIndex) => (
                                  <motion.div
                                    key={child.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: childIndex * 0.05 }}
                                  >
                                    <Link
                                      to={child.href}
                                      className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 text-sm"
                                      onClick={closeMenu}
                                    >
                                      <child.icon className="w-4 h-4 mr-3" />
                                      {child.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium text-lg group"
                          onClick={closeMenu}
                        >
                          <div className="flex items-center justify-between">
                            {item.name}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
                
                {/* Mobile CTA Buttons */}
                <div className="space-y-4">
                  <motion.a
                    href="tel:+1-888-777-0860"
                    className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-4 rounded-xl transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl transition-all duration-200 shadow-lg font-semibold text-lg flex items-center justify-center group"
                      onClick={closeMenu}
                    >
                      <Calendar className="w-5 h-5 mr-3" />
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">Need immediate assistance?</p>
                  <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">+1 (888) 777-0860</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;