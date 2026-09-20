'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { StatsCounter } from '@/components/StatsCounter';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { CtaBanner } from '@/components/CtaBanner';
import { 
  ArrowRight, 
  Heart, 
  GraduationCap, 
  Users, 
  HeartHandshake, 
  Sparkles,
  ChevronRight,
  BookOpen,
  Apple,
  Briefcase
} from 'lucide-react';

const homeFAQs: FAQItem[] = [
  {
    question: 'How do I make a donation to Happy Hands Foundation?',
    answer: 'You can donate securely online in NGN (₦), USD ($), GBP (£), or EUR (€) via card or direct bank transfer to our official Guaranty Trust Bank (GTBank) account: 0625489110 (Happy Hands Community Development Foundation). You can choose to support our general fund or designate your gift to a specific initiative like the Scholars Program or Nourish Now.',
  },
  {
    question: 'How does the Scholars Program work?',
    answer: 'The Scholars Program matches compassionate guardians with bright children from underprivileged communities. Your sponsorship covers school tuition, quality books and stationery, customized uniforms, daily nutritional lunch, and weekend personal mentorship.',
  },
  {
    question: 'How can I volunteer with Happy Hands Foundation?',
    answer: 'We offer virtual, physical, and specialized volunteering tracks. Whether you specialize in creative media, grant writing, classroom teaching, or medical healthcare, you can apply directly through our 3-step volunteer onboarding portal on the Volunteer page.',
  },
  {
    question: 'Is Happy Hands a registered non-profit organization?',
    answer: 'Yes. Happy Hands Community Development Foundation is officially registered in Nigeria under Corporate Affairs Commission (CAC) Registration Number: RC 183177. We maintain rigorous financial transparency and publish audited impact reports.',
  },
  {
    question: 'Can my corporate organization partner with Happy Hands?',
    answer: 'Yes! We actively collaborate with corporate entities, donor foundations, and social enterprises for CSR drives, school renovations, food box packaging, and community health outreaches. Reach out to partnerships@happyhandsfoundation.org to get started.',
  },
];

export default function HomePage() {
  const { openDonationModal } = useDonation();

  return (
    <main>
      {/* 1. HERO SECTION (Master Visual Direction) */}
      <section className="hero-section" aria-label="Hero Overview">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>We are nurturing changemakers.</h1>
              <p className="hero-subtitle">
                Everything goes to child development.
              </p>

              <div className="hero-actions">
                <Link href="/programs" className="btn btn-primary">
                  Explore Our Programs ›
                </Link>
                <Link href="/get-involved" className="btn btn-secondary">
                  Get Involved ›
                </Link>
              </div>

              {/* Community Proof */}
              <div className="hero-avatar-stack">
                <div className="avatar-group">
                  <Image
                    src="/assets/images/hero-volunteer.jpg"
                    alt="Volunteer"
                    width={38}
                    height={38}
                    className="avatar-img"
                    unoptimized
                  />
                  <Image
                    src="/assets/images/children-event.png"
                    alt="Scholar"
                    width={38}
                    height={38}
                    className="avatar-img"
                    unoptimized
                  />
                  <Image
                    src="/assets/images/community-outreach.jpg"
                    alt="Community Partner"
                    width={38}
                    height={38}
                    className="avatar-img"
                    unoptimized
                  />
                  <div className="avatar-plus-bubble">+</div>
                </div>
                <div className="avatar-text">
                  Join a community of changemakers building brighter tomorrows.
                </div>
              </div>
            </div>

            {/* Right: Large photo of child with overlapping quote card */}
            <div className="hero-media-wrap">
              <Image
                src="/assets/images/children-group.jpg"
                alt="Children of Happy Hands Foundation in classroom"
                width={600}
                height={520}
                className="hero-photo"
                priority
                unoptimized
              />
              <div className="quote-card-overlap">
                <div className="quote-mark">&ldquo;</div>
                <p className="quote-text">
                  They’re the reason we exist. But you’re the reason this works.
                </p>
                <div className="quote-heart">
                  <Heart size={20} color="var(--accent-yellow)" fill="none" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR IMPACT SO FAR: 4 STAT CARDS */}
      <StatsCounter showTitle={true} />

      {/* 3. OUR PROGRAMS: 5 CARDS IN A ROW */}
      <section className="section" aria-label="Our Flagship Programs">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Our Programs</span>
            <h2>Tailored Pathways to Child Development</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Comprehensive access to quality basic education, teacher empowerment, and childhood nutrition.
            </p>
          </div>

          <div className="programs-grid">
            {/* 1. Scholars Program */}
            <div className="program-card">
              <div className="program-card-img-wrap">
                <Image
                  src="/assets/images/children-group.jpg"
                  alt="Scholars Program"
                  width={300}
                  height={180}
                  className="program-card-img"
                  unoptimized
                />
              </div>
              <div className="program-card-body">
                <h3 className="program-card-title">Scholars Program</h3>
                <p className="program-card-desc">
                  Providing full academic scholarships, learning materials, and mentorship to underprivileged children.
                </p>
                <Link href="/scholars-program" className="program-card-link">
                  Learn more ›
                </Link>
              </div>
            </div>

            {/* 2. Teachers on the Go */}
            <div className="program-card">
              <div className="program-card-img-wrap">
                <Image
                  src="/assets/images/hero-volunteer.jpg"
                  alt="Teachers on the Go"
                  width={300}
                  height={180}
                  className="program-card-img"
                  unoptimized
                />
              </div>
              <div className="program-card-body">
                <h3 className="program-card-title">Teachers on the Go</h3>
                <p className="program-card-desc">
                  Deploying mobile volunteer educators and interactive learning toolkits directly to underserved communities.
                </p>
                <Link href="/teachers-on-the-go" className="program-card-link">
                  Learn more ›
                </Link>
              </div>
            </div>

            {/* 3. Back-2-School */}
            <div className="program-card">
              <div className="program-card-img-wrap">
                <Image
                  src="/assets/images/children-event.png"
                  alt="Back-2-School"
                  width={300}
                  height={180}
                  className="program-card-img"
                  unoptimized
                />
              </div>
              <div className="program-card-body">
                <h3 className="program-card-title">Back-2-School</h3>
                <p className="program-card-desc">
                  Equipping children annually with brand-new school backpacks, notebooks, uniforms, and shoes.
                </p>
                <Link href="/back-2-school" className="program-card-link">
                  Learn more ›
                </Link>
              </div>
            </div>

            {/* 4. Nourish Now */}
            <div className="program-card">
              <div className="program-card-img-wrap">
                <Image
                  src="/assets/images/community-outreach.jpg"
                  alt="Nourish Now"
                  width={300}
                  height={180}
                  className="program-card-img"
                  unoptimized
                />
              </div>
              <div className="program-card-body">
                <h3 className="program-card-title">Nourish Now</h3>
                <p className="program-card-desc">
                  Providing balanced food packs and school day nutritional sustenance so children can focus and thrive.
                </p>
                <Link href="/nourish-now" className="program-card-link">
                  Learn more ›
                </Link>
              </div>
            </div>

            {/* 5. FitTot (Coming Soon) */}
            <div className="program-card is-coming-soon">
              <div className="program-card-img-wrap">
                <span className="coming-soon-badge">Coming Soon</span>
                <Image
                  src="/assets/images/volunteer-community.png"
                  alt="FitTot Early Development"
                  width={300}
                  height={180}
                  className="program-card-img"
                  unoptimized
                />
              </div>
              <div className="program-card-body">
                <h3 className="program-card-title">FitTot</h3>
                <p className="program-card-desc">
                  Early childhood physical wellbeing, motor skills development, and child healthcare screening initiatives.
                </p>
                <Link href="/fittot" className="program-card-link">
                  Learn more ›
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WAYS TO GET INVOLVED: 4 COLUMNS */}
      <section className="section section-bg-light" aria-label="Ways to Get Involved">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Join Hands</span>
            <h2>Ways to Get Involved</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              There are many meaningful ways you can stand beside children and help them build brighter futures.
            </p>
          </div>

          <div className="get-involved-columns">
            {/* Column 1: Support a Child */}
            <div className="involved-col-card">
              <div className="involved-icon-wrap" style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)' }}>
                <Heart size={22} />
              </div>
              <h3 className="involved-title">Support a Child</h3>
              <p className="involved-desc">
                Provide one-time or monthly donations toward classroom supplies, meals, or uniforms for a child in need.
              </p>
              <button 
                type="button" 
                onClick={() => openDonationModal('General Fund')}
                className="involved-link"
              >
                Get involved ›
              </button>
            </div>

            {/* Column 2: Become a Guardian */}
            <div className="involved-col-card">
              <div className="involved-icon-wrap" style={{ backgroundColor: 'var(--primary-green-light)', color: 'var(--primary-green)' }}>
                <GraduationCap size={22} />
              </div>
              <h3 className="involved-title">Become a Guardian</h3>
              <p className="involved-desc">
                Sponsor a child through the Scholars Program and receive termly academic progress reports and letters.
              </p>
              <Link href="/scholars-program" className="involved-link">
                Get involved ›
              </Link>
            </div>

            {/* Column 3: Volunteer */}
            <div className="involved-col-card">
              <div className="involved-icon-wrap" style={{ backgroundColor: 'var(--primary-red-light)', color: 'var(--primary-red)' }}>
                <Users size={22} />
              </div>
              <h3 className="involved-title">Volunteer</h3>
              <p className="involved-desc">
                Offer your unique skills virtually or on the ground across teaching, logistics, graphics, or medical outreach.
              </p>
              <Link href="/volunteer" className="involved-link">
                Get involved ›
              </Link>
            </div>

            {/* Column 4: Partner With Us */}
            <div className="involved-col-card">
              <div className="involved-icon-wrap" style={{ backgroundColor: 'var(--primary-green-light)', color: 'var(--primary-green)' }}>
                <Briefcase size={22} />
              </div>
              <h3 className="involved-title">Partner With Us</h3>
              <p className="involved-desc">
                Collaborate as a corporate, religious, or NGO partner to execute large-scale impactful community projects.
              </p>
              <Link href="/contact?subject=corporate" className="involved-link">
                Get involved ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY: MOMENTS OF JOY */}
      <section className="section" aria-label="Moments of Joy">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="section-title-red">Moments of Joy</span>
              <h2 style={{ margin: '4px 0 0' }}>Real Smiles. Real Impact.</h2>
            </div>
            <Link href="/impact" className="btn btn-tertiary">
              View All Impact Stories ›
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', height: 260, position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image
                src="/assets/images/children-event.png"
                alt="Creative Arts Outreach"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', height: 260, position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image
                src="/assets/images/community-outreach.jpg"
                alt="Happy Boxes Food Distribution"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', height: 260, position: 'relative', border: '1px solid var(--border-warm)' }}>
              <Image
                src="/assets/images/hero-volunteer.jpg"
                alt="Mentorship in Action"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS: VOICES FROM OUR COMMUNITY */}
      <section className="section section-bg-light" aria-label="Voices From Our Community">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Voices From Our Community</span>
            <h2>What People Are Saying</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Words from our guardians, school administrators, and passionate volunteers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 14.5, fontStyle: 'italic', color: 'var(--dark-neutral)', lineHeight: 1.6, margin: '0 0 16px' }}>
                &ldquo;Sponsoring a scholar through Happy Hands has been one of the most rewarding commitments of my life. Seeing my student move from sitting at home to leading her class in exams is priceless.&rdquo;
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: 14, color: 'var(--dark-neutral)' }}>Mrs. Bukola A.</strong>
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Guardian Sponsor, Scholars Program</span>
              </div>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 14.5, fontStyle: 'italic', color: 'var(--dark-neutral)', lineHeight: 1.6, margin: '0 0 16px' }}>
                &ldquo;When Teachers on the Go visited our community school, the joy in the children’s eyes was unforgettable. The volunteers brought energy, books, and genuine empathy.&rdquo;
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: 14, color: 'var(--dark-neutral)' }}>Mr. Tunde O.</strong>
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Head Teacher, Community Primary School</span>
              </div>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-warm)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 14.5, fontStyle: 'italic', color: 'var(--dark-neutral)', lineHeight: 1.6, margin: '0 0 16px' }}>
                &ldquo;Volunteering with Happy Hands transformed how I view community service. Everything is transparent, centered on the children, and delivered with love.&rdquo;
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: 14, color: 'var(--dark-neutral)' }}>Chidinma E.</strong>
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>Lead Volunteer, Media & Communications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ (Board 08 Accordion) */}
      <section className="section" id="faqs" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-title-red">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
              Quick answers about our donation channels, volunteer onboarding, and governance.
            </p>
          </div>

          <FAQAccordion items={homeFAQs} />
        </div>
      </section>

      {/* 8. CTA BANNER (Before Footer) */}
      <CtaBanner />
    </main>
  );
}
