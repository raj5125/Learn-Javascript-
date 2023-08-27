const name ="anand"
const repoCount = 5

// console.log(name + repoCount + " Value");  bad apporoach
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration
const gameName = new String("raj-anand")

console.log(gameName[0]) 
console.log(gameName.__proto__);   //denote that string is a object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,4)  // 4th index not included and string always from 0 not from negative
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //-ve means start from back then go forward
console.log(anotherString);

const newStringOne = "    raj   "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim is used for removing space and new line

const url= "https://raj.com/raj%20anand"

console.log(url.replace('%20', '-'));

console.log(url.includes('avi'));  // check avi is in url or not then return true or false

console.log(gameName.split('-'));  // convert into array and returns array