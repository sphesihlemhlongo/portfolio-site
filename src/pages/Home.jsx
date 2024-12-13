import React from 'react';
import Layout from '../components/Layout';
import LanguagesAndTools from '../components/LanguagesAndTools';


const Home = () => {
  return (
    <Layout>
      <div className="bg-blue-500 text-white p-10 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">Explore my work and get to know me better.</p>
      <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700">
    Learn More
    </button>
    </div>
 
    <div >
   
        <LanguagesAndTools />
        </div>

    </Layout>
  );
};

export default Home;
