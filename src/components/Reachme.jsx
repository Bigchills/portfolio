import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

const Reachme = () => {
  return (
    <div className='text-center mt-16 space-y-4 p-32  border-slate-400 border-t'>
        <div>
            <h3 className="font-semibold font-sans text-blue-900 dark:text-blue-400 text-3xl">
                Reach Me!
            </h3>
        </div>

        <div className='flex space-x-4 justify-center items-center text-3xl dark:text-slate-400'>
            <a href="https://www.instagram.com/yhemi__?igsh=MXJzb3p2cnpqdThxYQ%3D%3D&utm_source=qr"><FaInstagram/></a>
            <a href='' ><FaWhatsapp/></a>

        </div>
      
    </div>
  )
}

export default Reachme
