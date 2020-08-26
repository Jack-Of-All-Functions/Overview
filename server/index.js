const express = require('express');
const db = require('../db/index');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/products/list', (req, res) => {
  const { page = 1, count = 5 } = req.query;

  res.send(db.list(page, count));
});

app.use('/products/:product_id/styles', (req, res) => {
  const { product_id } = req.params;

  res.send(db.styles(product_id))
});

app.use('/products/:product_id/related', (req, res) => {
  const { product_id } = req.params;

  res.send(db.related(product_id));
});

app.use('/products/:product_id', (req, res) => {
  const { product_id } = req.params;

  res.send(db.information(product_id));
});

app.listen(port, () => {
  console.log('Listening at Port:', port)
})
