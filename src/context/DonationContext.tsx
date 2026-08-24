'use client';

import React, { createContext, useContext, useState } from 'react';

export type ProgramFund = 
  | 'General Fund'
  | 'Scholars Program'
  | 'Teachers on the Go'
  | 'Back-2-School'
  | 'Nourish Now'
  | 'FitTot';

interface DonationContextType {
  isModalOpen: boolean;
  selectedFund: ProgramFund;
  defaultAmount: number;
  openDonationModal: (fund?: ProgramFund, amount?: number) => void;
  closeDonationModal: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFund, setSelectedFund] = useState<ProgramFund>('General Fund');
  const [defaultAmount, setDefaultAmount] = useState<number>(10000);

  const openDonationModal = (fund: ProgramFund = 'General Fund', amount = 10000) => {
    setSelectedFund(fund);
    setDefaultAmount(amount);
    setIsModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DonationContext.Provider
      value={{
        isModalOpen,
        selectedFund,
        defaultAmount,
        openDonationModal,
        closeDonationModal,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};
