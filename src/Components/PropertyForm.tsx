import React from 'react'

export interface PropertyAttribute {
  name: string
  location:string
  facilities: string[],
  amenities: string[]
  rent: number
  description: string
  images: string[]
  children: JSX.Element|JSX.Element[];
}


export default function PropertyForm() {

  return (
    <div>PropertyForm</div>
  )
}
