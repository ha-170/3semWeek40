// 3) Getting really comfortable with filter and map
console.log("######################################################################");
console.log("EXERCISE 3:");

let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Kasper", "Sofie", "Allan", "Thomas"];
let char = 'a';
// a) 
let numbers = [1, 3, 5, 10, 11];
let result = numbers.map(function(element, idx) {
    if (idx === numbers.length - 1) {
        return element;
    }
    return element + numbers[idx + 1];
});
console.log("a)");
console.log("Result of the nubers are: ")
console.log(result);

// b)
let links = names.map((element) => {
    return "   " + "<a href=””>" + element + "</a>" + "\n";
}).join('');

let mappingResult = "<nav>" + "\n" + links + "</nav>";
console.log("\nb)");
console.log("Result of the mapping looks like: ")
console.log(mappingResult);

// c)
/*
let persons =  [
    {name:"Hassan",phone:"1234567"}, 
    {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"},
    {name: "Boline", phone: "79345"}];

function createTable (){

}

let table = "<table><thead><tr><th>Name</th><th>Phone</th></thead><tbody>"
            + names.map(element => "<tr><td>" + element.name + "</td><td>" + element.phone + "</td></tr>")
            .join("")
            + "</tbody></table>";
*/

console.log("######################################################################");