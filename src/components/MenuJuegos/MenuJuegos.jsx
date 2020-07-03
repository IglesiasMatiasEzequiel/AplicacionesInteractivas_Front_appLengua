import React, { Component } from 'react'
import './MenuJuegos.scss';
import CardJuego from './CustomComponent/CardJuego/CardJuego'
import Button from '@material-ui/core/Button'
import MenuJuegosNavbar from './MenuJuegosNavbar/MenuJuegosNavbar';
import comprensionLectora from '../../assets/Images/comprensionLectora.png';
import syllable from '../../assets/Images/syllable.png';
import ortografia from '../../assets/Images/ortografia.jpg';
import { getSessionName } from "../../services/authenticationServices";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import BackgroundCss from './Background.css';

export default class MenuJuegos extends Component {

   render() {
      return (
         <div className="backgroundImage">
            <MenuJuegosNavbar />
            <div>
               <h3 className='Bienvenido1'>¡Hola {getSessionName()}!</h3>
               <h6 className='Bienvenido2'>Elegi cualquiera de nuestros juegos y comenzá a divertirte</h6>
               <Container maxWidth="lg">
                  <Grid container spacing={3}>
                     <Grid item lg md sm xs={12}>
                        <Button component={Link} to="/comprensionlectora">
                           <CardJuego 
                              className="cardJuego"
                              title="Comprensión Lectora"
                              detail="Vamos a leer cuentos y aprender mientras 
                              respondemos preguntas para sumar puntaje.
                              Comenzemos a jugar!!"
                              img={comprensionLectora}>
                           </CardJuego>
                        </Button>
                     </Grid>
                     <Grid item lg md sm xs={12}>
                        <Button component={Link} to="/ortografia">
                           <CardJuego className="cardJuego"
                              title="Ortografía"
                              detail="En este juego vamos a trabajar la ortografía con las letras.
                              Para completar el nivel deberás adivinar qué palabra es colocando las letras en su lugar correspondiente"
                              img={ortografia}>
                           </CardJuego>
                        </Button>
                     </Grid>
                     <Grid item lg md sm xs={12}>
                        <Button component={Link} to="/syllableGame">
                           <CardJuego className="cardJuego"
                              title="Sílabas"
                              detail="Este juego se trata de clasificar palabras según su cantidad de sílabas.
                              Vamos a estar viendo palabras monosílabas, bisílabas y polisílabas!"
                              img={syllable}>
                           </CardJuego>
                        </Button>
                     </Grid>
                  </Grid>
               </Container>
            </div>
         </div>
      )
   }
}
