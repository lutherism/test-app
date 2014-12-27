var url = require('url'),
  patent = Function.prototype,
  Router = require('router');
  ServerGenerator = require('./ServerGenerator');

var NodeRouter = new Router();
var serverGen = new ServerGenerator();

NodeRouter.get('/notes/*', function(req, resp) {
  console.log('notes route matched ' +req.url);
  serverGen.server()(req, resp);
});

module.exports = NodeRouter;
