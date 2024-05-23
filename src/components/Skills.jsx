import React from 'react'

const Skills = () => {
  return (
    <div className="px-3 mt-14 list-none lg:text-2xl">

        

        <div className=" font-sans text-slate-700 text-center space-y-3 items-center 
       ">
            <h3 className="text-blue-900 font-semibold  dark:text-yellow-500">
                Skills and Tech set
            </h3>

            <div className="flex space-x-12 justify-center  p-3 mb-5 rounded-md  dark:rounded-md dark:border dark:border-slate-400 shadow-md">
                <div>
                    <h3 className="text-blue-900 font-semibold list-none text-sm lg:text-lg dark:text-white">Languages</h3>
                    <div className='text-sm  lg:text-lg dark:text-slate-500'>
                        <li>Javascript</li>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-blue-900 dark:text-white font-semibold text-sm lg:text-lg " >Frameworks & Library</h3>
                    <div className="grid grid-cols-2 list-none text-sm dark:text-slate-500 lg:text-lg ">
                        <li>React js</li>
                        <li>Tailwind</li>
                        <li>Next js</li>
                        <li>Jquery</li>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skills
