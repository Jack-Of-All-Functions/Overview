const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

// app.get('/', (req, res) => {
//   res.send('Basics Are Starting')
// })

// app.get('http://52.26.193.201:3000/products/list', (req, res) => {
//   res.send(res);
// })

// app.get('http://52.26.193.201:3000/products/:product_id/styles', (req, res) => {
//   res.send(res);
// })


app.listen(port, () => {
  console.log('Listening at Port:', port)
})
