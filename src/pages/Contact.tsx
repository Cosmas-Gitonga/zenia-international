import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      
      // Lavington Mall coordinates
      const position = { lat: -1.2841, lng: 36.7682 };
      
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 16,
        mapId: 'YOUR_MAP_ID',
        styles: [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b6b6b' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { weight: 2 }]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#e9e9e9' }]
          }
        ]
      };

      const map = new Map(mapRef.current!, mapOptions);

      // Add marker
      new google.maps.Marker({
        position,
        map,
        title: 'Zenia International Limited',
        animation: google.maps.Animation.DROP
      });
    };

    if (mapRef.current) {
      initMap();
    }
  }, []);

  return (
    <>
      <section 
        className="pt-20 pb-10 md:pt-24 md:pb-12 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(160, 29, 39, 0.9), rgba(160, 29, 39, 0.9)), url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` 
        }}
      >
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed animate-slide-up">
              Get in touch with our team to discuss how we can help transform your organization
              through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              We'd love to meet you in person at our headquarters.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div ref={mapRef} className="w-full h-[400px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;