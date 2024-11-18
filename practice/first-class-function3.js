function say(greetings, honorifics) {
  console.log(greetings + " " + honorifics + this.name);
}
let sung = {name: 'Sung Kim'};
let jace = {name: 'Jaehyun Kim'};
say.apply(sung, ["hello!", "Mr. "]);
say.apply(jace, ["hi!", "Boy, "]);
say.call(sung, "hello!", "Mr. ");
say.call(jace, "hi", "Boy, ");