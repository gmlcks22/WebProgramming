function say(greetings, honorifics) {
  console.log(greetings + " " + honorifics + this.name);
}
let sung = {name: 'Sung Kim'};