const name = "pikai"
const repoCount = 50
//console.log(name + repoCount + " value" )

console.log(`hello my name is ${name} and I have ${repoCount}`)


const gameName = new String('pikai')

console.log(gameName[0]) // p
console.log(gameName.__proto__)
console.log(gameName.length) // 5
console.log(gameName.toUpperCase()) // PIKAI

console.log(gameName.toLowerCase()) // pikai
console.log(gameName.charAt(2)) // p
console.log(gameName.indexOf('i')) // 1
console.log(gameName.lastIndexOf('i')) // 4
console.log(gameName.includes('p')) // true
console.log(gameName.startsWith('p')) // true
console.log(gameName.endsWith('i')) // true



const newString = gameName.substring(0, 3)
console.log(newString)


const anotherString = gameName.slice(-5, 4)
console.log(anotherString)


const newStringOne = "   pikai   "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://www.pikai.com"
console.log(url.replace('pikai', 'pikachu'))

console.log(url.includes('pikai')) // true
console.log(url.includes('pikachu')) // false



console.log(gameName.split('')) // ['p', 'i', 'k', 'a', 'i']
console.log(gameName.split('_')) // ['pikai']

//methods of string