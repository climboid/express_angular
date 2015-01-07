var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('index', { title: 'Express' });
});

//
// should the API be described here?
//

module.exports = router;
