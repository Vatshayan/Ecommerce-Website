const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database!');
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const express = require('express');
const router = express.Router();
const Product = require('./models/product');

router.get('/products', (req, res) => {
  Product.find((err, products) => {
    if (err) return console.error(err);
    res.send(products);
  });
});

module.exports = router;