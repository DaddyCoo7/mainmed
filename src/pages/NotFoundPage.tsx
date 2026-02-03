import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found - 404 Error"
        description="The page you are looking for could not be found. Explore our medical billing services and specialties."
        noindex={true}
      />

      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <FileQuestion className="w-24 h-24 mx-auto text-blue-600 dark:text-blue-400 mb-6" />
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <Home className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 dark:text-white">Go Home</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Return to homepage
              </span>
            </Link>

            <Link
              to="/services"
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <Search className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 dark:text-white">Our Services</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Browse all services
              </span>
            </Link>

            <Link
              to="/contact"
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <ArrowLeft className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 dark:text-white">Contact Us</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Get in touch
              </span>
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <Link
                to="/services/medical-billing"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Medical Billing
              </Link>
              <Link
                to="/services/denial-management"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Denial Management
              </Link>
              <Link
                to="/services/credentialing"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Credentialing
              </Link>
              <Link
                to="/specialties/cardiology"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Cardiology
              </Link>
              <Link
                to="/specialties/orthopedics"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Orthopedics
              </Link>
              <Link
                to="/pricing"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
