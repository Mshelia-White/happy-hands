'use client';

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow">
            <Mail size={16} color="var(--orange)" /> Get in Touch
          </div>
          <h1>Ready to partner or ask a question?</h1>
          <p>
            Whether you want to give, volunteer, partner with our initiatives, or just say hello, we are here and ready
            to listen. Reach out to us through any of our direct channels.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container contact-grid" style={{ alignItems: 'start' }}>
          <div>
            <div className="contact-cards">
              <div className="contact-card" style={{ marginBottom: 16 }}>
                <MapPin size={24} />
                <div>
                  <strong>Visit Us</strong>
                  <br />
                  2 Ikotun Road, Igando Bus Stop, Lagos State, Nigeria.
                </div>
              </div>

              <div className="contact-card" style={{ marginBottom: 16 }}>
                <Phone size={24} />
                <div>
                  <strong>Call Us</strong>
                  <br />
                  <a href="tel:08121353755" style={{ color: 'inherit', display: 'inline-block', marginRight: 12 }}>
                    08121353755
                  </a>
                  <a href="tel:08188795474" style={{ color: 'inherit' }}>
                    08188795474
                  </a>
                </div>
              </div>

              <div className="contact-card" style={{ marginBottom: 16 }}>
                <Mail size={24} />
                <div>
                  <strong>Email Us</strong>
                  <br />
                  <div style={{ marginTop: 4 }}>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>For Partnerships: </span>
                    <a href="mailto:partnerships@happyhandsfoundation.org" style={{ color: 'inherit', fontWeight: 700 }}>
                      partnerships@happyhandsfoundation.org
                    </a>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>For Projects: </span>
                    <a href="mailto:projects@happyhandsfoundation.org" style={{ color: 'inherit', fontWeight: 700 }}>
                      projects@happyhandsfoundation.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="white-panel" style={{ marginTop: 32, padding: 32 }}>
              <h3 style={{ margin: 0, fontSize: 20 }}>Follow us online</h3>
              <p style={{ marginTop: 8, color: 'var(--muted)', fontSize: 14 }}>
                Stay updated on our latest community outreaches, campaigns, and impact stories.
              </p>
              <div className="social-links" style={{ marginTop: 20 }}>
                <a href="#" aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/Happyhandsfoundation_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
                <a href="#" aria-label="Twitter">
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
