export interface Service {
  id: string;
  title: string;
  icon: JSX.Element;
  shortDescription: string;
  description: string;
  approach: string;
  keyPoints: string[];
  caseSummary?: string;
}

export const services: Service[] = [
  {
    id: "digitization",
    title: "Digitization",
    icon: <span className="text-2xl">📊</span>,
    shortDescription: "Transform your physical documents and analog processes into digital formats for improved efficiency and accessibility.",
    description: "Our digitization services help organizations move from paper-based, manual processes to streamlined digital solutions. We leverage cutting-edge technologies to convert physical documents, enhance data quality, and create searchable, accessible digital archives.",
    approach: "We begin with a thorough assessment of your current document management processes, identifying opportunities for improvement. Our team then implements a customized digitization strategy, including document scanning, OCR processing, metadata tagging, and secure storage solutions. We ensure compliance with relevant regulations and industry standards throughout the process.",
    keyPoints: [
      "High-volume document scanning and conversion",
      "OCR (Optical Character Recognition) for searchable documents",
      "Metadata tagging and organization",
      "Digital document management systems implementation",
      "Secure cloud storage and backup solutions",
      "Workflow automation for digitized processes"
    ],
    caseSummary: "We helped a healthcare provider digitize over 500,000 patient records, reducing retrieval time from hours to seconds and eliminating $150,000 in annual physical storage costs while ensuring HIPAA compliance."
  },
  {
    id: "data-management",
    title: "Data Management",
    icon: <span className="text-2xl">🔍</span>,
    shortDescription: "Organize, protect, and leverage your organization's data assets with comprehensive data management solutions.",
    description: "Our data management services help organizations harness the power of their data. We implement robust systems for data collection, storage, processing, and analysis that ensure data quality, security, and accessibility across your organization.",
    approach: "We develop comprehensive data management strategies tailored to your organization's specific needs. Our approach includes data governance frameworks, quality control processes, security protocols, and analytics capabilities. We emphasize both technical excellence and organizational adoption to ensure lasting value from your data assets.",
    keyPoints: [
      "Data strategy development and governance frameworks",
      "Database design and implementation",
      "Data integration and migration services",
      "Data quality assessment and improvement",
      "Data security and compliance solutions",
      "Business intelligence and analytics implementation"
    ],
    caseSummary: "For a retail chain with 200+ locations, we implemented an integrated data management system that consolidated fragmented data sources, improved data quality by 87%, and enabled real-time analytics for inventory and sales performance."
  },
  {
    id: "strategic-research",
    title: "Strategic Research",
    icon: <span className="text-2xl">📈</span>,
    shortDescription: "Gain valuable insights to inform your business decisions through comprehensive research and analysis.",
    description: "Our strategic research services provide organizations with the insights needed to make informed decisions. We combine rigorous research methodologies with industry expertise to deliver actionable intelligence that drives strategic initiatives and business growth.",
    approach: "Our research process begins with clearly defining your key questions and objectives. We then design a customized research methodology, collect and analyze data from various sources, and synthesize findings into clear, actionable insights. Throughout, we maintain close collaboration to ensure the research addresses your evolving needs.",
    keyPoints: [
      "Market analysis and competitive intelligence",
      "Customer research and segmentation",
      "Trend analysis and forecasting",
      "Technology assessment and evaluation",
      "Industry benchmarking studies",
      "Data-driven strategy recommendations"
    ],
    caseSummary: "We conducted comprehensive market research for a technology company entering a new sector, identifying key opportunities, potential partnerships, and competitive threats, which informed their successful market entry strategy."
  },
  {
    id: "stakeholder-engagement",
    title: "Stakeholder Engagement",
    icon: <span className="text-2xl">👥</span>,
    shortDescription: "Build stronger relationships with key stakeholders through strategic communication and engagement programs.",
    description: "Our stakeholder engagement services help organizations build meaningful relationships with the people and groups essential to their success. We develop and implement strategies that foster transparent communication, collaboration, and trust with internal and external stakeholders.",
    approach: "We begin by mapping your stakeholder ecosystem and understanding the unique needs, interests, and influence of each group. Based on this analysis, we develop tailored engagement strategies, communication plans, and feedback mechanisms. Our focus is on creating sustainable engagement that delivers value to both your organization and its stakeholders.",
    keyPoints: [
      "Stakeholder mapping and analysis",
      "Engagement strategy development",
      "Communication planning and execution",
      "Digital engagement platforms",
      "Stakeholder feedback systems",
      "Community relations programs"
    ],
    caseSummary: "For an infrastructure development project, we designed and facilitated a stakeholder engagement program that transformed community opposition into productive collaboration, securing project approval and establishing ongoing community partnerships."
  },
  {
    id: "strategic-partnerships",
    title: "Strategic Partnerships",
    icon: <span className="text-2xl">🤝</span>,
    shortDescription: "Identify and develop valuable partnerships to accelerate growth and expand capabilities.",
    description: "Our strategic partnership services help organizations identify, establish, and nurture partnerships that drive mutual value. We facilitate collaborations that enhance capabilities, expand market reach, and create competitive advantages through combined strengths.",
    approach: "We use a systematic approach to partnership development, beginning with alignment on objectives and partner criteria. We then conduct thorough partner research and evaluation, facilitate introductions and negotiations, and help structure agreements. Throughout the partnership lifecycle, we provide support to ensure relationships remain productive and aligned with strategic goals.",
    keyPoints: [
      "Partnership strategy development",
      "Partner identification and evaluation",
      "Due diligence and compatibility assessment",
      "Partnership negotiation and structuring",
      "Alliance management frameworks",
      "Partnership performance measurement"
    ],
    caseSummary: "We helped a mid-size software company identify and secure strategic technology partnerships that expanded their solution offerings, resulting in 35% revenue growth within 18 months and entry into previously inaccessible market segments."
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    icon: <span className="text-2xl">🚀</span>,
    shortDescription: "Strengthen your organization's capabilities through targeted training, knowledge transfer, and skill development.",
    description: "Our capacity building services help organizations develop the internal capabilities needed for sustainable success. We design and deliver programs that enhance skills, knowledge, processes, and systems to improve performance and enable self-sufficiency.",
    approach: "We take a holistic approach to capacity building, addressing both technical skills and organizational culture. After assessing current capabilities and gaps, we design customized development programs that combine training, coaching, knowledge resources, and practical application. Our emphasis is on creating lasting capability that continues to grow after our engagement ends.",
    keyPoints: [
      "Organizational capability assessment",
      "Customized training program development",
      "Leadership and management development",
      "Technical skills enhancement",
      "Knowledge management systems",
      "Performance measurement frameworks"
    ],
    caseSummary: "We developed and implemented a comprehensive digital skills program for a government agency, training 500+ staff and establishing internal champions, resulting in 92% adoption of new digital systems and significantly improved service delivery."
  }
];