
// array destructuring
const array = ["abul", "kabul"];
const [name, capital] = array;
console.log(name);

// object destructuring
const student = {
    firstName: "Abdul", 
    lastName: "Kadir",
    roll: 34,
    cgpa: 3.65
}
const {firstName, cgpa} = student;
console.log(firstName);