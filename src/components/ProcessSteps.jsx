import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
} from 'react-icons/hi2';
import { IoSettingsOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { FiChevronRight } from 'react-icons/fi';
import { BsBuildings } from 'react-icons/bs';

const steps = [
  { icon: <HiOutlineClipboardDocumentList size={24} />, label: 'Survey' },
  { icon: <HiOutlineDocumentText size={24} />, label: 'Design' },
  { icon: <IoSettingsOutline size={24} />, label: 'Procure' },
  { icon: <BsBuildings size={24} />, label: 'Implement' },
  { icon: <IoCheckmarkCircleOutline size={24} />, label: 'Review & Handover' },
];

const ProcessSteps = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="process-step">
                <div className="process-step-icon">
                  {step.icon}
                </div>
                <span className="process-step-label">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="process-arrow">
                  <FiChevronRight size={20} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
