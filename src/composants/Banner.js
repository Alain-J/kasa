import React from 'react'

function Banner(image, titre) {
  return (
    <div className='bannner-home'>
        <img src={image} alt=' La banniere' className='banner-image' />
        <h1 className='banner-texte'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner