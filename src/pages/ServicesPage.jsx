import { Link } from 'react-router-dom';
import './ServicesPage.css';
import servicesHeroImg from '../assets/services-hero.jpg';
import servicesTransmissionImg from '../assets/services-transmission.jpg';
import servicesSubstationImg from '../assets/services-substation.jpg';
import servicesCivilImg from '../assets/services-civil.jpg';
import contactHeroImg from '../assets/contact-hero.jpg';

import {
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
  HiOutlineMagnifyingGlass,
  HiOutlineDocumentCheck,
  HiOutlineCube,
  HiOutlineClipboardDocumentList,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineCpuChip,
  HiOutlineBuildingOffice2,
  HiArrowRight,
} from 'react-icons/hi2';

const clientServices = [
  {
    icon: <HiOutlineDocumentText size={20} />,
    title: 'Procurement Strategy & Packaging',
    desc: 'Advice on procurement approach, lotting and packaging strategies aligned with project objectives and delivery plans.',
  },
  {
    icon: <HiOutlineCog6Tooth size={20} />,
    title: 'Technical Specifications',
    desc: 'Development and review of performance-based technical specifications for equipment, materials and services.',
  },
  {
    icon: <HiOutlineMagnifyingGlass size={20} />,
    title: 'Tender Evaluation',
    desc: 'Technical evaluation of bids, including compliance assessment and comparative analysis.',
  },
  {
    icon: <HiOutlineDocumentCheck size={20} />,
    title: 'Vendor Document Review',
    desc: 'Review of vendor technical documents, drawings, test reports and quality plans.',
  },
];

const contractorServices = [
  {
    icon: <HiOutlineDocumentText size={20} />,
    title: 'Bid Technical Support',
    desc: 'Assistance in interpreting requirements, developing technical responses and identifying clarifications.',
  },
  {
    icon: <HiOutlineCube size={20} />,
    title: 'Supplier & Material Evaluation',
    desc: 'Technical assessment of proposed suppliers, materials and equipment against project requirements.',
  },
  {
    icon: <HiOutlineClipboardDocumentList size={20} />,
    title: 'Technical Submittals',
    desc: 'Preparation and review of technical submittals, method statements and compliance documentation.',
  },
  {
    icon: <HiOutlineCheckCircle size={20} />,
    title: 'Clarifications & Compliance Tracking',
    desc: 'Support in managing employer clarifications and tracking compliance during the procurement process.',
  },
];

const approachSteps = [
  {
    stepNum: '1',
    icon: <HiOutlineDocumentText size={22} />,
    title: '1. Define requirements',
    desc: 'Understand technical, commercial and project requirements.',
  },
  {
    stepNum: '2',
    icon: <HiOutlineCog6Tooth size={22} />,
    title: '2. Prepare documents',
    desc: 'Develop specifications and evaluation criteria.',
  },
  {
    stepNum: '3',
    icon: <HiOutlineUserGroup size={22} />,
    title: '3. Evaluate submissions',
    desc: 'Assess bids and support selection.',
  },
  {
    stepNum: '4',
    icon: <HiOutlineDocumentCheck size={22} />,
    title: '4. Review deliverables',
    desc: 'Review vendor documents after award.',
  },
];

const infrastructureCategories = [
  {
    title: 'Transmission Line Materials',
    desc: 'Conductors, towers, insulators, fittings and associated hardware.',
    image: servicesTransmissionImg,
    icon: <HiOutlineBolt size={24} />,
  },
  {
    title: 'Substation Equipment',
    desc: 'Transformers, switchgear, protection & control, auxiliaries and associated systems.',
    image: servicesSubstationImg,
    icon: <HiOutlineCpuChip size={24} />,
  },
  {
    title: 'Civil & Structural Works',
    desc: 'Foundations, buildings, cable trenches, drainage and support structures.',
    image: servicesCivilImg,
    icon: <HiOutlineBuildingOffice2 size={24} />,
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* ── Hero Section ── */}
      <section className="services-hero">
        <div className="container services-hero-container">
          <div className="services-hero-content">
            <span className="services-hero-badge">OUR SERVICES</span>
            <h1 className="services-hero-title">Procurement Support</h1>
            <p className="services-hero-tagline">
              Technical procurement advice for power infrastructure projects.
            </p>
            <p className="services-hero-desc">
              We provide independent, practical and technically sound procurement support
              to help clients and contractors obtain the right equipment, materials and
              services for power infrastructure projects.
            </p>
            <p className="services-hero-disclaimer">
              Engagement scope and independence are agreed for each assignment.
            </p>
          </div>

          <div className="services-hero-image-wrap">
            <img
              src={servicesHeroImg}
              alt="PIC engineering team reviewing technical procurement documents"
              className="services-hero-image"
            />
          </div>
        </div>
      </section>

      {/* ── Tailored Support Section ── */}
      <section className="services-tailored-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle-badge">TAILORED SUPPORT</span>
            <h2 className="section-main-heading">Support tailored to your role</h2>
          </div>

          <div className="tailored-grid">
            {/* For Clients Card */}
            <div className="tailored-card">
              <div className="tailored-card-header">
                <div className="tailored-header-icon">
                  <HiOutlineUserGroup size={26} />
                </div>
                <div>
                  <h3 className="tailored-header-title">For Clients</h3>
                  <p className="tailored-header-subtitle">
                    We help you procure the right solutions through robust technical advice and structured processes.
                  </p>
                </div>
              </div>

              <div className="tailored-items-list">
                {clientServices.map((item, idx) => (
                  <div className="tailored-item" key={idx}>
                    <div className="tailored-item-icon">{item.icon}</div>
                    <div className="tailored-item-content">
                      <h4 className="tailored-item-title">{item.title}</h4>
                      <p className="tailored-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Contractors Card */}
            <div className="tailored-card">
              <div className="tailored-card-header">
                <div className="tailored-header-icon">
                  <HiOutlineShieldCheck size={26} />
                </div>
                <div>
                  <h3 className="tailored-header-title">For Contractors</h3>
                  <p className="tailored-header-subtitle">
                    We support your bidding and procurement activities with practical, technical expertise.
                  </p>
                </div>
              </div>

              <div className="tailored-items-list">
                {contractorServices.map((item, idx) => (
                  <div className="tailored-item" key={idx}>
                    <div className="tailored-item-icon">{item.icon}</div>
                    <div className="tailored-item-content">
                      <h4 className="tailored-item-title">{item.title}</h4>
                      <p className="tailored-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach Section ── */}
      <section className="services-approach-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle-badge">OUR APPROACH</span>
            <h2 className="section-main-heading">A structured procurement support process</h2>
          </div>

          <div className="services-process-flow">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="process-flow-item-wrap">
                <div className="process-flow-step">
                  <div className="process-flow-icon-wrap">
                    {step.icon}
                  </div>
                  <h3 className="process-flow-title">{step.title}</h3>
                  <p className="process-flow-desc">{step.desc}</p>
                </div>

                {idx < approachSteps.length - 1 && (
                  <div className="process-flow-arrow" aria-hidden="true">
                    <HiArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Categories Section ── */}
      <section className="services-categories-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-subtitle-badge">KEY AREAS</span>
            <h2 className="section-main-heading">
              Procurement support across key infrastructure categories
            </h2>
          </div>

          <div className="categories-grid">
            {infrastructureCategories.map((cat, idx) => (
              <div className="category-card" key={idx}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="category-card-bg"
                  loading="lazy"
                />
                <div className="category-card-overlay" />
                <div className="category-card-content">
                  <div className="category-icon-wrap">{cat.icon}</div>
                  <div className="category-text-wrap">
                    <h3 className="category-card-title">{cat.title}</h3>
                    <p className="category-card-desc">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Discuss Procurement CTA Banner ── */}
      <section className="services-cta-section">
        <img
          src={contactHeroImg}
          alt="Power transmission landscape"
          className="services-cta-bg"
        />
        <div className="services-cta-overlay" />
        <div className="container services-cta-container">
          <div className="services-cta-left">
            <h2 className="services-cta-title">Discuss your procurement needs</h2>
            <p className="services-cta-subtitle">
              Let's talk about how we can support your next power infrastructure project.
            </p>
          </div>

          <div className="services-cta-action">
            <Link to="/contact" className="services-cta-btn">
              Get in Touch <HiArrowRight />
            </Link>
          </div>

          <div className="services-cta-tagline">
            ENGINEERING<br />FOR A STRONGER<br />TOMORROW
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
