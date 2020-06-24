import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { CardContent } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        'text-align': 'center',
        padding: '0',
        margin: '10px 0'
    },
    chip:{
        margin: '2px'
    }
}));

const OrtografiaChips = ({ title, items, onNoItemsSeverity, onNoItemsAlert }) => {

    const classes = useStyles();

    return (

        <Container maxWidth="sm" className={classes.root}>
            <Card>
                <CardHeader title={title} />
                <CardContent>
                    { items && items.length > 0 ?

                            items.map((item) => {
                                return (
                                    <Chip key={item.id} label={item.word} avatar={<Avatar src={item.img} />} color="primary" className={classes.chip}/>
                                );
                            })
                        :    
                        <Alert severity={onNoItemsSeverity}>{onNoItemsAlert}</Alert>
                    }
                </CardContent>
            </Card>
        </Container>

    );
}

export default OrtografiaChips;