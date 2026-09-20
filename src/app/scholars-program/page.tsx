'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { StatsCounter } from '@/components/StatsCounter';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { SponsorshipGuideModal } from '@/components/SponsorshipGuideModal';
import { 
  GraduationCap, 
  BookOpen, 
  Backpack, 
  Utensils, 
  HeartHandshake, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  ShieldCheck, 
  Copy, 
  CreditCard, 
  Building2, 
  PhoneCall,
  Heart,
  Sparkles,
  Stethoscope,
  Footprints
} from 'lucide-react';

interface ScholarPackage {
  id: string;
  name: string;
  badge?: string;
  amount: number;
  cadence: 'annually' | 'termly';
  amountFormatted: string;
  description: string;
  includes: string[];
}

const SCHOLAR_PACKAGES: ScholarPackage[] = [
  {
    id: 'full-bloom',
    name: 'Full Bloom Package',
    badge: 'Most Popular',
    amount: 690000,
    cadence: 'annually',
    amountFormatted: '₦690,000 annually',
    description: 'Comprehensive annual sponsorship providing a child with all academic, nutritional, uniform, and personal development needs for a full academic year.',
    includes: ['Full 3-term tuition & exam fees', 'Complete textbooks & stationery kit', '2 sets of custom school uniforms & bag', 'Daily hot nutritious school lunch', 'School shoes, socks & sportswear', 'Weekend academic & mentorship sessions', 'Emergency medical & wellness coverage'],
  },
  {
    id: 'empowerment-partner',
    name: 'Empowerment Partner',
    amount: 365000,
    cadence: 'termly',
    amountFormatted: '₦365,000 termly',
    description: 'Dedicated termly partnership funding high-priority educational needs, examination logistics, and focused after-school tutoring.',
    includes: ['Termly tuition & exam registrations', 'Curriculum study guides & stationery', 'Lunch relief subsidy', 'Monthly personal mentorship & progress tracking'],
  },
  {
    id: 'education-essentials',
    name: 'Education Essentials Package',
    amount: 300000,
    cadence: 'annually',
    amountFormatted: '₦300,000 annually',
    description: 'Core annual sponsorship targeting foundational school enrolment, classroom fees, and mandatory learning textbooks.',
    includes: ['Annual tuition coverage', 'Prescribed core textbooks & exercise books', 'Termly academic progress reports sent to you'],
  },
  {
    id: 'nutrition-growth',
    name: 'Nutrition for Growth Package',
    amount: 130000,
    cadence: 'termly',
    amountFormatted: '₦130,000 termly / ₦390,000 annually',
    description: 'Guarantees that a child receives warm, wholesome lunches every school day so hunger never hinders learning comprehension.',
    includes: ['Daily balanced school lunch', 'Clean drinking water & fruit supplements', 'Termly nutrition & physical health checkups'],
  },
  {
    id: 'back-to-school-pkg',
    name: 'Back-to-School Package',
    amount: 85000,
    cadence: 'annually',
    amountFormatted: '₦85,000 annually',
    description: 'Equips an enrolled scholar with durable school supplies, sturdy shoes, backpacks, and complete writing materials.',
    includes: ['Sturdy school backpack', 'Complete notebook & stationery pack', 'New pair of school shoes & socks', 'Geometry set & mathematical tools'],
  },
];

const scholarReceivesItems = [
  { icon: <GraduationCap size={22} color="var(--primary-red)" />, label: 'Tuition & examination fees' },
  { icon: <BookOpen size={22} color="var(--primary-green)" />, label: 'Textbooks & stationery' },
  { icon: <Backpack size={22} color="var(--primary-red)" />, label: 'School uniforms & bags' },
  { icon: <Utensils size={22} color="var(--primary-green)" />, label: 'Nutritious daily lunch' },
  { icon: <Footprints size={22} color="var(--primary-red)" />, label: 'Shoes & socks' },
  { icon: <HeartHandshake size={22} color="var(--primary-green)" />, label: 'Weekend tutoring & mentorship' },
  { icon: <Stethoscope size={22} color="var(--primary-red)" />, label: 'Healthcare & emergency fund' },
];

const scholarsFAQs: FAQItem[] = [
  {
    question: 'Who can benefit from the Scholars Program?',
    answer: 'Children within the eligible school-age range who demonstrate academic potential but are financially challenged in underserved Nigerian communities.',
  },
  {
    question: 'How are beneficiaries selected?',
    answer: 'Beneficiaries are selected based on verified family socio-economic assessments and academic potential assessments conducted by our outreach fieldwork team.',
  },
  {
    question: 'How long does the sponsorship last?',
    answer: 'A sponsorship typically covers an academic year (3 terms) and can be renewed through secondary graduation, with quarterly report cards provided to the Guardian.',
  },
  {
    question: "What does it mean to become a Scholar's Guardian?",
    answer: 'A Guardian takes on the financial sponsorship for a specific child’s education. You receive personalized termly progress letters, academic grade reports, and photos of your scholar blooming.',
  },
  {
    question: 'Can I write or send letters to my sponsored scholar?',
    answer: 'Yes! Happy Hands facilitates moderated letter exchanges and celebratory messages so you can encourage your scholar throughout their academic journey.',
  },
];

export default function ScholarsProgramPage() {
  const { openDonationModal } = useDonation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('full-bloom');
  const [paymentOption, setPaymentOption] = useState<'full' | 'instalments'>('full');
  const [paymentTab, setPaymentTab] = useState<'card' | 'bank' | 'ussd'>('card');
  const [copiedBank, setCopiedBank] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  const selectedPackage = SCHOLAR_PACKAGES.find((p) => p.id === selectedPackageId) || SCHOLAR_PACKAGES[0];

  const calculatedTotal = paymentOption === 'instalments' && selectedPackage.cadence === 'annually'
    ? Math.round(selectedPackage.amount / 3)
    : selectedPackage.amount;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const stepsList = [
    { num: 1, title: 'Overview' },
    { num: 2, title: 'Package Selection' },
    { num: 3, title: 'Schedule & Summary' },
    { num: 4, title: 'Payment Details' },
  ];

  return (
    <main>
      {/* Stepper Indicator if inside steps 2-4 */}
      {currentStep > 1 && (
        <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border-warm)', padding: '16px 0', position: 'sticky', top: 78, zIndex: 90 }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, overflowX: 'auto' }}>
              {stepsList.map((st, idx) => (
                <React.Fragment key={st.num}>
                  <div 
                    onClick={() => setCurrentStep(st.num)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 13.5,
                      fontWeight: 700,
                      cursor: 'pointer',
                      color: currentStep === st.num ? 'var(--primary-red)' : currentStep > st.num ? 'var(--primary-green)' : 'var(--text-light)',
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        background: currentStep === st.num ? 'var(--primary-red)' : currentStep > st.num ? 'var(--primary-green)' : 'var(--light-neutral)',
                        color: currentStep >= st.num ? '#ffffff' : 'var(--text-muted)',
                      }}
                    >
                      {currentStep > st.num ? <Check size={14} /> : st.num}
                    </div>
                    <span>{st.title}</span>
                  </div>
                  {idx < stepsList.length - 1 && <span style={{ color: 'var(--border-warm-dark)' }}>›</span>}
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              style={{ fontSize: 13, color: 'var(--primary-red)', fontWeight: 600 }}
            >
              Exit Flow
            </button>
          </div>
        </div>
      )}

      {/* STEP 1: SCHOLARS PROGRAM LANDING (Board 04) */}
      {currentStep === 1 && (
        <>
          {/* Dark Hero Section */}
          <section
            style={{
              backgroundColor: 'var(--dark-neutral)',
              color: '#ffffff',
              padding: '72px 0 80px',
              position: 'relative',
              overflow: 'hidden',
            }}
            aria-label="Scholars Program Hero"
          >
            <div className="container">
              <div className="hero-grid" style={{ alignItems: 'center' }}>
                <div>
                  <span style={{ color: 'var(--accent-yellow)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'inline-block', marginBottom: 10 }}>
                    Flagship Education Program
                  </span>
                  <h1 style={{ color: '#ffffff', marginBottom: 16 }}>
                    Happy Hands Scholars Program
                  </h1>
                  <p style={{ color: '#DDD6C8', fontSize: 18, lineHeight: 1.6, marginBottom: 28 }}>
                    Connecting dedicated guardians with bright African children to unlock potential through quality schooling, full tuition coverage, nutritious lunches, and character mentorship.
                  </p>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setCurrentStep(2)}
                    >
                      Become a Guardian ›
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{ background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255, 255, 255, 0.4)' }}
                      onClick={() => setIsGuideModalOpen(true)}
                    >
                      <Download size={16} /> Download Sponsorship Guide (PDF)
                    </button>
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <Image
                    src="/assets/images/children-group.jpg"
                    alt="Scholars in classroom"
                    width={560}
                    height={440}
                    style={{ borderRadius: 16, width: '100%', height: 420, objectFit: 'cover', border: '2px solid rgba(255, 255, 255, 0.15)' }}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What a Scholar Receives (7 items with icons from Board 04) */}
          <section className="section" aria-label="What a Scholar Receives">
            <div className="container">
              <div className="section-header text-center">
                <span className="section-title-red">Holistic Sponsorship</span>
                <h2>What a Scholar Receives</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
                  Every child enrolled in the Scholars Program is enveloped in a total ecosystem of care and dignity.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                {scholarReceivesItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--border-warm)',
                      borderRadius: 12,
                      padding: '22px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'var(--light-neutral)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <strong style={{ fontSize: 14.5, color: 'var(--dark-neutral)', lineHeight: 1.4 }}>
                      {item.label}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Become a Guardian CTA */}
          <section className="section section-bg-light" aria-label="Become a Guardian CTA">
            <div className="container" style={{ textAlign: 'center', maxWidth: 760 }}>
              <Heart size={36} color="var(--primary-red)" strokeWidth={2} style={{ marginBottom: 14 }} />
              <h2>Become a Guardian. Change a life. Build a future.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '12px auto 28px' }}>
                When you sponsor a scholar, you don’t just pay school fees. You give an ambitious child the safety, encouragement, and resources to rewrite their family story.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setCurrentStep(2)}
                >
                  Become a Guardian ›
                </button>
                <button
                  type="button"
                  className="btn btn-tertiary"
                  onClick={() => setIsGuideModalOpen(true)}
                >
                  <Download size={16} /> Download Sponsorship Guide (PDF)
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* STEP 2: CHOOSE YOUR SPONSORSHIP PACKAGE (Board 04) */}
      {currentStep === 2 && (
        <section className="section" aria-label="Choose Sponsorship Package">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center" style={{ marginBottom: 36 }}>
              <span className="section-title-red">Step 2 of 4</span>
              <h2>Choose Your Sponsorship Package</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
                Select the package that fits your giving goals. All packages support verified scholars.
              </p>
            </div>

            <div style={{ display: 'grid', gap: 16, marginBottom: 36 }}>
              {SCHOLAR_PACKAGES.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    style={{
                      background: isSelected ? 'var(--primary-red-light)' : '#ffffff',
                      border: `2px solid ${isSelected ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                      borderRadius: 14,
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            border: `2px solid ${isSelected ? 'var(--primary-red)' : 'var(--border-warm-dark)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {isSelected && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary-red)' }} />}
                        </div>
                        <h3 style={{ fontSize: 19, margin: 0 }}>{pkg.name}</h3>
                        {pkg.badge && (
                          <span
                            style={{
                              background: 'var(--primary-green)',
                              color: '#ffffff',
                              fontSize: 11,
                              fontWeight: 700,
                              padding: '2px 9px',
                              borderRadius: 999,
                            }}
                          >
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: 19, fontWeight: 800, color: 'var(--primary-red)' }}>
                        {pkg.amountFormatted}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.5, margin: '0 0 16px 34px' }}>
                      {pkg.description}
                    </p>

                    <div style={{ paddingLeft: 34, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
                      {pkg.includes.map((inc, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--dark-neutral)' }}>
                          <Check size={14} color="var(--primary-green)" strokeWidth={2.5} /> {inc}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid var(--border-warm)' }}>
              <button
                type="button"
                className="btn btn-tertiary"
                onClick={() => setCurrentStep(1)}
              >
                <ChevronLeft size={16} /> Back to Overview
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setCurrentStep(3)}
              >
                Continue to Payment Schedule <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 3: PAYMENT OPTION & SUMMARY (Board 04) */}
      {currentStep === 3 && (
        <section className="section" aria-label="Payment Option & Summary">
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="section-header text-center" style={{ marginBottom: 36 }}>
              <span className="section-title-red">Step 3 of 4</span>
              <h2>Payment Option & Summary</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
                Decide whether to pay in full upfront or split into termly instalments.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, alignItems: 'start' }}>
              {/* Left: Options */}
              <div>
                <h3 style={{ fontSize: 18, marginBottom: 16 }}>Choose Schedule:</h3>
                
                <div style={{ display: 'grid', gap: 14, marginBottom: 24 }}>
                  <div
                    onClick={() => setPaymentOption('full')}
                    style={{
                      padding: 20,
                      borderRadius: 12,
                      border: `2px solid ${paymentOption === 'full' ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                      background: paymentOption === 'full' ? 'var(--primary-red-light)' : '#ffffff',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <strong style={{ fontSize: 16 }}>Pay in Full (One-time Annual)</strong>
                      <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary-red)' }}>
                        ₦{selectedPackage.amount.toLocaleString()}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
                      Locks in the scholar’s complete school year with zero interruption.
                    </p>
                  </div>

                  <div
                    onClick={() => setPaymentOption('instalments')}
                    style={{
                      padding: 20,
                      borderRadius: 12,
                      border: `2px solid ${paymentOption === 'instalments' ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                      background: paymentOption === 'instalments' ? 'var(--primary-red-light)' : '#ffffff',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <strong style={{ fontSize: 16 }}>Pay in Instalments (Termly)</strong>
                      <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary-red)' }}>
                        ₦{Math.round(selectedPackage.amount / 3).toLocaleString()} / term
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
                      Split across 3 academic terms (1st Term, 2nd Term, 3rd Term).
                    </p>
                  </div>
                </div>

                <div style={{ background: 'var(--light-neutral)', padding: 18, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
                  <h4 style={{ fontSize: 14, margin: '0 0 10px', color: 'var(--primary-green)' }}>What&apos;s Included In Every Sponsorship:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: 'var(--dark-neutral)', display: 'grid', gap: 6 }}>
                    <li style={{ display: 'flex', gap: 6 }}>✓ Direct school fee disbursement to accredited institutions</li>
                    <li style={{ display: 'flex', gap: 6 }}>✓ Verified quarterly report card & student thank-you letter</li>
                    <li style={{ display: 'flex', gap: 6 }}>✓ Transparent CAC-registered governance (RC: 183177)</li>
                  </ul>
                </div>
              </div>

              {/* Right: Summary Card */}
              <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 14, padding: 24, boxShadow: 'var(--shadow-card)' }}>
                <h3 style={{ fontSize: 18, margin: '0 0 16px', borderBottom: '1px solid var(--border-warm)', paddingBottom: 10 }}>
                  Sponsorship Summary
                </h3>

                <div style={{ display: 'grid', gap: 10, fontSize: 14, marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Package:</span>
                    <strong>{selectedPackage.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Schedule:</span>
                    <span>{paymentOption === 'full' ? 'Annual (In Full)' : 'Termly (3 Instalments)'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Cadence:</span>
                    <span>{selectedPackage.cadence}</span>
                  </div>
                  <div style={{ height: 1, background: 'var(--border-warm)', margin: '4px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: 15 }}>Due Today:</strong>
                    <strong style={{ fontSize: 20, color: 'var(--primary-red)' }}>
                      ₦{calculatedTotal.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '13px' }}
                  onClick={() => setCurrentStep(4)}
                >
                  Continue to Payment ›
                </button>

                <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', margin: '12px 0 0' }}>
                  100% of sponsorship reaches the scholar.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 32 }}>
              <button
                type="button"
                className="btn btn-tertiary"
                onClick={() => setCurrentStep(2)}
              >
                <ChevronLeft size={16} /> Back to Packages
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 4: PAYMENT DETAILS (Board 04) */}
      {currentStep === 4 && (
        <section className="section" aria-label="Payment Details">
          <div className="container" style={{ maxWidth: 840 }}>
            <div className="section-header text-center" style={{ marginBottom: 32 }}>
              <span className="section-title-red">Step 4 of 4</span>
              <h2>Complete Your Sponsorship</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
                Selected: <strong>{selectedPackage.name}</strong> ({paymentOption === 'full' ? 'Full Annual' : 'Termly'}) — Total Due Today:{' '}
                <strong style={{ color: 'var(--primary-red)' }}>₦{calculatedTotal.toLocaleString()}</strong>
                {' '}
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  style={{ color: 'var(--primary-red)', textDecoration: 'underline', fontSize: 13, fontWeight: 700 }}
                >
                  (Change)
                </button>
              </p>
            </div>

            {/* Payment Method Tabs */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 24, justifyContent: 'center' }}>
              <button
                type="button"
                className={`chip ${paymentTab === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentTab('card')}
              >
                <CreditCard size={16} /> Card Payment
              </button>
              <button
                type="button"
                className={`chip ${paymentTab === 'bank' ? 'selected' : ''}`}
                onClick={() => setPaymentTab('bank')}
              >
                <Building2 size={16} /> Bank Transfer
              </button>
              <button
                type="button"
                className={`chip ${paymentTab === 'ussd' ? 'selected' : ''}`}
                onClick={() => setPaymentTab('ussd')}
              >
                <PhoneCall size={16} /> USSD Code
              </button>
            </div>

            {/* Tab 1: Card */}
            {paymentTab === 'card' && (
              <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 14, padding: 28, boxShadow: 'var(--shadow-card)', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <ShieldCheck size={22} color="var(--primary-green)" />
                  <h3 style={{ fontSize: 18, margin: 0 }}>Secure Card Processing</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: '0 0 20px' }}>
                  Clicking &quot;Sponsor a Scholar&quot; will authorize a secure transaction of <strong>₦{calculatedTotal.toLocaleString()}</strong> via our certified Nigerian payment gateway.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: 16 }}
                  onClick={() => {
                    alert(`Thank you for sponsoring a scholar via ${selectedPackage.name}! Your sponsorship commitment of ₦${calculatedTotal.toLocaleString()} is confirmed.`);
                    setCurrentStep(1);
                  }}
                >
                  Sponsor a Scholar (₦{calculatedTotal.toLocaleString()}) ›
                </button>
              </div>
            )}

            {/* Tab 2: Bank Transfer */}
            {paymentTab === 'bank' && (
              <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 14, padding: 28, boxShadow: 'var(--shadow-card)', marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <h3 style={{ fontSize: 18, margin: 0 }}>Official Foundation Bank Account</h3>
                  <span style={{ fontSize: 12, background: 'var(--light-neutral)', padding: '4px 10px', borderRadius: 999 }}>GTBank Nigeria</span>
                </div>

                <div style={{ display: 'grid', gap: 12, fontSize: 14, background: 'var(--light-neutral)', padding: 18, borderRadius: 10, border: '1px solid var(--border-warm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Bank:</span>
                    <strong>Guaranty Trust Bank (GTBank)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Account Name:</span>
                    <strong>Happy Hands Community Development Foundation</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Account Number:</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <strong style={{ fontSize: 18, letterSpacing: 1 }}>0625489110</strong>
                      <button
                        type="button"
                        onClick={() => handleCopy('0625489110')}
                        style={{ padding: '4px 10px', background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 700 }}
                      >
                        {copiedBank ? 'Copied ✓' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
                  * After making transfer, kindly email your proof of transfer to <strong>projects@happyhandsfoundation.org</strong> with your package name so we can link you to your scholar immediately.
                </p>
              </div>
            )}

            {/* Tab 3: USSD */}
            {paymentTab === 'ussd' && (
              <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 14, padding: 28, boxShadow: 'var(--shadow-card)', marginBottom: 24, textAlign: 'center' }}>
                <h3 style={{ fontSize: 18, margin: '0 0 10px' }}>Pay via GTBank 737</h3>
                <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--primary-red)', margin: '14px 0', letterSpacing: 1 }}>
                  *737*2*0625489110#{' '}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                  Dial the code from your registered bank phone number to complete payment directly.
                </p>
              </div>
            )}

            {/* Trust Notes (Board 04) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, textAlign: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
              <div style={{ background: 'var(--light-neutral)', padding: 14, borderRadius: 8, border: '1px solid var(--border-warm)' }}>
                <strong>100% Direct Support</strong>
                <p style={{ margin: '4px 0 0', fontSize: 12 }}>Every naira goes directly to scholar tuition & care.</p>
              </div>
              <div style={{ background: 'var(--light-neutral)', padding: 14, borderRadius: 8, border: '1px solid var(--border-warm)' }}>
                <strong>CAC Registered</strong>
                <p style={{ margin: '4px 0 0', fontSize: 12 }}>Reg No: RC 183177 in full compliance.</p>
              </div>
              <div style={{ background: 'var(--light-neutral)', padding: 14, borderRadius: 8, border: '1px solid var(--border-warm)' }}>
                <strong>Quarterly Reports</strong>
                <p style={{ margin: '4px 0 0', fontSize: 12 }}>Receive verified academic grade updates.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 32 }}>
              <button
                type="button"
                className="btn btn-tertiary"
                onClick={() => setCurrentStep(3)}
              >
                <ChevronLeft size={16} /> Back to Summary
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STATS ROW */}
      <StatsCounter showTitle={false} />

      {/* SCHOLARS FAQS */}
      <section className="section" aria-label="Scholars Program FAQs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Questions & Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Everything you need to know about sponsoring a scholar with Happy Hands Foundation.
            </p>
          </div>

          <FAQAccordion items={scholarsFAQs} />
        </div>
      </section>

      {/* ENDING BANNER */}
      <CtaBanner />

      {/* PDF Sponsorship Guide Modal */}
      <SponsorshipGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </main>
  );
}
