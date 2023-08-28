//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "anand"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   // error as local cope accessing outside

     two()
}

one()

if (true) {
    const username = "anand"
    if (username === "anand") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))    //  in this function call done before declaration of function also

function addone(num){
    return num + 1
}



// addTwo(5)                   // wrong as function call in this method is not done before function declaration
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))