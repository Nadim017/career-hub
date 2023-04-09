import React from 'react';
import './SingleJob.css';

const SingleJob = ({ singleJob }) => {
  const { logo, name, job_available } = singleJob;
  return (
    <div className=" mb-32  pl-7  pt-10 pr-32 pb-8 singleJob">
      <img className="p-8 " src={logo} alt="" />
      <h3 className="mt-10 mb-7 font-bold text-lg">{name}</h3>
      <p className="font-thin">{job_available}</p>
    </div>
  );
};

export default SingleJob;
