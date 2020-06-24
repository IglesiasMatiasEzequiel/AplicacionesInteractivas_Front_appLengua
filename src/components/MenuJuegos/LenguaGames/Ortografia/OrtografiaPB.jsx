import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    linearProgress: {
      margin: '10px 0'
    },
  }));

const OrtografiaPB = ({ currentWordNumber, totalWordsNumber }) => {

    const classes = useStyles();

    return (
        <LinearProgress variant="determinate" value={Math.min(Math.round(currentWordNumber * 100 / totalWordsNumber), 100)} className={classes.linearProgress}/>
    );
}

export default OrtografiaPB;