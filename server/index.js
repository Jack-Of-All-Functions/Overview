const express = require('express');
const products = require('./controllers/products');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/products/list', (req, res) => {
  const { page = 0, count = 5 } = req.query;

  products.list(page, count)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send('Internal Error');
    })
});

app.get('/products/:product_id/styles', (req, res) => {
  const { product_id } = req.params;

  products.styles(product_id)
    .then(({ styles }) => {
      const object = {
        id: product_id,
        results: styles
      }
      res.send(object);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send('Internal Error');
    })
});

app.get('/products/:product_id', async (req, res) => {
  const { product_id } = req.params;

  products.productInformation(product_id)
    .then(data => {
      delete data.product_id;
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.send('Internal Error');
    })
});

app.listen(port, () => {
  console.log('Listening at Port:', port)
})
