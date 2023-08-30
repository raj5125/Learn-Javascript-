// for in loop
// used in object
const myObject = {
    swift : "swift by apple",
    rb : "ruby",
    cpp : "C++",
    js : "javascript"
}

for (const key in myObject) {    // key is key and myObject[key] is the value
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// used in array
const progamlang = ["swift", "java", "cpp", "py", "javascript"]
for (const key in progamlang) {   //key of array is index
  console.log(progamlang[key]);
}


// map not works in for in as it is not iterable
const mpp = new Map()
mpp.set("IN", "India")
mpp.set("USA", "United States of America")
mpp.set("Fr", "France")
mpp.set("IN", "India")
console.log(mpp);

// for (const [key, value] in mpp) {
//     console.log(key, ":-", value);
// }