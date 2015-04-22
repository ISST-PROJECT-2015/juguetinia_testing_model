var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET detail page. */
router.get('/detail', function(req, res) {
  res.render('detail');
});

/* POST cart page. */
router.post('/cart', function(req, res) {
  res.render('cart');
});

/* POST payment page. */
router.post('/payment', function(req, res) {
  res.render('payment');
});

/* POST creditCard page. */
router.post('/creditCard', function(req, res) {
  res.render('creditCard');
});

/* POST success page. */
router.post('/success', function(req, res) {
  res.render('success');
});

module.exports = router;
