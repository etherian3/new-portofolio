import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "DeFi Lending Platform",
      description:
        "A decentralized lending platform built with Solidity and React. Features include lending, borrowing, and yield farming capabilities.",
      image: "/project1.jpg", // Ganti dengan path gambar proyek Anda
      category: "DeFi",
      tech: ["Solidity", "Web3.js", "React"],
      link: "#",
    },
    {
      title: "NFT Marketplace",
      description:
        "Custom NFT marketplace allowing users to mint, buy, sell and trade NFTs with integrated wallet connection.",
      image: "/project2.jpg",
      category: "NFT",
      tech: ["Solidity", "IPFS", "Next.js"],
      link: "#",
    },
    {
      title: "Smart Contract Audit Tool",
      description:
        "Automated smart contract analysis tool that helps identify common vulnerabilities and security issues.",
      image: "/project3.jpg",
      category: "Security",
      tech: ["Solidity", "Python", "Slither"],
      link: "#",
    },
    {
      title: "DAO Governance Platform",
      description:
        "Decentralized governance platform with proposal creation and voting mechanisms.",
      image: "/project4.jpg",
      category: "DAO",
      tech: ["Solidity", "React", "The Graph"],
      link: "#",
    },
  ];

  const categories = ["All", "DeFi", "NFT", "Security", "DAO"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl md:text-4xl pixel-font mb-8 md:mb-12 text-center">
          Projects
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm pixel-font transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white pixel-font text-lg">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs pixel-font">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white pixel-font text-sm rounded-lg transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
