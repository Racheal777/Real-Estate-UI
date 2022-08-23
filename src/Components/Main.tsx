import React from 'react'

import Navbarx from './Nav'
import About from './about'

export default function Main() {
  return (
    <div className='md:container md:mx-auto'>

   <Navbarx/>     

    <header>
      <div className='justify-center m-auto'>
      <h2 className='text-white flex justify-center  font-sans font-bold'>FIND YOUR BEST PROPERTY</h2>
      <form className='w-1/2 m-auto' >
        <input type="text" placeholder='Enter Location'/>
        </form> 
      </div>
     
    </header>

    <section>
      <About/>
    </section>

    </div>
  )
}
