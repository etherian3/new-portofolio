import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xldgyqwa");
  const [name, setName] = React.useState(""); // Tambah state untuk name
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Reset form ketika berhasil dikirim
  React.useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state.succeeded]);

  const contactMethods = [
    {
      title: "Email",
      value: "your.email@example.com",
      value: "rianziwalker@gmail.com",
      icon: "📧",
    },
    {
      title: "Discord",
      value: "yourusername#0000",
      value: "@etherian3",
      icon: "💬",
    },
    {
      title: "GitHub",
      value: "@yourusername",
      value: "@etherian3",
      icon: "📚",
    },
    {
      title: "LinkedIn",
      value: "your-linkedin",
      value: "rianzi-hasan-albana",
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

      {/* Form Contact */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700">
          <h3 className="text-white pixel-font text-sm md:text-base mb-6">
            Send Message
          </h3>

          {/* Tampilkan pesan sukses */}
          {state.succeeded && (
            <div className="mb-4 p-4 bg-green-500/20 text-green-400 rounded-lg">
              Message sent successfully! 🚀 I'll respond within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-400"
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-400"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-600 hover:bg-blue-700 text-white pixel-font text-sm px-6 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
