import React from 'react';


const Timeline = () => {
  return (
     
   <div>
     <div className="container bg-[#cce0eb] mx-auto w-full h-full">
     <div className="relative wrap overflow-hidden p-10 h-full">
       <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
       {/* <!-- right timeline --> */}
       <div className="animate__animated wow animate__fadeInUp mb-8 flex justify-between items-center w-full right-timeline animate_animated wow animate__fadeInUp"
       data-wow-delay=".2s">
         <div className="order-1 w-5/12"></div>
         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
           <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
         </div>
         <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
           <h3 className="mb-3 font-bold text-gray-800 text-xl">Placeholder</h3>
           <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Insert Text</p>
         </div>
       </div>
   
       {/* <!-- left timeline --> */}
       <div className="animate__animated wow animate__fadeInUp mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
       data-wow-delay=".5s">
         <div className="order-1 w-5/12"></div>
         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
           <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
         </div>
         <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
           <h3 className="mb-3 font-bold text-white text-xl">Placeholder</h3>
           <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Insert Text</p>
         </div>
       </div>
       
       {/* <!-- right timeline --> */}
       <div className="animate__animated wow animate__fadeInUp mb-8 flex justify-between items-center w-full right-timeline"
        data-wow-delay=".8s">
         <div className="order-1 w-5/12"></div>
         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
           <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
         </div>
         <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
           <h3 className="mb-3 font-bold text-gray-800 text-xl">Placeholder</h3>
           <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Insert Text</p>
         </div>
       </div>
   
       {/* <!-- left timeline --> */}
       <div className="animate__animated wow animate__fadeInUp mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
       data-wow-delay="1s">
         <div className="order-1 w-5/12"></div>
         <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
           <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
         </div>
         <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
           <h3 className="mb-3 font-bold text-white text-xl">PlaceHolder</h3>
           <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Insert Text</p>
         </div>
       </div>
     </div>
   </div>
   </div>
   
    
  )
}

export default Timeline