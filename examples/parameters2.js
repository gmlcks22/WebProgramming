function showMessage1(message, from) {
  console.log(`${message} by ${from}`);
}

function showMessage2(message, from) {
  if(from == undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}

function showMessage3(message, from='unknown'){
  console.log(`${message} by ${from}`);
}

showMessage1('Hi!');
showMessage2('Hi!');
showMessage3('Hi!');