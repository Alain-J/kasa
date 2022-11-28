import React from "react";
import "../styles/APropos.css";
import Dropdown from "../composants/Dropdown";
import Banner from "../composants/Banner";
import BannerPropos from '../asset/BannerPropos.png'


function APropos() {
    return(
        <div className="APropos">
            <Banner image={BannerPropos} />
            <div className="dropdown-propos">
            <Dropdown titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Dropdown titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Dropdown titre="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Dropdown titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </div>
    );
}

export default APropos;