  module.exports = function(router){
    
    var ObjectID = require('mongodb').ObjectID;

    /* GET users listing. */
    router.get('/api/users', function(req, res) {
      var db = req.db;
      db.collection('users').find().toArray(function (err, items) {
        res.json(items);
      });
    });


    /* Create a new user */
    router.post('/api/users', function(req, res) {
      var db = req.db;
      var user = req.body;
      console.log('db', db);
      db.collection('users').insert({"age" : 27, "email" : "hello@world.com", "fullname" : req.body.name, "gender" : "male", "location" : "colorado", "username" : "test3"}, function(err, items){
        if (err) {
          res.status(500).send({ error: 'There was an error adding the user' });
        }
        res.send(201, items);  
      });      
    });


    /* GET a single user */
    router.get('/api/users/:uid', function(req, res) {
      console.log('req', req);
      var db = req.db;
      var uid = req.params.uid;
      console.log('uid', uid);
      
      db.collection('users').findOne({_id:new ObjectID(uid)}, function(err, usr) {
        if (err) {
          res.status(500).send({ error: 'There was an error getting the user' });
        }
        res.send(201, usr);
      });
    });


    /* PUT a single user */
    router.put('/api/users/:uid', function(req, res) {
      var db = req.db;
      var uid = req.params.uid;

      db.collection('users').update({ _id : new ObjectID(uid)},
        { $set : { fullname:req.body.newName } }, function (err, result) {
          if (err) {
            res.status(500).send({ error: 'there was an error updating a user' });
          }
          res.send(201);
        });
    });
    

    /* DELETE  single user */
    router.delete('/api/users/:uid', function(req, res) {
      var db = req.db;
      var uid = req.params.uid;

      db.collection('users').remove({ _id : new ObjectID(uid)}, function (err, usr) {
        if (err) {
          res.status(500).send({ error: 'There was an error deleting the user' });
        }
        res.send(201);
      });

    });

    // etc.

}
