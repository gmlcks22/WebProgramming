let globalMessage = 'global';
function printMessage() {
  let message = 'Hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'child';
    console.log(childMessage);
  }
  printAnother();
}
printMessage();