function longFunningTask() {
  console.log('end');
}
console.log('start');
longFunningTask();
setTimeout(longFunningTask, 0);
console.log('next job');