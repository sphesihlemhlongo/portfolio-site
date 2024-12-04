import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
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
        © 2024 My Portfolio
      </footer>
    </div>
  );
};

export default Layout;
