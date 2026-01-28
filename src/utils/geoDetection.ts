import { detectRegionFromCountryCode } from '../config/regions';

export interface GeoLocation {
  country_code: string;
  country_name: string;
  detected_region: string;
}

export const detectUserLocation = async (): Promise<GeoLocation | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    return {
      country_code: data.country_code || 'US',
      country_name: data.country_name || 'United States',
      detected_region: detectRegionFromCountryCode(data.country_code || 'US')
    };
  } catch (error) {
    console.error('Error detecting location:', error);
    return {
      country_code: 'US',
      country_name: 'United States',
      detected_region: 'us'
    };
  }
};

export const shouldRedirect = (currentPath: string, detectedRegion: string): { shouldRedirect: boolean; newPath: string } => {
  const preferredRegion = localStorage.getItem('preferredRegion');

  if (preferredRegion) {
    return { shouldRedirect: false, newPath: currentPath };
  }

  const hasBeenRedirected = sessionStorage.getItem('geoRedirected');
  if (hasBeenRedirected) {
    return { shouldRedirect: false, newPath: currentPath };
  }

  let currentRegion = 'us';
  if (currentPath.startsWith('/pk')) {
    currentRegion = 'pk';
  } else if (currentPath.startsWith('/ph')) {
    currentRegion = 'ph';
  }

  if (currentRegion === detectedRegion) {
    return { shouldRedirect: false, newPath: currentPath };
  }

  let newPath = currentPath;
  if (currentRegion !== 'us') {
    newPath = currentPath.replace(`/${currentRegion}`, '');
  }

  if (detectedRegion !== 'us') {
    newPath = `/${detectedRegion}${newPath}`;
  }

  return {
    shouldRedirect: currentRegion !== detectedRegion,
    newPath: newPath || '/'
  };
};
