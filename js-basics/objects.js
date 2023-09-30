// singelton -> it made through constructor

// object literals
Object.create // constructor method
const myUsers = {} // object

const mySym = Symbol("key1") // defining a symbol


const jsUsers = {
    name: "Vivek",
    age: 18,
    "full name": "Vivek Rajpoot",
    [mySym]: "mykey1",   // to define a symbol we use []
    location: "Jalandhar",
    email: "vivekrajput2515@gmail.com",
    isLoggedIn : false,
    lastLogindays: ["Monday", "Saturday"]
}
console.log(jsUsers.email);
console.log(jsUsers["email"]) // alternate methods
//console.log(jsUsers.full name) // now i can't access full name
console.log(jsUsers["full name"]) // now we can access full name
console.log(jsUsers[mySym]);
console.log(typeof jsUsers[mySym]);

jsUsers.email = "vivekrajpoot01main@gmail.com"  // changing the value of email
// Object.freeze(jsUsers)  // now we can't  change the value in the jsUsers object
jsUsers.email = "vivekrajput2515@gmail.com"; // now i can't able to change the email because it is freeze
console.log(jsUsers);

jsUsers.greeting = function(){
    console.log("Hello Ram Ram Bhaiyo");
}

jsUsers.greeting2 = function(){
    console.log(`Hello js User, ${this["full name"]}`)
}
console.log(jsUsers.greeting());
console.log(jsUsers.greeting2());


const tinderUser = new Object() // empty object  -> singelton object
const tinderuser = {}  // empty object  -> non-singleton object

tinderuser.id = "45cv";
tinderuser.name = "rimmy";
tinderuser.isLoggedIn = false;

console.log(tinderuser);

const regularUser = {
    email: "vivek@gmail.com",
    username: {
        userfullname: {
            firstname: "Vivek",
            lastname: "Rajpoot"
        }
    }
}

console.log(regularUser.username.userfullname.firstname)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};
// const obj3 = {obj1, obj2} it will not merge two object but it show obj1 and obj2 in the obj3
const obj3 = Object.assign({}, obj1, obj2, obj4)   // .assign(target, source)
const obj5 = {...obj1, ...obj2, ...obj4};    // spread out method to
console.log(obj3)
console.log(obj5)

// when data came from the databases

const users  = [
    {
        id: 1,
        email: "vivek@gmail.com"
    },
    {
        id: 2,
        email: "roy@gmail.com"
    },
    {

    }
]

console.log(users[1].email);

// in prevoius lines we had tinderUser object let's and check the values
console.log(tinderuser)
// now if we want only the keys of the object tinderuser we can,
console.log(Object.keys(tinderuser));
// and we can also print values for the same
console.log(Object.values(tinderuser));
// we can also convert  every key value into the array by using Object.entries
console.log(Object.entries(tinderuser));

// to check the property present in the object, we can do as
console.log(tinderuser.hasOwnProperty("isLoggedIn"))  // gives value in the boolean


// Objects and destructuring and JSON API

const course = {
    coursename: "JS with chai aur code",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// destructuring in the objects

const {courseInstructor} = course;
const {courseInstructor: instructor} =  course;  // we can also defined as
console.log(courseInstructor)  // output: hitesh
console.log(instructor)   // hitesh


