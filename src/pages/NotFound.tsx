import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container-custom py-16 md:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-8">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;