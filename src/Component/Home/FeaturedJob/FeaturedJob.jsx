import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeatured from '../SingleFeaturedJob/SingleFeatured';

const FeaturedJob = () => {
  const featuredJobs = useLoaderData();
  const [showAllData, setShowAllData] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleShowAllData = () => {
    setShowAllData(true);
    setButtonClicked(true);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-4">Featured Jobs</h1>
      <p className="text-center font-thin mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid lg:grid grid-cols-2 gap-10 container mx-auto mb-10">
        {featuredJobs &&
          featuredJobs
            .slice(0, showAllData ? featuredJobs.length : 4)
            .map((featuredJob) => (
              <SingleFeatured
                featuredJob={featuredJob}
                key={featuredJob.id}
              ></SingleFeatured>
            ))}
      </div>
      {!buttonClicked && (
        <div className="text-center mt-10">
          <button
            onClick={handleShowAllData}
            className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white"
          >
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJob;
