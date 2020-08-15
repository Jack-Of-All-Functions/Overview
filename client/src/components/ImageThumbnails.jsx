import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import theme from './theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';


const ImageThumbnails = (props) => {

  const thumbnails = props.state.styleImages;

  const listedThumbs = thumbnails.map((thumbnail, index) =>

    <div key={index}>
      {props.state.currentImg === props.state.styleImages[index]
      ? <img style={{ margin: '1px', cursor: 'pointer', boxShadow: '0 0 2pt 1pt #1e88e5', outlineColor: '#1e88e5', borderRadius: '5px' }} height='75px' width='50px' src={thumbnail.thumbnail_url} onClick={() => { props.pickImage(index) }} />
      : <img style={{ margin: '3px', cursor: 'pointer', borderRadius: '5px' }} height='75px' width='50px' src={thumbnail.thumbnail_url} onClick={() => { props.pickImage(index) }} />
      }
    </div>
  );

  return (
    <div  style={{height: '600px', width: '55px', overflow: 'scroll'}}>
      {listedThumbs}
    </div>
  )
}

export default ImageThumbnails;