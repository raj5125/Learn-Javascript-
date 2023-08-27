// object literals

const mySym = Symbol("key1")
const JsUser={
    name : "Raj",
    "full name" : "Raj Anand",
    [mySym] : "mykey1",     // [ ] bracket used as it properly make a Symbol data type other wise it is a string here
    age : 21,
    location : "Kolkata",
    email : "raj@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);  //better approach use [""]
console.log(JsUser[mySym]);

JsUser.email= "raj@amazon.com"
// Object.freeze(JsUser)   // after using freeze no changes will be done in the object
JsUser.email = "raj@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //this is used to access object elements
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());