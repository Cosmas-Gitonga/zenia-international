import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/Services';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Features />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
};

export default Home;