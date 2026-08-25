'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  Laptop, 
  Users, 
  Stethoscope, 
  Award, 
  Sparkles,
  Clock,
  ShieldCheck,
  Send,
  Check
} from 'lucide-react';
import { FAQAccordion, FAQItem } from '@/components/FAQAccordion';

const volunteerFAQs: FAQItem[] = [
  {
    question: 'Can I volunteer remotely?',
    answer: 'Yes! We have dedicated virtual roles including Media & Graphic Design, Grant Writing, Content Writing, Social Media, and Online Fundraising.',
  },
  {
    question: 'How much time do I need to commit?',
    answer: 'Commitment varies by role. Most virtual roles require 3–5 hours per week, while physical outreach and event roles take place during designated weekend project dates.',
  },
  {
    question: 'Is there an age limit for volunteers?',
    answer: 'Volunteers should generally be at least 16 years old. Anyone with a passion for child development is welcome to apply.',
  },
  {
    question: 'Do I need previous experience to volunteer?',
    answer: 'No prior NGO experience is required for most general and outreach roles! We provide clear onboarding. However, specialized roles (medical, legal, grant writing) may require relevant background.',
  },
  {
    question: 'How will I be contacted after applying?',
    answer: 'Our volunteer coordination team will reach out to you via email or WhatsApp within 3 to 5 business days with details about the next onboarding session.',
  },
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    category: 'Virtual Roles',
    role: 'Media & Graphics Design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <HeartHandshake size={16} color="var(--orange)" /> Join Our Community
          </div>
          <h1>
            Your desire to join us in going the extra mile to nurture the future makes us super duper happy.
          </h1>
          <p>
            Together, we can nurture a future we can be proud of.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section" style={{ paddingTop: '70px' }}>
        <div className="container split-layout">
          <div className="split-content">
            <p className="section-kicker">Volunteer With Happy Hands</p>
            <h2>As a volunteer, you are at the heart of what we do.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#334155' }}>
              Your time, energy and contribution help us do more for the children we serve.
            </p>

            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <CheckCircle2 size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontSize: 15, color: 'var(--slate)' }}>Make a tangible difference:</strong>
                  <p style={{ margin: '2px 0 0', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                    Support programs that bring hope and better opportunities to children and families.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <CheckCircle2 size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontSize: 15, color: 'var(--slate)' }}>Build meaningful connections:</strong>
                  <p style={{ margin: '2px 0 0', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                    Join a community of passionate individuals who share your drive to create change.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <CheckCircle2 size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontSize: 15, color: 'var(--slate)' }}>Grow your skills:</strong>
                  <p style={{ margin: '2px 0 0', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                    Gain hands-on experience in community development, project management, leadership, teamwork and more.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <CheckCircle2 size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontSize: 15, color: 'var(--slate)' }}>Be part of something bigger:</strong>
                  <p style={{ margin: '2px 0 0', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                    Help shape a future where every child has the chance to thrive.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <CheckCircle2 size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontSize: 15, color: 'var(--slate)' }}>Get recognized:</strong>
                  <p style={{ margin: '2px 0 0', fontSize: 14, color: '#475569', lineHeight: 1.5 }}>
                    Outstanding contributions are celebrated, and you will receive recommendations or certificates where applicable.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <a href="#apply" className="btn btn-orange">
                Join us <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Volunteer Roles Card Grid */}
          <div>
            <p className="section-kicker">Volunteer Roles</p>
            <h3 style={{ fontSize: 22, margin: '0 0 20px', fontWeight: 800 }}>Explore How You Can Serve</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Category 1: Virtual Roles */}
              <div className="role-card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div className="role-icon">
                    <Laptop size={20} />
                  </div>
                  <h4 style={{ margin: 0, fontSize: 17 }}>Virtual Roles</h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Media &amp; Graphics Design
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Grant Writing
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Content Writing
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Social Media
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Partnership
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Fundraising
                  </div>
                </div>
              </div>

              {/* Category 2: Physical Roles */}
              <div className="role-card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div className="role-icon">
                    <Users size={20} />
                  </div>
                  <h4 style={{ margin: 0, fontSize: 17 }}>Physical Roles</h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Mentors &amp; Teachers
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Event Volunteers
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Community Outreaches
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Logistics &amp; Distribution
                  </div>
                </div>
              </div>

              {/* Category 3: Specialised Roles */}
              <div className="role-card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div className="role-icon">
                    <Stethoscope size={20} />
                  </div>
                  <h4 style={{ margin: 0, fontSize: 17 }}>Specialised Roles</h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Healthcare Professionals
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Check size={14} color="var(--orange)" /> Legal Professionals
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, gridColumn: '1 / -1' }}>
                    <Check size={14} color="var(--orange)" /> Other fields supporting community development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Requirements & How to Join */}
      <section className="section" style={{ background: '#fffaf4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* Requirements */}
            <div className="white-panel" style={{ padding: 32 }}>
              <p className="section-kicker">Simple Standards</p>
              <h3 style={{ fontSize: 20, margin: '0 0 16px', fontWeight: 800 }}>Volunteer Requirements</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', fontSize: 14, lineHeight: 1.8 }}>
                <li>Willingness to commit time and effort to our cause</li>
                <li>Openness to learn, collaborate and work within a team</li>
                <li>A shared passion for child development and community empowerment</li>
                <li>Specific skills or experience may be required for certain technical or specialized roles</li>
              </ul>
            </div>

            {/* How to Join (3 Steps) */}
            <div className="white-panel" style={{ padding: 32 }}>
              <p className="section-kicker">Simple Process</p>
              <h3 style={{ fontSize: 20, margin: '0 0 16px', fontWeight: 800 }}>How to Join</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--orange-soft)', color: 'var(--orange-dark)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    1
                  </span>
                  <div>
                    <strong style={{ fontSize: 15 }}>Fill out the application form</strong>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>Share your basic background and interests.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--orange-soft)', color: 'var(--orange-dark)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    2
                  </span>
                  <div>
                    <strong style={{ fontSize: 15 }}>Join our onboarding session</strong>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>Get introduced to our programs and safety guidelines.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--orange-soft)', color: 'var(--orange-dark)', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    3
                  </span>
                  <div>
                    <strong style={{ fontSize: 15 }}>Start making an impact</strong>
                    <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>Work directly with our team to nurture children.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form Section */}
      <section className="section" id="apply">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="white-panel" style={{ padding: 40, border: '1px solid var(--line)' }}>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div className="eyebrow" style={{ margin: '0 auto 10px', display: 'inline-flex' }}>
                <Send size={14} color="var(--orange)" /> Application Form
              </div>
              <h2 style={{ margin: '4px 0 8px', fontSize: 26, fontWeight: 900 }}>Join the Happy Hands Team</h2>
              <p style={{ color: 'var(--muted)', fontSize: 15, margin: 0 }}>
                Please fill in your details below and we&apos;ll be in touch soon.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-bg)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 8px' }}>Application Submitted!</h3>
                <p style={{ color: '#475569', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
                  Thank you for applying to volunteer with Happy Hands Foundation. We have received your details and will contact you via email or WhatsApp within 3 to 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jane Doe"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="jane@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="0812 345 6789"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>City / Location *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Lagos, Abuja, London"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>Category *</label>
                    <select
                      className="form-control"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Virtual Roles">Virtual Roles</option>
                      <option value="Physical Roles">Physical Roles</option>
                      <option value="Specialised Roles">Specialised Roles</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>Preferred Role *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Graphic Design, Mentor, Medical"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>Why would you like to volunteer with Happy Hands? *</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Tell us a little about yourself and your motivation..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-orange" style={{ width: '100%', padding: '14px', fontSize: 16 }}>
                  Submit Volunteer Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Volunteer FAQs */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <FAQAccordion
            items={volunteerFAQs}
            title="Volunteer FAQs"
            kicker="Helpful Information"
            description="Answers to common questions about remote volunteering, time requirements, and onboarding."
          />
        </div>
      </section>
    </>
  );
}
