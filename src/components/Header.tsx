'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDonation } from '@/context/DonationContext';
import { BrandLogo } from '@/components/BrandLogo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Heart,
  GraduationCap,
  Sparkles,
  Utensils,
  BookOpen,
  Apple
} from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openDonationModal } = useDonation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isProgramsActive = 
    pathname === '/programs' ||
    pathname === '/scholars-program' ||
    pathname === '/teachers-on-the-go' ||
    pathname === '/back-2-school' ||
    pathname === '/nourish-now' ||
    pathname === '/fittot';

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header-inner">
          {/* Logo Lockup (Master Visual Direction) */}
          <Link href="/" className="brand-lockup" aria-label="Happy Hands Foundation Home">
            <div className="brand-emblem-wrap">
              <BrandLogo width={42} height={42} priority />
            </div>
            <div className="brand-meta">
              <span className="brand-name">Happy Hands</span>
              <span className="brand-subtitle">Community Development Foundation</span>
              <span className="brand-rc">RC No: 183177</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            <Link 
              href="/" 
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>

            {/* Programs Dropdown */}
            <div className="nav-dropdown-item">
              <Link 
                href="/programs" 
                className={`nav-link ${isProgramsActive ? 'active' : ''}`}
              >
                Our Programs <ChevronDown size={14} />
              </Link>

              <div className="nav-dropdown-menu">
                <div className="dropdown-group-title">Education</div>
                <Link href="/scholars-program" className="dropdown-sublink">
                  <span>Scholars Program</span>
                </Link>
                <Link href="/teachers-on-the-go" className="dropdown-sublink">
                  <span>Teachers on the Go</span>
                </Link>
                <Link href="/back-2-school" className="dropdown-sublink">
                  <span>Back-2-School</span>
                </Link>

                <div className="dropdown-divider" />

                <div className="dropdown-group-title">Health & Nutrition</div>
                <Link href="/nourish-now" className="dropdown-sublink">
                  <span>Nourish Now</span>
                </Link>
                <Link href="/fittot" className="dropdown-sublink">
                  <span>FitTot</span>
                  <span className="dropdown-tag-coming">Coming Soon</span>
                </Link>

                <div className="dropdown-divider" />

                <Link href="/programs" className="dropdown-view-all">
                  View all programs ›
                </Link>
              </div>
            </div>

            <Link 
              href="/get-involved" 
              className={`nav-link ${pathname === '/get-involved' || pathname === '/volunteer' ? 'active' : ''}`}
            >
              Get Involved
            </Link>

            <Link 
              href="/impact" 
              className={`nav-link ${pathname.startsWith('/impact') ? 'active' : ''}`}
            >
              Impact
            </Link>

            <Link 
              href="/news" 
              className={`nav-link ${pathname === '/news' ? 'active' : ''}`}
            >
              News
            </Link>

            <Link 
              href="/contact" 
              className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => openDonationModal('General Fund')}
              aria-label="Donate Now"
            >
              Donate Now ♡
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel (Board 08 Mobile Open) */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Navigation Menu">
          <div className="mobile-nav-head">
            <Link href="/" className="brand-lockup" onClick={() => setMobileMenuOpen(false)}>
              <div className="brand-emblem-wrap">
                <BrandLogo width={36} height={36} />
              </div>
              <div className="brand-meta">
                <span className="brand-name" style={{ fontSize: 16 }}>Happy Hands</span>
                <span className="brand-subtitle" style={{ fontSize: 9 }}>Community Development Foundation</span>
                <span className="brand-rc" style={{ fontSize: 8 }}>RC No: 183177</span>
              </div>
            </Link>
            <button 
              type="button" 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Mobile Menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-list">
            <Link 
              href="/" 
              className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div>
              <Link 
                href="/programs" 
                className={`mobile-nav-link ${isProgramsActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Programs
              </Link>
              <div className="mobile-nav-subgroup">
                <Link href="/scholars-program" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  • Scholars Program
                </Link>
                <Link href="/teachers-on-the-go" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  • Teachers on the Go
                </Link>
                <Link href="/back-2-school" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  • Back-2-School
                </Link>
                <Link href="/nourish-now" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  • Nourish Now
                </Link>
                <Link href="/fittot" className="mobile-nav-sublink" onClick={() => setMobileMenuOpen(false)}>
                  • FitTot (Coming Soon)
                </Link>
              </div>
            </div>

            <Link 
              href="/get-involved" 
              className={`mobile-nav-link ${pathname === '/get-involved' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>

            <Link 
              href="/impact" 
              className={`mobile-nav-link ${pathname.startsWith('/impact') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </Link>

            <Link 
              href="/news" 
              className={`mobile-nav-link ${pathname === '/news' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>

            <Link 
              href="/contact" 
              className={`mobile-nav-link ${pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="mobile-nav-footer">
            <button 
              type="button" 
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px' }}
              onClick={() => {
                setMobileMenuOpen(false);
                openDonationModal('General Fund');
              }}
            >
              Donate Now ♡
            </button>
            <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-light)', margin: 0 }}>
              Building brighter tomorrows, together.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
