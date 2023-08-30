/*forof loop 
here iterator is used to iterate same as i in for loop 
and all condition when loop will end and i++ all done automatically */ 

// used in array
const arr = [1, 2, 3, 4, 5]

for (const  num of arr) {   // num is the iterator
    console.log(num);
}
// used in string
const greetings = "Hello World!"
for (const ch of greetings) {
    console.log(`Each char is ${ch}`);
}

// use in Maps
const mpp = new Map()
mpp.set("IN", "India")
mpp.set("USA", "United States of America")
mpp.set("Fr", "France")
mpp.set("IN", "India")
console.log(mpp);

for (const key of mpp) {
    console.log(key);     // this gives whole array type of map
} 

for (const [key, value] of mpp) {
    console.log(key ,":-", value);     // this gives whole array type of map
} 


// for of loop not work on OBJECTS
// const myObject = {
//     username : "raj@google.com",
//     age : 21
// }

// for (const [key, value] of myObject) {
//     console.log(key ,":-", value);
// }