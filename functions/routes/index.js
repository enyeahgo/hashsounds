var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hash Sounds' });
});

router.get('/s', (req, res) => {
  res.render('section', {
    title: 'Hash Sounds'
  })
})

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Hash Sounds',
    pageTitle: 'Register',
    error: res.cookie('__session') ? res.cookie('__session').error : '',
  })
})

module.exports = router;
