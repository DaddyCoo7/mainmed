import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MedicalSpecialtySchemaProps {
  name: string;
  description: string;
  url: string;
  specialtyCode?: string;
  associatedAnatomy?: string[];
  relevantSpecialty?: string[];
}

const MedicalSpecialtySchema: React.FC<MedicalSpecialtySchemaProps> = ({
  name,
  description,
  url,
  specialtyCode,
  associatedAnatomy = [],
  relevantSpecialty = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    'name': name,
    'description': description,
    'url': url,
    ...(specialtyCode && { 'medicalSpecialtyCode': specialtyCode }),
    ...(associatedAnatomy.length > 0 && {
      'associatedAnatomy': associatedAnatomy.map(anatomy => ({
        '@type': 'AnatomicalStructure',
        'name': anatomy
      }))
    }),
    ...(relevantSpecialty.length > 0 && {
      'relevantSpecialty': relevantSpecialty.map(specialty => ({
        '@type': 'MedicalSpecialty',
        'name': specialty
      }))
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

export default MedicalSpecialtySchema;
