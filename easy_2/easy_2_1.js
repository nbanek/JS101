function greetings(array, obj) {
  let name = array.join(' ');
  
  let occupation = Object.values(obj).join(' ');

  return 'Hello ' + name + '! Nice to have a ' + occupation + ' around.';
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.