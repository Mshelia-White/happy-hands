'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Sponsoring a scholar through Happy Hands has been one of the most rewarding commitments of my life. Seeing my student move from sitting at home to leading her class in exams is priceless.',
    author: 'Mrs. Bukola A.',
    role: 'Guardian Sponsor, Scholars Program',
  },
  {
    quote: 'When Teachers on the Go visited our community school, the joy in the children’s eyes was unforgettable. The volunteers brought energy, books, and genuine empathy.',
    author: 'Mr. Tunde O.',
    role: 'Head Teacher, Community Primary School',
  },
  {
    quote: 'Volunteering with Happy Hands transformed how I view community service. Everything is transparent, centered on the children, and delivered with love.',
    author: 'Chidinma E.',
    role: 'Lead Volunteer, Media & Communications',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveIndex(Math.min(newIndex, testimonials.length - 1));
    }
  };

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section section-bg-light" aria-label="Voices From Our Community">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-title-red">Voices From Our Community</span>
          <h2>What People Are Saying</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>
            Words from our guardians, school administrators, and passionate volunteers.
          </p>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-warm)',
                borderRadius: 14,
                padding: 28,
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ fontSize: 15, fontStyle: 'italic', color: 'var(--dark-neutral)', lineHeight: 1.65, margin: '0 0 20px' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <strong style={{ display: 'block', fontSize: 14.5, color: 'var(--dark-neutral)' }}>{t.author}</strong>
                <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel with Pagination Dots (Visible on Mobile/Tablet) */}
        <div className="block lg:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: 16,
              paddingLeft: 4,
              paddingRight: 4,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  flex: '0 0 85%',
                  maxWidth: '340px',
                  scrollSnapAlign: 'center',
                  background: '#ffffff',
                  border: '1px solid var(--border-warm)',
                  borderRadius: 14,
                  padding: 24,
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--dark-neutral)', lineHeight: 1.6, margin: '0 0 18px' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <strong style={{ display: 'block', fontSize: 14, color: 'var(--dark-neutral)' }}>{t.author}</strong>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Controls & Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 12 }}>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid var(--border-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeIndex === 0 ? 'var(--border-warm-dark)' : 'var(--dark-neutral)',
                cursor: activeIndex === 0 ? 'default' : 'pointer',
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: activeIndex === i ? 22 : 8,
                    height: 8,
                    borderRadius: 999,
                    background: activeIndex === i ? 'var(--primary-red)' : 'var(--border-warm-dark)',
                    transition: 'all 0.25s ease',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
              disabled={activeIndex === testimonials.length - 1}
              aria-label="Next testimonial"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid var(--border-warm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeIndex === testimonials.length - 1 ? 'var(--border-warm-dark)' : 'var(--dark-neutral)',
                cursor: activeIndex === testimonials.length - 1 ? 'default' : 'pointer',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
