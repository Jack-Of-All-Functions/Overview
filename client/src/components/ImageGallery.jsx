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
import { Icon } from '@material-ui/core';
import ImageThumbnails from './ImageThumbnails.jsx'
import { Grid, Paper } from '@material-ui/core';


const ImageCard = (props) => {

  const useStyles = makeStyles({
    root: {
      height: 'auto',
    },
    bigCard: {
      height: 'auto',
      width: 'auto',
      maxHeight: '100%',
      maxWidth: '100%',
      display: 'flex',
      // maxHeight: '250px',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      position: 'relative',
      cursor: 'default',
    },
    currentView: props.state.currentImgStyle,
    tester: {
      height: '100%',
    }
  });
  const classes = useStyles();


  return (
    <div>
      {props.state.isLoading
        ? <h1>Loading...</h1>
        :
        <Card className={classes.bigCard} elevation={0} variant='outlined'>
          <div style={{ width: '100%', cursor: 'default' }} >
            {(props.state.currentImgStyleName === 'defaultView')
              ? <ZoomInIcon style={{ marginLeft: '95%', marginTop: '5px', cursor: 'pointer' }} onClick={props.changeView} />
              : <ZoomOutIcon style={{ marginLeft: '95%', marginTop: '5px', cursor: 'pointer' }} onClick={props.changeView} />
            }
            <CardContent >
              <Grid >
                {props.state.isLoading
                  ? <h1>Loading...</h1>
                  : <Grid container direction='column'>
                    <Grid style={{ marginLeft: '5px' }} container>
                      {props.state.thumbIsLoading
                        ? <h6></h6>
                        : <ImageThumbnails pickImage={props.pickImage} style={{ cursor: 'pointer' }} state={props.state} />
                      }
                      <CardMedia
                        className={classes.currentView}
                        component='img'
                        image={props.state.currentImg.url}
                        onClick={props.changeView}
                      />

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