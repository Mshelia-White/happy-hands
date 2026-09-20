'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  GraduationCap, 
  Truck, 
  Palette, 
  Stethoscope, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  Package, 
  Gift, 
  Award,
  Clock,
  ShieldCheck,
  Send,
  Heart
} from 'lucide-react';

interface Track {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  popularRoles: string[];
}

const tracks: Track[] = [
  {
    id: 'teaching',
    title: 'Teaching & Mentorship',
    desc: 'Facilitate interactive classroom workshops, character sessions, and after-school academic support.',
    icon: <GraduationCap size={24} color="var(--primary-red)" />,
    popularRoles: ['Volunteer Instructor (Teachers on the Go)', 'Weekend Academic Mentor', 'Literacy & Numeracy Tutor'],
  },
  {
    id: 'logistics',
    title: 'Operations & Logistics',
    desc: 'Coordinate outreach day logistics, kit packaging, event coordination, and school relations.',
    icon: <Truck size={24} color="var(--primary-green)" />,
    popularRoles: ['Outreach Field Coordinator', 'Supply Distribution Lead', 'Inventory & Packing Volunteer'],
  },
  {
    id: 'creative',
    title: 'Creative & Media',
    desc: 'Capture outreach stories, manage social media communities, design graphics, or write grants.',
    icon: <Palette size={24} color="var(--primary-red)" />,
    popularRoles: ['Graphic Designer', 'Photographer / Videographer', 'Content & Grant Writer', 'Social Media Manager'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Wellness',
    desc: 'Conduct pediatric health screenings, vision tests, dental checks, and maternal wellness workshops.',
    icon: <Stethoscope size={24} color="var(--primary-green)" />,
    popularRoles: ['Doctor / Clinical Volunteer', 'Registered Nurse', 'Pediatric Optometrist / Dentist'],
  },
];

const volunteerFAQs: FAQItem[] = [
  {
    question: 'Can I volunteer remotely?',
    answer: 'Yes! We offer dedicated virtual roles including Graphic Design, Grant Writing, Content Writing, Social Media Management, and Online Campaign Coordination.',
  },
  {
    question: 'How much time do I need to commit?',
    answer: 'Commitment varies by track. Most virtual roles require 3–5 hours per week, while on-ground outreach and teaching sessions take place on scheduled weekend project dates.',
  },
  {
    question: 'Is there an age requirement?',
    answer: 'Volunteers should generally be at least 16 years old. Anyone passionate about child development and community welfare is welcome to apply.',
  },
  {
    question: 'Do I need previous NGO experience?',
    answer: 'No prior NGO experience is required! We provide comprehensive onboarding and curriculum kits. Specialized roles (clinical healthcare, legal, accounting) require relevant credentials.',
  },
  {
    question: 'How soon will I hear back after submitting?',
    answer: 'Our volunteer coordination team will review your application and contact you via email and WhatsApp within 3 to 5 business days with details regarding the next cohort orientation.',
  },
];

export default function VolunteerPage() {
  const [step, setStep] = useState<number>(1);
  const [selectedTrack, setSelectedTrack] = useState<string>('teaching');
  const [role, setRole] = useState<string>('');
  
  // Step 2 state
  const [availability, setAvailability] = useState<'weekends' | 'weekdays' | 'both'>('weekends');
  const [mode, setMode] = useState<'on-ground' | 'virtual' | 'hybrid'>('hybrid');
  const [city, setCity] = useState<string>('Lagos');
  const [skills, setSkills] = useState<string>('');

  // Step 3 state
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { num: 1, title: 'Select Track' },
    { num: 2, title: 'Preferences' },
    { num: 3, title: 'Personal Details' },
  ];

  return (
    <main>
      {/* 1. HERO (Board 07) */}
      <section className="hero-section" aria-label="Volunteer Hero">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="section-title-red">Join The Hands That Care</span>
            <h1 style={{ margin: '8px 0 16px' }}>Lend your hands. Change a child&apos;s story.</h1>
            <p className="hero-subtitle" style={{ fontSize: 18 }}>
              Join a dedicated community of volunteers creating direct impact across education, nutrition, and wellness.
            </p>
          </div>

          {/* Stepper indicator */}
          {!submitted && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginBottom: 40 }}>
              {steps.map((st, i) => (
                <React.Fragment key={st.num}>
                  <div
                    onClick={() => step > st.num && setStep(st.num)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: step > st.num ? 'pointer' : 'default',
                      color: step === st.num ? 'var(--primary-red)' : step > st.num ? 'var(--primary-green)' : 'var(--text-light)',
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        background: step === st.num ? 'var(--primary-red)' : step > st.num ? 'var(--primary-green)' : 'var(--light-neutral)',
                        color: step >= st.num ? '#ffffff' : 'var(--text-muted)',
                      }}
                    >
                      {step > st.num ? <Check size={16} /> : st.num}
                    </div>
                    <span>{st.title}</span>
                  </div>
                  {i < steps.length - 1 && <span style={{ color: 'var(--border-warm-dark)' }}>›</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. THREE-STEP ONBOARDING FLOW */}
      <section className="section section-bg-light" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 840 }}>
          {submitted ? (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-warm)',
                borderRadius: 16,
                padding: '48px 36px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'var(--primary-green-light)',
                  color: 'var(--primary-green)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                <Check size={36} strokeWidth={2.5} />
              </div>
              <h2>Application Received!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.6, maxWidth: 540, margin: '12px auto 24px' }}>
                Thank you, <strong>{fullName}</strong>! We have received your application for the{' '}
                <strong>{tracks.find((t) => t.id === selectedTrack)?.title}</strong> track. Our coordinator will reach out to <strong>{email}</strong> within 3 to 5 business days.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                >
                  Submit Another Application
                </button>
                <Link href="/" className="btn btn-tertiary">
                  Return to Homepage ›
                </Link>
              </div>
            </div>
          ) : (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-warm)',
                borderRadius: 16,
                padding: '36px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* STEP 1: SELECT ROLE TRACK */}
              {step === 1 && (
                <div>
                  <h2 style={{ fontSize: 22, margin: '0 0 6px' }}>Step 1: Choose Your Volunteer Track</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: '0 0 24px' }}>
                    Select the field where your passions and talents can best serve children.
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginBottom: 32 }}>
                    {tracks.map((t) => {
                      const isSelected = selectedTrack === t.id;
                      return (
                        <div
                          key={t.id}
                          onClick={() => setSelectedTrack(t.id)}
                          style={{
                            border: `2px solid ${isSelected ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                            background: isSelected ? 'var(--primary-red-light)' : '#ffffff',
                            borderRadius: 12,
                            padding: 20,
                            cursor: 'pointer',
                            display: 'flex',
                            gap: 16,
                            alignItems: 'flex-start',
                          }}
                        >
                          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--light-neutral)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {t.icon}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                              <h3 style={{ fontSize: 17, margin: 0 }}>{t.title}</h3>
                              <div
                                style={{
                                  width: 20,
                                  height: 20,
                                  borderRadius: '50%',
                                  border: `2px solid ${isSelected ? 'var(--primary-red)' : 'var(--border-warm-dark)'}`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {isSelected && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary-red)' }} />}
                              </div>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: 13.5, margin: '0 0 10px', lineHeight: 1.5 }}>
                              {t.desc}
                            </p>
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                              {t.popularRoles.map((r, idx) => (
                                <span key={idx} style={{ fontSize: 11.5, background: '#ffffff', border: '1px solid var(--border-warm)', padding: '2px 8px', borderRadius: 6, color: 'var(--dark-neutral)' }}>
                                  {r}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setStep(2)}
                    >
                      Continue to Availability & Preferences <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: AVAILABILITY & PREFERENCES */}
              {step === 2 && (
                <div>
                  <h2 style={{ fontSize: 22, margin: '0 0 6px' }}>Step 2: Availability & Preferences</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: '0 0 24px' }}>
                    Help us match you to the right projects and schedules.
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 32 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
                        Preferred Engagement Mode:
                      </label>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button
                          type="button"
                          onClick={() => setMode('on-ground')}
                          className={`chip ${mode === 'on-ground' ? 'selected' : ''}`}
                        >
                          On-ground / Field Outreaches
                        </button>
                        <button
                          type="button"
                          onClick={() => setMode('virtual')}
                          className={`chip ${mode === 'virtual' ? 'selected' : ''}`}
                        >
                          Virtual / Remote Only
                        </button>
                        <button
                          type="button"
                          onClick={() => setMode('hybrid')}
                          className={`chip ${mode === 'hybrid' ? 'selected' : ''}`}
                        >
                          Hybrid (Both)
                        </button>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
                        When are you typically available?
                      </label>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button
                          type="button"
                          onClick={() => setAvailability('weekends')}
                          className={`chip ${availability === 'weekends' ? 'selected' : ''}`}
                        >
                          Weekends
                        </button>
                        <button
                          type="button"
                          onClick={() => setAvailability('weekdays')}
                          className={`chip ${availability === 'weekdays' ? 'selected' : ''}`}
                        >
                          Weekdays
                        </button>
                        <button
                          type="button"
                          onClick={() => setAvailability('both')}
                          className={`chip ${availability === 'both' ? 'selected' : ''}`}
                        >
                          Flexible / Both
                        </button>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
                        Current City / State of Residence:
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Lagos, Abuja, Port Harcourt, Ibadan, or International"
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border-warm)', fontSize: 14 }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>
                        Key Skills & Talents:
                      </label>
                      <textarea
                        rows={3}
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="e.g. Mathematics teaching, photography, graphic design in Figma, pediatric nursing, event MC, storytelling..."
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border-warm)', fontSize: 14, resize: 'vertical' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      type="button"
                      className="btn btn-tertiary"
                      onClick={() => setStep(1)}
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setStep(3)}
                    >
                      Continue to Personal Details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PERSONAL DETAILS & SUBMIT */}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: 22, margin: '0 0 6px' }}>Step 3: Personal Details</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: '0 0 24px' }}>
                    Where should we send your orientation invite and project toolkit?
                  </p>

                  <div style={{ display: 'grid', gap: 16, marginBottom: 32 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Olumide Adeleke"
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border-warm)', fontSize: 14 }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="olumide@example.com"
                          style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border-warm)', fontSize: 14 }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="08012345678"
                          style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border-warm)', fontSize: 14 }}
                        />
                      </div>
                    </div>

                    <div style={{ background: 'var(--light-neutral)', padding: 16, borderRadius: 10, border: '1px solid var(--border-warm)', fontSize: 13, color: 'var(--text-muted)' }}>
                      <strong>Summary of application:</strong>
                      <div style={{ marginTop: 4 }}>
                        Track: <strong>{tracks.find((t) => t.id === selectedTrack)?.title}</strong> · Mode: <strong>{mode}</strong> · Location: <strong>{city}</strong>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      type="button"
                      className="btn btn-tertiary"
                      onClick={() => setStep(2)}
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      style={{ padding: '12px 24px' }}
                    >
                      <Send size={16} /> Submit Volunteer Application ›
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3. OTHER WAYS TO GET INVOLVED (Board 07) */}
      <section className="section" aria-label="Other Ways to Get Involved">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Broaden Your Impact</span>
            <h2>Other Ways to Get Involved</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Explore collaborative avenues to support children through corporate, material, and community initiatives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {/* 1. Corporate Partnerships */}
            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Building2 size={22} />
              </div>
              <h3 style={{ fontSize: 17, margin: '0 0 8px' }}>Corporate Partnerships</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.5, margin: '0 0 14px' }}>
                Co-create CSR programs, sponsor a whole school cohort, or host corporate volunteer days for your team.
              </p>
              <Link href="/contact?subject=corporate" style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: 13.5 }}>
                Partner with us ›
              </Link>
            </div>

            {/* 2. Host a School Supply Drive */}
            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Package size={22} />
              </div>
              <h3 style={{ fontSize: 17, margin: '0 0 8px' }}>School Supply Drives</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.5, margin: '0 0 14px' }}>
                Mobilize your church, office, or university community to gather backpacks, notebooks, and writing materials.
              </p>
              <Link href="/back-2-school" style={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: 13.5 }}>
                Host a drive ›
              </Link>
            </div>

            {/* 3. In-Kind Giving */}
            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Gift size={22} />
              </div>
              <h3 style={{ fontSize: 17, margin: '0 0 8px' }}>In-Kind Giving</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.5, margin: '0 0 14px' }}>
                Donate bags of rice, educational toys, medical supplies, classroom furniture, or professional services.
              </p>
              <Link href="/nourish-now" style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: 13.5 }}>
                Donate goods ›
              </Link>
            </div>

            {/* 4. Community Champion */}
            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: 17, margin: '0 0 8px' }}>Community Champion</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.5, margin: '0 0 14px' }}>
                Celebrate your birthday, milestone, or run a marathon to raise funds and awareness for Happy Hands scholars.
              </p>
              <Link href="/donate" style={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: 13.5 }}>
                Start a fundraiser ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="section section-bg-light" aria-label="Volunteer FAQs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Questions & Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Insights into our volunteer onboarding process and requirements.
            </p>
          </div>

          <FAQAccordion items={volunteerFAQs} />
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
