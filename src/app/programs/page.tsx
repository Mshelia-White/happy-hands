'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  GraduationCap, 
  BookOpen, 
  Backpack, 
  Utensils, 
  HeartPulse, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface ProgramItem {
  id: string;
  category: 'education' | 'health';
  title: string;
  tagline: string;
  description: string;
  phase: 'Active' | 'In Development' | 'Coming Soon';
  href: string;
  image: string;
  icon: React.ReactNode;
}

const programsData: ProgramItem[] = [
  {
    id: 'scholars-program',
    category: 'education',
    title: 'Scholars Program',
    tagline: 'Full academic sponsorships for underserved children.',
    description: 'Connects compassionate guardians to bright students, covering full tuition, books, bags, shoes, uniforms, and character mentorship.',
    phase: 'Active',
    href: '/scholars-program',
    image: '/assets/images/children-group.jpg',
    icon: <GraduationCap size={24} color="var(--primary-red)" />,
  },
  {
    id: 'teachers-on-the-go',
    category: 'education',
    title: 'Teachers on the Go',
    tagline: 'Mobile volunteer educators reaching grassroots classrooms.',
    description: 'Deploying trained volunteer instructors to community schools with structured literacy, creative arts, and foundational numeracy toolkits.',
    phase: 'Active',
    href: '/teachers-on-the-go',
    image: '/assets/images/hero-volunteer.jpg',
    icon: <BookOpen size={24} color="var(--primary-green)" />,
  },
  {
    id: 'back-2-school',
    category: 'education',
    title: 'Back-2-School Campaign',
    tagline: 'Equipping students annually with quality learning materials.',
    description: 'Annual drive distributing new school backpacks, notebooks, stationery packs, and study essentials to keep children confident in school.',
    phase: 'Active',
    href: '/back-2-school',
    image: '/assets/images/children-event.png',
    icon: <Backpack size={24} color="var(--primary-red)" />,
  },
  {
    id: 'nourish-now',
    category: 'health',
    title: 'Nourish Now',
    tagline: 'Nutritional food distribution and school lunch relief.',
    description: 'Providing balanced, wholesome meals and dry food boxes to eliminate childhood hunger so young scholars can concentrate and thrive.',
    phase: 'Active',
    href: '/nourish-now',
    image: '/assets/images/community-outreach.jpg',
    icon: <Utensils size={24} color="var(--primary-green)" />,
  },
  {
    id: 'fittot',
    category: 'health',
    title: 'FitTot',
    tagline: 'Early childhood physical wellness and health screenings.',
    description: 'Foundational motor skills, physical fitness routines, preventive health monitoring, and early wellness education for toddlers.',
    phase: 'Coming Soon',
    href: '/fittot',
    image: '/assets/images/volunteer-community.png',
    icon: <HeartPulse size={24} color="var(--text-light)" />,
  },
];

export default function ProgramsHubPage() {
  const { openDonationModal } = useDonation();
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'health'>('all');

  const filteredPrograms = programsData.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <main>
      {/* 1. HERO SECTION (Board 02, Col 2) */}
      <section className="hero-section" aria-label="Our Programs Hub">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: 800, margin: '0 auto 40px' }}>
            <span className="section-title-red">Our Programs</span>
            <h1 style={{ margin: '8px 0 16px' }}>We are nurturing the next generation of changemakers.</h1>
            <p className="hero-subtitle" style={{ fontSize: 18 }}>
              Focused interventions designed to ensure every child has access to basic education, nourishment, and growth.
            </p>
          </div>

          {/* Filter Tabs (Board 03: Green filled active pill) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`chip ${activeTab === 'all' ? 'chip-green selected' : ''}`}
            >
              All Programs ({programsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`chip ${activeTab === 'education' ? 'chip-green selected' : ''}`}
            >
              Education Programs (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('health')}
              className={`chip ${activeTab === 'health' ? 'chip-green selected' : ''}`}
            >
              Health & Nutrition (2)
            </button>
          </div>

          {/* Program Launch Phases Legend (Board 03) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, fontSize: 13, color: 'var(--text-muted)', marginBottom: 40, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, color: 'var(--dark-neutral)' }}>Program Launch Phases:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary-green)' }} />
              <span>Active</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent-yellow)' }} />
              <span>In Development</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#94A3B8' }} />
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL LIST CARDS (Board 02 Col 2 + Board 03) */}
      <section className="section section-bg-light" aria-label="Programs List" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          {filteredPrograms.map((program) => {
            const isComingSoon = program.phase === 'Coming Soon';
            return (
              <div 
                key={program.id} 
                className="program-horizontal-card"
                style={{
                  opacity: isComingSoon ? 0.85 : 1,
                  background: isComingSoon ? '#FAF9F5' : '#ffffff',
                }}
              >
                {/* Image Left */}
                <div style={{ position: 'relative', height: 140 }}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="program-horizontal-img"
                    style={{
                      filter: isComingSoon ? 'grayscale(0.7)' : 'none',
                    }}
                    unoptimized
                  />
                  {isComingSoon && (
                    <span className="coming-soon-badge" style={{ position: 'absolute', top: 8, left: 8 }}>
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Content Center */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <h2 style={{ fontSize: 21, margin: 0 }}>{program.title}</h2>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 999,
                        background: isComingSoon ? '#F1F5F9' : 'var(--primary-green-light)',
                        color: isComingSoon ? '#64748B' : 'var(--primary-green)',
                      }}
                    >
                      {program.phase}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary-green)', margin: '0 0 6px' }}>
                    {program.tagline}
                  </p>
                  <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 12px' }}>
                    {program.description}
                  </p>
                  <Link
                    href={program.href}
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: isComingSoon ? 'var(--text-muted)' : 'var(--primary-red)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    {isComingSoon ? 'Learn about launch plans ›' : 'Explore program details ›'}
                  </Link>
                </div>

                {/* Icon Circle Right */}
                <div className="program-horizontal-icon" style={{ background: isComingSoon ? '#F1F5F9' : 'var(--light-neutral)' }}>
                  {program.icon}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
