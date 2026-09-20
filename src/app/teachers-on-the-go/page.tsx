'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  BookOpen, 
  Palette, 
  Lightbulb, 
  Coins, 
  ShieldCheck, 
  Scale, 
  Hammer, 
  Smile, 
  CheckCircle2, 
  Users, 
  Sparkles,
  ChevronRight,
  Heart
} from 'lucide-react';

const topics = [
  { icon: <Palette size={20} color="var(--primary-red)" />, label: 'Art & Craft' },
  { icon: <Lightbulb size={20} color="var(--primary-green)" />, label: 'Creativity & Innovation' },
  { icon: <Coins size={20} color="var(--primary-red)" />, label: 'Financial Literacy Basics' },
  { icon: <ShieldCheck size={20} color="var(--primary-green)" />, label: 'Integrity & Character' },
  { icon: <Scale size={20} color="var(--primary-red)" />, label: 'Equity & Inclusion' },
  { icon: <Hammer size={20} color="var(--primary-green)" />, label: 'Vocational Hands-on Skills' },
  { icon: <Smile size={20} color="var(--primary-red)" />, label: 'Recreational & Play-Based Learning' },
];

const teachersFAQs: FAQItem[] = [
  {
    question: 'How long does each Teachers on the Go session last?',
    answer: 'Teaching sessions run for an agreed period tailored with the host school or community center, typically scheduled on designated days across academic terms or during weekend community outreaches.',
  },
  {
    question: 'How are participating communities or schools identified?',
    answer: 'Happy Hands identifies underserved schools and community spaces through field evaluations, community leader partnerships, and direct requests from schools in low-income neighborhoods.',
  },
  {
    question: 'How is Teachers on the Go funded?',
    answer: 'Through generous donations from individuals, corporate partnerships, and grants that provide workshop materials, stationery toolkits, and volunteer educator logistics.',
  },
  {
    question: 'What does it mean to become a Teacher-on-the-Go?',
    answer: 'A Teacher-on-the-Go is a passionate volunteer educator, creative professional, or mentor who commits their time and talents to facilitate hands-on learning sessions for children.',
  },
  {
    question: 'How can I become a Teacher-on-the-Go volunteer?',
    answer: 'You can apply directly through our 3-step volunteer onboarding form on the Volunteer page. We provide orientation and curriculum toolkits before your first outreach.',
  },
];

export default function TeachersOnTheGoPage() {
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
          <strong style={{ color: 'var(--primary-red)' }}>Teachers on the Go</strong>
        </div>
      </div>

      {/* 2. SHORT HERO (Board 03) */}
      <section className="hero-section" aria-label="Teachers on the Go Hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-title-red">Education Intervention</span>
              <h1 style={{ margin: '8px 0 14px' }}>Teachers on the Go</h1>
              <p className="hero-subtitle">
                Mobile volunteer educators reaching grassroots classrooms.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '0 0 28px' }}>
                We deploy passionate volunteer educators into low-resource public and community schools to facilitate creative arts, foundational numeracy, and value-based life skills that spark curiosity and self-belief.
              </p>
              <div style={{ display: 'flex', gap: 14 }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openDonationModal('Teachers on the Go')}
                >
                  Support This Program ♡
                </button>
                <Link href="/volunteer" className="btn btn-secondary">
                  Join as Volunteer Teacher ›
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/hero-volunteer.jpg"
                alt="Teacher on the Go in classroom"
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
                  background: 'var(--primary-green)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
              >
                <BookOpen size={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE PROGRAM DOES (Icon List) */}
      <section className="section section-bg-light" aria-label="What the Program Does">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Curriculum Highlights</span>
            <h2>What the Program Does</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Hands-on subjects designed to expand practical thinking, creativity, and moral foundation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {topics.map((item, idx) => (
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

      {/* 4. WHAT IT PROVIDES (Bullets + 3 Feature Tiles) */}
      <section className="section" aria-label="What It Provides">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Tangible Resources</span>
            <h2>What It Provides</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              We furnish everything needed for interactive learning without burdening under-resourced schools.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Palette size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Creative Learning Toolkits</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                High-grade colored papers, paints, brushes, modelling clays, and craft supplies for experiential expression.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Trained Volunteer Mentors</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Passionate professionals vetted and trained on trauma-informed pedagogy and interactive engagement.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Character & Values Framework</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Structured modules that instill honesty, teamwork, self-worth, and dignity of labour into young hearts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVIDENCE & GALLERY (3-4 Photos) */}
      <section className="section section-bg-light" aria-label="Evidence and Gallery">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Classroom Moments</span>
            <h2>Evidence of Change</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Capturing smiles and breakthroughs in classrooms across Lagos and beyond.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image
                src="/assets/images/children-event.png"
                alt="Creative craft session"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image
                src="/assets/images/children-group.jpg"
                alt="Classroom attention and joy"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image
                src="/assets/images/community-outreach.jpg"
                alt="Outreach with volunteers"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ONE PRIMARY ACTION (CTA + Avatar Stack) */}
      <section className="section" aria-label="Primary Action">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <Heart size={36} color="var(--primary-red)" strokeWidth={2} style={{ marginBottom: 14 }} />
          <h2>Empower a Classroom Today</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '12px auto 28px' }}>
            Your gift provides toolkits, art supplies, and transport logistics for volunteer teachers to visit another grassroots school.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openDonationModal('Teachers on the Go')}
            >
              Donate to Teachers on the Go ♡
            </button>
            <Link href="/volunteer" className="btn btn-secondary">
              Apply as a Volunteer Teacher ›
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <div className="avatar-group">
              <Image src="/assets/images/hero-volunteer.jpg" alt="Volunteer" width={34} height={34} className="avatar-img" unoptimized />
              <Image src="/assets/images/children-event.png" alt="Scholar" width={34} height={34} className="avatar-img" unoptimized />
              <div className="avatar-plus-bubble" style={{ width: 34, height: 34, fontSize: 12 }}>+</div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Over 120 volunteers engaged across our teaching drives.</span>
          </div>
        </div>
      </section>

      {/* 7. FAQS (Accordion) */}
      <section className="section section-bg-light" aria-label="FAQs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Questions & Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Insights into our curriculum, volunteering commitments, and school partnerships.
            </p>
          </div>

          <FAQAccordion items={teachersFAQs} />
        </div>
      </section>

      {/* 8. ENDING CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
