const accountId= 12345
let accountEmail="raj@rediffmail.com"
var accountPassword="6788734"
accountCity="Kolkata"
let accountState;

// accounState is undefined if you not give any value
// accountId= 2356   not allowed as it a constant which can't be changed

accountEmail= "anand@google.com"
accountPassword= "878678"
accountCity= "Bengaluru"

/*
Prefer not to use var 
because of issue in block scope and functional scope 
as it always work as global scope  
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
