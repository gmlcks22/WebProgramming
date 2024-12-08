const http = require('http');

const port = 10000;

const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write("<h1>Hi ! Welcome</h1>");
  res.end("Hello World");
});

server.listen(500);