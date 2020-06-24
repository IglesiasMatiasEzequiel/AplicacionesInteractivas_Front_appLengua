import React, { Component } from 'react'
import TituloGeneral from './TituloGeneral';
import Texto from './Texto';
import Respuesta from './Respuesta';
import ResultadoJuego from './ResultadoJuego';
import MenuJuegosNavbar from '../../MenuJuegosNavbar/MenuJuegosNavbar';
import gameInfoData from "../../../../assets/jsonGames/ComprensionLectora/dataComprensionLectoraStructure";
import Container from '@material-ui/core/Container';
import BackgroundCss from '../../Background.css';

export class JuegoComprension extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {comprension: "comprensionJuego"}

        var level = gameInfoData.levels && gameInfoData.levels.length > 0 ? gameInfoData.levels[gameInfoData.levelIndex] : null;
        var pregunta = level && level.pregunta && level.pregunta.length > 0 ? level.pregunta[0] : null;
        var cantidadlevel = gameInfoData.levels.length;

        this.state = {
            juegoTerminado: false,
            actualLevel:0,
            actualPregunta:0,

            puntajeNivel:0,
            puntajeTotal:0,
            nivelTerminado: false,
            gameData: gameInfoData,

            nivelActual: level,
            preguntaActual: pregunta,
            cantidadlevel: cantidadlevel,
        }

        this.onOptionClick = this.onOptionClick.bind(this);
        this.onGoToNextLevel = this.onGoToNextLevel.bind(this);

    }

    onOptionClick() {
        var opcioneleguida = document.querySelector('input[name="customized-radios"]:checked').value;
        if (opcioneleguida==this.state.nivelActual.preguntas[this.state.actualPregunta].rta_correcta) {
            this.setState( {puntajeNivel: this.state.puntajeNivel + 15} );
        }

        this.setState(prevState => ({
            ...prevState,
            actualPregunta: this.state.actualPregunta + 1
        }));

        // Cuando termino un nivel
        if (!this.state.juegoTerminado&&this.state.actualPregunta>=this.state.nivelActual.cantidadpreguntas-1) {
            this.setState(prevState => ({
                ...prevState,
                actualPregunta: 0,
                actualLevel: prevState.actualLevel + 1,
                puntajeTotal: prevState.puntajeTotal + prevState.puntajeNivel,
                nivelTerminado: true,
            }));
            
            //alert(this.state.actualLevel +'Pasaste de nivel .... Su puntaje del nivel es: '+this.state.puntajeNivel);
        }
        
        // Cuando termino el juego completo
        if (!this.state.juegoTerminado&&this.state.actualLevel==this.state.cantidadlevel-1) {
            this.setState(prevState => ({
                ...prevState,
                actualPregunta: 0,
                actualLevel: prevState.actualLevel + 1,
                puntajeTotal: prevState.puntajeTotal + prevState.puntajeNivel,
                nivelTerminado: true,
                juegoTerminado: true,
            }));

            //alert('Terminaste el juego .... Su puntaje total del juego es: '+this.state.puntajeTotal);
        }
    }

    onGoToNextLevel() {
        this.setState(prevState => ({
            ...prevState,
            nivelActual: prevState.gameData.levels[prevState.actualLevel],
            nivelTerminado: false,
        }));
    };

   render() {

        return (
            <div className="backgroundImage">
                <MenuJuegosNavbar/>

                {!this.state.nivelTerminado ?

                    <div>
                        <TituloGeneral level={this.state.nivelActual} />
                        <Container maxWidth="md">
                            <Texto level={this.state.nivelActual}/>
                        </Container>
                        <Container maxWidth="md">
                            <Respuesta level={this.state.nivelActual} actualPregunta={this.state.actualPregunta} onOptionClick={this.onOptionClick}/> 
                        </Container>
                    </div>
                    :
                    <ResultadoJuego puntajeNivel={this.state.puntajeNivel} puntajeTotal={this.state.puntajeTotal} 
                                    actualLevel={this.state.actualLevel}               
                                    juegoTerminado={this.state.juegoTerminado}
                                    onGoToNextLevelHandler={this.onGoToNextLevel}/>
                }
            </div>
        );
   } 
}

export default (JuegoComprension);