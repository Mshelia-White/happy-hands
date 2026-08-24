'use client';

import React, { useState } from 'react';
import { useDonation, ProgramFund } from '@/context/DonationContext';
import { Lock, Heart, ShieldCheck, Check } from 'lucide-react';

const funds: ProgramFund[] = [
  'General Fund',
  'Scholars Program',
  'Teachers on the Go',
  'Back-2-School',
  'Nourish Now',
  'FitTot',
];

const presetAmounts = [5000, 10000, 25000, 50000];

interface DonationWidgetProps {
  initialFund?: ProgramFund;
}

export const DonationWidget: React.FC<DonationWidgetProps> = ({ initialFund = 'General Fund' }) => {
  const { openDonationModal } = useDonation();
  const [selectedFund, setSelectedFund] = useState<ProgramFund>(initialFund);
  const [amount, setAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handleProceed = () => {
    openDonationModal(selectedFund, currentAmount);
  };

  return (
    <div className="donation-card">
      <p className="donation-label">Support Happy Hands</p>
      <h3>Make a Donation</h3>

      <div className="amount-grid">
        {presetAmounts.map((amt) => {
          const label = `₦${amt / 1000}k`;
          const isSelected = !customAmount && amount === amt;
          return (
            <button
              key={amt}
              type="button"
              className={`amount-btn ${isSelected ? 'active' : ''}`}
              onClick={() => {
                setAmount(amt);
                setCustomAmount('');
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="custom-amount">
        <span>₦</span>
        <input
          type="number"
          placeholder="Other amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
      </div>

      <div className="funds">
        <p>Select Fund</p>
        <div className="fund-buttons">
          {funds.map((fund) => (
            <button
              key={fund}
              type="button"
              className={`fund-btn ${selectedFund === fund ? 'active' : ''}`}
              onClick={() => setSelectedFund(fund)}
            >
              {fund}
            </button>
          ))}
        </div>
      </div>

      <div className="donation-actions">
        <button
          type="button"
          className="btn btn-orange"
          style={{ width: '100%' }}
          onClick={handleProceed}
        >
          <Heart size={16} fill="white" /> Donate ₦{currentAmount.toLocaleString()}
        </button>
      </div>

      <div className="ssl-badge">
        <Lock size={14} />
        Secure 256-bit SSL donation
      </div>
    </div>
  );
};
