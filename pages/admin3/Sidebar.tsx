import React from 'react'
import Receiptlist from './Receiptlist'

function Sidebar() {
  return (
    <div className="sidebar fixed top-20 bottom-0 left-0 overflow-y-auto  bg-online-blue-600 h-screen w-60">
      <div className="text-xl text-white ml-6 font-bold">
        <ul>
          <li className="pt-8 w-40">
            Velkommen, <strong>Duvara</strong>
          </li>
          <li className="pt-24">Kvitteringer</li>
          <li className="pt-24">Onlinepotten</li>
          <li className="pt-24">Fondet</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
