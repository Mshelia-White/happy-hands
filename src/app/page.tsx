'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { StatsCounter } from '@/components/StatsCounter';
import { DonationWidget } from '@/components/DonationWidget';
import { ContactForm } from '@/components/ContactForm';
import { SafeImage } from '@/components/SafeImage';
import { 
  Sparkles, 
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
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';

export default function HomePage() {
  const { openDonationModal } = useDonation();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">
              <Sparkles size={16} color="var(--orange)" />
              Everything goes to child development
            </div>
            <h1>
              Creating a safe space for the <span>African child.</span>
            </h1>
            <p className="section-lede">
              Happy Hands Foundation is dedicated to child development through education access,
              preventive health initiatives, and community relief across underserved areas.
            </p>
            <div className="hero-actions">
              <Link href="/programs" className="btn btn-dark">
                Explore our programs <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                className="btn btn-orange"
                onClick={() => openDonationModal('General Fund')}
              >
                <Heart size={16} fill="white" /> Sponsor a child
              </button>
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
              <small>Real Impact</small>
              <p>Over 500 children brought into learning classrooms.</p>
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
            <h2>We care about the child, you care about the future.</h2>
            <p className="section-lede" style={{ color: 'rgba(255,255,255,.9)' }}>
              Happy Hands Foundation (HHF) is an NGO created to champion the rights and welfare of
              children, especially those in underprivileged communities across Nigeria and Africa.
            </p>

            <div className="quote-box">
              <strong>“A safe space with opportunities for inclusive growth.”</strong>
              <small>Our foundational pledge to every child since inception.</small>
            </div>

            <div className="about-actions">
              <Link href="/about" className="btn btn-light">
                Read our story
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
            <p>
              We design sustainable, community-rooted programs around two core pillars: <strong>Education</strong> and{' '}
              <strong>Health</strong>. Every initiative is built to break generational barriers through quality tutoring,
              relieving hunger, providing school supplies, and protecting physical well-being.
            </p>

            <div className="mission-grid">
              <div className="mission-card">
                <Target size={24} />
                <h3>Our Mission</h3>
                <p>
                  To cultivate a nurturing environment for children through holistic education, nutrition, and
                  preventive health care.
                </p>
              </div>
              <div className="mission-card alt">
                <Eye size={24} />
                <h3>Our Vision</h3>
                <p>
                  An Africa where every child, irrespective of background, has the fundamental resources to dream,
                  learn, and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="section" id="programs" style={{ background: '#fffaf4' }}>
        <div className="container">
          <div className="program-intro">
            <div>
              <p className="section-kicker">Our Programs</p>
              <h2 className="section-title">Designed for real transformation.</h2>
            </div>
            <p className="section-lede">
              Explore how we create sustainable change through hands-on education programs and vital healthcare
              interventions.
            </p>
          </div>

          {/* Education Pillar */}
          <div className="pillar-block pillar-education">
            <div className="pillar-head">
              <div className="pillar-title">
                <div className="pillar-icon">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <small>Pillar One</small>
                  <h3>Education Programs</h3>
                </div>
              </div>
              <Link href="/programs" className="btn btn-dark">
                View Education Hub
              </Link>
            </div>

            <div className="program-grid">
              {/* Scholars Program */}
              <div className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/children-group.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                    alt="Scholars Program"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <span className="program-tag">Flagship</span>
                </div>
                <div className="program-body">
                  <h4>Scholars Program</h4>
                  <p className="program-sentence">Full basic education scholarship & academic tracking</p>
                  <p className="program-desc">
                    A comprehensive scholarship initiative covering tuition, books, uniforms, and regular academic
                    assessments for vulnerable children.
                  </p>
                  <div className="program-actions">
                    <Link href="/scholars-program" className="btn btn-dark" style={{ flexGrow: 1 }}>
                      Learn more
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => openDonationModal('Scholars Program')}
                    >
                      Sponsor
                    </button>
                  </div>
                </div>
              </div>

              {/* Teachers on the Go */}
              <div className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/community-outreach.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                    alt="Teachers on the Go"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <span className="program-tag">Community</span>
                </div>
                <div className="program-body">
                  <h4>Teachers on the Go</h4>
                  <p className="program-sentence">Bringing literacy & skill-building beyond standard classrooms</p>
                  <p className="program-desc">
                    Mobilizing volunteer educators into communities with remedial reading clinics, digital literacy, and
                    practical vocational workshops.
                  </p>
                  <div className="program-actions">
                    <Link href="/teachers-on-the-go" className="btn btn-dark" style={{ flexGrow: 1 }}>
                      Learn more
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => openDonationModal('Teachers on the Go')}
                    >
                      Support
                    </button>
                  </div>
                </div>
              </div>

              {/* Back-2-School */}
              <div className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/children-event.png"
                    fallbackSrc="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80"
                    alt="Back-2-School Campaign"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <span className="program-tag">Annual Drive</span>
                </div>
                <div className="program-body">
                  <h4>Back-2-School</h4>
                  <p className="program-sentence">Equipping students with essentials for the academic year</p>
                  <p className="program-desc">
                    Distributing school bags, exercise books, writing materials, mathematical sets, and shoes to keep
                    children inspired in school.
                  </p>
                  <div className="program-actions">
                    <Link href="/back-2-school" className="btn btn-dark" style={{ flexGrow: 1 }}>
                      Learn more
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => openDonationModal('Back-2-School')}
                    >
                      Donate Kits
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Pillar */}
          <div className="pillar-block pillar-health">
            <div className="pillar-head">
              <div className="pillar-title">
                <div className="pillar-icon">
                  <HeartPulse size={28} />
                </div>
                <div>
                  <small>Pillar Two</small>
                  <h3 style={{ color: 'white' }}>Health Programs</h3>
                </div>
              </div>
              <Link href="/programs" className="btn btn-orange">
                View Health Hub
              </Link>
            </div>

            <div className="program-grid two">
              {/* Nourish Now */}
              <div className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/volunteer-community.png"
                    fallbackSrc="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80"
                    alt="Nourish Now Campaign"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <span className="program-tag" style={{ background: '#fef08a', color: '#854d0e' }}>
                    Nutrition
                  </span>
                </div>
                <div className="program-body">
                  <h4>Nourish Now</h4>
                  <p className="program-sentence">Targeted food relief & nutrition outreach campaigns</p>
                  <p className="program-desc">
                    Combating child hunger with Happy Boxes, school hot meal drives (Eat &apos;n&apos; Learn), and community food
                    banks for vulnerable families.
                  </p>
                  <div className="program-actions">
                    <Link href="/nourish-now" className="btn btn-dark" style={{ flexGrow: 1 }}>
                      Learn more
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => openDonationModal('Nourish Now')}
                    >
                      Fund Meals
                    </button>
                  </div>
                </div>
              </div>

              {/* FitTot */}
              <div className="program-card">
                <div className="program-image">
                  <SafeImage
                    src="/assets/images/hero-volunteer.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
                    alt="FitTot Healthcare"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="program-image-overlay" />
                  <span className="program-tag">Healthcare</span>
                </div>
                <div className="program-body">
                  <h4>FitTot</h4>
                  <p className="program-sentence">Pediatric healthcare screenings, HMO plans & hygiene</p>
                  <p className="program-desc">
                    Partnering with health organizations and HMOs to provide routine medical checkups, immunizations, and
                    emergency medical relief.
                  </p>
                  <div className="program-actions">
                    <Link href="/fittot" className="btn btn-dark" style={{ flexGrow: 1 }}>
                      Learn more
                    </Link>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => openDonationModal('FitTot')}
                    >
                      Partner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section" id="donate">
        <div className="container donate-wrap">
          <div className="donate-copy">
            <p className="section-kicker" style={{ color: '#fdba74' }}>
              Make A Difference
            </p>
            <h2>Your generosity transforms young lives.</h2>
            <p>
              When you give to Happy Hands, you directly fund school fees, hot balanced meals, learning supplies, and
              medical care for children in urgent need.
            </p>

            <div className="payment-cards">
              <div className="payment-card">
                <GraduationCap size={24} />
                <h3>₦10,000 / month</h3>
                <p>Funds complete school books and exam fees for one scholar child.</p>
              </div>
              <div className="payment-card">
                <Utensils size={24} />
                <h3>₦25,000 one-time</h3>
                <p>Feeds a family in our Nourish Now emergency food relief drive.</p>
              </div>
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
            <div className="gallery-card tall">
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
            <div className="gallery-card">
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
            <div className="gallery-card">
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
            <div className="gallery-card">
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
            <div className="gallery-card">
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

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="testimonial-head">
            <div>
              <p className="section-kicker">Testimonials</p>
              <h2 className="section-title">Stories from the people this work touches.</h2>
            </div>
            <p className="section-lede">
              Voices from parents, staff, and volunteers making the impact feel real, authentic, and human.
            </p>
          </div>

          <div className="testimonial-grid">
            <blockquote>
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

            <blockquote>
              <Quote className="quote-icon" />
              <p>
                &quot;What isn&apos;t there to love about Happy Hands? I feel fulfilled knowing that the little effort we
                put in translates to big smiles on the faces of these children.&quot;
              </p>
              <footer>
                <div className="avatar">S</div>
                <div>
                  <strong>Shobbs</strong>
                  <small>Staff Member</small>
                </div>
              </footer>
            </blockquote>

            <blockquote>
              <Quote className="quote-icon" />
              <p>
                &quot;I&apos;ve been given the opportunity to grow into a better version of myself. Volunteering here is
                more than just giving; it&apos;s also receiving immense joy and purpose.&quot;
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
            <h2>Join us in nurturing the future!</h2>
            <p className="section-lede" style={{ color: 'rgba(255,255,255,.9)' }}>
              Your desire to go the extra mile makes us super happy. Your time and input help us do more for the
              children while giving you the opportunity to make a difference.
            </p>

            <div className="quote-box">
              <strong>Volunteer Benefit</strong>
              <small>
                Eligible volunteers receive a community service certificate or reference letter after 6-10 months of
                proven contribution.
              </small>
            </div>

            <div className="about-actions">
              <Link href="/volunteer" className="btn btn-light">
                Apply now
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

      {/* Contact Section */}
      <section className="section" id="contact" style={{ background: '#ffffff' }}>
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
                  <div>+234 8188 745 474</div>
                </div>
                <div className="contact-card">
                  <Mail size={24} />
                  <div>info@happyhandsfoundation.org</div>
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
