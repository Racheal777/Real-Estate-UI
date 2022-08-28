import { Navbar, Dropdown, Avatar } from "flowbite-react";
function Navbarx() {
  return (
    <div>
      <Navbar>
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a
              href="https://flowbite.com/"
              className="flex items-center no-underline"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl  text-orange-600 font-semibold whitespace-nowrap dark:text-white">
                Rent
              </span>
            </a>

            
            <div className="flex md:order-2">
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


            <Navbar.Toggle
              data-collapse-toggle="navbar-sticky"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            />

            <Navbar.Collapse>
              <Navbar.Link href="/" active={true}>
                Home
              </Navbar.Link>
              <Navbar.Link href="/">About</Navbar.Link>
              <Navbar.Link href="/">Services</Navbar.Link>
              <Navbar.Link href="/allapartments">Apartments</Navbar.Link>
              <Navbar.Link href="/">Contact</Navbar.Link>
            </Navbar.Collapse>
          </div>
        </nav>
      </Navbar>
    </div>
  );
}

export default Navbarx;
