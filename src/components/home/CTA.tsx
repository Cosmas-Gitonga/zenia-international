import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-[#A01D27] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-15"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Digital Strategy?
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
            Partner with us to unlock your organization's full potential with tailored digital 
            solutions designed for your unique challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="btn bg-white text-[#A01D27] hover:bg-gray-100"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="btn bg-transparent border-2 border-white hover:bg-white/10"
            >
              Explore Our Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;