// first we have to create promise then we can consume it resolve and reject means promise completed haan ya na
const promiseOne = new Promise(function(resolve, reject){  // storing in variable is not necessary 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})
// first async task complete then resolve execute then promise consumed
// In promise consumption then is connected when the resolve executed
promiseOne.then(function () { 
    console.log('Promise is consumed');
})

// without storing in variable
new Promise(function(resolve, reject){   
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function () { 
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve({username: "cpp", email: "cpp@gmail.com"})
    }, 1000)
})
// resolve used to pass the user details
promiseThree.then(function (user) {
    console.log(user);
})

// learn reject and chaining of then, catch and more
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username: "raj", email: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// if error is true then reject executed and then user not printed then catch is used to check error then finally used for task completed
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {         
    console.log(username);
}).catch(function(error){    // because error is coming and rejection is used that's why i have to use catch also
    console.log(error);
}).finally(() => console.log('Promise is either resolved or rejected '))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username: "raj", email: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// other method of then, catch by try,catch 
// async method is used to consume promise in a simple syntax and async call return a promise
// if not wrapped in try catch then there is a chance of failure
async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()


async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data) 
    }
    catch(error){
        console.log("E:", error);
    }
}
getAllUsers()

fetch('')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})