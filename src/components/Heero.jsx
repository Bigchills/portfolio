import React from 'react'

const Heero = () => {
  return (
    <div >

        <div className="justify-center items-center text-center space-y-8 mt-10 px-6 ">

            <div className=" space-y-3 ">
                <h4 className="font-medium text-slate-500 dark:text-white">
                    Hi, I'm <span className="text-4xl hidden dark:inline dark:text-yellow-500">Yemi</span>
                </h4>
                <h1 className="font-sans text-4xl text-blue-900 dark:text-yellow-500 dark:hidden">
                    Yemi Shabi
                </h1>
                <p className="text-slate-700 shadow-md rounded-sm py-1 lg:w-1/2 lg:mx-auto lg:p-5
                 dark:text-slate-400 lg:text-lg">
                    I'm a web/software developer,
                    I build interactive user-friendly interfaces.
                </p>
            </div>
            <div className=" cube animate-rotateCube mx-auto justify-center items-center hidden dark:block ">
                <img className="face front w-1/2 animate-flip3d rounded-md  " src="public/3D.png" href="src/assets/3D.png" alt="front" />
                <img className="face back w-1/2 animate-flip3d rounded-md " src="public/3D.png" alt="back" />
                <img className="face right w-1/2 animate-flip3d rounded-md  " src="public/3D.png" alt="right" />
                <img className="face left w-1/2 animate-flip3d rounded-md " src="public/3D.png" alt="left" />
            </div>

            <div className=" cube animate-rotateCube mx-auto justify-center items-center dark:hidden ">
                <img className="face front w-1/2 animate-flip3d rounded-md " src="src/assets/DigiBoy.png" alt="front" />
                <img className="face back w-1/2 animate-flip3d rounded-md " src="src/assets/DigiBoy.png" alt="back" />
                <img className="face right w-1/2 animate-flip3d rounded-md  " src="src/assets/DigiBoy.png" alt="right" />
                <img className="face left w-1/2 animate-flip3d rounded-md " src="src/assets/DigiBoy.png" alt="left" />
            </div>
        </div>

      
    </div>
  )
}

export default Heero
