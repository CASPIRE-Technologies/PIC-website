import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import CoreServices from '../components/CoreServices';
import SupportSection from '../components/SupportSection';
import WhyPIC from '../components/WhyPIC';
import CTABanner from '../components/CTABanner';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProcessSteps />
      <CoreServices />
      <SupportSection />
      <WhyPIC />
      <CTABanner />
    </>
  );
};

export default HomePage;
