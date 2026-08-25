'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { 
  BusFront, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Sparkles,
  Palette,
  Lightbulb,
  Coins,
  ShieldCheck,
  Scale,
  Award,
  Hammer,
  Smile
} from 'lucide-react';

const topics = [
  'Art and craft',
  'Creativity',
  'Personal finance',
  'Integrity',
  'Equity',
  'Discipline',
  'Dignity of labour',
  'Focus',
  'Vocational activities',
  'Recreational activities',
  'Other areas that support the child\'s development',
];

const teachersFAQs: FAQItem[] = [
  {
    question: 'How long does the program last?',
    answer: 'The teaching sessions run for an agreed period tailored with the host school or community, typically scheduled on designated days across academic terms or during community outreaches.',
  },
  {
    question: 'How are participating communities or schools identified?',
    answer: 'Happy Hands identifies underserved schools and community spaces through field evaluations, community leader partnerships, and direct requests from schools in low-income neighborhoods.',
  },
  {
    question: 'How is the program funded?',
    answer: 'Through generous donations from individuals, corporate partnerships, and grants that provide workshop materials, stationery, and logistical support.',
  },
  {
    question: 'What does it mean to become a Teacher-on-the-Go?',
    answer: 'A Teacher-on-the-Go is a volunteer educator, mentor, or professional who commits their time and skills to facilitate practical, character-building, or creative sessions for children.',
  },
  {
    question: 'How can I become a Teacher-on-the-Go?',
    answer: (
      <span>
        You can apply directly through our{' '}
        <Link href="/volunteer" style={{ color: 'var(--orange)', fontWeight: 800, textDecoration: 'underline' }}>
          Volunteer Form
        </Link>
        . We provide simple onboarding and lesson orientation to get you started smoothly.
      </span>
    ),
  },
];

export default function TeachersOnTheGoPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--orange-soft)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--orange-dark)', borderColor: 'var(--orange)' }}>
            <BusFront size={16} /> Education Program
          </div>
          <h1>Teachers on the Go</h1>
          <p>Help us take learning beyond the classroom.</p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/community-outreach.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
              alt="Volunteer teaching children"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <p className="section-kicker">Learning Beyond the Classroom</p>
            <h2>Grooming well-rounded children.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              Teachers on the Go gives volunteers and organisations the opportunity to teach children in underserved schools and communities for an agreed period.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              The program helps children explore ideas and life skills they may not always encounter in their regular academic lessons.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155', fontWeight: 700 }}>
              Simply put, through Teachers on the Go, we are on the path to grooming well-rounded children.
            </p>

            <div className="role-card" style={{ marginTop: 24, boxShadow: 'none', border: '1px solid var(--line)', padding: 22 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 18 }}>Topics may include:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
                {topics.map((topic, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#475569', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="var(--orange)" style={{ flexShrink: 0 }} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-orange" href="/volunteer">
                Volunteer to Teach
              </Link>
              <Link className="btn btn-light" href="/contact">
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA / Donation Section */}
      <section className="section" id="donate">
        <div className="container donate-wrap">
          <div className="donate-copy">
            <div
              className="eyebrow"
              style={{
                background: 'rgba(255,255,255,.1)',
                color: '#fed7aa',
                borderColor: 'rgba(255,255,255,.12)',
              }}
            >
              <Heart size={14} /> Call to Action
            </div>
            <h2>Help us take learning beyond the classroom.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
              Every donation helps provide teaching materials, art supplies, and logistics to take life skills training into underserved schools and communities.
            </p>
            <p style={{ color: '#fed7aa', fontWeight: 800, marginTop: 14 }}>
              They’re the reason we exist. But you’re the reason this works.
            </p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('Teachers on the Go')}
              >
                Support Teachers on the Go
              </button>
              <Link href="/volunteer" className="btn btn-dark" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Become a Volunteer Teacher
              </Link>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Teachers on the Go" />
          </div>
        </div>
      </section>

      {/* Teachers on the Go FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={teachersFAQs}
            title="Teachers on the Go FAQs"
            kicker="Program Questions"
            description="Details about curriculum topics, volunteering commitments, and school partnerships."
          />
        </div>
      </section>
    </>
  );
}
