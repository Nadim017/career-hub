import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="lg:flex justify-between container mx-auto items-center mt-8 text-center sticky top-0">
      <h3 className="text-3xl font-semibold">Get your Job</h3>
      <div className="md:flex gap-10 text-xl text-center mb-3 mt-3 header_link">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/appliedJob">Applied Jobs</Link>

        <Link to="/blog">Blog</Link>
      </div>
      <button className="px-6 py-4 bg-violet-500 text-lg font-semibold rounded-lg text-white">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
