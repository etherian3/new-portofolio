const Contact = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "your.email@example.com",
      icon: "📧",
    },
    {
      title: "Discord",
      value: "yourusername#0000",
      icon: "💬",
    },
    {
      title: "GitHub",
      value: "@yourusername",
      icon: "📚",
    },
    {
      title: "LinkedIn",
      value: "your-linkedin",
      icon: "💼",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white md:text-4xl pixel-font mb-12 md:mb-16">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <div>
                <h3 className="text-white pixel-font text-sm md:text-base mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm break-all">
                  {method.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Contact (Optional) */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700">
          <h3 className="text-white pixel-font text-sm md:text-base mb-6">
            Send Message
          </h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white pixel-font text-sm px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
