// function greet(greeting, name) {
//   console.log(greeting + "," + name);
// }

// greet('hello', 'sung-dong');
// greet('hello', 'world');

function greet(greeting) {
  return function(name) {
    console.log(greeting + "," + name);
  }
}  
//or
const greet = greeting => name => console.log(greeting + "," +name);
//

let hello = greet('hello');
hello('sung-dong');
hello("world");
hello('student');

let good_morning = greet('good morning');
good_morning('sung-dong');