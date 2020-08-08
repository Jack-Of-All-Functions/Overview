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
    height: '100%',
    maxHeight: '250px',
    alignItems: 'stretch',
    display: 'flex',
  },
  imageGrid: {
    maxHeight: '75%',
    height: 'auto',
    width: 'auto',
    maxWidth: '75%',
    cursor: 'pointer',
  },
  tripleGrid: {
    height: 'auto',
    maxHeight: '75%',
    width: 'auto',
    maxWidth: '75%',
  },
  infoGrid: {
    height: 'auto',
    maxHeight: '25%',
    width: 'auto',
    maxWidth: '75%',
  }

});


const Content = (props) => {
  const classes = useStyles();
  return (

    <Grid className={classes.root} container spacing={1}>
      <Grid className={classes.imageGrid} item xs={12} sm={8}>
        <ImageCard state={props.state} changeView={props.changeView} pickImage={props.pickImage} />
      </Grid>

      <Grid className={classes.tripleGrid} item xs={12} sm={4}>
        <ProductInfoCard state={props.state}/>
        <StyleSelectorCard />
        <CartCard />
      </Grid>

      <Grid className={classes.infoGrid} item xs={8}>
        <ProductDescCard state={props.state} />
      </Grid>
      <Grid className={classes.infoGrid} item xs={4}>
        PlaceHolder
      </Grid>
    </Grid>

  )
};

export default Content;