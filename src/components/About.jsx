import LOE from "../assets/images/LOE.png";

const About = () => {
  const skills = [
    { name: "Solidity", level: "98%" },
    { name: "Rust", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "85%" },
    { name: "DApp Development", level: "90%" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white md:text-4xl pixel-font mb-12 md:mb-16">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Side - About Text */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                <img
                  src={LOE}
                  alt="Your Name"
                  className="w-full h-full object-cover md:rounded-full"
                />
              </div>
              <div>
                <h2 className="text-white pixel-font text-sm md:text-base">
                  Smart Contract Developer
                </h2>
                <p className="text-gray-400 text-xs md:text-sm">
                  3+ Years Experience
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Smart Contracts Engineers are specialized professionals
              responsible for designing, developing, and implementing smart
              contracts—self-executing agreements with terms encoded directly
              into software. Their role involves drafting precise contract
              logic, conducting rigorous security audits, and ensuring
              compliance with legal standards, all of which require a high
              degree of precision. Given the immutable nature of blockchain
              technology, even minor errors can lead to significant financial
              losses, making meticulous coding practices essential. They must
              also stay updated on advancements in blockchain technology and
              collaborate with cross-functional teams to ensure that automated
              agreements operate securely and efficiently.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs pixel-font">
                Solidity
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs pixel-font">
                Web3
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs pixel-font">
                DeFi
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs pixel-font">
                NFT
              </span>
              <span className="px-3 py-1 bg-black text-green-300 rounded-full text-xs pixel-font">
                Rust
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-700">
          <h3 className="text-white pixel-font text-sm md:text-base mb-6">
            Skills & Expertise
          </h3>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300 pixel-font text-xs">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 pixel-font text-xs">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center p-4 bg-gray-700/50 rounded-lg">
              <div className="text-blue-400 text-xl md:text-2xl font-bold mb-1">
                50+
              </div>
              <div className="text-gray-400 text-xs pixel-font">Projects</div>
            </div>
            <div className="text-center p-4 bg-gray-700/50 rounded-lg">
              <div className="text-green-400 text-xl md:text-2xl font-bold mb-1">
                100%
              </div>
              <div className="text-gray-400 text-xs pixel-font">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="mt-8 max-w-2xl text-center">
        <p className="text-gray-400 italic text-sm md:text-base pixel-font">
          "Focusing on building secure and efficient smart contracts for the
          next generation of DApps"
        </p>
      </div>
    </div>
  );
};

export default About;
