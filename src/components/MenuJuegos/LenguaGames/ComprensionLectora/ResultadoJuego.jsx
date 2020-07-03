import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    nextLevelContainer: {
        'margin-top': '15px',
    },
    nextLevelTitle: {
        textAlign: 'center',
        paddingBottom: '0'
    },
    nextLevelButton: {
        textAlign: 'center',
        'border-radius': '0.2rem !important',
        'margin': '0 3px',
        '& span': {
            padding: '5px !important'
        }
    },
    paperScore: {
        '& h1': {
            margin: '10px 0',
            padding: '5px'
        }
    }
}));

const ResultadoJuego = ({ puntajeNivel, puntajeTotal, actualLevel, juegoTerminado, onGoToNextLevelHandler, isSaving }) => {

    const classes = useStyles();

    return (
        <Container height="75%" maxWidth="md" className={classes.nextLevelContainer}>

            <Card>
                <CardHeader title={"Felicitaciones, terminaste el " + (!juegoTerminado? "nivel " + actualLevel : "juego") + "!"} className={classes.nextLevelTitle} />
                <CardContent>
                    <Container maxWidth="md">

                        <Paper className={classes.paperScore}>
                            <h1><span role="img" aria-label="medal">🏅</span> {"Tu puntaje es de " + puntajeNivel + " puntos!"} </h1>
                        </Paper>

                        {isSaving && <Button
                            variant="contained"
                            color="default"
                            fullWidth="true"
                            disabled
                            className={classes.nextLevelButton}>
                            Guardando puntaje...
                                </Button>
                        }

                        {!isSaving && !juegoTerminado &&

                            <Button variant="contained" color="primary" fullWidth="true" className={classes.nextLevelButton}
                                onClick={() => onGoToNextLevelHandler()}>Siguiente nivel</Button>
                        }

                        {!isSaving && juegoTerminado &&
                            <div>
                                <Paper className={classes.paperScore}>
                                    <h1><span role="img" aria-label="medal">🎖️</span> {"Tu puntaje TOTAL es de " + puntajeTotal + " puntos!"} </h1>
                                </Paper>
                                <Button component={Link} to="/games" variant="contained" color="secondary" fullWidth="true" className={classes.nextLevelButton}>Volver al menú</Button>
                            </div>
                        }

                    </Container>
                </CardContent>

            </Card>
        </Container>
    );
}

export default ResultadoJuego;