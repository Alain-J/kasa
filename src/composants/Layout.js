import React from 'react';
import Banner from '../composants/Banner';
import Footer from '../composants/Footer';

function Layout({children}) {
  return (
    <>
        <Banner />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout