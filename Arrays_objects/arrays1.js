// Arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myCities = ["Gaya", "Patna"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
console.log(typeof myArr);

//Arrays methods
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)  // add 9 at 0th index and shift all array elements bad approach
myArr.shift()  //delete from start
console.log(myArr);

console.log(myArr.includes(9)); //check the element is available or not return boolean value
console.log(myArr.indexOf(3));

const newArr = myArr.join()  //copy all the array elements into string
console.log(myArr);
console.log(typeof newArr);


/* slice , splice */

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //slice take elements from 1 to 3-1

console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1, 3) //splice take all elements [1,3] but it manipulates(changes) the array as it removes the elements at index[1, 3]
console.log(myn2);
console.log("C ", myArr);