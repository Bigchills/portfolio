import React from 'react'

const Resume = () => {
  return (
    <div className=' items-center space-y-10 mt-20 '>
        <div className='text-blue-900 text-center font-semibold dark:text-yellow-500 lg:text-2xl'><h3>My Experience</h3></div>

        <div className="text-slate-700 dark:text-slate-400 space-y-10" >
            <p className='text-center px-4 lg:px-32 lg:text-lg'>
                I have years of experience as a frontend programmer, I have worked with companies/brands
                to help build exciting web applications.
            </p>

            <div className='flex flex-col lg:flex-row space-y-5 lg:text-lg px-2 lg:space-x-24 justify-center lg:px-14 items-center'>
                <div className="space-y-2 shadow-md rounded-sm  p-3">
                    <h3 className="font-semibold">
                       Company: Famgleks Foods
                    </h3>
                    <span className='text-slate-500 font-normal'><p> Date: Dec 2023 - date </p></span>
                    <p>
                        Role: Front-end software developer
                    </p>
                </div>

                <div className="space-y-2 shadow-md rounded-sm  p-3">
                    <h3 className="font-semibold">
                       Company: Easyfixdigital solutions
                    </h3>
                    <span className='text-slate-500 font-normal'><p> Date: Jun 2020 - Dec 2022 </p></span>
                    <p>
                        Role: Web developer(Front-end)
                    </p>
                </div>
            </div>


        </div>

      
    </div>
  )
}

export default Resume
