import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full py-4 md:py-6 backdrop-blur-md bg-neutral-950/2  z-50 text-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <h4 className="text-2xl font-bold text-white dark:text-gray-100 cursor-grab">
                NEXGEN
              </h4>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-white"
                onClick={handleToggle}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16 ">
              <NavLink
                to="/"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1  focus:ring-offset-2 text-white"
              >
                {" "}
                Home{" "}
              </NavLink>

              <NavLink
                to="/events"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-white"
              >
                {" "}
                Event{" "}
              </NavLink>

              <NavLink
                to="/gallery"
                title=""
                className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
              >
                {" "}
                Gallery{" "}
              </NavLink>
              <NavLink
                to="/about"
                title=""
                className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                About{" "}
              </NavLink>
            </div>

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                FAQ{" "}
              </a>
              {/* <Contact text="Get a Quote" /> */}
            </div>
          </div>

          <nav className={`dropdown-menu ${expanded ? "block" : "hidden"}`}>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <NavLink
                  to="/events"
                  title=""
                  className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-white"
                >
                  {" "}
                  Event{" "}
                </NavLink>

                <NavLink
                  to="/gallery"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 "
                >
                  {" "}
                  Gallery{" "}
                </NavLink>
                <NavLink
                  to="/contact"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  About{" "}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
