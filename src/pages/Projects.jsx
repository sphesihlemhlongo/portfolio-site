import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from "react-icons/fa";
import projectsData from "../data/projectsData";


const Projects = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-100 p-8 rounded shadow-lg">
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p>{project.description}</p>
            {/* Button Container */}
            <div className="flex items-center gap-4 mt-6">
              {/* View Project Button */}
              <button
                className="text-white font-bold rounded hover:opacity-90"
                style={project.buttonStyles.projectButton}
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
                className="text-white font-bold rounded hover:opacity-90 flex items-center"
                style={project.buttonStyles.codeButton}
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
