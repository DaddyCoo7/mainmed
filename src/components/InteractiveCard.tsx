import React from 'react';
import { motion } from 'framer-motion';
import { Video as LucideIcon, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface InteractiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  iconColor?: string;
  iconBgColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  linkTo?: string;
  variant?: 'blue' | 'emerald' | 'amber' | 'gradient';
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  icon: Icon,
  title,
  description,
  features = [],
  className = '',
  iconColor = 'text-blue-600',
  iconBgColor = 'bg-blue-50',
  onClick,
  children,
  linkTo,
  variant = 'blue',
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (linkTo) {
      navigate(linkTo);
    }
  };
  const variantStyles = {
    blue: {
      bg: 'bg-gradient-to-br from-white via-blue-50/40 to-blue-100/30 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/80',
      border: 'border-blue-200/50 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      glow: 'hover:shadow-glow dark:hover:shadow-glow-dark',
      accent: 'bg-blue-500 dark:bg-blue-600'
    },
    emerald: {
      bg: 'bg-gradient-to-br from-white via-emerald-50/40 to-emerald-100/30 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/80',
      border: 'border-emerald-200/50 hover:border-emerald-400 dark:border-gray-700 dark:hover:border-emerald-600',
      iconBg: 'bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      glow: 'hover:shadow-glow-emerald dark:hover:shadow-glow-dark',
      accent: 'bg-emerald-500 dark:bg-emerald-600'
    },
    amber: {
      bg: 'bg-gradient-to-br from-white via-amber-50/40 to-amber-100/30 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/80',
      border: 'border-amber-200/50 hover:border-amber-400 dark:border-gray-700 dark:hover:border-amber-600',
      iconBg: 'bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50',
      iconColor: 'text-amber-600 dark:text-amber-400',
      glow: 'hover:shadow-glow-amber dark:hover:shadow-glow-dark',
      accent: 'bg-amber-500 dark:bg-amber-600'
    },
    gradient: {
      bg: 'bg-gradient-to-br from-blue-50/60 via-emerald-50/40 to-blue-100/30 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/80',
      border: 'border-blue-200/50 hover:border-emerald-400 dark:border-gray-700 dark:hover:border-emerald-600',
      iconBg: 'bg-gradient-to-br from-blue-100 via-emerald-100 to-blue-200 dark:from-blue-900/50 dark:via-emerald-900/50 dark:to-blue-800/50',
      iconColor: 'text-blue-600 dark:text-blue-400',
      glow: 'hover:shadow-premium dark:hover:shadow-glow-dark',
      accent: 'bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-600 dark:to-emerald-600'
    }
  };

  const style = variantStyles[variant];

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -12,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`${style.bg} rounded-3xl p-8 shadow-soft border-2 ${style.border} ${style.glow} backdrop-blur-sm cursor-pointer transition-all duration-500 flex flex-col relative overflow-hidden group ${className}`}
      onClick={handleCardClick}
    >
      {/* Decorative accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${style.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

      {/* Decorative sparkle effect */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className={`w-5 h-5 ${style.iconColor}`} />
      </motion.div>

      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className={`${style.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center shadow-medium relative overflow-hidden group/icon`}
        >
          {/* Icon glow effect */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
          <Icon className={`w-10 h-10 ${style.iconColor} relative z-10`} />
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 dark:group-hover:from-blue-400 dark:group-hover:to-emerald-400">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-center text-base">
        {description}
      </p>

      {features && features.length > 0 && (
        <div className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start group/feature"
            >
              <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 group-hover/feature:scale-110 transition-transform duration-200" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-auto text-center pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
        {children || (linkTo && (
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={linkTo} className={`${style.iconColor} font-bold hover:opacity-80 transition-all flex items-center justify-center text-base group/link`}>
              Learn More About {title}
              <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InteractiveCard;