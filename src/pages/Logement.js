import React from 'react'
import '../styles/logement.css'
import logementsListes from '../data.json'
import { useParams, Navigate } from 'react-router-dom';
import Erreur from './Erreur';

function Logement()  {
   /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = logementsListes.find(logement => logement.id === id.id);

  return(
   <div>
    <ul>{ficheLogement.host.name}</ul>
    <img src={ficheLogement.host.picture} alt='tete'/>
   </div>
    )
}

     
      
export default Logement