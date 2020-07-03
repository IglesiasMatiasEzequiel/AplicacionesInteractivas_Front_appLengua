import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container'
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    consignaContainer: {
        'text-align': 'center',
        'margin-top': '20px',
    }
}));

const TituloGeneral= ({ level }) => {

    const classes = useStyles();

    return (
        // <Container maxWidth="sm" className={classes.consignaContainer}>
        //     <Card className={classes.root}>
        //         <CardHeader title={level.title + ' - ' + level.description} />
        //         {/* <CardHeader title={"Nivel 1" + ' - ' + "100 Palabras"} /> */}
        //         <Alert severity="info">{level.consigna}</Alert>
        //     </Card>
        // </Container>
        <Container maxWidth="sm" className={classes.consignaContainer}>
            <Card className={classes.root}>
                <CardHeader title={level.title + ' - ' + level.description} />
                <Alert severity="info">{level.statement}</Alert>
            </Card>
        </Container>

    );
}

export default TituloGeneral;