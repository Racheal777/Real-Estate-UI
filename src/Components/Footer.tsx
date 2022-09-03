import React from "react";

export default function Footer() {
  return (
    <div >
        <footer className="mb-0">
      <section className="bg-slate-800 grid grid-cols-1 gap-2 md:grid-cols-4 p-8 px-16 ">

        <div className="md:my-8 md:py-8 mx-4 ">
          <h4 className="font-bold py-3 text-white">Oakberry Estate</h4>
          
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              illum consectetur! Veniam, adipisci asperiores. Blanditiis ut
              reiciendis et incidunt facere. Sapiente{" "}
            </p>
          
        </div>


        <div className="md:my-8 md:py-8 mx-4 ">
            <h4 className="font-bold py-3 text-white ">Links</h4>
            
                <li className="py-2 list-none"><a href="/" className=" hover:text-orange-500 no-underline">Our properties</a></li>
                <li className="py-2 list-none"><a href="/" className="hover:text-orange-500 no-underline">Affordable housing</a></li>
                <li className="py-2 list-none"><a href="/" className="hover:text-orange-500 no-underline">Our staff</a></li>
                <li className="py-2 list-none "><a href="/" className="hover:text-orange-500 no-underline">Our Community</a></li>
           
            
        </div>

        <div className="md:my-8 md:py-8 mx-4">
            <form action="">
                <h4 className="font-bold py-3 text-white ">Say Hello</h4>
                <input type="text" name="" placeholder="name" className="my-2" />
                <input type="email" name="" placeholder="email" className="my-2"  />
                <textarea name="" id=""  placeholder="message" className="my-2" ></textarea>
                <button type="submit" className="bg-orange-600 text-white  px-4 py-2">
                Submit
              </button>
            </form>
        </div>

        <div className="md:my-8 md:py-8 mx-4 text-white">
            <h4 className="font-bold py-3 ">Contact us</h4>

           
            <li className="py-2 list-none"><a href="/" className="no-underline  hover:text-orange-500">Oxford street Osu, Accra, Ghana</a></li>
                <li className="py-2 list-none ">0542802959</li>
                <li className=" py-2 list-none"><a href="/" className="no-underline  hover:text-orange-500">www.relestate.com</a></li>
                <li className="py-2 list-none "><a href="/" className="text-white hover:text-orange-500 no-underline">racheal@gmail.com</a></li>
          
        </div>
      </section>

      <div className="text-center bg-slate-900">
          <p className="p-4 mb-0 text-slate-400">Copyright ©2022 All rights reserved | This website is made  by Racheal</p>
      </div>
      </footer>
    </div>
  );
}
