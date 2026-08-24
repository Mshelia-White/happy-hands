'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { HeartPulse, CheckCircle2, ArrowRight, Heart, CreditCard, Building2, Sparkles } from 'lucide-react';

export default function FitTotPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--green-bg)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--green)', borderColor: 'var(--green)' }}>
            <HeartPulse size={16} /> Health Pillar
          </div>
          <h1>FitTot</h1>
          <p>Quality healthcare access and preventive medical screenings for vulnerable children.</p>
        </div>
      </section>

      {/* Content Split Layout */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/community-outreach.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
              alt="Children receiving health screening"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <h2>Prevention, care, and wellness.</h2>
            <p>
              Every child deserves a healthy start in life, yet many preventable illnesses continue to affect children in
              marginalized communities due to a lack of basic healthcare access and medical coverage.
            </p>
            <p>
              The <strong>FitTot</strong> initiative is our healthcare drive designed to bridge this gap. We are building
              strategic partnerships with medical professionals, hospitals, and HMOs to provide comprehensive,
              affordable care access to children who need it most.
            </p>

            <div className="role-card" style={{ marginTop: 32, boxShadow: 'none', border: '1px solid var(--line)', padding: 24 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 20 }}>What to expect:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--green)" /> Pediatric medical outreach & health screenings
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--green)" /> HMO partnerships & health insurance coverage
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--green)" /> Basic immunizations, deworming, and dental clinics
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--green)" /> Vision and hearing checks for early detection
                </li>
              </ul>
            </div>

            <div className="eyebrow" style={{ marginTop: 24, display: 'inline-flex' }}>
              <Sparkles size={14} color="var(--orange)" /> Coming Soon / Launch Phase
            </div>
            <p style={{ marginTop: 12, fontSize: 15, color: '#64748b' }}>
              We are currently onboarding medical professionals, doctors, nurses, and corporate healthcare partners to
              scale this initiative.
            </p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-dark" href="/contact">
                Partner with us
              </Link>
              <Link className="btn btn-light" href="/volunteer">
                Volunteer as a Doctor/Nurse
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
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
              <Heart size={14} /> Health Support
            </div>
            <h2>Fund Pediatric Health Coverage for a Child</h2>
            <p>
              Support our medical outreaches, deworming campaigns, and HMO enrollment drives for underprivileged
              children.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <CreditCard size={28} />
                <h3>Card Payment</h3>
                <p>Fast online payment via Paystack or Flutterwave.</p>
              </div>
              <div className="payment-card">
                <Building2 size={28} />
                <h3>Bank Transfer</h3>
                <p>Direct bank transfers with verified accounting records.</p>
              </div>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="FitTot" />
          </div>
        </div>
      </section>
    </>
  );
}
