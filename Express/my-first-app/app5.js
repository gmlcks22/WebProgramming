const express = require('express');
const app = express();

app.use(function(req, res, next){
  console.log('첫 번째 미들웨어에서 요청 처리');
  res.send({name: 'JHC', age: '30'}); // JS 객체, 응답 데이터 보내기
})

app.listen(500);