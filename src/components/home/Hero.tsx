import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/zenia_logo.png';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)`
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>

      <div className="container-custom relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="max-w-2xl">
            <div className="mb-12 w-80">
              <img 
                src={logo}
                alt="Zenia International Limited" 
                className="w-full h-auto animate-fade-in"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              <span className="text-white">Your Strategic</span>{' '}
              <span className="text-gray-200">Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed animate-slide-up opacity-90">
              Transform your organization with cutting-edge digitization, data management, 
              and strategic services tailored to your unique needs.
            </p>
            <div className="flex flex-wrap gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/services"
                className="btn bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-10 border border-white/20 transform hover:scale-[1.02] transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    title: 'Digitization',
                    icon: '📊',
                    color: 'from-blue-500 to-blue-600',
                    bgColor: 'from-blue-500/20 to-blue-600/10'
                  },
                  { 
                    title: 'Data Management',
                    icon: '🔍',
                    color: 'from-purple-500 to-purple-600',
                    bgColor: 'from-purple-500/20 to-purple-600/10'
                  },
                  { 
                    title: 'Strategic Research',
                    icon: '📈',
                    color: 'from-emerald-500 to-emerald-600',
                    bgColor: 'from-emerald-500/20 to-emerald-600/10'
                  },
                  { 
                    title: 'Capacity Building',
                    icon: '🚀',
                    color: 'from-orange-500 to-orange-600',
                    bgColor: 'from-orange-500/20 to-orange-600/10'
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl opacity-70 group-hover:opacity-100 transition-all duration-500`}></div>
                    <div className="relative p-6 rounded-2xl border border-white/20 backdrop-blur-sm group-hover:border-white/30 transition-all duration-500 shadow-lg">
                      <div className={`text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <h3 className="font-medium text-lg text-white group-hover:text-white transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-center font-medium text-white mb-6">
                  Trusted by industry-leading companies
                </p>
                <div className="flex justify-between items-center">
                  {['The Kenyatta Trust', 'Cosgit Analystics', 'MMP Communications',].map((company, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-105 transform cursor-pointer"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;