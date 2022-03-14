const array = [1, 4, 4, 5, 8 , 5];
const func = (a, b, c) => a+b+c;
// using array element as parameter is called spread operator
console.log(func(...array));