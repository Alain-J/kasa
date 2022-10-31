import imgHome from '../asset/imgHome.png'
import React from 'react'
import '../styles/Home.css'
import logementsListes from '../data.json'
import Logement from '../composants/Logement'

const home = () => {


  return (
    <div className='home-body'>
      <div className='section1'> 
          <img className='home-image' src={imgHome} alt='Des rochers au bord mer' />
          <h2 className='home-text'>Chez vous, partout et ailleurs</h2>
      </div>
      
      <div className='logement-home'>
            {logementsListes.map(logement => (
              <a href='' >
                <Logement id={logement.id} cover={logement.cover} title={logement.title}/>
              </a>
         ))}
      </div>
    </div>
  )
}

export default home


