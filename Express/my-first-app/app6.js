const express = require('express');
const app = express();

app.request(function(req, res, next) {
  console.log('첫 번째 미들웨어에서 요청 처리');
  res.redirect("http://hansung.ac.kr"); // 웹 페이지 경로를 강제로 이동시킴
});