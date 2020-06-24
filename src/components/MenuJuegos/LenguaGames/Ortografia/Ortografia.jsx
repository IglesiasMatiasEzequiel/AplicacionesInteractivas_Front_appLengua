import React, { useState, useEffect } from 'react';
import regla from '../../../../assets/Images/regla.jpg';
import MenuJuegosNavbar from '../../MenuJuegosNavbar/MenuJuegosNavbar';
import gameInfoData from "../../../../assets/jsonGames/Ortografia/dataOrtografiaStructure";
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import OrtografiaCard from './OrtografiaCard';
import Consigna from './Consigna';
import NextLevel from './NextLevel';
import BackgroundCss from '../../Background.css'

// var useStyles = makeStyles((theme) => ({

//   // backgroundSilabas: {
//   //     'width': '100vw',
//   //     'height': '100vh',
//   //     'background': "url(" + { Background } + ") no-repeat center",
//   //     'background-size': 'cover'
//   // }
// }));


export class Ortografia extends React.Component {

  constructor(props) {

    super(props);

    var level = gameInfoData.levels && gameInfoData.levels.length > 0 ? gameInfoData.levels[gameInfoData.levelIndex] : null;
    var word = level && level.words && level.words.length > 0 ? level.words[0] : null;

    this.state = {
      gameData: gameInfoData,
      currentLevel: level,
      currentWord: word,
      correctWords: [],
      incorrectWords: [],
      finishLevel: false,
      hasNextLevel: false,
      totalScore: 0,
      levelScore: 0
    }
    
      
    this.onOptionClick = this.onOptionClick.bind(this);
    this.onGoToNextLevel = this.onGoToNextLevel.bind(this);
  }

     onOptionClick(option) {

        if (option.value.includes(this.state.currentWord.value)) {
            this.setState(prevState => ({
                ...prevState,
                correctWords: [...prevState.correctWords, prevState.currentWord],
                levelScore: prevState.levelScore + 100
            }));
        } else {
            this.setState(prevState => ({
                ...prevState,
                incorrectWords: [...prevState.incorrectWords, prevState.currentWord],
                levelScore: Math.max(prevState.levelScore - 30, 0)
            }));
        }

        this.setState(prevState => ({
            ...prevState,
            currentLevel: {
                ...prevState.currentLevel,
                wordIndex: (prevState.currentLevel?.wordIndex ?? 0) + 1
            }
        }));

        if (this.state.currentLevel.wordIndex < this.state.currentLevel.words.length - 1) {

            this.setState(prevState => ({
                ...prevState,
                finishLevel: false,
                currentWord: prevState.currentLevel.words[prevState.currentLevel.wordIndex]
            }));

        } else {

            this.setState(prevState => ({
                ...prevState,
                finishLevel: true,
                currentLevel: {
                    ...prevState.currentLevel,
                    wordIndex: 0
                },
                totalScore: prevState.totalScore + prevState.levelScore
            }));

            if (this.state.gameData.levels && this.state.gameData.levels.length > 0) {

                this.setState(prevState => ({
                    ...prevState,
                    hasNextLevel: prevState.gameData.levelIndex < prevState.gameData.levels.length - 1,
                    gameData: {
                        ...prevState.gameData,
                        levelIndex: prevState.gameData.levelIndex + 1
                    }
                }));

            } else {

                this.setState(prevState => ({
                    ...prevState,
                    hasNextLevel: false
                }));
            }
        }
    }

    onGoToNextLevel() {
        this.setState(prevState => ({
            ...prevState,
            currentLevel: prevState.gameData.levels[prevState.gameData.levelIndex],
            currentWord: prevState.gameData.levels[prevState.gameData.levelIndex].words[0],
            finishLevel: false,
            correctWords: [],
            incorrectWords: []
        }));
    };

  render() {
    return (
      <div>
        <MenuJuegosNavbar />
        <h1>Ortografía</h1>
       
        <div>
          
         
            {!this.state.finishLevel ?

            <div>
              <Consigna level={this.state.currentLevel} />
              <Container maxWidth="sm">
              <OrtografiaCard level={this.state.currentLevel} word={this.state.currentWord} onOptionClick={this.onOptionClick} />
              </Container>
            </div>
              :
            <NextLevel hasNextLevel={this.state.hasNextLevel} levelScore={this.state.levelScore} totalScore={this.state.totalScore} correctWords={this.state.correctWords} incorrectWords={this.state.incorrectWords} onGoToNextLevelHandler={this.onGoToNextLevel} />
            }
        </div>
      </div>
    )
  }
} 

export default Ortografia;