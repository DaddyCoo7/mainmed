import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Review {
  author: string;
  datePublished: string;
  reviewBody: string;
  reviewRating: number;
  reviewTitle?: string;
}

interface ReviewSchemaProps {
  itemReviewed: {
    type: 'Service' | 'Organization' | 'Product';
    name: string;
    description: string;
    image?: string;
  };
  reviews: Review[];
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  itemReviewed,
  reviews,
  aggregateRating
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': itemReviewed.type,
    'name': itemReviewed.name,
    'description': itemReviewed.description,
    ...(itemReviewed.image && { 'image': itemReviewed.image }),
    ...(aggregateRating && {
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': aggregateRating.ratingValue,
        'ratingCount': aggregateRating.ratingCount,
        'bestRating': aggregateRating.bestRating || 5,
        'worstRating': aggregateRating.worstRating || 1
      }
    }),
    'review': reviews.map(review => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': review.author
      },
      'datePublished': review.datePublished,
      'reviewBody': review.reviewBody,
      ...(review.reviewTitle && { 'name': review.reviewTitle }),
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.reviewRating,
        'bestRating': 5,
        'worstRating': 1
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ReviewSchema;
