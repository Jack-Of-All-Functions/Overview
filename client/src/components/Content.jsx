import React from 'react';
import ImageCard from './ImageGallery.jsx';
import ProductDescCard from './ProductDescription.jsx';
import ProductInfoCard from './ProductInfo.jsx';
import StyleSelectorCard from './StyleSelector.jsx';
import CartCard from './AddToCart.jsx';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system'






const useStyles = makeStyles({
  root: {
    // border: 'solid',
    height: '100%'
  },
  imageGrid: {
    // height: '100%',
  },
  tripleGrid: {
    height: '100%',
  },
  infoGrid: {
    height: '25%',
  }

});


const Content = (props) => {
  const classes = useStyles();
  return (

    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.imageGrid} item xs={12} sm={8}>
          <ImageCard />
      </Grid>

      <Grid className={classes.tripleGrid} item xs={12} sm={4}>
        <ProductInfoCard />
        <StyleSelectorCard />
        <CartCard />
      </Grid>

      <Grid className={classes.infoGrid} item xs={12}>
       <ProductDescCard />
      </Grid>
    </Grid>

  )
};

export default Content;