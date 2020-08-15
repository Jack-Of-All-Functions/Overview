import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system'

const useStyles = makeStyles({
  root: {
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    // marginTop: '16px'
  }
});


const ProductFeaturesCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const features = props.state.productFeatures;

  const featureList = features.map((feature, index) =>
    <div key={index}>
      <h5 style={{marginTop: '5px', marginBottom: '5px'}}>{feature.feature} : {feature.value}</h5>
    </div>
  )


  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent >
      <h3 style={{textDecoration: 'underline', marginBottom: '5px'}}>Features</h3>
        {props.state.isLoading
          ? <h4>Loading...</h4>
          : <div>
            {props.state.productFeatures

             ? <div style={{overflowY: 'scroll'}} >
                 {featureList}
               </div>
             : <p style={{marginBottom: '0px'}}></p>
            }
          </div>
        }
      </CardContent>
    </Card>
  );
}

export default ProductFeaturesCard;