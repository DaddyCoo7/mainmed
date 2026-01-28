import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQ[];
  pageName: string;
  pageUrl: string;
}

const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ faqs, pageName, pageUrl }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': stripHtml(faq.answer)
      }
    })),
    'about': {
      '@type': 'MedicalBusiness',
      'name': 'Medtransic',
      'description': `${pageName} Medical Billing Services`,
      'url': pageUrl
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default FAQStructuredData;
