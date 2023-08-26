// Stack used in primitive data types as here copy made then changes done in that copy not in original variable
let myHomename = "avi"

let anothername = myHomename
anothername = "jsaurcode"

console.log(myHomename);  // print Avi as no change in original variable
console.log(anothername);

// Heap used in non primitive data types as here change in orginal variable

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anand@google.com"

console.log(userOne.email); // changes done in this also by changing in two because two is referring to the same location
console.log(userTwo.email);