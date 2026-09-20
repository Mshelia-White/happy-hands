'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons';
import { ContactForm } from '@/components/ContactForm';
import { CtaBanner } from '@/components/CtaBanner';

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section" aria-label="Contact Happy Hands">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: 760, margin: '0 auto 36px' }}>
            <span className="section-title-red">We Love to Hear From You</span>
            <h1 style={{ margin: '8px 0 16px' }}>Get in Touch With Happy Hands</h1>
            <p className="hero-subtitle" style={{ fontSize: 18 }}>
              Whether you want to partner on a CSR project, sponsor a scholar, donate supplies, or volunteer, our door is always open.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-bg-light" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, alignItems: 'start' }}>
            {/* Contact Details Left */}
            <div>
              <div style={{ display: 'grid', gap: 16 }}>
                {/* Address Card */}
                <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: '24px', display: 'flex', gap: 16, boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: 16, margin: '0 0 4px' }}>Visit Our Office</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.5, margin: 0 }}>
                      2 Ikotun Road, Igando Bus Stop, Lagos State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: '24px', display: 'flex', gap: 16, boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: 16, margin: '0 0 4px' }}>Direct Phone Lines</h2>
                    <div style={{ display: 'flex', gap: 14, fontSize: 14, marginTop: 4 }}>
                      <a href="tel:08121353755" style={{ color: 'var(--dark-neutral)', fontWeight: 700 }}>
                        08121353755
                      </a>
                      <span style={{ color: 'var(--border-warm-dark)' }}>·</span>
                      <a href="tel:08188795474" style={{ color: 'var(--dark-neutral)', fontWeight: 700 }}>
                        08188795474
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: '24px', display: 'flex', gap: 16, boxShadow: 'var(--shadow-card)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: 16, margin: '0 0 6px' }}>Direct Email Desks</h2>
                    <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <div>
                        <strong>Partnerships: </strong>
                        <a href="mailto:partnerships@happyhandsfoundation.org" style={{ color: 'var(--primary-red)', fontWeight: 700 }}>
                          partnerships@happyhandsfoundation.org
                        </a>
                      </div>
                      <div>
                        <strong>Projects & Volunteers: </strong>
                        <a href="mailto:projects@happyhandsfoundation.org" style={{ color: 'var(--primary-red)', fontWeight: 700 }}>
                          projects@happyhandsfoundation.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAC Verification & Socials */}
              <div style={{ background: '#ffffff', borderRadius: 14, border: '1px solid var(--border-warm)', padding: 24, marginTop: 20, boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <ShieldCheck size={20} color="var(--primary-green)" />
                  <strong style={{ fontSize: 14, color: 'var(--dark-neutral)' }}>CAC Registration: RC 183177</strong>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 16px', lineHeight: 1.5 }}>
                  Happy Hands Community Development Foundation is a fully certified non-profit organization registered in Nigeria.
                </p>

                <div style={{ borderTop: '1px solid var(--border-warm)', paddingTop: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-light)', display: 'block', marginBottom: 12 }}>
                    Follow our journey online
                  </span>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a
                      href="https://www.instagram.com/Happyhandsfoundation_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-tertiary"
                      style={{ fontSize: 12.5, padding: '8px 14px' }}
                    >
                      <InstagramIcon size={16} /> @Happyhandsfoundation_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Right */}
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 32, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 20, margin: '0 0 6px' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>
                  Fill out the form below and our team will get back to you within 24–48 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </main>
  );
}
