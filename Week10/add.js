onmessage = function (e) {
  let sum = 0;
  let from = parseInt(e.data.from);
  let to = this.parseInt(e.data.to);
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  this.postMessage(sum);Week10/add.js
};
