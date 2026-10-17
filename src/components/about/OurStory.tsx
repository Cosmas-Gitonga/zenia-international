const OurStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2018, Zenia International Limited began with a simple mission: to help organizations navigate 
              the increasingly complex digital landscape with confidence and clarity.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              What started as a small team of passionate digital experts has grown into a 
              comprehensive service provider with specialized teams across digitization, data 
              management, strategic research, and more.
            </p>
            <p className="text-lg text-gray-700">
              Today, we serve clients across multiple industries, all with the same dedication to excellence and innovation that has defined 
              our journey from the beginning.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;