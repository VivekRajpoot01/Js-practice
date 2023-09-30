// array

const myArr = [5,8,9,3,2];
const myHeros = ["Shaktiman", "Naagraj"]

// we can defined array also as
const myArr2 = new Array(0,1,2,3,4)
console.log(myArr[1]);
console.log(myArr2[3])

// array methods

myArr.push(6);
myArr.pop()
console.log(myArr)

// we can also check any number is included in my array or not
console.log(myArr.includes(6))

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // splice make changes in the original array and delete the splice elements from the original array
console.log(myn2)
console.log("C", myArr)


const marverl_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"]

//marverl_heroes.push(dc_heroes);
// console.log(marverl_heroes)
// console.log(marverl_heroes[3][0]); // if i have to find the "superman" in the array then I have to do this

// concat: used to add two or more arrays

const all_heroes = marverl_heroes.concat(dc_heroes);
console.log(all_heroes);

// we also used spread out  to add two or  more arrays

const all_new_heroes =  [...marverl_heroes, ...dc_heroes]  // we can add as many array as we want
console.log(all_new_heroes)   // now we are getting full array by adding them

const another_array = [1,2,3,[4,5,6],7,[1,2,[7,8,9]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // now all the value of another_array are apreaded out into the another_array

console.log(Array.isArray("Vivek"))
console.log(Array.from("Vivek"))  // used to convert into the array
console.log(Array.from({name: "Vivek"})) // interesting case and it coverted into empty array


// convert variables into the array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) // array will be printed with the element 100, 200, 300
