import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typeographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typeographyStyles}>
          Logo
        </Typography>
        <SearchIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header;