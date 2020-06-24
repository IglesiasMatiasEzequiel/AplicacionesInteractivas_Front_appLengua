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
        margin : '15px auto'
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

const OrtografiaCard = ({ level, word, onOptionClick }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={word.word} />
            <CardMedia className={classes.media} image={word.img} />
            <OrtografiaPB currentWordNumber={level.wordIndex + 1} totalWordsNumber={level.words.length}/>
            <Container maxWidth="md" className={classes.buttonsContainer}>
                {level.options.map((options) => {
                    return (
                         <Button key={options.id} variant="contained" color={options.color} className={classes.OrtografiaCardButton} onClick={() => onOptionClick(options)}>{options.text}</Button>
                    );
                })}
            </Container>
        </Card>
    );
}

export default OrtografiaCard;