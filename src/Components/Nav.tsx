import { Navbar, Dropdown, Avatar } from "flowbite-react";
function Navbarx() {
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
            
            <div className="flex md:order-2 px-3">
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Racheal Kuranchie</span>
                  <span className="block truncate text-sm font-medium">
                    racheal@gmail.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Favorites</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>


            
              <Navbar.Link  href="/" >
                Home
              </Navbar.Link>
              <Navbar.Link  href="/">About</Navbar.Link>
              <Navbar.Link href="/">Services</Navbar.Link>
              <Navbar.Link href="/allproperties">Apartments</Navbar.Link>
              <Navbar.Link href="/">Contact</Navbar.Link>
              {/* <li>
          <a href="" className="block no-underline text-lg py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
        </li> */}
            </Navbar.Collapse>
          </div>
        </nav>
      </Navbar>
    </div>
  );
}

export default Navbarx;
