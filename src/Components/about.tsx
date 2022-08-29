import React from "react";

export default function About() {
  return (
    <div className="container mx-auto font-sans">
      <section className="m-0">
        <div className="mt-12 pt-5 pb-2 text-center">
          <h2 className="font-bold uppercase">Why choose us?</h2>
          <h4 className="text-slate-400 m-2 md:px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe </h4>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-3 m-2 p-4  text-center">
          <div className="p-6">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-2 mx-auto "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h4>Expect Agents</h4>
            </div>

            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sed
               repudiandae  consecteturto?
            </p>
          </div>

          <div className=" p-4">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-1 mx-auto "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h4>Good Security</h4>
            </div>

            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sed
              libero repudiandae to?
            </p>
          </div>

          <div className="p-4">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-1 mx-auto "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <h4>Portable Water</h4>
            </div>

            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consecte officia est molestiae dolor fugiat repellat libero repudiandae to?
            </p>
          </div>

          

          
        </div>
      </section>
    </div>
  );
}
