const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=>{
  res.writeHead(200, {'Content-Type' : 'text/html'});
  filename = "week2test.html"; // week2test.html 파일을 읽음
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