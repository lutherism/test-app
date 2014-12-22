var http = require("http"),
  sys = require("sys"),
  my_server = require("./src/main");

http.createServer(my_server.newServer()).listen(1337);
sys.puts("Asset server running: http://localhost:1337");
http.createServer(my_server.newApiServer()).listen(8008);
sys.puts("Api server running: http://localhost:8008");
