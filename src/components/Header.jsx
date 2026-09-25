import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PicLogo from './PicLogo';
import { HiArrowRight } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to.split('#')[0]) && to.split('#')[0] !== '/';
  };

  const handleNavClick = (to) => {
    setMobileOpen(false);
    // If we're navigating to a hash on the home page and we're already on home
    if (to.startsWith('/#') && location.pathname === '/') {
      const hash = to.replace('/', '');
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavLink = (link) => {
    // If it's a hash link to the homepage
    if (link.to.startsWith('/#')) {
      if (location.pathname === '/') {
        return (
          <a
            key={link.label}
            href={link.to.replace('/', '')}
            className={`nav-link`}
            onClick={() => handleNavClick(link.to)}
          >
            {link.label}
          </a>
        );
      }
      return (
        <Link
          key={link.label}
          to={link.to}
          className={`nav-link`}
          onClick={() => setMobileOpen(false)}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.to}
        className={`nav-link${isActive(link.to) ? ' active' : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="PIC Home">
          <PicLogo size={48} />
          <div className="logo-text">
            <span className="logo-title">PIC</span>
            <span className="logo-subtitle">Power Infrastructure<br />Consultants (PVT) LTD</span>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map(renderNavLink)}
        </nav>

        <Link to="/contact" className="nav-cta">
          Get in Touch <HiArrowRight />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <IoClose size={28} />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </div>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(renderNavLink)}
        <Link to="/contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
          Get in Touch <HiArrowRight />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
