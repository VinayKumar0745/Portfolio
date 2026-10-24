import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please write a brief message.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ state: 'submitting', message: 'Preparing message...' });

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Vinay,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open default email client
    window.location.href = mailtoUrl;

    setStatus({
      state: 'success',
      message: `Your default email client has been opened with your inquiry prepared for ${profileData.email}. You can also reach out directly via LinkedIn.`
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-form-card" aria-labelledby="form-heading">
      <h3 id="form-heading" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
        Send an Inquiry
      </h3>

      {status.state === 'success' && (
        <div className="form-notice-box success" role="alert">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', fontWeight: 600 }}>
            <CheckCircle2 size={16} /> Ready in Email Client
          </div>
          {status.message}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Your Name <span>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            placeholder="e.g. Jane Doe"
            value={formData.name}
            onChange={handleChange}
            disabled={status.state === 'submitting'}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <span id="name-error" className="field-error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email Address <span>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            placeholder="e.g. jane@company.com"
            value={formData.email}
            onChange={handleChange}
            disabled={status.state === 'submitting'}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <span id="email-error" className="field-error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-subject" className="form-label">
            Subject <span>*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            className={`form-input ${errors.subject ? 'input-error' : ''}`}
            placeholder="e.g. Frontend Developer Role / Interview Invitation"
            value={formData.subject}
            onChange={handleChange}
            disabled={status.state === 'submitting'}
            aria-required="true"
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && <span id="subject-error" className="field-error-text">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">
            Message <span>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
            placeholder="Brief description of the opportunity or message..."
            value={formData.message}
            onChange={handleChange}
            disabled={status.state === 'submitting'}
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <span id="message-error" className="field-error-text">{errors.message}</span>}
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={status.state === 'submitting'}
        >
          <Send size={15} />
          <span>{status.state === 'submitting' ? 'Opening...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
}
