import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div className="font-bold text-xl">My Portfolio</div>
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
      <footer className="bg-gray-800 text-white text-center p-4">
        {/* Social Media Links */}
        <div className="absolute bottom-4 left-4 flex space-x-4">
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
