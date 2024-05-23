import React from 'react'

const Contactmodal = ({closeForm}) => {
  return (
    <div className=" w-full h-full fixed top-0 backdrop-blur-sm flex justify-center z-50 py-14  items-center">
        <div className="w-3/4 bg-white shadow-md pb-3 rounded-md border pt-1 dark:bg-slate-950 border-slate-400 font-semibold">
            <div>
                <h2 className="font-semibold w-fit border border-slate-300
                    font-sans px-2 py-1 dark:text-yellow-500">
                    Devboy
                </h2>
            </div>
            <form action="mailto:yemishabi0@gmail.com " method='post' encType='text/plain'>
                <div className="flex flex-col justify-center items-center  mt-10 mx-auto space-y-1" >
                    <label className="font-medium dark:text-yellow-500" htmlFor="">Your name:</label>
                    <input className="border border-slate-600 h-9 rounded-lg p-2" placeholder='Your name' type="text" />
                </div>

                <div className="flex flex-col justify-center items-center w-full mx-auto space-y-1 mt-5 mb-10">
                    <label className="font-medium dark:text-yellow-500" htmlFor="">Your message:</label>
                    <textarea className="bg-slate-100" name="" id="" cols="30" rows="5"></textarea>
                </div>

                <div className=" w-1/2 flex mx-auto space-x-5 justify-center ">
                    <button onClick={()=>{
                    closeForm(false);
                    }} className="border  bg-red-600 hover:bg-red-700 rounded-md text-white px-3 py-1 text-sm" >Cancel</button>
                    <button className="border bg-black  hover:bg-slate-800 rounded-md text-white px-3 py-1 text-sm">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contactmodal
