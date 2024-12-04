import React from 'react';
import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded shadow-lg">
          <h3 className="font-bold text-xl">Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
      {/* Repeat for more projects */}
      </div>
    </Layout>
  );
};

export default Projects;
