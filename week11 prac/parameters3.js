function printAll(...args) {
  for (let i=0; i<args.length; i++){
    console.log(args[i]);
  }
  for(const arg of args) {
    console.log(arg);
  }
  args.forEach(arg => console.log(arg));
}
printAll('0', 'dream', "coding", "KSD", 'sung-dong');