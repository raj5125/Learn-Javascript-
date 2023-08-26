//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
   
const score = 100           //number    (use typeof to find datatype)
const scoreValue = 100.3    // number

const isLoggedIn = false
const outsideTemp = null     // object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);      // false return

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];     //array
let myObj = {                  // Objects
    name: "hitesh",
    age: 22,
}

const myFunction = function(){  //function
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3