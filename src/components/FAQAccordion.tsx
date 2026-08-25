'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  kicker?: string;
  description?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  kicker = 'Got Questions?',
  description,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="faq-container" style={{ width: '100%' }}>
      {title && (
        <div style={{ marginBottom: 28, textAlign: 'center' }}>
          {kicker && <p className="section-kicker" style={{ justifyContent: 'center' }}>{kicker}</p>}
          <h2 className="section-title" style={{ margin: '8px auto 12px' }}>{title}</h2>
          {description && <p className="section-lede" style={{ margin: '0 auto', maxWidth: 650 }}>{description}</p>}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 840, margin: '0 auto' }}>
        {items.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              style={{
                background: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: 16,
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                boxShadow: isOpen ? '0 4px 20px rgba(249, 115, 22, 0.06)' : 'none',
              }}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: 17,
                  fontWeight: 800,
                  color: isOpen ? 'var(--orange-dark)' : 'var(--slate)',
                }}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  style={{
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: isOpen ? 'var(--orange)' : 'var(--muted)',
                  }}
                />
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 22px',
                    color: '#475569',
                    fontSize: 15,
                    lineHeight: 1.7,
                    borderTop: '1px solid #fff7ed',
                  }}
                >
                  {typeof item.answer === 'string' ? <p style={{ margin: '12px 0 0' }}>{item.answer}</p> : item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
