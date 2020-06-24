import React, { Component } from 'react'
import './MenuJuegos.scss';
import CardJuego from './CustomComponent/CardJuego/CardJuego'
import Button from '@material-ui/core/Button'
import MenuJuegosNavbar from './MenuJuegosNavbar/MenuJuegosNavbar';
import comprensionLectora from '../../assets/Images/comprensionLectora.png';
import syllable from '../../assets/Images/syllable.png';
import ortografia from '../../assets/Images/ortografia.jpg';
import { getSessionName } from "../../services/authenticationServices";
import {Link} from "react-router-dom";

export default class MenuJuegos extends Component {

   render() {
      return (
         <div>
            <MenuJuegosNavbar/>
            <div className="bodyContainerMenuJuegos">
               <h1 className='Bienvenido1'>¡Hola {getSessionName()}!</h1>
               <h3 className='Bienvenido2'>Elegi cualquiera de nuestros juegos y comenzá a divertirte</h3>
               <ul className="bodyContainer-cards">
               
                  <li className="bodyContainerMenuJuegos-cards-itemJuego">
                     <Button component={Link} to="/comprensionlectora">
                        <CardJuego className="cardJuego"
                        title="Comprensión Lectora"
                        detail="Vamos a leer cuentos y aprender mientras 
                                 respondemos preguntas para sumar puntaje.
                              Comenzemos a jugar!!"
                        img={comprensionLectora}>
                        </CardJuego>
                     </Button>
                  </li>
               
                  <li className="bodyContainerMenuJuegos-cards-itemJuego">
                     <Button component={Link} to="/ortografia">
                        <CardJuego
                        title="Ortografía"
                        detail="En este juego vamos a trabajar la ortografía con las letras.
                        Para completar el nivel deberás adivinar qué palabra es colocando las letras en su lugar correspondiente"
                        img={ortografia}>
                        </CardJuego>
                     </Button>
                  </li>
               
               
                  <li className="bodyContainerMenuJuegos-cards-itemJuego">
                     <Button component={Link} to="/syllableGame">
                        <CardJuego title="Sílabas" img={syllable}
                        detail="Este juego se trata de clasificar palabras según su cantidad de sílabas.
                                 Vamos a estar viendo palabras monosílabas, bisílabas y polisílabas!">
                        </CardJuego>
                     </Button>
                  </li>
               
               </ul>
            </div>
         </div>
      )
   }
}
