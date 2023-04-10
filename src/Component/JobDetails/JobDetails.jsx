import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { jobId } = useParams();
  const [singleDetails, setSingleDetails] = useState({});
  useEffect(() => {
    fetch('/featured.json')
      .then((res) => res.json())
      .then((data) => {
        const myData = data.find((dt) => dt.id == jobId);
        setSingleDetails(myData);
      });
  }, [jobId]);
  console.log(singleDetails);
  return (
    <div>
      {singleDetails ? (
        <div className="md:grid grid-cols-2 container mx-auto mt-20 gap-16">
          <div className="">
            <h3 className="text-2xl mb-5">
              <span className="font-bold">Job Description: </span>
              {singleDetails.jobDescription}
            </h3>
            <h3 className="text-2xl mb-5">
              <span className="font-bold">Job Responsibility : </span>
              {singleDetails.jobResponsibility}
            </h3>
            <h3 className="mb-5">
              <p className="text-2xl mb-3 font-bold">
                Educational Requirements:
              </p>

              <p className="text-2xl">
                {singleDetails.educationalRequirements}
              </p>
            </h3>
            <h3>
              <p className="text-2xl mb-3 font-bold ">Experiences:</p>
              <p className="text-2xl"> {singleDetails.experiences}</p>
            </h3>
          </div>
          <div>
            <div className="bg-cyan-50 p-6 mb-5 ">
              <h2 className="text-2xl mb-3 font-bold">Job Details</h2>
              <hr />
              <h3 className="text-2xl mb-3 mt-2">
                <span className="font-semibold">Salary :</span>
                {singleDetails.salary} (Per Month)
              </h3>
              <h3 className="text-2xl mb-3">
                <span className="font-semibold">Job Title :</span>
                {singleDetails.jobTitle}
              </h3>
              <h2 className="text-2xl mb-2 font-bold">Contact Information</h2>
              <hr />
              <p className="text-2xl mb-3 mt-3 ">
                <span className="font-semibold">Phone :</span>
                {singleDetails.contactInformation?.phone}
              </p>
              <p className="text-2xl mb-3">
                <span className="font-semibold">Email :</span>
                {singleDetails.contactInformation?.email}
              </p>
              <p className="text-2xl mb-3">
                <span className="font-semibold">Address :</span>
                {singleDetails.location}
              </p>
            </div>
            <button className="w-full px-5 py-3 bg-violet-500 text-lg font-semibold rounded-lg text-white">
              Apply Now
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default JobDetails;
