'use client';

import React from 'react';
import Image from 'next/image';
import { useDonation } from '@/context/DonationContext';
import { Heart } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const { openDonationModal } = useDonation();

  return (
    <section className="cta-banner-section" aria-label="Make a Difference Today">
      <div className="container">
        <div className="cta-banner-inner">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Heart size={24} color="var(--accent-yellow)" fill="none" strokeWidth={2.2} />
            </div>
            <h2 className="cta-banner-title">Make a Difference Today</h2>
            <p className="cta-banner-desc">
              Your donation goes directly to child development programs, feeding initiatives, and safe learning environments.
            </p>
            <button
              type="button"
              className="btn btn-white"
              onClick={() => openDonationModal('General Fund')}
            >
              Donate Now ♡
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <Image
              src="/assets/images/children-group.jpg"
              alt="Happy Hands Foundation Scholars"
              width={560}
              height={320}
              className="cta-banner-img"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};
