import React from 'react';
import SilabaChips from './SilabaChips';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

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

const NextLevel = ({ isSaving, hasNextLevel, levelScore, totalScore, correctWords, incorrectWords, onGoToNextLevelHandler }) => {

    const classes = useStyles();

    return (
        <Container height="75%" maxWidth="md" className={classes.nextLevelContainer}>

            <Card>
                <CardHeader title={"Felicitaciones, terminaste el " + (hasNextLevel ? "nivel" : "juego") + "!"} className={classes.nextLevelTitle} />
                <CardContent>
                    <Container maxWidth="md">

                        <Grid container spacing={1}>
                            <Grid item md={6} xs={12} spacing={1}>
                                <SilabaChips
                                    key="correctWords"
                                    title="✔️ Correctas"
                                    items={correctWords}
                                    onNoItemsSeverity="error"
                                    onNoItemsAlert="Oops! No tuviste palabras correctas :(" />
                            </Grid>
                            <Grid item md={6} xs={12} spacing={1}>
                                <SilabaChips
                                    key="incorrectWords"
                                    title="❌ Incorrectas"
                                    items={incorrectWords}
                                    onNoItemsSeverity="success"
                                    onNoItemsAlert="Muy bien! Acertaste todas las palabras!" />
                            </Grid>
                        </Grid>

                        <Paper className={classes.paperScore}>
                            <h1><span role="img" aria-label="medal">🏅</span> {"Tu puntaje es de " + levelScore + " puntos!"} </h1>
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

                        {!isSaving && hasNextLevel &&

                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth="true"
                                className={classes.nextLevelButton}
                                onClick={() => onGoToNextLevelHandler()}>
                                Siguiente nivel
                             </Button>
                        }

                        {!isSaving && !hasNextLevel &&
                            <div>
                                <Paper className={classes.paperScore}>
                                    <h1><span role="img" aria-label="medal">🎖️</span> {"Tu puntaje TOTAL es de " + totalScore + " puntos!"} </h1>
                                </Paper>

                                <Button
                                    component={Link}
                                    to="/games"
                                    variant="contained"
                                    color="secondary"
                                    fullWidth="true"
                                    className={classes.nextLevelButton}>
                                    Volver al menú
                                </Button>
                            </div>
                        }
                        
                    </Container>
                </CardContent>

            </Card>
        </Container>

    );
}

export default NextLevel;