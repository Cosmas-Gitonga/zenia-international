import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Zenia revolutionized our data management systems, resulting in a 40% increase in operational efficiency. Their team's expertise and dedication to our success made all the difference.",
    author: "Sarah Johnson",
    position: "CTO, TechInnovate Inc.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    content: "The strategic research insights provided by Zenia helped us identify untapped market opportunities. We've since expanded into three new market segments with remarkable success.",
    author: "Michael Chen",
    position: "CEO, GrowthVision Technologies",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    content: "Working with Zenia on our digitization initiative transformed our organization. Their capacity building program ensured our team was well-equipped to maintain the new systems.",
    author: "Emma Rodriguez",
    position: "Operations Director, Nexus Solutions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900/90 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300">
            Success stories from organizations we've helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 -left-8 text-primary-500/20">
            <Quote size={96} strokeWidth={1} />
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
            <div className="min-h-[16rem] relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 absolute w-full ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-white/10"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-bold text-white">{testimonial.author}</h4>
                      <p className="text-primary-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
              </button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-500' 
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-white/80 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;