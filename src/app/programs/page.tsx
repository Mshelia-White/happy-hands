'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { SafeImage } from '@/components/SafeImage';
import { 
  LayoutGrid, 
  BookOpen, 
  HeartPulse, 
  ArrowRight, 
  Heart, 
  Sparkles
} from 'lucide-react';

export default function ProgramsPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <LayoutGrid size={16} color="var(--orange)" /> What Happy Hands is doing
          </div>
          <h1>We are nurturing the next generation of changemakers.</h1>
          <p>
            By providing children with opportunities that extend beyond the classroom.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="section-kicker" style={{ justifyContent: 'center' }}>
              How Happy Hands is getting this done
            </p>
            <h2 className="section-title">Education and Health Programs</h2>
            <p className="section-lede" style={{ maxWidth: 650, margin: '12px auto 0' }}>
              Focused interventions designed to ensure every child has access to basic education, nourishment, and growth.
            </p>
          </div>

          {/* Education Programs */}
          <div className="pillar-block pillar-education">
            <div className="pillar-head">
              <div className="pillar-title">
                <div className="pillar-icon">
                  <BookOpen size={28} />
                </div>
                <div>
                  <small>Category One</small>
                  <h3>Education Programs</h3>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('Scholars Program')}
              >
                Become a Guardian
              </button>
            </div>

            <div className="program-grid">
              {/* Scholars Program */}
              <article className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/children-group.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                    alt="Scholars Program"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag">Education</div>
                </div>
                <div className="program-body">
                  <h4>Scholars Program</h4>
                  <p className="program-sentence">Ensuring every child has access to basic education.</p>
                  <p className="program-desc">
                    Through the Scholars Program, we become guardians by supporting children who have academic potential but lack the financial means to remain in school, including daily feeding during school hours.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/scholars-program" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Teachers on the Go */}
              <article className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/community-outreach.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                    alt="Teachers on the Go"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag">Education</div>
                </div>
                <div className="program-body">
                  <h4>Teachers on the Go</h4>
                  <p className="program-sentence">Help us take learning beyond the classroom.</p>
                  <p className="program-desc">
                    Giving volunteers and organisations the opportunity to teach children in underserved schools creative and life skills they may not encounter in regular lessons.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/teachers-on-the-go" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Back-2-School */}
              <article className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/children-event.png"
                    fallbackSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
                    alt="Back-2-School"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag">Education</div>
                </div>
                <div className="program-body">
                  <h4>Back-2-School</h4>
                  <p className="program-sentence">Creating a more conducive learning environment.</p>
                  <p className="program-desc">
                    Supporting children with supplies at the start of the year, and assisting schools with tables, chairs, boards, books, and learning materials.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/back-2-school" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Health Programs */}
          <div className="pillar-block pillar-health" style={{ marginTop: '60px' }}>
            <div className="pillar-head">
              <div className="pillar-title">
                <div className="pillar-icon">
                  <HeartPulse size={28} />
                </div>
                <div>
                  <small>Category Two</small>
                  <h3 style={{ color: 'white' }}>Health Programs</h3>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Nourish Now')}
              >
                Support Health
              </button>
            </div>

            <div className="program-grid two">
              {/* Nourish Now */}
              <article className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/volunteer-community.png"
                    fallbackSrc="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                    alt="Nourish Now"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag" style={{ color: 'var(--green)' }}>
                    Health
                  </div>
                </div>
                <div className="program-body">
                  <h4>Nourish Now</h4>
                  <p className="program-sentence" style={{ color: 'var(--green)' }}>
                    Temporary food relief for children and families.
                  </p>
                  <p className="program-desc">
                    Providing food relief through Happy Boxes (December) and Eat &apos;n&apos; Learn for students in schools, with our Community Food Bank coming soon.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/nourish-now" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              {/* FitTot */}
              <article className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/hero-volunteer.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
                    alt="FitTot"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag" style={{ background: '#fef3c7', color: '#92400e' }}>
                    Coming Soon
                  </div>
                </div>
                <div className="program-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <h4 style={{ margin: 0 }}>FitTot</h4>
                    <span style={{ fontSize: 11, fontWeight: 800, background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: 999 }}>
                      Launch Phase
                    </span>
                  </div>
                  <p className="program-sentence" style={{ color: 'var(--green)' }}>
                    Every child deserves a shot at quality healthcare.
                  </p>
                  <p className="program-desc">
                    Bridging the healthcare gap for vulnerable families by creating opportunities for children to access proper healthcare at affordable costs.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/fittot" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Global Multi-Currency Donate Section */}
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
              <Heart size={14} /> Support Our Initiatives
            </div>
            <h2>Wherever you are, you can be part of this.</h2>
            <p>
              Every donation plays a role in helping us create better opportunities for the children we serve. Give what you can, from wherever you are.
            </p>
            <p style={{ fontWeight: 800, color: '#fed7aa', marginTop: 12 }}>
              They’re the reason we exist. You’re the reason this works.
            </p>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="General Fund" />
          </div>
        </div>
      </section>
    </>
  );
}
