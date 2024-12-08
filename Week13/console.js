let result = 0;
console.time('duration1');
for(let i = 1; i<= 100; i++) {
  result += i;
}
console.timeEnd('duration');
console.log('1~100: %d', result);

