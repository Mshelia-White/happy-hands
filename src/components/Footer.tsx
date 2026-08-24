'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { openDonationModal } = useDonation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/assets/logo.png"
              alt="Happy Hands Logo"
              width={60}
              height={60}
              style={{ objectFit: 'contain', marginBottom: 16 }}
            />
            <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 900 }}>
              Happy Hands Foundation
            </h3>
            <p>
              Everything goes to child development. Creating a safe space for the African child with
              opportunities for inclusive growth and development since 2020.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/Happyhandsfoundation_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/programs">Our Programs</Link>
              </li>
              <li>
                <Link href="/scholars-program">Scholars Program</Link>
              </li>
              <li>
                <Link href="/nourish-now">Nourish Now</Link>
              </li>
              <li>
                <Link href="/#gallery">Photo Gallery</Link>
              </li>
              <li>
                <Link href="/volunteer">Volunteer Opportunities</Link>
              </li>
              <li>
                <button
                  onClick={() => openDonationModal('General Fund')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--orange)',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 14,
                  }}
                >
                  <Heart size={14} /> Donate Now
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="mailto:info@happyhandsfoundation.org"
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <Mail size={16} color="var(--orange)" /> info@happyhandsfoundation.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348188745474"
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <Phone size={16} color="var(--orange)" /> +234 8188 745 474
                </a>
              </li>
              <li
                style={{
                  color: '#64748b',
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 8,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 8,
                  lineHeight: 1.5,
                }}
              >
                <MapPin size={18} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>2 Ikotun Road, Igando Bus Stop, Lagos State, Nigeria.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Happy Hands Foundation. All rights reserved.</span>
          <span>Designed with purpose for the African child.</span>
        </div>
      </div>
    </footer>
  );
};
