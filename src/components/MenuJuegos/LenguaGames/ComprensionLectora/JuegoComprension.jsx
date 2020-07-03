import React, { Component } from 'react'
import TituloGeneral from './TituloGeneral';
import Texto from './Texto';
import Respuesta from './Respuesta';
import ResultadoJuego from './ResultadoJuego';
import MenuJuegosNavbar from '../../MenuJuegosNavbar/MenuJuegosNavbar';
import gameInfoData from "../../../../assets/jsonGames/ComprensionLectora/dataComprensionLectoraStructure";
import Container from '@material-ui/core/Container';
//import BackgroundCss from '../../Background.css';

// BackEnd
import { getJuegoById } from '../../../../services/juegosServices';
import { createParticipacion } from '../../../../services/participacionServices';
import loading from '../../../../assets/Images/Loading_kids.gif';
import { Typography } from '@material-ui/core';

export class JuegoComprension extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {comprension: "comprensionJuego"}

        // var level = gameInfoData.levels && gameInfoData.levels.length > 0 ? gameInfoData.levels[gameInfoData.levelIndex] : null;
        // var pregunta = level && level.pregunta && level.pregunta.length > 0 ? level.pregunta[0] : null;
        // var cantidadlevel = gameInfoData.levels.length;

        this.state = {
            juegoTerminado: false,
            actualLevel:0,
            actualPregunta:0,

            puntajeNivel:0,
            puntajeTotal:0,
            nivelTerminado: false,
            //gameData: gameInfoData,
            // nivelActual: level,
            // preguntaActual: pregunta,
            // cantidadlevel: cantidadlevel,

            juego: null,
            nivelActual: null,
            preguntaActual: null,
            isLoading: true,
        }

        setTimeout(() => {
            getJuegoById(3).then((response) => {
                //console.log(response);
                var primerNivel = response.data.niveles && response.data.niveles.length > 0 ? response.data.niveles[0] : null;
                var primeraPregunta = primerNivel && primerNivel.preguntas && primerNivel.preguntas.length > 0 ? primerNivel.preguntas[0] : null;

                this.setState(prevState => ({
                    ...prevState,
                    juego: response.data,
                    nivelActual: primerNivel,
                    preguntaActual: primeraPregunta,
                    isLoading: false
                }));
            })
                .catch(error => {
                    console.log(error);
                    this.setState(prevState => ({
                        ...prevState,
                        juego: null,
                        nivelActual: null,
                        palabraActual: null,
                        isLoading: false
                    }));
                });
        }, 5000);
        

        this.onOptionClick = this.onOptionClick.bind(this);
        this.onGoToNextLevel = this.onGoToNextLevel.bind(this);

    }

/*     onOptionClick() {
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
    } */
    
    //Usando el Backend
    onOptionClick() {
        var opcioneleguida = document.querySelector('input[name="customized-radios"]:checked').value;
        if (opcioneleguida==this.state.nivelActual.preguntas[this.state.actualPregunta].respuesta) {
            this.setState( {puntajeNivel: this.state.puntajeNivel + 15} );
        }

        this.setState(prevState => ({
            ...prevState,
            actualPregunta: this.state.actualPregunta + 1
        }));

        // Cuando termino un nivel
        if (!this.state.juegoTerminado&&this.state.actualPregunta===2) {
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


    //onGoToNextLevel() {
    //     this.setState(prevState => ({
    //         ...prevState,
    //         nivelActual: prevState.gameData.levels[prevState.actualLevel],
    //         nivelTerminado: false,
    //     }));
    //};

    //Backend
    onGoToNextLevel() {
        this.setState(prevState => ({
            ...prevState,
            nivelActual: prevState.juego.niveles[prevState.levelIndex],
            preguntaActual: prevState.juego.niveles[prevState.levelIndex].preguntas[0],
            nivelTerminado: false,
        }));
    };

   render() {

        return (
            <div className="backgroundImage">
                <MenuJuegosNavbar/>

                {!this.state.isLoading &&
                    <div>
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
                }
                {this.state.isLoading &&
                    <Container maxWidth="md" style={{ textAlign: "center", paddingTop: "25vh" }}>
                        <img src={loading} alt="Cargando..." style={{ height: "25vh", marginBottom: "2vh" }} />
                        <Typography variant="h4">Cargando juego...</Typography>
                    </Container>
                }

            </div>
        );
   } 
}

export default (JuegoComprension);