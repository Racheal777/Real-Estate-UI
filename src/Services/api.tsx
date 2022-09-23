import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { PropertyAttribute } from "../Components/PropertyForm";

type PropertyAttribute = {
  
  name: string
  location:string
  facilities: string[],
  amenities: string[]
  rent: number
  description: string
  images: string[]
  
  }


class apiCalls {
  
  //get the api
  http = axios.create({
    baseURL: "http://localhost:7070/api/property/",
  });

  //post a property
  async addProperty(
    name: string,
    location: string,
    facilities: string[],
    amenities: string[],
    rent: number,
    description: string,
    images: string[]
  ) {
      try {
        const response = await this.http.post<PropertyAttribute>(
            "add",
            {name,location,facilities,amenities,rent,description,images}
          );
          return response.data

      } catch (error) {
          console.log(error)
          
      }
    
  }


  //get all properties
  async getAllProperties(){
      try {
        await this.http.get<PropertyAttribute[]>('all-properties')
       .then(response =>{
         console.log(response.data)
         return response.data
       })
       

      } catch (error) {
        console.log(error)  
      }
  }

  //get one property
  async getOneProperty(id:number){
      try {
          //let params = useParams()
          const response = await this.http.get<PropertyAttribute>(`one-property/${id}`)
          return response.data

      } catch (error) {
          console.log(error)
      }
  }
}

export default new apiCalls();
