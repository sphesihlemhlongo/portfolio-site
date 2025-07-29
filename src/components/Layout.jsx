import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          {/* <div className="font-bold text-xl">My Portfolio</div> */}
          <div className="w-20 h-10">
            <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="300" height="280" rx="15" fill="#212736FF"/>

              <g stroke="#00F2FF" stroke-width="0.5" opacity="0.2">
                <line x1="20" y1="0" x2="20" y2="100"/>
                <line x1="60" y1="0" x2="60" y2="100"/>
                <line x1="100" y1="0" x2="100" y2="100"/>
                <line x1="140" y1="0" x2="140" y2="100"/>
                <line x1="180" y1="0" x2="180" y2="100"/>
                <line x1="0" y1="25" x2="200" y2="25"/>
                <line x1="0" y1="50" x2="200" y2="50"/>
                <line x1="0" y1="75" x2="200" y2="75"/>
              </g>

              <text x="50%" y="75%" text-anchor="middle" font-family="Orbitron, sans-serif" font-size="98" fill="#00F2FF" letter-spacing="4">
                SM
              </text>

              <text x="50%" y="75%" text-anchor="middle" font-family="Orbitron, sans-serif" font-size="98" fill="#00F2FF" letter-spacing="4" filter="url(#glow)">
                SM
              </text>

              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>

          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/about" className="mr-4">About</Link>
            <Link to="/projects" className="mr-4">Projects</Link>
            <Link to="/contact" className="mr-4">Contact</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center p-0">
        {/* Social Media Links */}
        <div className=" bottom-1 left-4 flex space-x-4 ">
          <a
            href="https://github.com/sphesihlemhlongo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sphesihle-mhlongo-937858267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p>
            &copy; {currentYear} Sphesihle Mhlongo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
