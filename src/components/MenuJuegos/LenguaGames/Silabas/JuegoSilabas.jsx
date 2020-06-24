import React from 'react';
import Consigna from './Consigna';
import NextLevel from './NextLevel';
import MenuJuegosNavbar from '../../MenuJuegosNavbar/MenuJuegosNavbar';
import SilabaCard from './SilabaCard';
import { getJuegoById } from '../../../../services/juegosServices';
import { createParticipacion } from '../../../../services/participacionServices';
import loading from '../../../../assets/Images/Loading_kids.gif';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export class JuegoSilabas extends React.Component {

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

        setTimeout(() => {
            getJuegoById(1).then((response) => {

                var primerNivel = response.data.niveles && response.data.niveles.length > 0 ? response.data.niveles[0] : null;
                var primeraPalabra = primerNivel && primerNivel.palabras && primerNivel.palabras.length > 0 ? primerNivel.palabras[0] : null;

                this.setState(prevState => ({
                    ...prevState,
                    juego: response.data,
                    nivelActual: primerNivel,
                    palabraActual: primeraPalabra,
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
        }, 3000);

        this.onOptionClick = this.onOptionClick.bind(this);
        this.onGoToNextLevel = this.onGoToNextLevel.bind(this);
    }

    onOptionClick(opcion) {

        var levelScore = this.state.levelScore;

        if (opcion.valores.some(valor => valor.valor === this.state.palabraActual.silabas)) {

            levelScore = levelScore + this.state.nivelActual.levelScore;

            this.setState(prevState => ({
                ...prevState,
                correctWords: [...prevState.correctWords, prevState.palabraActual],
                levelScore: levelScore
            }));
        } else {

            levelScore = levelScore - (this.state.nivelActual.levelScore / 2);

            this.setState(prevState => ({
                ...prevState,
                incorrectWords: [...prevState.incorrectWords, prevState.palabraActual],
                levelScore: Math.max(levelScore, 0)
            }));
        }

        this.setState(prevState => ({
            ...prevState,
            wordIndex: prevState.wordIndex + 1
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
                totalScore: prevState.totalScore + levelScore
            }));

            if (this.state.juego.niveles && this.state.juego.niveles.length > 0) {

                this.setState(prevState => ({
                    ...prevState,
                    hasNextLevel: prevState.levelIndex < prevState.juego.niveles.length - 1,
                    levelIndex: prevState.levelIndex + 1
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

            createParticipacion(this.state.juego.id, this.state.nivelActual.id, levelScore)
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
            incorrectWords: [],
            levelScore: 0
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
                                <Consigna nivel={this.state.nivelActual} />
                                <Container maxWidth="sm">
                                    <SilabaCard
                                        nivel={this.state.nivelActual}
                                        palabra={this.state.palabraActual}
                                        wordIndex={this.state.wordIndex}
                                        onOptionClick={this.onOptionClick} />
                                </Container>
                            </div>
                            :
                            <NextLevel
                                isSaving={this.state.isSaving}
                                hasNextLevel={this.state.hasNextLevel}
                                levelScore={this.state.levelScore}
                                totalScore={this.state.totalScore}
                                correctWords={this.state.correctWords}
                                incorrectWords={this.state.incorrectWords}
                                onGoToNextLevelHandler={this.onGoToNextLevel} />
                        }
                    </div>
                }
                {this.state.isLoading &&
                    <Container maxWidth="md" style={{ textAlign: "center", paddingTop: "25vh" }}>
                        <img src={loading} alt="Cargando..." style={{ height: "25vw", marginBottom: "2vh" }} />
                        <Typography variant="h4">Cargando juego...</Typography>
                    </Container>
                }
            </div>
        );
    }

}

export default (JuegoSilabas);