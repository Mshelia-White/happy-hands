'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { BusFront, CheckCircle2, ArrowRight, Heart, CreditCard, Building2 } from 'lucide-react';

export default function TeachersOnTheGoPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--orange-soft)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--orange-dark)', borderColor: 'var(--orange)' }}>
            <BusFront size={16} /> Education Pillar
          </div>
          <h1>Teachers on the Go</h1>
          <p>Grooming well-rounded children beyond the traditional classroom walls.</p>
        </div>
      </section>

      {/* Content Split Layout */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <Image
              src="/assets/images/volunteer-community.png"
              alt="Volunteer teaching children"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <h2>Learning beyond academics.</h2>
            <p>
              We believe that true education is more than just memorizing formulas. To prepare the next generation for a
              complex world, we must equip them with practical life skills, character building, and creative confidence.
            </p>
            <p>
              The <strong>Teachers on the Go</strong> initiative deploys passionate volunteer educators, mentors, and
              partner organizations to teach non-academic topics in underserved schools and communities once or twice
              weekly.
            </p>

            <div className="role-card" style={{ marginTop: 32, boxShadow: 'none', border: '1px solid var(--line)', padding: 24 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 20 }}>What we teach:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Social and emotional intelligence
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Critical thinking & creative problem solving
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Health, hygiene, and personal grooming
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Basic financial literacy & money management
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-orange" href="/volunteer">
                Volunteer to Teach
              </Link>
              <Link className="btn btn-light" href="/contact">
                Partner Your School
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
              <Heart size={14} /> Support Life Skills
            </div>
            <h2>Fuel Mobile Mentorship Across Communities</h2>
            <p>
              Your support funds workshop kits, teaching supplies, and logistics to reach children in grassroots
              neighborhoods.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <CreditCard size={28} />
                <h3>Card Payment</h3>
                <p>Fast online giving via Paystack or Flutterwave.</p>
              </div>
              <div className="payment-card">
                <Building2 size={28} />
                <h3>Bank Transfer</h3>
                <p>Direct bank transfers with verified accounting records.</p>
              </div>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Teachers on the Go" />
          </div>
        </div>
      </section>
    </>
  );
}
