// truthy
if (true){
    //true is allways true if it 
}
if ({}){
    // empty object is truthy
}
if ([]){
    // empty array 
}
if (42){
    // any kind of number(except 0)
}
if ("0"){
    // 0 (if it is in a string)
}
if ("false"){
    // false in a string
}
if (new Date()){
    // date
}
if (-42){
    // negative number is truthy
}
if (12n){
    // bigInt is truthy
}
if (3.14){
    // number
}
if (-3.14){
    // negative number 
}
if (Infinity){
    // infinity (considered as number)
}
if (-Infinity){
    // negative infinity(considered as negative number)
}

// falsy
if (false){
    // false itself is falsy if it is not in a string
}
if (null){
    // null is falsy
}
if (undefined){
    // undifined is falsy
}
if (0){
    // 0 is falsy
}
if (-0){
    // negative but 0
}
if (0n){
    // big int 0
}
if (NaN){
    // not a number is falsy
}
if (""){
    // empty string is falsy
}