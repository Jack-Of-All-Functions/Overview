import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Header from './Header.jsx'
import Content from './Content.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      productDesc: '',
      productImg: '',
      productStyles: '',
    }
  }

  componentDidMount() {

  }

  render () {
    return (
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid>
          <h3 style={{textAlign: 'center'}}>Announcements Will Go Here</h3>
        </Grid>
        <Grid container>
          {/* <Grid item xs={12}> */}
            <Content />
          {/* </Grid> */}
        </Grid>
      </Grid>
    )
  }
}

export default App;

