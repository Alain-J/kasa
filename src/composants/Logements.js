import React from 'react'
import '../styles/Logements.css'

function Logements({id, cover, title}) {
  return (

    <div className='logements' id={id}>
          <img className='logements-images'src={cover} alt={"Ici ce trouve l'img de l'appartement"}/>
          <div className='logements-background'></div>
          <h2 className='logements-titre'>{title}</h2>
    </div>
  )
}

export default Logements