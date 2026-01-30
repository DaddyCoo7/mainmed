import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, Users, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CEOPage: React.FC = () => {
  const achievements = [
    {
      icon: CheckCircle,
      stat: '98%',
      description: 'First submission acceptance rate',
    },
    {
      icon: TrendingUp,
      stat: '45%',
      description: 'Reduction in denial rates',
    },
    {
      icon: Users,
      stat: '30 Days',
      description: 'Average collections completion',
    },
    {
      icon: Award,
      stat: '25%',
      description: 'Average revenue growth for practices',
    },
  ];

  const experience = [
    {
      company: 'Medtransic',
      role: 'Founder & CEO',
      year: '2025 - Present',
    },
    {
      company: 'Nexlinx Networks',
      role: 'Director & Chief Marketing Officer',
      year: 'Previous',
    },
    {
      company: 'Smartpack',
      role: 'Leadership Role',
      year: 'Previous',
    },
    {
      company: 'Neotex',
      role: 'Leadership Role',
      year: 'Previous',
    },
    {
      company: 'MCI WorldCom',
      role: 'Internet Specialist',
      year: 'Previous',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <SEOHead
        title="Meet Our CEO | Healthcare RCM Leadership | Medtransic"
        description="Meet the Medtransic CEO and learn about our company leadership, vision for healthcare revenue cycle management, and commitment to transforming medical billing services."
        canonical="https://medtransic.com/ceo"
        keywords="CEO, company leadership, about our CEO, executive team, healthcare leadership, RCM vision"
        ogType="website"
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Meet Our CEO
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/nasar_haq_pic.jpg"
                  alt="Nasar Haq - CEO of Medtransic"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-2">Nasar Haq</h2>
                <p className="text-xl text-teal-100">Founder & CEO, Medtransic</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About the CEO</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nasar Haq is the founder and CEO of Medtransic, a role he assumed in 2025 after more than two decades of leadership in technology and telecommunications. Holding a Bachelor of Business Administration from The George Washington University – School of Business, Nasar has guided companies ranging from Nexlinx Networks, where he served as director and chief marketing officer, to Smartpack and Neotex. His early work in enterprise network infrastructure at MCI WorldCom provided a foundation in systems reliability and operational excellence.
                  </p>
                  <p>
                    This diverse experience building and managing successful enterprises underpins his commitment to excellence at Medtransic.
                  </p>
                  <p>
                    At Medtransic, Nasar blends advanced automation and AI-powered tools with expert human oversight to streamline revenue cycle management for healthcare providers. Under his leadership the company delivers impressive results—claims are accepted on the first submission 98% of the time, denial rates are reduced by 45%, collections are completed in about 30 days, and practices see average revenue growth of 25%.
                  </p>
                  <p>
                    Nasar emphasises seamless integration with existing systems and future-ready solutions that adapt to changing regulations, while ensuring each client enjoys a dedicated partnership built on responsiveness and transparency.
                  </p>
                  <p className="font-semibold text-gray-900">
                    This combination of deep experience, innovative vision and measurable results helps Medtransic earn the trust of healthcare providers nationwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Results Under Leadership
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <achievement.icon className="w-10 h-10 text-teal-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.stat}
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Professional Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 border-l-4 border-teal-600"
                >
                  <p className="text-sm text-teal-600 font-semibold mb-1">{exp.year}</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-12 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">
                Transforming Healthcare Revenue Cycle Management
              </h3>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                Through innovation, dedication, and a commitment to excellence, Nasar Haq continues to lead Medtransic in revolutionizing how healthcare providers manage their revenue cycles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CEOPage;
