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
  X,
  LayoutGrid,
  ArrowRight
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
    <div className={`site-header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <header className="glass-header-capsule" aria-label="Main Navigation">
        {/* Subtle Specular Glow Rim */}
        <div className="glass-specular-highlight" aria-hidden="true" />

        <div className="glass-nav-inner">
          {/* Brand Mark */}
          <Link href="/" className="glass-brand" aria-label="Happy Hands Foundation Home" onClick={closeMenu}>
            <div className="glass-brand-emblem">
              <BrandLogo width={36} height={36} priority />
            </div>
            <div className="glass-brand-text">
              <span className="glass-brand-title">Happy Hands</span>
              <span className="glass-brand-tag">Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="glass-nav-links" aria-label="Primary navigation">
            <Link 
              href="/" 
              className={`glass-nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`glass-nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>

            {/* Programs Dropdown */}
            <div className="glass-nav-item has-dropdown">
              <button 
                type="button" 
                className={`glass-nav-link dropdown-trigger ${isProgramsActive ? 'active' : ''}`}
                aria-expanded="false"
              >
                <span>Programs</span>
                <ChevronDown size={13} className="dropdown-chevron" />
              </button>
              
              <div className="glass-dropdown-panel" role="region" aria-label="Programs submenu">
                <div className="glass-dropdown-specular" aria-hidden="true" />
                <div className="glass-dropdown-grid">
                  <div className="glass-dropdown-col">
                    <span className="glass-dropdown-heading">Education Initiatives</span>
                    <Link href="/scholars-program" className="glass-dropdown-item" onClick={closeMenu}>
                      <div className="glass-item-icon">
                        <GraduationCap size={18} />
                      </div>
                      <div className="glass-item-text">
                        <strong>Scholars Program</strong>
                        <span>Tuition & school support</span>
                      </div>
                    </Link>
                    <Link href="/teachers-on-the-go" className="glass-dropdown-item" onClick={closeMenu}>
                      <div className="glass-item-icon">
                        <BusFront size={18} />
                      </div>
                      <div className="glass-item-text">
                        <strong>Teachers on the Go</strong>
                        <span>Mobile life-skills tutoring</span>
                      </div>
                    </Link>
                    <Link href="/back-2-school" className="glass-dropdown-item" onClick={closeMenu}>
                      <div className="glass-item-icon">
                        <Backpack size={18} />
                      </div>
                      <div className="glass-item-text">
                        <strong>Back-2-School</strong>
                        <span>Kits & classroom supplies</span>
                      </div>
                    </Link>
                  </div>

                  <div className="glass-dropdown-col">
                    <span className="glass-dropdown-heading">Health & Nutrition</span>
                    <Link href="/nourish-now" className="glass-dropdown-item" onClick={closeMenu}>
                      <div className="glass-item-icon">
                        <Utensils size={18} />
                      </div>
                      <div className="glass-item-text">
                        <strong>Nourish Now</strong>
                        <span>Hunger & food parcel relief</span>
                      </div>
                    </Link>
                    <Link href="/fittot" className="glass-dropdown-item" onClick={closeMenu}>
                      <div className="glass-item-icon">
                        <HeartPulse size={18} />
                      </div>
                      <div className="glass-item-text">
                        <strong>FitTot</strong>
                        <span>Pediatric health screenings</span>
                      </div>
                    </Link>
                    <Link href="/programs" className="glass-dropdown-item glass-dropdown-item-all" onClick={closeMenu}>
                      <div className="glass-item-icon">
                        <LayoutGrid size={18} />
                      </div>
                      <div className="glass-item-text">
                        <strong>All Programs</strong>
                        <span>Explore full impact portfolio</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/#gallery" 
              className="glass-nav-link"
            >
              Gallery
            </Link>
            <Link 
              href="/volunteer" 
              className={`glass-nav-link ${pathname === '/volunteer' ? 'active' : ''}`}
            >
              Volunteer
            </Link>
            <Link 
              href="/contact" 
              className={`glass-nav-link ${pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons (Frosted Segmented Capsule Style) */}
          <div className="glass-actions-cluster">
            <Link 
              href="/volunteer" 
              className="glass-btn-secondary"
            >
              Sign Up
            </Link>
            <button
              type="button"
              className="glass-btn-primary"
              onClick={() => openDonationModal('General Fund')}
            >
              <Heart size={14} fill="currentColor" />
              <span>Donate</span>
            </button>
          </div>

          {/* Sleek Mobile Menu Button */}
          <button
            type="button"
            className="glass-mobile-toggle"
            id="menuToggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div 
        className={`glass-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu} 
        aria-hidden="true"
      />

      {/* Mobile Floating Glass Sheet */}
      <aside 
        className={`glass-mobile-sheet ${mobileMenuOpen ? 'open' : ''}`} 
        id="mobileMenu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="glass-sheet-specular" aria-hidden="true" />
        
        <div className="glass-sheet-header">
          <Link href="/" className="glass-brand" onClick={closeMenu}>
            <div className="glass-brand-emblem" style={{ width: 34, height: 34 }}>
              <BrandLogo width={30} height={30} priority />
            </div>
            <div className="glass-brand-text">
              <span className="glass-brand-title" style={{ fontSize: 16 }}>Happy Hands</span>
              <span className="glass-brand-tag" style={{ fontSize: 8 }}>Foundation</span>
            </div>
          </Link>
          <button 
            type="button"
            className="glass-sheet-close"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="glass-sheet-nav" aria-label="Mobile navigation">
          <Link 
            href="/" 
            className={`glass-sheet-link ${pathname === '/' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <span>Home</span>
          </Link>
          <Link 
            href="/about" 
            className={`glass-sheet-link ${pathname === '/about' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <span>About Us</span>
          </Link>
          
          <div className="glass-sheet-group">
            <div className="glass-sheet-group-title">
              <span>Programs & Initiatives</span>
            </div>
            <div className="glass-sheet-sublinks">
              <Link 
                href="/scholars-program" 
                className={`glass-sheet-sublink ${pathname === '/scholars-program' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <GraduationCap size={16} />
                <span>Scholars Program</span>
              </Link>
              <Link 
                href="/teachers-on-the-go" 
                className={`glass-sheet-sublink ${pathname === '/teachers-on-the-go' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <BusFront size={16} />
                <span>Teachers on the Go</span>
              </Link>
              <Link 
                href="/back-2-school" 
                className={`glass-sheet-sublink ${pathname === '/back-2-school' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <Backpack size={16} />
                <span>Back-2-School</span>
              </Link>
              <Link 
                href="/nourish-now" 
                className={`glass-sheet-sublink ${pathname === '/nourish-now' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <Utensils size={16} />
                <span>Nourish Now</span>
              </Link>
              <Link 
                href="/fittot" 
                className={`glass-sheet-sublink ${pathname === '/fittot' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <HeartPulse size={16} />
                <span>FitTot Healthcare</span>
              </Link>
              <Link 
                href="/programs" 
                className={`glass-sheet-sublink ${pathname === '/programs' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <LayoutGrid size={16} />
                <span>View All Initiatives</span>
              </Link>
            </div>
          </div>

          <Link 
            href="/#gallery" 
            className="glass-sheet-link" 
            onClick={closeMenu}
          >
            <span>Gallery</span>
          </Link>
          <Link 
            href="/volunteer" 
            className={`glass-sheet-link ${pathname === '/volunteer' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <span>Volunteer</span>
          </Link>
          <Link 
            href="/contact" 
            className={`glass-sheet-link ${pathname === '/contact' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            <span>Contact Us</span>
          </Link>
        </nav>

        <div className="glass-sheet-actions">
          <Link 
            href="/volunteer" 
            className="glass-sheet-btn-secondary" 
            onClick={closeMenu}
          >
            Sign Up to Volunteer
          </Link>
          <button
            type="button"
            className="glass-sheet-btn-primary"
            onClick={() => {
              closeMenu();
              openDonationModal('General Fund');
            }}
          >
            <Heart size={16} fill="currentColor" />
            <span>Donate Now</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

