let score = "anand"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*conversion to number
"33" => 33
"33abc" => NaN means not a number but its type is number
true => 1; false => 0
*/

let isLoggedIn = "anand"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*conversion to boolean
1 => true; 0 => false
"" => false
"anand" => true (not empty string)
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);

// conversion to string
