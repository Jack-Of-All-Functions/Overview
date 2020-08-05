const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

// app.get('/', (req, res) => {
//   res.send('Basics Are Starting')
// })


app.listen(port, () => {
  console.log('Listening at Port:', port)
})
