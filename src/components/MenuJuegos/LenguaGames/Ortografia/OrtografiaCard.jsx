import React from 'react';
import OrtografiaPB from './OrtografiaPB';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        'text-align': 'center',
        margin: '15px auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        margin: '0 20px'
    },
    buttonsContainer: {
        'margin': '15px 0',
        'text-align': 'center'
    },
    OrtografiaCardButton: {
        'border-radius': '0.2rem !important',
        'margin': '0 3px',
        '& span': {
            padding: '5px !important'
        }
    }
}));

const colors = ["primary", "secondary", "default"];

const OrtografiaCard = ({ level, word, wordIndex, onOptionClick }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={word.palabra} />
            <CardMedia className={classes.media} image={word.imgPath} />
            <OrtografiaPB currentWordNumber={wordIndex + 1} totalWordsNumber={level.palabras.length} />
            <Container maxWidth="md" className={classes.buttonsContainer}>

                {level.opciones.map((option, index) => {
                    return (
                        <Button
                            key={index}
                            variant="contained"
                            color={colors[index]}
                            className={classes.OrtografiaCardButton}
                            onClick={() => onOptionClick(option)}>
                            {option.opcion}
                        </Button>
                    );
                })}
            </Container>
        </Card>
    );
}

export default OrtografiaCard;