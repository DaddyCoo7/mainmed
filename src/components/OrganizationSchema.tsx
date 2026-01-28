import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrganizationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://medtransic.com/#organization',
    name: 'Medtransic',
    alternateName: 'Medtransic Medical Billing Services',
    url: 'https://medtransic.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://medtransic.com/medtransic-logomark1.svg',
      width: '600',
      height: '600'
    },
    description: 'Professional medical billing, coding, and revenue cycle management services for healthcare providers. Specializing in RCM solutions, denial management, credentialing, and practice management for all medical specialties.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-888-777-0860',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.linkedin.com/company/medtransic',
      'https://www.facebook.com/medtransic',
      'https://twitter.com/medtransic'
    ],
    foundingDate: '2020',
    knowsAbout: [
      'Medical Billing',
      'Revenue Cycle Management',
      'Medical Coding',
      'Healthcare Administration',
      'Insurance Claims Processing',
      'Denial Management',
      'Provider Credentialing',
      'HIPAA Compliance',
      'Healthcare IT',
      'Practice Management'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medical Billing Services',
          description: 'Comprehensive medical billing and coding services for healthcare providers',
          serviceType: 'Medical Billing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Revenue Cycle Management',
          description: 'End-to-end revenue cycle management solutions',
          serviceType: 'RCM Services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medical Coding',
          description: 'Professional medical coding services with certified coders',
          serviceType: 'Medical Coding'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Denial Management',
          description: 'Expert denial management and appeals services',
          serviceType: 'Denial Management'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Provider Credentialing',
          description: 'Healthcare provider credentialing and enrollment services',
          serviceType: 'Credentialing'
        }
      }
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    slogan: 'Your Comprehensive Medical Billing Partner'
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
