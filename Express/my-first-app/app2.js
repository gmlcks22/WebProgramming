const express = require('express');
const app = express();

// 미들웨어 함수
app.use(function(req, res, next) {
  res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
  res.end('<h1>Express Server에서 응답한 결과</h1>');
});
app.listen(500, () => {
  console.log('port 500');
});