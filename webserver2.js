const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=>{
  res.writeHead(200, {'Content-Type' : 'text/html'});
  filename = "week2.html";
  fs.readFile(filename, (err, data)=>{
    /*res.write(data);
    res.end();*/
    if(err == null) {
      res.write(data);
      res.end();
    }
    else{
      res.end("File Not Found");
    }
  });
});

server.listen(500);