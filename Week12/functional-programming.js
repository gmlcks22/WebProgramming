let glob = 10;
let add = a => glob + a;

console.log(add(10));
console.log('glob = ', glob);

let add2 = a => {
  glob = 100;
  return glob + a;
}
add2(10);

console.log(add(10));
console.log('glob = ', glob);