'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  Utensils, 
  Users, 
  HeartHandshake 
} from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  color: 'red' | 'green';
  icon: React.ReactNode;
}

const statsData: StatItem[] = [
  {
    id: 'children',
    target: 5000,
    suffix: '+',
    label: 'Children Educated',
    color: 'red',
    icon: <GraduationCap size={26} strokeWidth={2.2} />,
  },
  {
    id: 'meals',
    target: 2000,
    suffix: '+',
    label: 'Meals Provided',
    color: 'green',
    icon: <Utensils size={26} strokeWidth={2.2} />,
  },
  {
    id: 'outreaches',
    target: 15,
    suffix: '+',
    label: 'Community Outreaches',
    color: 'red',
    icon: <Users size={26} strokeWidth={2.2} />,
  },
  {
    id: 'volunteers',
    target: 120,
    suffix: '+',
    label: 'Active Volunteers',
    color: 'green',
    icon: <HeartHandshake size={26} strokeWidth={2.2} />,
  },
];

interface StatsCounterProps {
  showTitle?: boolean;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ showTitle = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Default directly to target values to prevent "0+" flashes or SSR issues
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    children: 5000,
    meals: 2000,
    outreaches: 15,
    volunteers: 120,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Set initial 0 only for dynamic counting when JS and observer are active
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Reset to 0 and count up smoothly once
          setCounts({
            children: 0,
            meals: 0,
            outreaches: 0,
            volunteers: 0,
          });

          statsData.forEach((stat) => {
            const duration = 1200; // 1.2s
            const frames = 30;
            const stepTime = duration / frames;
            const increment = stat.target / frames;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                setCounts((prev) => ({ ...prev, [stat.id]: stat.target }));
                clearInterval(timer);
              } else {
                setCounts((prev) => ({ ...prev, [stat.id]: Math.floor(current) }));
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="section section-bg-light" ref={containerRef} aria-label="Our Impact So Far">
      <div className="container">
        {showTitle && (
          <div className="section-header text-center" style={{ marginBottom: 36 }}>
            <span className="section-title-red">Our Impact So Far</span>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, margin: 0 }}>
              Real impact. Real people. Real change.
            </p>
          </div>
        )}

        <div className="stats-row-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className={`stat-icon-wrap ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-number">
                <span>{counts[stat.id]?.toLocaleString() || stat.target.toLocaleString()}</span>
                <span className={stat.color === 'red' ? 'stat-plus-red' : 'stat-plus-green'}>
                  {stat.suffix}
                </span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-bottom-line ${stat.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
