import React from 'react'
import TituloGeneral from './TituloGeneral';
import Texto from './Texto';
import Respuesta from './Respuesta';
import ResultadoJuego from './ResultadoJuego';
import MenuJuegosNavbar from '../../MenuJuegosNavbar/MenuJuegosNavbar';
import Container from '@material-ui/core/Container';

// BackEnd
import { getJuegoById } from '../../../../services/juegosServices';
import { createParticipacion } from '../../../../services/participacionServices';
import loading from '../../../../assets/Images/Loading_kids.gif';
import { Typography } from '@material-ui/core';

export class JuegoComprension extends React.Component {

    constructor(props) {
        super(props)
        this.state = { comprension: "comprensionJuego" }

        this.state = {
            juegoTerminado: false,
            actualLevel: 0,
            actualPregunta: 0,
            puntajeNivel: 0,
            puntajeTotal: 0,
            nivelTerminado: false,
            juego: null,
            nivelActual: null,
            preguntaActual: null,
            isLoading: true,
            isSaving: false,
            opcionElegida: null
        }

        this.onOptionClick = this.onOptionClick.bind(this);
        this.onGoToNextLevel = this.onGoToNextLevel.bind(this);
    }

    async componentDidMount() {

        const responseJuego = await getJuegoById(3);

        await new Promise(resolve => setTimeout(resolve, 3000));

        var primerNivel = responseJuego.data.niveles && responseJuego.data.niveles.length > 0 ? responseJuego.data.niveles[0] : null;
        var primeraPregunta = primerNivel && primerNivel.preguntas && primerNivel.preguntas.length > 0 ? primerNivel.preguntas[0] : null;

        this.setState(prevState => ({
            ...prevState,
            juego: responseJuego.data,
            nivelActual: primerNivel,
            preguntaActual: primeraPregunta,
            isLoading: false
        }));
    }

    handleChangeOpcion = (event) => {

        this.setState(prevState => ({
            ...prevState,
            opcionElegida: event?.target?.value ?? null
        }));
    };

    onOptionClick() {

        var opcionElegida = parseInt(document.querySelector('input[name="radioButtons-preguntas"]:checked').value);

        if (opcionElegida === this.state.nivelActual.preguntas[this.state.actualPregunta].respuesta) {

            this.setState(prevState => ({
                ...prevState,
                puntajeNivel: prevState.puntajeNivel + prevState.nivelActual.levelScore
            }));
        }

        this.setState(prevState => ({
            ...prevState,
            actualPregunta: prevState.actualPregunta + 1,
            opcionElegida: null
        }));

        document.getElementsByName('radioButtons-preguntas')[0].checked = false;

        // Cuando termino un nivel
        if (!this.state.juegoTerminado && this.state.actualPregunta === this.state.nivelActual.preguntas.length - 1) {
            this.setState(prevState => ({
                ...prevState,
                actualPregunta: 0,
                actualLevel: prevState.actualLevel + 1,
                puntajeTotal: prevState.puntajeTotal + prevState.puntajeNivel,
                nivelTerminado: true,
            }));

            this.setState(prevState => ({
                ...prevState,
                isSaving: true
            }));

            createParticipacion(this.state.juego.id, this.state.nivelActual.id, this.state.puntajeNivel + this.state.nivelActual.levelScore)
                .then(() => {
                    this.setState(prevState => ({
                        ...prevState,
                        isSaving: false
                    }));
                })
                .catch(error => {
                    console.log(error);
                    this.setState(prevState => ({
                        ...prevState,
                        isSaving: false
                    }));
                });
        }

        // Cuando termino el juego completo
        if (!this.state.juegoTerminado && this.state.actualLevel === this.state.juego.niveles.length - 1 && this.state.actualPregunta === this.state.nivelActual.preguntas.length - 1) {
            this.setState(prevState => ({
                ...prevState,
                actualPregunta: 0,
                actualLevel: prevState.actualLevel + 1,
                puntajeTotal: prevState.puntajeTotal + prevState.puntajeNivel,
                nivelTerminado: true,
                juegoTerminado: true,
            }));
        }
    }

    //Backend
    onGoToNextLevel() {
        this.setState(prevState => ({
            ...prevState,
            nivelActual: prevState.juego.niveles[prevState.actualLevel],
            preguntaActual: prevState.juego.niveles[prevState.actualPregunta].preguntas[0],
            nivelTerminado: false,
            puntajeNivel: 0
        }));
    };

    render() {

        console.log(this.state.juego);

        if (this.state.juego) {

            return (
                <div className="backgroundImage">
                    <MenuJuegosNavbar />
                    <div>
                        {!this.state.nivelTerminado ?

                            <div>
                                <TituloGeneral level={this.state.nivelActual} />
                                <Container maxWidth="md">
                                    <Texto level={this.state.nivelActual} />
                                </Container>
                                <Container maxWidth="md">
                                    <Respuesta
                                        level={this.state.nivelActual}
                                        actualPregunta={this.state.actualPregunta}
                                        onOptionClick={this.onOptionClick}
                                        handleChangeOpcion={this.handleChangeOpcion}
                                        opcionElegida={this.state.opcionElegida} />
                                </Container>
                            </div>
                            :
                            <ResultadoJuego puntajeNivel={this.state.puntajeNivel} puntajeTotal={this.state.puntajeTotal}
                                actualLevel={this.state.actualLevel}
                                juegoTerminado={this.state.juegoTerminado}
                                onGoToNextLevelHandler={this.onGoToNextLevel}
                                isSaving={this.state.isSaving} />
                        }
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="backgroundImage">
                    <Container maxWidth="md" style={{ textAlign: "center", paddingTop: "25vh" }}>
                        <img src={loading} alt="Cargando..." style={{ height: "25vh", marginBottom: "2vh" }} />
                        <Typography variant="h4">Cargando juego...</Typography>
                    </Container>
                </div>
            );
        }
    }
}

export default (JuegoComprension);