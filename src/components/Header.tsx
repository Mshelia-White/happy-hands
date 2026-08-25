'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDonation } from '@/context/DonationContext';
import { BrandLogo } from '@/components/BrandLogo';
import { 
  ChevronDown, 
  GraduationCap, 
  BusFront, 
  Backpack, 
  Utensils, 
  HeartPulse, 
  Heart,
  Menu,
  X
} from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openDonationModal } = useDonation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isProgramsActive = 
    pathname === '/programs' ||
    pathname === '/scholars-program' ||
    pathname === '/teachers-on-the-go' ||
    pathname === '/back-2-school' ||
    pathname === '/nourish-now' ||
    pathname === '/fittot';

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Happy Hands Foundation Home" onClick={closeMenu}>
          <div className="brand-mark">
            <BrandLogo width={44} height={44} priority />
          </div>
          <div>
            <p className="brand-name">Happy Hands</p>
            <p className="brand-sub">Foundation</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>

          {/* Programs Dropdown */}
          <div className="nav-item has-dropdown">
            <span style={{ color: isProgramsActive ? 'var(--orange)' : 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
              Programs <ChevronDown size={14} />
            </span>
            <div className="dropdown-menu">
              <div className="dropdown-col">
                <h4>Education Programs</h4>
                <Link href="/scholars-program" className="dropdown-link">
                  <GraduationCap size={20} />
                  <div className="dropdown-link-text">
                    <strong>Scholars Program</strong>
                    <span>Basic education access</span>
                  </div>
                </Link>
                <Link href="/teachers-on-the-go" className="dropdown-link">
                  <BusFront size={20} />
                  <div className="dropdown-link-text">
                    <strong>Teachers on the Go</strong>
                    <span>Beyond classroom learning</span>
                  </div>
                </Link>
                <Link href="/back-2-school" className="dropdown-link">
                  <Backpack size={20} />
                  <div className="dropdown-link-text">
                    <strong>Back-2-School</strong>
                    <span>School supplies support</span>
                  </div>
                </Link>
              </div>
              <div className="dropdown-col">
                <h4>Health Programs</h4>
                <Link href="/nourish-now" className="dropdown-link">
                  <Utensils size={20} />
                  <div className="dropdown-link-text">
                    <strong>Nourish Now</strong>
                    <span>Food relief campaigns</span>
                  </div>
                </Link>
                <Link href="/fittot" className="dropdown-link">
                  <HeartPulse size={20} />
                  <div className="dropdown-link-text">
                    <strong>FitTot</strong>
                    <span>Quality healthcare access</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/programs" className={pathname === '/programs' ? 'active' : ''}>
            All Initiatives
          </Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/volunteer" className={pathname === '/volunteer' ? 'active' : ''}>
            Volunteer
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </nav>

        <div className="nav-actions">
          <Link href="/volunteer" className="btn btn-ghost" style={{ color: 'var(--slate)' }}>
            Sign up
          </Link>
          <button
            type="button"
            className="btn btn-orange"
            onClick={() => openDonationModal('General Fund')}
          >
            <Heart size={16} fill="white" /> Donate now
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="menu-btn"
          id="menuToggle"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu} 
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside 
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} 
        id="mobileMenu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-header">
          <Link href="/" className="brand" onClick={closeMenu}>
            <div className="brand-mark">
              <BrandLogo width={36} height={36} priority />
            </div>
            <div>
              <p className="brand-name" style={{ fontSize: 17 }}>Happy Hands</p>
              <p className="brand-sub" style={{ fontSize: 9 }}>Foundation</p>
            </div>
          </Link>
          <button 
            type="button"
            className="mobile-close-btn"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-list" aria-label="Mobile navigation">
          <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMenu}>
            About
          </Link>
          
          <div className="mobile-nav-group">
            <Link 
              href="/programs" 
              className={isProgramsActive ? 'active' : ''} 
              onClick={closeMenu}
            >
              Our Programs
            </Link>
            <div className="mobile-sublinks">
              <Link href="/scholars-program" onClick={closeMenu}>
                • Scholars Program
              </Link>
              <Link href="/teachers-on-the-go" onClick={closeMenu}>
                • Teachers on the Go
              </Link>
              <Link href="/back-2-school" onClick={closeMenu}>
                • Back-2-School
              </Link>
              <Link href="/nourish-now" onClick={closeMenu}>
                • Nourish Now
              </Link>
              <Link href="/fittot" onClick={closeMenu}>
                • FitTot
              </Link>
            </div>
          </div>

          <Link href="/#gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <Link href="/volunteer" className={pathname === '/volunteer' ? 'active' : ''} onClick={closeMenu}>
            Volunteer
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="mobile-actions">
          <Link href="/volunteer" className="btn btn-light" onClick={closeMenu}>
            Volunteer with us
          </Link>
          <button
            type="button"
            className="btn btn-orange"
            onClick={() => {
              closeMenu();
              openDonationModal('General Fund');
            }}
          >
            <Heart size={16} fill="white" /> Donate now
          </button>
        </div>
      </aside>
    </header>
  );
};
