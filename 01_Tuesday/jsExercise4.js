// 4) Reduce
console.log("######################################################################");
console.log("EXERCISE 4:");

let all = ["Hassan", "Peter", "Carla", "Boline"];
// a)
let allJoin = all.join("#");
console.log("a)");
console.log("Single String from all: ");
console.log(allJoin);

// b)
const numbers = [2, 3, 67, 33];

function sum(accumulator, current){
    return accumulator + current;
}

let result = numbers.reduce(sum);
console.log("\nb)");
console.log("Sum of all numbers: ");
console.log(result);

// c) 
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

function averageAgeFunc (accumulator, member, index) {
    if (index === members.length - 1) {
        return (accumulator + member.age) / members.length;
    }
    return accumulator + member.age;
}

let averageAge = members.reduce(averageAgeFunc,0);
console.log("\nc)");
console.log("The average age of the members is: ");
console.log(averageAge);

// d)
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

const a = {}

function numberOfVotes(a, vote){
    if (a[vote]){
        a[vote]++;
    } else {
        a[vote] = 1;
    }
    return a;
}

let voteResult = votes.reduce(numberOfVotes, {});
console.log("\nd)");
console.log("The election results are: ");
console.log(voteResult); 
console.log("######################################################################");