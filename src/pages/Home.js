import React from 'react'
import '../styles/Home.css'
import logementsListes from '../data.json'
import Logements from '../composants/Logements'
import { NavLink } from "react-router-dom"
import Banner from '../composants/Banner'
import Banniere from '../asset/Banniere.png'

const Home = () => {


  return (
    <div className='home-body'>
        <Banner image={Banniere} texte="Chez vous, partout et ailleurs"/>
    
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