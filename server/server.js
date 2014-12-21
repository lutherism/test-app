var http = require("http"),
  sys = require("sys"),
  my_server = require("./src/main");

http.createServer(my_server.newServer()).listen(1337);

sys.puts("Server running http://localhost:1337");
