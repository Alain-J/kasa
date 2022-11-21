import React from 'react';
import Header from '../composants/Header';
import Footer from '../composants/Footer';

function Layout({children}) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout