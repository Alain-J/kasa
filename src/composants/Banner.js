import React from 'react'
import '../styles/Banner.css'

function Banner({image, texte}) {
  return (
    <div className='banner-home'>
        <img src={image} alt=' La banniere' className='banner-image' />
        <div className="banner-background"></div>
        <h1 className='banner-texte'>{texte}</h1>
    </div>
  )
}

export default Banner