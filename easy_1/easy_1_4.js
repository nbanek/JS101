const SQR_METERS_TO_FEET = 10.7639;

const rlSync = require("readline-sync");

console.log("Enter the room length in meters");
let length = Number(rlSync.prompt());

console.log("Enter the room width in meters");
let width = Number(rlSync.prompt());

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQR_METERS_TO_FEET;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)

