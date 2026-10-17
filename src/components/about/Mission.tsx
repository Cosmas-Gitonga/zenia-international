import { Target, Lightbulb, BadgeCheck } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
          <p className="text-lg text-gray-600">
            At Zenia International Limited, our mission and values drive everything we do. They shape our approach
            to client partnerships and define the standards we hold ourselves to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower organizations to thrive in the digital age through innovative solutions 
              that drive growth, efficiency, and sustainable competitive advantage.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading partner for organizations seeking digital transformation, recognized 
              for our expertise, integrity, and the measurable impact we create for our clients.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-6">
              <BadgeCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li>• R – Rigour</li>
              <li>• I – Integrity</li>
              <li>• S – Service</li>
              <li>• E – Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;