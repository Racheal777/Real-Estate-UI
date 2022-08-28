import React from "react";
import imgs from "../Images/pic2.jpg";
import imgs2 from "../Images/pics.jpg";
import Navbarx from "../Components/Nav";
import Navz from "../Components/Navz";
import img2 from "../Images/pic3.jpg";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import { Pagination} from 'flowbite-react'




export default function AllProperties() {
  return (
    <div>
      <Navbarx />
      {/* <Navz/> */}

      <header>
        <div className="justify-center m-auto pt-20">
          <h2 className="text-white flex justify-center text-6xl p-2 m-8 font-sans font-bold">
            FIND YOUR BEST PROPERTY
          </h2>
          <p className="text-white justify-center text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            quaerat distin
          </p>
        </div>
      </header>

      <section className="m-4 p-3  text-center">
        <div className="mt-6 pt-5 pb-5 font-bold">
          <h2>All Listings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center m-2 p-2">
          <div className="p-2 mx-2 bg-slate-900">
            <form action="" className="p-2">
              <h3>Filter Here</h3>
              <div>
                <input type="text" name="" id="" placeholder="search" />
              </div>

              <div className="pt-2">
                <select name="beds" id="" placeholder="select" className="p-2">
                  <option value="1" >1 bedroom</option>
                  <option value="2">2 bedroom</option>
                  <option value="3">3 bedroom</option>
                </select>
              </div>

              <div className="pt-2">
                <select name="price" id="" placeholder="select" className="p-4">
                  <option value="200">200ghc</option>
                  <option value="300">300ghc</option>
                  <option value="400">400ghc</option>
                </select>
              </div>
              <div className="text-center">
                <button className="rounded-full bg-orange-600  mt-6 px-4 py-2 text-center">
                  <a href="/allproperties" className="text-white no-underline">
                    Search
                  </a>
                </button>
              </div>
            </form>
          </div>

          <>
            <section className="col-span-2 mx-6 hover:shadow-2xl hover:-translate  duration-300  ">
              <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2">
                <div className=" hover:bg-slate-900 hover:text-white">
                  <img src={imgs} alt="pic" />

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
                      <h4>Ghc 350/month</h4>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <a
                    href="/one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline "
                  >
                    <h4 className="py-4 text-slate-900 font-bold hover:text-orange-600 ">
                      2 bedroom self-contained
                    </h4>
                  </a>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>

                  <div className="flex justify-evenly pt-4 text-white">
                    <p className="bg-orange-600 p-1">1 bed</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-2 mx-2 "></div>
            <section className="col-span-2 mx-6 hover:shadow-2xl hover:-translate  duration-300  ">
              <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2">
                <div className=" hover:bg-slate-900 hover:text-white">
                  <img src={imgs2} alt="pic" />

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
                      <h4>Ghc 350/month</h4>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <a
                    href="/one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline "
                  >
                    <h4 className="py-4 text-slate-900 font-bold hover:text-orange-600 ">
                      1 bedroom self-contained
                    </h4>
                  </a>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>

                  <div className="flex justify-evenly pt-4 text-white">
                    <p className="bg-orange-600 p-1">1 bed</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-2 mx-2 "></div>
            <section className="col-span-2 mx-6 hover:shadow-2xl hover:-translate  duration-300  ">
              <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2">
                <div className=" hover:bg-slate-900 hover:text-white">
                  <img src={img2} alt="pic" />

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
                      <h4>Ghc 400/month</h4>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <a
                    href="/one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline "
                  >
                    <h4 className="py-4 text-slate-900 font-bold hover:text-orange-600 ">
                      1 bedroom self-contained
                    </h4>
                  </a>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.consectetur adipisicing elit
                  </p>

                  <div className="flex justify-evenly pt-4 text-white">
                    <p className="bg-orange-600 p-1">1 bed</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                    <p className="bg-orange-600 p-1">Kitchen</p>
                  </div>
                </div>
              </div>
            </section>
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
