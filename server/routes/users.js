
module.exports = function(router){

  /* GET users listing. */
  // router.get('/api/users', function(req, res) {
  //   var users = []; // TODO get the list of users
  //   res.send(200, users);
  // });

  router.get('/userlist', function(req, res) {
    var db = req.db;
    db.collection('userlist').find().toArray(function (err, items) {
      res.json(items);
    });
  });

  /* Create a new user */
  router.post('/api/users', function(req, res) {
    var user = req.body;  // contains user information submitted by client
    //TODO create the user...
    res.send(201);  // created
  });

  /* GET a single user */
  router.get('/api/users/:uid', function(req, res) {
    var uid = req.params.uid,
        user = {};  // TODO retrieve user info given its 'uid'
    res.send(200, user);
  });

  // etc.

}
