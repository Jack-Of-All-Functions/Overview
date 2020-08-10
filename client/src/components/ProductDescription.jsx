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


const ProductDescCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const products = props.state.products;
  const product = products[0];

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent >
        {props.state.isLoading
          ? <h4>Loading...</h4>
          : <div>
            <h2 id='slogan'>{product.slogan}</h2>
            <p id='description'>{product.description}</p>
          </div>
        }
      </CardContent>
    </Card>
  );
}

export default ProductDescCard;