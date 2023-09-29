const score = 100
console.log(score); //show output as: 100

const balance = new Number(400)
console.log(balance);  // show output as [Number: 400]

console.log(balance.toString()) // we can conver it to String and now it will show output as -> 400
console.log(balance.toString().length)   // show length as 3

// Fixed
const first = 100.2598
console.log(first.toFixed(2))  // show output as 100.26 used to round off the value

// Precision -> used to fixed the first digits of numbers means in how many digit you want the number

const otherNumber = 15.235812
console.log(otherNumber.toPrecision(4)) // output: 15.24 and showing only 4 digits in the number

// we can convert number into the locale string like 100000 -> 1,00,000

const hundreds  = 10000000;
console.log(hundreds.toLocaleString('en-IN')) // output as 1,00,00,000




// -----------------*****MATHS*******------------------

console.log(Math);
console.log(Math.abs(-7)) // output: 7
console.log(Math.round(3.4)) //  output: 3
console.log(Math.ceil(4.2)) // show upper value output: 5
console.log(Math.floor(4.2)) // show lower valur output: 4

console.log(Math.min(44,5,1,69,78,4)) // find minimum value output: 1
console.log(Math.max(45,99,44,1,28,72)) // show max value output: 99

console.log(Math.random())  // show random values between 0 and 1
console.log((Math.random()*10) +1) // show values b/w 1 and 10

console.log(Math.floor((Math.random()*10)+1)) // values getting between 1 and 10

// if we want to get random number between 10 and 20 then

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
