import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Target, Eye, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { StatsCounter } from '@/components/StatsCounter';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us | Happy Hands Community Development Foundation',
  description: 'Bridging the education and health gap since 2020. Learn how Happy Hands Foundation nurtures changemakers across Africa.',
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. HERO SECTION (Board 02, Column 1) */}
      <section className="hero-section" aria-label="About Happy Hands">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="section-title-red">About Happy Hands</span>
              <h1 style={{ margin: '8px 0 16px' }}>About Happy Hands</h1>
              <p className="hero-subtitle">
                Bridging the education and health gap since 2020.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.65, margin: '0 0 28px' }}>
                Happy Hands Community Development Foundation was born out of a profound conviction: every African child, given the opportunity and a caring environment, can bloom into the best version of themselves. We provide children in underserved communities with equal opportunities to learn, grow, stay healthy, and become agents of lasting change.
              </p>
              <div style={{ display: 'flex', gap: 14 }}>
                <Link href="/get-involved" className="btn btn-secondary">
                  Get Involved ›
                </Link>
                <Link href="/programs" className="btn btn-tertiary">
                  Our Programs ›
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/children-group.jpg"
                alt="Happy Hands Foundation Children"
                width={560}
                height={460}
                className="hero-photo"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION ICON CARDS */}
      <section className="section section-bg-light" aria-label="Mission and Vision">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Mission Card */}
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 36, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Target size={28} strokeWidth={2.2} />
              </div>
              <h2 style={{ fontSize: 24, margin: '0 0 12px' }}>Our Mission</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                To incorporate a passionate network of volunteers, donors, and partners committed to helping children realize their full potential through inclusive education, vital nutrition, and community empowerment.
              </p>
            </div>

            {/* Vision Card */}
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 36, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Eye size={28} strokeWidth={2.2} />
              </div>
              <h2 style={{ fontSize: 24, margin: '0 0 12px' }}>Our Vision</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
                Creating a safe space for the African child while providing transformative opportunities for inclusive growth, holistic wellness, and lifelong self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR IMPACT SO FAR: 4 STAT CARDS */}
      <StatsCounter showTitle={true} />

      {/* 4. WHY HAPPY HANDS & OUR STORY */}
      <section className="section" aria-label="Our Story">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/hero-volunteer.jpg"
                alt="Volunteer with Happy Hands Child"
                width={520}
                height={460}
                style={{ borderRadius: 16, width: '100%', height: 460, objectFit: 'cover', border: '1px solid var(--border-warm)' }}
                unoptimized
              />
            </div>

            <div>
              <span className="section-title-red">Why Happy Hands</span>
              <h2 style={{ margin: '8px 0 18px' }}>
                Happy Hands isn&apos;t just the name of an organization.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.65, marginBottom: 14 }}>
                It is a description of everyone who, through their interaction with what we do, translates love, joy, and happiness from their hearts to their hands.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 15.5, lineHeight: 1.65, marginBottom: 14 }}>
                We are happy people, with loving hearts and hands willing to go the extra mile to be a beacon of hope for every child. We believe that when you empower a child today, you safeguard the future of the entire continent tomorrow.
              </p>
              <div style={{ background: 'var(--light-neutral)', padding: 20, borderRadius: 12, border: '1px solid var(--border-warm)', marginTop: 24 }}>
                <strong style={{ display: 'block', fontSize: 16, color: 'var(--primary-red)', marginBottom: 6 }}>
                  Is there more to our story?
                </strong>
                <p style={{ color: 'var(--dark-neutral)', fontSize: 14.5, lineHeight: 1.5, margin: 0 }}>
                  Yes. You are more to our story than we can ever tell. Every dollar given, every hour volunteered, and every smile shared continues the story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH PHOTO BAND WITH QUOTE CARD */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '60px 0', background: 'var(--light-neutral)' }}>
        <div className="container">
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: 380 }}>
            <Image
              src="/assets/images/children-event.png"
              alt="Happy Hands Outreach Celebration"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(40, 32, 21, 0.85) 0%, rgba(40, 32, 21, 0.4) 60%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 40,
                bottom: 40,
                maxWidth: 480,
                color: '#ffffff',
              }}
            >
              <Heart size={28} color="var(--accent-yellow)" strokeWidth={2.5} style={{ marginBottom: 12 }} />
              <h3 style={{ color: '#ffffff', fontSize: 24, fontStyle: 'italic', lineHeight: 1.4, margin: '0 0 12px' }}>
                &ldquo;They’re the reason we exist. But you’re the reason this works.&rdquo;
              </h3>
              <span style={{ fontSize: 13, color: 'rgba(255, 255, 255, 0.85)' }}>
                Happy Hands Community Development Foundation · RC 183177
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOGETHER WE CAN */}
      <section className="section" aria-label="Together We Can">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Together We Can</span>
            <h2>How We Drive Long-Term Transformation</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Our 3-pillar community framework bridges foundational gaps for the African child.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>Inclusive Education</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Removing financial and logistical barriers so every child can attend accredited schools with proper uniforms, textbooks, and bags.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>Health & Nutrition</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Providing balanced meal drives (Nourish Now) and early wellness screenings (FitTot) so growing minds have energy to learn.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>Mentorship & Community</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                Empowering volunteer teachers and guardians who instill character, creative thinking, and confidence into children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
