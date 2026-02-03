import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  fetchpriority?: 'high' | 'low' | 'auto';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  fetchpriority = 'auto',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  const getWebPPath = (originalSrc: string): string => {
    const ext = originalSrc.match(/\.(jpg|jpeg|png)$/i);
    if (ext) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return originalSrc;
  };

  const generateSrcSet = (originalSrc: string, format: 'webp' | 'original'): string => {
    const ext = originalSrc.match(/\.(jpg|jpeg|png)$/i);
    if (!ext || !width) return '';

    const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const targetExt = format === 'webp' ? '.webp' : ext[0];
    const sizes = [400, 800, 1200, 1600];

    const srcsetItems = sizes
      .filter(size => width && size < width)
      .map(size => `${basePath}-${size}w${targetExt} ${size}w`);

    if (format === 'webp') {
      srcsetItems.push(`${basePath}${targetExt} ${width}w`);
    } else {
      srcsetItems.push(`${originalSrc} ${width}w`);
    }

    return srcsetItems.join(', ');
  };

  if (error) {
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  const webpSrc = getWebPPath(src);
  const webpSrcSet = width ? generateSrcSet(src, 'webp') : '';
  const fallbackSrcSet = width ? generateSrcSet(src, 'original') : '';

  return (
    <picture>
      {webpSrcSet && (
        <source
          type="image/webp"
          srcSet={webpSrcSet}
          sizes={sizes || `(max-width: ${width}px) 100vw, ${width}px`}
        />
      )}
      <img
        src={src}
        srcSet={fallbackSrcSet || undefined}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded || !priority ? 'opacity-100' : 'opacity-0'
        }`}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchpriority}
        sizes={sizes || (width ? `(max-width: ${width}px) 100vw, ${width}px` : undefined)}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
      />
    </picture>
  );
};

export default OptimizedImage;
