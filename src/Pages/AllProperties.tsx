import React,{useEffect, useState} from "react";
import apiCalls from '../Services/api'
import imgs from "../Images/pic2.jpg";
import imgs2 from "../Images/pics.jpg";
import Navbarx from "../Components/Nav";
import Navz from "../Components/Navz";

import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import { Pagination } from "flowbite-react";
import { Data } from "../data";
import {PropertyAttribute} from '../Components/PropertyForm'

// interface PropertyAttribute {
//   name: string
//   location:string
//   facilities: string,
//   amenities: string
//   rent: number
//   description: string
//   images: string  
// }

interface PropertyProps{
  items : PropertyAttribute[]
}

export default function AllProperties({items}: PropertyProps) {

  
  let houses = items;

  return (
    <div>
      <Navbarx />
      {/* <Navz/> */}

      <header>
        <div className="justify-center m-auto pt-20">
          <h2 className="text-white flex justify-center text-center md:text-6xl p-2 m-8 font-sans font-bold">
            FIND YOUR BEST PROPERTY
          </h2>
          <p className="text-white justify-center text-center px-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            quaerat distin
          </p>
        </div>
      </header>

      <section className="mx-auto p-4  text-center">
        <div className="mt-3 pt-3 pb-5 font-bold">
          <h2>All Listings</h2>
        </div>

        <div className="grid grid-rows-5   grid-cols-1 md:grid-cols-3 gap-4 justify-center md:m-2 p-2">
          <div className=" md:mx-2 pt-2 mx-1  row-span-5">
            <form action="" className="md:p-2 p-4 m-auto bg-slate-900 ">
              <h3 className="text-white">Filter Here</h3>
              <div className="m-2 pb-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="search"
                  className=""
                />
              </div>

              <div className="m-2">
                <select name="beds" id="" placeholder="select" className="p-2">
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedroom</option>
                  <option value="3">3 bedroom</option>
                </select>
              </div>

              <div className="pt-2 m-2 ">
                <select name="price" id="" placeholder="select" className="">
                  <option value="200">200ghc</option>
                  <option value="300">300ghc</option>
                  <option value="400">400ghc</option>
                </select>
              </div>
              <div className="text-center">
                <button className="rounded-full bg-orange-600  mt-6 px-4 py-2 text-center">
                  <a href="/property" className="text-white no-underline">
                    Search
                  </a>
                </button>
              </div>
            </form>

            <div className="md:mx-2 pt-2 mx-2"></div>
            {/* <div className="my-8 py-8">
            <form action="" className="md:p-2 p-4 m-auto bg-slate-900 ">
                <h4 className="font-bold p-3 text-white">Say Hello</h4>
                <input type="text" name="" placeholder="name" className="my-2" />
                <input type="email" name="" placeholder="email" className="my-2"  />
                <textarea name="" id=""  placeholder="message" className="my-2" ></textarea>
                <button type="submit" className="bg-orange-600 text-white  px-4 py-2">
                Submit
              </button>
            </form>
        </div> */}

          </div>

          

          <>
            {houses.map((item, id) => (
              <>
                <section className="col-span-2 mx-6 hover:shadow-2xl hover:-translate  duration-300  ">
                  <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2">
                    <div
                      key={id}
                      className=" hover:bg-slate-900 hover:text-white"
                    >
                      <img src={item.images?.[0]} alt="pic" />

                      <div className="flex justify-center p-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-orange-600 font-extrabold"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 6h.008v.008H6V6z"
                            />
                          </svg>
                        </div>

                        <div className="font-bold">
                          <p>For Rent</p>
                          <h4>Ghc {item.rent}/month</h4>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 md:m-4">
                      <a
                        href="/one"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline "
                      >
                        <h4 className="py-4 text-slate-900 font-bold hover:text-orange-600 ">
                          {item.name}
                        </h4>
                      </a>
                      <p className="text-slate-500">{item.description}</p>

                      <div className="flex justify-evenly py-2 text-white">
                        
                                <p className="bg-orange-600 p-1">{item.facilities}</p>
                      </div>
                        
                      
                        
                    </div>
                  </div>
                </section>
              </>
            ))}
          </>
        </div>

        {/* <Pagination
  currentPage={1}
  onPageChange={onPageChange}
  showIcons={true}
  totalPages={100}
/> */}
      </section>

      <section>
        <Subscribe />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
