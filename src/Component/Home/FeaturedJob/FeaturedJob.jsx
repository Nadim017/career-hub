import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeatured from '../SingleFeaturedJob/SingleFeatured';

const FeaturedJob = () => {
  const featuredJobs = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-10 container mx-auto">
      {featuredJobs.slice(0, 4).map((featuredJob) => (
        <SingleFeatured
          featuredJob={featuredJob}
          key={featuredJob.id}
        ></SingleFeatured>
      ))}
    </div>
  );
};

export default FeaturedJob;
