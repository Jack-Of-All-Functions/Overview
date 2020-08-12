import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { InlineShareButtons } from 'sharethis-reactjs';


const ProductInfoCard = (props) => {

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

  const classes = useStyles();

  let reviewTotal = 0;

  let averageRating = (ratings) => {
    let sum = 0;
    let total = 0;
    for (let key in ratings) {
      sum = sum + (key * ratings[key]);
      total = total + ratings[key];
      reviewTotal = reviewTotal + ratings[key];
    }
    return sum / total;
  }

  let rating = averageRating(props.state.productRatings);



  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>

        {props.state.isLoading
          ? <h4>Loading...</h4>
          : <div>
            <div>
              <Rating id='rating' name="half-rating-read" precision={0.25} value={rating} size='small' readOnly style={{ marginBottom: '0px' }} />
              <h5 style={{ marginBottom: '0px', marginTop: '0px', textDecoration: 'underline' }}>Read All ({reviewTotal}) Reviews</h5>
            </div>
            {props.state.onSale
              ? <div>
                <p id='productCategory' style={{ marginBottom: '0px' }}>{props.state.currentProduct.category}</p>
                <h1 id='productName' style={{ marginBottom: '0px', marginTop: '2px' }}>{props.state.currentProduct.name}</h1>
                <p id='salePrice' style={{ marginBottom: '0px', marginTop: '2px', color: 'red', fontWeight: 'bold' }}>${props.state.currentStyle.sale_price}</p>
                <p id='productPrice' style={{ marginBottom: '0px', marginTop: '2px', textDecoration: 'line-through' }}>${props.state.currentStyle.original_price}</p>
              </div>
              : <div>
                <p id='productCategory' style={{ marginBottom: '0px' }}>{props.state.currentProduct.category}</p>
                <h1 id='productName' style={{ marginBottom: '0px', marginTop: '2px' }}>{props.state.currentProduct.name}</h1>
                <p id='productPrice' style={{ marginBottom: '0px', marginTop: '2px' }}>${props.state.currentStyle.original_price}</p>
              </div>
            }
            <div id='share' style={{ marginTop: '10px' }}>
              <InlineShareButtons
                config={{
                  alignment: 'left',
                  color: 'social',
                  enabled: 'true',
                  font_size: '10',
                  labels: 'cta',
                  language: 'en',
                  networks: [
                    'facebook',
                    'twitter',
                    'pinterest'
                  ],
                  padding: 12,
                  radius: 4,
                  size: 20
                }}
              />
            </div>
          </div>
        }

      </CardContent>
    </Card >
  );
}

export default ProductInfoCard;
