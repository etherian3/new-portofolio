import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import nftMarketplace from "../assets/images/nft-marketplace.png";
import defi from "../assets/images/defi.png";
import dcl from "../assets/images/dcl.png";
import web3notes from "../assets/images/web3notes.png";

const Projects = () => {
  const projects = [
    {
      title: "DeFi Lending Platform",
      description:
        "A decentralized lending platform built with Solidity and React. Features include lending, borrowing, and yield farming capabilities.",
      image: defi, // Ganti dengan path gambar proyek Anda
      category: "DeFi",
      tech: ["Solidity", "Web3.js", "React", "Moralis"],
      link: "#",
    },
    {
      title: "NFT Marketplace",
      description:
        "Custom NFT marketplace allowing users to mint, buy, sell and trade NFTs with integrated wallet connection.",
      image: nftMarketplace,
      category: "NFT",
      tech: ["Solidity", "IPFS", "Next.js"],
      link: "#",
    },
    {
      title: "Smart Contract Decentraland App",
      description:
        "Automated smart contract analysis tool that helps identify common vulnerabilities and security issues.",
      image: dcl,
      category: "Security",
      tech: ["Solidity", "Layer 2", "NodeJs"],
      link: "#",
    },
    {
      title: "Decentralized Notes",
      description:
        "Automated smart contract analysis tool that helps identify common vulnerabilities and security issues.",
      image: web3notes,
      category: "Security",
      tech: ["Solidity", "JavaScript", "React"],
      link: "#",
    },
    // Tambahkan proyek lainnya di sini
  ];

  const categories = ["All", "DeFi", "NFT", "Security", "DAO"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const nextSlide = () => {
    if (isMobile) {
      setStartIndex((prev) => Math.min(prev + 1, filteredProjects.length - 1));
    } else {
      setStartIndex((prev) => Math.min(prev + 1, filteredProjects.length - 3));
    }
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-black pt-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-2xl md:text-4xl pixel-font mb-8 md:mb-12 text-center">
          Projects
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setStartIndex(0);
              }}
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

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Buttons - dengan penyesuaian posisi dan z-index */}
          <div className="absolute inset-y-0 -left-2 md:-left-4 flex items-center z-30">
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className={`p-2 rounded-full bg-gray-800/90 text-white transform transition-opacity duration-300 shadow-lg ${
                startIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-700"
              }`}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="absolute inset-y-0 -right-2 md:-right-4 flex items-center z-30">
            <button
              onClick={nextSlide}
              disabled={
                startIndex >= filteredProjects.length - (isMobile ? 1 : 3)
              }
              className={`p-2 rounded-full bg-gray-800/90 text-white transform transition-opacity duration-300 shadow-lg ${
                startIndex >= filteredProjects.length - (isMobile ? 1 : 3)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-700"
              }`}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Projects Container - dengan padding yang disesuaikan */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${
                  startIndex * (isMobile ? 100 : 33.333)
                }%)`,
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-none px-4 md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
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
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-col gap-2 mb-3">
                        <h3 className="text-white pixel-font text-lg break-words whitespace-normal">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs pixel-font self-start">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <a
                        href={project.link}
                        className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white pixel-font text-sm rounded-lg transition-colors duration-300 mt-auto"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
