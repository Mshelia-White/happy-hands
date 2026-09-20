'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  HeartPulse, 
  Baby, 
  Smile, 
  Eye, 
  Ear, 
  HeartHandshake, 
  Sparkles, 
  Clock, 
  Check, 
  BellRing,
  Stethoscope
} from 'lucide-react';

const fittotInitiatives = [
  {
    title: 'Happy Kids Health',
    description: 'General childhood wellness screenings, vitals monitoring, and pediatric health education.',
    icon: <HeartPulse size={22} color="var(--primary-green)" />,
  },
  {
    title: 'First 1,000 Days',
    description: 'Maternal and infant nutrition support during the most crucial developmental window.',
    icon: <Baby size={22} color="var(--primary-red)" />,
  },
  {
    title: 'Tiny Smiles',
    description: 'Pediatric dental hygiene education, fluoride brushing drives, and tooth decay prevention.',
    icon: <Smile size={22} color="var(--primary-green)" />,
  },
  {
    title: 'Sharp Sight',
    description: 'Early childhood vision screening to detect visual impairments before they impair learning.',
    icon: <Eye size={22} color="var(--primary-red)" />,
  },
  {
    title: 'Little Whispers',
    description: 'Hearing acuity checks and speech-language developmental milestone monitoring.',
    icon: <Ear size={22} color="var(--primary-green)" />,
  },
  {
    title: 'Special Care Support',
    description: 'Facilitating specialized referrals and aid for children living with chronic health challenges.',
    icon: <HeartHandshake size={22} color="var(--primary-red)" />,
  },
];

const fitTotFAQs: FAQItem[] = [
  {
    question: 'When is FitTot officially launching?',
    answer: 'FitTot is currently in its structured pilot and preparatory phase. We are onboarding medical partners, pediatric nurses, and community health workers to begin phased grassroots screening camps.',
  },
  {
    question: 'Who will be eligible for FitTot healthcare services?',
    answer: 'Toddlers, infants, and young school-age children in vulnerable and underserved communities who currently lack access to basic preventative pediatric care.',
  },
  {
    question: 'How can doctors, dentists, or optometrists get involved?',
    answer: 'We invite licensed medical doctors, nurses, dentists, optometrists, and child psychologists to register as volunteer clinical partners for our scheduled outreach clinics.',
  },
  {
    question: 'Can corporate health organizations sponsor medical supplies?',
    answer: 'Yes! We actively seek partnerships with pharmaceutical companies, dental health brands, and diagnostic equipment providers to donate pediatric testing supplies.',
  },
  {
    question: 'Will services be provided completely free of charge to families?',
    answer: 'Yes. All screenings, basic medications, toothbrushes, and diagnostic evaluations under FitTot will be offered 100% free of charge to beneficiaries.',
  },
];

export default function FitTotPage() {
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setRegistered(true);
  };

  return (
    <main>
      {/* 1. BREADCRUMB */}
      <div style={{ background: 'var(--light-neutral)', padding: '12px 0', borderBottom: '1px solid var(--border-warm)', fontSize: 13.5 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)' }}>
          <Link href="/" style={{ color: 'var(--dark-neutral)' }}>Home</Link>
          <span>›</span>
          <Link href="/programs" style={{ color: 'var(--dark-neutral)' }}>Our Programs</Link>
          <span>›</span>
          <strong style={{ color: 'var(--text-muted)' }}>FitTot (Coming Soon)</strong>
        </div>
      </div>

      {/* 2. SHORT HERO (Board 03 Variant: Greyed Launch Status & Coming Soon Tag) */}
      <section className="hero-section" aria-label="FitTot Program Hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span className="coming-soon-badge" style={{ position: 'static' }}>
                  Coming Soon · In Development
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Launch Phase</span>
              </div>
              <h1 style={{ margin: '0 0 14px' }}>FitTot Early Childhood Wellness</h1>
              <p className="hero-subtitle">
                Early childhood physical wellness and health screenings.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '0 0 28px' }}>
                FitTot is our emerging healthcare and physical wellness initiative targeting toddlers and young children. Good health in early years forms the bedrock of cognitive ability, motor skills, and school readiness.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#notify-section" className="btn btn-secondary">
                  <BellRing size={16} /> Register Your Interest ›
                </a>
                <Link href="/contact?subject=medical-partner" className="btn btn-tertiary">
                  Partner as a Health Professional ›
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/volunteer-community.png"
                alt="FitTot Early Development"
                width={560}
                height={420}
                className="hero-photo"
                style={{ filter: 'grayscale(0.35)' }}
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
                  background: '#64748B',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                }}
              >
                <HeartPulse size={26} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT THE PROGRAM DOES (Icon List) */}
      <section className="section section-bg-light" aria-label="Target Health Interventions">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red" style={{ color: 'var(--primary-green)' }}>Preventative Care Focus</span>
            <h2>Planned Health Interventions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Specialized pillars designed to catch developmental delays and health issues early.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {fittotInitiatives.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-warm)',
                  borderRadius: 14,
                  padding: '24px 20px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--light-neutral)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 17, margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT IT PROVIDES (3 Feature Tiles) */}
      <section className="section" aria-label="What It Provides">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red" style={{ color: 'var(--primary-green)' }}>Program Roadmap</span>
            <h2>What FitTot Will Deliver</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              A coordinated community health model bringing pediatric care closer to children in need.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Stethoscope size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Community Health Camps</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Quarterly pop-up pediatric screening stations set up at community centers and elementary schools.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Baby size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Maternal Education Workshops</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Equipping young mothers and caregivers with practical skills on weaning, hygiene, and early immunization.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 28, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Sensory & Motor Kits</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Providing age-appropriate toys and physical exercise equipment that stimulate toddler cognitive development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVIDENCE & GALLERY */}
      <section className="section section-bg-light" aria-label="Fieldwork & Preparation">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red" style={{ color: 'var(--primary-green)' }}>Groundwork</span>
            <h2>Laying the Foundations</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Early consultations with community mothers, volunteers, and clinical health workers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/volunteer-community.png" alt="Community meeting" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/hero-volunteer.jpg" alt="Health worker interaction" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image src="/assets/images/children-group.jpg" alt="Child engagement" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ONE PRIMARY ACTION (Interest / Notify registration form instead of donate) */}
      <section className="section" id="notify-section" aria-label="Register Interest">
        <div className="container" style={{ textAlign: 'center', maxWidth: 680 }}>
          <Clock size={36} color="var(--primary-green)" strokeWidth={2} style={{ marginBottom: 14 }} />
          <h2>Be Notified When FitTot Launches</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '12px auto 28px' }}>
            We are preparing the pilot rollout. Enter your email to receive early updates or volunteer as a medical partner.
          </p>

          {registered ? (
            <div style={{ background: 'var(--primary-green-light)', color: 'var(--primary-green)', padding: 18, borderRadius: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Check size={20} /> Thank you! We have recorded your interest and will keep you updated.
            </div>
          ) : (
            <form onSubmit={handleNotify} style={{ display: 'flex', gap: 10, maxWidth: 500, margin: '0 auto 20px', flexWrap: 'wrap' }}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 260,
                  padding: '12px 16px',
                  borderRadius: 8,
                  border: '1px solid var(--border-warm)',
                  fontSize: 15,
                  background: '#ffffff',
                }}
              />
              <button type="submit" className="btn btn-secondary">
                Notify Me ›
              </button>
            </form>
          )}

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>
            Are you a clinic, hospital, or medical professional?{' '}
            <Link href="/contact?subject=clinical-partner" style={{ color: 'var(--primary-red)', fontWeight: 700 }}>
              Connect with our health partnership lead ›
            </Link>
          </p>
        </div>
      </section>

      {/* 7. FAQS */}
      <section className="section section-bg-light" aria-label="FAQs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red" style={{ color: 'var(--primary-green)' }}>Frequently Asked Questions</span>
            <h2>FitTot Program Launch</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Insights into our upcoming healthcare operations and clinical partnerships.
            </p>
          </div>

          <FAQAccordion items={fitTotFAQs} />
        </div>
      </section>

      {/* 8. ENDING CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
