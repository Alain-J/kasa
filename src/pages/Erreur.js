import React from 'react'
import '../styles/erreur.css'
import { NavLink } from "react-router-dom"

const Erreur = () => {
  return (
    <div className='page-erreur'>
        <h1 className='page404'>404</h1>
        <p className='page404-texte'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to='/' className='page404-lien'>Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default Erreur