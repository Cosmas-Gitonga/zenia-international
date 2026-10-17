import { Shield, LineChart, Users, Zap, Clock, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: 'Secure & Reliable',
      description: 'Data security is our top priority with industry-leading encryption and protection.'
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary-600" />,
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable intelligence for better decision-making.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: 'Expert Team',
      description: 'Our specialists bring years of experience across various industries and technologies.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: 'Rapid Implementation',
      description: 'We deliver solutions efficiently without compromising on quality or security.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Ongoing Support',
      description: 'We provide continuous assistance to ensure long-term success of your digital initiatives.'
    },
    {
      icon: <Globe className="h-6 w-6 text-primary-600" />,
      title: 'Global Reach',
      description: 'Supporting clients worldwide with localized solutions and global best practices.'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            Our comprehensive approach to digital transformation ensures that your organization 
            stays ahead in today's rapidly evolving technological landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-primary-50 rounded-lg p-3 flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;