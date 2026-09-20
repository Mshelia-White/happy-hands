'use client';

import React from 'react';
import Link from 'next/link';
import { useDonation } from '@/context/DonationContext';
import { BrandLogo } from '@/components/BrandLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { openDonationModal } = useDonation();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Logo lockup & brief */}
          <div style={{ paddingRight: 16 }}>
            <Link href="/" className="brand-lockup" style={{ marginBottom: 16 }}>
              <div className="brand-emblem-wrap">
                <BrandLogo width={40} height={40} />
              </div>
              <div className="brand-meta">
                <span className="brand-name" style={{ color: '#ffffff' }}>Happy Hands</span>
                <span className="brand-subtitle" style={{ color: '#C7BFB1' }}>Community Development Foundation</span>
                <span className="brand-rc" style={{ color: '#8C8274' }}>RC No: 183177</span>
              </div>
            </Link>
            <p style={{ color: '#A39989', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 16px' }}>
              Everything goes to child development. We create a safe space for the African child through inclusive education access, food relief campaigns, and preventive healthcare.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs">Our Programs</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h3 className="footer-heading">Get Involved</h3>
            <ul className="footer-links-list">
              <li>
                <button 
                  type="button" 
                  onClick={() => openDonationModal('General Fund')}
                  style={{ color: '#C7BFB1', textAlign: 'left', padding: 0 }}
                >
                  Support a Child
                </button>
              </li>
              <li><Link href="/scholars-program">Become a Guardian</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/contact?subject=corporate">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links-list">
              <li><Link href="/#faqs">FAQs</Link></li>
              <li><Link href="/impact#reports">Reports & Downloads</Link></li>
              <li><Link href="/contact">Privacy Policy</Link></li>
              <li><Link href="/contact">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Column 5: Stay Connected */}
          <div>
            <h3 className="footer-heading">Stay Connected</h3>
            <div className="footer-social-row">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/Happyhandsfoundation_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @Happyhandsfoundation_"
                className="footer-social-icon"
              >
                <InstagramIcon size={16} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <LinkedinIcon size={16} />
              </a>
              <a 
                href="https://twitter.com/Happyhandsgroup" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="X @Happyhandsgroup"
                className="footer-social-icon"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
            <p style={{ color: '#8C8274', fontSize: 12, marginTop: 12 }}>
              Follow our daily moments of impact on Instagram: <strong>@Happyhandsfoundation_</strong>
            </p>
          </div>

          {/* Column 6: Contact Us */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13, color: '#C7BFB1' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Phone size={15} color="var(--primary-red)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <a href="tel:+2348121353755" style={{ display: 'block' }}>+234 812 135 3755</a>
                  <a href="tel:+2348188795474" style={{ display: 'block' }}>+234 818 879 5474</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Mail size={15} color="var(--primary-red)" style={{ marginTop: 3, flexShrink: 0 }} />
                <div>
                  <a href="mailto:info@happyhandsfoundation.org" style={{ display: 'block' }}>
                    info@happyhandsfoundation.org
                  </a>
                  <a href="mailto:partnerships@happyhandsfoundation.org" style={{ display: 'block', fontSize: 12, color: '#A39989' }}>
                    partnerships@happyhandsfoundation.org
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <MapPin size={15} color="var(--primary-red)" style={{ marginTop: 3, flexShrink: 0 }} />
                <span>2 Ikotun Road, Igando Bus Stop, Lagos State, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>
            © 2026 Happy Hands Community Development Foundation. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#C7BFB1' }}>
            <span>Building brighter tomorrows, together.</span>
            <Heart size={14} color="var(--accent-yellow)" fill="none" />
          </div>
        </div>
      </div>
    </footer>
  );
};
