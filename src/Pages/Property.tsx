import React, { useEffect, useState } from "react";
import Navbarx from "../Components/Nav";
import Footer from "../Components/Footer";
import img2 from "../Images/pic3.jpg";
import Header from "../Components/Header";
import {PropertyAttribute} from '../Components/PropertyForm'
import axios from "axios";
import { error } from "console";
import { useParams } from "react-router-dom";

type OneProperty = {
  id: number
  name: string,
  location:string,
  facilities: string[],
  amenities: string[],
  rent: number,
  description: string,
  images: string[]
  
}

const properties:PropertyAttribute[] = []

export default function Property() {
  const [property, setProperty] = useState<PropertyAttribute>()

  const {id} = useParams()

  const url = "http://localhost:7070/images/" ;

  useEffect(() => {
    axios.get(`http://localhost:7070/api/property/one-property/${id}`)
    .then(response => {
      setProperty(response.data)
      console.log(response.data)
      console.log('prop', property)
    }).catch((error) => console.log(error))
  },[])

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
          </div>

          
           
              <div key={id} className="col-span-2 mx-6">

           
            <div>
            <img src={url + property?.images[0]} crossOrigin='anonymous' alt="pic"/>

            </div>

            <div className="mx-auto p-2">
              <h2 className="text-orange-500 py-3">{property?.name}</h2>
              <p>Location: {property?.location}</p>
              <p>Rent : GHC <strong>{property?.rent} </strong>per month</p>
              

              <p>{property?.description}</p>
            </div>

            <h3 className="text-center">Amenities</h3>
            <div className="flex flex-row flex-wrap justify-center mx-auto p-4 text-white">
 
              {property?.amenities?.map(tools => (
                  <p className="bg-orange-600 p-1 m-2">{tools}</p>
                  
              ))}
              
            </div>

            <h3 className="text-center">Facilities</h3>
            <div className="flex flex-row flex-wrap justify-center mx-auto p-4 ">
           
              {property?.facilities?.map(tools => (
                <div>
                  
 <p className="bg-orange-600 p-1 m-2 text-white">{tools}</p>
                </div>
                 
                  
              ))}
              
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
            {property?.images.map(img => (
              <div className="hover:shadow-2xl hover:-translate-y-1 hover:scale-110  duration-300 ">
             

              
                <img src={url + img} crossOrigin='anonymous' alt="pic"/>
                </div>
             

              
           
              ))}
               </div>
          </div>

        </div>
        
      </section>

      <Footer />
    </div>
  );
}
