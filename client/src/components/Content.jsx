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



const Content = (props) => {

  const useStyles = makeStyles({
    root: {
      // border: 'solid',
      height: '100%',
      // maxHeight: '250px',
      alignItems: 'stretch',
      display: 'flex',
    },
    imageGridDefault: {
      maxHeight: '75%',
      height: 'auto',
      width: 'auto',
      maxWidth: '75%',
      cursor: 'pointer',
    },
    imageGridExpanded: {
      maxHeight: '75%',
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
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


  const classes = useStyles();

  return (

    <Grid className={classes.root} container spacing={1}>

      {props.state.currentImgStyleName === 'defaultView'
        ? <Grid className={classes.imageGridDefault} item xs={8}>
          <ImageCard state={props.state} changeView={props.changeView} pickImage={props.pickImage} nextImage={props.nextImage} prevImage={props.prevImage}/>
        </Grid>
        : <Grid className={classes.imageGridExpanded} item xs={12}>
          <ImageCard state={props.state} changeView={props.changeView} pickImage={props.pickImage} nextImage={props.nextImage} prevImage={props.prevImage}/>
        </Grid>
      }



      {props.state.currentImgStyleName === 'defaultView'
        ? <Grid className={classes.tripleGrid} item xs={4}>
          <ProductInfoCard state={props.state} />
          <StyleSelectorCard />
          <CartCard />
        </Grid>
        : <div />
      }


      <Grid className={classes.infoGrid} item xs={8}>
        <ProductDescCard state={props.state} />
      </Grid>
      <div>
        {props.state.productFeatures
          ? <Grid className={classes.infoGrid} item xs={4}>
            <ProductFeaturesCard state={props.state} />
          </Grid>
          : <div></div>
        }
      </div>
    </Grid>

  )
};

export default Content;