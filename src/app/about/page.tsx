import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, Target, Eye, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { SafeImage } from '@/components/SafeImage';

export const metadata: Metadata = {
  title: 'About Us | Happy Hands Foundation',
  description: 'Learn about Happy Hands Foundation, our mission to nurture changemakers, and why we do what we do.',
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
            A safe space for the African child, providing genuine opportunities for inclusive growth and lifelong
            development.
          </p>
        </div>
      </section>

      {/* Why Happy Hands (Split Layout) */}
      <section className="section" style={{ paddingTop: '80px' }}>
        <div className="container split-layout">
          <div className="split-image" style={{ height: 480, position: 'relative' }}>
            <SafeImage
              src="/assets/images/volunteer-community.png"
              fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
              alt="Children at a Happy Hands event"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="split-content">
            <p className="section-kicker">Why Happy Hands</p>
            <h2>Happy hands are loving hearts translated into action.</h2>
            <p>
              Happy Hands is not just the name of an organization. It&apos;s a description befitting everyone who
              translates love, joy, and kindness from their hearts to their hands.
            </p>
            <p>
              At Happy Hands, we provide children in underserved areas with equal opportunities to become agents of
              lasting change. We do this by creating an environment for their all-inclusive welfare. Since 2020, we have
              been bridging education and health gaps while cultivating development opportunities for children who
              deserve the right environment to bloom.
            </p>

            <h3 style={{ margin: '32px 0 12px', fontSize: '22px', fontWeight: 800, color: 'var(--slate)' }}>
              Is there more to our story?
            </h3>
            <p>
              Yes, you are more to our story than we can ever tell. Every time you give your time, expertise, or
              financial sponsorship, you make it possible for the children we serve to flourish in the world we are
              creating together.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <div className="container">
          <h3>&quot;Money is not the problem.&quot;</h3>
          <p>— Happiness (Founder), on creating avenues for access to quality education and health.</p>
        </div>
      </section>

      {/* Mission & Vision Cards (Overlapping) */}
      <section style={{ marginBottom: '100px' }}>
        <div className="container">
          <div className="mission-vision-wrapper">
            <div className="mv-card">
              <div className="mv-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To incorporate a vibrant network of volunteers and partners who are passionate about helping children
                realize their full potential through education and health interventions.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                Creating a safe space for the African child while providing opportunities for inclusive growth,
                dignity, and academic excellence.
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
              Join Our Community
            </p>
            <h2 style={{ maxWidth: 650, margin: '16px auto' }}>
              Become a beacon of hope for a child today.
            </h2>
            <p className="section-lede" style={{ color: 'rgba(255,255,255,.9)', margin: '20px auto 36px' }}>
              We are happy people, with loving hearts, and hands that are willing to go the extra mile.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', position: 'relative', zIndex: 1 }}>
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
