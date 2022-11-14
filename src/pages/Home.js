import React from 'react'
import '../styles/Home.css'
import logementsListes from '../data.json'
import Logements from '../composants/Logements'
import { NavLink } from "react-router-dom"

const Home = () => {


  return (
    <div className='home-body'>
      <div className='section1'> 
          <h2 className='home-text'>Chez vous, partout et ailleurs</h2>
      </div>


      <div className='background'>
        <div className='logements-home'>
            {logementsListes.map(logement => (
              <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}>
                <Logements id={logement.id} cover={logement.cover} title={logement.title}/>
              </NavLink>
              
         ))}
      </div>
      </div>
    
    </div>
  )
}
export default Home