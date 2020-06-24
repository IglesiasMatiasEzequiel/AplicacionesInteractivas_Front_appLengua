import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    consignaContainer: {
        'margin-top': '15px',
    }
}));

const Consigna = ({ nivel }) => {

    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={classes.consignaContainer}>
            <Card className={classes.root}>
                <CardHeader title={nivel.title + ' - ' + nivel.description} />
                <Alert severity="info">{nivel.statement}</Alert>
            </Card>
        </Container>

    );
}

export default Consigna;