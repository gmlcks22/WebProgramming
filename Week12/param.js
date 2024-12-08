function changeValue(val) {
  val = val + 10
  console.log(val);
}

let kval = 10;
console.log(kval);
changeValue(kval);
console.log(kval);

function changeName(obj) {
  obj.name = 'coder';
}

let ksd = {name: 'ksd'};

console.log(ksd);
changeName(ksd);
console.log(ksd);