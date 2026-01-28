import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  url: string;
  icon?: LucideIcon;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({
  services,
  title = "Related Services"
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Link
              to={service.url}
              className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-green-600 transform group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
