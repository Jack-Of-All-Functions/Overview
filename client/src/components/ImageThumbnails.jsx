import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import { Icon } from '@material-ui/core';
import theme from './theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';


const ImageThumbnails = (props) => {

  const thumbnails = props.state.styleImages;

  const listedThumbs = thumbnails.map((thumbnail, index) =>

    <div key={index}>
    <ThemeProvider theme={theme}>
      {props.state.currentImg === props.state.styleImages[index]
      ? <img style={{ cursor: 'pointer', boxShadow: '0 0 2pt 1pt #1e88e5', outlineColor: '#1e88e5', borderRadius: '5px' }} height='75px' width='50px' src={thumbnail.thumbnail_url} onClick={() => { props.pickImage(index) }} />
      : <img style={{ cursor: 'pointer', borderRadius: '5px' }} height='75px' width='50px' src={thumbnail.thumbnail_url} onClick={() => { props.pickImage(index) }} />
      }
    </ThemeProvider>
    </div>
  );


  return (
    <div>
      {listedThumbs}
    </div>
  )

}

export default ImageThumbnails;