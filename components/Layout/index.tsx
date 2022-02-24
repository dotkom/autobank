import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from './Head';

type Props = {
  children?: ReactNode;
  title?: string;
  className?: string;
};

const Layout = ({
  children,
  title = 'Online | økonomi',
  className = '',
}: Props) => {
  return (
    <div className={`bg-background text-zinc-700 text-Montserrat min-h-screen`}>
      <Head title={title} />
      <Navbar />
      <main
        className={`${className} min-h-[calc(100vh-64px)] flex items-center justify-center`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;