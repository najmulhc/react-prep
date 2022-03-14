const hero = {
    // name: "Hero Alom",
    // nayika:{
    //     name:"I dont know who"
    // }
}
// ye he aam jindegi 
console.log(hero.nayika.name);// will show error if there is no nayika object in the object
// ye hai mentos wala zindegi
console.log(hero?.nayika?.name);// will not show any error even if there is not nayika object for hero alom

// optional chaining allows you to access any property of an object even if it does not exists