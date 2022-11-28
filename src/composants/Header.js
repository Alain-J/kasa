import logo from '../asset/logo.png'
import '../styles/Header.css'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className='kasa-header'>
                <img className='kasa-logo' src={logo} alt='Ici ce trouve le logo de Kasa' /> 
            <div className='kasa-nav'>
                <NavLink to='/' className='kasa-accueil'>Accueil</NavLink>
                <NavLink to="a-propos" className='kasa-propos'>A propos</NavLink>
            </div> 
        </div>
   
    )
   

}

export default Header