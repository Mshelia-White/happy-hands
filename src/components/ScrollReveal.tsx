'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in seconds, e.g. 0.1, 0.2
  direction?: 'up' | 'fade' | 'scale';
  as?: React.ElementType;
  style?: React.CSSProperties;
}

/**
 * Reusable wrapper component for fine-grained control over scroll animations
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Component = 'div',
  style = {},
  ...props
}: ScrollRevealProps & React.HTMLAttributes<HTMLElement>) {
  const directionClass =
    direction === 'fade'
      ? 'reveal-fade'
      : direction === 'scale'
      ? 'reveal-scale'
      : 'reveal-slide-up';

  const customStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}s` } : {}),
  };

  return (
    <Component
      className={`reveal-on-scroll ${directionClass} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Global ScrollObserver: attaches to the root layout and automatically adds
 * smooth, refined reveal animations to content sections and key cards.
 */
export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const selectors = [
      '.reveal-on-scroll',
      '[data-reveal]',
      'section.section',
      'section.hero',
      'section.page-hero',
      '.split-layout',
      '.pillar-block',
      '.orange-panel',
      '.white-panel',
      '.donate-wrap',
      '.quote-banner',
      '.mission-vision-wrapper',
      '.testimonial-grid > blockquote',
      '.gallery-grid > .gallery-card',
      '.program-grid > .program-card',
      '.stats-grid > .stat-card',
      '.volunteer-roles > .role-card',
      '.contact-card',
      '.contact-form-card',
      '.mv-card',
      '.faq-card',
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach((el) => {
      // Ensure the base reveal class is applied
      if (!el.classList.contains('reveal-on-scroll') && !el.hasAttribute('data-reveal')) {
        el.classList.add('reveal-on-scroll');
      }

      // If element is already in the viewport upon mount (e.g. Hero), reveal it quickly
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Small timeout for smooth initial mount fade-in
        setTimeout(() => {
          el.classList.add('is-revealed');
        }, 60);
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
