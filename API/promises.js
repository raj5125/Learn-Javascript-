// first we have to create promise then we can consume it resolve and reject means promise completed haan ya na
const promiseOne = new Promise(function(resolve, reject){  // storing in variable is not necessary 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

// In promise consumption then is connected when the resolve executed
promiseOne.then(function () { 
    console.log('Promise is consumed');
})