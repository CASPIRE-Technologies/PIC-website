import { Link } from 'react-router-dom';
import PicLogo from './PicLogo';
import { HiArrowRight } from 'react-icons/hi';
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';
import './Footer.css';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Transmission', to: '/services' },
  { label: 'Distribution', to: '/services' },
  { label: 'Substations', to: '/services' },
  { label: 'Civil Infrastructure', to: '/services' },
  { label: 'Power Infrastructure Consulting', to: '/services' },
];

const contactItems = [
  {
    icon: <HiOutlineMapPin size={17} />,
    label: 'Location',
    value: 'Sri Lanka',
  },
  {
    icon: <HiOutlinePhone size={17} />,
    label: 'Phone',
    value: 'To be added',
  },
  {
    icon: <HiOutlineEnvelope size={17} />,
    label: 'Email',
    value: 'To be added',
  },
  {
    icon: <HiOutlineBuildingOffice2 size={17} />,
    label: 'Office Address',
    value: 'To be added',
  },
];

const Footer = () => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-inner-wrap">
          {/* ── Highlighted CTA Area ── */}
          <div className="footer-cta-card">
            <div className="footer-cta-content">
              <h3 className="footer-cta-title">Have a Power Infrastructure Project?</h3>
              <p className="footer-cta-desc">
                Let's discuss how we can support your project.
              </p>
            </div>
            <Link to="/contact" className="footer-cta-btn">
              Get in Touch <HiArrowRight />
            </Link>
          </div>

          {/* ── 4-Column Main Grid ── */}
          <div className="footer-main-grid">
            {/* Column 1: Company */}
            <div className="footer-col footer-col-company">
              <Link to="/" className="footer-logo-link" aria-label="PIC Home">
                <div className="logo-brand">
                  <div className="logo-main-row">
                    <div className="logo-icon-wrap" style={{ width: 34, height: 30 }}>
                      <PicLogo className="logo-icon" />
                    </div>
                    <span className="logo-title" style={{ fontSize: 26 }}>
                      <span className="logo-title-pi">PI</span>
                      <span className="logo-title-c">C</span>
                    </span>
                  </div>
                  <div className="logo-sub-block">
                    <span className="logo-sub-main" style={{ fontSize: '7.5px' }}>POWER INFRASTRUCTURE</span>
                    <span className="logo-sub-tag" style={{ fontSize: '6.5px' }}>CONSULTANTS (PVT) LTD</span>
                  </div>
                </div>
              </Link>

              <h4 className="footer-company-name">Power Infrastructure Consultants (Pvt) Ltd</h4>
              <p className="footer-company-desc">
                Delivering practical and reliable power infrastructure solutions across Sri Lanka, with a focus on quality, safety and long-term value.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer-nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h3 className="footer-col-title">Our Services</h3>
              <ul className="footer-links-list">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link to={service.to} className="footer-nav-link">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-col">
              <h3 className="footer-col-title">Get In Touch</h3>
              <ul className="footer-contact-list">
                {contactItems.map((item) => (
                  <li className="footer-contact-item" key={item.label}>
                    <div className="footer-contact-icon-wrap" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className="footer-contact-details">
                      <span className="footer-contact-label">{item.label}</span>
                      <span className="footer-contact-value">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Bottom Copyright Bar ── */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              &copy; 2026 Power Infrastructure Consultants (Pvt) Ltd. All rights reserved.
            </p>
            <p className="footer-services-tagline">
              Transmission &bull; Distribution &bull; Substations &bull; Civil Infrastructure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
