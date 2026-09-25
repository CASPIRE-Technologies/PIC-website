import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const CTABanner = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg-pattern" />
      <div className="container">
        <div className="cta-content">
          <div>
            <h2 className="cta-title">
              Let's build stronger<br />power networks.
            </h2>
            <Link to="/contact" className="cta-button">
              Contact PIC <HiArrowRight />
            </Link>
          </div>
          <p className="cta-tagline">
            Reliable power.<br />
            Brighter possibilities<br />
            for Sri Lanka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
