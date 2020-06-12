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

module.exports = router;
