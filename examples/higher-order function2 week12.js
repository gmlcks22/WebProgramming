const birthYear = [1975, 1997, 2002, 1995, 1985];

const ages = [];
for(let i = 0; i<birthYear.length; i++) {
  let age = 2024 - birthYear[i];
  ages.push(age);
}
console.log(ages)

const ages2 = birthYear.map(year => 2024-year);
console.log(ages2);