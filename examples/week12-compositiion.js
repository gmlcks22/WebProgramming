const add2AndSquare = (num) => {
  num = num + 2;
  num *= num;
  return num;
};
add2AndSquare(3);

const add2 = (num) => num + 2;
const square = (num) => num*num;
const multiply3 = (num) => num*3;
const add2AndSquare2 = (num) => square(add2(num));

console.log(add2AndSquare(3));
console.log(add2AndSquare2(3));

const compose = (func1, func2) => val =>func2(func1(val));
const add2_mul3 = compose(add2, multiply3);
console.log(add2_mul3(5));