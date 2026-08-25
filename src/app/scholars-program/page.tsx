'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { SponsorshipGuideModal } from '@/components/SponsorshipGuideModal';
import { 
  GraduationCap, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  Heart, 
  Download, 
  Globe, 
  Sparkles,
  UtensilsCrossed,
  BookOpen,
  Award
} from 'lucide-react';

const scholarsPackages = [
  {
    title: 'Full Bloom Package',
    description: 'Full annual support for a scholar covering complete tuition, daily nutrition, and all educational development.',
    highlight: 'Full Year Support',
  },
  {
    title: 'Empowerment Partner',
    description: 'Termly support covering key educational and developmental needs.',
    highlight: 'Termly Giving',
  },
  {
    title: 'Education Essentials Package',
    description: 'Tuition and essential school needs.',
    highlight: 'Core Tuition',
  },
  {
    title: 'Nutrition for Growth Package',
    description: 'Daily feeding during school hours to keep children fueled and focused.',
    highlight: 'Daily Nutrition',
  },
  {
    title: 'Back-to-School Package',
    description: 'Uniforms, school bags, shoes and basic supplies.',
    highlight: 'School Supplies',
  },
];

export default function ScholarsProgramPage() {
  const { openDonationModal } = useDonation();
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  const scholarsFAQs: FAQItem[] = [
    {
      question: 'Who can benefit from the Scholars Program?',
      answer: 'Children within the eligible school-age range who demonstrate academic potential but are financially challenged.',
    },
    {
      question: 'How are beneficiaries selected?',
      answer: 'Beneficiaries are selected based on academic potential and financial need and may be required to complete the relevant academic or competence assessment.',
    },
    {
      question: 'How long does the scholarship last?',
      answer: 'The program can support a beneficiary from primary through secondary school, subject to the academic and competence requirements applied each session.',
    },
    {
      question: 'How do we identify beneficiaries?',
      answer: 'Happy Hands identifies suitable children and families through outreaches and work within vulnerable communities.',
    },
    {
      question: 'How is the Scholars Program funded?',
      answer: 'Through donations from individuals, corporations, grants, partnerships and other organisations.',
    },
    {
      question: "What does it mean to become a Scholar's Guardian?",
      answer: (
        <span>
          A Guardian takes on the financial responsibility required to support a child&apos;s education and receives updates or reports on how the child is doing academically.{' '}
          <button
            type="button"
            onClick={() => openDonationModal('Scholars Program')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'var(--orange)',
              fontWeight: 800,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Click here to become a Guardian today
          </button>
          .
        </span>
      ),
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'var(--orange-soft)' }}>
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ color: 'var(--orange-dark)', borderColor: 'var(--orange)' }}>
            <GraduationCap size={16} /> Education Program
          </div>
          <h1>Scholars Program</h1>
          <p>Ensuring every child has access to basic education.</p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-image" style={{ height: 520, position: 'relative' }}>
            <SafeImage
              src="/assets/images/children-group.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
              alt="Children in the Scholars Program"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <p className="section-kicker">About the Program</p>
            <h2>Beyond putting a child in school.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              Through the Scholars Program, we become guardians by supporting children who have academic potential but may not have the financial means to remain in school.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              The scholarship supports the total cost of the child&apos;s education, including tuition and extracurricular activities, while also providing <strong>daily feeding during school hours</strong>.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              We monitor each child&apos;s academic progress and give our scholars access to specially curated programs that help nurture their dreams and unlock their full potential.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              For us, it goes beyond putting a child in school. We want them to have the support they need to learn, grow and thrive while they are there.
            </p>

            <div className="role-card" style={{ marginTop: 24, boxShadow: 'none', border: '1px solid var(--line)', padding: 22 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 18 }}>The scholarship includes:</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Tuition
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Approved education-related costs
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Extracurricular activities
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Academic monitoring
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#475569', fontWeight: 700, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="var(--orange)" /> Access to Happy Hands development programs
                </li>
                <li style={{ display: 'flex', gap: 10, color: '#15803d', fontWeight: 800, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#15803d" /> Daily feeding during school hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Become a Guardian (5 Packages) */}
      <section className="section" style={{ background: '#fffaf4', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="section-kicker" style={{ justifyContent: 'center' }}>
              Scholars Program — Sponsorship Guide
            </p>
            <h2 className="section-title">Ways to Become a Guardian</h2>
            <p className="section-lede" style={{ maxWidth: 680, margin: '10px auto 0' }}>
              Choose a sponsorship package that aligns with how you would like to support a scholar&apos;s journey.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {scholarsPackages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  borderRadius: 18,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--orange-dark)', background: 'var(--orange-soft)', padding: '4px 10px', borderRadius: 999 }}>
                      {pkg.highlight}
                    </span>
                    <Sparkles size={16} color="var(--orange)" />
                  </div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 19, fontWeight: 800 }}>{pkg.title}</h3>
                  <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                    {pkg.description}
                  </p>
                </div>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #f8fafc' }}>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ width: '100%', fontSize: 13 }}
                    onClick={() => openDonationModal('Scholars Program')}
                  >
                    Select &amp; Sponsor
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Guide Download + Guardian Buttons */}
          <div
            style={{
              marginTop: 40,
              padding: 28,
              background: '#ffffff',
              borderRadius: 20,
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--slate)', fontWeight: 800, fontSize: 15 }}>
              <Globe size={18} color="var(--orange)" />
              <span>Supporting from outside Nigeria? You can become a Guardian from anywhere in the world.</span>
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setIsGuideModalOpen(true)}
              >
                <Download size={16} /> Download the Scholars Sponsorship Guide
              </button>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Scholars Program')}
              >
                <Heart size={16} fill="white" /> Become a Guardian
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="quote-banner">
        <div className="container">
          <Quote size={44} color="var(--orange)" style={{ marginBottom: 16 }} />
          <h3 style={{ fontSize: 'clamp(20px, 3.2vw, 30px)', maxWidth: 850 }}>
            &quot;It&apos;s been a while since I last saw my daughter this excited. Sometimes, I&apos;d catch Esther making mental notes of some things she learnt in school for the day... The scholarship has been all too wonderful, and timely as well.&quot;
          </h3>
          <p style={{ marginTop: 12 }}>— Mrs. Jacob, Mother of a Scholars beneficiary</p>
        </div>
      </section>

      {/* Primary Scholars Program CTA & Donation Section */}
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
              <Heart size={14} /> Primary Call to Action
            </div>
            <h2>Become a Guardian</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
              Supporting a child is more than making a payment. You are helping us take one more child back to school and giving them the support they need to remain there.
            </p>
            <p style={{ color: '#fed7aa', fontWeight: 800, marginTop: 14 }}>
              Supporting from outside Nigeria? You can become a Guardian from anywhere in the world.
            </p>

            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('Scholars Program')}
              >
                Become a Guardian Now
              </button>
              <Link href="/volunteer" className="btn btn-dark" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Get Involved
              </Link>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="Scholars Program" />
          </div>
        </div>
      </section>

      {/* Scholars Program FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={scholarsFAQs}
            title="Scholars Program FAQs"
            kicker="Answers & Clarifications"
            description="Clear details on eligibility, beneficiary selection, scholarship duration, and guardianship."
          />
        </div>
      </section>

      {/* Guide Download Modal */}
      <SponsorshipGuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />
    </>
  );
}
