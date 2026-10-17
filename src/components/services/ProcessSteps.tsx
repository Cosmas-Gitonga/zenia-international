const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We begin by understanding your organization's current state, challenges, and objectives through comprehensive assessment and stakeholder interviews."
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Based on our findings, we develop a tailored strategy and roadmap aligned with your business goals and digital maturity."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our teams work collaboratively to execute the planned initiatives, ensuring quality, security, and alignment with your requirements."
  },
  {
    number: "04",
    title: "Training & Support",
    description: "We provide thorough knowledge transfer and ongoing support to ensure your team can maintain and build upon the implemented solutions."
  },
  {
    number: "05",
    title: "Optimization",
    description: "We continuously monitor performance and gather feedback, making iterative improvements to maximize ROI and effectiveness."
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-gray-600">
            We follow a proven methodology to deliver consistent, high-quality results for our clients.
          </p>
        </div>

        <div className="relative">
          {/* The connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-100 hidden sm:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 relative">
                    {step.number}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8 flex-grow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;