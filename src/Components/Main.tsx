import React from 'react'

import Slides from './Slides'
import Navbarx from './Nav'

export default function Main() {
  return (
    <div className='md:container md:mx-auto'>

   <Navbarx/>     

    <header>
    
        {/* <h2>Find Your Perfect Dream House</h2> */}
        <Slides/>
    </header>
    </div>
  )
}
