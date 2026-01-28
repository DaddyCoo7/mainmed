import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface Button {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroSectionProps {
  badge?: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  description: string;
  buttons?: Button[];
  stats?: Stat[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  buttons = [],
  stats = []
}) => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.01] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent dark:from-slate-950 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 dark:border-blue-500/10 rounded-full px-6 py-2 mb-6">
              <badge.icon className="w-5 h-5 text-blue-400 dark:text-blue-300" />
              <span className="text-blue-300 dark:text-blue-200 font-medium">{badge.text}</span>
            </div>
          )}

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-emerald-200 dark:from-gray-100 dark:via-blue-300 dark:to-emerald-300">
            {title}
          </h1>

          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 leading-relaxed">
            {description}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {buttons.map((button, index) => (
                button.variant === 'primary' ? (
                  <Link
                    key={index}
                    to={button.href}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 group"
                  >
                    {button.text}
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    key={index}
                    to={button.href}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-white dark:text-gray-200 rounded-full font-semibold hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/20 dark:border-white/10"
                  >
                    {button.text}
                  </Link>
                )
              ))}
            </div>
          )}

          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-white/5"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 dark:text-blue-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white dark:text-gray-100 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 dark:text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
