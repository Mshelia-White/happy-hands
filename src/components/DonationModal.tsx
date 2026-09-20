'use client';

import React, { useEffect } from 'react';
import { useDonation } from '@/context/DonationContext';
import { DonationFlow, CURRENCIES } from './DonationFlow';
import type { CurrencyCode } from './DonationFlow';
import { X } from 'lucide-react';

export type { CurrencyCode };
export { DonationFlow, CURRENCIES };

export const DonationModal: React.FC = () => {
  const { isModalOpen, closeDonationModal } = useDonation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDonationModal();
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeDonationModal]);

  if (!isModalOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(40, 32, 21, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        overflowY: 'auto',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeDonationModal();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Make a Donation"
    >
      <div style={{ position: 'relative', width: '100%', maxWidth: 860, maxHeight: '92vh', overflowY: 'auto' }}>
        <button
          type="button"
          onClick={closeDonationModal}
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'var(--light-neutral)',
            border: '1px solid var(--border-warm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--dark-neutral)',
          }}
          aria-label="Close Donation Flow"
        >
          <X size={18} />
        </button>

        <DonationFlow onClose={closeDonationModal} isModal={true} />
      </div>
    </div>
  );
};
