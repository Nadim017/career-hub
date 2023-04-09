import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-around items-center mt-8">
      <h3 className="text-3xl font-semibold">Get your Job</h3>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/appliedJobs">Applied Jobs</Link>

        <Link to="blog">Blog</Link>
      </div>
      <button className="px-7 py-5 bg-violet-500 text-lg font-semibold rounded-lg text-white">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
