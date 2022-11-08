import React, { useState } from 'react'
import Receiptlist from './Receiptlist'

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className="">
      {showSidebar ? (
        <button
          className="flex text-4xl absolute text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed absolute   z-30 flex items-center cursor-pointer left-10 top-6"
          fill="bg-online-blue-500"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-72 bg-online-blue-500  pl-10 pt-10 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full'
        }`}
      >
        {' '}
        <nav className="pt-10">
          <ul className="space-y-12 px-2 w-full flex flex-col overflow-hidden text-md sm:text-xl ">
            <li className="pt-8 ">
              Velkommen, <strong>Duvara</strong>
            </li>
            <li className="">Kvitteringer</li>
            <li className="">Onlinepotten</li>
            <li className="">Fondet</li>
          </ul>
        </nav>
      </div>
    </div>

    /**  <aside className="w-0 sm:w-1/5 fixed top-20  left-0 overflow-y-auto  bg-online-blue-600 min-h-screen">
      <div className="text-xl flex flex-initial text-white ml-6 font-bold ">
        <nav>
          <ul className="space-y-12 px-2 w-full flex flex-col overflow-hidden ">
            <li className="pt-8 ">
              Velkommen, <strong>Duvara</strong>
            </li>
            <li className="">Kvitteringer</li>
            <li className="">Onlinepotten</li>
            <li className="">Fondet</li>
          </ul>
        </nav>
      </div>
    </aside>*/
  )
}

export default Sidebar
