import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { STUDIO_INFO, SOCIAL_LINKS } from '../../data/navigation';
import './Contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Estate',
    location: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact telephone is required for commission verification.';
    if (!formData.location.trim()) newErrors.location = 'Project site location is required (e.g. Palm Jumeirah, Dubai).';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide details regarding your architectural brief (min 15 characters).';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real-world commission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential Estate',
        location: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* 1. HERO */}
      <section className="contact-hero section-spacing-top">
        <div className="container">
          <span className="section-label">COMMISSIONS & INQUIRIES</span>
          <h1 className="contact-headline">
            Initiate a Private Dialogue.<br />
            <em>Discreet consultation with studio principals.</em>
          </h1>
          <p className="lead" style={{ maxWidth: '800px', marginTop: '1.5rem', marginBottom: '4rem' }}>
            We accept a limited number of residential estates, commercial monuments, and masterplanning commissions annually. Our leadership personally reviews every prospective brief.
          </p>
        </div>
      </section>

      {/* 2. FORM & STUDIO DETAILS GRID */}
      <section className="contact-main-section section-spacing-bottom">
        <div className="container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="contact-form-col">
              <div className="form-card">
                <span className="mono-meta form-tag">PROJECT BRIEFING PROTOCOL</span>
                <h2 className="form-title">Confidential Project Inquiry</h2>

                {isSubmitted ? (
                  <div className="form-success-banner" role="alert">
                    <CheckCircle size={32} color="var(--color-success)" />
                    <div>
                      <h3>Commission Brief Received</h3>
                      <p>
                        Thank you for considering ARCHITECH. A partner will review your inquiry and initiate contact within 24 business hours to discuss feasibility and scheduling.
                      </p>
                      <button
                        type="button"
                        className="btn-secondary"
                        style={{ marginTop: '1.5rem' }}
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="commission-form">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label mono-meta">FULL NAME / PATRON *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Sheikh Sultan or Jonathan Sterling"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    {/* Email & Phone */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label mono-meta">EMAIL ADDRESS *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="client@domain.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'input-error' : ''}`}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone" className="form-label mono-meta">TELEPHONE / MOBILE *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+971 50 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-input ${errors.phone ? 'input-error' : ''}`}
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Project Type & Location */}
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="projectType" className="form-label mono-meta">COMMISSION TYPE</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="Residential Estate">Ultra-Luxury Residential Estate</option>
                          <option value="Waterfront Villa">Private Waterfront Villa</option>
                          <option value="Commercial Landmark">Commercial Headquarters / Tower</option>
                          <option value="Hospitality Resort">Hospitality / Eco-Resort</option>
                          <option value="Masterplanning">Masterplanning / Private Island</option>
                          <option value="Interior Architecture">Bespoke Interior Architecture</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="location" className="form-label mono-meta">PROJECT LOCATION *</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          placeholder="e.g. Palm Jumeirah, Emirates Hills, Abu Dhabi"
                          value={formData.location}
                          onChange={handleChange}
                          className={`form-input ${errors.location ? 'input-error' : ''}`}
                        />
                        {errors.location && <span className="error-text">{errors.location}</span>}
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div className="form-group">
                      <label htmlFor="budget" className="form-label mono-meta">ESTIMATED CAPITAL INVESTMENT (OPTIONAL)</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select an investment bracket</option>
                        <option value="AED 25M - 50M">AED 25M – 50M ($7M – $14M USD)</option>
                        <option value="AED 50M - 100M">AED 50M – 100M ($14M – $27M USD)</option>
                        <option value="AED 100M+">AED 100M+ ($27M+ USD)</option>
                        <option value="Confidential">Confidential / To Be Determined</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label mono-meta">COMMISSION BRIEF & VISION *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Please describe the site context, architectural ambitions, scale, and timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      />
                      {errors.message && <span className="error-text">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary form-submit-btn"
                    >
                      <span>{isSubmitting ? 'Transmitting Brief...' : 'Transmit Commission Inquiry'}</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Studio Info Sidebar */}
            <div className="contact-info-col">
              <div className="studio-location-card">
                <span className="mono-meta" style={{ color: 'var(--color-dune-gold-dark)' }}>DUBAI ATELIER</span>
                <h3>DIFC Gate Precinct</h3>
                <p className="location-detail">
                  {STUDIO_INFO.location}
                </p>

                <div className="contact-details-list">
                  <div className="contact-detail-row">
                    <Phone size={18} color="var(--color-dune-gold-dark)" />
                    <div>
                      <span className="mono-meta">DIRECT ATELIER LINE</span>
                      <a href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, '')}`}>{STUDIO_INFO.phone}</a>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <Mail size={18} color="var(--color-dune-gold-dark)" />
                    <div>
                      <span className="mono-meta">COMMISSIONS & GENERAL</span>
                      <a href={`mailto:${STUDIO_INFO.inquiriesEmail}`}>{STUDIO_INFO.inquiriesEmail}</a>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <Clock size={18} color="var(--color-dune-gold-dark)" />
                    <div>
                      <span className="mono-meta">OFFICE HOURS</span>
                      <p>{STUDIO_INFO.workingHours}</p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <MapPin size={18} color="var(--color-dune-gold-dark)" />
                    <div>
                      <span className="mono-meta">COORDINATES</span>
                      <p>{STUDIO_INFO.coordinates}</p>
                    </div>
                  </div>
                </div>

                <div className="interactive-map-placeholder">
                  <div className="map-inner">
                    <span className="mono-meta">MAP OVERVIEW &bull; DIFC GATE PRECINCT 4</span>
                    <h4>ARCHITECH Headquarters</h4>
                    <p>Valet parking and private helipad transfer coordination available upon request.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
