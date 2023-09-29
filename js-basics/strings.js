const name = "Vivek Rajpoot"
const age = 19

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("Vivek Rajpoot")
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf("v"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-12, 4)
console.log(anotherString)

const newStringOne = "     Vivek     "
console.log(newStringOne)
// trim() is used to remove the extra space that are available in the string
console.log(newStringOne.trim())

const url = "vivekrajpoot.live/vivek%20rajpoot"
console.log(url.replace('%20','-'))

console.log(url.includes('vivek')) // show true
console.log(url.includes('raju'))  // show false

// use split method in string -> it search for the pattern and then split it
const anyString = new String("Oh-hello-sun")
console.log(anyString.split('-'))    // output-> ['oh', 'hello', 'sun' ]