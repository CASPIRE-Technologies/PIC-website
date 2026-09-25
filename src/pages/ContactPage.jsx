import { useState } from 'react';
import './ContactPage.css';
import contactHeroImg from '../assets/contact-hero.jpg';
import contactEngineersImg from '../assets/contact-engineers.jpg';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineLockClosed,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiArrowRight,
  HiCheckCircle,
} from 'react-icons/hi2';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectLocation: '',
    serviceInterest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      projectLocation: '',
      serviceInterest: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* ── Hero ── */}
      <section className="contact-hero">
        <img
          src={contactHeroImg}
          alt="Power transmission line in mountains"
          className="contact-hero-bg"
        />
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-subtitle">
              Let's discuss your power infrastructure project.
            </p>
            <div className="contact-hero-accent" />
          </div>
          <div className="contact-hero-tagline">
            PEOPLE &nbsp;|&nbsp; EXPERTISE &nbsp;|&nbsp; A STRONGER TOMORROW
          </div>
        </div>
      </section>

      {/* ── Main Content Form & Info ── */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Form */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Send an Inquiry</h2>
                <p className="contact-form-desc">
                  Tell us about your project and our team will get back to you.
                </p>
              </div>

              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <HiCheckCircle size={56} className="success-icon" />
                  </div>
                  <h3 className="success-title">Thank You for Reaching Out!</h3>
                  <p className="success-desc">
                    Your inquiry has been received successfully. A PIC engineering specialist will review your requirements and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-primary success-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullName">
                        Full Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-input"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="projectLocation">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      className="form-input"
                      placeholder="e.g. District, Province or Country"
                      value={formData.projectLocation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="serviceInterest">
                      Service of Interest <span className="required-star">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        className="form-select"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Survey & Planning">Survey &amp; Planning</option>
                        <option value="Engineering Design">Engineering Design</option>
                        <option value="Design Review">Design Review</option>
                        <option value="Procurement Support">Procurement Support</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Project Implementation">Project Implementation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Your Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-textarea"
                      placeholder="Tell us about your project, requirements or any questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                  </button>

                  <div className="form-security-note">
                    <HiOutlineLockClosed className="security-icon" size={15} />
                    <span>We'll use your details to respond to your inquiry.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Info & Process */}
            <div className="contact-info-col">
              {/* Speak with PIC Card */}
              <div className="contact-info-card">
                <h2 className="contact-info-title">Speak with PIC</h2>
                <p className="contact-info-desc">
                  We're here to learn about your needs and explore how we can support your power infrastructure goals. Reach out through the channels below or send us your inquiry using the form.
                </p>

                <div className="contact-channels-list">
                  <div className="contact-channel-item">
                    <div className="channel-icon-wrapper" aria-hidden="true">
                      <HiOutlineEnvelope size={22} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Email</span>
                      <span className="channel-value">To be added</span>
                    </div>
                  </div>

                  <div className="contact-channel-item">
                    <div className="channel-icon-wrapper" aria-hidden="true">
                      <HiOutlinePhone size={22} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Phone</span>
                      <span className="channel-value">To be added</span>
                    </div>
                  </div>

                  <div className="contact-channel-item">
                    <div className="channel-icon-wrapper" aria-hidden="true">
                      <HiOutlineMapPin size={22} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Office address</span>
                      <span className="channel-value">To be added</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next Card */}
              <div className="contact-process-card">
                <h3 className="process-card-title">What happens next</h3>
                <p className="process-card-subtitle">
                  A simple and straightforward process.
                </p>

                <div className="process-steps-diagram">
                  <div className="process-diagram-step">
                    <div className="step-icon-bubble">
                      <HiOutlineDocumentText size={22} />
                    </div>
                    <span className="step-title-text">1. Share requirements</span>
                  </div>

                  <div className="process-diagram-arrow" aria-hidden="true">
                    <HiArrowRight size={18} />
                  </div>

                  <div className="process-diagram-step">
                    <div className="step-icon-bubble">
                      <HiOutlineUserGroup size={22} />
                    </div>
                    <span className="step-title-text">2. We review your needs</span>
                  </div>

                  <div className="process-diagram-arrow" aria-hidden="true">
                    <HiArrowRight size={18} />
                  </div>

                  <div className="process-diagram-step">
                    <div className="step-icon-bubble">
                      <HiOutlineEnvelope size={22} />
                    </div>
                    <span className="step-title-text">3. We respond</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Engineers Banner ── */}
      <section className="contact-bottom-banner">
        <img
          src={contactEngineersImg}
          alt="PIC Engineers overlooking substation"
          className="contact-bottom-img"
          loading="lazy"
        />
        <div className="contact-bottom-overlay" />
        <div className="container contact-bottom-container">
          <div className="contact-bottom-content">
            <h3 className="bottom-banner-text">
              Engineering support for transmission, distribution and substations.
            </h3>
            <div className="bottom-banner-accent" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
