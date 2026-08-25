'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { StatsCounter } from '@/components/StatsCounter';
import { DonationWidget } from '@/components/DonationWidget';
import { ContactForm } from '@/components/ContactForm';
import { SafeImage } from '@/components/SafeImage';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';
import { 
  ArrowRight, 
  Heart, 
  CheckCircle2, 
  GraduationCap, 
  BusFront, 
  Backpack, 
  Utensils, 
  HeartPulse, 
  Laptop, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Quote,
  Target,
  Eye,
  Globe
} from 'lucide-react';

const homepageFAQs: FAQItem[] = [
  {
    question: 'How do I make a donation?',
    answer: (
      <span>
        You can make a direct donation online in <strong>NGN (₦), USD ($), GBP (£), or EUR (€)</strong> using our secure multi-currency card gateway, or via direct bank transfer to our official GTBank account (<strong>0625489110</strong>). You can choose to support our general child development fund or direct your gift to a specific initiative like the Scholars Program or Nourish Now.{' '}
        <a href="#donate" style={{ color: 'var(--orange)', fontWeight: 800, textDecoration: 'underline' }}>
          Go to the donation section
        </a>
        .
      </span>
    ),
  },
  {
    question: 'How do I volunteer?',
    answer: (
      <span>
        We welcome passionate individuals across virtual roles (media, design, grant writing) and physical roles (teaching, event coordination, medical screenings). You can read more about volunteer benefits and submit your quick application on our{' '}
        <Link href="/volunteer" style={{ color: 'var(--orange)', fontWeight: 800, textDecoration: 'underline' }}>
          Volunteer Page
        </Link>
        .
      </span>
    ),
  },
];

export default function HomePage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              <Heart size={14} color="var(--orange)" fill="var(--orange-soft)" />
              Everything goes to child development.
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.18 }}>
              Here’s an open secret: We are nurturing the next generation of changemakers.
            </h1>
            <p className="section-lede" style={{ fontSize: 16, lineHeight: 1.65 }}>
              We give our all to creating opportunities for children to learn, grow, stay healthy and become the best versions of themselves.
            </p>
            <p style={{ color: 'var(--orange-dark)', fontWeight: 800, fontSize: 15, margin: '0 0 22px' }}>
              They’re the reason we exist. But you’re the reason this works.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="btn btn-dark">
                Learn More <ArrowRight size={16} />
              </Link>
              <Link href="/volunteer" className="btn btn-orange">
                Get Involved
              </Link>
            </div>
            <div className="hero-badges">
              <div className="hero-badge">
                <CheckCircle2 size={20} /> Non-Profit Organization
              </div>
              <div className="hero-badge">
                <CheckCircle2 size={20} /> Registered Since 2020
              </div>
            </div>
          </div>

          <div className="hero-collage">
            <div className="hero-img-main">
              <SafeImage
                src="/assets/images/hero-volunteer.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                alt="Happy Hands Foundation Volunteers and Children"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="hero-img-overlay" />
            </div>
            <div className="hero-img-secondary">
              <SafeImage
                src="/assets/images/children-group.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Community Children Outreach"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="float-card one">
              <GraduationCap size={18} /> Education First
            </div>
            <div className="float-card two">
              <HeartPulse size={18} /> Healthy Futures
            </div>
            <div className="impact-card">
              <small>Community Reach</small>
              <p>Over 5,000 children educated across 4 states.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* About Us Section */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="orange-panel">
            <div
              className="orange-bg-img"
              style={{ backgroundImage: "url('/assets/images/children-event.png'), url('/assets/images/volunteer-community.png')" }}
            />
            <p className="section-kicker" style={{ color: 'white' }}>
              About Us
            </p>
            <h2>Here’s an open secret: We are nurturing the next generation of changemakers.</h2>
            <p className="section-lede" style={{ color: 'rgba(255,255,255,.95)', fontSize: 16, lineHeight: 1.7 }}>
              We provide children with opportunities that extend beyond the classroom. Since 2020, we’ve been bridging the education and health gap and creating development opportunities for less privileged children.
            </p>
            <p style={{ color: 'rgba(255,255,255,.95)', fontSize: 16, lineHeight: 1.7, margin: '14px 0 24px' }}>
              And without you, we wouldn’t have been able to reach over 1,000 children across four states in Nigeria.
            </p>

            <div className="about-actions">
              <Link href="/about" className="btn btn-light">
                Get to know more about us and our programs
              </Link>
            </div>
          </div>

          <div className="white-panel">
            <div style={{ position: 'relative', width: '100%', height: 220, marginBottom: 24 }}>
              <SafeImage
                src="/assets/images/community-outreach.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Community Outreach"
                fill
                style={{ objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
            </div>
            <p style={{ color: '#475569', lineHeight: 1.7, fontSize: 15 }}>
              Happy Hands isn&apos;t just the name of an organisation. It is a description of everyone who, through their interaction with what we do, translates love, joy and happiness from their hearts to their hands.
            </p>

            <div className="mission-grid">
              <div className="mission-card">
                <Target size={24} />
                <h3>Our Mission</h3>
                <p>
                  To incorporate a network of volunteers and partners who are passionate about helping children realize their full potential.
                </p>
              </div>
              <div className="mission-card alt">
                <Eye size={24} />
                <h3>Our Vision</h3>
                <p>
                  Creating a safe space for the African child while providing opportunities for inclusive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section (4 items) */}
      <section className="section" id="highlights" style={{ background: '#fffaf4' }}>
        <div className="container">
          <div className="program-intro">
            <div>
              <p className="section-kicker">What Happy Hands is doing</p>
              <h2 className="section-title">Nurturing Changemakers Beyond the Classroom</h2>
            </div>
            <p className="section-lede">
              Explore how we create opportunities through our approved education and health initiatives.
            </p>
          </div>

          <div className="program-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {/* Highlight 1: Scholars Program */}
            <div className="program-card reveal-on-scroll reveal-delay-1">
              <div className="program-image">
                <SafeImage
                  src="/assets/images/children-group.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                  alt="Scholars Program"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="program-image-overlay" />
                <span className="program-tag">Education</span>
              </div>
              <div className="program-body">
                <h4>Scholars Program</h4>
                <p className="program-sentence">Ensuring every child has access to basic education.</p>
                <p className="program-desc">
                  Supporting children with tuition, educational costs, extracurriculars, academic monitoring, development sessions, and daily feeding during school hours.
                </p>
                <div className="program-actions">
                  <Link href="/scholars-program" className="btn btn-dark" style={{ flexGrow: 1 }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlight 2: Teachers on the Go */}
            <div className="program-card reveal-on-scroll reveal-delay-2">
              <div className="program-image">
                <SafeImage
                  src="/assets/images/community-outreach.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                  alt="Teachers on the Go"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="program-image-overlay" />
                <span className="program-tag">Education</span>
              </div>
              <div className="program-body">
                <h4>Teachers on the Go</h4>
                <p className="program-sentence">Help us take learning beyond the classroom.</p>
                <p className="program-desc">
                  Giving volunteers and organisations the opportunity to teach children in underserved schools creative, vocational, and essential life skills.
                </p>
                <div className="program-actions">
                  <Link href="/teachers-on-the-go" className="btn btn-dark" style={{ flexGrow: 1 }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlight 3: Back-2-School */}
            <div className="program-card reveal-on-scroll reveal-delay-3">
              <div className="program-image">
                <SafeImage
                  src="/assets/images/children-event.png"
                  fallbackSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
                  alt="Back-2-School Campaign"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="program-image-overlay" />
                <span className="program-tag">Education</span>
              </div>
              <div className="program-body">
                <h4>Back-2-School</h4>
                <p className="program-sentence">Creating a more conducive learning environment.</p>
                <p className="program-desc">
                  Supporting children with school supplies and providing schools with tables, chairs, boards, books, and materials to make learning easier.
                </p>
                <div className="program-actions">
                  <Link href="/back-2-school" className="btn btn-dark" style={{ flexGrow: 1 }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlight 4: Nourish Now */}
            <div className="program-card reveal-on-scroll reveal-delay-4">
              <div className="program-image">
                <SafeImage
                  src="/assets/images/volunteer-community.png"
                  fallbackSrc="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                  alt="Nourish Now Campaign"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="program-image-overlay" />
                <span className="program-tag" style={{ background: '#dcfce7', color: '#166534' }}>
                  Health
                </span>
              </div>
              <div className="program-body">
                <h4>Nourish Now</h4>
                <p className="program-sentence" style={{ color: 'var(--green)' }}>
                  Temporary food relief for children and families.
                </p>
                <p className="program-desc">
                  Providing temporary food relief to children and families through Happy Boxes (December) and Eat &apos;n&apos; Learn for students in schools.
                </p>
                <div className="program-actions">
                  <Link href="/nourish-now" className="btn btn-dark" style={{ flexGrow: 1 }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Multi-Currency Donation Section */}
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
              <Heart size={14} /> Support From Anywhere
            </div>
            <h2>Wherever you are, you can be part of this.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>
              Every donation plays a role in helping us create better opportunities for the children we serve. Give what you can, from wherever you are.
            </p>
            <p style={{ fontSize: 16, fontWeight: 800, color: '#fed7aa', marginTop: 12 }}>
              They’re the reason we exist. You’re the reason this works.
            </p>

            <div style={{ marginTop: 24, padding: 18, background: 'rgba(255,255,255,0.08)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.14)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, color: 'white', fontWeight: 800 }}>
                <Globe size={18} color="#fed7aa" />
                <span>International & Nigerian Supporters Welcome</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                Support easily in <strong>₦ NGN, $ USD, £ GBP, or € EUR</strong>. You can enter any custom amount with your local card or bank transfer.
              </p>
            </div>
          </div>

          <div className="donate-panel">
            <DonationWidget initialFund="General Fund" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" id="gallery" style={{ background: '#fff' }}>
        <div className="container">
          <div className="gallery-head">
            <div>
              <p className="section-kicker">Moments of Joy</p>
              <h2 className="section-title">Photo Gallery & Highlights</h2>
            </div>
            <a
              href="https://www.instagram.com/Happyhandsfoundation_/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Follow on Instagram <ArrowRight size={16} />
            </a>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card tall reveal-on-scroll reveal-delay-1">
              <SafeImage
                src="/assets/images/hero-volunteer.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                alt="Community Volunteer Program"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <small>Outreach Highlight</small>
                <h3>Community Impact Day</h3>
              </div>
            </div>
            <div className="gallery-card reveal-on-scroll reveal-delay-2">
              <SafeImage
                src="/assets/images/children-group.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                alt="Scholars in Classroom"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <small>Education</small>
                <h3>Scholars in Class</h3>
              </div>
            </div>
            <div className="gallery-card reveal-on-scroll reveal-delay-3">
              <SafeImage
                src="/assets/images/children-event.png"
                fallbackSrc="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                alt="Nourish Now Distribution"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <small>Nutrition</small>
                <h3>Nourish Now Food Drive</h3>
              </div>
            </div>
            <div className="gallery-card reveal-on-scroll reveal-delay-4">
              <SafeImage
                src="/assets/images/community-outreach.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
                alt="Back-2-School Kits"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <small>Drive</small>
                <h3>Back-2-School Packets</h3>
              </div>
            </div>
            <div className="gallery-card reveal-on-scroll reveal-delay-5">
              <SafeImage
                src="/assets/images/volunteer-community.png"
                fallbackSrc="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Teachers on the Go Workshop"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="gallery-overlay">
                <small>Skills</small>
                <h3>Teachers on the Go</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Restored exact quotes per brief */}
      <section className="section">
        <div className="container">
          <div className="testimonial-head">
            <div>
              <p className="section-kicker">Testimonials</p>
              <h2 className="section-title">Voices From Our Community</h2>
            </div>
            <p className="section-lede">
              Real reflections from the people who work with and experience Happy Hands.
            </p>
          </div>

          <div className="testimonial-grid">
            <blockquote className="reveal-on-scroll reveal-delay-1">
              <Quote className="quote-icon" />
              <p>
                &quot;It&apos;s been a while since I last saw my daughter this excited. Sometimes, I&apos;d catch Esther
                making mental notes of some things she learnt in school for the day... The scholarship has been all too
                wonderful, and timely as well.&quot;
              </p>
              <footer>
                <div className="avatar">J</div>
                <div>
                  <strong>Mrs. Jacob</strong>
                  <small>Mother of a Scholars beneficiary</small>
                </div>
              </footer>
            </blockquote>

            <blockquote className="reveal-on-scroll reveal-delay-2">
              <Quote className="quote-icon" />
              <p>
                &quot;What isn&apos;t there to love about Happy Hands? I feel fulfilled.&quot;
              </p>
              <footer>
                <div className="avatar">S</div>
                <div>
                  <strong>Shobbs</strong>
                  <small>Staff Member</small>
                </div>
              </footer>
            </blockquote>

            <blockquote className="reveal-on-scroll reveal-delay-3">
              <Quote className="quote-icon" />
              <p>
                &quot;I&apos;ve been given the opportunity to grow into a better version of myself.&quot;
              </p>
              <footer>
                <div className="avatar">T</div>
                <div>
                  <strong>Taiwo Alamu</strong>
                  <small>Volunteer</small>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Volunteer Callout Section */}
      <section className="section" id="volunteer" style={{ background: '#fffaf4' }}>
        <div className="container volunteer-grid">
          <div className="orange-panel">
            <div
              className="orange-bg-img"
              style={{ backgroundImage: "url('/assets/images/volunteer-community.png'), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80')" }}
            />
            <p className="section-kicker" style={{ color: '#ffedd5' }}>
              Volunteer With Us
            </p>
            <h2>Your desire to join us in going the extra mile to nurture the future makes us super duper happy.</h2>
            <p className="section-lede" style={{ color: 'rgba(255,255,255,.95)', fontSize: 16, lineHeight: 1.7 }}>
              Together, we can nurture a future we can be proud of. As a volunteer, you are at the heart of what we do. Your time and contribution help us do more for the children we serve.
            </p>

            <div className="about-actions">
              <Link href="/volunteer" className="btn btn-light">
                Volunteer with us
              </Link>
            </div>
          </div>

          <div className="volunteer-roles">
            <div className="role-card" style={{ marginBottom: 20 }}>
              <div className="role-icon">
                <Laptop size={24} />
              </div>
              <h3>Virtual Roles</h3>
              <ul>
                <li>
                  <CheckCircle2 size={18} /> Media & Graphics Design
                </li>
                <li>
                  <CheckCircle2 size={18} /> Grant & Content Writing
                </li>
                <li>
                  <CheckCircle2 size={18} /> Partnership & Fundraising
                </li>
              </ul>
            </div>
            <div className="role-card">
              <div className="role-icon">
                <Users size={24} />
              </div>
              <h3>Physical & Specialized</h3>
              <ul>
                <li>
                  <CheckCircle2 size={18} /> Mentors & Event Volunteers
                </li>
                <li>
                  <CheckCircle2 size={18} /> Community Outreaches
                </li>
                <li>
                  <CheckCircle2 size={18} /> Medical & Legal Professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Homepage FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={homepageFAQs}
            title="Frequently Asked Questions"
            kicker="Got Questions?"
            description="Quick answers on how to donate, volunteer, and get involved with Happy Hands Foundation."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact" style={{ background: '#fffaf4' }}>
        <div className="container contact-grid">
          <div>
            <p className="section-kicker">Contact Us</p>
            <h2 className="section-title">Ready to partner or ask a question?</h2>
            <p className="section-lede">
              Reach out to us directly through our channels below or send us a quick message.
            </p>

            <div className="contact-cards" style={{ marginTop: 32 }}>
              <div className="contact-card">
                <MapPin size={24} />
                <div>2 Ikotun Road, Igando Bus Stop, Lagos State, Nigeria.</div>
              </div>
              <div className="contact-two">
                <div className="contact-card">
                  <Phone size={24} />
                  <div>
                    <a href="tel:08121353755" style={{ color: 'inherit' }}>08121353755</a>,{' '}
                    <a href="tel:08188795474" style={{ color: 'inherit' }}>08188795474</a>
                  </div>
                </div>
                <div className="contact-card">
                  <Mail size={24} />
                  <div>
                    <a href="mailto:partnerships@happyhandsfoundation.org" style={{ color: 'inherit' }}>partnerships@happyhandsfoundation.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
