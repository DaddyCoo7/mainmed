import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AggregateRatingSchemaProps {
  name: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

const AggregateRatingSchema: React.FC<AggregateRatingSchemaProps> = ({
  name,
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1
}) => {
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": worstRating
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(ratingSchema)}
      </script>
    </Helmet>
  );
};

export default AggregateRatingSchema;
