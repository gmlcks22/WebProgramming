const arr1 = [1, 2, 3];

// push(): 
const arr2 = [];
for(let i=0; i<arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2)

const arr3 = arr1.map(function(item){
  return item*2;
});
console.log(arr3);