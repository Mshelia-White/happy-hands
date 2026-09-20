'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDonation, ProgramFund } from '@/context/DonationContext';
import { 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Lock, 
  Building2, 
  CreditCard, 
  Copy, 
  Heart,
  Globe,
  Download,
  AlertCircle
} from 'lucide-react';

export type CurrencyCode = 'NGN' | 'GBP' | 'EUR' | 'USD';

export interface CurrencyInfo {
  code: CurrencyCode;
  name: string;
  symbol: string;
  flag: string;
  presets: number[];
  default: number;
  defaultAmount: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  NGN: {
    code: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦',
    flag: '🇳🇬',
    presets: [5000, 10000, 25000, 50000, 100000, 250000],
    default: 10000,
    defaultAmount: 10000,
  },
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    presets: [15, 30, 50, 100, 250, 500],
    default: 30,
    defaultAmount: 30,
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    presets: [20, 35, 60, 120, 300, 600],
    default: 35,
    defaultAmount: 35,
  },
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    presets: [20, 50, 100, 200, 350, 500],
    default: 50,
    defaultAmount: 50,
  },
};

const ALL_PURPOSES: ProgramFund[] = [
  'General Fund',
  'Scholars Program',
  'Teachers on the Go',
  'Back-2-School',
  'Nourish Now',
  'FitTot',
];

interface DonationFlowProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const DonationFlow: React.FC<DonationFlowProps> = ({ onClose, isModal = false }) => {
  const { selectedFund } = useDonation();

  // Step 1 to 6
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [purpose, setPurpose] = useState<ProgramFund>(selectedFund || 'General Fund');
  const [isChangingPurpose, setIsChangingPurpose] = useState(false);

  // Currency & Amount
  const [currency, setCurrency] = useState<CurrencyCode>('NGN');
  const [amount, setAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');

  // Donor Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorErrors, setDonorErrors] = useState<{ [key: string]: string }>({});

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [copiedBank, setCopiedBank] = useState(false);

  // Reference for confirmation
  const [referenceId] = useState(() => `HHCF-${Math.floor(100000 + Math.random() * 900000)}`);
  const [donationDate] = useState(() => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

  useEffect(() => {
    if (selectedFund) {
      setPurpose(selectedFund);
    }
  }, [selectedFund]);

  const activeCurrency = CURRENCIES[currency];
  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const formattedAmount = `${activeCurrency.symbol}${finalAmount.toLocaleString()}`;

  const validateDonorDetails = (): boolean => {
    const errors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      errors.email = 'Please enter a valid email address';
    }
    setDonorErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 4) {
      if (!validateDonorDetails()) return;
    }
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCopyAccount = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const stepsList = [
    { num: 1, title: 'Purpose', desc: 'Your cause' },
    { num: 2, title: 'Currency', desc: 'Select currency' },
    { num: 3, title: 'Amount', desc: 'Pick amount' },
    { num: 4, title: 'Details', desc: 'Donor info' },
    { num: 5, title: 'Payment', desc: 'Pay method' },
    { num: 6, title: 'Confirmation', desc: 'Completed' },
  ];

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', background: '#ffffff', borderRadius: 16, border: '1px solid var(--border-warm)', padding: isModal ? '24px' : '36px', boxShadow: 'var(--shadow-card)' }}>
      {/* Stepper Header (Board 05) */}
      <div className="stepper-header">
        {stepsList.map((st, idx) => (
          <React.Fragment key={st.num}>
            <div className={`step-item ${currentStep === st.num ? 'active' : ''} ${currentStep > st.num ? 'completed' : ''}`}>
              <div className="step-number">
                {currentStep > st.num ? <Check size={14} /> : st.num}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ lineHeight: 1.1 }}>{st.title}</span>
              </div>
            </div>
            {idx < stepsList.length - 1 && <span className="step-connector">›</span>}
          </React.Fragment>
        ))}
      </div>

      {/* STEP 1: PURPOSE CONFIRMED */}
      {currentStep === 1 && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <span className="section-title-red">Step 1: Your Donation Purpose</span>
            <h2 style={{ fontSize: 24, margin: '4px 0 8px' }}>Your selected purpose is locked in.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              Every naira and dollar directly powers child development, feeding, and education programs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28, alignItems: 'start' }}>
            <div style={{ background: 'var(--light-neutral)', padding: 20, borderRadius: 12, border: '1px solid var(--border-warm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <strong style={{ fontSize: 16, color: 'var(--dark-neutral)' }}>Selected Cause:</strong>
                <button 
                  type="button" 
                  onClick={() => setIsChangingPurpose(!isChangingPurpose)}
                  style={{ color: 'var(--primary-red)', fontSize: 13, fontWeight: 700 }}
                >
                  {isChangingPurpose ? 'Cancel' : 'Change'}
                </button>
              </div>

              {isChangingPurpose ? (
                <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
                  {ALL_PURPOSES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setPurpose(p);
                        setIsChangingPurpose(false);
                      }}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 8,
                        border: `1.5px solid ${purpose === p ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                        background: purpose === p ? 'var(--primary-red-light)' : '#ffffff',
                        textAlign: 'left',
                        fontWeight: 600,
                        fontSize: 14,
                        color: purpose === p ? 'var(--primary-red)' : 'var(--dark-neutral)',
                        cursor: 'pointer',
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '14px 16px', background: '#ffffff', borderRadius: 8, border: '1.5px solid var(--primary-red)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--primary-red)' }} />
                    <strong style={{ fontSize: 17, color: 'var(--primary-red)' }}>{purpose}</strong>
                  </div>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: 'var(--text-muted)' }}>
                    Directly provides educational materials, meals, and mentorship.
                  </p>
                </div>
              )}

              <div style={{ marginTop: 20 }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 10px' }}>You’re Making an Impact</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13.5, color: 'var(--text-muted)', display: 'grid', gap: 8 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={16} color="var(--primary-green)" strokeWidth={2.5} /> Support access to quality basic education
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={16} color="var(--primary-green)" strokeWidth={2.5} /> Help provide learning materials and uniforms
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={16} color="var(--primary-green)" strokeWidth={2.5} /> Create safe, inclusive learning spaces
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Image
                src="/assets/images/children-group.jpg"
                alt="Children of Happy Hands Foundation"
                width={400}
                height={260}
                style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 12, border: '1px solid var(--border-warm)' }}
                unoptimized
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 16, borderTop: '1px solid var(--border-warm)' }}>
            <button type="button" className="btn btn-secondary" onClick={handleNext}>
              Continue to Currency <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CHOOSE CURRENCY */}
      {currentStep === 2 && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <span className="section-title-red">Step 2: Choose Currency</span>
            <h2 style={{ fontSize: 24, margin: '4px 0 8px' }}>Select your preferred giving currency.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              We accept payments from supporters in Nigeria and across the globe.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 12, marginBottom: 28 }}>
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((curKey) => {
              const cur = CURRENCIES[curKey];
              const isSelected = currency === curKey;
              return (
                <div
                  key={curKey}
                  onClick={() => {
                    setCurrency(curKey);
                    setAmount(cur.default);
                    setCustomAmount('');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: 12,
                    border: `2px solid ${isSelected ? 'var(--primary-green)' : 'var(--border-warm)'}`,
                    background: isSelected ? 'var(--primary-green-light)' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: 24 }}>{cur.flag}</span>
                    <div>
                      <strong style={{ fontSize: 16, color: 'var(--dark-neutral)' }}>{cur.code}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: 14, marginLeft: 8 }}>({cur.name})</span>
                    </div>
                  </div>
                  {isSelected && (
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--primary-green)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={15} strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ background: 'var(--light-neutral)', padding: '12px 16px', borderRadius: 8, fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <ShieldCheck size={16} color="var(--primary-green)" />
            All donations are processed with 256-bit bank-grade encryption.
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border-warm)' }}>
            <button type="button" className="btn btn-tertiary" onClick={handleBack}>
              <ChevronLeft size={16} /> Back
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleNext}>
              Continue to Amount <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: CHOOSE AMOUNT */}
      {currentStep === 3 && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <span className="section-title-red">Step 3: Choose Amount ({currency})</span>
            <h2 style={{ fontSize: 24, margin: '4px 0 8px' }}>Pick a suggested amount or enter your own.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              Selected purpose: <strong>{purpose}</strong>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 20 }}>
            {activeCurrency.presets.map((p) => {
              const isSelected = !customAmount && amount === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setAmount(p);
                    setCustomAmount('');
                  }}
                  style={{
                    padding: '16px',
                    borderRadius: 10,
                    border: `2px solid ${isSelected ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                    background: isSelected ? 'var(--primary-red-light)' : '#ffffff',
                    color: isSelected ? 'var(--primary-red)' : 'var(--dark-neutral)',
                    fontWeight: 700,
                    fontSize: 18,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {activeCurrency.symbol}{p.toLocaleString()}
                </button>
              );
            })}
          </div>

          <div className="form-group" style={{ marginBottom: 24 }}>
            <label className="form-label">Or Enter Custom Amount ({currency})</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 14, top: 12, fontWeight: 700, fontSize: 16, color: 'var(--text-muted)' }}>
                {activeCurrency.symbol}
              </span>
              <input
                type="number"
                min="1"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="input-field"
                style={{ paddingLeft: 36, fontSize: 17, fontWeight: 600 }}
              />
            </div>
          </div>

          <div style={{ background: 'var(--primary-red-light)', padding: 14, borderRadius: 10, border: '1px solid var(--primary-red-border)', display: 'flex', gap: 10, alignItems: 'center', marginBottom: 24 }}>
            <Heart size={20} color="var(--primary-red)" fill="none" strokeWidth={2} />
            <span style={{ fontSize: 13.5, color: 'var(--primary-red)', fontWeight: 600 }}>
              Every contribution helps us nurture, empower, and uplift children and communities.
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border-warm)' }}>
            <button type="button" className="btn btn-tertiary" onClick={handleBack}>
              <ChevronLeft size={16} /> Back
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleNext} disabled={finalAmount <= 0}>
              Continue to Donor Details ({formattedAmount}) <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: DONOR DETAILS */}
      {currentStep === 4 && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <span className="section-title-red">Step 4: Your Information</span>
            <h2 style={{ fontSize: 24, margin: '4px 0 8px' }}>Please provide your details so we can send your receipt.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              Your information is secure and kept strictly private.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="form-group">
              <label className="form-label form-label-required">Full Name</label>
              <input
                type="text"
                className={`input-field ${donorErrors.fullName ? 'has-error' : ''}`}
                placeholder="e.g. Adeola Johnson"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (donorErrors.fullName) setDonorErrors((prev) => ({ ...prev, fullName: '' }));
                }}
              />
              {donorErrors.fullName && (
                <div className="form-helper-error">
                  <AlertCircle size={14} /> {donorErrors.fullName}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">Email Address</label>
              <input
                type="email"
                className={`input-field ${donorErrors.email ? 'has-error' : ''}`}
                placeholder="e.g. adeola@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (donorErrors.email) setDonorErrors((prev) => ({ ...prev, email: '' }));
                }}
              />
              {donorErrors.email && (
                <div className="form-helper-error">
                  <AlertCircle size={14} /> {donorErrors.email}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="input-field"
                placeholder="+234 812 135 3755"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Country</label>
              <select
                className="select-field"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Nigeria">Nigeria</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Ghana">Ghana</option>
                <option value="Germany">Germany</option>
                <option value="Other">Other International</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '12px 0 24px' }}>
            <input
              type="checkbox"
              id="anonymousCheck"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              style={{ width: 18, height: 18, cursor: 'pointer', accentColor: 'var(--primary-red)' }}
            />
            <label htmlFor="anonymousCheck" style={{ fontSize: 14, color: 'var(--dark-neutral)', cursor: 'pointer' }}>
              Make this donation anonymous (Your name will not be displayed publicly)
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border-warm)' }}>
            <button type="button" className="btn btn-tertiary" onClick={handleBack}>
              <ChevronLeft size={16} /> Back
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleNext}>
              Continue to Payment <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: PAYMENT METHOD */}
      {currentStep === 5 && (
        <div>
          <div style={{ marginBottom: 24 }}>
            <span className="section-title-red">Step 5: Choose Payment Method</span>
            <h2 style={{ fontSize: 24, margin: '4px 0 8px' }}>Select how you would like to complete your donation.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
              Summary: Donating <strong>{formattedAmount}</strong> to <strong>{purpose}</strong>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div
              onClick={() => setPaymentMethod('card')}
              style={{
                padding: 18,
                borderRadius: 12,
                border: `2px solid ${paymentMethod === 'card' ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                background: paymentMethod === 'card' ? 'var(--primary-red-light)' : '#ffffff',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <CreditCard size={20} color="var(--primary-red)" />
                <strong style={{ fontSize: 16 }}>Pay Securely Online</strong>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
                Instant debit/credit card processing via certified gateway.
              </p>
            </div>

            <div
              onClick={() => setPaymentMethod('bank')}
              style={{
                padding: 18,
                borderRadius: 12,
                border: `2px solid ${paymentMethod === 'bank' ? 'var(--primary-red)' : 'var(--border-warm)'}`,
                background: paymentMethod === 'bank' ? 'var(--primary-red-light)' : '#ffffff',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <Building2 size={20} color="var(--primary-red)" />
                <strong style={{ fontSize: 16 }}>Direct Bank Transfer</strong>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
                Transfer directly to our official corporate foundation account.
              </p>
            </div>
          </div>

          {paymentMethod === 'bank' ? (
            <div style={{ background: 'var(--light-neutral)', border: '1px solid var(--border-warm)', borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <strong style={{ fontSize: 15, color: 'var(--primary-red)' }}>Happy Hands Official Bank Details</strong>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>GTBank Nigeria</span>
              </div>

              <div style={{ display: 'grid', gap: 10, fontSize: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Bank Name:</span>
                  <strong>Guaranty Trust Bank (GTBank)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Account Name:</span>
                  <strong>Happy Hands Community Development Foundation</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Account Number:</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <strong style={{ fontSize: 17, letterSpacing: 1 }}>0625489110</strong>
                    <button
                      type="button"
                      onClick={() => handleCopyAccount('0625489110')}
                      style={{
                        padding: '4px 10px',
                        background: '#ffffff',
                        border: '1px solid var(--border-warm)',
                        borderRadius: 6,
                        cursor: 'pointer',
                        fontSize: 12,
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      {copiedBank ? <Check size={14} color="var(--primary-green)" /> : <Copy size={14} />}
                      {copiedBank ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border-warm)', fontSize: 13, color: 'var(--text-muted)' }}>
                <strong>Why bank transfer?</strong>
                <ul style={{ paddingLeft: 18, margin: '6px 0 0' }}>
                  <li>100% direct with zero gateway deduction</li>
                  <li>Ideal for corporate giving, sponsorships, and high-volume gifts</li>
                  <li>Send confirmation receipt to: <strong>projects@happyhandsfoundation.org</strong></li>
                </ul>
              </div>
            </div>
          ) : (
            <div style={{ background: 'var(--light-neutral)', border: '1px solid var(--border-warm)', borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <Lock size={18} color="var(--primary-green)" />
                <strong style={{ fontSize: 15 }}>Ready for Instant Processing</strong>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, color: 'var(--text-muted)' }}>
                Clicking &quot;Complete Donation&quot; simulates instant secure gateway authorization for {formattedAmount}.
              </p>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid var(--border-warm)' }}>
            <button type="button" className="btn btn-tertiary" onClick={handleBack}>
              <ChevronLeft size={16} /> Back
            </button>
            <button type="button" className="btn btn-primary" onClick={handleNext}>
              Confirm & Complete Donation ({formattedAmount}) ›
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: CONFIRMATION (Board 05) */}
      {currentStep === 6 && (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'var(--primary-green-light)', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '2px solid var(--primary-green-border)' }}>
            <Check size={38} strokeWidth={3} />
          </div>

          <h2 style={{ fontSize: 28, margin: '0 0 8px' }}>Thank You!</h2>
          <p style={{ fontSize: 16, color: 'var(--primary-green)', fontWeight: 600, margin: '0 0 24px' }}>
            Your donation is confirmed. You are building brighter tomorrows.
          </p>

          <div style={{ maxWidth: 460, margin: '0 auto 28px', background: 'var(--light-neutral)', borderRadius: 12, border: '1px solid var(--border-warm)', padding: 20, textAlign: 'left', fontSize: 14 }}>
            <h4 style={{ margin: '0 0 12px', fontSize: 15, fontWeight: 700, borderBottom: '1px solid var(--border-warm)', paddingBottom: 8 }}>
              Donation Summary
            </h4>
            <div style={{ display: 'grid', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Donor:</span>
                <strong>{isAnonymous ? 'Anonymous Supporter' : (fullName || 'Valued Supporter')}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Purpose:</span>
                <strong>{purpose}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Amount:</span>
                <strong style={{ color: 'var(--primary-red)', fontSize: 16 }}>{formattedAmount}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Currency:</span>
                <strong>{currency}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Payment Method:</span>
                <strong>{paymentMethod === 'card' ? 'Online Card' : 'Bank Transfer'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date:</span>
                <span>{donationDate}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Reference ID:</span>
                <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>{referenceId}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (onClose) onClose();
                else window.location.href = '/impact';
              }}
            >
              View Our Impact Stories ›
            </button>
            <button
              type="button"
              className="btn btn-tertiary"
              onClick={() => window.print()}
            >
              <Download size={16} /> Download Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
