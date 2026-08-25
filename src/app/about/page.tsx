import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Target, Eye, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { SafeImage } from '@/components/SafeImage';

export const metadata: Metadata = {
  title: 'About Us | Happy Hands Foundation',
  description: 'Learn why Happy Hands exists and how we are nurturing the next generation of changemakers.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <BookOpen size={16} color="var(--orange)" /> Our Story
          </div>
          <h1>We exist to nurture changemakers.</h1>
          <p>
            Creating a safe space for the African child while providing opportunities for inclusive growth.
          </p>
        </div>
      </section>

      {/* Why Happy Hands */}
      <section className="section" style={{ paddingTop: '70px' }}>
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/children-group.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
              alt="Children at a Happy Hands event"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <p className="section-kicker">Why Happy Hands</p>
            <h2>Happy Hands isn&apos;t just the name of an organisation.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              It is a description of everyone who, through their interaction with what we do, translates love, joy and happiness from their hearts to their hands.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              We are happy people, with loving hearts and hands willing to go the extra mile to be a beacon of hope for every child.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              At Happy Hands, we provide children in underserved areas with equal opportunities to become agents of lasting change by creating an environment for their all-inclusive welfare.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              We believe that every child, given the opportunity and the right environment, can bloom into the best version of themselves.
            </p>

            <div style={{ marginTop: 28, padding: 20, background: 'var(--cream)', borderRadius: 16, border: '1px solid var(--line)' }}>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 800, color: 'var(--orange-dark)' }}>
                Is there more to our story?
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--slate)' }}>
                Yes. You are more to our story than we can ever tell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section style={{ marginBottom: '80px', marginTop: '20px' }}>
        <div className="container">
          <div className="mission-vision-wrapper">
            <div className="mv-card">
              <div className="mv-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To incorporate a network of volunteers and partners who are passionate about helping children realize their full potential.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                Creating a safe space for the African child while providing opportunities for inclusive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="orange-panel" style={{ textAlign: 'center' }}>
            <div
              className="orange-bg-img"
              style={{ backgroundImage: "url('/assets/images/community-outreach.jpg'), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80')" }}
            />
            <p className="section-kicker" style={{ color: '#ffedd5', justifyContent: 'center' }}>
              Together We Can
            </p>
            <h2 style={{ maxWidth: 650, margin: '16px auto' }}>
              Together, we can nurture a future we can be proud of.
            </h2>
            <p className="section-lede" style={{ color: 'rgba(255,255,255,.95)', margin: '16px auto 32px', fontSize: 16 }}>
              They’re the reason we exist. But you’re the reason this works.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
              <Link className="btn btn-dark" href="/programs">
                View Our Programs <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-light" href="/volunteer">
                Volunteer with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
