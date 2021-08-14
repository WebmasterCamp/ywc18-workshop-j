import React from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-pink-300">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full tablet:w-auto tablet:static tablet:block tablet:justify-start">
            <a
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
              href="#pablo"
            >
              Logo
            </a>
            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer tablet:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "tablet:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none tablet:flex-row tablet:ml-auto">
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 text-2xl">ติดต่อ</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 text-2xl">เข้าห้อง</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 text-2xl"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
