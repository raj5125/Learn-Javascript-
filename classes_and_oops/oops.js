const user = {
    username : "raj",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}
/* value overwrite here of usertwo on userone
const userone = User("raj", 12, true)
const usertwo = User("javascript", 11, false)
console.log(userone) */

// new is used to solve the problem of overwrite
const userone = new User("raj", 12, true)
const usertwo = new User("javascript", 11, false)
// console.log(userone)
console.log(userone.constructor)
console.log(usertwo)