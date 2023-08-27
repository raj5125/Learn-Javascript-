function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

sayMyName()

// function addTwoNumber(n1, n2){
//     console.log(n1+ n2);
// }

// addTwoNumber(3, 5)

function addTwoNumber(number1, number2){
    let result = number1 +number2 
    // console.log(number1+ number2);
    return result
}

const result = addTwoNumber(3, 5)
console.log("Result: ", result);


function loginUserMessage(username = "sam"){  // sam is a default value if default value written then it never go in the if condition
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("raj"))
console.log(loginUserMessage())  // default value work if not default written then value is undefined
// console.log(loginUserMessage(""))  //empty then it is also undefined 



// ... is here rest operator used for storing multiple values

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 500, 2000));

// pass object in the function
const user = {
    username : "raj",
    price : 299
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)   // object variable(name) pass 
/*
handleObject({          // object pass directly
    username: "sam",
    price: 399
})
*/

//pass array in the fucntion
const myNewArray = [200, 400, 100, 600]

function handleArray(getarray){
    // console.log(getarray[1]);
    return getarray[1]
}

console.log(handleArray(myNewArray))  // pass array variable
// console.log(handleArray([200, 400, 500, 1000]));   //pass directly