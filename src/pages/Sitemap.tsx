
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'Digitization', path: '/services/digitization' },
    { name: 'Data Management', path: '/services/data-management' },
    { name: 'Strategic Research', path: '/services/strategic-research' },
    { name: 'Stakeholder Engagement', path: '/services/stakeholder-engagement' },
    { name: 'Strategic Partnerships', path: '/services/strategic-partnerships' },
    { name: 'Capacity Building', path: '/services/capacity-building' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  const renderLinks = (links: typeof pages) => (
    <ul className="space-y-3">
      {links.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <section
        className="pt-20 pb-10 md:pt-24 md:pb-12 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(160, 29, 39, 0.9), rgba(160, 29, 39, 0.9)), url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
        }}
      >
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Sitemap
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore Zenia International Limited's website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                Main Pages
              </h2>
              {renderLinks(pages)}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                Our Services
              </h2>
              {renderLinks(services)}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">
                Legal Information
              </h2>
              {renderLinks(legal)}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;
