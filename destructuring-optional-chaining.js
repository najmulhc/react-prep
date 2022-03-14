// destructuring 
const numbers = [24, 56];
const [second, first] = [numbers[1], numbers[0]];
console.log(second);
const player ={
    name: "shakib al hasan", 
    batting: "right hand side", 
    bowling: "left hand fast medium",
    position: 3,
    work:  () => [this.name, this.batting]
}
// object destructuring 
const {name, bowling} = player;
console.log(name);