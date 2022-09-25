import React from 'react'

export interface PropertyAttribute {
  id:number
  name: string
  location:string
  facilities: string[],
  amenities: string[]
  rent: number
  description: string
  images: string[]
  
}


export default function PropertyForm() {

  return (
    <div>PropertyForm</div>
  )
}
