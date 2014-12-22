var my_servers = {
    newApiServer: function() {
      return require('./apiServer');
    },
    newServer: function() {
      return require('./assetServer');
    }
};

module.exports = my_servers;
