'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  alt,
  style,
  className,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [errorCount, setErrorCount] = useState<number>(0);

  const handleError = () => {
    if (errorCount === 0 && fallbackSrc && currentSrc !== fallbackSrc) {
      setErrorCount(1);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt || 'Happy Hands Foundation'}
      className={className}
      style={style}
      onError={handleError}
      unoptimized
    />
  );
};
