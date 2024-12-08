const birthYear = []
const ages = [];
for(let i=0; i<birthYear.length;i++){
  let age = 2024 - birthYear[i];
  ages.push(age);
}

console.log(ages);


const ages2 = birthYear.map(y => 2024-y);

console.log(ages2); 