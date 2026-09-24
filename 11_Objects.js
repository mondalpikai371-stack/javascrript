// singleton // constructor se singleton banega

// object literals


//Object.create

const mySym = Symbol("key1")

const jsuser = {
    name: "pikai",
    "full name": "pikai mondal",
    [mySym]: "mykey1",
    age: 18,
    location: "kolkata",
    email: "pikai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["name"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])


jsuser.email = "pikI@gmail.com"
//Object.freeze(jsuser)
jsuser.email = "pppp"
//console.log(jsuser)



jsuser.greeting = function () {
    console.log("hello pikai")
}

console.log(jsuser.greeting)
console.log(jsuser.greeting())


jsuser.greetingTwo = function () {
    console.log(`hello pikai, ${this.name}`)
}

console.log(jsuser.greetingTwo())
