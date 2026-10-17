import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section 
      className="pt-20 pb-10 md:pt-24 md:pb-12 relative bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(160, 29, 39, 0.9), rgba(160, 29, 39, 0.9)), url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` 
      }}
    >
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in text-white">
            About Zenia
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed animate-slide-up">
            We are a team of innovators committed to transforming organizations through 
            cutting-edge technology solutions and strategic insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/services"
              className="btn bg-white text-primary-600 hover:bg-gray-100"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="btn bg-transparent text-white border-2 border-white hover:bg-white/10"
            >
              Contact Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;