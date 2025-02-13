import React from "react";
import "../App.css"; // Pastikan untuk mengimpor CSS
import nftMarketplace from "../assets/images/nft-marketplace.png";
import defi from "../assets/images/defi.png";
import web3notes from "../assets/images/web3notes.png";
import dcl from "../assets/images/dcl.png";

const CardContainer = () => {
  return (
    <div className="flex items-center justify-center min-h-[85vh] p-4 md:p-7 mt-16">
      <div className="max-w-5xl w-full text-white">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-5 md:space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 pixel-font text-xs md:text-sm animate-fade-in">
                Welcome to <span className="text-white">@Etherian</span>{" "}
                portfolio
              </p>
              {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pixel-font text-white animate-fade-in">
                Etherian
              </h1> */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold pixel-font text-white animate-fade-in">
                Smart Contracts
                <span className="text-blue-400"> Engineer</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-gray-300 pixel-font animate-slide-up delay-300">
              I specialize in building interactive smart contracts applications
              and creating web3 interfaces.
            </p>

            <p className="text-sm md:text-base text-gray-400 pixel-font animate-slide-up delay-500">
              Blockchain is the future of technology, offering transparency and
              security in efficient digital transactions.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 animate-slide-up delay-700">
              <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-xs pixel-font border border-blue-500/30">
                Solidity
              </span>
              <span className="px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-xs pixel-font border border-purple-500/30">
                DeFi
              </span>
              <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs pixel-font border border-green-500/30">
                DApps
              </span>
              <span className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs pixel-font border border-yellow-500/30">
                Blockchain
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-slide-up delay-1000">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white pixel-font text-xs md:text-sm rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-5 py-2.5 bg-gray-800/50 hover:bg-gray-700/50 text-white pixel-font text-xs md:text-sm rounded-lg border border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl animate-pulse"></div>
            <div className="relative p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <img
                    src={nftMarketplace}
                    alt="NFT Marketplace Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="aspect-square bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <img
                    src={defi}
                    alt="DeFi Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="aspect-square bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <img
                    src={web3notes}
                    alt="Smart Contract Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="aspect-square bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <img
                    src={dcl}
                    alt="Blockchain Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
