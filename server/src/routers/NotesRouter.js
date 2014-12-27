var Router = require('router');
  ServerGenerator = require('../ServerGenerator');

var NotesRouter = new Router(),
  serverGen = new ServerGenerator({
    modelName: 'notes'
  });

NotesRouter.param('note_id', function(req, resp, next, note_id) {
  req.id = note_id;
  next();
});

NotesRouter.route('/notes').all(function(req, resp) {
  var server;
  switch(req.method) {
    case 'OPTIONS':
      server = function(req, resp) {
        resp.writeHead(200, serverGen.optionHeaders);
        resp.end();
      }
      break;
    case 'POST':
      server = serverGen.serve(function (req, reqData, callback) {
        serverGen.createNew(reqData, function(err, model) {
          callback(err, {
            headCode: 200,
            headers: serverGen.successHeaders,
            write: JSON.stringify(model)
          });
        });
      });
      break;
    default:
      server = serverGen.serve(function (req, reqData, callback) {
        serverGen.getCollection(function(err, models) {
          callback(err, {
            headCode: 200,
            headers: serverGen.successHeaders,
            write: JSON.stringify(models)
          });
        });
      });
      break;
  }
  server(req, resp);
});

NotesRouter.route('/notes/:note_id').all(function(req, resp) {
  var server;
  switch (req.method) {
    case 'OPTIONS':
    server = function(req, resp) {
      console.log(req, resp);
      resp.writeHead(200, serverGen.optionHeaders);
      resp.end();
    };
    break;
  case 'PUT':
    console.log('updating ' + req.id);
    server = serverGen.serve(function (req, reqData, callback) {
      console.log(reqData);
      serverGen.updateById(req.id, reqData, function(err, model) {
        callback(err, {
          headCode: 200,
          headers: serverGen.successHeaders,
          write: JSON.stringify({success: true})
        });
      });
    });
    break;
  case 'DELETE':
    server = serverGen.serve(function (req, reqData, callback) {
      serverGen.deleteById(req.id, function(err, model) {
        callback(err, {
          headCode: 200,
          headers: serverGen.successHeaders,
          write: JSON.stringify({success: true})
        });
      });
    });
    break;
  default:
    server = serverGen.serve(function(req, reqData, callback) {
      serverGen.getById(req.id, function(err, model) {
        callback(err, {
          headCode: 200,
          headers: serverGen.optionHeaders,
          write: JSON.stringify(model)
        });
      });
    });
  }
  server(req, resp);
});

module.exports = NotesRouter;
