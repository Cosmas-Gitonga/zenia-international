const ServicesHero = () => {
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
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed animate-slide-up">
            Comprehensive digital solutions tailored to transform your organization and 
            drive sustainable growth in today's rapidly evolving landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;