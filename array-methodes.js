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

// filtering those who are younger than 30
const younger = students.filter(stuedent=> stuedent.age < 35);// returns  all the objects that have the age undear 35
console.log(younger);
const forsha = students.filter(student => student.color == "forsha");
console.log(forsha);
const all = students.filter(stuedent => true);
console.log(all);


// find methode (will give the first item )
const boro = students.find(student => student.age < 60);
console.log(boro);