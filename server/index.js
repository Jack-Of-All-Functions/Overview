const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/products/list', (req, res) => {

});

app.use('/products/:product_id', (req, res) => {

});

app.use('/products/:product_id/styles', (req, res) => {

});

app.use('/products/:product_id/related', (req, res) => {

});

app.listen(port, () => {
  console.log('Listening at Port:', port)
})
