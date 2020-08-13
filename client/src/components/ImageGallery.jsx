import React from 'react';
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
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import { Icon } from '@material-ui/core';
import ImageThumbnails from './ImageThumbnails.jsx'
import { Grid, Paper } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const ImageCard = (props) => {

  const useStyles = makeStyles({
    bigCard: {
      height: 'auto',
      width: 'auto',
      cursor: 'zoom-in',
      background: `no-repeat center / contain url(${props.state.currentImg.url})`,
      // backgroundSize: 'cover',
    },
    currentView: props.state.currentImgStyle,
  });

  const classes = useStyles();

  const handleClick = (e) => {
    if (e.target.nodeName === 'DIV') {
      props.changeView();
    }
  }

  return (
    <div>
      {props.state.isLoading
        ? <h1>Loading...</h1>
        :
        <Card  className={classes.bigCard} elevation={0} variant='outlined'>
          <div  id='thing' onClick={handleClick}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'inline-block', textAlign: 'left'}}/>
            <AspectRatioIcon style={{ textAlign: 'right', marginTop: '5px', marginRight: '10px', cursor: 'pointer', display: 'inline-block'}} onClick={props.changeView} />
            </div>
            <CardContent  >
              <Grid>
                {props.state.isLoading
                  ? <h1>Loading...</h1>
                  : <Grid container direction='column'>
                    <Grid style={{ marginLeft: '5px' }} container >
                      {props.state.thumbIsLoading
                        ? <h6></h6>
                        : <ImageThumbnails pickImage={props.pickImage} style={{ cursor: 'pointer' }} state={props.state} />
                      }
                      <div style={{ marginTop: '250px', display: 'flex', justifyContent: 'space-between', width: '90%'}}>
                      <NavigateBeforeIcon fontSize={'large'} style={{ cursor: 'pointer', display: 'inline-block', textAlign: 'left', marginLeft: '5%'}} onClick={props.prevImage}/>
                      <NavigateNextIcon fontSize={'large'} style={{ cursor: 'pointer',  display: 'inline-block', textAlign: 'right', marginRight: '0'}} onClick={props.nextImage}/>
                      </div>
                    </Grid>
                  </Grid>
                }
              </Grid>
            </CardContent>
          </div>
          <CardActions>
          </CardActions>
        </Card>
      }
    </div>
  );
}

export default ImageCard;