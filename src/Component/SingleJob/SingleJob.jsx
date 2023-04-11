import React from 'react';
import './SingleJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons';

const SingleJob = ({ singleJob }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    fulltimeOrParttime,
    location,
    salary,
    remoteOrOnsite,
  } = singleJob;
  return (
    <div className="mt-5 ">
      <div className=" shadow-md  container mx-auto  flex items-center justify-around job_container">
        <img className="p-5 bg-gray-200 " src={companyLogo} alt="" />

        <div className="flex items-center justify-between gap-32 ">
          <div>
            <h3 className=" mb-2 font-bold text-lg">{jobTitle}</h3>
            <h4 className="mb-4 font-thin">{companyName}</h4>
            <button className="px-5 py-3 bg-gray-100 mr-3 font-semibold rounded-lg  text-violet-400">
              {remoteOrOnsite}
            </button>
            <button className="px-5 py-3 bg-gray-100  font-semibold rounded-lg text-violet-400">
              {fulltimeOrParttime}
            </button>
            <br />
            <p className="mt-4">
              <span className="mr-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-2  text-gray-400"
                />
                {location}
              </span>

              <span className="ml-2">
                <FontAwesomeIcon
                  icon={faDollar}
                  className="mr-2  text-gray-400"
                />
                Salary: {salary}
              </span>
            </p>
          </div>

          <div className="ml-auto">
            <button className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
