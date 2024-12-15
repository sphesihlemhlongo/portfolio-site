import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-8 rounded shadow-lg">
          <h3 className="font-bold text-xl">Dreamers Club Website</h3>
          <p>A business Website created with Jekyll (Static site generator)</p>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700"
          style={{
            borderRadius: "17px",
          }}>
          <a 
            href="https://dreamersclub.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            
          >
            View Project
          </a>
        </button>
        <button className="mt-6 px-7 py-6 bg-gray-900 text-white font-bold rounded hover:bg-gray-700"
              style={{
                padding: "8px",
                // backgroundColor: "black",
                borderRadius: "17px",
                border: "none",
              }}
            >
              <a
                href="https://dreamersclub.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", display: "flex", alignItems: "center" }}
              >
                <FaGithub size={20} />
                <span style={{ marginLeft: "9px" }}>Code</span>
              </a>
            </button>
        </div>
      {/* Repeat for more projects */}
      </div>
    </Layout>
  );
};

export default Projects;
