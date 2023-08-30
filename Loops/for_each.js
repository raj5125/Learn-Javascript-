/*for each loop  ---> mostly use this loop
syntax variable.foreach(function (arg) {}  )  
no name of function is  written only argument can be passed
here function take call back that's why name is not used
*/

const coding = ["swift", "java", "cpp", "py", "javascript"]
coding.forEach(function (lang) {
    console.log(lang);
})

// arrow function in for each
coding.forEach( (lang) => {
    console.log(lang);
})

// by defining function outside
function printMe(lang){
    console.log(lang);
}

coding.forEach(printMe)   //here reference of printMe function passed not function called here so don't use parenthesis

coding.forEach((lang, index, arr) => {
    console.log(lang, index, arr);
})


// use in array of objects
const myAddress = [ 
    {
    state : "Bihar",
    city : "Gaya"
    },
    {
    state : "West Bengal",
    city : "Haldia"
    },
    {
    state : "UP",
    city : "Noida"
    },
    
]

myAddress.forEach( (add) => {
    console.log(add.state);
})