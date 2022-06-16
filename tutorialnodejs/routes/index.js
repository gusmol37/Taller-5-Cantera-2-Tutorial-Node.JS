let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/users/cool/', function(req, res, next) {
  res.render('index', { title: `Eres genial` });
});

module.exports = router;
