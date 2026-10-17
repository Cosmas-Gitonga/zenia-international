import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { services } from '../../data/services';
import logo from '../../assets/images/zenia_logo.png';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#590404] py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMenu}
          >
            <Zap className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zenia International Limited
            </span>
          </Link> */}

          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMenu}
          >
            <img 
              src={logo} 
              alt="Zenia International Limited" 
              className="h-10 w-auto object-contain" 
            />

          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isScrolled 
                    ? (isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600') 
                    : (isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white')
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isScrolled 
                    ? (isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600') 
                    : (isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white')
                }`
              }
            >
              About
            </NavLink>
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="py-1">
                    <NavLink 
                      to="/services" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    >
                      All Services
                    </NavLink>
                    {services.map((service) => (
                      <NavLink 
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isScrolled 
                    ? (isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600') 
                    : (isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white')
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isScrolled 
                    ? (isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600') 
                    : (isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white')
                }`
              }
            >
              Blog
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className={`btn ${isScrolled ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-white text-primary-600 hover:bg-gray-100'}`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/90 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            aria-label="Close menu"
            onClick={toggleMenu}
            className="p-2 text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-3 text-xl ${isActive ? 'text-white font-bold' : 'text-gray-100'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-3 text-xl ${isActive ? 'text-white font-bold' : 'text-gray-100'}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center justify-center w-full py-3 text-xl text-gray-100"
            >
              Services
              <ChevronDown
                size={20}
                className={`ml-2 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isServicesOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `py-2 pl-8 block text-lg ${isActive ? 'text-white font-bold' : 'text-gray-200'}`
                }
                onClick={closeMenu}
              >
                All Services
              </NavLink>
              {services.map((service) => (
                <NavLink
                  key={service.id}
                  to={`/services/${service.id}`}
                  className={({ isActive }) =>
                    `py-2 pl-8 block text-lg ${isActive ? 'text-white font-bold' : 'text-gray-200'}`
                  }
                  onClick={closeMenu}
                >
                  {service.title}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `py-3 text-xl ${isActive ? 'text-white font-bold' : 'text-gray-100'}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-3 text-xl ${isActive ? 'text-white font-bold' : 'text-gray-100'}`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <div className="mt-6">
            <Link
              to="/contact"
              className="btn bg-primary-600 text-white hover:bg-primary-700 w-full"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;