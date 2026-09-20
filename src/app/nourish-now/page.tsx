'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  Utensils, 
  Package, 
  Apple, 
  Droplet, 
  Heart, 
  Soup, 
  ShieldAlert, 
  CheckCircle2, 
  PhoneCall,
  Sparkles
} from 'lucide-react';

const nourishItems = [
  { icon: <Utensils size={20} color="var(--primary-green)" />, label: 'Daily Hot School Lunches' },
  { icon: <Package size={20} color="var(--primary-red)" />, label: 'Happy Boxes Family Food Parcels' },
  { icon: <Apple size={20} color="var(--primary-green)" />, label: 'Fresh Fruits & Micronutrient Relief' },
  { icon: <Droplet size={20} color="var(--primary-red)" />, label: 'Clean Drinking Water Access' },
  { icon: <Soup size={20} color="var(--primary-green)" />, label: 'Community Outreaches in Grassroots Neighborhoods' },
  { icon: <ShieldAlert size={20} color="var(--primary-red)" />, label: 'Emergency Nutrition for Vulnerable Households' },
];

const nourishFAQs: FAQItem[] = [
  {
    question: 'How do we identify the communities or families who benefit?',
    answer: 'Our field teams conduct local household poverty assessments and collaborate with vetted community leaders to identify families facing acute food insecurity.',
  },
  {
    question: 'How is Nourish Now funded?',
    answer: 'Nourish Now is funded through voluntary monetary donations, corporate CSR grants, and partnerships with philanthropic food production companies.',
  },
  {
    question: 'Can I donate food items instead of money?',
    answer: 'Yes! We warmly welcome non-perishable food items (such as bags of rice, beans, grains, cooking oil, and canned goods) at our Lagos collection center during scheduled seasonal drives.',
  },
  {
    question: 'How do I coordinate a physical food drop-off?',
    answer: 'To coordinate a food drop-off or corporate pantry drive, please email projects@happyhandsfoundation.org or call our logistics team directly at 08121353755.',
  },
  {
    question: 'What does it mean to sponsor a "Happy Box"?',
    answer: 'Sponsoring a Happy Box provides the funding or groceries to pack a full family food parcel designed to feed a household throughout the festive or holiday season.',
  },
];

export default function NourishNowPage() {
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
          <strong style={{ color: 'var(--primary-green)' }}>Nourish Now</strong>
        </div>
      </div>

      {/* 2. SHORT HERO (Board 03) */}
      <section className="hero-section" aria-label="Nourish Now Hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-title-red" style={{ color: 'var(--primary-green)' }}>Nutrition & Food Security</span>
              <h1 style={{ margin: '8px 0 14px' }}>Nourish Now</h1>
              <p className="hero-subtitle">
                Nutritional food distribution and school lunch relief.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '0 0 28px' }}>
                A child cannot learn on an empty stomach. Nourish Now provides consistent, nutrient-dense school lunches and distributes family food parcels (&quot;Happy Boxes&quot;) to combat childhood malnutrition across underserved communities.
              </p>
              <div style={{ display: 'flex', gap: 14 }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => openDonationModal('Nourish Now')}
                >
                  Sponsor a Meal ♡
                </button>
                <Link href="/contact" className="btn btn-tertiary">
                  Donate Food Items ›
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/community-outreach.jpg"
                alt="Community food outreach"
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
                <Utensils size={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE PROGRAM DOES (Icon List) */}
      <section className="section section-bg-light" aria-label="Program Capabilities">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Interventions</span>
            <h2>What the Program Does</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Direct nutrition channels tackling classroom hunger and domestic food shortages.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {nourishItems.map((item, idx) => (
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

      {/* 4. WHAT IT PROVIDES (3 Feature Tiles) */}
      <section className="section" aria-label="What It Provides">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Key Initiatives</span>
            <h2>What It Provides</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Two core mechanisms protecting children from hunger throughout the year.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Utensils size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>School Lunch Subsidy</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Every weekday lunch is provided for enrolled scholars so they stay awake, engaged, and physically thriving during class.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Package size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>The Happy Boxes Drive</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Holiday food hampers containing rice, beans, cooking oil, and nutritious dry goods for families that have little to celebrate with.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Apple size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Nutritional Monitoring</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Periodic height-for-age and BMI checkups tracking growth progress to ensure early intervention for any deficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVIDENCE & GALLERY */}
      <section className="section section-bg-light" aria-label="Evidence and Gallery">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Outreach Impact</span>
            <h2>Over 2,000+ Meals Served</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Moments from our grassroots food distributions and happy box deliveries.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/community-outreach.jpg" alt="Food parcel handover" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/children-event.png" alt="Meal time at outreach" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/hero-volunteer.jpg" alt="Volunteers packing happy boxes" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ONE PRIMARY ACTION */}
      <section className="section" aria-label="Primary Action">
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <Heart size={36} color="var(--primary-green)" strokeWidth={2} style={{ marginBottom: 14 }} />
          <h2>Ensure No Child Goes Hungry in Class</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '12px auto 28px' }}>
            ₦130,000 provides full daily lunch relief for an entire academic term. Give whatever you can today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 28, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => openDonationModal('Nourish Now')}
            >
              Donate to Nourish Now ♡
            </button>
            <Link href="/scholars-program" className="btn btn-tertiary">
              View Nutrition Sponsorship Packages ›
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <div className="avatar-group">
              <Image src="/assets/images/community-outreach.jpg" alt="Community" width={34} height={34} className="avatar-img" unoptimized />
              <Image src="/assets/images/children-group.jpg" alt="Children" width={34} height={34} className="avatar-img" unoptimized />
              <div className="avatar-plus-bubble" style={{ width: 34, height: 34, fontSize: 12 }}>+</div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Over 2,000 hot meals and dry food boxes distributed.</span>
          </div>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="section section-bg-light" aria-label="FAQs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Questions & Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Details on food safety, community vetting, and corporate partnership opportunities.
            </p>
          </div>

          <FAQAccordion items={nourishFAQs} />
        </div>
      </section>

      {/* 8. ENDING CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
