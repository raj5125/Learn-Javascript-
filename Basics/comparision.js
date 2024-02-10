/* same datatypes comparision not any problem */
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


/* diff. datatypes comparision leads to confusion 
also here == , === is equality check while <, >= are
comaparision operators work differently*/

// console.log("2" > 1);     //true as string converted to number and then compared
// console.log("02" > 1);

// avoid these below comparision as it always makes confusion
console.log(null > 0);
console.log(null == 0);        
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === this check datatype also so here string not equal to number that's why it is also called strict check

console.log("2" === 2);     //false
