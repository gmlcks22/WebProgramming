const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const static = require('serve-static');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, ''))); // 파일의 위치 지정

app.use((req,res,next) =>{
  const paramId = req.body.id || req.query.id;
  const paramPassword = req.body.password || req.query.password;

  res.status(200).send(
    `<h1>서버에서 응답한 경과</h1>
    <div><p>param id : ${paramId}</p></div>
    <div><p>param password : ${paramPassword}</p></div>
    <br><br><a href="/login1.html"> 로그인 페이지로 돌아가기</a>
    `);
  });

app.listen(500);