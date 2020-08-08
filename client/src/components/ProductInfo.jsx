import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    height: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 'auto',
  },
  bigCard: {
    height: '100%',
  }

});


const ProductInfoCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>

        {props.state.isLoading
          ? <h4>Loading...</h4>
          : <div>
            <div>
              <p>Ratings</p>
            </div>
            <div>
              <p style={{marginBottom: '0px'}}>{props.state.currentProduct.category}</p>
              <h1 style={{marginBottom: '0px', marginTop: '2px'}}>{props.state.currentProduct.name}</h1>
              <p style={{marginBottom: '0px', marginTop: '2px'}}>${props.state.currentProduct.default_price}</p>
            </div>
          </div>
        }
      </CardContent>
    </Card>
  );
}

export default ProductInfoCard;