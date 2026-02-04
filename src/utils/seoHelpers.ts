/**
 * SEO Helper Utilities
 * Provides validation, truncation, and template functions for SEO metadata
 */

interface SEOLengthLimits {
  titleMin: number;
  titleIdeal: number;
  titleMax: number;
  descriptionMin: number;
  descriptionIdeal: number;
  descriptionMax: number;
}

export const SEO_LIMITS: SEOLengthLimits = {
  titleMin: 30,
  titleIdeal: 60,
  titleMax: 65,
  descriptionMin: 120,
  descriptionIdeal: 160,
  descriptionMax: 170,
};

/**
 * Truncates text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

/**
 * Validates and truncates title to SEO best practices
 */
export function optimizeTitle(title: string): string {
  if (!title) return 'Medtransic - Medical Billing Services';

  const truncated = truncateText(title, SEO_LIMITS.titleMax);

  if (process.env.NODE_ENV === 'development') {
    if (title.length < SEO_LIMITS.titleMin) {
      console.warn(`SEO Warning: Title too short (${title.length} chars): "${title}"`);
    } else if (title.length > SEO_LIMITS.titleMax) {
      console.warn(`SEO Warning: Title too long (${title.length} chars), truncated to: "${truncated}"`);
    }
  }

  return truncated;
}

/**
 * Validates and truncates description to SEO best practices
 */
export function optimizeDescription(description: string): string {
  if (!description) {
    return 'Medtransic provides expert medical billing and revenue cycle management services. Reduce denials, improve collections, and accelerate cash flow.';
  }

  const truncated = truncateText(description, SEO_LIMITS.descriptionMax);

  if (process.env.NODE_ENV === 'development') {
    if (description.length < SEO_LIMITS.descriptionMin) {
      console.warn(`SEO Warning: Description too short (${description.length} chars): "${description.substring(0, 50)}..."`);
    } else if (description.length > SEO_LIMITS.descriptionMax) {
      console.warn(`SEO Warning: Description too long (${description.length} chars), truncated`);
    }
  }

  return truncated;
}

/**
 * Converts slug to human-readable format
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Converts state slug to full state name
 */
export function stateSlugToName(slug: string): string {
  const stateMap: Record<string, string> = {
    'alabama': 'Alabama',
    'alaska': 'Alaska',
    'arizona': 'Arizona',
    'arkansas': 'Arkansas',
    'california': 'California',
    'colorado': 'Colorado',
    'connecticut': 'Connecticut',
    'delaware': 'Delaware',
    'florida': 'Florida',
    'georgia': 'Georgia',
    'hawaii': 'Hawaii',
    'idaho': 'Idaho',
    'illinois': 'Illinois',
    'indiana': 'Indiana',
    'iowa': 'Iowa',
    'kansas': 'Kansas',
    'kentucky': 'Kentucky',
    'louisiana': 'Louisiana',
    'maine': 'Maine',
    'maryland': 'Maryland',
    'massachusetts': 'Massachusetts',
    'michigan': 'Michigan',
    'minnesota': 'Minnesota',
    'mississippi': 'Mississippi',
    'missouri': 'Missouri',
    'montana': 'Montana',
    'nebraska': 'Nebraska',
    'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'north-carolina': 'North Carolina',
    'north-dakota': 'North Dakota',
    'ohio': 'Ohio',
    'oklahoma': 'Oklahoma',
    'oregon': 'Oregon',
    'pennsylvania': 'Pennsylvania',
    'rhode-island': 'Rhode Island',
    'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota',
    'tennessee': 'Tennessee',
    'texas': 'Texas',
    'utah': 'Utah',
    'vermont': 'Vermont',
    'virginia': 'Virginia',
    'washington': 'Washington',
    'west-virginia': 'West Virginia',
    'wisconsin': 'Wisconsin',
    'wyoming': 'Wyoming',
  };

  return stateMap[slug] || slugToTitle(slug);
}

/**
 * SEO Metadata Templates
 */
export const seoTemplates = {
  state: (stateName: string) => ({
    title: `Medical Billing Services in ${stateName} | Medtransic`,
    description: `Expert medical billing and RCM services in ${stateName}. Reduce denials, improve collections, and accelerate cash flow with Medtransic.`,
  }),

  city: (cityName: string, stateName: string) => ({
    title: `Medical Billing Services in ${cityName}, ${stateName} | Medtransic`,
    description: `Expert medical billing and revenue cycle management for ${cityName}, ${stateName}. Local support, faster payments, and reduced denials.`,
  }),

  service: (serviceName: string) => ({
    title: `${serviceName} Services | Medtransic`,
    description: `Professional ${serviceName.toLowerCase()} services. Expert support to optimize revenue cycle, reduce denials, and improve collections.`,
  }),

  specialty: (specialtyName: string) => ({
    title: `${specialtyName} Medical Billing | Medtransic`,
    description: `Specialized medical billing for ${specialtyName.toLowerCase()}. Expert coders and billers with deep specialty knowledge to maximize reimbursements.`,
  }),

  integration: (emrName: string) => ({
    title: `${emrName} Medical Billing Integration | Medtransic`,
    description: `Seamless medical billing integration with ${emrName}. Automated claims, real-time sync, and expert support for your EHR system.`,
  }),

  comparison: (optionA: string, optionB: string) => ({
    title: `${optionA} vs ${optionB} | Medical Billing Comparison`,
    description: `Compare ${optionA.toLowerCase()} and ${optionB.toLowerCase()}. Expert analysis to help you make the best decision for your practice.`,
  }),

  resource: (resourceName: string) => ({
    title: `${resourceName} | Medical Billing Resources | Medtransic`,
    description: `Comprehensive ${resourceName.toLowerCase()} guide. Expert insights and resources for medical billing professionals and healthcare providers.`,
  }),
};

/**
 * Generate fallback SEO metadata for dynamic routes
 */
export function generateFallbackSEO(
  routeType: 'state' | 'city' | 'service' | 'specialty' | 'integration' | 'comparison' | 'resource',
  params: Record<string, string>
): { title: string; description: string } {
  switch (routeType) {
    case 'state':
      return seoTemplates.state(stateSlugToName(params.state || ''));

    case 'city':
      return seoTemplates.city(
        slugToTitle(params.city || ''),
        stateSlugToName(params.state || '')
      );

    case 'service':
      return seoTemplates.service(slugToTitle(params.service || ''));

    case 'specialty':
      return seoTemplates.specialty(slugToTitle(params.specialty || ''));

    case 'integration':
      return seoTemplates.integration(slugToTitle(params.integration || ''));

    case 'comparison':
      return seoTemplates.comparison(
        params.optionA || 'Option A',
        params.optionB || 'Option B'
      );

    case 'resource':
      return seoTemplates.resource(slugToTitle(params.resource || ''));

    default:
      return {
        title: 'Medtransic - Medical Billing Services',
        description: 'Expert medical billing and revenue cycle management services. Reduce denials, improve collections, and accelerate cash flow.',
      };
  }
}
