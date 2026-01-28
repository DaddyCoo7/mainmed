import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { regions } from '../config/regions';

const RegionSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentRegion = () => {
    const path = location.pathname;
    if (path.startsWith('/pk')) return 'pk';
    if (path.startsWith('/ph')) return 'ph';
    return 'us';
  };

  const currentRegion = getCurrentRegion();
  const currentRegionData = regions[currentRegion];

  const handleRegionChange = (regionCode: string) => {
    localStorage.setItem('preferredRegion', regionCode);

    const currentPath = location.pathname;
    let newPath = currentPath;

    if (currentRegion !== 'us') {
      newPath = currentPath.replace(`/${currentRegion}`, '');
    }

    if (regionCode === 'us') {
      navigate(newPath || '/');
    } else {
      navigate(`/${regionCode}${newPath}`);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{currentRegionData.name}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 border-b border-gray-100 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-700">Select Your Region</h3>
              </div>

              <div className="py-2">
                {Object.values(regions).map((region) => (
                  <motion.button
                    key={region.code}
                    onClick={() => handleRegionChange(region.code)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{region.countryCode === 'US' ? '🇺🇸' : region.countryCode === 'PK' ? '🇵🇰' : '🇵🇭'}</div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">{region.name}</div>
                        <div className="text-xs text-gray-500">{region.phoneNumber}</div>
                      </div>
                    </div>
                    {currentRegion === region.code && (
                      <Check className="w-5 h-5 text-blue-600" />
                    )}
                  </motion.button>
                ))}
              </div>

              <div className="p-3 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-600 text-center">
                  Choose your region for localized content
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegionSwitcher;
