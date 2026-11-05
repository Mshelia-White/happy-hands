'use client';

import React, { useState } from 'react';
import { X, Download, Heart, CheckCircle2, ShieldCheck, FileText, Globe } from 'lucide-react';
import { useDonation } from '@/context/DonationContext';

interface SponsorshipGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SponsorshipGuideModal: React.FC<SponsorshipGuideModalProps> = ({ isOpen, onClose }) => {
  const { openDonationModal } = useDonation();

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/docs/HappyHands_Scholars_Sponsorship_Guide.pdf';
    link.download = 'HappyHands_Scholars_Sponsorship_Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 9999 }}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '32px', maxWidth: '640px' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'var(--cream)',
            border: '1px solid var(--line)',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <FileText size={20} color="var(--orange)" />
          <span className="donation-label" style={{ margin: 0 }}>
            Scholars Program Guide
          </span>
        </div>

        <h3 style={{ fontSize: 24, fontWeight: 900, margin: '6px 0 16px', letterSpacing: '-0.03em' }}>
          Scholars Program Sponsorship Guide
        </h3>

        <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
          Download the approved guide containing full package details, guardianship terms, and program impact.
        </p>

        <div
          style={{
            background: '#fffaf5',
            border: '1px solid var(--line)',
            borderRadius: 16,
            padding: 20,
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <strong style={{ fontSize: 15, color: 'var(--slate)' }}>Approved Sponsorship Packages:</strong>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#475569', fontSize: 14, lineHeight: 1.7 }}>
            <li><strong>Full Bloom Package</strong> — full annual support for a scholar.</li>
            <li><strong>Empowerment Partner</strong> — termly support covering key educational and developmental needs.</li>
            <li><strong>Education Essentials Package</strong> — tuition and essential school needs.</li>
            <li><strong>Nutrition for Growth Package</strong> — daily feeding during school hours.</li>
            <li><strong>Back-to-School Package</strong> — uniforms, school bags, shoes and basic supplies.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: '#64748b' }}>
          <Globe size={16} color="var(--orange)" />
          <span>Supporting from outside Nigeria? You can become a Guardian from anywhere in the world.</span>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleDownload}
            style={{ flex: '1 1 200px' }}
          >
            <Download size={16} /> Download Sponsorship Guide
          </button>
          <button
            type="button"
            className="btn btn-orange"
            onClick={() => {
              onClose();
              openDonationModal('Scholars Program');
            }}
            style={{ flex: '1 1 200px' }}
          >
            <Heart size={16} fill="white" /> Become a Guardian
          </button>
        </div>
      </div>
    </div>
  );
};
