import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  provider?: {
    name: string;
    url: string;
  };
  areaServed?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  };
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  url,
  serviceType = 'Medical Service',
  provider = {
    name: 'Medtransic',
    url: 'https://medtransic.com'
  },
  areaServed = 'United States',
  offers
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'MedicalBusiness',
      '@id': 'https://medtransic.com/#organization',
      name: provider.name,
      url: provider.url
    },
    areaServed: {
      '@type': areaServed === 'United States' ? 'Country' : 'State',
      name: areaServed
    },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
