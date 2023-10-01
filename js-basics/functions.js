function loginUserMessage(username = "New User"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Vivek"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){   // ... -> rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "vivek",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

// getting second value of array through function

const myNewArray = [200, 400, 600, 800];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
addone(5)
function addone(num){
    return num;
}

const chai = function(){
    let username = "vivek"
    console.log(this.username)  // we can't use 'this' in this function because it can be used only in arrow function and object
}

// arrow function

const chai = () => {
    let username = "vivek"
    console.log(this)
}
chai()


const addTwo = (num1, num2) => {  // explit return -> we use return in this
    return num1 + num2
}
console.log(addTwo(3,4))

// implicit return
const addTwo = (num1, num2) => (num1 + num2)

// if we have to return object in implicit function then we have to use parenthesis to cover the object
const addTwo = (num1, num2) => ({username: "vivek"})
