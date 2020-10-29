import React from 'react';
import '../../styles/main.css';

import FindMeLogo from '../../images/icons/FindMeLogo.svg';
import SearchIcon from '../../images/icons/icon-search.svg';
import PostIcon from '../../images/icons/icon-post.svg';
import GoogleIcon from '../../images/icons/icon-SignInWithGoogle.png';
import MenuIcon from '../../images/icons/icon-menu.svg';
import Language from '../../images/icons/icon-language.svg';

const Navbar = (props) => {
  // Controlling the state of the mobile (burger) menu
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // Controlling the state of the Language menu
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Closing Lnguage menu in resize events
  React.useEffect(() => {
    function handleResize() {
      if (menuOpen) setMenuOpen(!menuOpen);
    }
    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <nav className="relative flex flex-wrap items-center navbar-expand-lg bg-tail-300 py-3 px-8 shadow">
      <div className="w-full sm:w-full xl:w-48 px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
          <a href="#" className="p-2 mr-4 inline-flex items-center">
            <img src={FindMeLogo} className="h-8 w-8"></img>
            <span className="text-xl text-black font-bold uppercase tracking-wide">
              Find Me
            </span>
          </a>
          <button
            className={`text-black inline-flex p-3 rounded xl:hidden ml-auto hover:text-white focus:outline-none outline-none nav-toggler items-center`}
            data-target="#navigation"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <img src={MenuIcon}></img>
          </button>
        </div>
      </div>
      <div
        className={`${
          navbarOpen ? 'flex' : 'hidden'
        } xl:flex flex-grow items-center`}
      >
        <ul className="flex flex-col xl:flex-row list-none xl:ml-auto">
          <li class="mt-2 xl:mt-0">
            <a
              href="#"
              className="xl:inline-flex xl:w-auto w-full px-3 py-1 rounded-full text-black items-center justify-center hover:text-blue-600"
            >
              <span>Home</span>
            </a>
          </li>
          <li class="mt-2 xl:mt-0">
            <a
              href="#"
              className="xl:inline-flex xl:w-auto w-full px-3 py-1 rounded-full text-black items-center justify-center hover:text-blue-600"
            >
              <span>Missing People</span>
            </a>
          </li>
          <li class="mt-2 xl:mt-0">
            <a
              href="#"
              className="xl:inline-flex xl:w-auto w-full px-3 py-1 rounded-full text-black items-center justify-center hover:text-blue-600"
            >
              <span>About Us</span>
            </a>
          </li>
          <li class="mt-2 xl:mt-0">
            <a
              href="#"
              className="xl:inline-flex xl:w-auto w-full px-3 py-1 rounded-full text-black items-center justify-center hover:text-blue-600"
            >
              <span>Contact Us</span>
            </a>
          </li>
          <li class="mt-2 xl:mt-0">
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <img src={Language}></img>
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <div
                className={`${menuOpen ? '' : 'hidden'}
          origin-top-right absolute left-0 mt-2 w-32 rounded-md shadow-lg`}
              >
                <div className="rounded-md bg-white shadow-xs">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 text-right hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      عربي
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="mt-2 xl:mt-0">
            <a href="#" className="">
              <button className="inline-flex xl:w-auto w-full mx-3 px-8 py-1 rounded-full text-gray-400 items-center justify-center border-2 h-8 border-blue-500 text-blue-500 focus:outline-none">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  className="pr-5 h-5"
                ></img>
                Search
              </button>
            </a>
          </li>
          <li class="mt-2 xl:mt-0">
            <a href="#" className="">
              <button className="inline-flex xl:w-auto w-full mx-3 px-8 py-1 rounded-full text-white bg-gradient-to-l from-blue-700 to-blue-400 items-center justify-center focus:outline-none">
                <img src={PostIcon} alt="post icon" className="pr-5 h-5"></img>
                Post
              </button>
            </a>
          </li>
          <li class="mt-2 xl:mt-0">
            <a href="www.google.com" className="">
              <button className="inline-flex xl:w-auto w-full mx-3 px-3 py-1 rounded-full text-blue-600 items-center justify-center focus:outline-none">
                <img
                  src={GoogleIcon}
                  alt="google icon"
                  className="pr-5 h-5"
                ></img>
                Sign in with Google
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
