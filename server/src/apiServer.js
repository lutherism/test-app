var mongoose = require('mongoose'),
    http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    dbSpec = require('../mongo/dbSpec');
    Models = dbSpec.models,
    apiSpec = require('./apiSpec'),
    path = require('path'),
    mSchemas = {},
    mModels = {};

dbSpec.collections.forEach(function(modelName) {
  var modelSpec = dbSpec.models[modelName];
  mSchemas[modelSpec.name] = mongoose.Schema(modelSpec.schema);
  mModels[modelSpec.name] = mongoose.model(modelSpec.name, mSchemas[modelSpec.name]);
});

console.log("opening db connection.");

var server = function (req, resp) {
    var endpoint = url.parse(req.url).pathname.split("/").slice(1);
    if (!endpoint[0]) resp.write("You must supply an endpoint");
    var route = apiSpec.endpoints[endpoint[0]],
      dbModel = dbSpec.models[endpoint[0]];
    if (route && route.allows[req.method]) {
      var schema = mSchemas[dbModel.name],
          modelProto = mModels[dbModel.name],
          postData = '';
      req.on('end', function() {
          mongoose.connect('mongodb://localhost');
          mongoose.connection.once('open', function() {
            resp.writeHead(200, {
              'Access-Control-Allow-Origin': "*",
              'Content-Type': 'application/json'
            })
            console.log("connected to db.");
            switch (req.method) {
              case 'CREATE':
              case 'POST':
                console.log(postData);
                var newModel = new modelProto(JSON.parse(postData));
                newModel.save()
                resp.write(postData);
                resp.end();
                mongoose.connection.close();
                break
              case 'GET':
                if (!endpoint[1]) {
                  modelProto.find(function (err, models) {
                    resp.write(JSON.stringify(models));
                    resp.end();
                    mongoose.connection.close();
                  });
                } else {
                  modelProto.find({id: endpoint[1]}, function (err, models) {
                    resp.write(JSON.stringify(models));
                    resp.end();
                    mongoose.connection.close();
                  });
                }
                break;
            }
          });
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
        case 'GET':
        case 'DELETE':
          req.read();
        }
    } else {
      resp.write("You're not allowed to do that");
      resp.end();
    }
  };
module.exports = server;
