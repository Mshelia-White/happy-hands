'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { DonationWidget } from '@/components/DonationWidget';
import { 
  LayoutGrid, 
  BookOpen, 
  HeartPulse, 
  ArrowRight, 
  Heart, 
  CreditCard, 
  Building2 
} from 'lucide-react';

export default function ProgramsPage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <LayoutGrid size={16} color="var(--orange)" /> Our Initiatives
          </div>
          <h1>Two focus areas. One complete mission.</h1>
          <p>
            Happy Hands organizes its work around Education and Health, with practical initiatives that solve real
            problems for the African child.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section" style={{ paddingTop: '60px' }}>
        <div className="container">
          {/* Education Pillar */}
          <div className="pillar-block pillar-education">
            <div className="pillar-head">
              <div className="pillar-title">
                <div className="pillar-icon">
                  <BookOpen size={28} />
                </div>
                <div>
                  <small>Pillar one</small>
                  <h3>Education Programs</h3>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => openDonationModal('Scholars Program')}
              >
                Support education
              </button>
            </div>

            <div className="program-grid">
              <article className="program-card">
                <div className="program-image">
                  <Image
                    src="/assets/images/volunteer-community.png"
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
                    Scholarships for merit and need-based children, covering tuition, books, school supplies, monitoring,
                    and inclusive personal development.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/scholars-program" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              <article className="program-card">
                <div className="program-image">
                  <Image
                    src="/assets/images/community-outreach.jpg"
                    alt="Teachers on the Go"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag">Education</div>
                </div>
                <div className="program-body">
                  <h4>Teachers on the Go</h4>
                  <p className="program-sentence">Grooming well-rounded children beyond the classroom.</p>
                  <p className="program-desc">
                    Volunteers and partner educators teach creative, vocational, and digital literacy topics in
                    underserved schools and communities.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/teachers-on-the-go" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              <article className="program-card">
                <div className="program-image">
                  <Image
                    src="/assets/images/volunteer-community.png"
                    alt="Back-2-School"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag">Education</div>
                </div>
                <div className="program-body">
                  <h4>Back-2-School</h4>
                  <p className="program-sentence">Helping children learn in better conditions.</p>
                  <p className="program-desc">
                    School supplies and learning kits for children and under-resourced schools, including books, writing
                    materials, bags, and desks.
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

          {/* Health Pillar */}
          <div className="pillar-block pillar-health" style={{ marginTop: '60px' }}>
            <div className="pillar-head">
              <div className="pillar-title">
                <div className="pillar-icon">
                  <HeartPulse size={28} />
                </div>
                <div>
                  <small>Pillar two</small>
                  <h3 style={{ color: 'white' }}>Health Programs</h3>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('Nourish Now')}
              >
                Support health
              </button>
            </div>

            <div className="program-grid two">
              <article className="program-card">
                <div className="program-image">
                  <Image
                    src="/assets/images/community-outreach.jpg"
                    alt="Nourish Now"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag" style={{ color: 'var(--green)' }}>
                    Health & Nutrition
                  </div>
                </div>
                <div className="program-body">
                  <h4>Nourish Now</h4>
                  <p className="program-sentence" style={{ color: 'var(--green)' }}>
                    Food relief for children and families in need.
                  </p>
                  <p className="program-desc">
                    Direct food relief through Happy Boxes, Eat &apos;n&apos; Learn school hot meal days, and community food banks
                    to stop malnutrition.
                  </p>
                  <div className="program-actions">
                    <Link className="btn btn-dark" href="/nourish-now" style={{ flexGrow: 1 }}>
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>

              <article className="program-card">
                <div className="program-image">
                  <Image
                    src="/assets/images/volunteer-community.png"
                    alt="FitTot"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <div className="program-tag" style={{ color: 'var(--green)' }}>
                    Healthcare
                  </div>
                </div>
                <div className="program-body">
                  <h4>FitTot</h4>
                  <p className="program-sentence" style={{ color: 'var(--green)' }}>
                    Quality healthcare access for vulnerable children.
                  </p>
                  <p className="program-desc">
                    A dedicated healthcare initiative providing pediatric medical screenings, HMO partnerships, and
                    emergency medicine support.
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
              <Heart size={14} /> Donation Experience
            </div>
            <h2>Give to all programs or support a specific initiative.</h2>
            <p>
              Every donation plays a crucial role in sustaining our work. Choose to support a specific program or give
              to the general fund where it is needed most.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <CreditCard size={28} />
                <h3>Card payment</h3>
                <p>Secure online instant donation via Paystack or Flutterwave.</p>
              </div>
              <div className="payment-card">
                <Building2 size={28} />
                <h3>Bank transfer</h3>
                <p>Direct bank transfers with verified accounting records.</p>
              </div>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="General Fund" />
          </div>
        </div>
      </section>
    </>
  );
}
