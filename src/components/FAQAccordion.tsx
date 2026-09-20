'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  kicker?: string;
  description?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items,
  title,
  kicker,
  description
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div style={{ width: '100%' }}>
      {(title || kicker || description) && (
        <div className="section-header text-center" style={{ marginBottom: 36 }}>
          {kicker && <span className="section-title-red">{kicker}</span>}
          {title && <h2>{title}</h2>}
          {description && <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>{description}</p>}
        </div>
      )}

      <div className="faq-accordion-wrap" role="region" aria-label="Frequently Asked Questions">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`faq-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="faq-trigger"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="faq-icon-toggle" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-body">
                  <div style={{ margin: 0, color: 'var(--text-muted)' }}>
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
