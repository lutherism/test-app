var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "jsx": "text/plain",
    "css": "text/css"
  };

var my_server = {
    newApiServer: function() {
      return require('./apiServer');
    },
    newServer: function() {
      return function server(req, resp) {
        var uri = url.parse(req.url).pathname;
        if (uri === '/') uri = path.join(uri, 'src/html/index.html');
        var filename = path.join(process.cwd(), '..', uri);
        console.log(uri);
        var mimeType = mimeTypes[uri.split(".")[1]];
        resp.writeHead(200, {
          'Content-Type': mimeType
        });
        if (!fs.existsSync(filename)){
          filename = path.join(process.cwd(), '..', 'src/html/index.html');
        }
        if (fs.existsSync(filename)){
          var fileStream = fs.createReadStream(filename);
          fileStream.pipe(resp);
          setTimeout(function() {
            fileStream.unpipe(resp);
            resp.end();
            console.log("cleanup");
          }, 1000);
        } else {
          resp.write("404");
          resp.end();
        }
      };
    }
};

module.exports = my_server;
