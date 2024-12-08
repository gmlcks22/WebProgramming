const printYes = function() {
  console.log('yes');
};
const printNo = function print() {
  console.log('no!');
};

function randomQuiz(answer, printYes, printNo) {
  if(answer === 'I love you'){
    printYes();
  }
  else {
    printNo();
  }
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('I love you', printYes, printNo);