import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 'auto',
  },
  sizeSelector: {
    width: '45%',
    height: '40px',
  },
  quantitySelector: {
    width: '20%',
    height: '40px',
    marginLeft: '5%',
  },
  bagButtonOuter: {
    width: '70%',
    marginTop: '5%',
  },
  bagButtonInner: {
    width: '100%',
    height: '50px',
    marginTop: '5%',
  }

});


const CartCard = (props) => {
  const classes = useStyles();

  let sizes = props.state.currentStyle.skus;
  let sizeArray = [];

  let sizer = (obj) => {
    for (let key in obj) {
      sizeArray.push(key)
    }
  }
  sizer(sizes);

  const sizeList = sizeArray.map((size, index) =>
    <MenuItem>{size}</MenuItem>
  )

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Grid>
          <FormControl className={classes.sizeSelector} variant='outlined'>
            <InputLabel id="selectSize">Select Size</InputLabel>
            <Select
              labelId="selectSize"
              id="size"
            // value={age}
            // onChange={handleChange}
            >
              {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
              {sizeList}
            </Select>
          </FormControl>
          <FormControl className={classes.quantitySelector} variant='outlined'>
            <InputLabel id="selectQuantity"> </InputLabel>
            <Select
              labelId="selectQuantity"
              id="quantity"
              // value={quantity}
              // onChange={handleChange}
              defaultValue={'-'}
            >
              <MenuItem value={'-'}> - </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classes.bagButtonOuter}>
          <Button className={classes.bagButtonInner} variant="outlined" color="primary">
            Add to Bag
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CartCard;