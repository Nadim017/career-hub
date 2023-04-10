import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeatured from '../SingleFeaturedJob/SingleFeatured';

const FeaturedJob = () => {
  const featuredJobs = useLoaderData();

  return (
    <div>
      <div className="md:grid lg:grid grid-cols-2 gap-10 container mx-auto">
        {featuredJobs
          ? featuredJobs
              .slice(0, 4)
              .map((featuredJob) => (
                <SingleFeatured
                  featuredJob={featuredJob}
                  key={featuredJob.id}
                ></SingleFeatured>
              ))
          : ''}
      </div>
      <div className="text-center mt-10">
        <button className="px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
