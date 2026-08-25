'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { 
  Backpack, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  BookOpen, 
  Building2 
} from 'lucide-react';

const back2SchoolFAQs: FAQItem[] = [
  {
    question: 'How do we choose participating communities or schools?',
    answer: 'Happy Hands identifies underserved communities and public or community schools that face acute shortages of basic learning furniture, textbooks, or essential supplies through on-ground field evaluations.',
  },
  {
    question: 'How is the program funded?',
    answer: 'Through voluntary donations from individuals, corporate partnerships, community drives, and philanthropic grants.',
  },
  {
    question: 'Is there an application process?',
    answer: 'Community leaders, educators, and partner headteachers can contact our projects team to submit expressions of need or request assistance ahead of the new school term.',
  },
  {
    question: 'How are beneficiaries selected?',
    answer: 'Beneficiaries are selected based on economic vulnerability, school attendance status, and urgent material need within targeted underserved areas.',
  },
  {
    question: 'How can someone sponsor the program?',
    answer: (
      <span>
        You can make an online donation directly through our multi-currency donation widget or bank transfer, or contact{' '}
        <a href="mailto:partnerships@happyhandsfoundation.org" style={{ color: 'var(--orange)', fontWeight: 800, textDecoration: 'underline' }}>
          partnerships@happyhandsfoundation.org
        </a>{' '}
        for corporate supply drives.
      </span>
    ),
  },
];

export default function Back2SchoolPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--orange-soft)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--orange-dark)', borderColor: 'var(--orange)' }}>
            <Backpack size={16} /> Education Program
          </div>
          <h1>Back-2-School</h1>
          <p>Creating a more conducive learning environment for the children in the communities we serve.</p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/children-event.png"
              fallbackSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
              alt="Children receiving school supplies"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <p className="section-kicker">Learning Environment Support</p>
            <h2>Supplies for a better learning experience.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              Our Back-2-School intervention supports children and schools in underserved communities with some of the supplies they need for a better learning experience.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              For children, this may mean school supplies at the beginning of a new academic year.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              For schools, it may mean tables, chairs, boards, books and other materials needed to make learning easier.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155', fontWeight: 700 }}>
              Together, we can create a more conducive learning environment for the children in the communities we serve.
            </p>

            <div className="role-card" style={{ marginTop: 24, boxShadow: 'none', border: '1px solid var(--line)', padding: 22 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 18 }}>Support areas include:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> School bags, exercise books, and writing supplies
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> School shoes, socks, and uniform materials
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Classroom tables, desks, and student chairs
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Writing boards, chalkboards, and reference textbooks
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Back-2-School')}
              >
                <Heart size={16} fill="white" /> Support Back-2-School
              </button>
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
              <Heart size={14} /> Back-2-School Drive
            </div>
            <h2>Equip Children and Schools for Better Learning</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
              Together, we can create a more conducive learning environment for the children in the communities we serve. Every contribution provides essential supplies directly to children and schools.
            </p>
            <p style={{ color: '#fed7aa', fontWeight: 800, marginTop: 14 }}>
              They’re the reason we exist. But you’re the reason this works.
            </p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('Back-2-School')}
              >
                Donate to Back-2-School
              </button>
              <Link href="/volunteer" className="btn btn-dark" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Volunteer for Drives
              </Link>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Back-2-School" />
          </div>
        </div>
      </section>

      {/* Back-2-School FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={back2SchoolFAQs}
            title="Back-2-School FAQs"
            kicker="Drive Questions"
            description="Details regarding community selection, school materials distribution, and sponsorship."
          />
        </div>
      </section>
    </>
  );
}
