const name = "kalam uddin";
// template string 
const kaj = `${name} has a good voice`;
console.log(kaj);
const seller = {
    nam: 'kabir kaka', 
    goods: "books",
    asset: 120000,
    books: ["kutunjil", "himu mama", "amar bondu rashed ", "gangtoke gondogole"],
    sellBook: function(n){
        return this.books[n];
    }
}

// arrow function 
const coffeeKha = name => console.log(name, " has some coffee to drink");
coffeeKha(name);
coffeeKha(seller.sellBook(0));

const bookCompare = (first, second) => console.log(first, "book is bigger than", second);
bookCompare(seller.sellBook(1), seller.sellBook(2));

// spread operator
const bookgula = seller.books;// will change the origninal array
const spreadBooks = [...seller.books]; // will not change the original array{dot dot is the spread opearator}

bookgula.push("shesher kobita");
console.log(seller.books);
spreadBooks.push("ekattorer dinguli");
console.log(seller.books);

// make a new array from an existing one and add an another element to the new array 
const newArray  = [...seller.books];
newArray.push( "bishad sindhu");
console.log(newArray);