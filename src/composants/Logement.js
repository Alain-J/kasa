import React from 'react'
import '../styles/Logement.css'

function Logement({id, cover, title}) {
  return (

    <div id={id}>
          <img className='logement-images' src={cover} alt='logements' />
          <h3 className='logement-titre'>{title}</h3>
    </div>
  )
}

export default Logement