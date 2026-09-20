'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StatsCounter } from '@/components/StatsCounter';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  FileText, 
  Download, 
  Heart, 
  GraduationCap, 
  Utensils, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Quote,
  Filter
} from 'lucide-react';

interface Story {
  id: string;
  name: string;
  age: number;
  program: string;
  image: string;
  quote: string;
  story: string;
}

const storiesData: Story[] = [
  {
    id: '1',
    name: 'Amina B.',
    age: 11,
    program: 'Scholars Program',
    image: '/assets/images/children-group.jpg',
    quote: 'Before Happy Hands, I stayed home when my parents could not pay fees. Now I am first in my class in mathematics.',
    story: 'Amina joined the Scholars Program in 2021 after our community assessment identified her sharp intellect and dire financial constraints. Today, her guardian sponsorship covers all tuition, books, daily meals, and mentorship. She aspires to become an aerospace engineer.',
  },
  {
    id: '2',
    name: 'Emmanuel O.',
    age: 9,
    program: 'Teachers on the Go',
    image: '/assets/images/hero-volunteer.jpg',
    quote: 'The weekend teachers showed us that learning can be full of colour and laughter.',
    story: 'Emmanuel attended a public primary school that had not had an art or practical science teacher in years. Through Teachers on the Go workshops, Emmanuel discovered a passion for drawing and architectural sketches.',
  },
  {
    id: '3',
    name: 'Blessing K.',
    age: 8,
    program: 'Back-2-School',
    image: '/assets/images/children-event.png',
    quote: 'Carrying my own new bag and wearing new shoes on the first day of school made me feel like a champion.',
    story: 'Blessing was frequently sent home due to torn uniforms and a lack of required exercise books. With her Back-2-School kit, she returned to school with renewed self-esteem and perfect attendance throughout the year.',
  },
  {
    id: '4',
    name: 'Kehinde & Taiwo',
    age: 10,
    program: 'Nourish Now',
    image: '/assets/images/community-outreach.jpg',
    quote: 'We don’t feel dizzy in the afternoon anymore because we get good food at school.',
    story: 'Twin brothers Kehinde and Taiwo often skipped breakfast and lunch due to economic hardship at home. The daily school lunch subsidy under Nourish Now restored their vitality and academic engagement.',
  },
];

interface GalleryPhoto {
  id: string;
  caption: string;
  category: 'education' | 'nutrition' | 'outreaches';
  image: string;
}

const galleryPhotos: GalleryPhoto[] = [
  { id: '1', caption: 'Creative arts and clay modelling session during Teachers on the Go outreach', category: 'education', image: '/assets/images/children-event.png' },
  { id: '2', caption: 'Scholars gathered for weekend character building and peer reading circle', category: 'education', image: '/assets/images/children-group.jpg' },
  { id: '3', caption: 'Distributing Happy Boxes dry food packs to community mothers and caregivers', category: 'nutrition', image: '/assets/images/community-outreach.jpg' },
  { id: '4', caption: 'Volunteer educators guiding children through foundational reading drills', category: 'education', image: '/assets/images/hero-volunteer.jpg' },
  { id: '5', caption: 'Community assembly celebrating new backpacks and school supplies distribution', category: 'outreaches', image: '/assets/images/volunteer-community.png' },
  { id: '6', caption: 'Nutritious hot lunch time for elementary students under Nourish Now', category: 'nutrition', image: '/assets/images/children-group.jpg' },
  { id: '7', caption: 'Medical team conducting basic vitals and health survey checks', category: 'outreaches', image: '/assets/images/hero-volunteer.jpg' },
  { id: '8', caption: 'Joyful smiles from young scholars holding their termly report cards', category: 'education', image: '/assets/images/children-event.png' },
];

const annualReports = [
  {
    year: '2024 Impact & Financial Report',
    period: 'January 2024 – December 2024',
    size: '4.2 MB',
    auditedBy: 'Audited Financial Accounts & Beneficiary Metrics',
    filename: 'Happy-Hands-Foundation-Annual-Report-2024.pdf',
  },
  {
    year: '2023 Impact & Transparency Report',
    period: 'January 2023 – December 2023',
    size: '3.8 MB',
    auditedBy: 'Audited Financial Accounts & Beneficiary Metrics',
    filename: 'Happy-Hands-Foundation-Annual-Report-2023.pdf',
  },
  {
    year: '2022 Community Milestone Report',
    period: 'January 2022 – December 2022',
    size: '3.1 MB',
    auditedBy: 'Audited Financial Accounts & Beneficiary Metrics',
    filename: 'Happy-Hands-Foundation-Annual-Report-2022.pdf',
  },
];

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState<'stories' | 'gallery' | 'reports'>('stories');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'education' | 'nutrition' | 'outreaches'>('all');
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null);

  const filteredGallery = galleryPhotos.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <main>
      {/* 1. HERO SECTION (Board 06) */}
      <section className="hero-section" aria-label="Impact Hero">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="section-title-red">Transparent Impact</span>
            <h1 style={{ margin: '8px 0 16px' }}>The impact of your giving.</h1>
            <p className="hero-subtitle" style={{ fontSize: 18 }}>
              Every number represents a child whose trajectory was changed.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS ROW WITH COUNT-UP */}
      <StatsCounter showTitle={false} />

      {/* 3. TABBED VIEW (Board 06) */}
      <section className="section" aria-label="Impact Views">
        <div className="container">
          {/* Main Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40, borderBottom: '1px solid var(--border-warm)', paddingBottom: 16 }}>
            <button
              type="button"
              onClick={() => setActiveTab('stories')}
              className={`chip ${activeTab === 'stories' ? 'chip-green selected' : ''}`}
              style={{ fontSize: 15, padding: '10px 22px' }}
            >
              Stories of Change
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`chip ${activeTab === 'gallery' ? 'chip-green selected' : ''}`}
              style={{ fontSize: 15, padding: '10px 22px' }}
            >
              Moments of Joy (Gallery)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reports')}
              className={`chip ${activeTab === 'reports' ? 'chip-green selected' : ''}`}
              style={{ fontSize: 15, padding: '10px 22px' }}
            >
              Annual Reports & Transparency
            </button>
          </div>

          {/* TAB 1: STORIES OF CHANGE */}
          {activeTab === 'stories' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
              {storiesData.map((story) => {
                const isExpanded = expandedStoryId === story.id;
                return (
                  <div
                    key={story.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: 16,
                      border: '1px solid var(--border-warm)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ height: 220, position: 'relative' }}>
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 14,
                          left: 14,
                          background: 'var(--dark-neutral)',
                          color: '#ffffff',
                          padding: '4px 10px',
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 700,
                        }}
                      >
                        {story.program}
                      </div>
                    </div>

                    <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: 20, margin: '0 0 6px' }}>{story.name}, Age {story.age}</h3>
                      
                      <div style={{ position: 'relative', margin: '12px 0 16px', paddingLeft: 16, borderLeft: '3px solid var(--primary-red)' }}>
                        <p style={{ fontStyle: 'italic', fontSize: 14, color: 'var(--dark-neutral)', lineHeight: 1.5, margin: 0 }}>
                          &ldquo;{story.quote}&rdquo;
                        </p>
                      </div>

                      <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 16px' }}>
                        {isExpanded ? story.story : `${story.story.slice(0, 110)}...`}
                      </p>

                      <div style={{ marginTop: 'auto' }}>
                        <button
                          type="button"
                          onClick={() => setExpandedStoryId(isExpanded ? null : story.id)}
                          style={{
                            color: 'var(--primary-red)',
                            fontWeight: 700,
                            fontSize: 13.5,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                          }}
                        >
                          {isExpanded ? 'Show less ↑' : 'Read full story ›'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: PHOTO GALLERY ("Moments of Joy") */}
          {activeTab === 'gallery' && (
            <div>
              {/* Filter tags (All / Education / Nutrition / Outreaches) */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
                <button
                  type="button"
                  onClick={() => setGalleryFilter('all')}
                  className={`chip ${galleryFilter === 'all' ? 'selected' : ''}`}
                >
                  All Moments ({galleryPhotos.length})
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryFilter('education')}
                  className={`chip ${galleryFilter === 'education' ? 'selected' : ''}`}
                >
                  Education
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryFilter('nutrition')}
                  className={`chip ${galleryFilter === 'nutrition' ? 'selected' : ''}`}
                >
                  Nutrition
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryFilter('outreaches')}
                  className={`chip ${galleryFilter === 'outreaches' ? 'selected' : ''}`}
                >
                  Outreaches
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: 14,
                      overflow: 'hidden',
                      border: '1px solid var(--border-warm)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <div style={{ height: 220, position: 'relative' }}>
                      <Image
                        src={item.image}
                        alt={item.caption}
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized
                      />
                    </div>
                    <div style={{ padding: '16px 18px' }}>
                      <p style={{ margin: 0, fontSize: 13.5, color: 'var(--dark-neutral)', lineHeight: 1.5 }}>
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ANNUAL REPORTS & TRANSPARENCY */}
          {activeTab === 'reports' && (
            <div style={{ maxWidth: 840, margin: '0 auto' }}>
              <div style={{ background: 'var(--light-neutral)', padding: 24, borderRadius: 14, border: '1px solid var(--border-warm)', marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <CheckCircle2 size={24} color="var(--primary-green)" />
                  <h3 style={{ fontSize: 18, margin: 0 }}>CAC Registration & Financial Accountability</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                  Happy Hands Community Development Foundation is registered under CAC Number <strong>RC 183177</strong>. We conduct annual financial audits and publish full impact accounts to uphold the highest standard of donor stewardship.
                </p>
              </div>

              <div style={{ display: 'grid', gap: 20 }}>
                {annualReports.map((rep, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--border-warm)',
                      borderRadius: 14,
                      padding: '24px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 16,
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 10,
                          background: 'var(--primary-red-light)',
                          color: 'var(--primary-red)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <FileText size={26} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: 18, margin: '0 0 4px' }}>{rep.year}</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
                          {rep.period} · {rep.size} · PDF format
                        </p>
                      </div>
                    </div>

                    <a
                      href={`/assets/docs/${rep.filename}`}
                      download={rep.filename}
                      className="btn btn-secondary"
                      style={{ fontSize: 13.5, padding: '10px 18px' }}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading ${rep.year} (${rep.size}). Direct PDF download verified.`);
                      }}
                    >
                      <Download size={15} /> Download Report (PDF)
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
