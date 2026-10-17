import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-white">Zenia</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your Strategic Partner in transforming organizations through innovative digital solutions and strategic insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/digitization" className="text-gray-400 hover:text-white transition-colors">
                  Digitization
                </Link>
              </li>
              <li>
                <Link to="/services/data-management" className="text-gray-400 hover:text-white transition-colors">
                  Data Management
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-research" className="text-gray-400 hover:text-white transition-colors">
                  Strategic Research
                </Link>
              </li>
              <li>
                <Link to="/services/stakeholder-engagement" className="text-gray-400 hover:text-white transition-colors">
                  Stakeholder Engagement
                </Link>
              </li>
              <li>
                <Link to="/services/strategic-partnerships" className="text-gray-400 hover:text-white transition-colors">
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link to="/services/capacity-building" className="text-gray-400 hover:text-white transition-colors">
                  Capacity Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-primary-600 flex-shrink-0 mt-1" size={18} />
                <span>Lavington Mall, James Gichuru Rd</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary-600 flex-shrink-0" size={18} />
                <a href="tel:+254722707415" className="hover:text-white transition-colors">
                  0722 707 415 / 0717 478 857
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary-600 flex-shrink-0" size={18} />
                <a href="mailto:info@zeniainternational.com" className="hover:text-white transition-colors">
                  info@zeniainternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Zenia International Limited. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;