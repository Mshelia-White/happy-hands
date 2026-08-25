'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { 
  HeartPulse, 
  Sparkles, 
  Clock, 
  Baby, 
  Smile, 
  Eye, 
  Ear, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight,
  Heart
} from 'lucide-react';

const fittotInitiatives = [
  {
    title: 'Happy Kids Health',
    description: 'General health awareness and wellness for children.',
    icon: <HeartPulse size={22} color="#059669" />,
  },
  {
    title: 'First 1,000 Days',
    description: 'Maternal and child health support during crucial early developmental stages.',
    icon: <Baby size={22} color="#059669" />,
  },
  {
    title: 'Tiny Smiles',
    description: 'Basic dental care awareness and hygiene services.',
    icon: <Smile size={22} color="#059669" />,
  },
  {
    title: 'Sharp Sight',
    description: 'Basic vision and eye health support for school-age children.',
    icon: <Eye size={22} color="#059669" />,
  },
  {
    title: 'Little Whispers',
    description: 'Basic hearing checks and support.',
    icon: <Ear size={22} color="#059669" />,
  },
  {
    title: 'Special Care',
    description: 'Basic medical assistance for children with special health needs.',
    icon: <HeartHandshake size={22} color="#059669" />,
  },
];

const fitTotFAQs: FAQItem[] = [
  {
    question: 'When is FitTot launching?',
    answer: 'FitTot is currently in its launch phase. We are actively finalizing strategic partnerships with healthcare professionals, clinics, and medical volunteers to begin phased community rollouts.',
  },
  {
    question: 'How is the program funded?',
    answer: 'Through seed grants, corporate healthcare partnerships, and voluntary contributions from individuals passionate about child healthcare access.',
  },
  {
    question: 'How can I partner with FitTot?',
    answer: (
      <span>
        Medical practitioners, pediatricians, dentists, optometrists, pharmaceutical donors, and health facilities can partner with us by emailing{' '}
        <a href="mailto:partnerships@happyhandsfoundation.org" style={{ color: 'var(--orange)', fontWeight: 800, textDecoration: 'underline' }}>
          partnerships@happyhandsfoundation.org
        </a>
        .
      </span>
    ),
  },
  {
    question: 'Who will benefit from FitTot?',
    answer: 'Children and mothers in vulnerable, underserved communities who currently face steep financial or geographic barriers to essential health screenings and basic medical care.',
  },
];

export default function FitTotPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: '#fefce8' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: '#854d0e', borderColor: '#fde047' }}>
            <Clock size={16} /> Coming Soon / Launch Phase
          </div>
          <h1 style={{ color: '#713f12' }}>FitTot</h1>
          <p style={{ color: '#854d0e' }}>
            Every child deserves a shot at quality healthcare.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/hero-volunteer.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
              alt="Healthcare support for children"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', background: '#fef3c7', color: '#92400e', borderRadius: 999, fontSize: 13, fontWeight: 800, marginBottom: 12 }}>
              <Clock size={14} /> Launch Phase Initiative
            </div>
            <h2>Bridging the healthcare gap for vulnerable children and families.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              At Happy Hands, we believe every child deserves a shot at quality healthcare. FitTot aims to bridge the healthcare gap for vulnerable children and families by creating opportunities for them to access proper healthcare at affordable costs.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#475569', background: '#fffbeb', padding: 14, borderRadius: 12, border: '1px solid #fef3c7' }}>
              <strong>Program Status:</strong> FitTot is currently in its launch phase. We are laying the groundwork to ensure sustainable healthcare support for the children who need it most.
            </p>

            <h3 style={{ margin: '24px 0 14px', fontSize: 18, color: 'var(--slate)' }}>
              Under FitTot, we are working toward:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {fittotInitiatives.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--line)',
                    borderRadius: 14,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {item.icon}
                    <strong style={{ fontSize: 15, color: 'var(--slate)' }}>{item.title}</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-orange" href="/contact">
                Partner as Healthcare Provider
              </Link>
              <Link className="btn btn-light" href="/volunteer">
                Volunteer Medical Skills
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
              <Heart size={14} /> Healthcare Launch
            </div>
            <h2>Help Us Lay the Groundwork for Child Healthcare</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
              Early medical screenings, vision checks, and maternal care save lives. Join us in building the infrastructure for FitTot.
            </p>
            <p style={{ color: '#fed7aa', fontWeight: 800, marginTop: 14 }}>
              They’re the reason we exist. But you’re the reason this works.
            </p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('FitTot')}
              >
                Support FitTot Launch
              </button>
              <Link href="/contact" className="btn btn-dark" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Medical Partnerships
              </Link>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="FitTot" />
          </div>
        </div>
      </section>

      {/* FitTot FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={fitTotFAQs}
            title="FitTot FAQs"
            kicker="Launch Phase Inquiries"
            description="Details regarding launch timelines, healthcare partner onboarding, and planned clinics."
          />
        </div>
      </section>
    </>
  );
}
