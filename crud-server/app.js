const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use('/products', product);
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});

const CONNECTION_URL = "mongodb+srv://admin:admin123@crudappbysajjadcluster.mmsrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(CONNECTION_URL, {
    useUnifiedTopology: true
  },(err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })