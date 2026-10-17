
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to meet you in person at our headquarters.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              title="Zenia International Limited - Lavington Mall"
              src="https://maps.google.com/maps?q=Lavington%20Mall%2C%20James%20Gichuru%20Road%2C%20Nairobi%2C%20Kenya&output=embed"
              className="w-full h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
