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
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles({
  root: {
    height: 'auto',
  },
  sizeSelector: {
    width: '65%',
    height: '40px',
  },
  quantitySelector: {
    width: '30%',
    height: '40px',
    marginLeft: '5%',
  },
  bagButtonOuter: {
    width: '100%',
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
      if (obj[key] > 0) {
        sizeArray.push(key)

      } else {
        sizeArray.push(`${key} Out of Stock`)
      }
    }
    // if (typeof(sizeArray[0]) === 'number') {
    //   console.log('Bing!')
    //   sizeArray.sort((a, b) => a - b);
    // }
    // if (typeof(sizeArray[0]) !== 'number') {
    //   sizeArray.sort();
    // }

  }
  sizer(sizes);

  const sizeList = sizeArray.map((size, index) =>
    <MenuItem key={index} value={size}>{size}</MenuItem>
  )

  let quantityArray = [];

  let quantitySetter = (obj, val) => {
    for (let key in obj) {
      if (key === val) {
        for (let i = 2; i < obj[key]; i++) {
          quantityArray.push(i);
          props.setQuantityArray(quantityArray);

        }
      }
    }
  }


  let quantityList = props.state.quantityArray.map((quant, index) =>
    <MenuItem key={index} value={quant}>{quant}</MenuItem>
  )

  const handleChangeSize = (event) => {
    quantitySetter(sizes, event.target.value);
    props.selectSize(event);
  }

  const handleChangeQ = (event) => {
    props.selectQ(event.target.value);
  }

  const handleClick = () => {
    if (props.state.sizeSelected === false) {
      props.sizeNotPicked();
    }
  }

  const handleClickSizer = () => {
    props.sizeNotPicked();
  }

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Grid>
          <FormControl className={classes.sizeSelector} variant='outlined'>
            <InputLabel id="selectSize">Select Size</InputLabel>
            <Select
              labelId="selectSize"
              id="size"
              label="Select Size"
              value={props.state.currentSize || ''}
              required
              onChange={handleChangeSize}
              open={props.state.openSizeSelector}
              onOpen={() => handleClickSizer()}
              onClose={() => handleClickSizer()}
            >
              <MenuItem value={props.CurrentSize}></MenuItem>
              {sizeList}
            </Select>
          </FormControl>


          {props.state.sizeSelected
            ? <FormControl className={classes.quantitySelector} variant='outlined'>
              <InputLabel id="selectQuantity"> Qty </InputLabel>
              <Select
                labelId="selectQuantity"
                id="quantity"
                label="Qty"
                value={props.state.quantity || 1}
                onChange={handleChangeQ}
              >
                <MenuItem value={1}> 1 </MenuItem>
                {quantityList}
              </Select>
            </FormControl>
            : <FormControl disabled className={classes.quantitySelector} variant='outlined'>
              <InputLabel id="selectQuantity">  </InputLabel>
              <Select
                labelId="selectQuantity"
                id="quantity"
                value={props.state.quantity}
                defaultValue={1}
              >
                <MenuItem value={1}> - </MenuItem>
              </Select>
            </FormControl>
          }
        </Grid>
        <Grid className={classes.bagButtonOuter}>
          <Button className={classes.bagButtonInner} variant="outlined" color="primary" onClick={() => handleClick()}>
            Add to Bag
          </Button>
          {/* <Popover
            open={props.state.openSizeSelector}
            anchorEl={document.getElementById('size')}
            onOpen={() => handleClickSizer()}
            onClose={() => handleClickSizer()}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography>Please Select a Size!</Typography>
          </Popover> */}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CartCard;