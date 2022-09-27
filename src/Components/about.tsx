import React from "react";

export default function About() {
  return (
    <div className="container mx-auto font-sans">
      <section className="m-0">
        <div className="mt-12 pt-5 pb-2 text-center">
          <h2 className="font-bold uppercase">Why choose us?</h2>
          <h4 className="text-slate-400 m-2 md:px-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maiores quisquam saepe{" "}
          </h4>
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
                className="w-6 h-6 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <h4>Expect Agents</h4>
            </div>

            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sed
              repudiandae consecteturto?
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
                className="w-6 h-6 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
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
                className="w-6 h-6 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>

              <h4>Portable Water</h4>
            </div>

            <p className="text-slate-400">
              Lorem ipsum, dolor sit amet consecte officia est molestiae dolor
              fugiat repellat libero repudiandae to?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
