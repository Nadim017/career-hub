import React, { useEffect, useState } from 'react';

import SingleJob from '../SingleJob/SingleJob';

const CategoryList = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch('joblist.json')
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  return (
    <div className="mt-32">
      <h1 className="text-center text-4xl font-semibold mb-4">
        Job Category List
      </h1>
      <p className="text-center font-thin mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:flex lg:flex justify-between container mx-auto">
        {jobList.map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
