'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="contact-form-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--green-bg)',
            color: 'var(--green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 10px' }}>
          Message Sent Successfully!
        </h3>
        <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.6, margin: '0 0 20px' }}>
          Thank you, <strong>{formData.name}</strong>. A member of the Happy Hands Foundation team will reply
          to <strong>{formData.email}</strong> shortly.
        </p>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 16px' }}>Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="contact-two">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership & Sponsorship">Corporate Partnership & Sponsorship</option>
            <option value="School Adoption / Scholarships">Scholars Program Inquiries</option>
            <option value="Food Relief / Nourish Now">Nourish Now Food Drives</option>
            <option value="Volunteer Coordination">Volunteer Coordination</option>
            <option value="Media & Press">Media & Press</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="How can we help or collaborate with you? *"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-orange"
          style={{ width: '100%' }}
          disabled={isSubmitting}
        >
          <Send size={16} />
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};
