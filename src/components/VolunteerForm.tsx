'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, Sparkles, HeartHandshake } from 'lucide-react';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    roleCategory: 'Virtual Roles',
    specificRole: 'Media & Graphics Design',
    availability: 'Weekends',
    experience: '',
    motivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const roleOptions: { [key: string]: string[] } = {
    'Virtual Roles': [
      'Media & Graphics Design',
      'Grant & Content Writing',
      'Social Media Management',
      'Partnership & Fundraising',
      'Web & Tech Support',
    ],
    'Physical Roles': [
      'Event & Outreach Volunteer',
      'Child Mentorship & Tutoring',
      'Logistics & Distribution',
      'Classroom Assistant',
    ],
    'Specialized Roles': [
      'Medical & Nursing Professional',
      'Legal & Compliance Advisor',
      'Nutritional Specialist',
      'Psychologist & Counselor',
    ],
  };

  const handleCategoryChange = (cat: string) => {
    setFormData((prev) => ({
      ...prev,
      roleCategory: cat,
      specificRole: roleOptions[cat][0] || '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div
        className="contact-form-card"
        style={{ textAlign: 'center', padding: '48px 32px' }}
      >
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
        <h3 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>
          Application Received!
        </h3>
        <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.6, maxWidth: 500, margin: '0 auto 24px' }}>
          Thank you, <strong>{formData.fullName}</strong>! We are thrilled to welcome your passionate hands to the
          Happy Hands volunteer community. Our volunteer coordinator will review your profile for{' '}
          <strong>{formData.specificRole}</strong> and reach out via email shortly.
        </p>
        <div
          style={{
            background: 'var(--cream)',
            border: '1px solid var(--line)',
            borderRadius: 16,
            padding: 16,
            maxWidth: 400,
            margin: '0 auto 24px',
            textAlign: 'left',
            fontSize: 14,
          }}
        >
          <div style={{ marginBottom: 6 }}>
            <span style={{ color: 'var(--muted)' }}>Role Track: </span>
            <strong>{formData.roleCategory} - {formData.specificRole}</strong>
          </div>
          <div>
            <span style={{ color: 'var(--muted)' }}>Contact: </span>
            <strong>{formData.email}</strong>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              location: '',
              roleCategory: 'Virtual Roles',
              specificRole: 'Media & Graphics Design',
              availability: 'Weekends',
              experience: '',
              motivation: '',
            });
          }}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-card" id="apply">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <HeartHandshake size={24} color="var(--orange)" />
        <span className="section-kicker" style={{ margin: 0 }}>
          Join Our Family
        </span>
      </div>
      <h3 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>
        Volunteer Application Form
      </h3>
      <p style={{ color: '#64748b', fontSize: 15, margin: '0 0 24px' }}>
        Fill out this quick form and help us bring education and healthy futures to African children.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
            Full Name *
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Taiwo Alamu"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        <div className="contact-two">
          <div className="form-group">
            <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
              Email Address *
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="e.g. taiwo@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
              Phone Number *
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="e.g. +234 812 345 6789"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="contact-two">
          <div className="form-group">
            <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
              Location / City *
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Lagos, Abuja, Ibadan, or Remote"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
              Availability
            </label>
            <select
              className="form-control"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            >
              <option value="Weekends">Weekends Only</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Flexible">Flexible (4-8 hrs/week)</option>
              <option value="Full Outreaches">Event Days & Outreaches</option>
            </select>
          </div>
        </div>

        {/* Role Category Tabs */}
        <div style={{ margin: '16px 0 10px' }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 8 }}>
            Role Category Track *
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {Object.keys(roleOptions).map((cat) => (
              <button
                key={cat}
                type="button"
                className={`fund-btn ${formData.roleCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Specific Role */}
        <div className="form-group">
          <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
            Specific Preferred Role *
          </label>
          <select
            className="form-control"
            value={formData.specificRole}
            onChange={(e) => setFormData({ ...formData, specificRole: e.target.value })}
          >
            {roleOptions[formData.roleCategory].map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
            Relevant Skills / Background
          </label>
          <textarea
            className="form-control"
            placeholder="Tell us a little about your skills, past volunteer experience, or professional background..."
            rows={3}
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="btn btn-orange"
          style={{ width: '100%', marginTop: 8 }}
          disabled={isSubmitting}
        >
          <Send size={16} />
          {isSubmitting ? 'Submitting Application...' : 'Submit Volunteer Application'}
        </button>
      </form>
    </div>
  );
};
