import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from "react-icons/fa";
import projectsData from "../data/projectsData";


const Projects = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white"
            style={{
              background: "linear-gradient(145deg, #817B7BFF, #5D6B7BFF)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="flex items-center gap-4 mt-6">
              {/* View Project Button */}
              <button
                className="text-white font-bold rounded px-6 py-3 transition-colors duration-300"
                style={project.buttonStyles.projectButton}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#5c5c5c")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#4A4A4AFF")}
              >
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </button>
              {/* Code Button */}
              <button
                className="text-white font-bold rounded px-6 py-3 flex items-center transition-colors duration-300"
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#000000FF")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#333333")}
              >
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaGithub size={20} />
                  <span style={{ marginLeft: "8px" }}>Code</span>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;