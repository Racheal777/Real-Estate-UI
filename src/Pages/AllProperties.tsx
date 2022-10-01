import React, { useEffect, useState } from "react";
import apiCalls from "../Services/api";
import imgs from "../Images/pic2.jpg";
import imgs2 from "../Images/pics.jpg";
import Navbarx from "../Components/Nav";
import Navz from "../Components/Navz";
import face3 from "../Images/face3.jpg";
import Footer from "../Components/Footer";
import Subscribe from "../Components/Subscribe";
import { Pagination } from "flowbite-react";
import { Data } from "../data";
import { PropertyAttribute } from "../Components/PropertyForm";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
}
type PropertyProps = {
  posts: PropertyAttribute[];
  //children: JSX.Element | JSX.Element[];
};

//const properties: PropertyAttribute[] = [];
const properties: PropertyAttribute[] = [];
export default function AllProperties() {
  const [name, setName] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");
  const [posts, setPosts]: [
    PropertyAttribute[],
    (posts: PropertyAttribute[]) => void
  ] = React.useState(properties);

  let houses = posts;
  const pic = houses.map((imgg) => imgg.images[0]);
  //image url
  const url = "http://localhost:7070/images/";

  const { ids } = useParams();
  //display all properties
  React.useEffect(() => {
    axios
      .get<PropertyAttribute[]>(
        "http://localhost:7070/api/property/all-properties"
      )
      .then((response) => {
        setPosts(response.data.reverse());

        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //FUNCTION TO SUBMIT THE SEARCH FORM
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    SearchProperties();

    console.log(name, location, rent);
  };
  //SEARCH PROPERTY
  const SearchProperties = async () => {
    let properties = await axios
      .get<PropertyAttribute[]>(
        `http://localhost:7070/api/property/search/${location}/${name}/${rent}`
      )
      .then((response) => {
        if (response) {
          setPosts(response.data);
          console.log(houses);
        } else {
          houses = posts;
        }

        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log("nee", houses);
  return (
    <div>
      <Navbarx />
      {/* <Navz/> */}

      <header>
        <div className="justify-center m-auto pt-20">
          <h2 className="text-white flex justify-center text-center md:text-6xl p-2 m-8 font-sans font-bold">
            BROWSE OUR BEST PROPERTY
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

        <div className="grid    grid-cols-1 md:grid-cols-3 gap-4 justify-center md:m-2 p-2">
          <div className=" md:mx-2 pt-2 mx-1  row-span-5">
            <form
              action=""
              onSubmit={submitForm}
              className="md:p-2 p-4 m-auto bg-slate-900 "
            >
              <h3 className="text-white">Filter Here</h3>
              <div className="m-2 pb-2">
                <input
                  type="text"
                  name=""
                  id=""
                  value={location}
                  placeholder="search"
                  className=""
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="m-2">
                <select
                  name="beds"
                  value={name}
                  id=""
                  placeholder="select"
                  className="p-2"
                  onChange={(e) => setName(e.target.value)}
                >
                  <option value="1">Select</option>
                  <option value="single room">Single room</option>
                  <option value="1 bedroom">1 bedroom</option>
                  <option value="2 bedroom">2 bedroom</option>
                  <option value="Chamber and Hall">Chamber and Hall</option>
                </select>
              </div>

              <div className="pt-2 m-2 ">
                <select
                  name="price"
                  value={rent}
                  id=""
                  placeholder="select"
                  className=""
                  onChange={(e) => setRent(e.target.value)}
                >
                  <option value="1">select</option>
                  <option value="400">400ghc</option>
                  <option value="600">600ghc</option>
                  <option value="800">800ghc</option>
                  <option value="900">900ghc</option>
                  <option value="1000">1000ghc</option>
                </select>
              </div>
              <div className="text-center">
                <button className="rounded-full bg-orange-600  mt-6 px-4 py-2 text-center text-white">
                  Search
                </button>
              </div>
            </form>

            <div className="md:mx-2 pt-8 mx-2 md:mt-12">
              <div className="rounded-lg">
                <img
                  src={face3}
                  alt="pic"
                  className="rounded hover:rounded-lg"
                />

                <div className="pt-4">
                  <h4>James Kuranchie</h4>
                  <p>Estate Manager</p>

                  <div>
                    <h5>Contact details</h5>
                    <hr />
                    <p> Phone: 0542802959</p>
                    <p>Email : kuranchieracheal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
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
                      <img
                        src={url + item.images[0]}
                        crossOrigin="anonymous"
                        alt="pic"
                      />

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
                        href={`/property/${item.id}`}
                        rel="noopener noreferrer"
                        className="no-underline "
                      >
                        <h4 className="py-4 text-slate-900 font-bold hover:text-orange-600 ">
                          {item.name}
                        </h4>
                      </a>
                      <h4 className="text-slate-500">
                        Located at : {item.location}
                      </h4>

                      <div className="flex justify-evenly py-2 text-white">
                        {item.amenities.map((tools) => (
                          <p className="bg-orange-600 p-1">{tools}</p>
                        ))}
                      </div>

                      <div className="flex justify-evenly py-2 text-white">
                        {item.facilities.map((tools) => (
                          <p className="text-orange-600 p-1">{tools}</p>
                        ))}
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
