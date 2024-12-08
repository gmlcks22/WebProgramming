onmessage = function (e) {
  let result = 0;
  let first = parseInt(e.data.first);
  let second = parseInt(e.data.second);
  result = first * second;

  postMessage(result);
};
