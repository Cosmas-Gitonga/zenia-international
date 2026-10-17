import { Linkedin, Twitter } from 'lucide-react';
import marthaPhoto from '../../assets/images/martha.jpg';
import maryannPhoto from '../../assets/images/maryann.webp';
import cosmasPhoto from '../../assets/images/cosmas.png';

const teamMembers = [
  {
    id: 1,
    name: 'Martha Wariithi',
    position: 'Director',
    bio: 'Martha Wariithi is an accomplished Economist with over 30 years of experience across Africa, Asia, and Europe. She is a Certified Public Private Partnership Advisor. She has led high-impact initiatives in economic development, public-private partnerships, strategy, and social enterprise. Martha has held leadership roles at organizations such as the Kenya Bureau of Standards, LAPSSET Corridor Authority, and The Coca-Cola Company. She holds an MA in Economic Development and Policy from Middlesex University and a BA in Economics from the University of Nairobi.',
    image: marthaPhoto,
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Maryann Wariithi',
    position: 'Director',
    bio: 'Mary Ann Wariithi is a seasoned Community Engagement, Partnerships and Strategic Communications specialist with extensive experience in government and community relations, advocacy and resource mobilization. She has demonstrated leadership in community-based organisations, corporate social responsibility initiatives and stakeholder engagement. Mary Ann has spearheaded outreach programmes, fostered strategic partnerships and championed community empowerment initiatives that strengthen collaboration, promote inclusive development and create lasting social impact.',
    //image: "https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: maryannPhoto,
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Cosmas Gitonga',
    position: 'Consultant',
    bio: 'Cosmas Gitonga is a Consultant with over 10 years of experience in Data Science, Monitoring & Evaluation, Strategic Research, proposal development, project management, and donor engagement. He has successfully led winning bids for organizations like World Bank, USAID, GIZ, UN agencies, and FCDO. Cosmas holds an MSc in Data Science and Analytics from Strathmore University and specializes in translating complex technical concepts into compelling, donor-aligned proposals that drive growth and impact.',
    image: cosmasPhoto,
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600">
            Meet the experienced professionals leading our company forward with
            vision, expertise, and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="text-white hover:text-primary-300 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-white hover:text-primary-300 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
