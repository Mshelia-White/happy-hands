'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { GraduationCap, CheckCircle2, Quote, ArrowRight, Heart, CreditCard, Building2 } from 'lucide-react';

export default function ScholarsProgramPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--orange-soft)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--orange-dark)', borderColor: 'var(--orange)' }}>
            <GraduationCap size={16} /> Education Pillar
          </div>
          <h1>Scholars Program</h1>
          <p>Ensuring every child has access to basic education through merit and need-based scholarships.</p>
        </div>
      </section>

      {/* Content Split Layout */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/volunteer-community.png"
              fallbackSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
              alt="Children in the Scholars Program"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <h2>Opening doors through education.</h2>
            <p>
              The Scholars Program is our flagship initiative designed to ensure that lack of funds never stops a child
              from learning. We provide comprehensive scholarships that cover tuition fees, uniforms, textbooks,
              extra-curricular activities, and continuous monitoring.
            </p>
            <p>
              Our scholars are also enrolled in inclusive personal development sessions designed to build emotional
              intelligence, leadership qualities, and critical thinking skills, ensuring they grow into well-rounded
              individuals ready to succeed.
            </p>

            <div className="role-card" style={{ marginTop: 32, boxShadow: 'none', border: '1px solid var(--line)', padding: 24 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 20 }}>What the scholarship covers:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Full tuition & term assessment fees
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Extra-curricular & sports activity support
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Continuous academic mentorship & tracking
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Inclusive personal development programs
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Scholars Program')}
              >
                <Heart size={16} fill="white" /> Sponsor a Scholar
              </button>
              <Link className="btn btn-light" href="/contact">
                Partner with this program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="quote-banner">
        <div className="container">
          <Quote size={44} color="var(--orange)" style={{ marginBottom: 20 }} />
          <h3 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', maxWidth: 850 }}>
            &quot;It&apos;s been a while since I last saw my daughter this excited. Sometimes, I&apos;d catch Esther making mental notes of some things she learnt in school for the day... The scholarship has been all too wonderful, and timely as well.&quot;
          </h3>
          <p>— Mrs. Jacob, Mother of a Scholars Beneficiary</p>
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
              <Heart size={14} /> Direct Impact
            </div>
            <h2>Sponsor a child through the Scholars Program</h2>
            <p>
              Your monthly or one-time donation funds tuition, materials, and personal mentoring for bright children who
              otherwise lack the resources to attend school.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <CreditCard size={28} />
                <h3>Card Payment</h3>
                <p>Instant secure checkout via Paystack or Flutterwave.</p>
              </div>
              <div className="payment-card">
                <Building2 size={28} />
                <h3>Direct Bank Transfer</h3>
                <p>Transfer straight into our verified NGO accounts.</p>
              </div>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Scholars Program" />
          </div>
        </div>
      </section>
    </>
  );
}
