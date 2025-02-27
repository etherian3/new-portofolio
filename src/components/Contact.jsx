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
    /* ... tetap sama ... */
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* ... bagian contact methods tetap sama ... */}

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
