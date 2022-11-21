import React from 'react'
import '../styles/Home.css'
import Banner from '../composants/Banner'
import logementsListes from '../data.json'
import Logements from '../composants/Logements'
import { NavLink } from "react-router-dom"

function Home() {


  return (
    <div className='home-body'>
      <div className='section1'> 
        <Banner />
      </div>
      
      

        <div className='logements-home'>
            {logementsListes.map(logement => (
              <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}>
                <Logements id={logement.id} cover={logement.cover} title={logement.title}/>
              </NavLink>
              
          ))}
      </div>
    
    </div>
  )
}
export default Home