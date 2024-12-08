const express = require('express');
const app = express();

app.use(function(req,res,next) {
  console.log('FirstMiddleware ...');
  req.user = 'JHC';
  next();
});

app.use(function(req,res,next) {
  console.log('Second Middleware ...');
  res.status(200).send(`<h1>${req.user} responds at Express Server</h1>`);
  next();
});

app.use((req, res, next)=>{
  console.log('Third Middleware');
  next();
},
(req,res,next) => {
  console.log('Fourth Middleware');
});

app.listen(500);