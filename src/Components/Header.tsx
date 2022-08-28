import React from 'react'

export default function Header() {
  return (
    <div>
        <header>
        <div className="justify-center m-auto pt-20">
          <h2 className="text-white flex justify-center text-6xl p-2 font-sans font-bold">
            FIND YOUR BEST PROPERTY
          </h2>
          <p className="text-white justify-center text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            quaerat distin
          </p>
          <form className="w-1/2 m-auto ">
              <div className='flex'>

             
            <input
              className="relative"
              type="text"
              placeholder="Enter Location"
            />
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute right-30"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            </div>
          </form>
        </div>
      </header>

    </div>
  )
}
