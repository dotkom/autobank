import React from 'react'
import Footer from './Footer'
import HeaderStats from './HeaderStats'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100">
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
