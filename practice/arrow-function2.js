function printHello() {
  console.log('hello');
}
printHello();

const printBye = () => console.log('Bye');
printBye();

const add1 = function (x, y) {
  return x + y;
};
const add2 = (x, y) => {
  return x + y;
};
const add3 = (x, y) => x + y;
const square = (x) => x ** 2;
const square2 = square;

console.log(add1(1, 2), add2(1, 2), add3(1, 2), square(3), square2(4));
