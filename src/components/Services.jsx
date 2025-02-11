const Services = () => {
  const services = [
    {
      title: "Smart Contract Development",
      description:
        "Developing secure and efficient smart contracts for your DApps",
      icon: "🔐",
    },
    {
      title: "DApp Integration",
      description:
        "Seamless integration of smart contracts with front-end applications",
      icon: "🔗",
    },
    {
      title: "Security Audit",
      description: "Comprehensive security analysis of smart contracts",
      icon: "🛡️",
    },
    {
      title: "Blockchain Consulting",
      description:
        "Expert advice on blockchain implementation and architecture",
      icon: "💡",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white md:text-4xl pixel-font mb-12 md:mb-16">
        Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-white pixel-font text-sm md:text-base mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 text-xs md:text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
