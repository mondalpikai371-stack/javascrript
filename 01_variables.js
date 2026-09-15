const accountId = 122553
let accountEmail = "mondal09@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

// accountId = 2  // not allowed

accountEmail = "hetc@gmail.com"
accountPassword = "09876"
accountCity = " Hooghly"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);


/*
 prefer not to use var 
 because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

