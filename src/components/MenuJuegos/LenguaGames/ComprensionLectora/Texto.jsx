import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '20px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard ({ level }) {
  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
                {/* Llega el circo */}
                {/* {level.titulotexto} */}
                {level.palabras[0].palabra}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                {/* Cerca de la casa de Anita se está instalando un circo. Ella, ....... */}
                {/* {level.texto} */}
                {level.title}
                {level.palabras[0].imgPach}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="./Nivel1_Texto.png"
        title="Live from space album cover"
      />
    </Card>
  );
}

