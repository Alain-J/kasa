import React from 'react'
import '../styles/Footer.css'
import logoFooter from '../asset/logoFooter.png'

const Footer = () => {
  return (
   <footer className='footer'>
        <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        <div className='footer-img'>
            <img src={logoFooter} alt="Ici ce trouve le logo de kasa" />
        </div>
   </footer>
  )
}

export default Footer