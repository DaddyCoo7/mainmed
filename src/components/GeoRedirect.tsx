import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import { detectUserLocation, shouldRedirect } from '../utils/geoDetection';
import { getRegionByCode } from '../config/regions';

const GeoRedirect: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [detectedRegion, setDetectedRegion] = useState<string | null>(null);
  const [suggestedPath, setSuggestedPath] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAndRedirect();
  }, []);

  const checkAndRedirect = async () => {
    const geoData = await detectUserLocation();
    if (!geoData) return;

    const redirect = shouldRedirect(location.pathname, geoData.detected_region);

    if (redirect.shouldRedirect) {
      setDetectedRegion(geoData.detected_region);
      setSuggestedPath(redirect.newPath);
      setShowModal(true);
    }
  };

  const handleAcceptRedirect = () => {
    if (suggestedPath) {
      sessionStorage.setItem('geoRedirected', 'true');
      navigate(suggestedPath);
      setShowModal(false);
    }
  };

  const handleDeclineRedirect = () => {
    sessionStorage.setItem('geoRedirected', 'true');
    setShowModal(false);
  };

  if (!detectedRegion) return null;

  const regionData = getRegionByCode(detectedRegion);

  return (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleDeclineRedirect}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Medtransic!
                </h3>
                <p className="text-gray-600">
                  We detected you're visiting from <span className="font-semibold">{regionData.name}</span>
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-900">
                  Would you like to view content specific to {regionData.name}? You'll see localized
                  contact information, job opportunities, and region-specific details.
                </p>
              </div>

              <div className="space-y-3">
                <motion.button
                  onClick={handleAcceptRedirect}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg"
                >
                  Yes, take me to {regionData.name} site
                </motion.button>

                <motion.button
                  onClick={handleDeclineRedirect}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold"
                >
                  No, stay on current site
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                You can change your region anytime using the region selector in the header
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GeoRedirect;
