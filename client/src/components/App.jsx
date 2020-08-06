import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import Header from './Header.jsx'
import Content from './Content.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container justify='center' direction='column' />
        <Grid item xs={12}>
          <h3>Announcements Will Go Here</h3>
        </Grid>
        <Grid item container>
          <Grid item  xs={false} sm={1}/>
          <Grid item xs={12} >
            <Content />
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Grid>
    )
  }

}

export default App;

