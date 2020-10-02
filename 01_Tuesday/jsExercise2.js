// 2) Implement user defined functions that take callbacks as an argument
console.log("######################################################################");
console.log("EXERCISE 2:");
// a) myFilter: 
let names = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Kasper", "Sofie", "Allan", "Thomas"];
let char = 'a';

function myFilter(array, callback){
    return callback(array);
}

function cbForFilter(tempArray){
    let resultArray = [];
    tempArray.forEach(element => {
        if (element.includes(char)){
            resultArray.push(element);
        }
    });
    return resultArray;
}
console.log("a) myFilter method: ");
console.log("The names containing the letter 'a' are: ");
console.log(myFilter(names, cbForFilter));

// b) myMap: 
/*
function myMap(array, callback){
    return callback(array);
}

function cbForMap(tempArray){
    let resultArray = [];
    tempArray,forEach(element => {
        
    })
    return resultArray;
}
console.log(myMap(names, cbForFilter));
*/

console.log("######################################################################");