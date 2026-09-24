//const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "234abc"
tinderuser.name = "pikai"
tinderuser.isLoggedIn = false


//console.log(tinderuser)


const regularuser = {
    email: "oukai.gmail.com",
    fullname: {
        userfullname: {
            firstname: "pikai",
            lastname: "modal"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2, ...obj4}
//console.log(obj3)


const user = [
    {
        id:1,
        email: "pikai@oij"
    },
    {

    },
    {

    },

]

user[1].email

console.log(tinderuser)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))


console.log(tinderuser.hasOwnProperty('isLoggedIn'))
console.log(tinderuser.hasOwnProperty('isLogged'))