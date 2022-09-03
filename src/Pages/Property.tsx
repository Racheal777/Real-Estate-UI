import React from "react";
import Navbarx from "../Components/Nav";
import Footer from "../Components/Footer";
import img2 from "../Images/pic3.jpg";
import Header from "../Components/Header";

export default function Property() {
  return (
    <div>
      <Navbarx />

      <Header />
      <section>
        <div className="grid    grid-cols-1 md:grid-cols-3 gap-4 justify-center md:m-4 p-4">
          <div className=" md:mx-2 pt-2 mx-2 ">
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
          </div>

          <div className="col-span-2 mx-6">
            <div>
              <img src={img2} alt="" />
            </div>

            <div className="mx-auto p-2">
              <h2 className="text-orange-500 py-3">1 bedroom self-contained</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                suscipit minima delectus molestias cumque reiciendis atque.
                Perspiciatis quo placeat dolor laboriosam vero, reiciendis
                laudantium blanditiis labore, fuga nostrum quia illo.
              </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center mx-auto p-4 text-white">
              <p className="bg-orange-600 p-1 m-2">1 bed</p>
              <p className="bg-orange-600 p-1 m-2">1 bed</p>
              <p className="bg-orange-600 p-1 m-2">1 bed</p>
              <p className="bg-orange-600 p-1 m-2">1 bed</p>
              <p className="bg-orange-600 p-1 m-2">1 bed</p>
              <p className="bg-orange-600 p-1 m-2">1 bed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
              <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-110  duration-300 ">
                <img src={img2} alt="" />
              </div>

              <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src={img2} alt="" />
              </div>

              <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src={img2} alt="" />
              </div>

              <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-300 ">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
