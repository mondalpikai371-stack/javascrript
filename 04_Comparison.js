/*console.log(2 > 1) //greater than
console.log(2 < 1) // less than
console.log(2 >= 1) //greater than or equal to
console.log(2 <= 1) //less than or equal to
console.log(2 == 1) // equal to
console.log(2 != 1) // not equal to
console.log(2 === 1) // strict equal to
console.log(2 !== 1) // strict not equal to
console.log(1=2) // assignment operator*/



/*console.log("2" > 1) //true

console.log("02" > 1) //true

console.log(null == 0) //false
console.log(null > 0) //false
console.log(null < 0) //false
console.log(null >= 0) //true
console.log(null <= 0) //true
console.log(null < 0) //false
console.log(null >= 0) //true
console.log(null <= 0) //true
console.log(null == undefined) //true


/*console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false
console.log(undefined >= 0) //false
console.log(undefined <= 0) //false
console.log(undefined == null) //true
console.log(undefined > null) //false
console.log(undefined < null) //false
console.log(undefined >= null) //false
console.log(undefined <= null) //false*/





// ===


/*console.log("2" === 2) //false
console.log("2" === "2") //true
console.log(2 === 2) //true
console.log(true === 1) //false
console.log(false === 0) //false*/


//console.log("A" != "2A")



/*let value1=9
let value2=11
let value3 = value1+value2

console.log(value3)*/


function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Prevent division by zero
            result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
            break;
        default:
            result = "Error: Invalid operator";
    }

    return result;
}

// Example Usage:
console.log(calculate(10, '+', 5));  // Output: 15
console.log(calculate(20, '-', 8));  // Output: 12
console.log(calculate(4, '*', 25));  // Output: 100
console.log(calculate(12, '/', 3));  // Output: 4
