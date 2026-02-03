import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: number;
  };
  steps: HowToStep[];
  tool?: string[];
  supply?: string[];
}

const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  image,
  totalTime,
  estimatedCost,
  steps,
  tool = [],
  supply = []
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': name,
    'description': description,
    ...(image && { 'image': image }),
    ...(totalTime && { 'totalTime': totalTime }),
    ...(estimatedCost && {
      'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': estimatedCost.currency,
        'value': estimatedCost.value
      }
    }),
    'step': steps.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.name,
      'text': step.text,
      ...(step.image && { 'image': step.image }),
      ...(step.url && { 'url': step.url })
    })),
    ...(tool.length > 0 && {
      'tool': tool.map(t => ({
        '@type': 'HowToTool',
        'name': t
      }))
    }),
    ...(supply.length > 0 && {
      'supply': supply.map(s => ({
        '@type': 'HowToSupply',
        'name': s
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

export default HowToSchema;
