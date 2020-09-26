const SQR_METERS_TO_FEET = 10.7639;

const rlSync = require("readline-sync");

console.log("Choose the measurement units: feet or meters");
let choice = rlSync.prompt();

console.log("Enter the room length");
let length = Number(rlSync.prompt());

console.log("Enter the room width");
let width = Number(rlSync.prompt());

let area = length * width;
let areaInFeet = area * SQR_METERS_TO_FEET;
let areaInMeters = area / SQR_METERS_TO_FEET;

if (choice === 'feet') {
  console.log(`The area of the room is ${area.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`)
} else if (choice === 'meters') {
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)
}





