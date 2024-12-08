// function showMessage(message, from) {
//   console.log(`${message} by ${from}`);
// }

function showMessage(message, from) {
  if (from == undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}

// function showMessage(message, from) {
//   console.log(`${message} by ${from}`);
// }

showMessage('Hi!');
