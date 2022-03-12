const array = [34, 84, 3,8, 12, 62, 56];
const students = [
    {name: "kokil apa", age: 32, color: "forsha"},
    {name: "chick vai", age: 22, color: "kala"},
    {name: "john vai", age: 28, color: "kala"},
    {name: "abdul chacha", age: 62, color: "shayam"},
    {name: "Pickachu shaheb", age: 25, color: "forsha"},
];

const showName = object => {
    const age = object.age + 23; 
    console.log(object.name+"'s age is", age);
}
// to make an array of the values of color property
const colors = students.map(student => student.color);
console.log(colors); 
students.forEach(student => showName(student));