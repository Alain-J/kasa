import logo from '../asset/logo.png'
import '../styles/Banner.css'

function Banner() {
    return (
        <div className='kasa-header'>
            <div className='kasa-logo'>
                <img src={logo} alt='Logo de Kasa' />
            </div>  

            <div className='kasa-nav'>
                <a href='*' className='kasa-accueil'>accueil</a>
                <a href='*' className='kasa-propos'>A propos</a>
            </div> 
        </div>
   
    )
   

}

export default Banner