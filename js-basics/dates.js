// Date
// Date is a object

let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(myDate.getTimezoneOffset())

let myCreateDate = new Date(2023,0,25)
console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime())

console.log(Math.floor(Date.now()/1000)) // now we time in seconds

let newDate = new Date()
console.log(newDate.getDate())
