// this is used to access the variable inside the object and only this represent all the context(variables and functions) of the object (when used inside object)
const user = {
    username : 'raj',
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "anand"
user.welcomeMessage()

console.log(this);   // prints empty objects if directly use

// function chai(){
//     let username = "raj"
//     console.log(this);   // many things given by this when used inside function
//     // console.log(this.username);  // gives undefined as it can't identify the variable
// }

// chai()

// const chai = function(){
//     let username = "raj"
//     console.log(this.username);  // prints undefined
// }

/*   --------------------arrow ----------------------            */
const chai = () => {
    let username = "raj"
    // console.log(this);    //prints empty objects
    console.log(this.username);  //prints undefined
}
chai()

// 1st method (Explicit) -> if curly bracket used after arrow return use is must 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//2nd method (Implicit ) -> if curly bracket not used then parenthesis used
// const addTwo = (num1, num2) => num1 +num2
// const addTwo = (num1, num2) => (num1 +num2)
const addTwo = (num1, num2) => ({username: "raj"})

console.log(addTwo(3, 4));