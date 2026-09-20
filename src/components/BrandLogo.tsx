'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  width = 44,
  height = 44,
  className,
  priority = false,
}) => {
  return (
    <Image
      src="/assets/logo.png"
      alt="Happy Hands Community Development Foundation"
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
    />
  );
};
