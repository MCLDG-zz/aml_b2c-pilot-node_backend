var request = require('request');
'use strict';

exports.createUser = function(args, res, next) {
}

exports.deleteUser = function(args, res, next) {
}

exports.getUserByName = function(args, res, next) {
}

exports.getUserList = function(args, res, next) {
  console.log("aggr: about to GET list of users");
  request({
      url: "http://svc-b2c-pilot-node-back/v1/user",
      method: "GET",
      json: true   // <--Very important!!!
  }, function (error, response, body){
      console.log('Got users:  ' + JSON.stringify(response) + ' error: ' + error + ' body: ' + JSON.stringify(body));
      res.setHeader('Content-Type', 'application/json');
      //res.writeHead(200, response, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(response));
      res.end();

  });

  console.log("end: list of users");
}

exports.updateUser = function(args, res, next) {
}


