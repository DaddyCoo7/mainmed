export interface RegionConfig {
  code: string;
  name: string;
  fullName: string;
  currency: string;
  phoneNumber: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  countryCode: string;
}

export const regions: Record<string, RegionConfig> = {
  us: {
    code: 'us',
    name: 'United States',
    fullName: 'Medtransic - United States Headquarters',
    currency: 'USD',
    phoneNumber: '+1 (888) 777-0860',
    email: 'contact@medtransic.com',
    address: {
      street: '30 N Gould St Ste R',
      city: 'Sheridan',
      state: 'WY',
      zip: '82801',
      country: 'United States'
    },
    socials: {
      facebook: 'https://facebook.com/medtransic',
      twitter: 'https://twitter.com/medtransic',
      linkedin: 'https://linkedin.com/company/medtransic',
      instagram: 'https://instagram.com/medtransic'
    },
    heroImage: '/02_Your Comprehensive Medical Billing Partner.png',
    heroTitle: 'Your Comprehensive Medical Billing Partner',
    heroSubtitle: 'Transform Your Revenue Cycle with Expert Medical Billing Solutions',
    countryCode: 'US'
  },
  pk: {
    code: 'pk',
    name: 'United States',
    fullName: 'Medtransic - US Headquarters',
    currency: 'USD',
    phoneNumber: '+1 (888) 777-0860',
    email: 'contact@medtransic.com',
    address: {
      street: '30 N Gould St Ste R',
      city: 'Sheridan',
      state: 'WY',
      zip: '82801',
      country: 'United States'
    },
    socials: {
      facebook: 'https://facebook.com/medtransic',
      twitter: 'https://twitter.com/medtransic',
      linkedin: 'https://linkedin.com/company/medtransic',
      instagram: 'https://instagram.com/medtransic'
    },
    heroImage: '/02_Your Comprehensive Medical Billing Partner.png',
    heroTitle: 'Your Comprehensive Medical Billing Partner',
    heroSubtitle: 'Transform Your Revenue Cycle with Expert Medical Billing Solutions',
    countryCode: 'US'
  },
  ph: {
    code: 'ph',
    name: 'United States',
    fullName: 'Medtransic - US Headquarters',
    currency: 'USD',
    phoneNumber: '+1 (888) 777-0860',
    email: 'contact@medtransic.com',
    address: {
      street: '30 N Gould St Ste R',
      city: 'Sheridan',
      state: 'WY',
      zip: '82801',
      country: 'United States'
    },
    socials: {
      facebook: 'https://facebook.com/medtransic',
      twitter: 'https://twitter.com/medtransic',
      linkedin: 'https://linkedin.com/company/medtransic',
      instagram: 'https://instagram.com/medtransic'
    },
    heroImage: '/02_Your Comprehensive Medical Billing Partner.png',
    heroTitle: 'Your Comprehensive Medical Billing Partner',
    heroSubtitle: 'Transform Your Revenue Cycle with Expert Medical Billing Solutions',
    countryCode: 'US'
  }
};

export const getRegionByCode = (code: string): RegionConfig => {
  return regions[code.toLowerCase()] || regions.us;
};

export const detectRegionFromCountryCode = (countryCode: string): string => {
  const mapping: Record<string, string> = {
    'US': 'us'
  };
  return mapping[countryCode] || 'us';
};
