import React from 'react';
import './SingleFeatured.css';
import { Link } from 'react-router-dom';

const SingleFeatured = ({ featuredJob }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    fulltimeOrParttime,
    location,
    salary,
    remoteOrOnsite,
  } = featuredJob;

  return (
    <div className="singleFeatured shadow-xl">
      <img src={companyLogo} alt="" />
      <h3 className="mt-8 mb-2 font-bold text-lg">{jobTitle}</h3>
      <h4 className="mb-4 font-thin">{companyName}</h4>
      <button className="px-5 py-3 bg-gray-100 mr-3 font-semibold rounded-lg  text-violet-400">
        {remoteOrOnsite}
      </button>
      <button className="px-5 py-3 bg-gray-100  font-semibold rounded-lg text-violet-400">
        {fulltimeOrParttime}
      </button>
      <br />
      <p className="mt-4">
        <span>{location}</span>

        <span className="ml-3">$Salary: {salary}</span>
      </p>
      <br />

      <Link to={`/job/${id}`}>
        <button className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleFeatured;
