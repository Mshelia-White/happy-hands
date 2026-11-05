'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Filter,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Story {
  id: string;
  name: string;
  age: number;
  program: string;
  image: string;
  headline: string;
  quote: string;
  shortSummary: string;
  fullStory: string;
}

const featuredStory: Story = {
  id: 'featured-amina',
  name: 'Amina B.',
  age: 11,
  program: 'Scholars Program',
  image: '/assets/images/children-group.jpg',
  headline: 'From Missing School to Leading Her Class in Mathematics',
  quote: 'Before Happy Hands, I stayed home when my parents could not pay fees. Now I am first in my class in mathematics.',
  shortSummary: 'Amina joined the Scholars Program in 2021 after our community assessment identified her sharp intellect and acute financial constraints.',
  fullStory: 'Amina joined the Scholars Program in 2021 after our community field assessment identified her sharp intellect and acute financial constraints at home. When her guardian sponsorship was confirmed, Happy Hands covered 100% of her accredited school tuition, textbook kits, customized uniforms, and nutritious daily weekday school lunches. Over the past three terms, Amina has consistently ranked first in mathematics and science. With continuous mentorship, her dream is to study aerospace engineering and design sustainable aviation for Africa.',
};

const supportingStories: Story[] = [
  {
    id: 'emmanuel',
    name: 'Emmanuel O.',
    age: 9,
    program: 'Teachers on the Go',
    image: '/assets/images/hero-volunteer.jpg',
    headline: 'Igniting a Passion for Practical Science & Drawing',
    quote: 'The weekend teachers showed us that learning can be full of colour and laughter.',
    shortSummary: 'Emmanuel attended a public primary school that had not had an art or practical science teacher in years.',
    fullStory: 'Emmanuel attended a public primary school that had lacked specialized arts and foundational science instruction. Through Teachers on the Go weekend creative workshops, Emmanuel received personal sketch pads, clay kits, and hands-on guidance. Today, his architectural drawings and creative enthusiasm inspire classmates across his grade level.',
  },
  {
    id: 'blessing',
    name: 'Blessing K.',
    age: 8,
    program: 'Back-2-School',
    image: '/assets/images/children-event.png',
    headline: 'Walking into Class with Pride, Shoes, and Full Supplies',
    quote: 'Carrying my own new bag and wearing new shoes on the first day of school made me feel like a champion.',
    shortSummary: 'Blessing was frequently sent home due to torn uniforms and a lack of required exercise books.',
    fullStory: 'Blessing had faced frequent absences due to strict school dress codes and a shortage of basic writing notebooks. Through our annual Back-2-School drive, she received tailored uniforms, sturdy leather school shoes, and a full backpack. Her attendance reached 98% this academic year.',
  },
  {
    id: 'twins',
    name: 'Kehinde & Taiwo',
    age: 10,
    program: 'Nourish Now',
    image: '/assets/images/community-outreach.jpg',
    headline: 'Daily Nutrition Restores Vitality and Focus in Class',
    quote: 'We don’t feel dizzy in the afternoon anymore because we get good food at school.',
    shortSummary: 'Twin brothers Kehinde and Taiwo often skipped meals due to domestic hardship in grassroots neighborhoods.',
    fullStory: 'Twin brothers Kehinde and Taiwo frequently experienced afternoon fatigue in class caused by skipped breakfasts and lunches. Nourish Now daily school lunch subsidies and seasonal Happy Boxes for their household restored their energy, weight percentiles, and classroom engagement.',
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
  const [isFeaturedExpanded, setIsFeaturedExpanded] = useState(false);
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'education' | 'nutrition' | 'outreaches'>('all');

  const filteredGallery = galleryPhotos.filter((item) => {
    if (galleryFilter === 'all') return true;
    return item.category === galleryFilter;
  });

  return (
    <main>
      {/* 1. HERO SECTION (Board 06 - Exact Hierarchy) */}
      <section className="hero-section" aria-label="Our Impact Hero">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: 840, margin: '0 auto 28px' }}>
            <span className="section-title-red" style={{ fontSize: 14 }}>Our Impact</span>
            <h1 style={{ margin: '8px 0 14px' }}>Real stories. Real change. Lasting impact.</h1>
            <p className="hero-subtitle" style={{ fontSize: 18, maxWidth: 680, margin: '0 auto 28px' }}>
              Every number represents a child whose trajectory was changed through education, nutrition, and love.
            </p>

            {/* Inline Metrics Strip (Board 06) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 16,
                background: '#ffffff',
                border: '1px solid var(--border-warm)',
                borderRadius: 14,
                padding: '20px 24px',
                boxShadow: 'var(--shadow-card)',
                maxWidth: 780,
                margin: '0 auto',
              }}
            >
              <div>
                <strong style={{ fontSize: 26, color: 'var(--primary-red)', display: 'block', lineHeight: 1.1 }}>5,000+</strong>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Children Educated</span>
              </div>
              <div>
                <strong style={{ fontSize: 26, color: 'var(--primary-green)', display: 'block', lineHeight: 1.1 }}>2,000+</strong>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Meals Provided</span>
              </div>
              <div>
                <strong style={{ fontSize: 26, color: 'var(--dark-neutral)', display: 'block', lineHeight: 1.1 }}>15+</strong>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Community Outreaches</span>
              </div>
              <div>
                <strong style={{ fontSize: 26, color: 'var(--primary-red)', display: 'block', lineHeight: 1.1 }}>120+</strong>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Active Volunteers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED IMPACT STORY (Board 06 Anchor - Amina B.) */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="Featured Impact Story">
        <div className="container" style={{ maxWidth: 1040 }}>
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-warm)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: 'var(--shadow-hover)',
            }}
          >
            <div className="responsive-split-summary" style={{ alignItems: 'center', gap: 0 }}>
              {/* Photo Side */}
              <div style={{ position: 'relative', minHeight: 320, height: '100%', width: '100%' }}>
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  unoptimized
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    background: 'var(--primary-red)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: 999,
                    fontSize: 12.5,
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Featured Story · {featuredStory.program}
                </div>
              </div>

              {/* Text Side */}
              <div style={{ padding: '36px 32px' }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Scholarship Recipient Spotlight
                </span>
                <h2 style={{ fontSize: 26, margin: '8px 0 14px', lineHeight: 1.25 }}>
                  {featuredStory.headline}
                </h2>

                <div style={{ margin: '14px 0 18px', paddingLeft: 16, borderLeft: '3px solid var(--primary-green)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: 15.5, color: 'var(--dark-neutral)', lineHeight: 1.6, margin: 0 }}>
                    &ldquo;{featuredStory.quote}&rdquo;
                  </p>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.65, margin: '0 0 20px' }}>
                  {isFeaturedExpanded ? featuredStory.fullStory : featuredStory.shortSummary}
                </p>

                <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsFeaturedExpanded(!isFeaturedExpanded)}
                    style={{ fontSize: 14, padding: '10px 20px' }}
                  >
                    {isFeaturedExpanded ? 'Show Summary ↑' : 'Read Full Story ›'}
                  </button>
                  <Link href="/scholars-program" className="btn btn-tertiary" style={{ fontSize: 14, padding: '10px 18px' }}>
                    Sponsor a Child Like Amina ♡
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MORE STORIES OF CHANGE (Board 06) */}
      <section className="section section-bg-light" aria-label="More Stories of Change">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Voices of Transformation</span>
            <h2>More Stories of Change</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Direct accounts of educational empowerment, classroom meals, and back-to-school kits.
            </p>
          </div>

          <div className="responsive-grid-3">
            {supportingStories.map((story) => {
              const isExpanded = expandedStoryId === story.id;
              return (
                <div
                  key={story.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: 14,
                    border: '1px solid var(--border-warm)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: 210, position: 'relative' }}>
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
                        background: 'rgba(40, 32, 21, 0.85)',
                        backdropFilter: 'blur(4px)',
                        color: '#ffffff',
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontSize: 11.5,
                        fontWeight: 700,
                      }}
                    >
                      {story.program}
                    </div>
                  </div>

                  <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: 19, margin: '0 0 6px' }}>{story.name}, Age {story.age}</h3>
                    <div style={{ fontSize: 13, color: 'var(--primary-red)', fontWeight: 600, marginBottom: 12 }}>
                      {story.headline}
                    </div>

                    <div style={{ margin: '0 0 14px', paddingLeft: 12, borderLeft: '2.5px solid var(--primary-red)' }}>
                      <p style={{ fontStyle: 'italic', fontSize: 13.5, color: 'var(--dark-neutral)', lineHeight: 1.5, margin: 0 }}>
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 16px' }}>
                      {isExpanded ? story.fullStory : story.shortSummary}
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
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
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
        </div>
      </section>

      {/* 4. PHOTO GALLERY ("Moments of Joy") */}
      <section className="section" aria-label="Moments of Joy Gallery">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Fieldwork Moments</span>
            <h2>Moments of Joy</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Visual snapshots from our school outreaches, happy boxes food distributions, and volunteer clinics.
            </p>

            {/* Filter tags (All / Education / Nutrition / Outreaches) */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
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
                Education Programs
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('nutrition')}
                className={`chip ${galleryFilter === 'nutrition' ? 'selected' : ''}`}
              >
                Nutrition & Relief
              </button>
              <button
                type="button"
                onClick={() => setGalleryFilter('outreaches')}
                className={`chip ${galleryFilter === 'outreaches' ? 'selected' : ''}`}
              >
                Community Outreaches
              </button>
            </div>
          </div>

          <div className="responsive-grid-4">
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
                <div style={{ height: 200, position: 'relative' }}>
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--dark-neutral)', lineHeight: 1.5 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ANNUAL REPORTS & TRANSPARENCY (Board 06) */}
      <section className="section section-bg-light" aria-label="Annual Reports and Transparency">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="section-header text-center">
            <span className="section-title-red">Stewardship & Governance</span>
            <h2>Reports & Transparency</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Audited financials, annual impact metrics, and official statutory accounts.
            </p>
          </div>

          <div style={{ background: '#ffffff', padding: 24, borderRadius: 14, border: '1px solid var(--border-warm)', marginBottom: 28, boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <CheckCircle2 size={24} color="var(--primary-green)" />
              <h3 style={{ fontSize: 18, margin: 0 }}>CAC Registration & Audit Compliance</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Happy Hands Community Development Foundation is registered under CAC Number <strong>RC 183177</strong>. We conduct annual audits and maintain full public accounts to honor every donor&apos;s trust.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            {annualReports.map((rep, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-warm)',
                  borderRadius: 14,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'var(--primary-red-light)',
                      color: 'var(--primary-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, margin: '0 0 3px' }}>{rep.year}</h3>
                    <p style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: 0 }}>
                      {rep.period} · {rep.size} · PDF
                    </p>
                  </div>
                </div>

                <a
                  href={`/assets/docs/${rep.filename}`}
                  download={rep.filename}
                  className="btn btn-secondary"
                  style={{ fontSize: 13.5, padding: '9px 18px' }}
                >
                  <Download size={15} /> Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
