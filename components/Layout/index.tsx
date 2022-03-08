import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from './Head'
import Bankbot from '../Bankbot'

type Props = {
  children?: ReactNode
  title?: string
  className?: string
}

const Layout = ({ children, title = 'Unkn', className = '' }: Props) => {
  return (
    <div className={`bg-background text-zinc-700 text-Montserrat min-h-screen`}>
      <Head title={title} />
      <Navbar />
      <main
        className={`${className} min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-10`}
      >
        {children}
      </main>
      <Footer />
      <Bankbot />
    </div>
  )
}

export default Layout
