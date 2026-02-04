/**
 * Structured data (JSON-LD) generators for SEO
 */

/**
 * Organization structured data
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Medtransic",
    "url": "https://medtransic.com",
    "logo": "https://medtransic.com/medtransic-logomark1.svg",
    "description": "Expert medical billing and revenue cycle management services. HIPAA-compliant RCM solutions with 99% clean claims rate and 30% revenue increase.",
    "telephone": "+1-888-777-0860",
    "email": "info@medtransic.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/medtransic"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Billing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Billing and RCM",
            "description": "Comprehensive revenue cycle management services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Coding",
            "description": "Expert ICD-10 and CPT coding services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Denial Management",
            "description": "Proactive denial management and appeals"
          }
        }
      ]
    }
  };
}

/**
 * Breadcrumb structured data
 */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * FAQ structured data
 */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Service structured data
 */
export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Medtransic"
    },
    "description": service.description,
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };
}

/**
 * Medical specialty structured data
 */
export function medicalSpecialtySchema(specialty) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": specialty.name,
    "description": specialty.description
  };
}

/**
 * How-to structured data
 */
export function howToSchema(howTo) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.name,
    "description": howTo.description,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

/**
 * Aggregate rating structured data
 */
export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Medtransic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "347"
    }
  };
}
