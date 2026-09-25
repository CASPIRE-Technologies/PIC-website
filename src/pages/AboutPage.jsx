import { Link } from 'react-router-dom';
import './AboutPage.css';
import { HiArrowRight } from 'react-icons/hi';
import {
  HiOutlineRocketLaunch,
  HiOutlineEye,
  HiOutlineHandRaised,
  HiOutlineCpuChip,
  HiOutlineMapPin,
  HiOutlineGlobeAlt,
  HiOutlineCheckBadge,
} from 'react-icons/hi2';
import {
  FiSearch,
  FiTool,
  FiUsers,
  FiSend,
} from 'react-icons/fi';
import { BsPeople, BsGear, BsTruck } from 'react-icons/bs';

/* ───── data ───── */

const purposeCards = [
  {
    icon: <HiOutlineRocketLaunch size={26} />,
    title: 'Mission',
    desc: 'Deliver practical, reliable and buildable engineering solutions.',
  },
  {
    icon: <HiOutlineEye size={26} />,
    title: 'Vision',
    desc: 'Support stronger, safer and more resilient power networks.',
  },
  {
    icon: <HiOutlineHandRaised size={26} />,
    title: 'Commitment',
    desc: 'Work with clarity, integrity and close coordination.',
  },
];

const definesCards = [
  {
    icon: <HiOutlineCpuChip size={24} />,
    title: 'Technical Depth',
    desc: 'Deep engineering knowledge across transmission, distribution and substation systems.',
  },
  {
    icon: <HiOutlineMapPin size={24} />,
    title: 'Local Understanding',
    desc: "Solutions grounded in Sri Lanka's terrain, utilities and regulatory context.",
  },
  {
    icon: <HiOutlineGlobeAlt size={24} />,
    title: 'Independent Perspective',
    desc: 'Objective advice focused on what works best for our clients.',
  },
  {
    icon: <HiOutlineCheckBadge size={24} />,
    title: 'Delivery Focus',
    desc: 'From concept to completion, we keep projects on track and deliver lasting value.',
  },
];

const expertiseAreas = [
  {
    title: 'Transmission Lines',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  },
  {
    title: 'Distribution Networks',
    image: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=600&q=80',
  },
  {
    title: 'Grid Substations',
    image: 'https://images.unsplash.com/photo-1548604856-0802e0b3b1d5?w=600&q=80',
  },
  {
    title: 'Civil & Structural Infrastructure',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
];

const approachSteps = [
  {
    num: 1,
    icon: <FiSearch size={24} />,
    title: 'Understand',
    desc: 'We learn client objectives and assess requirements.',
  },
  {
    num: 2,
    icon: <FiTool size={24} />,
    title: 'Develop',
    desc: 'We create tailored, practical solutions.',
  },
  {
    num: 3,
    icon: <FiUsers size={24} />,
    title: 'Coordinate',
    desc: 'We align stakeholders and manage interfaces.',
  },
  {
    num: 4,
    icon: <FiSend size={24} />,
    title: 'Deliver',
    desc: 'We support implementation through to successful handover.',
  },
];

const specialistCards = [
  {
    icon: <BsPeople size={28} />,
    title: 'Leadership',
    desc: 'Profiles to be added.',
  },
  {
    icon: <BsGear size={28} />,
    title: 'Engineering Specialists',
    desc: 'Profiles to be added.',
  },
  {
    icon: <BsTruck size={28} />,
    title: 'Project Delivery',
    desc: 'Profiles to be added.',
  },
];

/* ───── component ───── */

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* ── Hero ── */}
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
          alt="PIC engineering team"
          className="about-hero-bg"
        />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <h1 className="about-hero-title">About PIC</h1>
          <p className="about-hero-subtitle">
            Independent engineering expertise<br />
            for dependable power infrastructure.
          </p>
        </div>
      </section>

      {/* ── Engineering section ── */}
      <section className="about-engineering">
        <div className="container about-engineering-inner">
          <div className="about-engineering-text">
            <div className="section-label" />
            <h2 className="about-section-title">
              Engineering built around<br />practical delivery
            </h2>
            <p className="about-body-text">
              Power Infrastructure Consultants (Pvt) Ltd (PIC) provides
              independent consultancy, design, review, procurement support,
              project management and implementation support for
              transmission lines, distribution networks, grid substations
              and associated civil infrastructure.
            </p>
            <p className="about-body-text">
              We combine technical expertise with a clear understanding
              of local conditions to deliver practical, buildable and
              sustainable solutions. Our focus is on working collaboratively
              with clients and stakeholders to turn complex requirements
              into reliable infrastructure.
            </p>
          </div>
          <div className="about-engineering-image">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Engineering team reviewing plans"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Our Purpose ── */}
      <section className="about-purpose">
        <div className="container">
          <div className="section-label" />
          <h2 className="about-section-title">Our Purpose</h2>
          <div className="about-purpose-grid">
            {purposeCards.map((c) => (
              <div className="about-purpose-card" key={c.title}>
                <div className="about-purpose-icon">{c.icon}</div>
                <h3 className="about-purpose-card-title">{c.title}</h3>
                <p className="about-purpose-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Defines Us ── */}
      <section className="about-defines">
        <div className="container">
          <div className="section-label" />
          <h2 className="about-section-title">What Defines Us</h2>
          <div className="about-defines-grid">
            {definesCards.map((c) => (
              <div className="about-defines-card" key={c.title}>
                <div className="about-defines-icon">{c.icon}</div>
                <h3 className="about-defines-card-title">{c.title}</h3>
                <p className="about-defines-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Areas of Expertise ── */}
      <section className="about-expertise">
        <div className="container">
          <div className="section-label" />
          <h2 className="about-section-title">Our Areas of Expertise</h2>
          <div className="about-expertise-grid">
            {expertiseAreas.map((a) => (
              <div className="about-expertise-card" key={a.title}>
                <img src={a.image} alt={a.title} loading="lazy" />
                <span className="about-expertise-label">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="about-approach">
        <div className="container">
          <div className="about-approach-header">
            <div>
              <div className="section-label" />
              <h2 className="about-section-title">Our Approach</h2>
            </div>
            <p className="about-approach-subtitle">
              A collaborative and transparent approach, focused on delivering
              practical solutions and lasting value.
            </p>
          </div>
          <div className="about-approach-grid">
            {approachSteps.map((s) => (
              <div className="about-approach-step" key={s.num}>
                <div className="about-approach-num">{s.num}</div>
                <div className="about-approach-icon">{s.icon}</div>
                <h3 className="about-approach-step-title">{s.title}</h3>
                <p className="about-approach-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialist expertise ── */}
      <section className="about-specialists">
        <div className="container">
          <div className="section-label" />
          <h2 className="about-section-title">Specialist expertise, brought together</h2>
          <div className="about-specialists-grid">
            {specialistCards.map((c) => (
              <div className="about-specialist-card" key={c.title}>
                <div className="about-specialist-icon">{c.icon}</div>
                <h3 className="about-specialist-title">{c.title}</h3>
                <p className="about-specialist-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local understanding CTA ── */}
      <section className="about-local-cta">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
          alt="Sri Lanka power infrastructure"
          className="about-local-bg"
        />
        <div className="about-local-overlay" />
        <div className="container about-local-content">
          <h2 className="about-local-title">
            Local understanding.<br />
            International engineering<br />
            <span>perspective.</span>
          </h2>
          <p className="about-local-text">
            Combining in-depth local knowledge with<br />
            international engineering practice.
          </p>
        </div>
      </section>

      {/* ── Discuss project CTA ── */}
      <section className="about-discuss">
        <div className="container about-discuss-inner">
          <div>
            <h2 className="about-discuss-title">Let's discuss your project</h2>
            <p className="about-discuss-text">
              Independent advice. Practical solutions. Stronger power networks.
            </p>
          </div>
          <Link to="/contact" className="btn-primary about-discuss-btn">
            Contact PIC <HiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
