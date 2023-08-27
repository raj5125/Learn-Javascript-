const score = 400
console.log(score);

const balance = new Number(100)   //by this made it is confirmed a number made
console.log(balance);

console.log(balance.toString.length);  //num converted to string and then lenght find
console.log(balance.toFixed(1));  // after decimal upto which point answer came

const otherNumber = 156.8965
console.log(otherNumber.toPrecision(4));   // round off from start to the number mention

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   //add , according to indian standards to the number

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)