'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Clock, 
  Package, 
  Soup, 
  Building2 
} from 'lucide-react';

export default function NourishNowPage() {
  const { openDonationModal } = useDonation();

  const nourishFAQs: FAQItem[] = [
    {
      question: 'How do we identify the communities or families who benefit?',
      answer: 'Our teams conduct local community assessments and collaborate with verified community leaders to identify families and children facing severe nutritional and food security challenges.',
    },
    {
      question: 'How is the program funded?',
      answer: 'Nourish Now is funded through voluntary monetary contributions from caring donors, corporate CSR grants, and partnerships with philanthropic groups.',
    },
    {
      question: 'Can I donate food items instead of money?',
      answer: 'Yes! We warmly accept non-perishable food items (such as rice, beans, grains, cooking oil, packaged staples, and canned goods) during our planned seasonal drives and outreaches.',
    },
    {
      question: 'How do I donate food items?',
      answer: (
        <span>
          To coordinate a physical food drop-off or bulk donation, please email{' '}
          <a href="mailto:projects@happyhandsfoundation.org" style={{ color: 'var(--orange)', fontWeight: 800, textDecoration: 'underline' }}>
            projects@happyhandsfoundation.org
          </a>{' '}
          or call our projects line at <strong>08121353755</strong>.
        </span>
      ),
    },
    {
      question: 'What does it mean to sponsor a food box?',
      answer: (
        <span>
          Sponsoring a Happy Box means providing the funds or groceries required to pack a family food parcel containing essential nutrition for the holiday season.{' '}
          <button
            type="button"
            onClick={() => openDonationModal('Nourish Now')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'var(--orange)',
              fontWeight: 800,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Click here to sponsor a box today
          </button>
          .
        </span>
      ),
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: '#f0fdf4' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: '#15803d', borderColor: '#86efac' }}>
            <Utensils size={16} /> Health Program
          </div>
          <h1 style={{ color: '#14532d' }}>Nourish Now</h1>
          <p style={{ color: '#166534' }}>
            Providing temporary food relief for children and families.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/volunteer-community.png"
              fallbackSrc="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
              alt="Volunteers sharing food packages"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <p className="section-kicker" style={{ color: '#15803d' }}>
              Temporary Food Relief
            </p>
            <h2>Nourishing young minds and families.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              Nourish Now provides temporary food relief for children and families. Hunger and malnutrition directly affect a child&apos;s ability to concentrate, stay in school, and thrive.
            </p>

            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Active Initiative 1: Happy Boxes */}
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Package size={20} color="var(--orange)" />
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800 }}>Happy Boxes</h3>
                  <span style={{ fontSize: 11, fontWeight: 800, background: 'var(--orange-soft)', color: 'var(--orange-dark)', padding: '2px 8px', borderRadius: 999 }}>
                    Active
                  </span>
                </div>
                <p style={{ margin: 0, color: '#475569', fontSize: 14, lineHeight: 1.6 }}>
                  Food packages shared with children and families in underserved communities every December.
                </p>
              </div>

              {/* Active Initiative 2: Eat 'n' Learn */}
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  borderRadius: 16,
                  padding: 20,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Soup size={20} color="#15803d" />
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800 }}>Eat &apos;n&apos; Learn</h3>
                  <span style={{ fontSize: 11, fontWeight: 800, background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: 999 }}>
                    Active
                  </span>
                </div>
                <p style={{ margin: 0, color: '#475569', fontSize: 14, lineHeight: 1.6 }}>
                  Food support for students in schools to ensure children stay healthy, nourished, and focused in class.
                </p>
              </div>

              {/* Coming Soon: Community Food Bank */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px dashed #cbd5e1',
                  borderRadius: 16,
                  padding: 20,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <Building2 size={20} color="#64748b" />
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#475569' }}>Community Food Bank</h3>
                  <span style={{ fontSize: 11, fontWeight: 800, background: '#f1f5f9', color: '#64748b', padding: '2px 8px', borderRadius: 999, border: '1px solid #cbd5e1' }}>
                    Coming Soon
                  </span>
                </div>
                <p style={{ margin: 0, color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>
                  A planned permanent community pantry and food distribution hub to provide continuous nutritional support for vulnerable households.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Nourish Now')}
              >
                <Heart size={16} fill="white" /> Support Nourish Now
              </button>
              <Link className="btn btn-light" href="/contact">
                Donate Food Items
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
              <Heart size={14} /> Nutrition Relief
            </div>
            <h2>Help Us Keep Children Nourished and In School</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
              Your support powers our Happy Boxes holiday outreach and Eat &apos;n&apos; Learn school feeding initiatives.
            </p>
            <p style={{ color: '#fed7aa', fontWeight: 800, marginTop: 14 }}>
              They’re the reason we exist. But you’re the reason this works.
            </p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('Nourish Now')}
              >
                Donate to Nourish Now
              </button>
              <Link href="/volunteer" className="btn btn-dark" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Volunteer for Food Drives
              </Link>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Nourish Now" />
          </div>
        </div>
      </section>

      {/* Nourish Now FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={nourishFAQs}
            title="Nourish Now FAQs"
            kicker="Food Relief Questions"
            description="Details about family identification, food donations, and Happy Boxes sponsorship."
          />
        </div>
      </section>
    </>
  );
}
