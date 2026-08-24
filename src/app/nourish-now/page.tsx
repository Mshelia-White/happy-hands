'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { Utensils, CheckCircle2, ArrowRight, Heart, CreditCard, Building2 } from 'lucide-react';

export default function NourishNowPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--green-bg)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--green)', borderColor: 'var(--green)' }}>
            <Utensils size={16} /> Health Pillar
          </div>
          <h1>Nourish Now</h1>
          <p>Food relief for children and families in need to combat malnutrition and hunger.</p>
        </div>
      </section>

      {/* Content Split Layout */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <Image
              src="/assets/images/volunteer-community.png"
              alt="Volunteers distributing food relief"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <h2>Fighting hunger, fueling potential.</h2>
            <p>
              Proper nutrition is fundamental to a child&apos;s physical health, cognitive development, and ability to stay
              focused in class. Chronic hunger makes learning nearly impossible and leaves children vulnerable to
              preventable diseases.
            </p>
            <p>
              The <strong>Nourish Now</strong> initiative provides direct food relief through targeted campaigns across
              underserved communities. We ensure that vulnerable families have access to nutritious staples and hot
              meals.
            </p>

            <div className="role-card" style={{ marginTop: 32, boxShadow: 'none', border: '1px solid var(--line)', padding: 24 }}>
              <h3 style={{ margin: '0 0 16px', fontSize: 20 }}>Our Food Relief Initiatives:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--green)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <strong style={{ color: 'var(--slate)' }}>Happy Boxes:</strong> Care packages of essential food
                    items (rice, beans, grains, cooking oil, canned goods) for needy households.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--green)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <strong style={{ color: 'var(--slate)' }}>Eat &apos;n&apos; Learn:</strong> Hot, balanced school meals
                    delivered directly to students during learning hours.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 12, color: '#475569', fontWeight: 700, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--green)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <strong style={{ color: 'var(--slate)' }}>Community Food Bank:</strong> A sustained community food
                    reserve designed to support ongoing emergency household relief.
                  </div>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-orange"
                style={{ background: 'var(--green)', boxShadow: '0 14px 38px rgba(4, 120, 87, 0.24)' }}
                onClick={() => openDonationModal('Nourish Now')}
              >
                <Heart size={16} fill="white" /> Support Food Relief
              </button>
              <Link className="btn btn-light" href="/contact">
                Partner as a Food Vendor
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
              <Heart size={14} /> Nutrition Relief
            </div>
            <h2>Put a Warm, Nutritious Meal on a Child&apos;s Plate</h2>
            <p>
              Your gift provides direct family food parcels and hot meals at school. Every single Naira translates
              directly into nutrition and comfort.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <CreditCard size={28} />
                <h3>Card Payment</h3>
                <p>Secure online payment via Paystack or Flutterwave.</p>
              </div>
              <div className="payment-card">
                <Building2 size={28} />
                <h3>Bank Transfer</h3>
                <p>Direct bank transfers with verified accounting records.</p>
              </div>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Nourish Now" />
          </div>
        </div>
      </section>
    </>
  );
}
