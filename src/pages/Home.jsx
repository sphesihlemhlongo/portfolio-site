import React from 'react';
import Layout from '../components/Layout';
import LanguagesAndTools from '../components/LanguagesAndTools';
import GamingStudent from "../components/GamingStudent";
import { Link } from "react-router-dom";

import myPhoto1 from "./page_Images/MyPhotos/WTCgraduation.jpg";
import myPhoto2 from "./page_Images/MyPhotos/DbugGuy.jpeg";



import { useState } from "react";

const Home = () => {
  const [currentPhoto, setCurrentPhoto] = useState(myPhoto1);

  const handleImageClick = () => {
    setCurrentPhoto((prev) => (prev === myPhoto1 ? myPhoto2 : myPhoto1));
  };

  return (
    <Layout>
      <div className="bg-blue-500 text-white p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Left Section: Text */}
        <div className="flex-28">
          <h1 className="text-5xl font-extrabold">Welcome to My Portfolio</h1>
          <p className="mt-9 text-lg">
            Explore my work and get to know me better.
          </p>

            <Link to="/projects">
              <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
                Learn More
              </button>
            </Link>
          </div>

          {/* Right Section: Profile Image */}
          <div className="profile-image-container flex justify-center items-center">
            <img 
              src={currentPhoto} 
              alt="My Profile" 
              className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg cursor-pointer" 
              onClick={handleImageClick}
              title="Click to change photo"
            />
          </div>
        </div>

        <LanguagesAndTools />
    
        <GamingStudent />
    </Layout>
  );
};

export default Home;
