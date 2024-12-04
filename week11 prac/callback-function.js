const sum = (a, b) => a + b;
const printResult = (result) => {
  console.log(`Result is ${result}.`);
};
const calculationAndPrint = (calculationResult, callback) => {
  callback(calculationResult);
};
calculationAndPrint(sum(10, 20), printResult);