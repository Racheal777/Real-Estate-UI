import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

export default function Navz() {
  return (
    <div>
      <Navbar>
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a
              href="/"
              className="flex items-center no-underline"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl  text-orange-600 font-semibold whitespace-nowrap dark:text-white">
              Oakberry Estates
              </span>
            </a>

            <Navbar.Toggle
              data-collapse-toggle="navbar-sticky"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            />

            <Navbar.Collapse>
              <Navbar.Link href="/" active={true}>
                Home
              </Navbar.Link>
              <Navbar.Link  href="/">About</Navbar.Link>
              <Navbar.Link href="/">Services</Navbar.Link>
              <Navbar.Link href="/allproperties">Apartments</Navbar.Link>
              <Navbar.Link href="/">Contact</Navbar.Link>
              <div className="flex md:order-2 sm:m-2 md:m-0">
                <button
                  type="button"
                  className="text-white bg-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <a
                    href="/login"
                    className="no-underline text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Get started
                  </a>
                </button>
              </div>
            </Navbar.Collapse>
          </div>
        </nav>
      </Navbar>
    </div>
  );
}
