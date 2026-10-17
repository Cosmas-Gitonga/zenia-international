import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import CTA from '../components/home/CTA';
import NotFound from './NotFound';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);
  
  if (!service) {
    return <NotFound />;
  }

  // Get all services except the current one
  const otherServices = services.filter(s => s.id !== serviceId);

  // Find the current service index and determine prev/next services
  const currentIndex = services.findIndex(s => s.id === serviceId);
  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="pt-20 pb-10 md:pt-24 md:pb-12 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(160, 29, 39, 0.9), rgba(160, 29, 39, 0.9)), url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` 
        }}
      >
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in text-white">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed animate-slide-up">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-gray-700">
                  {service.description}
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">How We Approach {service.title}</h3>
                <p className="text-gray-700 mb-6">
                  {service.approach}
                </p>

                <div className="my-8">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {service.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.caseSummary && (
                  <div className="bg-gray-50 p-8 rounded-lg my-12">
                    <h3 className="text-2xl font-bold mb-4">Case Example</h3>
                    <p className="text-gray-700 mb-4">
                      {service.caseSummary}
                    </p>
                    <div className="flex justify-end">
                      <Link 
                        to="/contact" 
                        className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                      >
                        Discuss your project <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Navigation */}
              <div className="flex justify-between mt-16 pt-8 border-t border-gray-200">
                {prevService ? (
                  <Link 
                    to={`/services/${prevService.id}`}
                    className="group flex items-center text-gray-600 hover:text-primary-600"
                  >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span>
                      <span className="block text-sm text-gray-500">Previous Service</span>
                      {prevService.title}
                    </span>
                  </Link>
                ) : (
                  <div></div>
                )}
                
                {nextService && (
                  <Link 
                    to={`/services/${nextService.id}`}
                    className="group flex items-center text-gray-600 hover:text-primary-600 text-right"
                  >
                    <span>
                      <span className="block text-sm text-gray-500">Next Service</span>
                      {nextService.title}
                    </span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Other Services</h3>
                <ul className="space-y-4">
                  {otherServices.map(otherService => (
                    <li key={otherService.id}>
                      <Link 
                        to={`/services/${otherService.id}`}
                        className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span className="mr-3 text-lg">•</span>
                        {otherService.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">
                    Contact us to discuss how our {service.title} services can benefit your organization.
                  </p>
                  <Link 
                    to="/contact" 
                    className="btn btn-primary w-full"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ServiceDetail;