import React from "react";
import img2 from "../Images/pic5.jpg";

export default function Subscribe() {
  return (
    <div>
        <section className="subscribe">
        <section className="backdrop-blur-sm bg-white/30">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 text-center ">
                <h4 className="col-span-2 md:p-4 md:m-4  font-bold text-slate-900">Do you want to talk with one of <span className="text-orange-600 ">our real estate experts?</span></h4>
                <button type="submit" className="bg-orange-600 text-white p-2 m-6 ">
                Call now: +233 5428 0959
              </button>
            </div>
        </section>


        </section>
      <section className=" bg-slate-900  ">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-stretch content-center mx-auto p-5">
          <div className="m-auto pt-2 justify-self-center col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-orange-600 font-bold"
            >
              <path
                fill-rule="evenodd"
                d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                clip-rule="evenodd"
              />
              <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
            </svg>

            <h3 className=" text-white  py-2 uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="text-slate-500">Get the latest offers</p>

            <div className="flex py-2">
              <input type="email" name="email" id="" placeholder="Your email" />
              <button type="submit" className="bg-orange-600 text-white   px-4">
                Submit
              </button>
            </div>
          </div>

          <div className="pic justify-self-center py-2 ">
              
              <img src={img2} alt="pic" className="" />
            
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
