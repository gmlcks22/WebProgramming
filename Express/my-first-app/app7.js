const express = require('express');
const app = express();

app.use((req,res,next) =>{
  const userAgent = req.header('User-Agent');
  const paramName = req.query.name;

  res.writeHead(200, {'content-type':'text/html:charset=utf-8'});
  
})

app.listen(500);