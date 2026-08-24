'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { Backpack, CheckCircle2, ArrowRight, Heart, CreditCard, Building2 } from 'lucide-react';

export default function Back2SchoolPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--orange-soft)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--orange-dark)', borderColor: 'var(--orange)' }}>
            <Backpack size={16} /> Education Pillar
          </div>
          <h1>Back-2-School</h1>
          <p>Helping children learn in better conditions by providing essential school supplies and classroom kits.</p>
        </div>
      </section>

      {/* Content Split Layout */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/community-outreach.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
              alt="Children receiving school supplies"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <h2>Equipping students for success.</h2>
            <p>
              It is hard to learn when you don&apos;t have the right tools. Millions of children in underprivileged
              neighborhoods walk to school without notebooks, pens, or backpacks, making daily schooling an uphill
              struggle.
            </p>
            <p>
              Our <strong>Back-2-School</strong> campaign steps in to supply learning materials for children and under-resourced
              schools. We distribute high-quality school packs to ensure every child walks into their classroom with
              confidence, pride, and excitement to learn.
            </p>

            <div className="role-card" style={{ marginTop: 32, boxShadow: 'none', border: '1px solid var(--line)', padding: 24 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 20 }}>What we provide:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Exercise books, notebooks & stationery sets
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Durable backpacks and water bottles
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> School furniture (desks and chairs for partner schools)
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Whiteboards, markers, and classroom materials
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Back-2-School')}
              >
                <Heart size={16} fill="white" /> Sponsor Supplies
              </button>
              <Link className="btn btn-light" href="/contact">
                Partner with us
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
              <Heart size={14} /> Back-2-School Drive
            </div>
            <h2>Gift a Child their Complete School Pack</h2>
            <p>
              ₦5,000 provides a full backpack loaded with notebooks and writing supplies for one child for an entire
              academic term.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <CreditCard size={28} />
                <h3>Card Payment</h3>
                <p>Instant secure transaction via Paystack/Flutterwave.</p>
              </div>
              <div className="payment-card">
                <Building2 size={28} />
                <h3>Bank Transfer</h3>
                <p>Direct bank transfer with immediate impact allocation.</p>
              </div>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Back-2-School" />
          </div>
        </div>
      </section>
    </>
  );
}
