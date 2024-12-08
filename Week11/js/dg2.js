function sum(num) {
  let total = 0;
  for(let i=0; i<num; i++) {
    totoal += i;
    printTotal(totoal);
  }
  return total;
}
function printTotal(num) {
  console.log(`total: ${num}`);
}

const result = sum(2);
console.log(result);