import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocationSchemaProps {
  locationName: string;
  locationType: 'city' | 'state';
  description: string;
  url: string;
  state?: string;
  city?: string;
}

const LocationSchema: React.FC<LocationSchemaProps> = ({
  locationName,
  locationType,
  description,
  url,
  state,
  city
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Medical Billing Services in ${locationName}`,
    description,
    url,
    serviceType: 'Medical Billing Services',
    provider: {
      '@type': 'MedicalBusiness',
      '@id': 'https://medtransic.com/#organization',
      name: 'Medtransic',
      url: 'https://medtransic.com',
      areaServed: {
        '@type': locationType === 'city' ? 'City' : 'State',
        name: locationName,
        ...(state && { containedInPlace: { '@type': 'State', name: state } })
      }
    },
    areaServed: {
      '@type': locationType === 'city' ? 'City' : 'State',
      name: locationName,
      ...(state && locationType === 'city' && {
        containedInPlace: {
          '@type': 'State',
          name: state
        }
      })
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Medical Billing Services in ${locationName}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Billing',
            description: `Professional medical billing services for ${locationName} healthcare providers`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Revenue Cycle Management',
            description: `Comprehensive RCM solutions for ${locationName} medical practices`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Medical Coding',
            description: `Expert medical coding services for ${locationName} providers`
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

export default LocationSchema;
