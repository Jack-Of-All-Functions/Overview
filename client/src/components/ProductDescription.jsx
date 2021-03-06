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
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
  },
});


const ProductDescCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent >
        {props.state.isLoading
          ? <h4>Loading...</h4>
          : <div>
            <h2 id='slogan'>{props.state.currentProduct.slogan}</h2>
            <p id='description'>{props.state.currentProduct.description}</p>
          </div>
        }
      </CardContent>
    </Card>
  );
}

export default ProductDescCard;