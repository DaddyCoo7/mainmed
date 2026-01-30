import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SpecialtySchemaProps {
  specialtyName: string;
  description: string;
  url: string;
  medicalSpecialty?: string;
}

const SpecialtySchema: React.FC<SpecialtySchemaProps> = ({
  specialtyName,
  description,
  url,
  medicalSpecialty
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${specialtyName} Medical Billing Services - Medtransic`,
    description,
    url,
    ...(medicalSpecialty && {
      medicalSpecialty: {
        '@type': 'MedicalSpecialty',
        name: medicalSpecialty
      }
    }),
    provider: {
      '@type': 'MedicalBusiness',
      '@id': 'https://medtransic.com/#organization',
      name: 'Medtransic',
      url: 'https://medtransic.com'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${specialtyName} Billing Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${specialtyName} Medical Billing`,
            serviceType: 'Medical Billing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${specialtyName} Medical Coding`,
            serviceType: 'Medical Coding'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${specialtyName} Revenue Cycle Management`,
            serviceType: 'RCM Services'
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SpecialtySchema;
