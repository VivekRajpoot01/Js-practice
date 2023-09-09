let score = "33abc"; // now score is storing a string

console.log(typeof score) // showing string as a type

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // it will be showing Number but this is not correct
// now if we print the value of score
console.log(valueInNumber) // it is showing NaN means Not a Number

// "33" -> 33
// "33abc" -> NaN
// true--> 1; false-> 0

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)   // showing true it means we can change 0 and 1 to the boolean number
// 1-> true and 0-> false
// "" -> false  // empty string showing false value
// "Vivek Rajpoot" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)  // it will showing 33 but type will be changes from number to string
console.log(typeof stringNumber) // showing string as a type
