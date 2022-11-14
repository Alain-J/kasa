import logo from '../asset/logo.png'
import '../styles/Banner.css'
import { NavLink } from "react-router-dom";

function Banner() {
    return (
        <div className='kasa-header'>
                <img className='kasa-logo' src={logo} alt='Logo de Kasa' /> 
            <div className='kasa-nav'>
                <NavLink to='/' className='kasa-accueil'>Accueil</NavLink>
                <NavLink to="a-propos"  className='kasa-propos'>A propos</NavLink>
            </div> 
        </div>
   
    )
   

}

export default Banner