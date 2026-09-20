'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  Backpack, 
  BookOpen, 
  Sparkles, 
  Shirt, 
  Footprints, 
  PenTool, 
  CheckCircle2, 
  Heart,
  ChevronRight
} from 'lucide-react';

const back2SchoolItems = [
  { icon: <Backpack size={20} color="var(--primary-red)" />, label: 'Ergonomic Sturdy Backpacks' },
  { icon: <BookOpen size={20} color="var(--primary-green)" />, label: 'Ruled & Plain Exercise Books' },
  { icon: <Shirt size={20} color="var(--primary-red)" />, label: 'Custom Tailored School Uniforms' },
  { icon: <Footprints size={20} color="var(--primary-green)" />, label: 'School Shoes & White Socks' },
  { icon: <PenTool size={20} color="var(--primary-red)" />, label: 'Complete Writing & Stationery Kits' },
  { icon: <Sparkles size={20} color="var(--primary-green)" />, label: 'Mathematical Instruments & Water Bottles' },
];

const back2SchoolFAQs: FAQItem[] = [
  {
    question: 'How do we choose participating communities or schools?',
    answer: 'Happy Hands identifies underserved communities and public or community schools that face acute shortages of basic learning furniture, textbooks, or essential supplies through on-ground field evaluations.',
  },
  {
    question: 'How is the Back-2-School program funded?',
    answer: 'Through voluntary donations from individuals, corporate supply drives, community fundraisers, and philanthropic partner grants.',
  },
  {
    question: 'Is there an application process for schools?',
    answer: 'Community leaders, educators, and partner headteachers can contact our projects team to submit expressions of need or request assistance ahead of the September academic resumption.',
  },
  {
    question: 'How are individual beneficiaries selected?',
    answer: 'Beneficiaries are selected based on economic vulnerability, school attendance status, and urgent material need within targeted underserved areas.',
  },
  {
    question: 'How can an organization sponsor a full classroom drive?',
    answer: 'Corporate teams can sponsor batches of 50, 100, or 500 kit packages, or organize an internal staff back-to-school donation drive in collaboration with our logistics team.',
  },
];

export default function Back2SchoolPage() {
  const { openDonationModal } = useDonation();

  return (
    <main>
      {/* 1. BREADCRUMB */}
      <div style={{ background: 'var(--light-neutral)', padding: '12px 0', borderBottom: '1px solid var(--border-warm)', fontSize: 13.5 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--dark-neutral)' }}>Home</Link>
          <span>›</span>
          <Link href="/programs" style={{ color: 'var(--dark-neutral)' }}>Our Programs</Link>
          <span>›</span>
          <strong style={{ color: 'var(--primary-red)' }}>Back-2-School</strong>
        </div>
      </div>

      {/* 2. SHORT HERO (Board 03) */}
      <section className="hero-section" aria-label="Back-2-School Hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-title-red">Annual Resumption Drive</span>
              <h1 style={{ margin: '8px 0 14px' }}>Back-2-School Campaign</h1>
              <p className="hero-subtitle">
                Equipping students annually with quality learning materials.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '0 0 28px' }}>
                Every September, thousands of children risk falling behind because their families cannot afford exercise books, school uniforms, or backpacks. We bridge this divide by distributing complete academic kits before the first bell rings.
              </p>
              <div style={{ display: 'flex', gap: 14 }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openDonationModal('Back-2-School')}
                >
                  Sponsor a School Kit ♡
                </button>
                <Link href="/get-involved" className="btn btn-secondary">
                  Host a Supply Drive ›
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/children-event.png"
                alt="Children celebrating new school bags"
                width={560}
                height={420}
                className="hero-photo"
                priority
                unoptimized
              />
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'var(--primary-red)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
              >
                <Backpack size={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE PROGRAM DOES (Icon List) */}
      <section className="section section-bg-light" aria-label="Kit Contents">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Kit Contents</span>
            <h2>What Each Back-2-School Kit Delivers</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              A full set of essential tools ensuring every child steps into the classroom with head held high.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {back2SchoolItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-warm)',
                  borderRadius: 12,
                  padding: '18px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--light-neutral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <strong style={{ fontSize: 14, color: 'var(--dark-neutral)' }}>{item.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT IT PROVIDES (3 Feature Tiles) */}
      <section className="section" aria-label="What It Provides">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Impact Pillars</span>
            <h2>How It Restores Confidence</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Providing dignity, reducing absenteeism, and eliminating learning stigma.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Backpack size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>School Readiness</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Children arrive prepared on day one with textbooks, notebooks, and writing materials so no lessons are missed.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Shirt size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Dignity & Belonging</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Wearing clean, properly fitted uniforms and shoes eliminates peer stigma and empowers children to participate freely.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <BookOpen size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Family Relief</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Lifting the heavy burden of school resumption costs from low-income parents, preventing dropout rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVIDENCE & GALLERY */}
      <section className="section section-bg-light" aria-label="Evidence and Gallery">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Outreach Moments</span>
            <h2>Smiles on Distribution Day</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Real moments from our community backpack handovers across Lagos and Ogun communities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/children-event.png" alt="Distribution day joy" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/community-outreach.jpg" alt="Bag distribution line" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/hero-volunteer.jpg" alt="Volunteer fitting uniform" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ONE PRIMARY ACTION */}
      <section className="section" aria-label="Primary Action">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <Heart size={36} color="var(--primary-red)" strokeWidth={2} style={{ marginBottom: 14 }} />
          <h2>Send a Child Back to School with Pride</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '12px auto 28px' }}>
            ₦85,000 completely equips one child with a backpack, customized uniform, notebooks, shoes, socks, and writing supplies for an entire year.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openDonationModal('Back-2-School', 85000)}
            >
              Sponsor a Back-to-School Kit (₦85,000) ♡
            </button>
            <Link href="/scholars-program" className="btn btn-secondary">
              View Full Scholars Package ›
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <div className="avatar-group">
              <Image src="/assets/images/children-event.png" alt="Scholar" width={34} height={34} className="avatar-img" unoptimized />
              <Image src="/assets/images/hero-volunteer.jpg" alt="Volunteer" width={34} height={34} className="avatar-img" unoptimized />
              <div className="avatar-plus-bubble" style={{ width: 34, height: 34, fontSize: 12 }}>+</div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Over 5,000 children supported with educational materials to date.</span>
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="section section-bg-light" aria-label="FAQs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Questions & Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              How our annual kit distribution is organized, audited, and delivered.
            </p>
          </div>

          <FAQAccordion items={back2SchoolFAQs} />
        </div>
      </section>

      {/* 8. ENDING CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
