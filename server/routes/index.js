var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.send('index', { title: 'Express' });
// });

router.get('/test', function(req, res) {
  console.log('in test right hrere');
});

module.exports = router;
