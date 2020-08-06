import React from 'react';
import ImageCard from './ImageGallery.jsx';
import ProductDescCard from './ProductDescription.jsx';
import ProductInfoCard from './ProductInfo.jsx';
import StyleSelectorCard from './StyleSelector.jsx';
import CartCard from './AddToCart.jsx';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';






const useStyles = makeStyles({
  root: {
    // border: 'solid',
    // height: '100%'
  },

});


const Content = () => {
  const classes = useStyles();
  return (
    <Grid  container spacing={1}>
      <Grid className={classes.root} item xs={12} sm={9}>
          <ImageCard />
      </Grid>

      <Grid className={classes.root} item xs={12} sm={3}>
        <ProductInfoCard />
        <StyleSelectorCard />
        <CartCard />
      </Grid>

      <Grid className={classes.root} item xs={12}>
       <ProductDescCard />
      </Grid>
    </Grid>

  )
};

export default Content;