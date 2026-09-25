import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img
        src={heroBg}
        alt="Power transmission infrastructure"
        className="hero-bg"
      />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Engineering<br />
            dependable power<br />
            <span>infrastructure.</span>
          </h1>
          <p className="hero-description">
            Consultancy, design and project management
            for transmission lines, distribution networks,
            grid substations and associated civil works.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Explore Our Services <HiArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
