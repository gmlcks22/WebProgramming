const express = require('express');
const app = express();

app.use((req,res,next) =>{
  const userAgent = req.header('User-Agent');
  const paramName = req.query.name;

  res.writeHead(200, {'content-type':'text/html:charset=utf-8'});
  res.write('<h1>Express Server에서 응답한 결과</h1>');
  res.write(`<div><p?>User-Agent: ${userAgent} </p?</div>`);
  res.write(`<div><p>Param name: ${paramName}</p></div>`);
  res.end();
})

app.listen(500);