import React from "react";
import img from "../Images/pic.jpg";
import img2 from "../Images/pic2.jpg";
import img3 from "../Images/pic3.jpg";
import img4 from "../Images/pics.jpg";

export default function Properties() {
  return (
    <div className=" font-sans bg-slate-100">
      <section className="mt-6 pt-4 pb-5  ">
        <h2 className="text-center p-4">Popular Properties</h2>

        <div className="grid md:grid-cols-3 mx-6 md:m-2 p-4 gap-x-10 gap-y-12">

          <div className="shadow hover:-translate-y-1 hover:scale-110  duration-300 rounded-md">
           
              <img src={img2} alt="pic" className="rounded-t-lg" />

              <div className="p-3 text-center">
              <a
              href="/property"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
                <h4 className=" py-2 text-sky-900 font-bold hover:text-orange-600">1 room self-contained</h4>
                </a>
                <div className="flex justify-between m-3">
                <button className="rounded-full bg-orange-600 text-white  p-2">
                  Ghc 400/month
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 font-bold hover:text-red-600">
               <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
               </svg>

                </div>
                
                <hr />
                <div className="flex text-slate-400 justify-center">
                  <p className="px-2">1200 sqft</p>
                  <p className="px-2">1 bed</p>
                </div>
              </div>
            
          </div>


          <div className="shadow hover:-translate-y-1 hover:scale-110  duration-300 rounded-md">
           
           <img src={img4} alt="pic" className="rounded-t-lg" />

           <div className="p-3 text-center">
           <a
           href="/property"
           target="_blank"
           rel="noopener noreferrer"
           className="no-underline"
         >
             <h4 className=" py-2 text-sky-900 font-bold hover:text-orange-600">1 room self-contained</h4>
             </a>
             <div className="flex justify-between m-3">
             <button className="rounded-full bg-orange-600 text-white  p-2">
               Ghc 400/month
             </button>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 font-bold hover:text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

             </div>
             
             <hr />
             <div className="flex text-slate-400 justify-center">
               <p className="px-2">1200 sqft</p>
               <p className="px-2">1 bed</p>
             </div>
           </div>
         
       </div>


       <div className="shadow hover:-translate-y-1 hover:scale-110  duration-300 rounded-md">
           
           <img src={img3} alt="pic" className="rounded-t-lg" />

           <div className="p-3 text-center">
           <a
           href="/"
           target="_blank"
           rel="noopener noreferrer"
           className="no-underline"
         >
             <h4 className=" py-2 text-sky-900 font-bold hover:text-orange-600">2 rooms self-contained</h4>
             </a>
             <div className="flex justify-between m-3">
             <button className="rounded-full bg-orange-600 text-white  p-2">
               Ghc 800/month
             </button>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 font-bold hover:text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

             </div>
             
             <hr />
             <div className="flex text-slate-400 justify-center">
               <p className="px-2">2400 sqft</p>
               <p className="px-2">2 beds</p>
             </div>
           </div>
         
       </div>



        </div>

        <div className="text-center">
        <button className="rounded-full bg-orange-600  m-2 px-4 py-2 text-center"><a href="/allproperties" className="text-white no-underline">View More</a></button>
        </div>
       
      </section>
    </div>
  );
}
