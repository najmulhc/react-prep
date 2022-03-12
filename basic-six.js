// variaable declaretion
var variableName = "value of the variable";
const constant = "you can not change the value of a constant";
let blockScope = 233;
//conditional statements
if(blockScope === 233){
    console.log("it is 233");
}
else{
    console.log("it is not 233");
}
// array
const numbers = [4,66,778];
// length, index , push pop , 

// loop 
for(let i = 0; i<= numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
// funtion
function multiply(a, b){
    return a*b;
}
// object 
const student = {
    name: "Salim udding",
    roll: 12456,
    isGood: true,
    friends: ["kalam", "balam"],

}
// access property
console.log(student.roll);
console.log(student["roll"]);
const nameVar = "name";
console.log(student[nameVar])