import {
  SurveyIcon,
  TowerIcon,
  CivilIcon,
  DistributionIcon,
  ReviewIcon,
  ConsultancyIcon,
} from './ServiceIcons';

const services = [
  {
    icon: <SurveyIcon />,
    title: 'Detailed Surveys & Line Profiles',
    desc: 'Accurate data and insights for informed design and planning.',
  },
  {
    icon: <TowerIcon />,
    title: 'Tower & Structural Design',
    desc: 'Safe, efficient and cost-effective designs for transmission infrastructure.',
  },
  {
    icon: <CivilIcon />,
    title: 'Civil & Foundation Design',
    desc: 'Engineered foundations and civil works for reliability and longevity.',
  },
  {
    icon: <DistributionIcon />,
    title: 'Distribution & Substation Design',
    desc: 'Practical, compliant designs for distribution networks and grid substations.',
  },
  {
    icon: <ReviewIcon />,
    title: 'Engineering Design Review',
    desc: 'Independent reviews to enhance quality, compliance and constructability.',
  },
  {
    icon: <ConsultancyIcon />,
    title: 'Project Implementation Consultancy',
    desc: 'Procurement, contractor coordination and project management support.',
  },
];

const CoreServices = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label" />
            <h2 className="services-title">Our Core Services</h2>
          </div>
          <p className="services-subtitle">
            From concept to completion, we provide end-to-end consultancy
            across the power infrastructure lifecycle.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
