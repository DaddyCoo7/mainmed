import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { RegionConfig } from '../config/regions';

interface RegionBannerProps {
  region: RegionConfig;
}

const RegionBanner: React.FC<RegionBannerProps> = ({ region }) => {
  if (region.code === 'us') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 mt-20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">
          You are viewing content for {region.name}
        </span>
      </div>
    </motion.div>
  );
};

export default RegionBanner;
