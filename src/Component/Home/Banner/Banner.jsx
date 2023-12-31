import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="md:flex  justify-between items-center container mx-auto mt-10 bg-violet-50">
      <div className="banner_text md:w-1/2 ml-10 mx-auto">
        <h1 className="text-5xl ">
          One Step <br />
          Closer To Your <br />
          <span className="text-violet-500 mt-3">Dream Job</span>
        </h1>
        <p className="mt-6 font-thin">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="px-6 py-4 bg-violet-500 text-lg font-semibold rounded-lg text-white mt-8">
          Get Started
        </button>
      </div>
      <img
        className="md:w-1/2"
        src="/images/All Images/P3OLGJ1 copy 1.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
