import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const cards = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    label: 'For Clients',
    heading: 'Independent expertise for better outcomes.',
    text: 'Objective technical oversight, procurement support and project management to help you deliver safe, reliable and cost-effective power infrastructure.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    label: 'For Contractors',
    heading: 'Practical support to help you deliver.',
    text: 'Bid support, submittal reviews, coordination and delivery management to keep your projects on track.',
  },
];

const SupportSection = () => {
  return (
    <section className="support-section" id="about">
      <div className="container">
        <div className="section-label" />
        <h2 className="support-title">Support tailored to your role</h2>
        <div className="support-grid">
          {cards.map((card) => (
            <div className="support-card" key={card.label}>
              <img
                className="support-card-image"
                src={card.image}
                alt={card.label}
                loading="lazy"
              />
              <div className="support-card-content">
                <span className="support-card-label">{card.label}</span>
                <h3 className="support-card-heading">{card.heading}</h3>
                <p className="support-card-text">{card.text}</p>
                <Link to="/contact" className="learn-more-link">
                  <span className="learn-more-icon"><HiArrowRight size={16} /></span>
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
