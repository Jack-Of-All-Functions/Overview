import React from 'react';
import ImageCard from './ImageGallery.jsx';
import ProductDescCard from './ProductDescription.jsx';
import ProductFeaturesCard from './ProductFeatures.jsx';
import ProductInfoCard from './ProductInfo.jsx';
import StyleSelectorCard from './StyleSelector.jsx';
import CartCard from './AddToCart.jsx';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system'
import Box from '@material-ui/core/Box'



const Content = (props) => {

  const useStyles = makeStyles({
    root: {
      height: '75%'
    },
    imageGridDefault: {
      maxHeight: '75%',
      height: '100%',
      width: 'auto',
      // maxWidth: '75%',
      cursor: 'pointer',
    },
    imageGridExpanded: {
      maxHeight: '75%',
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
    tripleGrid: {
      maxHeight: '75%',
      width: 'auto',
      // maxWidth: '75%',
    },
    infoGrid: {
      height: '25%',
    }

  });

  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={1} >

        {props.state.currentImgStyleName === 'defaultView'
          ? <Grid className={classes.imageGridDefault} item xs={12} sm={8}>
            <ImageCard state={props.state} changeView={props.changeView} pickImage={props.pickImage} nextImage={props.nextImage} prevImage={props.prevImage} />
          </Grid>
          : <Grid className={classes.imageGridExpanded} item xs={12}>
            <ImageCard state={props.state} changeView={props.changeView} pickImage={props.pickImage} nextImage={props.nextImage} prevImage={props.prevImage} />
          </Grid>
        }

        {props.state.currentImgStyleName === 'defaultView'
          ? <Grid className={classes.tripleGrid} item xs={12} sm={4}>
            <ProductInfoCard state={props.state} />
            <StyleSelectorCard state={props.state} stylePicker={props.stylePicker} />
            <CartCard state={props.state} selectSize={props.selectSize} setQuantityArray={props.setQuantityArray} selectQ={props.selectQ} sizeNotPicked={props.sizeNotPicked}/>
          </Grid>
          : <div />
        }

        <Grid className={classes.infoGrid} item xs={12} sm={8}>
          <ProductDescCard state={props.state} />
        </Grid>
        {props.state.productFeatures
          ? <Grid className={classes.infoGrid} item xs={12} sm={4}>
            <ProductFeaturesCard state={props.state} />
          </Grid>
          : <div></div>
        }

    </Grid>
  )
};

export default Content;