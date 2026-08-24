'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Utensils, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles,
  Award
} from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  barWidth: string;
}

const statsData: StatItem[] = [
  {
    id: 'children',
    target: 500,
    suffix: '+',
    label: 'Children Educated',
    icon: <GraduationCap size={28} />,
    barWidth: '85%',
  },
  {
    id: 'meals',
    target: 2000,
    suffix: '+',
    label: 'Meals Provided',
    icon: <Utensils size={28} />,
    barWidth: '95%',
  },
  {
    id: 'outreaches',
    target: 15,
    suffix: '+',
    label: 'Outreaches Done',
    icon: <Users size={28} />,
    barWidth: '70%',
  },
  {
    id: 'volunteers',
    target: 120,
    suffix: '+',
    label: 'Active Volunteers',
    icon: <HeartHandshake size={28} />,
    barWidth: '80%',
  },
  {
    id: 'programs',
    target: 5,
    suffix: '',
    label: 'Impact Pillars',
    icon: <Sparkles size={28} />,
    barWidth: '100%',
  },
  {
    id: 'dedication',
    target: 100,
    suffix: '%',
    label: 'Community Driven',
    icon: <Award size={28} />,
    barWidth: '100%',
  },
];

export const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    children: 0,
    meals: 0,
    outreaches: 0,
    volunteers: 0,
    programs: 0,
    dedication: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statsData.forEach((stat) => {
            let current = 0;
            const increment = stat.target / 45;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                setCounts((prev) => ({ ...prev, [stat.id]: stat.target }));
                clearInterval(timer);
              } else {
                setCounts((prev) => ({ ...prev, [stat.id]: Math.ceil(current) }));
              }
            }, 30);
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
    <section className="stats" ref={containerRef}>
      <div className="stats-deco-1" />
      <div className="stats-deco-2" />
      <div className="container">
        <div className="stats-header">
          <p className="section-kicker" style={{ color: '#fdba74' }}>
            Transforming Lives Across Nigeria
          </p>
          <h2 className="section-title">Our Impact in Numbers</h2>
          <p className="section-lede" style={{ color: '#94a3b8', margin: '16px auto 0' }}>
            Every contribution translates directly into real educational access, warm nutrition, and brighter futures for vulnerable children.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <strong>
                {counts[stat.id]}
                <small>{stat.suffix}</small>
              </strong>
              <span>{stat.label}</span>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: hasAnimated ? stat.barWidth : '0%', transition: 'width 1.2s ease-out' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
