import React from 'react'
import { FaMoon } from 'react-icons/fa'

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <div className="dark:bg-slate-950">
        <nav className="flex  justify-between items-center px-3 py-3 sticky z-10 top-0 ">
            <div>
                <h2 className="font-semibold border border-slate-300
                    font-sans px-2 py-1 dark:text-yellow-500">
                    Devboy
                </h2>
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <div className="border border-slate-200 p-1 dark:text-white">
                    <FaMoon onClick={() => setDarkMode(!darkMode)} className="text-sm"/>
                </div>
                <div className="flex justify-center items-center">
                    <button  className="flex justify-center items-center bg-blue-900
                     text-sm rounded-md text-white px-2 py-1 dark:bg-blue-500" >Contact Me</button>
                </div>
            </div>            
        </nav>
      
    </div>
  )
}

export default Navbar
