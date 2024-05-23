import React from 'react';
import jobsData from '../jobs.json';

const Jobs = () => {
  return (
    <div className="jobs px-10 mt-16 flex flex-col justify-center items-center b">
      <h2 className=" font-semibold mb-6 text-blue-900 dark:text-yellow-500 lg:text-2xl">My Recent Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-center lg:items-center gap-8">
        {jobsData.map((job, index) => (
          <div key={index} className="job-card border rounded-lg p-3 shadow space-y-2 max-w-64  bg-white">
            <h3 className="text-slate-700 font-semibold lg:text-lg">{job.title}</h3>
            <p className="text-gray-700 text-sm lg:text-lg">{job.description}</p>
            <img src={job.imageUrl} alt={job.title} className="w-full h-48 object-cover" />
            <button className='flex justify-center rounded-md items-center px-2 py-1 bg-black text-white'>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="">
              View Project
            </a>
           </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
