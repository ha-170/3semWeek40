// 1) Using existing functions that takes a callback as an argument
console.log("######################################################################");
console.log("EXERCISE 1:");
// a) Using the filter method: 
let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Kasper", "Sofie", "Allan", "Thomas"];
let char = 'a';
let filteredNames = names.filter(names => names.includes(char));
console.log("a) filter method: ");
console.log("The names containing the letter 'a' are: ");
console.log(filteredNames);

// b) Using the map method: 
let reversedNames = names.map(e => e.split("").reverse().join(""));
console.log("\nb) map method: ");
console.log("The names with characters reversed looks like: ");
console.log(reversedNames);
console.log("######################################################################");