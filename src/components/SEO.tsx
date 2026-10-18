
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Website configuration
const SITE_URL = 'https://zenia-international.netlify.app';
const SITE_NAME = 'Zenia International Limited';

// Social sharing image in the public folder
const OG_IMAGE = `${SITE_URL}/zenia-international-social-preview.png`;

// Page-specific SEO metadata
const metadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Zenia International Limited | Digital Solutions Kenya',
    description:
      'Zenia International Limited provides digitization, data management, strategic research, stakeholder engagement and consulting services in Kenya.',
  },

  '/about': {
    title: 'About Zenia International Limited | Nairobi, Kenya',
    description:
      'Learn about Zenia International Limited, a Kenyan digital solutions and consulting company based in Nairobi.',
  },

  '/services': {
    title: 'Digital Transformation & Consulting Services | Zenia Kenya',
    description:
      'Explore digitization, data management, strategic research, stakeholder engagement, strategic partnerships and capacity building services from Zenia International Limited.',
  },

  '/services/digitization': {
    title: 'Document Digitization Services in Kenya | Zenia',
    description:
      'Explore document digitization and digital records management solutions offered by Zenia International Limited in Kenya.',
  },

  '/services/data-management': {
    title: 'Data Management Solutions in Kenya | Zenia',
    description:
      'Discover data management solutions that help organisations improve information quality, organisation and decision-making.',
  },

  '/services/strategic-research': {
    title: 'Strategic Research & Advisory Services Kenya | Zenia',
    description:
      'Explore strategic research, analysis and advisory services offered by Zenia International Limited in Kenya.',
  },

  '/services/stakeholder-engagement': {
    title: 'Stakeholder Engagement Consulting Kenya | Zenia',
    description:
      'Learn about stakeholder engagement and communication services supporting effective participation and collaboration.',
  },

  '/services/strategic-partnerships': {
    title: 'Strategic Partnerships Advisory Kenya | Zenia',
    description:
      'Discover strategic partnership development services that support collaboration and organisational growth.',
  },

  '/services/capacity-building': {
    title: 'Capacity Building & Training in Kenya | Zenia',
    description:
      'Explore capacity building and professional development services offered by Zenia International Limited.',
  },

  '/contact': {
    title: 'Contact Zenia International Limited | Nairobi, Kenya',
    description:
      'Contact Zenia International Limited at Lavington Mall, James Gichuru Road, Nairobi, for enquiries about our digital and consulting services.',
  },

  '/blog': {
    title: 'Insights & Articles | Zenia International Kenya',
    description:
      'Explore insights and articles from Zenia International Limited on digital transformation, research and organisational development.',
  },

  '/privacy-policy': {
    title: 'Privacy Policy | Zenia International Limited',
    description:
      'Read how Zenia International Limited collects, uses and protects personal information in accordance with applicable Kenyan data protection laws.',
  },

  '/terms-of-service': {
    title: 'Terms of Service | Zenia International Limited',
    description:
      'Read the terms governing use of the Zenia International Limited website.',
  },

  '/sitemap': {
    title: 'Sitemap | Zenia International Limited',
    description:
      'Explore the main pages, services and information available on the Zenia International Limited website.',
  },
};

// Create or update metadata tags without duplicates
const setMetaTag = (
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

// SEO component
const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize URL path
    const path =
      pathname === '/'
        ? '/'
        : pathname.replace(/\/+$/, '');

    // Find page-specific metadata
    const page =
      metadata[path] ??
      (path.startsWith('/blog/')
        ? {
            title: 'Blog Article | Zenia International Limited',
            description:
              'Read insights and articles from Zenia International Limited.',
          }
        : path.startsWith('/services/')
          ? metadata['/services']
          : {
              title: 'Page Not Found | Zenia International Limited',
              description: 'The requested page could not be found.',
            });

    const pageUrl = `${SITE_URL}${path}`;

    // ==================================================
    // 1. STANDARD SEO
    // ==================================================

    // Page title
    document.title = page.title;

    // Meta description
    setMetaTag('name', 'description', page.description);

    // Canonical URL
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = pageUrl;

    // ==================================================
    // 2. OPEN GRAPH - FACEBOOK, LINKEDIN, WHATSAPP
    // ==================================================

    setMetaTag('property', 'og:type', 'website');

    setMetaTag('property', 'og:site_name', SITE_NAME);

    setMetaTag('property', 'og:title', page.title);

    setMetaTag('property', 'og:description', page.description);

    setMetaTag('property', 'og:url', pageUrl);

    setMetaTag('property', 'og:image', OG_IMAGE);

    setMetaTag(
      'property',
      'og:image:alt',
      'Zenia International Limited - Digital Solutions Kenya'
    );

    setMetaTag('property', 'og:image:width', '1200');

    setMetaTag('property', 'og:image:height', '630');

    setMetaTag('property', 'og:image:type', 'image/png');

    setMetaTag('property', 'og:locale', 'en_KE');

    // ==================================================
    // 3. TWITTER / X CARDS
    // ==================================================

    setMetaTag(
      'name',
      'twitter:card',
      'summary_large_image'
    );

    setMetaTag('name', 'twitter:title', page.title);

    setMetaTag(
      'name',
      'twitter:description',
      page.description
    );

    setMetaTag('name', 'twitter:image', OG_IMAGE);

    setMetaTag(
      'name',
      'twitter:image:alt',
      'Zenia International Limited - Digital Solutions Kenya'
    );

  }, [pathname]);

  return null;
};

export default SEO;