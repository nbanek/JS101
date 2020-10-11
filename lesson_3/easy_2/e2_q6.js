let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flintstones2 = [];

flintstones.forEach(item => {
  flintstones2 = flintstones2.concat(item);
});

console.log(flintstones2);