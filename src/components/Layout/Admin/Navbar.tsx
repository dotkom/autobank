import Searchbar from 'src/components/html/searchbar'
import { useSession } from 'next-auth/react'
import React from 'react'
import Dropdown from '../../elements/Dropdown'

export default function Navbar() {
  const { data: session, status } = useSession()
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <Searchbar className="md:flex hidden" />
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <Dropdown type="user" userImage={session?.user?.image} />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  )
}
