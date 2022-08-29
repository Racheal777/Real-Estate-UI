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
          <div className=" md:mx-2 pt-2 mx-2 "></div>

          <div className="col-span-2 mx-6">
            <div>
              <img src={img2} alt="" />
            </div>

            <div>
              <h2>home</h2>
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
