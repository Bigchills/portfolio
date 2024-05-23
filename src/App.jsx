import React from 'react'
import Navbar from './components/Navbar'
import Heero from './components/Heero'
import Services from './components/Services'
import Skills from './components/Skills'
import Jobs from './components/Jobs'
import Reachme from './components/Reachme'
import Resume from './components/Resume'
import { useState, useEffect } from 'react'

const App = () => {


  


  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  
  return (
    <div className=  {darkMode ? "dark": ""} >

      <main className="dark:bg-slate-950 font-sans lg:text-lg">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
        <Heero/>
        <Services/>
        <Skills/>
        <Jobs/> 
        <Resume/>   
        <Reachme/>   
      </main>   





      
    </div>
  )
}

export default App
