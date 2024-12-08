var v0 = 'v0';
let l0 = 'l0';
console.log(v0, l0);
function fn1() {
  v0 = 'fn1-v0';
  l0 = 'fn1-l0';
  console.log(v0, l0);
}
fn1();
console.log(v0, l0);

function fn2() {
  var v0 = 'fn2-v0';
  let l0 = 'fn2-l0';
  console.log(v0, l0);
}
fn2();
console.log(v0, l0);

{
  var v0 = 'block-v0';
  let l0 = 'block=l0';
  console.log(v0, l0);
}
console.log(v0, l0);
