import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Heart, 
  GraduationCap, 
  Users, 
  Building2, 
  Package, 
  Gift, 
  Award,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Get Involved | Happy Hands Community Development Foundation',
  description: 'Discover the diverse ways you can empower children across Nigeria: volunteer, become a guardian, sponsor a drive, or partner with us.',
};

export default function GetInvolvedPage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="hero-section" aria-label="Get Involved Hero">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: 780, margin: '0 auto 40px' }}>
            <span className="section-title-red">Lend Your Hands</span>
            <h1 style={{ margin: '8px 0 16px' }}>Ways to Stand Beside a Child</h1>
            <p className="hero-subtitle" style={{ fontSize: 18 }}>
              Change happens when compassionate individuals, organizations, and communities unite their resources, skills, and love.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY CHANNELS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
            {/* Channel 1: Volunteer */}
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 32, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Users size={26} />
              </div>
              <h2 style={{ fontSize: 22, margin: '0 0 10px' }}>Become a Volunteer</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>
                Join our 3-step volunteer onboarding flow. Share your talents in teaching, logistics, media, grant writing, or medical healthcare.
              </p>
              <Link href="/volunteer" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Start Volunteer Application ›
              </Link>
            </div>

            {/* Channel 2: Become a Guardian */}
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 32, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <GraduationCap size={26} />
              </div>
              <h2 style={{ fontSize: 22, margin: '0 0 10px' }}>Become a Guardian</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>
                Sponsor a child through the Scholars Program. Cover tuition, uniforms, textbooks, and nutritious school lunches, and receive termly academic updates.
              </p>
              <Link href="/scholars-program" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Explore Guardian Packages ›
              </Link>
            </div>

            {/* Channel 3: Give Once or Monthly */}
            <div style={{ background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 32, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Heart size={26} strokeWidth={2.5} />
              </div>
              <h2 style={{ fontSize: 22, margin: '0 0 10px' }}>Donate to a Program</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>
                Support our General Fund, Nourish Now meals, or Back-2-School kits via card or direct transfer in NGN, USD, GBP, or EUR.
              </p>
              <Link href="/donate" className="btn btn-tertiary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                Make a Donation ♡
              </Link>
            </div>
          </div>

          {/* 3. CORPORATE & COMMUNITY PARTNERSHIPS */}
          <div style={{ background: 'var(--light-neutral)', borderRadius: 16, border: '1px solid var(--border-warm)', padding: 36 }}>
            <div className="section-header text-center" style={{ marginBottom: 32 }}>
              <span className="section-title-red">Institutional & Corporate Giving</span>
              <h2>Partner With Happy Hands</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 15.5 }}>
                We work closely with corporate CSR desks, religious organizations, and foundations to implement high-impact, transparent programs.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              <div style={{ background: '#ffffff', padding: 22, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
                <Building2 size={24} color="var(--primary-red)" style={{ marginBottom: 10 }} />
                <h3 style={{ fontSize: 17, margin: '0 0 6px' }}>Corporate CSR Drives</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                  Co-brand annual Back-to-School drives or fund entire elementary school classrooms under your corporate responsibility charter.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: 22, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
                <Package size={24} color="var(--primary-green)" style={{ marginBottom: 10 }} />
                <h3 style={{ fontSize: 17, margin: '0 0 6px' }}>Supply & Food Drives</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                  Collect bags of rice, school stationery, or sports items at your office or community organization for distribution.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: 22, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
                <Gift size={24} color="var(--primary-red)" style={{ marginBottom: 10 }} />
                <h3 style={{ fontSize: 17, margin: '0 0 6px' }}>In-Kind Expertise</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
                  Offer professional services in legal, auditing, technology, digital marketing, or medical health camps.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link href="/contact?subject=partnership" className="btn btn-secondary">
                Speak with our Partnerships Director ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <CtaBanner />
    </main>
  );
}
