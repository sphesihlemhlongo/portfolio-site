import React from 'react';
import Layout from '../components/Layout';
import LanguagesAndTools from '../components/LanguagesAndTools';
import GamingStudent from "../components/GamingStudent";
import { Link } from "react-router-dom"; 



const Home = () => {
  return (
    <Layout>
      <div className="bg-blue-500 text-white p-10 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">Explore my work and get to know me better.</p>

       {/* Profile Image */}
       {/* <div className="image-section flex-1 flex justify-center md:justify-end">
       <img
          src="/public\Assets\images\_JKM0797.jpg"
          alt="My Profile"
          className="profile-image"
        />
      </div> */}

      <Link to="/projects">
      <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
          Learn More
        </button>
      </Link>
    </div>
        <LanguagesAndTools />
    
        <GamingStudent />
    </Layout>
  );
};

export default Home;
