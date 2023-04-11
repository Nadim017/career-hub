import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import SingleJob from '../SingleJob/SingleJob';

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [job, setJob] = useState([]);
  const [filteredJob, setFilteredJob] = useState([]);

  useEffect(() => {
    const savedCart = getShoppingCart();
    const newArray = [];
    for (const id in savedCart) {
      const findJob = jobs.find((job) => job.id == id);
      if (findJob) {
        newArray.push(findJob);
      }
    }
    setJob(newArray);
    setFilteredJob(newArray);
  }, []);

  const filterOnSite = () => {
    const filteredData = job.filter((fd) => fd.remoteOrOnsite === 'Onsite');
    setFilteredJob(filteredData);
  };

  const filterOnRemote = () => {
    const filteredData = job.filter((fd) => fd.remoteOrOnsite === 'Remote');
    setFilteredJob(filteredData);
  };

  const resetFilter = () => {
    setFilteredJob(job);
  };

  return (
    <div>
      <h1 className="text-center mt-12 text-4xl font-bold">Applied Jobs</h1>
      <div className=" mt-32 mb-7">
        <div className="text-right container mx-auto mb-10">
          <button
            onClick={filterOnSite}
            className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white"
          >
            onSite
          </button>
          <button
            onClick={filterOnRemote}
            className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white ml-10"
          >
            Remote
          </button>
          <button
            onClick={resetFilter}
            className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white ml-10"
          >
            Show All
          </button>
          )
        </div>
        {filteredJob.map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
