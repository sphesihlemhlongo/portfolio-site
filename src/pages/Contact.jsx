import React from 'react';
import Layout from '../components/Layout';

const Contacts = () => {
  return (
    <Layout>
      <form className="max-w-lg mx-auto p-4 bg-gray-100 rounded shadow-lg">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            />
        </div>
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
        >
            Send
        </button>
        </form>

    </Layout>
  );
};

export default Contacts;
