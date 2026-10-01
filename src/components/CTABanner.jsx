import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import heroBg from '../assets/hero-bg.jpg';

const CTABanner = () => {
  return (
    <section className="cta-section" id="contact">
      <img src={heroBg} alt="Power transmission infrastructure" className="cta-bg-image" />
      <div className="cta-overlay" />
      <div className="container">
        <div className="cta-content">
          <div className="cta-left">
            <h2 className="cta-title">Contact Us</h2>
            <p className="cta-subtitle">Let's discuss your power<br />infrastructure project.</p>
            <div className="cta-accent-bar" />
          </div>
          <p className="cta-tagline">
            PEOPLE&nbsp;&nbsp;|&nbsp;&nbsp;EXPERTISE&nbsp;&nbsp;|&nbsp;&nbsp;A STRONGER TOMORROW
          </p>
        </div>
      </div>
      <Link to="/contact" className="cta-overlay-link" aria-label="Contact Us" />
    </section>
  );
};

export default CTABanner;
