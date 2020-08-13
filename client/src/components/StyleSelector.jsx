import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import { Grid, GridList, GridListTile, Avatar } from '@material-ui/core';
import theme from './theme.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
// import Avatar from '@material-ui/core/Avatar'
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
      styleList = styles.map((style, index) => {
        return styles[index].photos[0].thumbnail_url
      })
    }
  }

  fillList();

  return (
    <Card variant='outlined'>
      {props.state.thumbIsLoading
        ? <div>Loading...</div>
        : <CardContent>
          <h3 style={{ fontWeight: 'bold', marginTop: '0' }}>Style > {props.state.currentStyle.name}</h3>
          <GridList cellHeight={'auto'} cols={4} spacing={10}>
            {styleList.map((tile, index) =>
              <GridListTile key={index} cols={tile.cols || 1}>
                {index === props.state.currentStyleIndex
                  ? <Badge
                    overlap='circle'
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    badgeContent={<CheckCircleIcon style={{ width: '15px', height: '15px' }} />}
                  >
                    <Avatar src={tile} style={{ width: '50px', height: '50px', border: 'solid #1e88e5', cursor: 'pointer' }} onClick={() => {props.stylePicker(index)}}/>
                  </Badge>
                  : <Badge
                    overlap='circle'
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <Avatar src={tile} style={{ width: '50px', height: '50px', border: 'solid #1e88e5', cursor: 'pointer' }} onClick={() => {props.stylePicker(index)}}/>
                  </Badge>
                }

              </GridListTile>
            )}
          </GridList>
        </CardContent>
      }
    </Card>
  );
}

export default StyleSelectorCard;