import { Link, useLocation } from 'react-router-dom';
import PicLogo from './PicLogo';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  const location = useLocation();

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to.split('#')[0]) && to.split('#')[0] !== '/';
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <Link to="/" className="footer-logo" aria-label="PIC Home">
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

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map(link => {
              if (link.to.startsWith('/#')) {
                if (location.pathname === '/') {
                  return (
                    <a
                      key={link.label}
                      href={link.to.replace('/', '')}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`footer-link${isActive(link.to) ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="footer-services">
            Transmission &bull; Distribution &bull; Substations &bull; Civil Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
