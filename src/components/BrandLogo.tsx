'use client';

import React, { useState } from 'react';
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
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Elegant vector logo fallback representing two caring hands & a heart
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ display: 'block' }}
      >
        <circle cx="50" cy="50" r="48" fill="#FFF7ED" stroke="#FB923C" strokeWidth="3" />
        <path
          d="M32 64C32 64 35 48 44 48C50 48 50 56 56 56C62 56 65 42 72 48C79 54 74 70 66 74C58 78 40 76 32 64Z"
          fill="#F97316"
        />
        <path
          d="M50 30C46 24 38 24 34 29C29 35 32 44 50 54C68 44 71 35 66 29C62 24 54 24 50 30Z"
          fill="#16A34A"
        />
      </svg>
    );
  }

  return (
    <Image
      src="/assets/logo.png"
      alt="Happy Hands Foundation Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
      unoptimized
    />
  );
};
