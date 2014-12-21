var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,

var db = new Db('test', new Server('localhost', 27017));
  db.open(function(err, db) {

    db.on('close', function() {
    })

    db.close();
  });
