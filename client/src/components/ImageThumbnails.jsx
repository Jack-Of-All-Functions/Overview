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


const ImageThumbnails = (props) => {


  const thumbnails = props.state.styleImages;

  const listedThumbs = thumbnails.map((thumbnail, index) =>
    <div key={index}>
      <img style={{ cursor: 'pointer' }} height='75px' width='50px' src={thumbnail.thumbnail_url} onClick={() => { props.pickImage(index) }} />
    </div>
  );


  return (
    <div>
      {listedThumbs}
    </div>
  )

}

export default ImageThumbnails;