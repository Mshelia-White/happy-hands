'use client';

import React, { useState, useEffect } from 'react';
import { useDonation, ProgramFund } from '@/context/DonationContext';
import { X, Lock, CreditCard, Building2, CheckCircle2, Copy, Check, Heart, Globe } from 'lucide-react';

export type CurrencyCode = 'NGN' | 'USD' | 'GBP' | 'EUR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  label: string;
  presets: number[];
  defaultAmount: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  NGN: {
    code: 'NGN',
    symbol: '₦',
    label: 'NGN',
    presets: [5000, 10000, 25000, 50000, 100000],
    defaultAmount: 10000,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    label: 'USD',
    presets: [10, 25, 50, 100, 250],
    defaultAmount: 50,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    label: 'GBP',
    presets: [10, 20, 50, 100, 200],
    defaultAmount: 40,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    label: 'EUR',
    presets: [10, 25, 50, 100, 250],
    defaultAmount: 45,
  },
};

const funds: ProgramFund[] = [
  'General Fund',
  'Scholars Program',
  'Teachers on the Go',
  'Back-2-School',
  'Nourish Now',
  'FitTot',
];

export const DonationModal: React.FC = () => {
  const { isModalOpen, selectedFund, closeDonationModal } = useDonation();
  const [activeFund, setActiveFund] = useState<ProgramFund>('General Fund');
  const [currency, setCurrency] = useState<CurrencyCode>('NGN');
  const [amount, setAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setActiveFund(selectedFund);
      setCustomAmount('');
      setIsSuccess(false);
      setIsProcessing(false);
    }
  }, [isModalOpen, selectedFund]);

  const handleCurrencyChange = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    setAmount(CURRENCIES[newCurrency].defaultAmount);
    setCustomAmount('');
  };

  if (!isModalOpen) return null;

  const currentCurrencyConfig = CURRENCIES[currency];
  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const formattedAmount = `${currentCurrencyConfig.symbol}${currentAmount.toLocaleString()}`;

  const handleCopyAccount = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={closeDonationModal} style={{ zIndex: 9999 }}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
        <button
          onClick={closeDonationModal}
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

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '24px 8px' }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'var(--green-bg)',
                color: 'var(--green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle2 size={44} />
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 10px' }}>
              Thank You for Your Support!
            </h3>
            <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.6, margin: '0 0 24px' }}>
              Your donation of <strong>{formattedAmount}</strong> to the{' '}
              <strong>{activeFund}</strong> creates meaningful opportunities for the children we serve.
            </p>
            <p style={{ color: 'var(--orange-dark)', fontWeight: 800, fontSize: 14, margin: '0 0 20px' }}>
              They&apos;re the reason we exist. You&apos;re the reason this works.
            </p>
            <div
              style={{
                background: 'var(--cream)',
                borderRadius: 16,
                padding: '16px 20px',
                border: '1px solid var(--line)',
                marginBottom: 24,
                textAlign: 'left',
                fontSize: 14,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: 'var(--muted)' }}>Reference ID:</span>
                <strong>HH-{(Math.random() * 1000000).toFixed(0)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: 'var(--muted)' }}>Frequency:</span>
                <strong>{frequency === 'monthly' ? 'Monthly Giving' : 'One-Time'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted)' }}>Beneficiary Cause:</span>
                <strong>{activeFund}</strong>
              </div>
            </div>
            <button className="btn btn-dark" style={{ width: '100%' }} onClick={closeDonationModal}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Heart size={18} color="var(--orange)" />
              <span className="donation-label" style={{ margin: 0 }}>
                Support Happy Hands
              </span>
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 900, margin: '6px 0 6px', letterSpacing: '-0.03em' }}>
              Wherever you are, you can be part of this.
            </h3>
            <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.5, margin: '0 0 16px' }}>
              Every donation plays a role in helping us create better opportunities for the children we serve. Give what you can, from wherever you are.
            </p>

            {/* Currency Selector */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 800, marginBottom: 6, color: 'var(--slate)' }}>
                Choose your currency
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((curCode) => {
                  const isCurSelected = currency === curCode;
                  const cur = CURRENCIES[curCode];
                  return (
                    <button
                      key={curCode}
                      type="button"
                      onClick={() => handleCurrencyChange(curCode)}
                      style={{
                        padding: '8px 4px',
                        borderRadius: 10,
                        border: `1.5px solid ${isCurSelected ? 'var(--orange)' : 'var(--line)'}`,
                        background: isCurSelected ? 'var(--orange-soft)' : 'white',
                        color: isCurSelected ? 'var(--orange-dark)' : 'var(--slate)',
                        fontWeight: 800,
                        fontSize: 13,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4,
                        transition: 'all 0.2s',
                      }}
                    >
                      <span>{cur.symbol}</span>
                      <span>{cur.code}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Frequency toggle */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 6,
                background: 'var(--cream)',
                padding: 4,
                borderRadius: 999,
                marginBottom: 16,
                border: '1px solid var(--line)',
              }}
            >
              <button
                type="button"
                onClick={() => setFrequency('once')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 999,
                  border: 'none',
                  background: frequency === 'once' ? 'white' : 'transparent',
                  color: frequency === 'once' ? 'var(--orange-dark)' : 'var(--muted)',
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: 'pointer',
                  boxShadow: frequency === 'once' ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                Give Once
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 999,
                  border: 'none',
                  background: frequency === 'monthly' ? 'white' : 'transparent',
                  color: frequency === 'monthly' ? 'var(--orange-dark)' : 'var(--muted)',
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: 'pointer',
                  boxShadow: frequency === 'monthly' ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                Give Monthly 💖
              </button>
            </div>

            {/* Amount Grid */}
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 800, marginBottom: 6, color: 'var(--slate)' }}>
                Select Amount
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${currentCurrencyConfig.presets.length}, 1fr)`, gap: 6 }}>
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
            </div>

            {/* Custom Amount */}
            <div className="custom-amount" style={{ marginBottom: 16 }}>
              <span>{currentCurrencyConfig.symbol}</span>
              <input
                type="number"
                placeholder={`Enter custom amount in ${currentCurrencyConfig.code}`}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>

            {/* Program Fund Selection */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 800, marginBottom: 6, color: 'var(--slate)' }}>
                Direct my donation to:
              </label>
              <div className="fund-buttons">
                {funds.map((fund) => (
                  <button
                    key={fund}
                    type="button"
                    className={`fund-btn ${activeFund === fund ? 'active' : ''}`}
                    onClick={() => setActiveFund(fund)}
                  >
                    {fund}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method Selector */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 800, marginBottom: 6, color: 'var(--slate)' }}>
                Payment Method
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '10px 8px',
                    borderRadius: 12,
                    border: `2px solid ${paymentMethod === 'card' ? 'var(--orange)' : 'var(--line)'}`,
                    background: paymentMethod === 'card' ? 'var(--orange-soft)' : 'white',
                    color: paymentMethod === 'card' ? 'var(--orange-dark)' : 'var(--slate)',
                    fontWeight: 800,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  <CreditCard size={16} /> International / Local Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '10px 8px',
                    borderRadius: 12,
                    border: `2px solid ${paymentMethod === 'bank' ? 'var(--orange)' : 'var(--line)'}`,
                    background: paymentMethod === 'bank' ? 'var(--orange-soft)' : 'white',
                    color: paymentMethod === 'bank' ? 'var(--orange-dark)' : 'var(--slate)',
                    fontWeight: 800,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  <Building2 size={16} /> Direct Bank Transfer
                </button>
              </div>
            </div>

            {paymentMethod === 'bank' ? (
              <div
                style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--line)',
                  borderRadius: 14,
                  padding: 16,
                  marginBottom: 16,
                }}
              >
                <p style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 800, color: 'var(--orange-dark)' }}>
                  Happy Hands Foundation Official Account
                </p>
                <div style={{ display: 'grid', gap: 8, fontSize: 13 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--muted)' }}>Bank Name:</span>
                    <strong>Guaranty Trust Bank (GTBank)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--muted)' }}>Account Name:</span>
                    <strong>Happy Hands Foundation</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--muted)' }}>Account Number:</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <strong style={{ fontSize: 15, letterSpacing: 1 }}>0625489110</strong>
                      <button
                        type="button"
                        onClick={() => handleCopyAccount('0625489110')}
                        style={{
                          background: 'white',
                          border: '1px solid var(--line)',
                          borderRadius: 8,
                          padding: '4px 8px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          fontSize: 11,
                          fontWeight: 800,
                        }}
                      >
                        {copied ? <Check size={12} color="var(--green)" /> : <Copy size={12} />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>
                <p style={{ margin: '12px 0 0', fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                  Please include &quot;{activeFund}&quot; in your transfer narration, or send receipt to{' '}
                  <strong>projects@happyhandsfoundation.org</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDonate}>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 14 }}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address (for donation receipt)"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-orange"
                  style={{ width: '100%' }}
                  disabled={isProcessing || currentAmount <= 0}
                >
                  {isProcessing ? 'Processing Secure Donation...' : `Donate ${formattedAmount} Now`}
                </button>
              </form>
            )}

            {paymentMethod === 'bank' && (
              <button
                type="button"
                className="btn btn-orange"
                style={{ width: '100%' }}
                onClick={() => setIsSuccess(true)}
              >
                I Have Completed Bank Transfer
              </button>
            )}

            <div className="ssl-badge" style={{ marginTop: 14 }}>
              <Lock size={14} />
              256-bit SSL Secure Global Donation • Verified Non-Profit
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
