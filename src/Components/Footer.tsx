import React from "react";

export default function Footer() {
  return (
    <div >
        <footer>
      <section className="bg-slate-800 grid grid-cols-1 gap-2 md:grid-cols-4 p-8 text-white">
        <div className="my-8 py-8 ">
          <h3 className="font-bold p-3">Rentax</h3>
          <div className="flex justify-start p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mx-2"
            >
              <path
                fill-rule="evenodd"
                d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
                clip-rule="evenodd"
              />
            </svg>
            </div>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              illum consectetur! Veniam, adipisci asperiores. Blanditiis ut
              reiciendis et incidunt facere. Sapiente{" "}
            </p>
          
        </div>


        <div className="my-8 py-8 text-center">
            <h4 className="font-bold p-3  ">links</h4>
            <ul>
                <li><a href="/" className="">properties</a></li>
                <li><a href="/" className="">properties</a></li>
                <li><a href="/" className="">properties</a></li>
            </ul>
            
        </div>

        <div className="my-8 py-8">
            <form action="">
                <h4 className="font-bold p-3 text-center">Say Hello</h4>
                <input type="text" name="" placeholder="name" className="my-2" />
                <input type="email" name="" placeholder="email" className="my-2"  />
                <textarea name="" id=""  placeholder="message" className="my-2" ></textarea>
                <button type="submit" className="bg-orange-600 text-white  px-4 py-2">
                Submit
              </button>
            </form>
        </div>

        <div className="my-8 py-8">
            <h4 className="font-bold p-3 text-center">Contact us</h4>
        </div>
      </section>

      <div className="text-center bg-slate-900">
          <p className="p-2 text-slate-400">Copyright ©2022 All rights reserved | This website is made with  by Racheal</p>
      </div>
      </footer>
    </div>
  );
}