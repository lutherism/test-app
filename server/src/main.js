var my_servers = {
    newApiServer: function() {
      var Router = require('./routers/NotesRouter');
      return function (req, resp) {
        console.log(req.method +': ' + req.url);
        Router(req, resp, console.log);
      }
    },
    newServer: function() {
      return require('./assetServer');
    }
};

module.exports = my_servers;
