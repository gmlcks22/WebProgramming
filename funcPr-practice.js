const cart = [
  { item: "노트북", price: 1200000, quantity: 1 },
  { item: "마우스", price: 35000, quantity: 2 },
  { item: "키보드", price: 89900, quantity: 1 }
];

// classical 방식
let totalPrice = 0;
for (let i=0; i<cart.length; i++) {
  totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`total price = ${totalPrice}`);


// for.Each() 활용
totalPrice = 0;
cart.forEach(goods => {
  totalPrice += goods.price * goods.quantity;
});
console.log(`total price = ${totalPrice}`);

// reduce() 활용
totalPrice = cart.reduce(
  (sum, goods) => sum + goods.price * goods.quantity, 0
);
console.log(`total price = ${totalPrice}`);


// map() 활용
const itemTotals = cart.map(
  goods => 
    ({item: goods.item, total: goods.price*goods.quantity})
  );
console.log('total = ' + itemTotals);

console.log('total = ', itemTotals);

// function a() {
//   return {name: 'ksd', aff: 'hansung'};
// }
// console.log(a());

// map() 활용 2
const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(
  name => name.toUpperCase()
);
console.log(`upper cased names: ${uppercasedNames}`);

const capitalStartnames = names.map(
  name => name[0].toUpperCase() + name.substring(1)
);
console.log(`capital Start names: ${capitalStartnames}`)