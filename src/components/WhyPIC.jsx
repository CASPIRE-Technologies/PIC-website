import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { GoShieldCheck } from 'react-icons/go';
import { BsChatDots } from 'react-icons/bs';

const reasons = [
  {
    icon: <IoSettingsOutline size={22} />,
    title: 'Technical Expertise',
    desc: 'Deep knowledge across transmission, distribution and substation systems.',
  },
  {
    icon: <GoShieldCheck size={22} />,
    title: 'Practical Site Focus',
    desc: 'Solutions grounded in real-world constructability and operational needs.',
  },
  {
    icon: <HiOutlineMapPin size={22} />,
    title: 'Local Understanding',
    desc: "Insight into Sri Lanka's terrain, utilities and regulatory context.",
  },
  {
    icon: <BsChatDots size={22} />,
    title: 'Clear Communication',
    desc: 'Open, timely and straightforward engagement at every stage.',
  },
];

const WhyPIC = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-label" />
        <h2 className="why-title">Why PIC</h2>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-card-icon">{r.icon}</div>
              <div>
                <h3 className="why-card-title">{r.title}</h3>
                <p className="why-card-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPIC;
