import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import SingleJob from '../SingleJob/SingleJob';

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [job, setJob] = useState([]);

  useEffect(() => {
    const savedCart = getShoppingCart();
    let newArray = [];
    for (const id in savedCart) {
      const findJob = jobs.find((job) => job.id == id);
      if (findJob) {
        newArray.push(findJob);
      }
    }
    setJob(newArray);
  }, []);

  return (
    <div>
      <h1 className="text-center mt-12 text-4xl font-bold">Applied Jobs</h1>
      <div className=" mt-32 mb-7">
        <div className="text-right container mx-auto mb-10">
          <button className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white">
            onSite
          </button>
          <button className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white ml-10">
            Remote
          </button>
        </div>
        {job.map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
