import React, { useEffect, useState } from "react";
import Navbarx from "../Components/Nav";
import Footer from "../Components/Footer";
import img2 from "../Images/pic3.jpg";
import Header from "../Components/Header";
import { PropertyAttribute } from "../Components/PropertyForm";
import axios from "axios";
import { error } from "console";
import face3 from "../Images/face3.jpg";
import { useParams } from "react-router-dom";

export default function Property() {
  const [property, setProperty] = useState<PropertyAttribute>();
  const [house, setHouse] = useState<PropertyAttribute[]>([]);
  const [results, setResults] = useState<PropertyAttribute[]>([]);

  //id for the params on displaying one object
  const { id } = useParams();

  //url for displaying image
  const url = "http://localhost:7070/images/";

  useEffect(() => {
    axios
      .get(`http://localhost:7070/api/property/one-property/${id}`)
      .then((response) => {
        setProperty(response.data);

        //setHouse(response.data)
        console.log("house", house);

        console.log("response", response.data);
        console.log("prop", property);
      })
      .catch((error) => console.log(error));
  }, []);

  
  let allData: PropertyAttribute[] = [];

  const allProperties = async () => {
    const response = await axios.get<PropertyAttribute[]>(
      "http://localhost:7070/api/property/all-properties"
    );
    allData = response.data;
    setHouse(response.data);

    //console.log("all", allData);
  };

  //search property
  const searchProperties = async () => {
    const response = await axios.get<PropertyAttribute[]>(
      "http://localhost:7070/api/property/search/:location/:name/:rent"
    );
    allData = response.data;
    setResults(response.data);

    console.log("all", allData);
  };

  useEffect(() => {
    allProperties();
    searchProperties();
  }, []);

  //filtering to display similar house based on location
  let remainingArray: PropertyAttribute[] = [];
  let filtered: PropertyAttribute[] = [];
  let finalLists: PropertyAttribute[] = [];

  //filtered the array without the id
  const filteredArray = async () => {
    remainingArray = house.filter((item) => item.id !== property?.id);
    finalLists = remainingArray.filter(
      (apartment) => apartment.location === property?.location
    );
    //filter the array based on the location
    //if finalist doesnt contain anything, display first 3 property
    //else display the ones found
    if (finalLists.length === 0) {
      filtered = remainingArray.slice(0, 3);
    } else {
      filtered = finalLists.slice(0, 4);
    }

    // console.log("final list", filtered);

    // console.log("filter", remainingArray);
    // console.log("onedata", house);
  };

  filteredArray();

  return (
    <div>
      <Navbarx />

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

        <div></div>
      </header>

      <section className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center md:m-4 p-4">
          <div className=" md:mx-2 pt-2 mx-2 ">
            <form action="" className="md:p-2 p-4 m-auto bg-slate-900 ">
              <h3 className="text-white">Filter Here</h3>
              <div className="m-2 pb-2">
                <select name="beds" id="" placeholder="select" className="p-2">
                  <option value="1">Adenta</option>
                  <option value="2">East Legon</option>
                  <option value="3">Airport</option>
                </select>
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

          <div key={id} className="col-span-2 mx-6">
            <div>
              <img
                src={url + property?.images[0]}
                crossOrigin="anonymous"
                alt="pic"
              />
            </div>

            <div className="mx-auto p-2 text-center">
              <h2 className="text-orange-500 py-3">{property?.name}</h2>
              <p>Location: {property?.location}</p>
              <p>
                Rent : GHC <strong>{property?.rent} </strong>per month
              </p>

              <hr />
              <h3 className="text-center">About</h3>
              <p className="text-center">{property?.description}</p>
            </div>

            <h3 className="text-center">Amenities</h3>
            <div className="flex flex-row flex-wrap justify-center mx-auto p-4 text-white">
              {property?.amenities?.map((tools) => (
                <p className="bg-orange-600 p-1 m-2">{tools}</p>
              ))}
            </div>

            <h3 className="text-center">Facilities</h3>
            <div className="flex flex-row flex-wrap justify-center mx-auto p-4 ">
              {property?.facilities?.map((tools) => (
                <div>
                  <p className="bg-orange-600 p-1 m-2 text-white">{tools}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
              {property?.images.map((img) => (
                <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-110  duration-300 ">
                  <img src={url + img} crossOrigin="anonymous" alt="pic" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />
        <section>
          <h2 className="text-center p-4"> Similar Properties</h2>

          <div className="grid md:grid-cols-4  md:m-6 md:px-8 p-4 gap-x-10 gap-y-12 place-items-center">
            {filtered.map((item, id) => (
              <div key={id} className=" shadow  rounded-md">
                <img
                  src={url + item.images[0]}
                  crossOrigin="anonymous"
                  alt="pic"
                />
                <div className="p-3 text-center">
                  <a
                    href={`/property/${item.id}`}
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <h4 className=" py-2 text-sky-900 font-bold hover:text-orange-600">
                      {item.name}
                    </h4>
                  </a>

                  <p>{item.location}</p>
                  <div className="flex justify-between m-2">
                    <button className="rounded-full bg-orange-600 text-white  p-2">
                      Ghc {item.rent}/month
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 font-bold hover:text-red-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>

                  <hr />
                  <div className="flex text-slate-400 justify-center">
                    {item.amenities.map((tools) => (
                      <p className="px-2">{tools}</p>
                    ))}
                  </div>
                </div>
                <p></p>
              </div>
            ))}

            <div className="text-center">
              <button className="rounded-full bg-orange-600  m-2 px-4 py-2 text-center">
                <a href="/allproperties" className="text-white no-underline">
                  View More
                </a>
              </button>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
