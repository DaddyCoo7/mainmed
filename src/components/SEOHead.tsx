import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getCanonicalUrl } from '../utils/urlNormalizer';
import { optimizeTitle, optimizeDescription } from '../utils/seoHelpers';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://medtransic.com/medtransiclogolightbk.png',
  keywords,
  noindex = false,
  structuredData
}) => {
  const optimizedTitle = optimizeTitle(title);
  const fullTitle = optimizedTitle.includes('Medtransic') ? optimizedTitle : `${optimizedTitle} | Medtransic`;
  const optimizedDescription = optimizeDescription(description);
  const finalCanonicalUrl = canonicalUrl || canonical || getCanonicalUrl();

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={finalCanonicalUrl} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:site_name" content="Medtransic" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={optimizedTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={optimizedTitle} />

      <meta name="author" content="Medtransic" />
      <meta name="publisher" content="Medtransic" />

      <meta property="article:publisher" content="https://medtransic.com" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
