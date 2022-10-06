import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100 min-h-screen flex flex-col justify-start">
        <Navbar />
        {/* Header */}
        <div className="relative bg-online-blue-800 md:pt-20 pb-32 pt-12"></div>
        <div className="xs:px-4 md:px-10 mx-auto w-full -mt-24">{children}</div>
        <Footer />
      </div>
    </>
  )
}
