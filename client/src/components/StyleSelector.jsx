import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import { Grid } from '@material-ui/core';
import theme from './theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 'auto',
  },

});


const StyleSelectorCard = (props) => {
  const classes = useStyles();

  const styles = props.state.productStyles;

  let styleList;

  let fillList = () => {
    if (props.state.thumbIsLoading === false) {
      styleList = styles.map((style, index) =>
          <div key={index}>
            <img src={styles[index].photos[0].thumbnail_url} height='50px' width='50px' style={{borderRadius: '50px', boxShadow: '0 0 2pt 2pt #1e88e5'}} />
          </div>
      );
    }
  }

  fillList();

  return (
    <Card variant='outlined'>
      {props.state.thumbIsLoading
        ? <div>Loading...</div>
        : <CardContent>
          <h3 style={{ fontWeight: 'bold', marginTop: '0' }}>Style > {props.state.currentStyle.name}</h3>
          <Grid>
            {styleList}
          </Grid>
        </CardContent>
      }
    </Card>
  );
}

export default StyleSelectorCard;