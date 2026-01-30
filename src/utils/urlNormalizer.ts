export function normalizeUrl(url: string, baseUrl: string = 'https://medtransic.com'): string {
  try {
    let normalizedUrl: string;

    if (url.startsWith('http://') || url.startsWith('https://')) {
      normalizedUrl = url;
    } else if (url.startsWith('/')) {
      normalizedUrl = `${baseUrl}${url}`;
    } else {
      normalizedUrl = `${baseUrl}/${url}`;
    }

    const urlObj = new URL(normalizedUrl);

    urlObj.search = '';
    urlObj.hash = '';

    let pathname = urlObj.pathname;
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }

    return `${urlObj.protocol}//${urlObj.host}${pathname}`;
  } catch (error) {
    console.error('Error normalizing URL:', error);
    return `${baseUrl}${url.startsWith('/') ? url : '/' + url}`;
  }
}

export function getCanonicalUrl(pathname?: string): string {
  const baseUrl = 'https://medtransic.com';

  if (typeof window === 'undefined') {
    return baseUrl;
  }

  const currentPath = pathname || window.location.pathname;

  return normalizeUrl(currentPath, baseUrl);
}
