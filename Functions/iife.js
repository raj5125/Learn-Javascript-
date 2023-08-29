// Immediately Invoked Function Expressions (IIFE) 
// iife syntax--> ()(); 
// semicolon used in syntax when more than one iife used
// for solving the problem of pollution done by the global scope iife is used and also for immediate execution of the function

// Named IIFE
(function namaste(){
    console.log(`DB CONNECTED`);
})();
// arrow used in iife
(  () => {
    console.log(`DB CONNECTED TWO`);
})();

// Unamed iife
// here raj as a parameter passed and name take it as a argument and called then
(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("raj"); 