import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import contactHeroImg from '../assets/contact-hero.jpg';
import servicesSubstationImg from '../assets/services-substation.jpg';
import projectRenewableImg from '../assets/project-renewable.jpg';
import projectSmartGridImg from '../assets/project-smart-grid.jpg';
import servicesCivilImg from '../assets/services-civil.jpg';
import servicesHeroImg from '../assets/services-hero.jpg';

import {
  HiArrowRight,
  HiOutlineBolt,
  HiOutlineCpuChip,
  HiOutlineSun,
  HiOutlineBuildingOffice2,
  HiOutlineDocumentCheck,
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiXMark,
  HiOutlineArrowTopRightOnSquare,
} from 'react-icons/hi2';
import { FiGithub, FiLayers, FiCheckSquare } from 'react-icons/fi';

const categories = [
  'All',
  'Transmission Lines',
  'Grid Substations',
  'Renewable Energy',
  'Distribution & Smart Grid',
  'Civil & Structural',
];

const projectsData = [
  {
    id: 1,
    title: 'Central Highlands 220kV Transmission Corridor & Line Routing',
    category: 'Transmission Lines',
    tagline: 'High-voltage line routing & PLS-CADD profiling through complex terrain',
    description:
      'Comprehensive route survey, PLS-CADD tower spotting, structural review, and environmental coordination for a 65km double-circuit 220kV transmission line across mountainous terrain.',
    image: contactHeroImg,
    location: 'Central Province, Sri Lanka',
    voltage: '220 kV Double Circuit',
    scope: 'Route Survey, PLS-CADD Spotting, Tower Design & Profile Drawings',
    technologies: ['PLS-CADD', 'Tower Spotting', 'GIS / LiDAR', 'AutoCAD', 'Primavera P6'],
    githubUrl: 'https://github.com/pic-consultants/transmission-line-sag-tension',
    challenge:
      'Navigating steep mountain slopes, heavy rainfall zones, and strict environmental buffer zones while ensuring optimal tower clearances and minimizing steel foundation costs.',
    solution:
      'Leveraged high-resolution LiDAR topographic modeling in PLS-CADD to optimize tower spans, customize tower extension legs, and avoid environmentally sensitive reserve corridors.',
    deliverables: [
      'Detailed Plan & Profile drawings for 65km corridor',
      'Tower spotting and sag-tension calculations',
      'Foundation loading schedules and spotting sheets',
      'Clearance verification reports under maximum operating temperatures',
    ],
  },
  {
    id: 2,
    title: 'Pannipitiya & Kotugoda 132/33kV Grid Substation Expansion',
    category: 'Grid Substations',
    tagline: 'Design review, protection coordination & equipment procurement submittals',
    description:
      'Independent engineering design review, short-circuit calculations, relay coordination, and procurement submittal evaluation for high-voltage GIS & AIS grid substations.',
    image: servicesSubstationImg,
    location: 'Western Province, Sri Lanka',
    voltage: '132/33 kV, 120 MVA',
    scope: 'Design Review, Protection Scheme Audit, Equipment Submittals',
    technologies: ['ETAP', 'DigSILENT PowerFactory', 'IEC 61850', 'AutoCAD Electrical', 'Vendor Document Review'],
    githubUrl: 'https://github.com/pic-consultants/substation-protection-calc',
    challenge:
      'Upgrading active grid substations with minimal outage windows while integrating modern IEC 61850 digital automation with existing legacy protection relays.',
    solution:
      'Conducted comprehensive fault level and coordination studies in ETAP and DigSILENT, validating vendor relay settings and streamlining factory inspection procedures.',
    deliverables: [
      'Comprehensive protection setting and coordination study',
      'Primary & Secondary SLDs and protection layout review',
      'Factory Acceptance Test (FAT) protocol review and verification',
      'As-built drawing reviews and commissioning support documentation',
    ],
  },
  {
    id: 3,
    title: '100MW Pooneryn Solar & Wind Hybrid Grid Interconnection',
    category: 'Renewable Energy',
    tagline: 'Grid impact study, BESS integration & 33/132kV step-up substation',
    description:
      'Grid impact assessment, steady-state dynamic stability studies, 33/132kV step-up substation design, and Battery Energy Storage System (BESS) integration modeling.',
    image: projectRenewableImg,
    location: 'Northern Province, Sri Lanka',
    voltage: '33/132 kV | 100 MW RE + 30 MWh BESS',
    scope: 'Grid Impact Study, Step-up Substation Design, BESS Sizing & Integration',
    technologies: ['DigSILENT PowerFactory', 'ETAP', 'PVsyst', 'BESS Modeling', 'Python (PyPSA)'],
    githubUrl: 'https://github.com/pic-consultants/renewable-grid-stability-model',
    challenge:
      'Mitigating voltage fluctuations and frequency stability issues introduced by high intermittent renewable penetration into the regional transmission network.',
    solution:
      'Designed dynamic reactive power compensation and sized a 30MWh BESS with fast-frequency response control algorithms to satisfy utility grid code compliance.',
    deliverables: [
      'Grid Code compliance & interconnection feasibility study',
      'Dynamic stability and harmonic distortion analysis',
      '33/132kV Collector Substation single line diagram & specifications',
      'BESS sizing and battery dispatch control architecture',
    ],
  },
  {
    id: 4,
    title: 'Colombo Metro Underground 33kV Smart Distribution Network',
    category: 'Distribution & Smart Grid',
    tagline: 'Underground ring network modernization & automated FLISR deployment',
    description:
      'Distribution network modernization, automated fault location, isolation & service restoration (FLISR), GIS asset database structuring, and SCADA control center integration.',
    image: projectSmartGridImg,
    location: 'Colombo Commercial Center, Sri Lanka',
    voltage: '33/11 kV Urban Underground',
    scope: 'FLISR Automation, Ring Main Unit Sizing, GIS Data Integration',
    technologies: ['SCADA / EMS', 'FLISR Automation', 'ArcGIS', 'Underground Cabling', 'ETAP Distribution'],
    githubUrl: 'https://github.com/pic-consultants/flisr-distribution-automation',
    challenge:
      'High urban population density and congested underground utility corridors requiring non-disruptive installation and automated self-healing power restoration.',
    solution:
      'Implemented automated motorized Ring Main Units with fiber-optic SCADA integration, allowing sub-second fault isolation and re-routing.',
    deliverables: [
      'Urban network topology optimization study',
      'FLISR logic diagrams and RTU communication architecture',
      'Underground cable duct bank and thermal rating analysis',
      'GIS-based electrical network asset database and mapping',
    ],
  },
  {
    id: 5,
    title: 'Southern Grid 132kV Substation Foundation & Heavy Civil Works',
    category: 'Civil & Structural',
    tagline: 'Heavy transformer foundations, seismic gantries & cable trench network',
    description:
      'Geotechnical site investigations, deep bored pile foundations for heavy power transformers, seismic structural gantry calculations, and drainage trench network design.',
    image: servicesCivilImg,
    location: 'Southern Province, Sri Lanka',
    voltage: 'Civil / Structural Infrastructure',
    scope: 'Foundation Design, Gantry Structural Analysis, Drainage Master Plan',
    technologies: ['STAAD.Pro', 'AutoCAD Civil 3D', 'Rebar Detailing', 'GeoStudio', 'BIM Modeling'],
    githubUrl: null,
    challenge:
      'Challenging soft clay ground conditions with high water tables requiring specialized foundation techniques to prevent differential settlement under 80-tonne transformers.',
    solution:
      'Engineered cast-in-situ bored piling with reinforced concrete cap beams, integrated with an oil containment bund and sustainable stormwater detention basin.',
    deliverables: [
      'Geotechnical investigation report and settlement calculations',
      'Structural calculation books for gantry towers and equipment supports',
      'Complete bar bending schedules and reinforced concrete drawings',
      'Site drainage and transformer oil separation system designs',
    ],
  },
  {
    id: 6,
    title: 'National Utility Transmission Procurement & Tender Advisory',
    category: 'Procurement & Advisory',
    tagline: 'Donor-funded tender specifications, lot packaging & bid evaluations',
    description:
      'Preparation of donor-funded (ADB/JICA) international competitive bidding documents, technical specifications for ACSR conductors and OPGW, and comparative bid evaluation.',
    image: servicesHeroImg,
    location: 'National Grid, Sri Lanka',
    voltage: 'Tender & Procurement Advisory',
    scope: 'Technical Specifications, Bid Evaluation, Vendor Pre-qualification',
    technologies: ['FIDIC Contracts', 'IEC Standards', 'Cost Engineering', 'Technical Specs', 'Risk Matrix'],
    githubUrl: null,
    challenge:
      'Aligning international donor procurement guidelines with local utility technical standards while ensuring fair competition and value for money.',
    solution:
      'Formulated clear performance-based technical specifications, rigorous non-compliance penalty clauses, and transparent multicriteria evaluation matrices.',
    deliverables: [
      'Standard Bidding Documents based on FIDIC / MDB guidelines',
      'Detailed Bill of Quantities (BOQ) and price schedule templates',
      'Technical and commercial bid evaluation reports with recommendations',
      'Contractor pre-qualification evaluation protocols',
    ],
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Transmission Lines':
        return <HiOutlineBolt size={14} />;
      case 'Grid Substations':
        return <HiOutlineCpuChip size={14} />;
      case 'Renewable Energy':
        return <HiOutlineSun size={14} />;
      case 'Distribution & Smart Grid':
        return <HiOutlineSparkles size={14} />;
      case 'Civil & Structural':
        return <HiOutlineBuildingOffice2 size={14} />;
      default:
        return <HiOutlineDocumentCheck size={14} />;
    }
  };

  return (
    <div className="projects-page">
      {/* ── Hero ── */}
      <section className="projects-hero">
        <img
          src={contactHeroImg}
          alt="Power transmission lines over mountains"
          className="projects-hero-bg"
        />
        <div className="projects-hero-overlay" />
        <div className="container projects-hero-container">
          <div className="projects-hero-content">
            <span className="projects-hero-badge">PROVEN TRACK RECORD</span>
            <h1 className="projects-hero-title">Featured Projects</h1>
            <p className="projects-hero-subtitle">
              Delivering dependable, buildable engineering solutions across transmission,
              substations, distribution networks, and renewable power infrastructure.
            </p>
            <div className="projects-hero-accent" />
          </div>

          <div className="projects-hero-tagline">
            INNOVATION &nbsp;|&nbsp; RELIABILITY &nbsp;|&nbsp; EXCELLENCE
          </div>
        </div>
      </section>

      {/* ── Main Showcase Section ── */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-header-wrapper">
            <div>
              <div className="section-label" />
              <h2 className="projects-section-title">Engineering Project Portfolio</h2>
              <p className="projects-section-desc">
                Explore our recent consultancy, design, review, and project management engagements.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="projects-filter-bar" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab-btn${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((proj) => (
              <div className="project-card" key={proj.id}>
                <div className="project-card-image-wrap">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="project-card-image"
                    loading="lazy"
                  />
                  <div className="project-card-category-badge">
                    {getCategoryIcon(proj.category)}
                    <span>{proj.category}</span>
                  </div>
                </div>

                <div className="project-card-body">
                  <div className="project-meta-location">
                    <HiOutlineMapPin size={14} className="meta-pin-icon" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-tagline">{proj.tagline}</p>
                  <p className="project-card-description">{proj.description}</p>

                  {/* Technologies / Tools Tags */}
                  <div className="project-tech-stack">
                    <span className="tech-stack-label">
                      <FiLayers size={12} /> Tech &amp; Standards:
                    </span>
                    <div className="tech-tags-list">
                      {proj.technologies.map((tech) => (
                        <span className="tech-tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="project-card-actions">
                    <button
                      type="button"
                      className="btn-view-project"
                      onClick={() => setSelectedProject(proj)}
                    >
                      View Project <HiArrowRight size={15} />
                    </button>

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                        aria-label={`View GitHub repository for ${proj.title}`}
                        title="View technical model repository"
                      >
                        <FiGithub size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Details Modal ── */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="project-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <HiXMark size={24} />
            </button>

            <div className="modal-header-image-wrap">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-header-image"
              />
              <div className="modal-header-overlay" />
              <div className="modal-header-badge">
                {getCategoryIcon(selectedProject.category)}
                <span>{selectedProject.category}</span>
              </div>
            </div>

            <div className="modal-content-body">
              <div className="modal-meta-bar">
                <span className="modal-meta-item">
                  <HiOutlineMapPin size={15} /> {selectedProject.location}
                </span>
                <span className="modal-meta-item">
                  <HiOutlineBolt size={15} /> {selectedProject.voltage}
                </span>
              </div>

              <h2 className="modal-project-title">{selectedProject.title}</h2>
              <p className="modal-project-tagline">{selectedProject.tagline}</p>

              <div className="modal-section-block">
                <h4 className="modal-section-title">Project Overview</h4>
                <p className="modal-text">{selectedProject.description}</p>
              </div>

              <div className="modal-two-col">
                <div className="modal-section-block">
                  <h4 className="modal-section-title">The Engineering Challenge</h4>
                  <p className="modal-text">{selectedProject.challenge}</p>
                </div>
                <div className="modal-section-block">
                  <h4 className="modal-section-title">PIC Technical Solution</h4>
                  <p className="modal-text">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-section-title">Key Deliverables &amp; Outcomes</h4>
                <ul className="modal-deliverables-list">
                  {selectedProject.deliverables.map((del, i) => (
                    <li key={i} className="modal-deliverable-item">
                      <HiCheckCircle size={18} className="deliverable-check" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-section-title">Tools, Software &amp; Frameworks</h4>
                <div className="tech-tags-list">
                  {selectedProject.technologies.map((t) => (
                    <span className="tech-tag modal-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-footer-actions">
                <Link
                  to="/contact"
                  className="btn-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  Inquire About Similar Projects <HiArrowRight />
                </Link>

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github-modal"
                  >
                    <FiGithub size={16} />
                    <span>View Repository</span>
                    <HiOutlineArrowTopRightOnSquare size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Call to Action Banner ── */}
      <section className="projects-cta-section">
        <div className="container projects-cta-inner">
          <div className="projects-cta-text">
            <h2 className="projects-cta-title">Have a power infrastructure project in mind?</h2>
            <p className="projects-cta-subtitle">
              Connect with our specialist engineering consultants to discuss your feasibility, design, or procurement requirements.
            </p>
          </div>
          <Link to="/contact" className="btn-primary projects-cta-btn">
            Discuss Your Project <HiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
