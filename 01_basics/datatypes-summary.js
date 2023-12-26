//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "bitu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myName = "Iswar ch Rana";
let myName2 = myName ;
myName2 = "bitu";

// This will give two different values as in this case the memory alocation is in stack and if we assign any value then it makes the copy of it

console.log(myName);
console.log(myName2);


let userOne = {
    name : "Hitesh" ,
    email : "bitu@gmail.com"
};

let userTwo = userOne ;

userTwo.name = "Bitu" ;
console.log(userOne.name); // Output Bitu
console.log(userTwo.name); // Output Bitu