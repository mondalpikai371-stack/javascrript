// Primitive Data Types

// 7types : string, number, boolean, null, undefined, symbol, bigint

let age = 25; // number
let name = "Alice"; // string
let isStudent = true; // boolean
let undefinedValue; // undefined
let nullValue = null; // null
let symbolValue = Symbol('description'); // symbol
let bigintValue = 1234567890123456789012345678901234567890n; // bigint



const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // undefined

const id = Symbol('id');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 9007199254740991n;


// Non-Primitive Data Types (Reference Types)

// Array, Objects, Functions



const heros = ["Iron Man", "Spider Man", "Thor", "Hulk"];

let myObj = {
    name: "pikai",
    age: 22,
};



function myFunction(){
    console.log("hello world")
}



console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isStudent); // boolean
console.log(typeof undefinedValue); // undefined
console.log(typeof nullValue); // object
console.log(typeof symbolValue); // symbol
console.log(typeof bigintValue); // bigint
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof outsideTemp); // object
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function
console.log(typeof anotherId); // symbol



// Type of val                     Result
// undefined                       "undefined"
// null                            "object"
// boolean                         "boolean"
// number                          "number"
// bigint                          "bigint"
// string                          "string"
// symbol                          "symbol"
// function                        "function"
// object                          "object"
// Array                           "object"
// Date                            "object"
// RegExp                          "object"
// Error                           "object"
// Map                             "object"
// Set                             "object"
// WeakMap                         "object"
// WeakSet                         "object"
// Promise                         "object"
// ArrayBuffer                     "object"
// DataView                        "object"
// Int8Array                       "object"
// Uint8Array                      "object"
// Uint8ClampedArray                "object"
// Int16Array                      "object"
// Uint16Array                     "object"
// Int32Array                      "object"








//************************************************************************************************************************* */


// Stack(primitive), Heap(Non Primitive) 



let myname = "pikai"

let anothername = myname

anothername = "rdx"

console.log(anothername);
console.log(myname);


let user = {
    email: "pikai@gmail.com",
    upi: "pikai@sbi"
};


let userTwo = user;

userTwo.email = "rdx@gmail.com";

console.log(user.email)
console.log(userTwo.email)