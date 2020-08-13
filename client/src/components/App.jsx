import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Header from './Header.jsx';
import Content from './Content.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductIndex: '',
      currentProduct: '',
      productId: '',
      productDesc: '',
      productStyles: '',
      productFeatures: '',
      productRatings: {},
      currentStyle: '',
      currentStyleIndex: '',
      currentStyleImgIndex: '',
      onSale: false,
      styleImages: '',
      currentImg: '',
      imageStyles: {
        defaultView: {
          display: 'block',
          textAlign: 'center',
          maxWidth: '50%',
          maxHeight: '50%',
          width: 'auto',
          height: 'auto',
          marginLeft: '5px',
          borderRadius: '5px',
          cursor: 'zoom-in',
        },
        enlargedView: {
          display: 'inline-block',
          alignSelf: 'center',
          maxWidth: '75%',
          maxHeight: '80%',
          width: 'auto',
          height: 'auto',
          borderRadius: '5px',
          cursor: 'zoom-out',
          // marginLeft: '10%'
        }
      },
      currentImgStyleName: 'defaultView',
      currentImgStyle: '',
      isLoading: true,
      thumbIsLoading: true,
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://52.26.193.201:3000/products/list',
    })
      .then((data) => {
        this.setState({
          products: data.data,
          isLoading: false,
          currentProductIndex: 0,
        })
      })
      .then(() => {
        this.setState({
          currentProduct: this.state.products[this.state.currentProductIndex],
          productId: this.state.products[this.state.currentProductIndex].id,
          productDesc: this.state.products[this.state.currentProductIndex].description,
          productFeatures: this.state.products[this.state.currentProductIndex].features,
        })
      })
      .then(() => {
        this.grabMyProduct();
        this.getRatings();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  grabMyProduct() {
    axios({
      method: 'get',
      url: `http://52.26.193.201:3000/products/${this.state.productId}/styles`
    })
      .then((data) => {
        this.setState({
          productStyles: data.data.results,
          currentStyleIndex: 0,
          currentStyleImgIndex: 0,
        })
      })
      .then(() => {
        this.setState({
          currentStyle: this.state.productStyles[this.state.currentStyleIndex],
        })
      })
      .then(() => {
        this.setState({
          styleImages: this.state.currentStyle.photos,
        })
      })
      .then(() => {
        this.setState({
          currentImg: this.state.styleImages[this.state.currentStyleImgIndex],
          currentImgStyle: this.state.imageStyles.defaultView,
          thumbIsLoading: false,
        })
      })
      .then(() => {
        this.onSale();
      })
  }

  onSale() {
    if (parseInt(this.state.currentStyle.sale_price) > 0) {
      this.setState({
        onSale: true,
      })
    }
  }

  changeView() {
    if (this.state.currentImgStyleName === 'defaultView') {
      this.setState({
        // thumbIsLoading: true,
        currentImgStyle: this.state.imageStyles.enlargedView,
        currentImgStyleName: 'enlargedView',
      })
    }
    if (this.state.currentImgStyleName === 'enlargedView') {
      this.setState({
        thumbIsLoading: false,
        currentImgStyle: this.state.imageStyles.defaultView,
        currentImgStyleName: 'defaultView',
      })
    }
  }

  getRatings() {
    axios({
      method: 'get',
      url: `http://52.26.193.201:3000/reviews/${this.state.productId}/meta`
    })
      .then((data) => {
        this.setState({
          productRatings: data.data.ratings,
        })
      })
  }

  pickImage(index) {
    this.setState({
      currentImg: this.state.styleImages[index],
      // currentStyleIndex: index,
      currentStyleImgIndex: index,
    })
  }

  prevImage() {
    {
      this.state.styleImages[this.state.currentStyleImgIndex - 1] !== undefined
      ? this.setState({
        currentStyleImgIndex: this.state.currentStyleImgIndex - 1,
        currentImg: this.state.styleImages[this.state.currentStyleImgIndex - 1],
      })
      : this.setState({
        currentImg: this.state.styleImages[this.state.styleImages.length - 1],
        currentStyleImgIndex: this.state.styleImages.length - 1,
      })
    }
  }

  nextImage() {
    {
      this.state.styleImages[this.state.currentStyleImgIndex + 1] !== undefined
      ? this.setState({
        currentStyleImgIndex: this.state.currentStyleImgIndex + 1,
        currentImg: this.state.styleImages[this.state.currentStyleImgIndex + 1]
      })
    : this.setState({
        currentStyleImgIndex: 0,
        currentImg: this.state.styleImages[0]
      })
    }
  }

  stylePicker(index) {
    this.setState({
      currentStyle: this.state.productStyles[index],
      currentStyleIndex: index,
      styleImages: this.state.productStyles[index].photos,
      currentImg: this.state.productStyles[index].photos[0],
    })
  }

  render() {
    return (
      <Grid id='layout' container direction='column'>
        <Grid id='header' item xs={12}>
          <Header />
        </Grid>
        <Grid id='announcements'>
          <h3 style={{ textAlign: 'center' }}>Announcements Will Go Here</h3>
        </Grid>
        <Grid id='content' container>
          <Content
            state={this.state}
            pickImage={this.pickImage.bind(this)}
            changeView={this.changeView.bind(this)}
            nextImage={this.nextImage.bind(this)}
            prevImage={this.prevImage.bind(this)}
            stylePicker={this.stylePicker.bind(this)}
          />
        </Grid>
      </Grid>
    )
  }
}

export default App;

