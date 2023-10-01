let a = 10; // block scope
const b = 20;
var c = 30   // var is not function scoped and should avoid to use var

console.log(a);
console.log(b);
console.log(c)

// nested function

function one(){
    const username = "vivek"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website)

    two()
}
// one()
