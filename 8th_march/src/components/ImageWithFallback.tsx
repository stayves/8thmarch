import { useMemo, useState, useEffect } from 'react';
import type { ImgHTMLAttributes, ReactNode } from 'react';

interface ImageWithFallbackProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | string[];
  fallback?: ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallback = null, ...imgProps }) => {
  const sources = useMemo(() => {
    if (!src) return [];
    return (Array.isArray(src) ? src : [src]).filter(Boolean);
  }, [src]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [sources]);

  if (!sources.length || currentIndex >= sources.length) {
    return <>{fallback}</>;
  }

  return (
    <img
      {...imgProps}
      src={sources[currentIndex]}
      onError={() => setCurrentIndex((prev) => prev + 1)}
    />
  );
};

export default ImageWithFallback;
