const printHello = () => console.log('Hello');
const printHello2 = () => 'hello2';
const printMessage = (message) => console.log(message);
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

printHello();
console.log(printHello2());
printMessage('message');
console.log(`plus : ${plus(10, 20)}`);
console.log(`minus : ${minus(20, 10)}`);