import React from 'react'
import '../styles/Logements.css'

function Logements({id, cover, title}) {
  return (

    <div className='logements' id={id}>
          <img className='logements-images'src={cover} alt='Photos des appartements' />
          <h3 className='logements-titre'>{title}</h3>
    </div>
  )
}

export default Logements