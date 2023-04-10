import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h3 className="text-3xl font-bold ">Page Not Found !!!!!!!!!! 😥</h3>
        <p className="text-2xl font-semibold mt-3 mb-3">
          Error : 444000000044444!
        </p>
        <Link to="/">
          <button className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
