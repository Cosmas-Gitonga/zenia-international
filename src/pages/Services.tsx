import ServicesHero from '../components/services/ServicesHero';
import ServiceList from '../components/services/ServiceList';
import ProcessSteps from '../components/services/ProcessSteps';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServiceList />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Services;