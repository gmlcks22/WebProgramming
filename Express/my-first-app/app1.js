const express = require('express'); // express 요청

const app = express(); // web application 을 만듦
app.set('port', 500);
app.use(function(req, res, next){ // app을 사용해서 함수 사용
  res.status(200).send(`<h1>Hi ! Welcome</h1>
    <h1>Hello World!!!</h1>`);
});

app.listen(app.get('port'), () => {
  console.log('Server listening on port 500');
})