import React, { useState } from "react"
import Link from 'next/link'


function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className="flex items-center justify-between flex-wrap shadow p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Chris's Digital Garden
        </span>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-purple-600 border-purple-800 hover:text-white hover:border-purple-800 hover:bg-purple-800">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full ${showMenu ? 'block' : 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
        <Link href="/">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-purple-800 mr-4">Home</a>
        </Link>

          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-purple-800 mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-purple-800"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-purple-500 border-purple-500 hover:border-transparent hover:text-white hover:bg-purple-500 mt-4 lg:mt-0"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
