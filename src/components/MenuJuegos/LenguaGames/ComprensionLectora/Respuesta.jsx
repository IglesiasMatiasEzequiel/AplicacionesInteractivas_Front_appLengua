import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Pregunta from './Pregunta';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        'text-align': 'center',
        margin : '15px auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        margin: '0 20px'
    },
    preguntaContainer: {
        'margin': '10px 0',
        'text-align': 'center'
    },
    buttonsContainer: {
        'margin': '15px 0',
        'text-align': 'center'
    },
    silabaCardButton: {
        'border-radius': '0.2rem !important',
        'margin': '0 3px',
        '& span': {
            padding: '5px !important'
        }
    }
}));


const Respuesta= ({ level, actualPregunta, onOptionClick, opcionElegida, handleChangeOpcion }) => {

    const classes = useStyles();
    
    return (
        <Container maxWidth="sm" className={classes.consignaContainer}>
            <Card className={classes.root}>
                <CardHeader title={level?.preguntas[actualPregunta]?.pregunta ?? '-'} />
                <Container maxWidth="sm" className={classes.preguntaContainer}>
                    <Pregunta level={level} actualPregunta={actualPregunta} opcionElegida={opcionElegida} handleChangeOpcion={handleChangeOpcion}/>               
                </Container>
                <LinearProgress variant="determinate" value={Math.min(Math.round(actualPregunta * 100 / level.preguntas.length), 100)} className={classes.linearProgress}/>
                <Container maxWidth="sm" className={classes.buttonsContainer}>
                    <Button variant="contained" className={classes.silabaCardButton} onClick={() => onOptionClick() }>Responder y Seguir</Button>              
                </Container>
            </Card>
        </Container>

    );
}

export default Respuesta;