var mongoose = require('mongoose'),
    http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    dbSpec = require('../mongo/dbSpec');
    Models = dbSpec.models,
    apiSpec = require('./apiSpec'),

console.log("opening db connection.");
mongoose.connect('mongodb://localhost');
mongoose.connection.once('open', function() {
  console.log('db connection open');
});

var server = function (req, resp) {
    var endpoint = url.parse(req.url).pathname.split("/").slice(1);
    if (!endpoint[0]) resp.write("You must supply an endpoint");
    var route = apiSpec.endpoints[endpoint[0]],
      dbModel = dbSpec.models[endpoint[0]];
    if (route && route.methods[req.method]) {
      var schema = dbSpec.mSchemas[dbModel.name],
          modelProto = dbSpec.mModels[dbModel.name],
          postData = '';
      console.log("handling " + req.method);
      req.on('end', function() {
          console.log(mongoose.connection.readyState);
          if (mongoose.connection.readyState === 1) {
            resp.writeHead(200, {
              'Access-Control-Allow-Origin': "*",
              'Content-Type': 'application/json'
            });
            switch (req.method) {
              case 'CREATE':
              case 'POST':
                console.log(postData);
                var newModel = new modelProto(JSON.parse(postData));
                newModel.save(function(err, doc) {
                  if (err) {
                    console.log(err);
                  } else {
                    resp.write(JSON.stringify(doc.toJSON()));
                  }
                  resp.end();
                });
                break;
              case 'PUT':
                console.log(postData);
                var query = modelProto.find({
                  _id: endpoint[1]
                }).update({
                  subject: JSON.parse(postData).subject,
                  message: JSON.parse(postData).message
                }, function(err, a, mongoResp) {
                  if (err) console.log(err);
                  resp.end();
                });
                break;
              case 'GET':
                var cred = {}
                if (endpoint[1]) {
                  cred._id = endpoint[1]
                }
                modelProto.find(cred, function (err, models) {
                    resp.write(JSON.stringify(models));
                    resp.end();
                  });
                break;
              case 'DELETE':
                console.log(postData);
                var query = modelProto.find({
                  _id: endpoint[1]
                }).findOneAndRemove(function(err, a, mongoResp) {
                  if (err) console.log(err);
                  console.log(endpoint[1] + ' delted.');
                  resp.end();
                });
                break;
              case 'OPTIONS':
                resp.writeHead(200, {
                  'Access-Control-Allow-Methods': route.allows.join(', '),
                  'Access-Control-Allow-Headers': 'accept, content-type',
                  'Accept': '*/*',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': "*"
                });
                resp.end();
                break;
              default:
                resp.end();
            }
          } else {
            mongoose.connect('mongodb://localhost');
            console.log('DB error');
            resp.writeHead(500);
            resp.end();
          }
        });
      switch (req.method) {
        case 'POST':
        case 'CREATE':
        case 'PUT':
          req.on('data', function(chunk) {
            console.log(chunk);
            postData+=chunk.toString();
          });
          break;
        default:
          req.read();
          break;
        }
    } else {
      resp.write("You're not allowed to do that");
      resp.end();
    }
  };
module.exports = server;
