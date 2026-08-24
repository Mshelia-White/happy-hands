'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Laptop, MapPin, Briefcase, CheckCircle2, Heart } from 'lucide-react';
import { VolunteerForm } from '@/components/VolunteerForm';
import volunteerCommunityImg from '@/assets/images/volunteer-community.png';

export default function VolunteerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <Users size={16} color="var(--orange)" /> Volunteer With Us
          </div>
          <h1>Join us in nurturing the future!</h1>
          <p>
            Your desire to join us in going the extra mile to nurture the future makes us super happy. Together, we can
            create a future we can all be proud of.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container about-grid">
          {/* Left Column */}
          <div className="white-panel">
            <div style={{ position: 'relative', width: '100%', height: 320, borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
              <Image
                src={volunteerCommunityImg}
                alt="Happy Hands Volunteers"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="content-block" style={{ marginTop: 24 }}>
              <h2>Why Volunteer?</h2>
              <p>
                As a volunteer, you are at the absolute heart of what we do. Your time, energy, and love push us to do
                more and become better for the children we serve. But more importantly, volunteering gives you the
                opportunity to make a lifelong difference, expand your network, and hone valuable leadership skills.
              </p>

              <div className="quote-box" style={{ background: 'var(--cream)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--slate)' }}>Volunteer Certification</strong>
                <small style={{ color: 'var(--muted)' }}>
                  You are eligible for a verified community service certificate and formal recommendation letter when
                  you contribute actively as an asset over a 6-10 month period.
                </small>
              </div>

              <h3>Frequently Asked Questions</h3>
              <p>
                <strong>1. Do I need to buy the Happy Hands branded T-shirt?</strong>
                <br />
                As a first-time volunteer for physical outreaches, yes. The volunteer t-shirt is ₦5,000, available in
                White, Vibrant Orange, or Navy Blue.
              </p>

              <p>
                <strong>2. What if I don&apos;t have money to contribute?</strong>
                <br />
                Your time and skills are truly priceless. Giving your dedication and care is more than enough to make an
                enormous impact.
              </p>

              <p style={{ marginTop: 32, fontWeight: 800, fontSize: 16 }}>
                Not looking to volunteer?{' '}
                <Link href="/programs#donate" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
                  Sponsor a child instead
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="orange-panel" style={{ marginBottom: 30 }}>
              <p className="section-kicker" style={{ color: '#ffedd5' }}>
                Get Started
              </p>
              <h2>Here&apos;s how you can help.</h2>
              <p style={{ color: 'rgba(255,255,255,.9)', lineHeight: 1.6 }}>
                You will receive a warm welcome and complete orientation guidelines during our digital onboarding
                session.
              </p>
              <a className="btn btn-light" href="#apply-form" style={{ marginTop: 20 }}>
                Apply to Volunteer
              </a>
            </div>

            <div className="role-card" style={{ marginBottom: 24 }}>
              <div className="role-icon">
                <Laptop size={24} />
              </div>
              <h3>Virtual Roles</h3>
              <ul>
                <li>
                  <CheckCircle2 size={16} /> Media & Graphics Design
                </li>
                <li>
                  <CheckCircle2 size={16} /> Grant & Content Writing
                </li>
                <li>
                  <CheckCircle2 size={16} /> Video Editing & Storytelling
                </li>
                <li>
                  <CheckCircle2 size={16} /> Partnerships & Fundraising
                </li>
                <li>
                  <CheckCircle2 size={16} /> Digital Communications & Social Media
                </li>
              </ul>
            </div>

            <div className="role-card" style={{ marginBottom: 24 }}>
              <div className="role-icon">
                <MapPin size={24} />
              </div>
              <h3>Physical Roles</h3>
              <ul>
                <li>
                  <CheckCircle2 size={16} /> Mentors & Event Facilitators
                </li>
                <li>
                  <CheckCircle2 size={16} /> Program & Logistics Assistants
                </li>
                <li>
                  <CheckCircle2 size={16} /> School & Community Inspection
                </li>
                <li>
                  <CheckCircle2 size={16} /> Community Health & Food Outreaches
                </li>
              </ul>
            </div>

            <div className="role-card" style={{ marginBottom: 32 }}>
              <div className="role-icon" style={{ background: 'var(--slate)', color: 'white' }}>
                <Briefcase size={24} />
              </div>
              <h3>Specialized Roles</h3>
              <ul>
                <li>
                  <CheckCircle2 size={16} /> Legal & Compliance Advisory
                </li>
                <li>
                  <CheckCircle2 size={16} /> Doctors, Nurses & Pediatricians
                </li>
                <li>
                  <CheckCircle2 size={16} /> Software & IT Infrastructure Support
                </li>
              </ul>
            </div>

            {/* Application Form */}
            <div id="apply-form">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
