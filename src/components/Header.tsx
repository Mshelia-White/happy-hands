'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useDonation } from '@/context/DonationContext';
import logoImg from '@/assets/logo.png';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isProgramsActive = 
    pathname === '/programs' ||
    pathname === '/scholars-program' ||
    pathname === '/teachers-on-the-go' ||
    pathname === '/back-2-school' ||
    pathname === '/nourish-now' ||
    pathname === '/fittot';

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Happy Hands Foundation Home">
          <div className="brand-mark">
            <Image
              src={logoImg}
              alt="Happy Hands Logo"
              width={44}
              height={44}
              priority
            />
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link href="/programs" className={pathname === '/programs' ? 'active' : ''}>
          Our Programs
        </Link>
        <div style={{ paddingLeft: 12, display: 'flex', flexDirection: 'column', gap: 6, margin: '-6px 0 10px' }}>
          <Link href="/scholars-program" style={{ fontSize: 15, color: '#64748b', borderBottom: 'none' }}>
            • Scholars Program
          </Link>
          <Link href="/teachers-on-the-go" style={{ fontSize: 15, color: '#64748b', borderBottom: 'none' }}>
            • Teachers on the Go
          </Link>
          <Link href="/back-2-school" style={{ fontSize: 15, color: '#64748b', borderBottom: 'none' }}>
            • Back-2-School
          </Link>
          <Link href="/nourish-now" style={{ fontSize: 15, color: '#64748b', borderBottom: 'none' }}>
            • Nourish Now
          </Link>
          <Link href="/fittot" style={{ fontSize: 15, color: '#64748b', borderBottom: 'none' }}>
            • FitTot
          </Link>
        </div>
        <Link href="/#gallery">Gallery</Link>
        <Link href="/volunteer" className={pathname === '/volunteer' ? 'active' : ''}>
          Volunteer
        </Link>
        <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>

        <div className="mobile-actions">
          <Link href="/volunteer" className="btn btn-light">
            Volunteer with us
          </Link>
          <button
            type="button"
            className="btn btn-orange"
            onClick={() => {
              setMobileMenuOpen(false);
              openDonationModal('General Fund');
            }}
          >
            Donate now
          </button>
        </div>
      </div>
    </header>
  );
};
