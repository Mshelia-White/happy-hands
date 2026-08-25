'use client';

import React, { useState } from 'react';
import { useDonation, ProgramFund } from '@/context/DonationContext';
import { Lock, Heart, Globe } from 'lucide-react';
import { CURRENCIES, CurrencyCode } from './DonationModal';

const funds: ProgramFund[] = [
  'General Fund',
  'Scholars Program',
  'Teachers on the Go',
  'Back-2-School',
  'Nourish Now',
  'FitTot',
];

interface DonationWidgetProps {
  initialFund?: ProgramFund;
}

export const DonationWidget: React.FC<DonationWidgetProps> = ({ initialFund = 'General Fund' }) => {
  const { openDonationModal } = useDonation();
  const [selectedFund, setSelectedFund] = useState<ProgramFund>(initialFund);
  const [currency, setCurrency] = useState<CurrencyCode>('NGN');
  const [amount, setAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const currentCurrencyConfig = CURRENCIES[currency];
  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const formattedAmount = `${currentCurrencyConfig.symbol}${currentAmount.toLocaleString()}`;

  const handleCurrencyChange = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    setAmount(CURRENCIES[newCurrency].defaultAmount);
    setCustomAmount('');
  };

  const handleProceed = () => {
    openDonationModal(selectedFund, currentAmount);
  };

  return (
    <div className="donation-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <Heart size={16} color="var(--orange)" />
        <span className="donation-label" style={{ margin: 0 }}>Support Happy Hands</span>
      </div>
      <h3 style={{ margin: '4px 0 6px', fontSize: 20 }}>Choose your currency</h3>
      <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 14px', lineHeight: 1.4 }}>
        Give what you can, from wherever you are.
      </p>

      {/* Currency selection tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 14 }}>
        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((curCode) => {
          const isSelected = currency === curCode;
          const cur = CURRENCIES[curCode];
          return (
            <button
              key={curCode}
              type="button"
              onClick={() => handleCurrencyChange(curCode)}
              style={{
                padding: '6px 2px',
                borderRadius: 8,
                border: `1.5px solid ${isSelected ? 'var(--orange)' : 'var(--line)'}`,
                background: isSelected ? 'var(--orange-soft)' : 'white',
                color: isSelected ? 'var(--orange-dark)' : 'var(--slate)',
                fontWeight: 800,
                fontSize: 12,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {cur.symbol} {cur.code}
            </button>
          );
        })}
      </div>

      {/* Amount Grid */}
      <div className="amount-grid" style={{ gridTemplateColumns: `repeat(${currentCurrencyConfig.presets.length > 4 ? 5 : 4}, 1fr)` }}>
        {currentCurrencyConfig.presets.map((amt) => {
          const label = `${currentCurrencyConfig.symbol}${amt >= 1000 ? `${amt / 1000}k` : amt}`;
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
              style={{ padding: '8px 2px', fontSize: 12 }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Custom Amount */}
      <div className="custom-amount" style={{ marginTop: 10, marginBottom: 14 }}>
        <span>{currentCurrencyConfig.symbol}</span>
        <input
          type="number"
          placeholder={`Or enter custom amount in ${currentCurrencyConfig.code}`}
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
      </div>

      {/* Fund Selection */}
      <div className="funds">
        <p style={{ fontSize: 12, fontWeight: 800, marginBottom: 6, color: 'var(--slate)' }}>
          Direct to Program
        </p>
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

      <div className="donation-actions" style={{ marginTop: 16 }}>
        <button
          type="button"
          className="btn btn-orange"
          style={{ width: '100%' }}
          onClick={handleProceed}
          disabled={currentAmount <= 0}
        >
          <Heart size={16} fill="white" /> Donate {formattedAmount} Now
        </button>
      </div>

      <div className="ssl-badge">
        <Lock size={14} />
        Secure 256-bit SSL Global Donation
      </div>
    </div>
  );
};
