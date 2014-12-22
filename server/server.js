var http = require("http"),
  sys = require("sys"),
  my_servers = require("./src/main");

http.createServer(my_servers.newServer()).listen(1337);
sys.puts("Asset server running: http://localhost:1337");
http.createServer(my_servers.newApiServer()).listen(8008);
sys.puts("Api server running: http://localhost:8008");
