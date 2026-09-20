'use client';

import React from 'react';
import { DonationFlow } from '@/components/DonationFlow';
import { ShieldCheck, CheckCircle2, Globe, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function DonatePage() {
  return (
    <main style={{ minHeight: '80vh', padding: '48px 0 80px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header text-center" style={{ marginBottom: 36 }}>
          <span className="section-title-red">Donate & International Giving</span>
          <h1 style={{ margin: '8px 0 12px' }}>Support Happy Hands Foundation</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, maxWidth: 640, margin: '0 auto' }}>
            Your generosity provides children in underserved African communities with quality education, hot meals, school uniforms, and compassionate mentorship.
          </p>
        </div>

        {/* 6-step flow */}
        <div style={{ marginBottom: 64 }}>
          <DonationFlow />
        </div>

        {/* Bottom Trust & Transparency Panels (Board 05) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
          <div style={{ background: '#ffffff', padding: 24, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-red-light)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>Secure. Trusted. Transparent.</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13.5, color: 'var(--text-muted)', display: 'grid', gap: 8 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} color="var(--primary-green)" /> 256-bit SSL encrypted donation channel
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} color="var(--primary-green)" /> Registered Foundation (RC: 183177)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} color="var(--primary-green)" /> Published annual impact reports & audits
              </li>
            </ul>
          </div>

          <div style={{ background: '#ffffff', padding: 24, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Globe size={22} />
            </div>
            <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>Your Impact, Everywhere</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 12px' }}>
              From suburban Lagos to rural classrooms across Nigeria, Happy Hands has directly supported over 5,000 children and distributed 2,000+ nutritious meals.
            </p>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary-green)' }}>
              Over 15 community outreaches completed ›
            </span>
          </div>

          <div style={{ background: '#ffffff', padding: 24, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--accent-yellow-light)', color: '#6A5300', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <Heart size={22} />
            </div>
            <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>Need Assistance?</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.5, margin: '0 0 12px' }}>
              For wire instructions, international tax documentation, or corporate matching:
            </p>
            <div style={{ fontSize: 13, display: 'grid', gap: 4, color: 'var(--dark-neutral)' }}>
              <span><strong>Phone:</strong> +234 812 135 3755</span>
              <span><strong>Email:</strong> partnerships@happyhandsfoundation.org</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
