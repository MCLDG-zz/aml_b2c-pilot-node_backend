'use strict';

var redis = require('redis'), redis_client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL, {no_ready_check: true});
redis_client.auth(process.env.REDIS_PWD, function (err) {
    if (err) {throw err};
});

redis_client.on('connect', function() {
    console.log('Connected to Redis');
});

exports.createUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
  console.log("about to POST and add to Redis key cx-aml-user: " + args.body.value);
  redis_client.set("cx-aml-user-" + args.body.value.username, JSON.stringify(args.body.value), redis.print);
  console.log("added to redis with key cx-aml-user: " + JSON.stringify(args.body.value));
  res.end("POST user complete. Added user to redis with key cx-aml-user: " + JSON.stringify(args.body.value));
}

exports.deleteUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  **/
  // no response value expected for this operation
  console.log("about to DELETE and add to Redis key cx-aml-user: " + JSON.stringify(args));
  redis_client.del("cx-aml-user-" + args.username.value);
  console.log("deleted from redis with key cx-aml-user: " + JSON.stringify(args.username.value));
  res.end("DELETE user complete. Deleted user from redis with key cx-aml-user: " + JSON.stringify(args.username.value));
  res.end();
}

exports.getUserByName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  **/
  console.log("about to GET user for username: " + args.username.value);
  redis_client.keys('cx-aml-user-' + args.username.value, function (err, keys) {
    if (err) return console.log(err);

    var userlist = [];

    for(var i = 0, len = keys.length; i < len; i++) {
      console.log(keys[i]);
      userlist.push(keys[i]);
      console.log("in exports.get - got user: ", keys[i]);
    }
    console.log("in exports.get - about to return user ", userlist);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, userlist, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(userlist));
    res.end();
  });
  console.log("end: get user");}

exports.getUserList = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  console.log("about to GET list of users");

  redis_client.keys('cx-aml-user*', function (err, keys) {
    if (err) return console.log(err);

    var userlist = [];

    for(var i = 0, len = keys.length; i < len; i++) {
      console.log(keys[i]);
      userlist.push(keys[i]);
      console.log("in exports.get - got user: ", keys[i]);
    }
    console.log("in exports.get - about to return user ", userlist);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, userlist, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(userlist));
    res.end();
  });
  console.log("end: list of users");
}

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * body (User)
  **/
  // no response value expected for this operation
  console.log("about to PUT Redis key cx-aml-user: " + args.body.value);
  redis_client.set("cx-aml-user-" + args.body.value.username, JSON.stringify(args.body.value), redis.print);
  console.log("updated redis with key cx-aml-user: " + JSON.stringify(args.body.value));
  res.end("PUT user complete. Updated user in redis with key cx-aml-user: " + JSON.stringify(args.body.value));
}


