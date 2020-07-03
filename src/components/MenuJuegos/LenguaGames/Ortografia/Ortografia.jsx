import React from 'react';
import MenuJuegosNavbar from '../../MenuJuegosNavbar/MenuJuegosNavbar';
import Container from '@material-ui/core/Container';
import { getJuegoById } from '../../../../services/juegosServices';
import { createParticipacion } from '../../../../services/participacionServices';
import OrtografiaCard from './OrtografiaCard';
import Consigna from './Consigna';
import NextLevel from './NextLevel';
import { Typography } from '@material-ui/core';
import loading from '../../../../assets/Images/Loading_kids.gif';

export class Ortografia extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            juego: null,
            nivelActual: null,
            palabraActual: null,
            levelIndex: 0,
            wordIndex: 0,
            correctWords: [],
            incorrectWords: [],
            finishLevel: false,
            hasNextLevel: false,
            isLoading: true,
            isSaving: false,
            totalScore: 0,
            levelScore: 0
        }

        this.onOptionClick = this.onOptionClick.bind(this);
        this.onGoToNextLevel = this.onGoToNextLevel.bind(this);
    }

    async componentDidMount() {

        const responseJuego = await getJuegoById(2);

        await new Promise(resolve => setTimeout(resolve, 1500));

        var primerNivel = responseJuego.data.niveles && responseJuego.data.niveles.length > 0 ? responseJuego.data.niveles[0] : null;
        var primeraPalabra = primerNivel && primerNivel.palabras && primerNivel.palabras.length > 0 ? primerNivel.palabras[0] : null;

        this.setState(prevState => ({
            ...prevState,
            juego: responseJuego.data,
            nivelActual: primerNivel,
            palabraActual: primeraPalabra,
            isLoading: false
        }));
    }

    onOptionClick(opcion) {

        if (opcion.valores.some(valor => valor.valor === this.state.palabraActual.silabas)) {
            this.setState(prevState => ({
                ...prevState,
                correctWords: [...prevState.correctWords, prevState.palabraActual],
                levelScore: prevState.levelScore + prevState.nivelActual.levelScore
            }));
        } else {
            this.setState(prevState => ({
                ...prevState,
                incorrectWords: [...prevState.incorrectWords, prevState.palabraActual],
                levelScore: Math.max(prevState.levelScore - Math.round(prevState.nivelActual.levelScore / 2, 0), 0)
            }));
        }

        this.setState(prevState => ({
            ...prevState,
            wordIndex: (prevState.wordIndex ?? 0) + 1
        }));

        if (this.state.wordIndex < this.state.nivelActual.palabras.length - 1) {

            this.setState(prevState => ({
                ...prevState,
                finishLevel: false,
                palabraActual: prevState.nivelActual.palabras[prevState.wordIndex]
            }));

        } else {

            this.setState(prevState => ({
                ...prevState,
                finishLevel: true,
                wordIndex: 0,
                totalScore: prevState.totalScore + prevState.levelScore
            }));

            if (this.state.juego.niveles && this.state.juego.niveles.length > 0) {

                this.setState(prevState => ({
                    ...prevState,
                    hasNextLevel: prevState.levelIndex < prevState.juego.niveles.length - 1,
                    levelIndex: prevState.levelIndex + 1,
                }));

            } else {

                this.setState(prevState => ({
                    ...prevState,
                    hasNextLevel: false
                }));
            }

            this.setState(prevState => ({
                ...prevState,
                isSaving: true
            }));

            createParticipacion(this.state.juego.id, this.state.nivelActual.id, this.state.levelScore + this.state.nivelActual.levelScore)
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
    }

    onGoToNextLevel() {
        this.setState(prevState => ({
            ...prevState,
            nivelActual: prevState.juego.niveles[prevState.levelIndex],
            palabraActual: prevState.juego.niveles[prevState.levelIndex].palabras[0],
            finishLevel: false,
            correctWords: [],
            incorrectWords: []
        }));
    };

    render() {
        return (
            <div className="backgroundImage">
                <MenuJuegosNavbar />

                {!this.state.isLoading &&
                    <div>
                        {!this.state.finishLevel ?

                            <div>
                                <Consigna level={this.state.nivelActual} />
                                <Container maxWidth="sm">
                                    <OrtografiaCard
                                        level={this.state.nivelActual}
                                        word={this.state.palabraActual}
                                        onOptionClick={this.onOptionClick}
                                        wordIndex={this.state.wordIndex}
                                        isSaving={this.state.isSaving} />
                                </Container>
                            </div>
                            :
                            <NextLevel hasNextLevel={this.state.hasNextLevel} levelScore={this.state.levelScore} totalScore={this.state.totalScore} correctWords={this.state.correctWords} incorrectWords={this.state.incorrectWords} onGoToNextLevelHandler={this.onGoToNextLevel} />
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
        )
    }
}

export default Ortografia;