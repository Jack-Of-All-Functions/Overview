import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system'

const useStyles = makeStyles({
  root: {
    height: 'auto',
  },
  bigCard: {
    height: '100%',
    alignContent: 'center',

  }

});


const ImageCard = () => {
  const classes = useStyles();


  return (
    <Card className={classes.bigCard} variant='outlined'>
      <CardContent>
        <h1>Image Gallery Card</h1>
      </CardContent>
    </Card>
  );
}

export default ImageCard;